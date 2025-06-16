import React, { useState } from "react";
import { useText } from "../context/TextContext";
import "../styles/_language-selector.scss";

const LanguageSwitcher = ({ className = "" }) => {
  const { currentLanguage, changeLanguage, LANGUAGES, LANGUAGE_NAMES } =
    useText();

  const [isChanging, setIsChanging] = useState(false);

  const handleLanguageChange = (language) => {
    if (language !== currentLanguage) {
      setIsChanging(true);

      // Change the language
      changeLanguage(language);

      // Reset the changing state after a short delay to show transition effect
      setTimeout(() => {
        setIsChanging(false);
      }, 500);
    }
  };

  const isMobile = className.includes("mobile");

  return (
    <div
      className={`language-selector ${
        isMobile ? "" : "navbar-language"
      } ${className}`}
    >
      <div
        className={
          isMobile ? "language-selector__options" : "navbar-lang-options"
        }
      >
        {Object.values(LANGUAGES).map((lang) => (
          <button
            key={lang}
            className={
              isMobile
                ? `language-selector__option ${
                    currentLanguage === lang
                      ? "language-selector__option--active"
                      : ""
                  }`
                : `navbar-lang-button ${
                    currentLanguage === lang ? "navbar-lang-button--active" : ""
                  }`
            }
            onClick={() => handleLanguageChange(lang)}
            aria-label={`Switch to ${LANGUAGE_NAMES[lang]}`}
            disabled={isChanging}
          >
            {lang.toUpperCase()}
          </button>
        ))}
      </div>
    </div>
  );
};

export default LanguageSwitcher;
