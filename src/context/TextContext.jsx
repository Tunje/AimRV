import React, { createContext, useContext, useState, useEffect } from 'react';
import { useAuth } from './AuthContext';
import { getTextContent, updateTextContent } from '../firebase/textContent';
import { translateAllMissingContent } from '../utils/autoTranslate';

// Available languages
export const LANGUAGES = {
    SV: 'sv',
    EN: 'en',
    NO: 'no'
};

// Language display names
export const LANGUAGE_NAMES = {
    sv: 'Svenska',
    en: 'English',
    no: 'Norsk'
};

// Default language
export const DEFAULT_LANGUAGE = LANGUAGES.SV;

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
    const [currentLanguage, setCurrentLanguage] = useState(() => {
        // Try to get language from localStorage, default to Swedish
        const savedLanguage = localStorage.getItem('preferredLanguage');
        return savedLanguage && Object.values(LANGUAGES).includes(savedLanguage) 
            ? savedLanguage 
            : DEFAULT_LANGUAGE;
    });
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
    const getText = (key, defaultText, language = null) => {
        const lang = language || currentLanguage;
        
        // Check if the content exists and has multilingual structure
        if (textContent[key] && typeof textContent[key] === 'object' && textContent[key]._isMultilingual) {
            // Return the content for the requested language, fall back to Swedish if not available
            return textContent[key][lang] || textContent[key].sv || defaultText;
        }
        
        // Return the content as is (for legacy content)
        return textContent[key] || defaultText;
    };

    // Function to update text content
    const updateText = async (key, newText, language = null) => {
        try {
            const lang = language || currentLanguage;
            
            // Update Firebase with language-specific content
            await updateTextContent(key, newText, lang);
            
            // Get the updated content from Firebase to ensure we have the correct structure
            const updatedFirebaseContent = await getTextContent();
            setTextContent(updatedFirebaseContent);
            
            // Save the current state to history before updating
            setEditHistory(prevHistory => [
                ...prevHistory, 
                { 
                    content: { ...textContent },
                    timestamp: new Date().toISOString(),
                    changedKey: key,
                    language: lang
                }
            ]);
            
            // Also update localStorage as backup
            localStorage.setItem('textContent', JSON.stringify(updatedFirebaseContent));
        } catch (err) {
            console.error('Error updating text content:', err);
            
            // Create a local update if Firebase fails
            const lang = language || currentLanguage;
            let updatedContent = { ...textContent };
            
            // Check if the key already has multilingual structure
            if (updatedContent[key] && typeof updatedContent[key] === 'object' && updatedContent[key]._isMultilingual) {
                // Update only the specified language
                updatedContent[key] = {
                    ...updatedContent[key],
                    [lang]: newText
                };
            } else {
                // Create multilingual structure
                updatedContent[key] = {
                    sv: lang === 'sv' ? newText : (updatedContent[key] || ''),
                    en: lang === 'en' ? newText : '',
                    no: lang === 'no' ? newText : '',
                    _isMultilingual: true
                };
            }
            
            setTextContent(updatedContent);
            localStorage.setItem('textContent', JSON.stringify(updatedContent));
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

    // Function to change the current language
    const changeLanguage = async (language) => {
        if (Object.values(LANGUAGES).includes(language)) {
            // Set the language immediately for UI responsiveness
            setCurrentLanguage(language);
            localStorage.setItem('preferredLanguage', language);
            
            // If switching to a non-Swedish language, check for missing translations
            if (language !== LANGUAGES.SWEDISH && isAdmin) {
                try {
                    // Show loading indicator or notification
                    console.log(`Checking for missing ${LANGUAGE_NAMES[language]} translations...`);
                    
                    // Auto-translate missing content
                    const translatedCount = await translateAllMissingContent(textContent, language, mockTranslateAPI);
                    
                    if (translatedCount > 0) {
                        console.log(`Auto-translated ${translatedCount} missing items to ${LANGUAGE_NAMES[language]}`);
                        
                        // Refresh content from Firebase to get the updated translations
                        const updatedContent = await getTextContent();
                        setTextContent(updatedContent);
                        localStorage.setItem('textContent', JSON.stringify(updatedContent));
                    }
                } catch (error) {
                    console.error('Error during auto-translation:', error);
                }
            }
            
            return true;
        }
        return false;
    };
    
    // Function to translate text using Google Translate API
    const translateText = async (key, targetLanguage) => {
        try {
            // Get the source text (always use Swedish as source)
            const sourceText = getText(key, '', 'sv');
            if (!sourceText) return false;
            
            // Use Google Translate API
            const translatedText = await googleTranslate(sourceText, 'sv', targetLanguage);
            
            // Update the text with the translation
            await updateText(key, translatedText, targetLanguage);
            return true;
        } catch (error) {
            console.error('Translation error:', error);
            return false;
        }
    };
    
    // Real Google Translate API implementation with capitalization preservation
    const googleTranslate = async (text, sourceLang, targetLang) => {
        if (!text) return '';
        
        try {
            // Build the Google Translate API URL
            const apiUrl = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=${sourceLang}&tl=${targetLang}&dt=t&q=${encodeURIComponent(text)}`;
            
            // Fetch the translation
            const response = await fetch(apiUrl);
            const data = await response.json();
            
            // Extract the translated text from the response
            let translatedText = '';
            if (data && data[0]) {
                data[0].forEach(item => {
                    if (item[0]) {
                        translatedText += item[0];
                    }
                });
            }
            
            // If translation failed, return original text
            if (!translatedText) return text;
            
            // Preserve capitalization pattern from original text
            return preserveCapitalization(text, translatedText);
        } catch (error) {
            console.error('Google Translate API error:', error);
            return text; // Return original text on error
        }
    };
    
    // Helper function to preserve capitalization pattern from source to target text
    const preserveCapitalization = (sourceText, translatedText) => {
        // If source is all uppercase, make translation all uppercase
        if (sourceText === sourceText.toUpperCase()) {
            return translatedText.toUpperCase();
        }
        
        // If source is all lowercase, make translation all lowercase
        if (sourceText === sourceText.toLowerCase()) {
            return translatedText.toLowerCase();
        }
        
        // If source starts with capital letter, capitalize first letter of translation
        if (sourceText[0] === sourceText[0].toUpperCase()) {
            return translatedText.charAt(0).toUpperCase() + translatedText.slice(1);
        }
        
        // Otherwise return as is
        return translatedText;
    };
    
    // Mock translation API (replace with real API)
    const mockTranslateAPI = async (text, targetLanguage) => {
        // This is just a placeholder. In a real implementation, you would call an actual translation API.
        // For example, Google Translate, DeepL, or Microsoft Translator
        
        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 800));
        
        // Simple word replacements for demo purposes
        const translations = {
            en: {
                // Common Swedish words translated to English
                'Hem': 'Home',
                'Om oss': 'About us',
                'Kontakt': 'Contact',
                'Regler': 'Rules',
                'Tävlingar': 'Competitions',
                'Senaste nytt': 'Latest news',
                'Läs mer': 'Read more',
                'Skicka': 'Send',
                'Välkommen': 'Welcome',
                'Boka': 'Book',
                'Resultat': 'Results',
                'Bilder': 'Images',
                'Video': 'Video',
                'Delningsbilder': 'Sharing images',
                'Meta Texter': 'Meta Texts',
                'Redigera språk': 'Edit language',
                'Redigera': 'Edit',
                'Spara': 'Save',
                'Avbryt': 'Cancel'
            },
            no: {
                // Common Swedish words translated to Norwegian
                'Hem': 'Hjem',
                'Om oss': 'Om oss',
                'Kontakt': 'Kontakt',
                'Regler': 'Regler',
                'Tävlingar': 'Konkurranser',
                'Senaste nytt': 'Siste nytt',
                'Läs mer': 'Les mer',
                'Skicka': 'Send',
                'Välkommen': 'Velkommen',
                'Boka': 'Bestill',
                'Resultat': 'Resultater',
                'Bilder': 'Bilder',
                'Video': 'Video',
                'Delningsbilder': 'Delingsbilder',
                'Meta Texter': 'Meta Tekster',
                'Redigera språk': 'Rediger språk',
                'Redigera': 'Rediger',
                'Spara': 'Lagre',
                'Avbryt': 'Avbryt'
            }
        };
        
        if (!text) return '';
        
        // Simple word replacement for demo purposes
        let translatedText = text;
        const wordMap = translations[targetLanguage] || {};
        
        // Replace words that match exactly
        Object.entries(wordMap).forEach(([swedish, translated]) => {
            const regex = new RegExp(`\\b${swedish}\\b`, 'gi');
            translatedText = translatedText.replace(regex, translated);
        });
        
        // For words not in our dictionary, add a language tag for demonstration
        if (translatedText === text) {
            const langPrefix = {
                en: '[EN] ',
                no: '[NO] '
            };
            translatedText = `${langPrefix[targetLanguage] || ''}${text}`;
        }
        
        return translatedText;
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
        editHistory,
        // Language related
        currentLanguage,
        changeLanguage,
        translateText,
        LANGUAGES,
        LANGUAGE_NAMES
    };

    return (
        <TextContext.Provider value={value}>
            {children}
        </TextContext.Provider>
    );
};

export default TextContext;
