import React, { createContext, useContext, useState, useEffect } from 'react';
import { useAuth } from './AuthContext';
import { getTextContent, updateTextContent } from '../firebase/textContent';

// Create the text context
const TextContext = createContext();

// Custom hook to use the text context
export const useText = () => {
    return useContext(TextContext);
};

// Provider component
export const TextProvider = ({ children }) => {
    const [textContent, setTextContent] = useState({});
    const [isEditing, setIsEditing] = useState(false);
    const [editHistory, setEditHistory] = useState([]);
    const { currentUser, isAuthenticated } = useAuth();
    
    const isAdmin = currentUser?.role === 'admin';

    // Load text content from Firebase on component mount
    useEffect(() => {
        const fetchTextContent = async () => {
            try {
                const content = await getTextContent();
                setTextContent(content);
            } catch (err) {
                console.error('Error fetching text content:', err);
                // Use localStorage as fallback if Firebase fails
                const savedContent = localStorage.getItem('textContent');
                if (savedContent) {
                    try {
                        setTextContent(JSON.parse(savedContent));
                    } catch (parseError) {
                        console.error('Error parsing saved content:', parseError);
                        setTextContent({});
                    }
                }
            }
        };
        
        fetchTextContent();
    }, []);

    // Set editing mode to true when user is admin
    useEffect(() => {
        if (isAuthenticated && isAdmin) {
            setIsEditing(true);
        } else {
            setIsEditing(false);
        }
    }, [isAuthenticated, isAdmin]);

    // Function to get text content with a default fallback
    const getText = (key, defaultText) => {
        return textContent[key] || defaultText;
    };

    // Function to update text content
    const updateText = async (key, newText) => {
        try {
            // Update Firebase
            await updateTextContent(key, newText);
            
            // Update local state
            const updatedContent = {
                ...textContent,
                [key]: newText
            };
            setTextContent(updatedContent);
            
            // Save the current state to history before updating
            setEditHistory(prevHistory => [
                ...prevHistory, 
                { 
                    content: { ...textContent },
                    timestamp: new Date().toISOString(),
                    changedKey: key
                }
            ]);
            
            // Also update localStorage as backup
            localStorage.setItem('textContent', JSON.stringify(updatedContent));
        } catch (err) {
            console.error('Error updating text content:', err);
            // Update localStorage even if Firebase fails
            const updatedContent = {
                ...textContent,
                [key]: newText
            };
            localStorage.setItem('textContent', JSON.stringify(updatedContent));
            setTextContent(updatedContent);
        }
    };

    // Function to remove a specific content item
    const removeContentItem = (key) => {
        // Save the current state to history before removing
        setEditHistory(prevHistory => [
            ...prevHistory, 
            { 
                content: { ...textContent },
                timestamp: new Date().toISOString(),
                changedKey: key,
                action: 'remove'
            }
        ]);
        
        const updatedContent = { ...textContent };
        delete updatedContent[key];
        
        setTextContent(updatedContent);
        localStorage.setItem('textContent', JSON.stringify(updatedContent));
        console.log(`Content item '${key}' has been removed`);
    };

    // Reset all content
    const resetAllContent = () => {
        // Save the current state to history before resetting
        setEditHistory(prevHistory => [
            ...prevHistory, 
            { 
                content: { ...textContent },
                timestamp: new Date().toISOString(),
                action: 'reset-all'
            }
        ]);
        
        setTextContent({});
        localStorage.removeItem('textContent');
        console.log("All content has been reset");
    };

    // Undo the last change
    const undoLastChange = () => {
        if (editHistory.length > 1) {
            // Remove the current state from history
            const newHistory = [...editHistory];
            newHistory.pop();
            
            // Get the previous state
            const previousState = newHistory[newHistory.length - 1].content;
            
            // Update the content
            setTextContent(previousState);
            localStorage.setItem('textContent', JSON.stringify(previousState));
            
            // Update the history
            setEditHistory(newHistory);
            
            console.log("Last change undone");
            return true;
        }
        console.log("No changes to undo");
        return false;
    };

    // Get edit history
    const getEditHistory = () => {
        return editHistory;
    };

    // Toggle editing mode - now just a placeholder since edit mode is always on for admins
    const toggleEditing = () => {
        // No longer needed as edit mode is always on for admins
        console.log("Edit mode is always on for admin users");
    };

    const value = {
        getText,
        updateText,
        isEditing,
        toggleEditing,
        isAdmin,
        textContent,
        resetAllContent,
        removeContentItem,
        undoLastChange,
        getEditHistory,
        editHistory
    };

    return (
        <TextContext.Provider value={value}>
            {children}
        </TextContext.Provider>
    );
};

export default TextContext;
