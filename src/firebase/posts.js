// Import Firebase dependencies
import { db } from './config';
import { collection, getDocs, query, orderBy } from 'firebase/firestore';

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
