import React, { useEffect, useState } from 'react';
import { useText } from '../context/TextContext';
import { onSnapshot, collection } from 'firebase/firestore';
import { db } from '../firebase/config';
import { saveBackgroundSetting, getAllBackgroundSettings } from '../firebase/backgrounds';
import { useLocation } from 'react-router-dom';

const BackgroundFrames = () => {
  const { isAdmin } = useText();
  const [backgroundSettings, setBackgroundSettings] = useState({});
  const location = useLocation();

  // Add admin-editing-mode class to body when in admin mode
  useEffect(() => {
    if (!isAdmin) return;
    document.body.classList.add('admin-editing-mode');
    return () => {
      document.body.classList.remove('admin-editing-mode');
    };
  }, [isAdmin]);

  // Fetch background settings from Firebase
  useEffect(() => {
    console.log('Setting up Firebase background listener');
    
    // Create a reference to the backgrounds collection
    const backgroundsRef = collection(db, 'backgrounds');
    
    // Set up a real-time listener for background settings
    const unsubscribe = onSnapshot(backgroundsRef, (snapshot) => {
      const settings = {};
      snapshot.forEach((doc) => {
        settings[doc.id] = doc.data();
      });
      console.log('Received background settings from Firebase:', settings);
      setBackgroundSettings(settings);
      
      // Apply the settings to elements
      applyBackgroundSettings(settings);
    }, (error) => {
      console.error("Error fetching background settings:", error);
    });
    
    // Clean up the listener when component unmounts
    return () => unsubscribe();
  }, []);

  // Force reapply background settings when the page changes
  useEffect(() => {
    console.log('Route changed to:', location.pathname);
    
    // Immediately try to apply any existing settings
    if (Object.keys(backgroundSettings).length > 0) {
      applyBackgroundSettings(backgroundSettings);
    }
    
    // Then fetch fresh settings from Firebase and apply them
    const fetchAndApplySettings = async () => {
      try {
        const settings = await getAllBackgroundSettings();
        console.log('Fetched fresh background settings after route change:', settings);
        setBackgroundSettings(settings);
        applyBackgroundSettings(settings);
      } catch (error) {
        console.error('Failed to fetch background settings:', error);
      }
    };
    
    // Use a small delay to ensure the DOM has updated with new elements
    const timeoutId = setTimeout(() => {
      fetchAndApplySettings();
    }, 500);
    
    return () => clearTimeout(timeoutId);
  }, [location.pathname]);

  // Function to apply background settings to elements
  const applyBackgroundSettings = (settings) => {
    console.log('Applying background settings:', settings);
    
    // First, apply settings to elements with matching IDs
    Object.keys(settings).forEach(elementId => {
      const element = document.getElementById(elementId);
      if (element) {
        console.log(`Applying background to element with ID: ${elementId}`);
        applySettingToElement(element, settings[elementId]);
      } else {
        console.log(`Element with ID ${elementId} not found, checking for class`);
        // If element with ID not found, try to find elements with matching class
        // This handles cases where elements use classes instead of IDs
        if (elementId.startsWith('class:')) {
          const className = elementId.replace('class:', '');
          const elements = document.getElementsByClassName(className);
          console.log(`Found ${elements.length} elements with class ${className}`);
          Array.from(elements).forEach(el => {
            applySettingToElement(el, settings[elementId]);
          });
        }
      }
    });
    
    // Also check for elements with specific background classes
    const backgroundElements = document.querySelectorAll('.simple-background, .locked-background, .dynamic-background');
    console.log(`Found ${backgroundElements.length} elements with background classes`);
    backgroundElements.forEach(element => {
      // If element has an ID and we have settings for it
      if (element.id && settings[element.id]) {
        console.log(`Applying background to element with ID: ${element.id} (found by class)`);
        applySettingToElement(element, settings[element.id]);
      }
      // If element has a specific class and we have settings for that class
      else {
        for (const className of element.classList) {
          const classKey = `class:${className}`;
          if (settings[classKey]) {
            console.log(`Applying background to element with class: ${className}`);
            applySettingToElement(element, settings[classKey]);
          }
        }
      }
    });
  };
  
  // Helper function to apply a setting to an element
  const applySettingToElement = (element, setting) => {
    if (!element || !setting) return;
    
    console.log('Applying setting to element:', element, setting);
    
    // Apply background type
    if (setting.type) {
      element.classList.remove('simple-background', 'locked-background', 'dynamic-background');
      element.classList.add(`${setting.type}-background`);
      
      if (setting.type === 'locked') {
        element.style.backgroundAttachment = 'fixed';
      } else {
        element.style.backgroundAttachment = 'scroll';
      }
    }
    
    // Apply background image
    if (setting.image) {
      element.style.backgroundImage = `url('${setting.image}')`;
      element.style.backgroundSize = 'cover';
      element.style.backgroundPosition = 'center';
      element.style.backgroundRepeat = 'no-repeat';
    }
  };

  // Create a MutationObserver to watch for new elements being added to the DOM
  useEffect(() => {
    if (Object.keys(backgroundSettings).length === 0) return;
    
    console.log('Setting up MutationObserver for background elements');
    
    // Function to check if any new elements match our background settings
    const checkForNewElements = (mutations) => {
      let shouldReapply = false;
      
      // Check if any new nodes were added that might need background settings
      mutations.forEach(mutation => {
        if (mutation.type === 'childList') {
          mutation.addedNodes.forEach(node => {
            if (node.nodeType === Node.ELEMENT_NODE) {
              // Check if this element or any of its children have IDs that match our settings
              const elementsWithId = node.querySelectorAll('[id]');
              elementsWithId.forEach(el => {
                if (backgroundSettings[el.id]) {
                  console.log(`New element with ID ${el.id} added, will reapply backgrounds`);
                  shouldReapply = true;
                }
              });
              
              // Also check for elements with background classes
              const backgroundElements = node.querySelectorAll('.simple-background, .locked-background, .dynamic-background');
              if (backgroundElements.length > 0) {
                console.log(`New elements with background classes added, will reapply backgrounds`);
                shouldReapply = true;
              }
              
              // Also check the added node itself
              if (node.id && backgroundSettings[node.id]) {
                console.log(`New element with ID ${node.id} added, will reapply backgrounds`);
                shouldReapply = true;
              }
              
              // Check if the node has background classes
              if (node.classList && 
                  (node.classList.contains('simple-background') || 
                   node.classList.contains('locked-background') || 
                   node.classList.contains('dynamic-background'))) {
                console.log(`New element with background class added, will reapply backgrounds`);
                shouldReapply = true;
              }
            }
          });
        } else if (mutation.type === 'attributes') {
          // If an ID or class attribute changed
          const node = mutation.target;
          if (node.id && backgroundSettings[node.id]) {
            console.log(`Element ID ${node.id} changed, will reapply backgrounds`);
            shouldReapply = true;
          }
          
          if (node.classList && 
              (node.classList.contains('simple-background') || 
               node.classList.contains('locked-background') || 
               node.classList.contains('dynamic-background'))) {
            console.log(`Element class changed to include background class, will reapply backgrounds`);
            shouldReapply = true;
          }
        }
      });
      
      // If we found elements that need background settings, reapply them
      if (shouldReapply) {
        console.log('DOM changed, reapplying background settings');
        applyBackgroundSettings(backgroundSettings);
      }
    };
    
    // Create and configure the observer
    const observer = new MutationObserver(checkForNewElements);
    observer.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ['id', 'class']
    });
    
    // Clean up the observer when component unmounts
    return () => observer.disconnect();
  }, [backgroundSettings]);

  // Expose the saveBackgroundSetting function to window for external access
  useEffect(() => {
    // Enhanced saveBackgroundSetting function that works with both IDs and classes
    window.saveBackgroundSetting = async (elementIdOrClass, setting) => {
      let elementId = elementIdOrClass;
      
      console.log(`Saving background setting for: ${elementIdOrClass}`, setting);
      
      // If the element doesn't have an ID but has a class, use the class as the key
      if (!document.getElementById(elementIdOrClass)) {
        const elements = document.getElementsByClassName(elementIdOrClass);
        if (elements.length > 0) {
          elementId = `class:${elementIdOrClass}`;
          console.log(`Using class key instead: ${elementId}`);
        }
      }
      
      const result = await saveBackgroundSetting(elementId, setting);
      console.log(`Background setting saved: ${result}`);
      
      // Force immediate application
      const element = document.getElementById(elementIdOrClass) || 
                     document.getElementsByClassName(elementIdOrClass)[0];
      
      if (element) {
        console.log('Immediately applying background to element');
        applySettingToElement(element, setting);
      }
      
      return result;
    };
    
    return () => {
      delete window.saveBackgroundSetting;
    };
  }, []);

  return null; // This component doesn't render anything
};

export default BackgroundFrames;
