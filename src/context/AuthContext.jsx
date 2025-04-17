import React, { createContext, useState, useContext, useEffect } from 'react';
import { auth } from '../firebase/config';
import { onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';

// Create the authentication context
const AuthContext = createContext();

// Custom hook to use the auth context
export const useAuth = () => {
    return useContext(AuthContext);
};

// Provider component
export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Subscribe to auth state changes
        const unsubscribe = onAuthStateChanged(auth, async (user) => {
            if (user) {
                // Since there's only one login (admin), automatically set admin role
                const userData = {
                    uid: user.uid,
                    email: user.email,
                    displayName: user.displayName || user.email.split('@')[0],
                    role: 'admin' // Always set as admin for any logged in user
                };
                
                setCurrentUser(userData);
                setIsAuthenticated(true);
            } else {
                setCurrentUser(null);
                setIsAuthenticated(false);
            }
            setLoading(false);
        });

        // Cleanup subscription
        return unsubscribe;
    }, []);

    // Login function
    const login = async (email, password) => {
        try {
            await signInWithEmailAndPassword(auth, email, password);
            return { success: true };
        } catch (error) {
            console.error("Login error:", error);
            return { 
                success: false, 
                error: error.message 
            };
        }
    };

    // Logout function
    const logout = async () => {
        try {
            await signOut(auth);
            return { success: true };
        } catch (error) {
            console.error("Logout error:", error);
            return { 
                success: false, 
                error: error.message 
            };
        }
    };

    const value = {
        currentUser,
        isAuthenticated,
        login,
        logout
    };

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    );
};

export default AuthContext;
