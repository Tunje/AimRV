import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { useText } from '../context/TextContext';
import { db, storage } from '../firebase/config';
import { ref, uploadBytes, getDownloadURL, deleteObject } from 'firebase/storage';
import { collection, doc, setDoc, getDocs, getDoc, deleteDoc } from 'firebase/firestore';

const AdEditor = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedElement, setSelectedElement] = useState(null);
  const [ads, setAds] = useState([]);
  const [newAd, setNewAd] = useState({ imageUrl: '', link: '' });
  const [images, setImages] = useState([]);
  const [uploading, setUploading] = useState(false);
  const { isAdmin } = useText();
  const fileInputRef = useRef(null);
  const modalRef = useRef(null);
  const adsCollection = collection(db, 'ads');
  const location = useLocation();

  useEffect(() => {
    loadAds();
  }, []);

  useEffect(() => {
    const adSections = document.querySelectorAll('.ad-editable');
    
    const handleClick = (e) => {
      if (isAdmin) {
        setShowModal(true);
        setSelectedElement(e.currentTarget);
      }
    };
    
    adSections.forEach(section => {
      section.removeEventListener('click', handleClick); // Remove any existing listeners
      
      section.addEventListener('click', handleClick);
      
      if (isAdmin) {
        section.classList.add('admin-editable');
      }
    });
    
    return () => {
      adSections.forEach(section => {
        section.removeEventListener('click', handleClick);
        if (isAdmin) {
          section.classList.remove('admin-editable');
        }
      });
    };
  }, [isAdmin]);
  
  // Effect to load ads when component mounts
  useEffect(() => {
    loadAds();
    
    // Set up an interval to refresh ads periodically (every 5 minutes)
    const refreshInterval = setInterval(() => {
      console.log('Refreshing ads from database');
      loadAds();
    }, 5 * 60 * 1000); // 5 minutes
    
    return () => {
      clearInterval(refreshInterval);
    };
  }, []);
  
  // Effect to reload ads when route changes
  useEffect(() => {
    console.log('Route changed, reloading ads');
    // Use a timeout to ensure DOM is ready after route change
    const timer = setTimeout(() => {
      loadAds();
    }, 500); // Wait 500ms after route change
    
    return () => clearTimeout(timer);
  }, [location.pathname]);

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleClose = () => {
    setShowModal(false);
    setSelectedElement(null);
    setNewAd({ imageUrl: '', link: '' });
  };
  
  const handleClickOutside = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      handleClose();
    }
  };

  const loadAds = async () => {
    try {
      console.log('Loading ads from Firestore');
      const adsSnapshot = await getDocs(adsCollection);
      const adsData = adsSnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      
      setAds(adsData);
      
      // Use a longer timeout to ensure DOM is fully ready, especially after route changes
      setTimeout(() => {
        displayAds(adsData);
      }, 300);
    } catch (error) {
      console.error('Error loading ads:', error);
    }
  };

  const displayAds = (adsData) => {
    const adContainers = document.querySelectorAll('.ad-container');
    
    // Filter out ads without images
    const validAds = adsData.filter(ad => ad.imageUrl);
    
    // Clear existing ad items only, but preserve the carousel structure
    adContainers.forEach(container => {
      console.log('Clearing container:', container.id || 'unnamed');
      
      // Remove all ad items
      const existingAdItems = container.querySelectorAll('.ad-item');
      existingAdItems.forEach(item => {
        console.log('Removing existing ad item');
        item.remove();
      });
      
      // Clear any intervals
      const intervalId = container.getAttribute('data-ad-interval');
      if (intervalId) {
        clearInterval(Number(intervalId));
        container.removeAttribute('data-ad-interval');
      }
    });
    
    if (validAds.length === 0) {
      console.log('No valid ads to display, all ads cleared');
      return;
    }
    
    adContainers.forEach(container => {
      // First, clear all existing ad items
      const existingAdItems = container.querySelectorAll('.ad-item');
      existingAdItems.forEach(item => {
        item.remove();
      });
      
      // Find or create the ad-content div
      let adContent = container.querySelector('.ad-content');
      if (!adContent) {
        adContent = document.createElement('div');
        adContent.className = 'ad-content';
        const annonsTxt = document.createElement('div');
        annonsTxt.textContent = 'ANNONS';
        annonsTxt.className = 'annons-text';
        adContent.appendChild(annonsTxt);
        container.appendChild(adContent);
      } else {
        // Find existing carousel or create a new one
        let carouselContainer = adContent.querySelector('.ad-carousel');
        
        if (!carouselContainer) {
          carouselContainer = document.createElement('div');
          carouselContainer.className = 'ad-carousel';
          adContent.appendChild(carouselContainer);
        } else {
          // Clear existing carousel content
          while (carouselContainer.firstChild) {
            carouselContainer.removeChild(carouselContainer.firstChild);
          }
        }
      }
      
      // Get the carousel container
      const carouselContainer = adContent.querySelector('.ad-carousel');
      
      // Add all ads to the carousel, but only show the first one initially
      validAds.forEach((ad, index) => {
        const adElement = document.createElement('div');
        adElement.className = index === 0 ? 'ad-item active' : 'ad-item';
        adElement.setAttribute('data-ad-id', ad.id || 'unknown');
        adElement.style.display = index === 0 ? 'block' : 'none'; // Only show the first ad initially
        
        const imgElement = document.createElement('img');
        imgElement.src = ad.imageUrl;
        imgElement.alt = 'Advertisement';
        
        adElement.appendChild(imgElement);
        
        if (ad.link && !isAdmin) {
          adElement.onclick = (e) => {
            e.preventDefault();
            // Ensure the link is an absolute URL with proper protocol
            let url = ad.link;
            
            // Remove any localhost or relative path prefix
            if (url.includes('localhost') || url.startsWith('/')) {
              // Extract just the domain part if it exists
              const matches = url.match(/(?:https?:\/\/)?(?:localhost:[0-9]+\/)?([^\s]+)/);
              if (matches && matches[1]) {
                url = matches[1];
              }
            }
            
            // Add https:// if no protocol is specified
            if (!url.startsWith('http://') && !url.startsWith('https://')) {
              url = 'https://' + url;
            }
            
            window.open(url, '_blank', 'noopener,noreferrer');
          };
          adElement.style.cursor = 'pointer';
        }
        
        console.log('Adding ad with image:', ad.imageUrl);
        carouselContainer.appendChild(adElement);
      });
      
      // Set up rotation with fade effect
      let currentAdIndex = 0;
      const rotateAds = () => {
        const adItems = carouselContainer.querySelectorAll('.ad-item');
        if (adItems.length <= 1) return; // No need to rotate if there's only one ad
        
        // Fade out current ad
        adItems[currentAdIndex].classList.remove('active');
        
        // Wait for fade out transition to complete
        setTimeout(() => {
          // Hide previous ad
          adItems[currentAdIndex].style.display = 'none';
          
          // Move to next ad
          currentAdIndex = (currentAdIndex + 1) % adItems.length;
          
          // Show next ad
          adItems[currentAdIndex].style.display = 'block';
          
          // Trigger reflow
          adItems[currentAdIndex].offsetHeight;
          
          // Fade in next ad
          setTimeout(() => {
            adItems[currentAdIndex].classList.add('active');
          }, 50);
        }, 800); // Match the transition duration
      };
      
      // Start rotation - change every 8 seconds to allow for the fade effect to be more visible
      const intervalId = setInterval(rotateAds, 8000);
      
      // Store the interval ID to clear it when component unmounts
      container.setAttribute('data-ad-interval', intervalId);
    });
  };
  
  // Clean up intervals when component unmounts
  useEffect(() => {
    return () => {
      const adContainers = document.querySelectorAll('.ad-container');
      adContainers.forEach(container => {
        const intervalId = container.getAttribute('data-ad-interval');
        if (intervalId) {
          clearInterval(Number(intervalId));
        }
      });
    };
  }, []);

  const handleFileChange = (e) => {
    if (e.target.files[0]) {
      const file = e.target.files[0];
      uploadImage(file);
    }
  };

  const uploadImage = async (file) => {
    if (!file) return;
    
    setUploading(true);
    
    try {
      // Generate a completely new filename without using the original name at all
      const timestamp = Date.now();
      const fileExtension = file.name ? file.name.split('.').pop() : 'jpg';
      const newFileName = `ad_${timestamp}.${fileExtension}`;
      // Use the exact same path format that works in BackgroundEditor
      const storageRef = ref(storage, `gs://aimchallange-67039.firebasestorage.app/background-images/${newFileName}`);
      
      console.log("Uploading ad image with new filename:", newFileName);
      
      // Upload the image
      await uploadBytes(storageRef, file);
      
      // Get the download URL
      const downloadURL = await getDownloadURL(storageRef);
      
      setNewAd(prev => ({ ...prev, imageUrl: downloadURL }));
      setImages([...images, { url: downloadURL, name: newFileName }]);
    } catch (error) {
    } finally {
      setUploading(false);
    }
  };

  const handleAddAd = async () => {
    if (!newAd.imageUrl) return;
    
    try {
      const newAdRef = doc(adsCollection);
      await setDoc(newAdRef, {
        imageUrl: newAd.imageUrl,
        link: newAd.link,
        createdAt: new Date()
      });
      
      setAds([...ads, { id: newAdRef.id, ...newAd }]);
      setNewAd({ imageUrl: '', link: '' });
      loadAds();
    } catch (error) {
      console.error('Error adding ad:', error);
    }
  };

  const handleRemoveAd = async (index) => {
    try {
      if (index < 0 || index >= ads.length) {
        return;
      }
      
      const adToRemove = ads[index];
      
      if (!adToRemove || !adToRemove.id) {
        return;
      }
      
      // Get the ad to find the image URL
      const adDocRef = doc(adsCollection, adToRemove.id);
      const adDoc = await getDoc(adDocRef);
      
      if (adDoc.exists()) {
        const adData = adDoc.data();
        console.log('Found ad document:', adData);
        
        // First, try to delete the image from storage
        if (adData.imageUrl) {
          try {
            const imageFileName = extractFilenameFromURL(adData.imageUrl);
            
            if (imageFileName) {
              // Use the exact same path format that works in BackgroundEditor
              const imageRef = ref(storage, `gs://aimchallange-67039.firebasestorage.app/background-images/${imageFileName}`);
              await deleteObject(imageRef);
            }
          } catch (imageError) {
            // Error handling for image deletion
          }
        }
        
        // Then completely delete the document from Firestore
        await deleteDoc(adDocRef);
        
        // Update state immediately
        const updatedAds = [...ads];
        updatedAds.splice(index, 1);
        setAds(updatedAds);
        
        // Immediately update the display to remove the ad from rotation
        setTimeout(() => {
          displayAds(updatedAds);
        }, 100);
      } else {
        // Ad document not found
      }
    } catch (error) {
    }
  };

  const extractFilenameFromURL = (url) => {
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
      
      // For URLs with ad_ prefix (our custom format), extract directly
      if (url.includes('ad_')) {
        const regex = /ad_[0-9]+\.[a-zA-Z]+/;
        const match = url.match(regex);
        if (match && match.length > 0) {
          return match[0];
        }
      }
      
      // For other URLs, just get the last part of the path
      const urlParts = url.split('/');
      const filename = urlParts[urlParts.length - 1].split('?')[0];
      return filename;
    } catch (error) {
      return null;
    }
  };

  if (!isAdmin) return null;
  
  return (
    <>
      {showModal && (
        <div className="background-editor-overlay" onClick={handleClickOutside}>
          <div className="background-editor-modal" ref={modalRef}>
            <div className="background-editor-modal__header">
              <h2 className="background-editor-modal__title">Edit Ads</h2>
              <button 
                className="background-editor-modal__close" 
                onClick={handleClose}
              >
                &times;
              </button>
            </div>
            
            <div className="background-editor-modal__body">
              <h3 className="background-editor-modal__subtitle">Current Ads</h3>
              <div className="background-editor-modal__ad-list">
                {ads.length > 0 ? (
                  ads.map((ad, index) => (
                    <div key={index} className="background-editor-modal__ad-item">
                      <img src={ad.imageUrl} alt={`Ad ${index + 1}`} className="background-editor-modal__ad-image" />
                      <div className="background-editor-modal__ad-details">
                        <p className="background-editor-modal__ad-link">{ad.link ? (
                          <a href={ad.link} target="_blank" rel="noopener noreferrer">
                            {ad.link}
                          </a>
                        ) : 'No link'}</p>
                        <button 
                          onClick={() => handleRemoveAd(index)}
                          className="background-editor-modal__button background-editor-modal__button--secondary"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  ))
                ) : (
                  <p className="background-editor-modal__empty-message">No ads added yet.</p>
                )}
              </div>
              
              <h3 className="background-editor-modal__subtitle">Add New Ad</h3>
              <div className="background-editor-modal__form">
                <div className="background-editor-modal__form-group">
                  <label className="background-editor-modal__label">Image:</label>
                  <div className="background-editor-modal__image-upload" onClick={() => fileInputRef.current.click()}>
                    {newAd.imageUrl ? (
                      <div className="background-editor-modal__image-preview-container">
                        <img 
                          src={newAd.imageUrl} 
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
                      style={{ display: 'none' }}
                    />
                  </div>
                  {uploading && <p className="background-editor-modal__upload-status">Uploading...</p>}
                </div>
                
                <div className="background-editor-modal__form-group">
                  <label className="background-editor-modal__label">Link (optional):</label>
                  <input 
                    type="text" 
                    value={newAd.link} 
                    onChange={(e) => setNewAd(prev => ({ ...prev, link: e.target.value }))} 
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
                  onClick={handleAddAd} 
                  disabled={!newAd.imageUrl || uploading}
                >
                  Add Ad
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AdEditor;
