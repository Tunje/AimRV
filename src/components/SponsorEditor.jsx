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

const SponsorEditor = ({ location, targetId }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedElement, setSelectedElement] = useState(null);
  const [sponsors, setSponsors] = useState([]);
  const [newSponsor, setNewSponsor] = useState({
    imageUrl: "",
    link: "",
    location: "",
  });
  const [uploading, setUploading] = useState(false);
  const { isAdmin } = useText();
  const currentLocation = useLocation();
  const fileInputRef = useRef(null);
  const modalRef = useRef(null);
  const sponsorsCollection = collection(db, "sponsors");

  // Determine if we're on a location page that should show local partners
  // Use the location prop if provided, otherwise determine from URL
  const currentPage = currentLocation.pathname.split("/").pop();
  const locationPages = ["salen", "ulricehamn", "hemsedal", "kolmarden"];
  const currentLocationName = location || (locationPages.includes(currentPage) ? currentPage : "");
  
  // Determine if this is for local partners based on location prop
  const isLocalPartners = !!location;

  useEffect(() => {
    // Load sponsors from Firestore and ensure all images are properly loaded
    const loadSponsors = async () => {
      try {
        console.log("=== LOADING SPONSORS ===");
        console.log("isLocalPartners:", isLocalPartners);
        console.log("currentLocationName:", currentLocationName);
        console.log("location prop:", location);
        
        const sponsorsSnapshot = await getDocs(sponsorsCollection);
        let sponsorsData = sponsorsSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        console.log("All sponsors loaded from Firestore:", sponsorsData.length);
        console.log("All sponsors data:", sponsorsData);

        // Filter sponsors based on whether we're showing local partners or global sponsors
        if (isLocalPartners && currentLocationName) {
          // Show only sponsors for this specific location
          console.log(`Filtering for local sponsors with location: ${currentLocationName}`);
          sponsorsData = sponsorsData.filter(
            (sponsor) => sponsor.location === currentLocationName
          );
          console.log(`Filtered to ${sponsorsData.length} local sponsors for ${currentLocationName}`);
        } else {
          // Show only global sponsors (those with no location)
          console.log("Filtering for global sponsors (no location)");
          sponsorsData = sponsorsData.filter((sponsor) => !sponsor.location);
          console.log(`Filtered to ${sponsorsData.length} global sponsors`);
        }
        console.log("Final filtered sponsors:", sponsorsData);

        // Log all sponsor URLs for debugging
        sponsorsData.forEach((sponsor, index) => {
          console.log(`Sponsor ${index + 1}:`, {
            id: sponsor.id,
            url: sponsor.imageUrl,
            isSVG: sponsor.imageUrl && sponsor.imageUrl.toLowerCase().includes('.svg')
          });
        });

        // Update state with the filtered sponsors
        setSponsors(sponsorsData);
      } catch (error) {
        console.error("Error loading sponsors:", error);
      }
    };

    loadSponsors();
  }, [currentLocationName, isLocalPartners]);

  useEffect(() => {
    // Set the location in newSponsor based on whether this is local partners
    if (isLocalPartners) {
      setNewSponsor((prev) => ({ ...prev, location: currentLocationName }));
    } else {
      setNewSponsor((prev) => ({ ...prev, location: "" }));
    }
  }, [isLocalPartners, currentLocationName]);

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
      // Try to find the h2 inside the sponsors section (it might be wrapped by EditableText)
      const sponsorsSection = document.querySelector('.sponsors-section');
      if (sponsorsSection) {
        const titleElement = sponsorsSection.querySelector('h2.sponsors-title') || 
                            sponsorsSection.querySelector('.sponsors-title h2') ||
                            sponsorsSection.querySelector('h2');
        
        if (titleElement) {
          // Remove any existing edit button first
          const existingButton = document.querySelector('#local-sponsor-edit-button');
          if (existingButton) {
            existingButton.remove();
          }

          // Create edit button
          const editButton = document.createElement("button");
          editButton.id = 'local-sponsor-edit-button';
          editButton.className = "admin-edit-button";
          editButton.textContent = 'Edit Local Partners';
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
            setNewSponsor((prev) => ({ ...prev, location: currentLocationName }));
            setShowModal(true);
          });

          // Append button after the title
          titleElement.parentElement.appendChild(editButton);
        }
      }
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

  // Effect for handling clicks outside the modal
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  
  // We're not going to use useEffect to render sponsors anymore
  // Instead, we'll modify the main render function to use the exact same approach as the modal

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

  // loadSponsors is now defined inside the useEffect

  // We no longer need the displaySponsors function as we'll render sponsors using React

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      uploadImage(e.target.files[0]);
    }
  };

  const uploadImage = async (file) => {
    if (!file) return;

    setUploading(true);

    try {
      // Log file information for debugging
      console.log("File being uploaded:", {
        name: file.name,
        type: file.type,
        size: file.size
      });

      // Generate a completely new filename without using the original name at all
      const timestamp = Date.now();
      const fileExtension = file.name ? file.name.split(".").pop().toLowerCase() : "jpg";
      const newFileName = `sponsor_${timestamp}.${fileExtension}`;
      
      console.log("File extension detected:", fileExtension);
      console.log("New filename created:", newFileName);
      
      // Use the exact same path format that works in AdEditor
      const storageRef = ref(
        storage,
        `gs://aimchallange-67039.firebasestorage.app/background-images/${newFileName}`
      );

      console.log("Uploading sponsor image with path:", storageRef.fullPath);

      // Upload the image
      const uploadResult = await uploadBytes(storageRef, file);
      console.log("Upload completed:", uploadResult);

      // Get the download URL
      const downloadURL = await getDownloadURL(storageRef);
      console.log("Download URL received:", downloadURL);

      // Update state with the new image URL
      setNewSponsor((prev) => ({ ...prev, imageUrl: downloadURL }));
    } catch (error) {
      console.error("Error uploading image:", error);
      console.error("Error details:", error.code, error.message);
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

      // Reload sponsors from Firebase to ensure proper filtering
      const sponsorsSnapshot = await getDocs(sponsorsCollection);
      let sponsorsData = sponsorsSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      // Filter based on current context
      if (isLocalPartners && currentLocationName) {
        sponsorsData = sponsorsData.filter(
          (sponsor) => sponsor.location === currentLocationName
        );
      } else {
        sponsorsData = sponsorsData.filter((sponsor) => !sponsor.location);
      }

      setSponsors(sponsorsData);

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

        // No need to call displaySponsors, React will handle rendering
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

  // Render sponsors for the page - with clickability and SVG support
  const renderSponsors = () => {
    if (sponsors.length === 0) return null;
    
    return sponsors.map((sponsor, index) => {
      if (!sponsor.imageUrl) return null;
      
      // Force image reload by adding a cache-busting parameter
      const imageUrl = sponsor.imageUrl ? 
        `${sponsor.imageUrl}${sponsor.imageUrl.includes('?') ? '&' : '?'}cache=${Date.now()}` : 
        '';
      
      // Create the image with the critical class for SVG support
      const image = (
        <img
          src={imageUrl}
          alt={sponsor.name || `Sponsor ${index + 1}`}
          className="background-editor-modal__ad-image"
          onError={(e) => {
            console.error("Error loading image:", sponsor.imageUrl);
            e.target.onerror = null;
            e.target.src = '/images/placeholder-logo.png'; // Fallback image
          }}
        />
      );
      
      // Wrap in a clickable link if URL is provided
      const content = sponsor.link ? (
        <a 
          href={sponsor.link.startsWith("http") ? sponsor.link : `https://${sponsor.link}`}
          target="_blank"
          rel="noopener noreferrer"
          className="sponsor-link"
        >
          {image}
        </a>
      ) : image;
      
      // Return with the critical container class for SVG support
      return (
        <div
          key={index}
          className="background-editor-modal__ad-item"
        >
          {content}
        </div>
      );
    });
  };
  
  // Debug logging to see what's happening
  console.log('SponsorEditor rendering with:', {
    location,
    targetId,
    isAdmin,
    sponsorsCount: sponsors.length,
    isLocalPartners,
    currentLocationName
  });

  // We want to render sponsors for all users, but only show edit functionality for admins
  return (
    <>
      {/* When not in modal mode, render sponsors in the appropriate container */}
      {!showModal && (
        <div className="sponsors-grid">
          {renderSponsors()}
        </div>
      )}
      
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
