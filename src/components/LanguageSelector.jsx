import React from 'react';
import { useText } from '../context/TextContext';
import '../styles/_language-selector.scss';

const LanguageSelector = ({ className = '' }) => {
  const { 
    currentLanguage, 
    changeLanguage, 
    LANGUAGES, 
    LANGUAGE_NAMES 
  } = useText();

  const handleLanguageChange = (language) => {
    changeLanguage(language);
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
          >
            {LANGUAGE_NAMES[lang]}
          </button>
        ))}
      </div>
    </div>
  );
};

export default LanguageSelector;
