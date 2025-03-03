import React, { useEffect } from 'react';
import { useText } from '../context/TextContext';

const BackgroundFrames = () => {
  const { isAdmin, getText } = useText();

  // Add admin-editing-mode class to body when in admin mode
  useEffect(() => {
    if (!isAdmin) return;
    document.body.classList.add('admin-editing-mode');
    return () => {
      document.body.classList.remove('admin-editing-mode');
    };
  }, [isAdmin]);

  // Apply saved background settings to elements on page load
  useEffect(() => {
    // Function to apply saved background settings
    const applySavedBackgroundSettings = () => {
      // Get all localStorage items
      const textContent = JSON.parse(localStorage.getItem('textContent') || '{}');
      
      // Find all background-related settings
      const backgroundSettings = Object.keys(textContent).filter(key => 
        key.startsWith('bg-') && (key.endsWith('-type') || key.endsWith('-image'))
      );
      
      // Group settings by element ID
      const elementSettings = {};
      backgroundSettings.forEach(key => {
        const elementId = key.split('-type')[0].split('-image')[0];
        if (!elementSettings[elementId]) {
          elementSettings[elementId] = {};
        }
        
        if (key.endsWith('-type')) {
          elementSettings[elementId].type = textContent[key];
        } else if (key.endsWith('-image')) {
          elementSettings[elementId].image = textContent[key];
        }
      });
      
      // Apply settings to elements
      Object.keys(elementSettings).forEach(elementId => {
        const element = document.getElementById(elementId);
        if (!element) return;
        
        const settings = elementSettings[elementId];
        
        // Apply background type
        if (settings.type) {
          element.classList.remove('simple-background', 'locked-background');
          element.classList.add(`${settings.type}-background`);
          
          if (settings.type === 'locked') {
            element.style.backgroundAttachment = 'fixed';
          } else {
            element.style.backgroundAttachment = 'scroll';
          }
        }
        
        // Apply background image
        if (settings.image) {
          element.style.backgroundImage = `url('${settings.image}')`;
          element.style.backgroundSize = 'cover';
          element.style.backgroundPosition = 'center';
          element.style.backgroundRepeat = 'no-repeat';
        }
      });
    };
    
    // Apply settings on page load
    applySavedBackgroundSettings();
    
    // Also apply when localStorage changes (in case of updates from other components)
    window.addEventListener('storage', applySavedBackgroundSettings);
    
    return () => {
      window.removeEventListener('storage', applySavedBackgroundSettings);
    };
  }, []);

  return null; // This component doesn't render anything
};

export default BackgroundFrames;
