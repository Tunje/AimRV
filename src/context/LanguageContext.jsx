import React, { createContext, useContext, useState, useEffect } from 'react';
import { LANGUAGES, DEFAULT_LANGUAGE } from './TextContext';

// Create the language context
const LanguageContext = createContext();

// Custom hook to use the language context
export const useLanguage = () => {
  return useContext(LanguageContext);
};

// Provider component
export const LanguageProvider = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState(() => {
    // Try to get language from localStorage, default to Swedish
    const savedLanguage = localStorage.getItem('preferredLanguage');
    return savedLanguage && Object.values(LANGUAGES).includes(savedLanguage) 
      ? savedLanguage 
      : DEFAULT_LANGUAGE;
  });

  // Update localStorage when language changes
  useEffect(() => {
    localStorage.setItem('preferredLanguage', currentLanguage);
  }, [currentLanguage]);

  // Function to change the current language
  const changeLanguage = (language) => {
    if (Object.values(LANGUAGES).includes(language)) {
      setCurrentLanguage(language);
      return true;
    }
    return false;
  };

  const value = {
    currentLanguage,
    changeLanguage,
    LANGUAGES
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageContext;
