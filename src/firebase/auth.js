import { 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword,
  signOut,
  updateProfile,
  sendPasswordResetEmail
} from 'firebase/auth';
import { auth } from './config';
import { doc, setDoc, getDoc } from 'firebase/firestore';
import { db } from './config';

// Sign in with email and password
export const signIn = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    
    // Check if user has admin role in Firestore
    const userDoc = await getDoc(doc(db, 'users', user.uid));
    const isAdmin = userDoc.exists() ? userDoc.data().role === 'admin' : false;
    
    return { 
      success: true, 
      user: {
        uid: user.uid,
        email: user.email,
        displayName: user.displayName,
        role: isAdmin ? 'admin' : 'user'
      }
    };
  } catch (error) {
    console.error('Error signing in:', error);
    return { 
      success: false, 
      error: error.message 
    };
  }
};

// Create admin user (only for initial setup)
export const createAdminUser = async (email, password, displayName = 'Admin') => {
  try {
    // Create user with Firebase Auth
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    
    // Update profile with display name
    await updateProfile(user, { displayName });
    
    // Store admin role in Firestore
    await setDoc(doc(db, 'users', user.uid), {
      email,
      displayName,
      role: 'admin',
      createdAt: new Date()
    });
    
    return { 
      success: true, 
      user: {
        uid: user.uid,
        email: user.email,
        displayName,
        role: 'admin'
      }
    };
  } catch (error) {
    console.error('Error creating admin user:', error);
    return { 
      success: false, 
      error: error.message 
    };
  }
};

// Sign out
export const signOutUser = async () => {
  try {
    await signOut(auth);
    return { success: true };
  } catch (error) {
    console.error('Error signing out:', error);
    return { 
      success: false, 
      error: error.message 
    };
  }
};

// Reset password
export const resetPassword = async (email) => {
  try {
    await sendPasswordResetEmail(auth, email);
    return { success: true };
  } catch (error) {
    console.error('Error resetting password:', error);
    return { 
      success: false, 
      error: error.message 
    };
  }
};

// Check if user is admin
export const checkAdminStatus = async (uid) => {
  try {
    const userDoc = await getDoc(doc(db, 'users', uid));
    return userDoc.exists() && userDoc.data().role === 'admin';
  } catch (error) {
    console.error('Error checking admin status:', error);
    return false;
  }
};

// Initialize admin user if it doesn't exist
export const initializeAdminUser = async () => {
  try {
    // Check if admin user exists in Firestore
    const adminSnapshot = await getDoc(doc(db, 'settings', 'admin'));
    
    if (!adminSnapshot.exists()) {
      // Create default admin user
      const result = await createAdminUser('admin@example.com', 'password123');
      
      if (result.success) {
        // Store admin settings
        await setDoc(doc(db, 'settings', 'admin'), {
          initialized: true,
          adminEmail: 'admin@example.com',
          createdAt: new Date()
        });
        console.log('Admin user initialized successfully');
      }
    }
  } catch (error) {
    console.error('Error initializing admin user:', error);
  }
};
