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
  console.log('BackgroundEditor - isAdmin:', isAdmin);
  const fileInputRef = useRef(null);
  const modalRef = useRef(null);
  const location = useLocation();

  // Define handleClick outside useEffect to ensure it's not recreated on every render
  const handleElementClick = useCallback((e) => {
    e.stopPropagation(); // Stop event propagation
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
  }, [isAdmin]);

  useEffect(() => {
    const backgroundElements = document.querySelectorAll('.background-editable');
    console.log('Found background elements:', backgroundElements.length);
    
    backgroundElements.forEach(element => {
      console.log('Adding click listener to element:', element.id);
      // Remove any existing listeners first to prevent duplicates
      element.removeEventListener('click', handleElementClick);
      // Add the click listener
      element.addEventListener('click', handleElementClick);
      
      if (isAdmin) {
        element.classList.add('admin-editable');
      }
    });
    
    // Load background settings only once when component mounts or location changes
    loadAllBackgroundSettings();
    
    return () => {
      backgroundElements.forEach(element => {
        element.removeEventListener('click', handleElementClick);
        if (isAdmin) {
          element.classList.remove('admin-editable');
        }
      });
    };
  }, [isAdmin, location, handleElementClick]);

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
        
        // Remove the background from the element
        if (selectedElement) {
          selectedElement.style.backgroundImage = 'none';
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
    if (!element || !imageUrl) return;
    
    console.log(`Applying background to element ${element.id} with image ${imageUrl}`);
    
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
    
    console.log(`Background applied to element ${element.id}`);
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