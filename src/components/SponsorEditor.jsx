import React, { useState, useEffect, useRef } from "react";
import { useText } from "../context/TextContext";
import { useLocation } from "react-router-dom";
import { db, storage } from "../firebase/config";
import {
  ref,
  uploadBytes,
  getDownloadURL,
  deleteObject,
} from "firebase/storage";
import {
  collection,
  doc,
  setDoc,
  getDocs,
  getDoc,
  deleteDoc,
} from "firebase/firestore";

const SponsorEditor = ({ location }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedElement, setSelectedElement] = useState(null);
  const [sponsors, setSponsors] = useState([]);
  const [newSponsor, setNewSponsor] = useState({
    imageUrl: "",
    link: "",
    location: "",
  });
  const [uploading, setUploading] = useState(false);
  const [isLocalPartners, setIsLocalPartners] = useState(false);
  const { isAdmin } = useText();
  const currentLocation = useLocation();
  const fileInputRef = useRef(null);
  const modalRef = useRef(null);
  const sponsorsCollection = collection(db, "sponsors");

  // Determine if we're on a location page that should show local partners
  const currentPage = currentLocation.pathname.split("/").pop();
  const locationPages = ["salen", "ulricehamn", "hemsedal", "kolmarden"];
  const currentLocationName = locationPages.includes(currentPage)
    ? currentPage
    : "";

  useEffect(() => {
    loadSponsors();
  }, [currentLocationName, isLocalPartners]);

  useEffect(() => {
    // Check if we're editing local partners based on the element clicked
    if (selectedElement && selectedElement.closest(".sponsors-section")) {
      setIsLocalPartners(true);
      setNewSponsor((prev) => ({ ...prev, location: currentLocationName }));
    } else {
      setIsLocalPartners(false);
      setNewSponsor((prev) => ({ ...prev, location: "" }));
    }
  }, [selectedElement, currentLocationName]);

  useEffect(() => {
    if (!isAdmin) return;

    // Add edit buttons to both global sponsors and local partners sections
    const addEditButton = (selector, buttonId, buttonText, isLocal = false) => {
      const heading = document.querySelector(selector);
      if (!heading) return;

      // Remove any existing edit button first
      const existingButton = document.querySelector(`#${buttonId}`);
      if (existingButton) {
        existingButton.remove();
      }

      // Create edit button
      const editButton = document.createElement("button");
      editButton.id = buttonId;
      editButton.className = "admin-edit-button";
      editButton.textContent = buttonText;
      editButton.style.marginLeft = "10px";
      editButton.style.padding = "5px 10px";
      editButton.style.backgroundColor = "#384c87";
      editButton.style.color = "white";
      editButton.style.border = "none";
      editButton.style.borderRadius = "4px";
      editButton.style.cursor = "pointer";
      editButton.style.whiteSpace = "nowrap";

      // Add hover effect
      editButton.addEventListener("mouseenter", () => {
        editButton.style.backgroundColor = "#4f639e";
      });

      editButton.addEventListener("mouseleave", () => {
        editButton.style.backgroundColor = "#384c87";
      });

      // Add click handler
      editButton.addEventListener("click", () => {
        setIsLocalPartners(isLocal);
        if (isLocal) {
          setNewSponsor((prev) => ({ ...prev, location: currentLocationName }));
        } else {
          setNewSponsor((prev) => ({ ...prev, location: "" }));
        }
        setShowModal(true);
      });

      // Append button to heading
      heading.appendChild(editButton);
    };

    // Add edit button for global sponsors in footer
    addEditButton(
      "#sponsors-section",
      "sponsor-edit-button",
      "Edit Sponsors",
      false
    );

    // Add edit button for local partners if we're on a location page
    if (currentLocationName) {
      addEditButton(
        ".sponsors-title",
        "local-sponsor-edit-button",
        "Edit Local Partners",
        true
      );
    }

    return () => {
      // Clean up
      const globalButton = document.querySelector("#sponsor-edit-button");
      if (globalButton) {
        globalButton.remove();
      }

      const localButton = document.querySelector("#local-sponsor-edit-button");
      if (localButton) {
        localButton.remove();
      }
    };
  }, [isAdmin, currentLocationName]);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleClickOutside = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      handleClose();
    }
  };

  const handleClose = () => {
    setShowModal(false);
    setSelectedElement(null);
    setNewSponsor({ imageUrl: "", link: "" });
  };

  const loadSponsors = async () => {
    try {
      const sponsorsSnapshot = await getDocs(sponsorsCollection);
      let sponsorsData = sponsorsSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      // Filter sponsors based on whether we're showing local partners or global sponsors
      if (isLocalPartners && currentLocationName) {
        // Show only sponsors for this specific location
        sponsorsData = sponsorsData.filter(
          (sponsor) => sponsor.location === currentLocationName
        );
      } else {
        // Show only global sponsors (those with no location)
        sponsorsData = sponsorsData.filter((sponsor) => !sponsor.location);
      }

      setSponsors(sponsorsData);
      displaySponsors(sponsorsData);
    } catch (error) {
      console.error("Error loading sponsors:", error);
    }
  };

  const displaySponsors = (sponsorsData) => {
    // Determine which container to use based on whether we're showing local partners or global sponsors
    let container;

    if (isLocalPartners && currentLocationName) {
      // For local partners, look for the sponsors container in the location page
      container = document.querySelector(
        ".sponsors-section .sponsors-container"
      );
    } else {
      // For global sponsors, use the sponsors grid in the footer
      container = document.querySelector(".sponsors-grid");
    }

    if (!container) return;

    // Clear existing sponsors
    container.innerHTML = "";

    // Add each sponsor to the container
    sponsorsData.forEach((sponsor) => {
      if (!sponsor.imageUrl) return;

      // Create sponsor item
      const sponsorItem = document.createElement("div");

      // Use appropriate class based on container type
      if (isLocalPartners) {
        sponsorItem.className = "s-sponsor-logo side-logo";
      } else {
        sponsorItem.className = "sponsor-item";
      }

      // Create image element
      const imgElement = document.createElement("img");
      imgElement.src = sponsor.imageUrl;
      imgElement.alt = sponsor.name || "Sponsor";

      if (isLocalPartners) {
        // No specific class for local partner images
      } else {
        imgElement.className = "sponsor-logo";
      }

      // If there's a link, wrap the image in an anchor tag
      if (sponsor.link) {
        const linkElement = document.createElement("a");
        linkElement.href = sponsor.link.startsWith("http")
          ? sponsor.link
          : `https://${sponsor.link}`;
        linkElement.target = "_blank";
        linkElement.rel = "noopener noreferrer";
        linkElement.appendChild(imgElement);
        sponsorItem.appendChild(linkElement);
      } else {
        sponsorItem.appendChild(imgElement);
      }

      // Add to container
      container.appendChild(sponsorItem);
    });
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      uploadImage(e.target.files[0]);
    }
  };

  const uploadImage = async (file) => {
    if (!file) return;

    setUploading(true);

    try {
      // Generate a completely new filename without using the original name at all
      const timestamp = Date.now();
      const fileExtension = file.name ? file.name.split(".").pop() : "jpg";
      const newFileName = `sponsor_${timestamp}.${fileExtension}`;
      // Use the exact same path format that works in AdEditor
      const storageRef = ref(
        storage,
        `gs://aimchallange-67039.firebasestorage.app/background-images/${newFileName}`
      );

      console.log("Uploading sponsor image with new filename:", newFileName);

      // Upload the image
      await uploadBytes(storageRef, file);

      // Get the download URL
      const downloadURL = await getDownloadURL(storageRef);

      // Update state with the new image URL
      setNewSponsor((prev) => ({ ...prev, imageUrl: downloadURL }));
    } catch (error) {
      console.error("Error uploading image:", error);
    } finally {
      setUploading(false);
    }
  };

  const handleAddSponsor = async () => {
    console.log("Add Sponsor button clicked");
    if (!newSponsor.imageUrl) {
      console.log("No image URL provided");
      return;
    }

    try {
      console.log("Adding sponsor with data:", newSponsor);

      // Create a new document in the sponsors collection
      const newSponsorRef = doc(sponsorsCollection);
      const sponsorData = {
        ...newSponsor,
        // Include location information if we're adding a local partner
        location: isLocalPartners ? currentLocationName : "",
        createdAt: new Date().toISOString(),
      };

      await setDoc(newSponsorRef, sponsorData);
      console.log("Sponsor added to Firestore with ID:", newSponsorRef.id);

      // Update local state
      const updatedSponsors = [
        ...sponsors,
        { id: newSponsorRef.id, ...sponsorData },
      ];
      setSponsors(updatedSponsors);

      // Display updated sponsors
      displaySponsors(updatedSponsors);

      // Reset form
      setNewSponsor({
        imageUrl: "",
        link: "",
        location: isLocalPartners ? currentLocationName : "",
      });
      console.log("Form reset, sponsor added successfully");
    } catch (error) {
      console.error("Error adding sponsor:", error);
    }
  };

  const handleRemoveSponsor = async (index) => {
    try {
      if (index < 0 || index >= sponsors.length) {
        return;
      }

      const sponsorToRemove = sponsors[index];

      if (!sponsorToRemove || !sponsorToRemove.id) {
        return;
      }

      // Get the sponsor to find the image URL
      const sponsorDocRef = doc(sponsorsCollection, sponsorToRemove.id);
      const sponsorDoc = await getDoc(sponsorDocRef);

      if (sponsorDoc.exists()) {
        const sponsorData = sponsorDoc.data();
        console.log("Found sponsor document:", sponsorData);

        // First, try to delete the image from storage
        if (sponsorData.imageUrl) {
          try {
            const imageFileName = extractFilenameFromURL(sponsorData.imageUrl);

            if (imageFileName) {
              // Use the exact same path format that works in AdEditor
              const imageRef = ref(
                storage,
                `gs://aimchallange-67039.firebasestorage.app/background-images/${imageFileName}`
              );
              await deleteObject(imageRef);
            }
          } catch (imageError) {
            // Error handling for image deletion
            console.error("Error deleting image:", imageError);
          }
        }

        // Then completely delete the document from Firestore
        await deleteDoc(sponsorDocRef);

        // Update state immediately
        const updatedSponsors = [...sponsors];
        updatedSponsors.splice(index, 1);
        setSponsors(updatedSponsors);

        // Immediately update the display to remove the sponsor
        setTimeout(() => {
          displaySponsors(updatedSponsors);
        }, 100);
      } else {
        console.log("Sponsor document not found");
      }
    } catch (error) {
      console.error("Error removing sponsor:", error);
    }
  };

  const extractFilenameFromURL = (url) => {
    if (!url) return null;

    try {
      // For Firebase Storage URLs, the filename is after the last %2F and before the ?
      if (url.includes("firebasestorage.googleapis.com")) {
        const match = url.match(/%2F([^?]+)/g);
        if (match && match.length > 0) {
          // Get the last match (the filename)
          const lastMatch = match[match.length - 1];
          // Remove the %2F prefix and any query parameters
          const filename = lastMatch.replace("%2F", "").split("?")[0];
          return filename;
        }
      }

      // For URLs with sponsor_ prefix (our custom format), extract directly
      if (url.includes("sponsor_")) {
        const regex = /sponsor_[0-9]+\.[a-zA-Z]+/;
        const match = url.match(regex);
        if (match && match.length > 0) {
          return match[0];
        }
      }

      // For other URLs, just get the last part of the path
      const urlParts = url.split("/");
      const filename = urlParts[urlParts.length - 1].split("?")[0];
      return filename;
    } catch (error) {
      console.error("Error extracting filename:", error);
      return null;
    }
  };

  if (!isAdmin) return null;

  return (
    <>
      {showModal && (
        <div
          className="background-editor-overlay"
          onClick={(e) => {
            // Only close if clicking directly on the overlay, not on its children
            if (e.target === e.currentTarget) {
              handleClose();
            }
          }}
        >
          <div className="background-editor-modal" ref={modalRef}>
            <div className="background-editor-modal__header">
              <h2 className="background-editor-modal__title">
                {isLocalPartners
                  ? `Edit ${
                      currentLocationName.charAt(0).toUpperCase() +
                      currentLocationName.slice(1)
                    } Partners`
                  : "Edit Global Sponsors"}
              </h2>
              <button
                className="background-editor-modal__close"
                onClick={handleClose}
              >
                &times;
              </button>
            </div>

            <div className="background-editor-modal__body">
              <h3 className="background-editor-modal__subtitle">
                Current Sponsors
              </h3>
              <div className="background-editor-modal__ad-list">
                {sponsors.length > 0 ? (
                  sponsors.map((sponsor, index) => (
                    <div
                      key={index}
                      className="background-editor-modal__ad-item"
                    >
                      <img
                        src={sponsor.imageUrl}
                        alt={`Sponsor ${index + 1}`}
                        className="background-editor-modal__ad-image"
                      />
                      <div className="background-editor-modal__ad-details">
                        <p className="background-editor-modal__ad-link">
                          {sponsor.link ? (
                            <a
                              href={sponsor.link}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              {sponsor.link}
                            </a>
                          ) : (
                            "No link"
                          )}
                        </p>
                        <button
                          onClick={() => handleRemoveSponsor(index)}
                          className="background-editor-modal__button background-editor-modal__button--secondary"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  ))
                ) : (
                  <p className="background-editor-modal__empty-message">
                    No sponsors added yet.
                  </p>
                )}
              </div>

              <h3 className="background-editor-modal__subtitle">
                Add New Sponsor
              </h3>
              <div className="background-editor-modal__form">
                <div className="background-editor-modal__form-group">
                  <label className="background-editor-modal__label">
                    Image:
                  </label>
                  <div
                    className="background-editor-modal__image-upload"
                    onClick={() => fileInputRef.current.click()}
                  >
                    {newSponsor.imageUrl ? (
                      <div className="background-editor-modal__image-preview-container">
                        <img
                          src={newSponsor.imageUrl}
                          alt="Preview"
                          className="background-editor-modal__image-preview"
                        />
                      </div>
                    ) : (
                      <div className="background-editor-modal__image-placeholder">
                        Click to upload an image
                      </div>
                    )}
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleFileChange}
                      ref={fileInputRef}
                      className="background-editor-modal__file-input"
                      style={{ display: "none" }}
                    />
                  </div>
                  {uploading && (
                    <p className="background-editor-modal__upload-status">
                      Uploading...
                    </p>
                  )}
                </div>

                <div className="background-editor-modal__form-group">
                  <label className="background-editor-modal__label">
                    Link (optional):
                  </label>
                  <input
                    type="text"
                    value={newSponsor.link}
                    onChange={(e) =>
                      setNewSponsor((prev) => ({
                        ...prev,
                        link: e.target.value,
                      }))
                    }
                    placeholder="https://example.com"
                    className="background-editor-modal__input"
                  />
                </div>
              </div>

              <div className="background-editor-modal__footer">
                <button
                  className="background-editor-modal__button background-editor-modal__button--secondary"
                  onClick={handleClose}
                >
                  Close
                </button>
                <button
                  className="background-editor-modal__button background-editor-modal__button--primary"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    handleAddSponsor();
                  }}
                  disabled={!newSponsor.imageUrl || uploading}
                  type="button"
                >
                  Add Sponsor
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SponsorEditor;
