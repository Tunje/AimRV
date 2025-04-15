import { db, storage } from './config';
import { collection, getDocs, doc, setDoc, deleteDoc, getDoc } from 'firebase/firestore';
import { ref, deleteObject, getDownloadURL } from 'firebase/storage';

/**
 * Helper function to extract the storage path from a Firebase Storage URL
 * @param {string} url - The Firebase Storage URL
 * @returns {string|null} The decoded path or null if not found
 */
const extractStoragePath = (url) => {
  if (!url) return null;
  const match = url.match(/\/o\/(.+)\?alt=media/);
  return match ? decodeURIComponent(match[1]) : null;
};

/**
 * Get all background settings from Firestore
 * @returns {Promise<Object>} Object with background settings
 */
export const getAllBackgroundSettings = async () => {
  try {
    const backgroundsCollection = collection(db, 'backgrounds');
    const snapshot = await getDocs(backgroundsCollection);
    
    const settings = {};
    snapshot.forEach((doc) => {
      settings[doc.id] = doc.data();
    });
    
    return settings;
  } catch (error) {
    console.error('Error fetching background settings:', error);
    throw error;
  }
};

/**
 * Get a specific background setting
 * @param {string} elementId - The ID of the element
 * @returns {Promise<Object|null>} The background setting or null if not found
 */
export const getBackgroundSetting = async (elementId) => {
  try {
    const docRef = doc(db, 'backgrounds', elementId);
    const docSnap = await getDoc(docRef);
    
    if (docSnap.exists()) {
      return docSnap.data();
    } else {
      return null;
    }
  } catch (error) {
    console.error(`Error fetching background setting for ${elementId}:`, error);
    throw error;
  }
};

/**
 * Save a background setting to Firestore
 * @param {string} elementId - The ID of the element
 * @param {Object} setting - The background setting object
 * @returns {Promise<boolean>} True if successful
 */
export const saveBackgroundSetting = async (elementId, setting) => {
  try {
    // First, check if there's an existing setting with an image to delete
    const existingSetting = await getBackgroundSetting(elementId);
    
    // If there's an existing image and it's different from the new one, delete it
    if (existingSetting && 
        existingSetting.image && 
        setting.image && 
        existingSetting.image !== setting.image) {
      try {
        const oldImagePath = extractStoragePath(existingSetting.image);
        if (oldImagePath) {
          const oldImageRef = ref(storage, oldImagePath);
          await deleteObject(oldImageRef);
          console.log(`Deleted old background image: ${oldImagePath}`);
        }
      } catch (deleteError) {
        console.warn(`Failed to delete old image, it may not exist anymore: ${deleteError.message}`);
        // Continue with saving the new setting even if deletion fails
      }
    }
    
    // Save the new setting
    const backgroundRef = doc(db, 'backgrounds', elementId);
    await setDoc(backgroundRef, setting, { merge: true });
    return true;
  } catch (error) {
    console.error('Error saving background setting:', error);
    throw error;
  }
};

/**
 * Delete a background setting from Firestore
 * @param {string} elementId - The ID of the element
 * @returns {Promise<boolean>} True if successful
 */
export const deleteBackgroundSetting = async (elementId) => {
  try {
    // First, get the setting to check if there's an image to delete
    const setting = await getBackgroundSetting(elementId);
    
    // If there's an image, delete it from storage
    if (setting && setting.image) {
      try {
        const imagePath = extractStoragePath(setting.image);
        if (imagePath) {
          const imageRef = ref(storage, imagePath);
          await deleteObject(imageRef);
          console.log(`Deleted background image: ${imagePath}`);
        }
      } catch (deleteError) {
        console.warn(`Failed to delete image, it may not exist anymore: ${deleteError.message}`);
        // Continue with deleting the document even if image deletion fails
      }
    }
    
    // Delete the document from Firestore
    await deleteDoc(doc(db, 'backgrounds', elementId));
    return true;
  } catch (error) {
    console.error('Error deleting background setting:', error);
    throw error;
  }
};
