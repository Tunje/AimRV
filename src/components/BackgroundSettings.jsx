import React, { useState, useEffect, useRef } from 'react';
import { useText } from '../context/TextContext';

const BackgroundSettings = () => {
  const { isAdmin, getText, updateText } = useText();
  const [selectedElement, setSelectedElement] = useState(null);
  const [selectedElementId, setSelectedElementId] = useState(null);
  const [showSettings, setShowSettings] = useState(false);
  const [backgroundType, setBackgroundType] = useState('simple');
  const [activeTab, setActiveTab] = useState('type');
  const [imageUrl, setImageUrl] = useState('');
  const fileInputRef = useRef(null);

  useEffect(() => {
    if (!isAdmin) return;

    // Function to handle background element clicks
    const handleBackgroundClick = (e) => {
      // Check if the clicked element has a background class
      const isBackground = 
        e.target.classList.contains('simple-background') || 
        e.target.classList.contains('locked-background') || 
        e.target.classList.contains('dynamic-background') ||
        [...e.target.classList].some(cls => cls.includes('-bg'));
      
      if (isBackground) {
        e.stopPropagation();
        setSelectedElement(e.target);
        
        // Generate or get element ID for storage
        let elementId = e.target.id;
        if (!elementId) {
          elementId = `bg-${Date.now()}`;
          e.target.id = elementId;
        }
        setSelectedElementId(elementId);
        
        // Load saved background type from TextContext
        const savedType = getText(`${elementId}-type`, null);
        if (savedType) {
          setBackgroundType(savedType);
        } else {
          // Determine current background type from class
          if (e.target.classList.contains('locked-background')) {
            setBackgroundType('locked');
          } else {
            setBackgroundType('simple');
          }
        }
        
        // Load saved background image from TextContext
        const savedImageUrl = getText(`${elementId}-image`, null);
        if (savedImageUrl) {
          setImageUrl(savedImageUrl);
        } else {
          // Extract current background image URL if it exists
          const style = window.getComputedStyle(e.target);
          let bgImage = style.backgroundImage;
          
          if (bgImage && bgImage !== 'none') {
            // Remove url() and quotes from the background-image value
            bgImage = bgImage.replace(/url\(['"]?(.*?)['"]?\)/i, '$1');
            setImageUrl(bgImage);
          } else {
            setImageUrl('');
          }
        }
        
        setShowSettings(true);
      }
    };

    // Add click event listener to the document
    document.addEventListener('click', handleBackgroundClick);

    // Cleanup
    return () => {
      document.removeEventListener('click', handleBackgroundClick);
    };
  }, [isAdmin, getText]);

  // Function to apply background type change
  const applyBackgroundType = () => {
    if (!selectedElement || !selectedElementId) return;
    
    // Remove existing background type classes
    selectedElement.classList.remove('simple-background', 'locked-background');
    
    // Add the selected background type class
    selectedElement.classList.add(`${backgroundType}-background`);
    
    // Update background-attachment style
    if (backgroundType === 'locked') {
      selectedElement.style.backgroundAttachment = 'fixed';
    } else {
      selectedElement.style.backgroundAttachment = 'scroll';
    }
    
    // Save to TextContext for persistence
    updateText(`${selectedElementId}-type`, backgroundType);
  };

  // Function to apply background image
  const applyBackgroundImage = () => {
    if (!selectedElement || !imageUrl || !selectedElementId) return;
    
    // Set the background image
    selectedElement.style.backgroundImage = `url('${imageUrl}')`;
    
    // Make sure other background properties are set correctly
    selectedElement.style.backgroundSize = 'cover';
    selectedElement.style.backgroundPosition = 'center';
    selectedElement.style.backgroundRepeat = 'no-repeat';
    
    // Save to TextContext for persistence
    updateText(`${selectedElementId}-image`, imageUrl);
  };

  // Function to handle file upload
  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    
    // Create a URL for the uploaded file
    const objectUrl = URL.createObjectURL(file);
    setImageUrl(objectUrl);
    
    // For file uploads, we need to convert to base64 for persistence
    const reader = new FileReader();
    reader.onloadend = () => {
      setImageUrl(reader.result);
    };
    reader.readAsDataURL(file);
  };

  // Function to apply all changes and close modal
  const applyAllChanges = () => {
    applyBackgroundType();
    applyBackgroundImage();
    setShowSettings(false);
  };

  // Don't render anything if not in admin mode or settings not showing
  if (!isAdmin || !showSettings) return null;

  return (
    <div className="background-settings-modal" onClick={() => setShowSettings(false)}>
      <div className="background-settings-content" onClick={(e) => e.stopPropagation()}>
        <h3>Background Settings</h3>
        
        <div className="settings-tabs">
          <button 
            className={`tab-button ${activeTab === 'type' ? 'active' : ''}`}
            onClick={() => setActiveTab('type')}
          >
            Background Type
          </button>
          <button 
            className={`tab-button ${activeTab === 'image' ? 'active' : ''}`}
            onClick={() => setActiveTab('image')}
          >
            Background Image
          </button>
        </div>
        
        {activeTab === 'type' && (
          <div className="background-type-options">
            <div className="form-group">
              <label>
                <input
                  type="radio"
                  name="backgroundType"
                  value="simple"
                  checked={backgroundType === 'simple'}
                  onChange={() => setBackgroundType('simple')}
                />
                Simple (Scrolls with content)
              </label>
            </div>
            
            <div className="form-group">
              <label>
                <input
                  type="radio"
                  name="backgroundType"
                  value="locked"
                  checked={backgroundType === 'locked'}
                  onChange={() => setBackgroundType('locked')}
                />
                Locked (Fixed when scrolling)
              </label>
            </div>
          </div>
        )}
        
        {activeTab === 'image' && (
          <div className="background-image-options">
            <div className="form-group">
              <label htmlFor="imageUrl">Image URL:</label>
              <input
                type="text"
                id="imageUrl"
                value={imageUrl}
                onChange={(e) => setImageUrl(e.target.value)}
                placeholder="Enter image URL"
                className="image-url-input"
              />
            </div>
            
            <div className="form-group">
              <label>Or upload an image:</label>
              <input
                type="file"
                accept="image/*"
                onChange={handleFileUpload}
                ref={fileInputRef}
                className="file-input"
              />
              <button 
                className="upload-button"
                onClick={() => fileInputRef.current.click()}
              >
                Choose File
              </button>
            </div>
            
            {imageUrl && (
              <div className="image-preview">
                <p>Preview:</p>
                <img src={imageUrl} alt="Background preview" />
              </div>
            )}
          </div>
        )}
        
        <div className="button-group">
          <button 
            className="cancel-button"
            onClick={() => setShowSettings(false)}
          >
            Cancel
          </button>
          <button 
            className="apply-button"
            onClick={applyAllChanges}
          >
            Apply
          </button>
        </div>
      </div>
    </div>
  );
};

export default BackgroundSettings;
