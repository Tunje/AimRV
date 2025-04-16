import React, { useState, useRef } from 'react';
import { useText } from '../context/TextContext';
import '../styles/index.css';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { storage, db } from '../firebase/config';
import { collection, addDoc } from 'firebase/firestore';

const CreatePostModal = ({ isOpen, onClose }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState('');
  const [showLinkTools, setShowLinkTools] = useState(false);
  const [linkUrl, setLinkUrl] = useState('');
  const [linkText, setLinkText] = useState('');
  const [selectionStart, setSelectionStart] = useState(0);
  const [selectionEnd, setSelectionEnd] = useState(0);
  const [category, setCategory] = useState('Alla');
  const contentRef = useRef(null);
  const fileInputRef = useRef(null);
  const { isAdmin } = useText();

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Ensure the file has a name property
      if (!file.name) {
        file.name = `image-${Date.now()}.jpg`;
      }
      
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

  const handleSave = async () => {
    if (!title.trim() || !content.trim()) {
      alert('Vänligen fyll i titel och innehåll');
      return;
    }
    
    try {
      let imageUrl = null;
      if (image) {
        // Generate a completely new filename without using the original name at all
        const timestamp = Date.now();
        const fileExtension = image.name ? image.name.split('.').pop() : 'jpg';
        const newFileName = `image_${timestamp}.${fileExtension}`;
        const storageRef = ref(storage, `post-images/${newFileName}`);
        
        console.log("Uploading image with new filename:", newFileName);
        
        // Upload the image
        await uploadBytes(storageRef, image);
        
        // Get the download URL
        imageUrl = await getDownloadURL(storageRef);
        console.log("Image URL after upload:", imageUrl);
      }
      
      const newPost = {
        title,
        content,
        image: imageUrl,
        date: new Date().toLocaleDateString('sv-SE', { 
          year: 'numeric', 
          month: 'long', 
          day: 'numeric' 
        }),
        category,
        createdAt: new Date().toISOString()
      };

      // Save directly to Firestore
      const docRef = await addDoc(collection(db, 'posts'), newPost);
      console.log("Post saved with ID:", docRef.id);
      
      resetForm();
      onClose();
      
      // Reload the page to show the new post
      window.location.reload();
    } catch (error) {
      console.error('Error saving post:', error);
      alert('Ett fel uppstod när inlägget skulle sparas. Försök igen.');
    }
  };

  const resetForm = () => {
    setTitle('');
    setContent('');
    setImage(null);
    setImagePreview('');
    setShowLinkTools(false);
    setLinkUrl('');
    setLinkText('');
    setCategory('Alla');
  };

  const handleClose = () => {
    resetForm();
    onClose();
  };

  const handleClickOutside = (e) => {
    if (e.target.className === 'create-post-modal__overlay') {
      handleClose();
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
            <label className="create-post-modal__label">Bild (valfritt)</label>
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
            <label className="create-post-modal__label">Kategori</label>
            <select 
              className="create-post-modal__input"
              value={category}
              onChange={e => setCategory(e.target.value)}
            >
              <option value="Alla">Alla</option>
              <option value="Inga">Inga</option>
              <option value="Kolmården">Kolmården</option>
              <option value="Sälen">Sälen</option>
              <option value="Hemsedal">Hemsedal</option>
              <option value="Ulricshamn">Ulricshamn</option>
              <option value="Tripplen">Tripplen</option>
            </select>
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
                  </div>
                </div>
              )}
            </div>
          </div>
          
          <div className="create-post-modal__actions">
            <button 
              onClick={handleClose}
              className="create-post-modal__button create-post-modal__button--secondary"
            >
              Avbryt
            </button>
            <button 
              onClick={handleSave}
              className="create-post-modal__button create-post-modal__button--primary"
              disabled={!title.trim() || !content.trim()}
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
