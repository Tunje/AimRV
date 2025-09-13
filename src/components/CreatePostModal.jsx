import React, { useState, useRef, useEffect } from 'react';
import { useText } from '../context/TextContext';
import '../styles/index.css';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { storage, db } from '../firebase/config';
import { collection, addDoc, doc, updateDoc } from 'firebase/firestore';
import SimpleRichEditor from './SimpleRichEditor';

const CreatePostModal = ({ isOpen, onClose, editingPost = null, addPost }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState('');
  const [category, setCategory] = useState('Alla');
  const [isEditing, setIsEditing] = useState(false);
  const [published, setPublished] = useState(true);
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

  const handleContentChange = (html) => {
    setContent(html);
  };

  
  // Load post data when editing an existing post
  useEffect(() => {
    console.log('EditingPost in CreatePostModal:', editingPost);
    if (editingPost) {
      console.log('Setting form data from editingPost');
      setTitle(editingPost.title || '');
      setContent(editingPost.content || '');
      setCategory(editingPost.category || 'Alla');
      setPublished(editingPost.published !== false); // Default to true if not specified
      setIsEditing(true);
      
      // Set image preview if there's an existing image
      if (editingPost.image) {
        setImagePreview(editingPost.image);
      }
    } else {
      console.log('No editingPost, resetting form');
      resetForm();
      setIsEditing(false);
    }
  }, [editingPost]);

  const handleSave = async () => {
    if (!title.trim() || !content.trim()) {
      alert('Vänligen fyll i titel och innehåll');
      return;
    }
    
    try {
      let imageUrl = imagePreview;
      
      // Only upload a new image if one was selected
      if (image) {
        // Generate a completely new filename without using the original name at all
        const timestamp = Date.now();
        const fileExtension = image.name ? image.name.split('.').pop() : 'jpg';
        const newFileName = `image_${timestamp}.${fileExtension}`;
        const storageRef = ref(storage, `gs://aimchallange-67039.firebasestorage.app/post-images/${newFileName}`);
        
        console.log("Uploading image with new filename:", newFileName);
        
        // Upload the image
        await uploadBytes(storageRef, image);
        
        // Get the download URL
        imageUrl = await getDownloadURL(storageRef);
        console.log("Image URL after upload:", imageUrl);
      }
      
      const postData = {
        title,
        content,
        category,
        published,
        updatedAt: new Date().toISOString()
      };
      
      // Only update the image if we have one
      if (imageUrl) {
        postData.image = imageUrl;
      }
      
      if (isEditing && editingPost) {
        // Update existing post
        const postRef = doc(db, 'posts', editingPost.id);
        await updateDoc(postRef, postData);
        console.log("Post updated with ID:", editingPost.id);
      } else {
        // Create new post
        postData.date = new Date().toLocaleDateString('sv-SE', { 
          year: 'numeric', 
          month: 'long', 
          day: 'numeric' 
        });
        postData.createdAt = new Date().toISOString();
        
        const docRef = await addDoc(collection(db, 'posts'), postData);
        console.log("Post saved with ID:", docRef.id);
      }
      
      // If addPost function is provided, use it (for better state management)
      if (typeof addPost === 'function') {
        addPost({
          title,
          content,
          image: imageUrl,
          category,
          published
        });
      }
      
      resetForm();
      onClose();
      
      // Reload the page to show the updated posts
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
    setCategory('Alla');
    setPublished(true);
    setIsEditing(false);
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
        <h2 className="create-post-modal__title">{isEditing ? 'Redigera inlägg' : 'Skapa nytt inlägg'}</h2>
        
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
              <SimpleRichEditor
                value={content}
                onChange={handleContentChange}
                placeholder="Ange innehåll"
              />
            </div>
          </div>
          
          <div className="create-post-modal__form-group">
            <label className="create-post-modal__checkbox-label">
              <input
                type="checkbox"
                checked={published}
                onChange={() => setPublished(!published)}
                className="create-post-modal__checkbox"
              />
              Publicerad
            </label>
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
              {isEditing ? 'Uppdatera' : 'Spara'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePostModal;
