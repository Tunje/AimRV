import { db, textStorage } from './config';
import { 
  doc, 
  getDoc, 
  setDoc, 
  updateDoc 
} from 'firebase/firestore';
import { 
  ref, 
  uploadString, 
  uploadBytes, 
  getDownloadURL 
} from 'firebase/storage';

// Document reference for text content
const textContentDocRef = doc(db, 'settings', 'textContent');

// Get all text content
export const getTextContent = async () => {
  try {
    const docSnap = await getDoc(textContentDocRef);
    
    if (docSnap.exists()) {
      return docSnap.data();
    } else {
      // If no document exists yet, create one with empty content and language structure
      const initialContent = {
        _languageStructure: {
          initialized: true,
          availableLanguages: ['sv', 'en', 'no']
        }
      };
      await setDoc(textContentDocRef, initialContent);
      return initialContent;
    }
  } catch (error) {
    console.error('Error getting text content:', error);
    return {};
  }
};

// Update text content
export const updateTextContent = async (key, newText, language = 'sv') => {
  try {
    // Get current content to check if this is a multilingual key
    const docSnap = await getDoc(textContentDocRef);
    const currentContent = docSnap.exists() ? docSnap.data() : {};
    
    const updates = {};
    
    // Check if this key already has multilingual structure
    if (currentContent[key] && typeof currentContent[key] === 'object' && currentContent[key]._isMultilingual) {
      // Update only the specified language while preserving others
      updates[`${key}.${language}`] = newText;
      // Make sure the multilingual flag stays
      updates[`${key}._isMultilingual`] = true;
    } else {
      // Convert to multilingual structure if it's not already
      updates[key] = {
        sv: language === 'sv' ? newText : (currentContent[key] || ''),
        en: language === 'en' ? newText : '',
        no: language === 'no' ? newText : '',
        _isMultilingual: true
      };
      
      // If we're updating a non-default language, make sure to set that value
      if (language !== 'sv') {
        updates[key][language] = newText;
      }
    }
    
    await updateDoc(textContentDocRef, updates);
    return true;
  } catch (error) {
    console.error('Error updating text content:', error);
    return false;
  }
};

// Get text content for a specific language
export const getTextContentForLanguage = async (language = 'sv') => {
  try {
    const allContent = await getTextContent();
    const languageContent = {};
    
    // Process each key to extract the right language content
    Object.entries(allContent).forEach(([key, value]) => {
      // Skip metadata keys
      if (key.startsWith('_')) return;
      
      if (value && typeof value === 'object' && value._isMultilingual) {
        // This is a multilingual entry, get the right language or fall back to Swedish
        languageContent[key] = value[language] || value.sv || '';
      } else {
        // This is a legacy entry (not multilingual), just use as is
        languageContent[key] = value;
      }
    });
    
    return languageContent;
  } catch (error) {
    console.error('Error getting language-specific content:', error);
    return {};
  }
};

// Document reference for background images
const backgroundImagesDocRef = doc(db, 'settings', 'backgroundImages');

// Get all background images
export const getBackgroundImages = async () => {
  try {
    const docSnap = await getDoc(backgroundImagesDocRef);
    
    if (docSnap.exists()) {
      return docSnap.data();
    } else {
      // If no document exists yet, create one with empty content
      await setDoc(backgroundImagesDocRef, {});
      return {};
    }
  } catch (error) {
    console.error('Error getting background images:', error);
    return {};
  }
};

// Update background image
export const updateBackgroundImage = async (key, imageUrl) => {
  try {
    const updates = {};
    updates[key] = imageUrl;
    await updateDoc(backgroundImagesDocRef, updates);
    return true;
  } catch (error) {
    console.error('Error updating background image:', error);
    return false;
  }
};
