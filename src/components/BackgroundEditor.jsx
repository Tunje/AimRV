import React, { useState, useEffect, useRef, Fragment, useCallback } from 'react';
import { useText } from '../context/TextContext';
import { db, storage } from '../firebase/config';
import { ref, uploadBytes, getDownloadURL, deleteObject } from 'firebase/storage';
import { collection, doc, setDoc, getDocs, query, where, getDoc } from 'firebase/firestore';
import { useLocation } from 'react-router-dom';

const BackgroundEditor = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedElement, setSelectedElement] = useState(null);
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [backgroundType, setBackgroundType] = useState('simple');
  const [previousImageUrl, setPreviousImageUrl] = useState(null);
  const { isAdmin } = useText();
  // isAdmin status tracked internally
  const fileInputRef = useRef(null);
  const modalRef = useRef(null);
  const location = useLocation();

  // Define handleClick outside useEffect to ensure it's not recreated on every render
  const handleElementClick = useCallback((e) => {
    // Check if the click target is an edit button or part of the editable text wrapper
    if (e.target.closest('.edit-button') || 
        (e.target.closest('.editable-text-wrapper') && !e.target.classList.contains('background-editable'))) {
      // Don't process background editing for these elements
      return;
    }
    
    e.stopPropagation(); // Stop event propagation
    if (isAdmin) {
      setSelectedElement(e.currentTarget);
      setShowModal(true);
      
      const elementId = e.currentTarget.id;
      if (elementId) {
        loadBackgroundSettings(elementId);
      }
    }
  }, [isAdmin]);

  // Function to attach click listeners to editable elements
  const attachClickListeners = () => {
    const backgroundElements = document.querySelectorAll('.background-editable');
    
    backgroundElements.forEach(element => {
      // Remove any existing listeners first to prevent duplicates
      element.removeEventListener('click', handleElementClick);
      
      // Add the click listener
      element.addEventListener('click', handleElementClick);
      
      if (isAdmin) {
        element.classList.add('admin-editable');
        // Add a visual indicator for admins to see which elements are editable
        element.style.cursor = 'pointer';
        
        // Add a small indicator if it doesn't exist yet
        if (!element.querySelector('.background-editable-indicator')) {
          const indicator = document.createElement('div');
          indicator.className = 'background-editable-indicator';
          indicator.style.position = 'absolute';
          indicator.style.top = '5px';
          indicator.style.right = '5px';
          indicator.style.width = '10px';
          indicator.style.height = '10px';
          indicator.style.backgroundColor = 'rgba(0, 255, 0, 0.5)';
          indicator.style.borderRadius = '50%';
          indicator.style.zIndex = '1'; // Very low z-index so it doesn't interfere with buttons
          indicator.style.display = isAdmin ? 'block' : 'none';
          
          // Make sure the element has position relative for absolute positioning of the indicator
          if (window.getComputedStyle(element).position === 'static') {
            element.style.position = 'relative';
          }
          
          element.appendChild(indicator);
        }
      }
    });
  };

  useEffect(() => {
    
    // Use a small delay to ensure DOM is fully loaded
    const initTimer = setTimeout(() => {
      // Attach click listeners to existing elements
      attachClickListeners();
      
      // Load background settings
      loadAllBackgroundSettings();
    }, 300);
    
    // Set up a MutationObserver to watch for new editable elements
    const observer = new MutationObserver((mutations) => {
      let shouldUpdate = false;
      
      mutations.forEach(mutation => {
        if (mutation.type === 'childList') {
          mutation.addedNodes.forEach(node => {
            if (node.nodeType === 1) { // Element node
              if (node.classList && node.classList.contains('background-editable')) {
                shouldUpdate = true;
              } else if (node.querySelectorAll) {
                const editableChildren = node.querySelectorAll('.background-editable');
                if (editableChildren.length > 0) {
                  shouldUpdate = true;
                }
              }
            }
          });
        } else if (mutation.type === 'attributes') {
          // Also check for attribute changes that might add the background-editable class
          if (mutation.target.classList && mutation.target.classList.contains('background-editable')) {
            shouldUpdate = true;
          }
        }
      });
      
      if (shouldUpdate) {
        // Use a small delay to ensure DOM is stable
        setTimeout(() => {
          attachClickListeners();
        }, 100);
      }
    });
    
    // Start observing the document with more comprehensive options
    observer.observe(document.body, { 
      childList: true, 
      subtree: true,
      attributes: true,
      attributeFilter: ['class'] 
    });
    
    // Set up a periodic check for editable elements that might have been missed
    const periodicCheck = setInterval(() => {
      const elements = document.querySelectorAll('.background-editable');
      if (elements.length > 0) {
        attachClickListeners();
      }
    }, 2000); // Check every 2 seconds
    
    return () => {
      // Clear timers
      clearTimeout(initTimer);
      clearInterval(periodicCheck);
      
      // Disconnect the observer when component unmounts
      observer.disconnect();
      
      // Remove event listeners
      const backgroundElements = document.querySelectorAll('.background-editable');
      backgroundElements.forEach(element => {
        element.removeEventListener('click', handleElementClick);
        if (isAdmin) {
          element.classList.remove('admin-editable');
          // Remove any indicators we added
          const indicator = element.querySelector('.background-editable-indicator');
          if (indicator) {
            element.removeChild(indicator);
          }
        }
      });
    };
  }, [isAdmin, location.pathname, handleElementClick]);

  useEffect(() => {
    // Add event listener for clicks outside the modal when modal is shown
    if (showModal) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }
  }, [showModal]);

  const loadAllBackgroundSettings = async () => {
    try {
      const backgroundsCollection = collection(db, 'backgrounds');
      const backgroundsSnapshot = await getDocs(backgroundsCollection);
      

      
      backgroundsSnapshot.forEach(doc => {
        const data = doc.data();
        const element = document.getElementById(doc.id);
        

        
        if (element) {
          applyBackgroundToElement(element, data.imageUrl, data.backgroundType);
        }
      });
    } catch (error) {
      // Error handling for loading background settings
    }
  };
  
  const loadBackgroundSettings = async (elementId) => {
    try {
      const backgroundsCollection = collection(db, 'backgrounds');
      const backgroundDoc = doc(backgroundsCollection, elementId);
      const docSnap = await getDoc(backgroundDoc);
      
      if (docSnap.exists()) {
        const data = docSnap.data();
        setBackgroundType(data.backgroundType || 'simple');
        setImagePreview(data.imageUrl);
        setPreviousImageUrl(data.imageUrl);
      } else {
        setBackgroundType('simple');
        setImagePreview(null);
        setImage(null);
        setPreviousImageUrl(null);
      }
    } catch (error) {
      // Error handling for loading background settings
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
    
    try {
      // For Firebase Storage URLs, the filename is after the last %2F and before the ?
      if (url.includes('firebasestorage.googleapis.com')) {
        const match = url.match(/%2F([^?]+)/g);
        if (match && match.length > 0) {
          // Get the last match (the filename)
          const lastMatch = match[match.length - 1];
          // Remove the %2F prefix and any query parameters
          const filename = lastMatch.replace('%2F', '').split('?')[0];
          return filename;
        }
      }
      
      // For direct paths like gs://bucket/background-images/filename.jpg
      if (url.includes('background-images')) {
        const parts = url.split('/');
        const filename = parts[parts.length - 1];
        return filename;
      }
      
      // Fallback to simple extraction
      const urlParts = url.split('/');
      const filenameWithParams = urlParts[urlParts.length - 1];
      const filename = filenameWithParams.split('?')[0];
      return filename;
    } catch (error) {
      return null;
    }
  };
  
  const deleteOldImage = async (imageUrl) => {
    if (!imageUrl) return;
    
    try {
      // Extract the filename from the URL
      const filename = extractFilenameFromUrl(imageUrl);
      if (filename) {
        // Use the same path format as in the upload function
        const oldImageRef = ref(storage, `gs://aimchallange-67039.firebasestorage.app/background-images/${filename}`);
        await deleteObject(oldImageRef);
      }
    } catch (error) {
      // Error handling for image deletion
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
        
        // Upload the image
        await uploadBytes(storageRef, image);
        
        // Get the download URL
        imageUrl = await getDownloadURL(storageRef);
        
        // Delete the old image if it exists and is different from the current one
        if (previousImageUrl && previousImageUrl !== imageUrl) {
          await deleteOldImage(previousImageUrl);
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
        
        // Remove the background from the element
        if (selectedElement) {
          selectedElement.style.backgroundImage = 'none';
        }
      }
      
      // Reset the state
      setImage(null);
      setImagePreview(null);
      setPreviousImageUrl(null);
    } catch (error) {
      // Error handling for removing background image
    }
  };
  
  const applyBackgroundToElement = (element, imageUrl, type) => {
    if (!element || !imageUrl) return;
    
    element.classList.remove('simple-background', 'fixed-background');
    element.classList.add('has-background');
    
    if (type === 'simple') {
      element.classList.add('simple-background');
    } else {
      element.classList.add('locked-background');
    }
    
    // Set the background image directly
    element.style.backgroundImage = `url(${imageUrl})`;
    
    // Also set these properties to ensure the background displays correctly
    element.style.backgroundSize = 'cover';
    element.style.backgroundPosition = 'center';
    element.style.backgroundRepeat = 'no-repeat';
    
    if (type === 'fixed') {
      element.style.backgroundAttachment = 'fixed';
    } else {
      element.style.backgroundAttachment = 'scroll';
    }
    
    // Special case for the Om AIM page - remove blue background when an image is applied
    if (element.id === 'historien-om-aim-background-image') {
      // Find the content section with the blue background
      const contentSection = document.querySelector('.historien-om-aim-content-section');
      if (contentSection) {
        // Remove the blue background by setting a transparent background
        contentSection.style.backgroundImage = 'none';
        contentSection.style.backgroundColor = 'transparent';
      }
    }
    
    // Background applied to element
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
        <div className="background-editor-overlay" onClick={handleClickOutside}>
          <div className="background-editor-modal" ref={modalRef}>
            <div className="background-editor-modal__header">
              <h2 className="background-editor-modal__title">Edit Background</h2>
              <button 
                className="background-editor-modal__close" 
                onClick={handleClose}
              >
                &times;
              </button>
            </div>
            
            <div className="background-editor-modal__body">
              <div className="background-editor-modal__form-group">
                <label className="background-editor-modal__label">Background Type</label>
                <select 
                  className="background-editor-modal__select"
                  value={backgroundType} 
                  onChange={(e) => setBackgroundType(e.target.value)}
                >
                  <option value="simple">Simple (scrolls with content)</option>
                  <option value="fixed">Fixed (locked when scrolling)</option>
                </select>
              </div>
              
              <div className="background-editor-modal__form-group">
                <label className="background-editor-modal__label">Background Image</label>
                <div 
                  className="background-editor-modal__image-upload"
                  onClick={triggerFileInput}
                >
                  {imagePreview ? (
                    <div className="background-editor-modal__image-preview-container">
                      <img 
                        src={imagePreview} 
                        alt="Preview" 
                        className="background-editor-modal__image-preview"
                      />
                      <button 
                        className="background-editor-modal__image-remove"
                        onClick={handleRemoveImage}
                      >
                        &times;
                      </button>
                    </div>
                  ) : (
                    <div className="background-editor-modal__image-placeholder">
                      Click to upload an image
                    </div>
                  )}
                  <input 
                    type="file"
                    ref={fileInputRef}
                    onChange={handleImageChange}
                    accept="image/*"
                    className="background-editor-modal__file-input"
                  />
                </div>
              </div>
            </div>
            
            <div className="background-editor-modal__footer">
              <button 
                className="background-editor-modal__button background-editor-modal__button--secondary"
                onClick={handleClose}
              >
                Cancel
              </button>
              <button 
                className="background-editor-modal__button background-editor-modal__button--primary"
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

export default BackgroundEditor;