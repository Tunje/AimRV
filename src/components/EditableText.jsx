import React, { useState, useEffect, useRef } from 'react';
import { useText } from '../context/TextContext';
import ReactDOM from 'react-dom';
import '../styles/_editable-text.scss';

const EditableText = ({ textKey, defaultText, tag = 'p', className = '', style = {}, placeholder = 'Skriv text här...', onClick }) => {
    const { 
        getText, 
        updateText, 
        isAdmin, 
        currentLanguage, 
        LANGUAGES, 
        LANGUAGE_NAMES,
        translateText
    } = useText();
    const [isEditing, setIsEditing] = useState(false);
    const [text, setText] = useState('');
    const [showLinkTools, setShowLinkTools] = useState(false);
    const [linkText, setLinkText] = useState('');
    const [linkUrl, setLinkUrl] = useState('');
    const [activeLanguageTab, setActiveLanguageTab] = useState(currentLanguage);
    const [translations, setTranslations] = useState({
        sv: '',
        en: '',
        no: ''
    });
    const [isTranslating, setIsTranslating] = useState(false);
    const [selectedLanguages, setSelectedLanguages] = useState({
        sv: true,
        en: false,
        no: false
    });
    const textareaRefs = useRef({
        sv: null,
        en: null,
        no: null
    });
    const linkTextRef = useRef(null);
    const linkUrlRef = useRef(null);

    // Determine if the tag is an inline element
    const isInlineElement = ['span', 'a', 'em', 'strong', 'i', 'b', 'code', 'small'].includes(tag);

    useEffect(() => {
        // Load text for current language
        const savedText = getText(textKey, defaultText);
        setText(savedText);
        
        // Load translations for all languages
        const svText = getText(textKey, defaultText, 'sv');
        const enText = getText(textKey, defaultText, 'en');
        const noText = getText(textKey, defaultText, 'no');
        
        setTranslations({
            sv: svText,
            en: enText,
            no: noText
        });
    }, [textKey, defaultText, getText, currentLanguage]);

    // Add event listener for Escape key
    useEffect(() => {
        const handleEscapeKey = (e) => {
            if (e.key === 'Escape' && isEditing) {
                handleCancel();
            }
        };

        document.addEventListener('keydown', handleEscapeKey);
        
        return () => {
            document.removeEventListener('keydown', handleEscapeKey);
        };
    }, [isEditing]);

    const handleEdit = (e) => {
        if (e) {
            e.preventDefault();
            e.stopPropagation();
        }
        setIsEditing(true);
    };

    const handleSave = async () => {
        // Save all language versions
        for (const lang of Object.values(LANGUAGES)) {
            await updateText(textKey, translations[lang], lang);
        }
        
        // Update the main text to match the current language
        setText(translations[currentLanguage]);
        
        setIsEditing(false);
        setShowLinkTools(false);
    };

    const handleCancel = () => {
        // Reset text to the saved translation for the active language tab
        const savedText = getText(textKey, defaultText, activeLanguageTab);
        setText(savedText);
        setIsEditing(false);
        setShowLinkTools(false);
    };

    const handleChange = (e) => {
        setText(e.target.value);
    };

    const toggleLinkTools = () => {
        setShowLinkTools(!showLinkTools);
        setLinkText('');
        setLinkUrl('');
        // Reset language selection to current active language
        setSelectedLanguages({
            sv: activeLanguageTab === 'sv',
            en: activeLanguageTab === 'en',
            no: activeLanguageTab === 'no'
        });
    };

    const insertLink = () => {
        if (linkText && linkUrl) {
            // Make sure URL has http:// or https:// prefix
            let formattedUrl = linkUrl;
            if (!formattedUrl.startsWith('http://') && !formattedUrl.startsWith('https://')) {
                formattedUrl = 'https://' + formattedUrl;
            }
            
            // Use target="_blank" to open in a new window/tab
            const linkHtml = `<a href="${formattedUrl}" target="_blank" rel="noopener noreferrer">${linkText}</a>`;
            
            // Insert the link into each selected language's textarea
            Object.entries(selectedLanguages).forEach(([lang, isSelected]) => {
                if (isSelected && textareaRefs.current[lang]) {
                    const textarea = textareaRefs.current[lang];
                    const cursorPos = textarea.selectionStart;
                    const currentText = translations[lang];
                    const textBefore = currentText.substring(0, cursorPos);
                    const textAfter = currentText.substring(textarea.selectionEnd);
                    
                    const newText = textBefore + linkHtml + textAfter;
                    
                    // Update the translations state
                    updateLanguageText(lang, newText);
                    
                    // Focus back on textarea and set cursor position
                    setTimeout(() => {
                        textarea.focus();
                        const newCursorPos = cursorPos + linkHtml.length;
                        textarea.setSelectionRange(newCursorPos, newCursorPos);
                    }, 0);
                }
            });
            
            setLinkText('');
            setLinkUrl('');
        }
    };

    const handleLinkTextChange = (e) => {
        setLinkText(e.target.value);
    };

    const handleLinkUrlChange = (e) => {
        setLinkUrl(e.target.value);
    };
    
    const handleLanguageCheckboxChange = (lang) => {
        setSelectedLanguages(prev => ({
            ...prev,
            [lang]: !prev[lang]
        }));
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter' && e.ctrlKey) {
            e.preventDefault();
            handleSave();
        } else if (e.key === 'Escape') {
            e.preventDefault();
            handleCancel();
        }
    };
    
    // Update text for a specific language
    const updateLanguageText = (language, newText) => {
        setTranslations(prev => ({
            ...prev,
            [language]: newText
        }));
        
        // If this is the active language, also update the main text
        if (language === activeLanguageTab) {
            setText(newText);
        }
    };
    
    // Handle auto-translation of the current text
    const handleAutoTranslate = async (targetLanguage) => {
        if (isTranslating) return;
        
        setIsTranslating(true);
        
        try {
            // Get the Swedish source text
            const sourceText = translations.sv || '';
            
            if (!sourceText) {
                console.error('No Swedish source text available for translation');
                return;
            }
            
            console.log(`Translating from Swedish to ${targetLanguage}: ${sourceText}`);
            
            // First update the text content in Firebase to ensure Swedish text is saved
            await updateText(textKey, sourceText, 'sv');
            
            // Then use the translateText function from context
            const success = await translateText(textKey, targetLanguage);
            
            if (success) {
                // Get the newly translated text
                const translatedText = getText(textKey, defaultText, targetLanguage);
                console.log(`Translation result: ${translatedText}`);
                
                // Update our local state
                setTranslations(prev => ({
                    ...prev,
                    [targetLanguage]: translatedText
                }));
            }
        } catch (error) {
            console.error('Translation failed:', error);
        } finally {
            setIsTranslating(false);
        }
    };

    const renderModal = () => {
        if (!isEditing) return null;
        
        return ReactDOM.createPortal(
            <div className="edit-modal-overlay">
                <div className="edit-modal">
                    <h3 className="edit-modal__title">Redigera text</h3>
                    
                    {/* All languages shown vertically */}
                    <div className="edit-modal__languages-vertical">
                        {Object.values(LANGUAGES).map((lang) => (
                            <div key={lang} className="edit-modal__language-section">
                                <div className="edit-modal__language-header">
                                    <h4 className="edit-modal__language-title">{LANGUAGE_NAMES[lang]}</h4>
                                    
                                    {/* Translation button for non-Swedish languages */}
                                    {lang !== 'sv' && (
                                        <button
                                            type="button"
                                            onClick={() => handleAutoTranslate(lang)}
                                            className="modal-action-button modal-action-button--secondary modal-action-button--small"
                                            disabled={isTranslating}
                                        >
                                            {isTranslating ? 'Översätter...' : `Översätt till ${LANGUAGE_NAMES[lang]}`}
                                        </button>
                                    )}
                                </div>
                                
                                <textarea
                                    value={translations[lang]}
                                    onChange={(e) => updateLanguageText(lang, e.target.value)}
                                    onKeyDown={handleKeyDown}
                                    className="edit-modal__textarea"
                                    autoFocus={lang === currentLanguage}
                                    ref={el => textareaRefs.current[lang] = el}
                                />
                            </div>
                        ))}
                    </div>
                    
                    <button 
                        type="button" 
                        onClick={toggleLinkTools}
                        className="modal-action-button modal-action-button--secondary"
                    >
                        {showLinkTools ? 'Dölj länkverktyg' : 'Lägg till länk'}
                    </button>
                    
                    {showLinkTools && (
                        <div className="edit-modal__link-tools">
                            <div className="edit-modal__form-group">
                                <label htmlFor="linkText" className="edit-modal__label">Länktext:</label>
                                <input
                                    ref={linkTextRef}
                                    type="text"
                                    id="linkText"
                                    value={linkText}
                                    onChange={handleLinkTextChange}
                                    className="edit-modal__input"
                                    placeholder="Text som ska visas"
                                />
                            </div>
                            
                            <div className="edit-modal__form-group">
                                <label htmlFor="linkUrl" className="edit-modal__label">URL:</label>
                                <input
                                    ref={linkUrlRef}
                                    type="text"
                                    id="linkUrl"
                                    value={linkUrl}
                                    onChange={handleLinkUrlChange}
                                    className="edit-modal__input"
                                    placeholder="https://example.com"
                                />
                            </div>
                            
                            <div className="edit-modal__language-checkboxes">
                                <p className="edit-modal__label">Infoga länk i:</p>
                                {Object.values(LANGUAGES).map((lang) => (
                                    <label key={`link-lang-${lang}`} className="edit-modal__checkbox-label">
                                        <input
                                            type="checkbox"
                                            checked={selectedLanguages[lang]}
                                            onChange={() => handleLanguageCheckboxChange(lang)}
                                            className="edit-modal__checkbox"
                                        />
                                        {LANGUAGE_NAMES[lang]}
                                    </label>
                                ))}
                            </div>
                            
                            <button 
                                type="button" 
                                onClick={insertLink} 
                                disabled={!linkText || !linkUrl || !Object.values(selectedLanguages).some(v => v)}
                                className="modal-action-button modal-action-button--primary"
                            >
                                Infoga länk
                            </button>
                        </div>
                    )}
                    
                    <div className="edit-modal__actions">
                        <button 
                            type="button" 
                            onClick={handleCancel} 
                            className="modal-action-button modal-action-button--secondary"
                        >
                            Avbryt
                        </button>
                        <button 
                            type="button" 
                            onClick={handleSave} 
                            className="modal-action-button modal-action-button--primary"
                        >
                            Spara
                        </button>
                    </div>
                </div>
            </div>,
            document.body
        );
    };

    const renderEditableContent = () => {
        const TagName = tag;
        const contentProps = {
            className: `editable-text ${className}`,
            style: style,
            dangerouslySetInnerHTML: { __html: text || placeholder },
            onClick: onClick
        };

        return <TagName {...contentProps} />;
    };

    // Use the appropriate wrapper based on whether the tag is an inline element
    const WrapperTag = isInlineElement ? 'span' : 'div';
    
    return (
        <>
            <WrapperTag className="editable-text-wrapper">
                {renderEditableContent()}
                {isAdmin && (
                    <button 
                        type="button" 
                        onClick={handleEdit} 
                        className="edit-button edit-button-primary"
                        title="Redigera text"
                    >
                        Redigera
                    </button>
                )}
            </WrapperTag>
            {renderModal()}
        </>
    );
};

export default EditableText;
