import { db, storage } from './config';
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
    const update = {};
    update[key] = newText;
    
    await updateDoc(textContentDocRef, update);
    return { success: true };
  } catch (error) {
    console.error('Error updating text content:', error);
    throw error;
  }
};

// Upload background image
export const uploadBackgroundImage = async (imageData, path) => {
  try {
    // Create a reference to the image in storage
    const imageRef = ref(storage, `background-images/${path}`);
    
    // Upload the image
    await uploadString(imageRef, imageData, 'data_url');
    
    // Get the download URL
    const imageUrl = await getDownloadURL(imageRef);
    
    return imageUrl;
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
    const update = {};
    update[key] = imageUrl;
    
    await updateDoc(backgroundImagesDocRef, update);
    return { success: true };
  } catch (error) {
    console.error('Error updating background image:', error);
    throw error;
  }
};
