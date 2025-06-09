import React from 'react';
import { useText } from '../context/TextContext';
import '../styles/_language-selector.scss';

const LanguageSwitcher = ({ className = '' }) => {
  const { 
    currentLanguage, 
    changeLanguage, 
    LANGUAGES, 
    LANGUAGE_NAMES
  } = useText();

  const handleLanguageChange = (language) => {
    if (language !== currentLanguage) {
      // Simply change the language without auto-translation
      changeLanguage(language);
    }
  };

  return (
    <div className={`language-selector ${className.includes('mobile') ? '' : 'navbar-language'} ${className}`}>
      <div className={className.includes('mobile') ? 'language-selector__options' : 'navbar-lang-options'}>
        {Object.values(LANGUAGES).map((lang) => (
          <button
            key={lang}
            className={className.includes('mobile') 
              ? `language-selector__option ${currentLanguage === lang ? 'language-selector__option--active' : ''}` 
              : `navbar-lang-button ${currentLanguage === lang ? 'navbar-lang-button--active' : ''}`
            }
            onClick={() => handleLanguageChange(lang)}
            aria-label={`Switch to ${LANGUAGE_NAMES[lang]}`}
          >
            {lang.toUpperCase()}
          </button>
        ))}
      </div>
    </div>
  );
};

export default LanguageSwitcher;
