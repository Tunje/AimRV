import React, { useState } from 'react';
import { useText } from '../context/TextContext';
import '../styles/_language-selector.scss';

const LanguageSwitcher = ({ className = '' }) => {
  const { 
    currentLanguage, 
    changeLanguage, 
    LANGUAGES, 
    LANGUAGE_NAMES,
    isAdmin 
  } = useText();
  const [isTranslating, setIsTranslating] = useState(false);
  const [translationMessage, setTranslationMessage] = useState('');

  const handleLanguageChange = async (language) => {
    if (language !== currentLanguage) {
      // Only show translation feedback for admins
      if (isAdmin && language !== LANGUAGES.SWEDISH) {
        setIsTranslating(true);
        setTranslationMessage(`Translating to ${LANGUAGE_NAMES[language]}...`);
        
        try {
          // Call the async changeLanguage function
          await changeLanguage(language);
          setTranslationMessage(`Translation to ${LANGUAGE_NAMES[language]} complete`);
          
          // Clear message after 3 seconds
          setTimeout(() => {
            setTranslationMessage('');
          }, 3000);
        } catch (error) {
          setTranslationMessage(`Translation error: ${error.message}`);
        } finally {
          setIsTranslating(false);
        }
      } else {
        // For non-admins, just change the language without translation
        changeLanguage(language);
      }
    }
  };

  return (
    <div className={`language-selector ${className}`}>
      <div className="language-selector__options">
        {Object.values(LANGUAGES).map((lang) => (
          <button
            key={lang}
            className={`language-selector__option ${currentLanguage === lang ? 'language-selector__option--active' : ''}`}
            onClick={() => handleLanguageChange(lang)}
            aria-label={`Switch to ${LANGUAGE_NAMES[lang]}`}
            disabled={isTranslating}
          >
            {lang.toUpperCase()}
          </button>
        ))}
      </div>
      
      {/* Translation status message */}
      {translationMessage && (
        <div className="language-selector__translation-status">
          <span className="language-selector__status-text">
            {isTranslating && (
              <span className="language-selector__loading-indicator">
                <svg width="16" height="16" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10" stroke="#666" strokeWidth="2" fill="none" />
                  <path d="M12 2a10 10 0 0 1 10 10" stroke="#0056b3" strokeWidth="2" fill="none" />
                </svg>
              </span>
            )}
            {translationMessage}
          </span>
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
