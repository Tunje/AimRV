import React, { useState, useRef } from 'react';
import { useText } from '../context/TextContext';
import '../styles/index.css';

const CreatePostModal = ({ isOpen, onClose, onSave }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState('');
  const [showLinkTools, setShowLinkTools] = useState(false);
  const [linkUrl, setLinkUrl] = useState('');
  const [linkText, setLinkText] = useState('');
  const [selectionStart, setSelectionStart] = useState(0);
  const [selectionEnd, setSelectionEnd] = useState(0);
  const contentRef = useRef(null);
  const fileInputRef = useRef(null);
  const { isAdmin } = useText();

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(file);
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  const handleContentSelect = () => {
    if (contentRef.current) {
      setSelectionStart(contentRef.current.selectionStart);
      setSelectionEnd(contentRef.current.selectionEnd);
    }
  };

  const toggleLinkTools = () => {
    setShowLinkTools(!showLinkTools);
    if (!showLinkTools) {
      // Get the selected text when opening link tools
      if (contentRef.current) {
        const selectedText = content.substring(
          contentRef.current.selectionStart,
          contentRef.current.selectionEnd
        );
        setLinkText(selectedText);
        setSelectionStart(contentRef.current.selectionStart);
        setSelectionEnd(contentRef.current.selectionEnd);
      }
    }
  };

  const insertLink = () => {
    if (!linkUrl.trim()) {
      alert('Please enter a URL');
      return;
    }

    const linkMarkdown = `[${linkText || linkUrl}](${linkUrl})`;
    const newContent = 
      content.substring(0, selectionStart) + 
      linkMarkdown + 
      content.substring(selectionEnd);
    
    setContent(newContent);
    setShowLinkTools(false);
    setLinkUrl('');
    setLinkText('');
  };

  const handleSave = () => {
    if (!title.trim() || !content.trim() || !imagePreview) {
      alert('Vänligen fyll i alla fält (titel, bild och innehåll)');
      return;
    }
    
    const newPost = {
      id: Date.now(), // Use timestamp as a unique ID
      title,
      date: new Date().toLocaleDateString('sv-SE', { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
      }),
      content,
      image: imagePreview
    };

    onSave(newPost);
    resetForm();
    onClose();
  };

  const resetForm = () => {
    setTitle('');
    setContent('');
    setImage(null);
    setImagePreview('');
    setShowLinkTools(false);
    setLinkUrl('');
    setLinkText('');
  };

  const handleClickOutside = (e) => {
    if (e.target.className === 'create-post-modal__overlay') {
      onClose();
    }
  };

  if (!isOpen || !isAdmin) return null;

  return (
    <div className="create-post-modal">
      <div 
        className="create-post-modal__overlay" 
        onClick={handleClickOutside}
      ></div>
      <div className="create-post-modal__content">
        <h2 className="create-post-modal__title">Skapa nytt inlägg</h2>
        
        <div className="create-post-modal__form">
          <div className="create-post-modal__form-group">
            <label className="create-post-modal__label">Titel</label>
            <input 
              type="text" 
              className="create-post-modal__input" 
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Ange titel"
            />
          </div>
          
          <div className="create-post-modal__form-group">
            <label className="create-post-modal__label">Bild</label>
            <div 
              className="create-post-modal__image-upload"
              onClick={() => fileInputRef.current.click()}
            >
              {imagePreview ? (
                <img 
                  src={imagePreview} 
                  alt="Preview" 
                  className="create-post-modal__image-preview" 
                />
              ) : (
                <div className="create-post-modal__image-placeholder">
                  Klicka för att ladda upp en bild
                </div>
              )}
              <input 
                type="file" 
                accept="image/*" 
                onChange={handleImageChange}
                className="create-post-modal__file-input"
                ref={fileInputRef}
              />
            </div>
          </div>
          
          <div className="create-post-modal__form-group">
            <label className="create-post-modal__label">Innehåll</label>
            <div>
              <textarea 
                className="create-post-modal__textarea" 
                value={content}
                onChange={handleContentChange}
                onSelect={handleContentSelect}
                ref={contentRef}
                placeholder="Ange innehåll"
              ></textarea>
              
              <button 
                type="button" 
                onClick={toggleLinkTools}
                className="create-post-modal__button create-post-modal__button--secondary"
                style={{ marginTop: '10px' }}
              >
                Lägg till länk
              </button>
              
              {showLinkTools && (
                <div className="create-post-modal__link-tools">
                  <div>
                    <label>Länktext:</label>
                    <input 
                      type="text" 
                      value={linkText} 
                      onChange={(e) => setLinkText(e.target.value)}
                      className="create-post-modal__input"
                      style={{ marginTop: '5px', width: '100%' }}
                    />
                  </div>
                  
                  <div>
                    <label>URL:</label>
                    <input 
                      type="text" 
                      value={linkUrl} 
                      onChange={(e) => setLinkUrl(e.target.value)}
                      className="create-post-modal__input"
                      style={{ marginTop: '5px', width: '100%' }}
                    />
                  </div>
                  
                  <div style={{ marginTop: '10px' }}>
                    <button 
                      onClick={insertLink}
                      className="create-post-modal__button create-post-modal__button--primary"
                    >
                      Infoga länk
                    </button>
                    <button 
                      onClick={() => setShowLinkTools(false)}
                      className="create-post-modal__button create-post-modal__button--secondary"
                      style={{ marginLeft: '10px' }}
                    >
                      Avbryt
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
          
          <div className="create-post-modal__actions">
            <button 
              onClick={onClose}
              className="create-post-modal__button create-post-modal__button--secondary"
            >
              Avbryt
            </button>
            <button 
              onClick={handleSave}
              className="create-post-modal__button create-post-modal__button--primary"
              disabled={!title.trim() || !content.trim() || !imagePreview}
            >
              Spara
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePostModal;
