import { db, storage } from './config';
import { 
  collection, 
  doc, 
  setDoc, 
  getDocs, 
  query, 
  where, 
  orderBy 
} from 'firebase/firestore';
import { 
  ref, 
  uploadBytesResumable, 
  getDownloadURL 
} from 'firebase/storage';

const resultsCollection = collection(db, 'results');

// Upload result file and metadata
export const uploadResult = async (file, metadata, userId) => {
  try {
    // Create a unique file name with sanitized values
    const sanitizedCategory = metadata.category.replace(/\s+/g, '_');
    const sanitizedDuration = metadata.duration.replace(/\s+/g, '_');
    const timestamp = Date.now();
    const fileName = `${metadata.year}_${sanitizedCategory}_${sanitizedDuration}_${timestamp}_${file.name}`;
    const storageRef = ref(storage, `results/${fileName}`);
    
    // Add user ID and timestamp to metadata
    const storageMetadata = {
      contentType: file.type,
      customMetadata: {
        year: metadata.year.toString(),
        category: metadata.category,
        duration: metadata.duration,
        location: metadata.location,
        uploadedBy: userId,
        uploadTimestamp: timestamp.toString()
      }
    };

    // Upload file to Storage with proper metadata
    const uploadTask = uploadBytesResumable(storageRef, file, storageMetadata);
    
    return new Promise((resolve, reject) => {
      uploadTask.on('state_changed',
        (snapshot) => {
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log('Upload is ' + progress + '% done');
        },
        (error) => {
          console.error('Upload error:', error);
          reject(error);
        },
        async () => {
          try {
            // Get download URL after upload completes
            const downloadURL = await getDownloadURL(storageRef);
            
            // Create result document in Firestore
            const resultData = {
              year: parseInt(metadata.year),
              location: metadata.location,
              category: metadata.category,
              duration: metadata.duration,
              fileUrl: downloadURL,
              fileName: file.name,
              uploadedAt: new Date().toISOString(),
              uploadedBy: userId,
              timestamp: timestamp
            };
            
            // Use a custom document ID that includes useful metadata
            const docId = `${metadata.year}_${metadata.location}_${sanitizedCategory}_${timestamp}`;
            await setDoc(doc(resultsCollection, docId), resultData);
            
            resolve({ success: true, data: { id: docId, ...resultData }});
          } catch (error) {
            console.error('Error saving to Firestore:', error);
            reject(error);
          }
        }
      );
    });
  } catch (error) {
    console.error('Error in uploadResult:', error);
    throw error;
  }
};

// Get results with optional filters
export const getResults = async (filters = {}) => {
  try {
    let q = query(resultsCollection, orderBy('timestamp', 'desc'));
    
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
      results.push({ id: doc.id, ...doc.data() });
    });
    
    return results;
  } catch (error) {
    console.error('Error getting results:', error);
    throw error;
  }
};
