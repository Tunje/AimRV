import React, { useState, useEffect, useRef, Fragment } from 'react';
import { useText } from '../context/TextContext';
import { db, storage } from '../firebase/config';
import { ref, uploadBytes, getDownloadURL, deleteObject } from 'firebase/storage';
import { collection, doc, setDoc, getDocs, query, where, getDoc } from 'firebase/firestore';
import { useLocation } from 'react-router-dom';

const ImageModal = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedElement, setSelectedElement] = useState(null);
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [backgroundType, setBackgroundType] = useState('simple');
  const [previousImageUrl, setPreviousImageUrl] = useState(null);
  const { isAdmin } = useText();
  console.log('ImageModal - isAdmin:', isAdmin);
  const fileInputRef = useRef(null);
  const modalRef = useRef(null);
  const location = useLocation();
  
  useEffect(() => {
    // Initial load of all background settings when component mounts
    loadAllBackgroundSettings();
  }, []);

  useEffect(() => {
    const backgroundElements = document.querySelectorAll('.image-editable');
    console.log('Found background elements:', backgroundElements.length);
    
    const handleClick = (e) => {
      console.log('Background element clicked:', e.currentTarget.id);
      if (isAdmin) {
        console.log('User is admin, showing modal');
        setSelectedElement(e.currentTarget);
        setShowModal(true);
        
        const elementId = e.currentTarget.id;
        if (elementId) {
          loadBackgroundSettings(elementId);
        }
      } else {
        console.log('User is not admin, click ignored');
      }
    };
    
    backgroundElements.forEach(element => {
      console.log('Adding click listener to element:', element.id);
      element.addEventListener('click', handleClick);
      
      if (isAdmin) {
        element.classList.add('admin-editable');
      }
    });
    
    return () => {
      backgroundElements.forEach(element => {
        element.removeEventListener('click', handleClick);
        if (isAdmin) {
          element.classList.remove('admin-editable');
        }
      });
    };
  }, [isAdmin, location]);

  useEffect(() => {
    loadAllBackgroundSettings();
  }, [location]);

  const loadAllBackgroundSettings = async () => {
    try {
      console.log('Loading all background settings');
      const backgroundsCollection = collection(db, 'backgrounds');
      const backgroundsSnapshot = await getDocs(backgroundsCollection);
      
      console.log(`Found ${backgroundsSnapshot.size} background settings`);
      
      backgroundsSnapshot.forEach(doc => {
        const data = doc.data();
        const element = document.getElementById(doc.id);
        
        console.log(`Background for element ${doc.id}:`, data);
        
        if (element) {
          console.log(`Applying background to element ${doc.id}`);
          applyBackgroundToElement(element, data.imageUrl, data.backgroundType);
        } else {
          console.log(`Element with ID ${doc.id} not found in the DOM`);
        }
      });
    } catch (error) {
      console.error('Error loading background settings:', error);
    }
  };
  
  const loadBackgroundSettings = async (elementId) => {
    try {
      console.log(`Loading background settings for element: ${elementId}`);
      const backgroundsCollection = collection(db, 'backgrounds');
      const backgroundDoc = doc(backgroundsCollection, elementId);
      const docSnap = await getDoc(backgroundDoc);
      
      if (docSnap.exists()) {
        const data = docSnap.data();
        console.log(`Found background settings:`, data);
        setBackgroundType(data.backgroundType || 'simple');
        setImagePreview(data.imageUrl);
        setPreviousImageUrl(data.imageUrl);
        console.log(`Set previousImageUrl to: ${data.imageUrl}`);
      } else {
        console.log(`No background settings found for element: ${elementId}`);
        setBackgroundType('simple');
        setImagePreview(null);
        setImage(null);
        setPreviousImageUrl(null);
      }
    } catch (error) {
      console.error('Error loading background settings:', error);
    }
  };
  
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (!file.name) {
        file.name = `image-${Date.now()}.jpg`;
      }
      
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(file);
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };
  
  const extractFilenameFromUrl = (url) => {
    if (!url) return null;
    
    console.log('Extracting filename from URL:', url);
    
    try {
      // For Firebase Storage URLs, the filename is after the last %2F and before the ?
      if (url.includes('firebasestorage.googleapis.com')) {
        const match = url.match(/%2F([^?]+)/g);
        if (match && match.length > 0) {
          // Get the last match (the filename)
          const lastMatch = match[match.length - 1];
          // Remove the %2F prefix and any query parameters
          const filename = lastMatch.replace('%2F', '').split('?')[0];
          console.log('Extracted filename from Firebase URL:', filename);
          return filename;
        }
      }
      
      // For direct paths like gs://bucket/background-images/filename.jpg
      if (url.includes('background-images')) {
        const parts = url.split('/');
        const filename = parts[parts.length - 1];
        console.log('Extracted filename from direct path:', filename);
        return filename;
      }
      
      // Fallback to simple extraction
      const urlParts = url.split('/');
      const filenameWithParams = urlParts[urlParts.length - 1];
      const filename = filenameWithParams.split('?')[0];
      console.log('Extracted filename using fallback method:', filename);
      return filename;
    } catch (error) {
      console.error('Error extracting filename:', error);
      return null;
    }
  };
  
  const deleteOldImage = async (imageUrl) => {
    if (!imageUrl) return;
    
    try {
      console.log('Attempting to delete old image with URL:', imageUrl);
      
      // Extract the filename from the URL
      const filename = extractFilenameFromUrl(imageUrl);
      if (filename) {
        console.log('Deleting file with filename:', filename);
        // Use the same path format as in the upload function
        const oldImageRef = ref(storage, `gs://aimchallange-67039.firebasestorage.app/background-images/${filename}`);
        await deleteObject(oldImageRef);
        console.log('Successfully deleted old image');
      }
    } catch (error) {
      console.error("Error deleting old image:", error);
    }
  };
  
  const handleSave = async () => {
    if (!selectedElement || !selectedElement.id) {
      alert('Selected element must have an ID attribute');
      return;
    }
    
    try {
      let imageUrl = imagePreview;
      
      if (image) {
        // Generate a completely new filename without using the original name at all
        const timestamp = Date.now();
        const fileExtension = image.name ? image.name.split('.').pop() : 'jpg';
        const newFileName = `background_${timestamp}.${fileExtension}`;
        const storageRef = ref(storage, `gs://aimchallange-67039.firebasestorage.app/background-images/${newFileName}`);
        
        console.log("Uploading image with new filename:", newFileName);
        
        // Upload the image
        await uploadBytes(storageRef, image);
        
        // Get the download URL
        imageUrl = await getDownloadURL(storageRef);
        console.log("Image URL after upload:", imageUrl);
        console.log("Image URL format check:", {
          includesFirebaseStorage: imageUrl.includes('firebasestorage.googleapis.com'),
          includesBackgroundImages: imageUrl.includes('background-images'),
          urlParts: imageUrl.split('/'),
          containsPercent2F: imageUrl.includes('%2F')
        });
        
        console.log("Previous image URL:", previousImageUrl);
        if (previousImageUrl && previousImageUrl !== imageUrl) {
          console.log("Deleting previous image:", previousImageUrl);
          await deleteOldImage(previousImageUrl);
        } else {
          console.log("No previous image to delete or same image URL");
        }
      }
      
      if (imageUrl) {
        const backgroundsCollection = collection(db, 'backgrounds');
        await setDoc(doc(backgroundsCollection, selectedElement.id), {
          elementId: selectedElement.id,
          imageUrl,
          backgroundType,
          updatedAt: new Date(),
          updatedBy: 'anonymous'
        });
        
        applyBackgroundToElement(selectedElement, imageUrl, backgroundType);
      }
      
      setShowModal(false);
    } catch (error) {
      console.error('Error saving background:', error);
      alert('Error saving background. Please try again.');
    }
  };
  
  const handleRemoveImage = async (e) => {
    e.stopPropagation();
    
    try {
      // If there's a previous image URL, delete it from storage
      if (previousImageUrl) {
        await deleteOldImage(previousImageUrl);
      }
      
      // If the element has an ID, remove the background settings from Firestore
      if (selectedElement && selectedElement.id) {
        const backgroundsCollection = collection(db, 'backgrounds');
        await setDoc(doc(backgroundsCollection, selectedElement.id), {
          elementId: selectedElement.id,
          imageUrl: null,
          backgroundType: 'simple',
          updatedAt: new Date(),
          updatedBy: 'anonymous'
        });
        
        // Check if it's an img element or a div with background
        if (selectedElement.tagName.toLowerCase() === 'img') {
          // For img elements, restore the original src
          if (selectedElement.id === 'page_03-about-image') {
            selectedElement.src = '/images/AIM_lindvallen_2024_AnkiGrothe_highres_155.jpg';
          } else if (selectedElement.id === 'ulricehamn-hero-image') {
            selectedElement.src = '/images/EE-AIMChallenge24-Uhamn-0171-high.jpg';
          } else if (selectedElement.id === 'ulricehamn-price-image') {
            selectedElement.src = '/images/EE-AIMChallenge24-Uhamn-0171-high.jpg';
          } else if (selectedElement.id === 'ulricehamn-program-image') {
            selectedElement.src = '/images/EE-AIMChallenge24-Uhamn-0171-high.jpg';
          } else if (selectedElement.id === 'salen-hero-image') {
            selectedElement.src = '/images/salen-hero.jpg';
          } 
        } else {
          // For div elements with background images
          if (selectedElement.id === 'page_01') {
            selectedElement.style.backgroundImage = 'none';
          } else if (selectedElement.id === 'page_02-background') {
            selectedElement.style.backgroundImage = "url('images/EE-AIMChallenge24-Uhamn-0171-high.jpg')";
          } else if (selectedElement.id === 'page_02-salen-background') {
            selectedElement.style.backgroundImage = "url('/images/AIM_lindvallen_2024_AnkiGrothe_highres_155.jpg')";
          } else if (selectedElement.id === 'page_02-hemsedal-background') {
            selectedElement.style.backgroundImage = "url('/images/AIM_Hemsedal_2024_AnkiGrothe_45cm_300dpi_049.jpg')";
          } else if (selectedElement.id === 'page_02-kolmarden-background') {
            selectedElement.style.backgroundImage = "url('/images/AIM_lindvallen_2024_AnkiGrothe_highres_125.jpg')";
          } else if (selectedElement.id === 'competitions-ulricehamn-bg') {
            selectedElement.style.backgroundImage = "url('/images/EE-AIMChallenge24-Uhamn-0171-high.jpg')";
          } else if (selectedElement.id === 'competitions-salen-bg') {
            selectedElement.style.backgroundImage = "url('/images/AIM_lindvallen_2024_AnkiGrothe_highres_155.jpg')";
          } else if (selectedElement.id === 'competitions-hemsedal-bg') {
            selectedElement.style.backgroundImage = "url('/images/AIM_Hemsedal_2024_AnkiGrothe_45cm_300dpi_049.jpg')";
          } else if (selectedElement.id === 'competitions-kolmarden-bg') {
            selectedElement.style.backgroundImage = "url('/images/AIM_lindvallen_2024_AnkiGrothe_highres_125.jpg')";
          } else {
            // Default fallback
            selectedElement.style.backgroundImage = 'none';
          }
        }
      }
      
      // Reset the state
      setImage(null);
      setImagePreview(null);
      setPreviousImageUrl(null);
      
      console.log('Background image removed successfully');
    } catch (error) {
      console.error('Error removing background image:', error);
    }
  };
  
  const applyBackgroundToElement = (element, imageUrl, type) => {
    if (!element) return;
    
    console.log('Applying background to element:', element.id, 'with URL:', imageUrl);
    
    // Check if it's an img element or a div with background
    if (element.tagName.toLowerCase() === 'img') {
      if (imageUrl) {
        element.src = imageUrl;
      } else {
        // If no image URL is provided, restore the default image
        if (element.id === 'page_03-about-image') {
          element.src = '/images/AIM_lindvallen_2024_AnkiGrothe_highres_155.jpg';
        } else if (element.id === 'ulricehamn-hero-image') {
          element.src = '/images/EE-AIMChallenge24-Uhamn-0171-high.jpg';
        } else if (element.id === 'ulricehamn-price-image') {
          element.src = '/images/EE-AIMChallenge24-Uhamn-0171-high.jpg';
        } else if (element.id === 'ulricehamn-program-image') {
          element.src = '/images/EE-AIMChallenge24-Uhamn-0171-high.jpg';
        } else if (element.id === 'salen-hero-image') {
          element.src = '/images/salen-hero.jpg';
        } 
      }
    } else {
      // For div elements with background images
      if (imageUrl) {
        element.style.backgroundImage = `url('${imageUrl}')`;
      } else {
        // If no image URL is provided, restore the default background
        if (element.id === 'page_01') {
          element.style.backgroundImage = 'none';
        } else if (element.id === 'page_02-background') {
          element.style.backgroundImage = "url('images/EE-AIMChallenge24-Uhamn-0171-high.jpg')";
        } else if (element.id === 'page_02-salen-background') {
          element.style.backgroundImage = "url('/images/AIM_lindvallen_2024_AnkiGrothe_highres_155.jpg')";
        } else if (element.id === 'page_02-hemsedal-background') {
          element.style.backgroundImage = "url('/images/AIM_Hemsedal_2024_AnkiGrothe_45cm_300dpi_049.jpg')";
        } else if (element.id === 'page_02-kolmarden-background') {
          element.style.backgroundImage = "url('/images/AIM_lindvallen_2024_AnkiGrothe_highres_125.jpg')";
        } else if (element.id === 'competitions-ulricehamn-bg') {
          element.style.backgroundImage = "url('/images/EE-AIMChallenge24-Uhamn-0171-high.jpg')";
        } else if (element.id === 'competitions-salen-bg') {
          element.style.backgroundImage = "url('/images/AIM_lindvallen_2024_AnkiGrothe_highres_155.jpg')";
        } else if (element.id === 'competitions-hemsedal-bg') {
          element.style.backgroundImage = "url('/images/AIM_Hemsedal_2024_AnkiGrothe_45cm_300dpi_049.jpg')";
        } else if (element.id === 'competitions-kolmarden-bg') {
          element.style.backgroundImage = "url('/images/AIM_lindvallen_2024_AnkiGrothe_highres_125.jpg')";
        } else {
          // Default fallback
          element.style.backgroundImage = 'none';
        }
      }
      
      // Apply the background type class
      element.classList.remove('simple-background', 'locked-background');
      element.classList.add(`${type}-background`);
      
      // Add the has-background class if it doesn't have it
      if (!element.classList.contains('has-background')) {
        element.classList.add('has-background');
      }
    }
  };
  
  const handleClose = () => {
    setShowModal(false);
    setSelectedElement(null);
    setImage(null);
    setImagePreview(null);
    setPreviousImageUrl(null);
  };
  
  const handleClickOutside = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      handleClose();
    }
  };
  
  const triggerFileInput = () => {
    fileInputRef.current.click();
  };
  
  if (!isAdmin) return null;
  
  return (
    <>
      {showModal && (
        <div className="image-modal-overlay" onClick={handleClickOutside}>
          <div className="image-modal-modal" ref={modalRef}>
            <div className="image-modal-modal__header">
              <h2 className="image-modal-modal__title">Edit Background</h2>
              <button 
                className="image-modal-modal__close" 
                onClick={handleClose}
              >
                &times;
              </button>
            </div>
            
            <div className="image-modal-modal__body">
              <div className="image-modal-modal__form-group">
                <label className="image-modal-modal__label">Background Type</label>
                <select 
                  className="image-modal-modal__select"
                  value={backgroundType} 
                  onChange={(e) => setBackgroundType(e.target.value)}
                >
                  <option value="simple">Simple (scrolls with content)</option>
                  <option value="fixed">Fixed (locked when scrolling)</option>
                </select>
              </div>
              
              <div className="image-modal-modal__form-group">
                <label className="image-modal-modal__label">Background Image</label>
                <div 
                  className="image-modal-modal__image-upload"
                  onClick={triggerFileInput}
                >
                  {imagePreview ? (
                    <div className="image-modal-modal__image-preview-container">
                      <img 
                        src={imagePreview} 
                        alt="Preview" 
                        className="image-modal-modal__image-preview"
                      />
                      <button 
                        className="image-modal-modal__image-remove"
                        onClick={handleRemoveImage}
                      >
                        &times;
                      </button>
                    </div>
                  ) : (
                    <div className="image-modal-modal__image-placeholder">
                      Click to upload an image
                    </div>
                  )}
                  <input 
                    type="file"
                    ref={fileInputRef}
                    onChange={handleImageChange}
                    accept="image/*"
                    className="image-modal-modal__file-input"
                  />
                </div>
              </div>
            </div>
            
            <div className="image-modal-modal__footer">
              <button 
                className="image-modal-modal__button image-modal-modal__button--secondary"
                onClick={handleClose}
              >
                Cancel
              </button>
              <button 
                className="image-modal-modal__button image-modal-modal__button--primary"
                onClick={handleSave}
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ImageModal;