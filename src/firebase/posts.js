import { db, storage } from './config';
import { 
  collection, 
  addDoc, 
  getDocs, 
  deleteDoc, 
  doc, 
  query, 
  orderBy 
} from 'firebase/firestore';
import { 
  ref, 
  uploadString, 
  getDownloadURL, 
  deleteObject 
} from 'firebase/storage';

// Collection reference
const postsCollection = collection(db, 'posts');

// Get all posts
export const getPosts = async () => {
  try {
    const q = query(postsCollection, orderBy('createdAt', 'desc'));
    const querySnapshot = await getDocs(q);
    
    const posts = [];
    querySnapshot.forEach((doc) => {
      posts.push({
        id: doc.id,
        ...doc.data()
      });
    });
    
    return posts;
  } catch (error) {
    console.error('Error getting posts:', error);
    throw error;
  }
};

// Add a new post with image
export const addPost = async (post, imageData) => {
  try {
    // Upload image to storage if provided
    let imageUrl = null;
    
    if (imageData) {
      // Create a reference to the image in storage
      const imageRef = ref(storage, `post-images/${Date.now()}`);
      
      // Upload the image
      await uploadString(imageRef, imageData, 'data_url');
      
      // Get the download URL
      imageUrl = await getDownloadURL(imageRef);
    }
    
    // Add the post to Firestore
    const docRef = await addDoc(postsCollection, {
      title: post.title,
      content: post.content,
      image: imageUrl || post.image,
      date: post.date,
      createdAt: new Date().toISOString()
    });
    
    return {
      id: docRef.id,
      ...post,
      image: imageUrl || post.image
    };
  } catch (error) {
    console.error('Error adding post:', error);
    throw error;
  }
};

// Delete a post
export const deletePost = async (postId, imageUrl) => {
  try {
    // Delete the post document
    await deleteDoc(doc(db, 'posts', postId));
    
    // Delete the image if it exists
    if (imageUrl) {
      const imageRef = ref(storage, imageUrl);
      await deleteObject(imageRef);
    }
  } catch (error) {
    console.error('Error deleting post:', error);
    throw error;
  }
};
