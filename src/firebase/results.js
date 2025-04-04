import { db, storage } from './config';
import { 
  collection, 
  doc, 
  deleteDoc, 
  getDocs, 
  query, 
  where 
} from 'firebase/firestore';
import { 
  ref,
  deleteObject 
} from 'firebase/storage';

const resultsCollection = collection(db, 'results');

// Get results with optional filters
export const getResults = async (filters = {}) => {
  try {
    let q = query(resultsCollection);
    
    // Apply filters if provided
    if (filters.year) {
      q = query(q, where('year', '==', parseInt(filters.year)));
    }
    if (filters.category) {
      q = query(q, where('category', '==', filters.category));
    }
    if (filters.duration) {
      q = query(q, where('duration', '==', filters.duration));
    }
    if (filters.location) {
      q = query(q, where('location', '==', filters.location));
    }
    
    const querySnapshot = await getDocs(q);
    const results = [];
    
    querySnapshot.forEach((doc) => {
      const data = doc.data();
      results.push({ 
        id: doc.id, 
        ...data,
        year: parseInt(data.year) // Make sure year is a number
      });
    });
    
    console.log('Firebase results:', results); // Debug log
    return results;
  } catch (error) {
    console.error('Error getting results:', error);
    throw error;
  }
};

// Delete result from Firestore and Storage
export const deleteResult = async (resultId, fileUrl) => {
  try {
    // Delete from Firestore
    await deleteDoc(doc(db, 'results', resultId));
    
    // Delete from Storage if fileUrl exists
    if (fileUrl) {
      const fileRef = ref(storage, fileUrl);
      await deleteObject(fileRef);
    }
  } catch (error) {
    console.error('Error deleting result:', error);
    throw error;
  }
};
