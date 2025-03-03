import { db, auth } from './config';
import { doc, setDoc } from 'firebase/firestore';
import { signInWithEmailAndPassword } from 'firebase/auth';

// Function to set up admin user in Firestore
export const setupAdminUser = async () => {
  try {
    // First, sign in as admin
    const email = 'admin@example.com';
    const password = 'password123';
    
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const uid = userCredential.user.uid;
    
    // Set admin role in Firestore
    const userRoleRef = doc(db, 'userRoles', uid);
    await setDoc(userRoleRef, {
      role: 'admin',
      email: email,
      createdAt: new Date().toISOString()
    });
    
    console.log('Admin user set up successfully!');
    return true;
  } catch (error) {
    console.error('Error setting up admin user:', error);
    return false;
  }
};

// Export a function to check and set up admin if needed
export const ensureAdminExists = async () => {
  try {
    // Try to sign in as admin
    const email = 'admin@example.com';
    const password = 'password123';
    
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const uid = userCredential.user.uid;
    
    // Check if admin role exists
    const userRoleRef = doc(db, 'userRoles', uid);
    await setDoc(userRoleRef, {
      role: 'admin',
      email: email,
      updatedAt: new Date().toISOString()
    }, { merge: true });
    
    console.log('Admin role ensured');
    return true;
  } catch (error) {
    console.error('Error ensuring admin exists:', error);
    return false;
  }
};
