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
      // If no document exists yet, create one with empty content
      await setDoc(textContentDocRef, {});
      return {};
    }
  } catch (error) {
    console.error('Error getting text content:', error);
    return {};
  }
};

// Update text content
export const updateTextContent = async (key, newText) => {
  try {
    const updates = {};
    updates[key] = newText;
    await updateDoc(textContentDocRef, updates);
    return true;
  } catch (error) {
    console.error('Error updating text content:', error);
    return false;
  }
};

// Upload background image
export const uploadBackgroundImage = async (imageData, path) => {
  try {
    const storageRef = ref(textStorage, path);
    await uploadString(storageRef, imageData, 'data_url');
    const downloadURL = await getDownloadURL(storageRef);
    return downloadURL;
  } catch (error) {
    console.error('Error uploading background image:', error);
    throw error;
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
