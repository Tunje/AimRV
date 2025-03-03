import React, { useState, useEffect, useRef } from 'react';
import { useText } from '../context/TextContext';

const EditableText = ({ textKey, defaultText, tag = 'p', className = '', style = {}, placeholder = 'Skriv text här...', onClick }) => {
    const { getText, updateText, isAdmin } = useText();
    const [isEditing, setIsEditing] = useState(false);
    const [text, setText] = useState('');
    const [showLinkTools, setShowLinkTools] = useState(false);
    const [linkUrl, setLinkUrl] = useState('');
    const [linkText, setLinkText] = useState('');
    const textareaRef = useRef(null);
    const linkTextRef = useRef(null);
    const linkUrlRef = useRef(null);

    // Determine if the tag is an inline element
    const isInlineElement = ['span', 'a', 'em', 'strong', 'i', 'b', 'code', 'small'].includes(tag);

    useEffect(() => {
        const savedText = getText(textKey);
        setText(savedText || defaultText);
    }, [textKey, defaultText, getText]);

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

    const handleSave = () => {
        updateText(textKey, text);
        setIsEditing(false);
        setShowLinkTools(false);
    };

    const handleCancel = () => {
        const savedText = getText(textKey);
        setText(savedText || defaultText);
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
            const textarea = textareaRef.current;
            const cursorPos = textarea.selectionStart;
            const textBefore = text.substring(0, cursorPos);
            const textAfter = text.substring(textarea.selectionEnd);
            
            setText(textBefore + linkHtml + textAfter);
            setLinkText('');
            setLinkUrl('');
            
            // Focus back on textarea
            setTimeout(() => {
                textarea.focus();
                const newCursorPos = cursorPos + linkHtml.length;
                textarea.setSelectionRange(newCursorPos, newCursorPos);
            }, 0);
        }
    };

    const handleLinkTextChange = (e) => {
        setLinkText(e.target.value);
    };

    const handleLinkUrlChange = (e) => {
        setLinkUrl(e.target.value);
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

    const renderEditableContent = () => {
        const TagName = tag;
        const contentProps = {
            className: `editable-text ${className}`,
            style,
            dangerouslySetInnerHTML: { __html: text || placeholder },
            'data-textkey': textKey.toString() // Ensure this is properly set
        };
        
        if (onClick) {
            contentProps.onClick = onClick;
        }

        return <TagName {...contentProps} />;
    };

    if (isEditing) {
        return (
            <div className="edit-modal">
                <div className="edit-modal__content">
                    <div className="edit-modal__toolbar">
                        <h3>Redigera text</h3>
                        <span className="edit-modal__hint">Tryck Ctrl+Enter för att spara, Esc för att avbryta</span>
                    </div>
                    
                    <textarea
                        ref={textareaRef}
                        value={text}
                        onChange={handleChange}
                        onKeyDown={handleKeyDown}
                        placeholder={placeholder}
                        className="edit-modal__textarea"
                    />
                    
                    <button 
                        type="button" 
                        onClick={toggleLinkTools} 
                        className="modal-button modal-button-secondary"
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
                            
                            <button 
                                type="button" 
                                onClick={insertLink} 
                                disabled={!linkText || !linkUrl}
                                className="modal-button modal-button-primary"
                            >
                                Infoga länk
                            </button>
                        </div>
                    )}
                    
                    <div className="edit-modal__actions">
                        <button 
                            type="button" 
                            onClick={handleCancel} 
                            className="modal-button modal-button-secondary"
                        >
                            Avbryt
                        </button>
                        <button 
                            type="button" 
                            onClick={handleSave} 
                            className="modal-button modal-button-primary"
                        >
                            Spara
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    // Use the appropriate wrapper based on whether the tag is an inline element
    const WrapperTag = isInlineElement ? 'span' : 'div';
    
    return (
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
    );
};

export default EditableText;
