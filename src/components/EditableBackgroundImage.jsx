import React, { useState, useEffect, useRef } from 'react';
import { useText } from '../context/TextContext';
import { uploadBackgroundImage, updateBackgroundImage, getBackgroundImages } from '../firebase/textContent';

const EditableBackgroundImage = ({ 
    backgroundKey, 
    defaultSrc, 
    className, 
    children, 
    style = {},
    backgroundPosition = 'center',
    backgroundSize = 'cover',
    backgroundRepeat = 'no-repeat'
}) => {
    const { isAdmin } = useText();
    const [isEditing, setIsEditing] = useState(false);
    const [imageUrl, setImageUrl] = useState(defaultSrc);
    const [tempUrl, setTempUrl] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const fileInputRef = useRef(null);
    
    // Load saved background image from Firebase
    useEffect(() => {
        const fetchBackgroundImage = async () => {
            try {
                setLoading(true);
                const images = await getBackgroundImages();
                console.log(`Fetched images for ${backgroundKey}:`, images);
                if (images && images[backgroundKey]) {
                    setImageUrl(images[backgroundKey]);
                    console.log(`Setting image URL for ${backgroundKey} to:`, images[backgroundKey]);
                } else {
                    // Use default if no saved image
                    setImageUrl(defaultSrc);
                    console.log(`Using default image for ${backgroundKey}:`, defaultSrc);
                }
                setError(null);
            } catch (err) {
                console.error('Error fetching background image:', err);
                setError('Failed to load background image. Using default.');
                
                // Try localStorage as fallback
                try {
                    const savedImages = localStorage.getItem('backgroundImages');
                    if (savedImages) {
                        const parsedImages = JSON.parse(savedImages);
                        if (parsedImages[backgroundKey]) {
                            setImageUrl(parsedImages[backgroundKey]);
                        } else {
                            setImageUrl(defaultSrc);
                        }
                    } else {
                        setImageUrl(defaultSrc);
                    }
                } catch (localError) {
                    console.error('Error with localStorage fallback:', localError);
                    setImageUrl(defaultSrc);
                }
            } finally {
                setLoading(false);
            }
        };
        
        fetchBackgroundImage();
    }, [backgroundKey, defaultSrc]);

    const handleEditClick = () => {
        setIsEditing(true);
        setTempUrl(imageUrl);
    };

    const handleUrlChange = (e) => {
        setTempUrl(e.target.value);
    };

    const handleFileChange = async (e) => {
        const file = e.target.files[0];
        if (file) {
            try {
                setLoading(true);
                
                // Read the file as data URL
                const reader = new FileReader();
                reader.onloadend = async () => {
                    try {
                        // Upload to Firebase Storage
                        const uploadedUrl = await uploadBackgroundImage(reader.result, `${backgroundKey}_${Date.now()}`);
                        
                        // Update Firestore with the new URL
                        await updateBackgroundImage(backgroundKey, uploadedUrl);
                        
                        // Update local state
                        setImageUrl(uploadedUrl);
                        setTempUrl(uploadedUrl);
                        
                        // Also update localStorage as backup
                        try {
                            const savedImages = localStorage.getItem('backgroundImages') || '{}';
                            const parsedImages = JSON.parse(savedImages);
                            parsedImages[backgroundKey] = uploadedUrl;
                            localStorage.setItem('backgroundImages', JSON.stringify(parsedImages));
                        } catch (localError) {
                            console.error('Error updating localStorage:', localError);
                        }
                        
                        setError(null);
                    } catch (uploadError) {
                        console.error('Error uploading image:', uploadError);
                        setError('Failed to upload image. Please try again.');
                    } finally {
                        setLoading(false);
                    }
                };
                reader.readAsDataURL(file);
            } catch (err) {
                console.error('Error reading file:', err);
                setError('Failed to read file. Please try again.');
                setLoading(false);
            }
        }
    };

    const handleSave = async () => {
        // Validate URL
        if (!isValidUrl(tempUrl)) {
            alert('Please enter a valid URL');
            return;
        }
        
        try {
            setLoading(true);
            
            // Update Firestore with the new URL
            await updateBackgroundImage(backgroundKey, tempUrl);
            
            // Update local state
            setImageUrl(tempUrl);
            
            // Also update localStorage as backup
            try {
                const savedImages = localStorage.getItem('backgroundImages') || '{}';
                const parsedImages = JSON.parse(savedImages);
                parsedImages[backgroundKey] = tempUrl;
                localStorage.setItem('backgroundImages', JSON.stringify(parsedImages));
            } catch (localError) {
                console.error('Error updating localStorage:', localError);
            }
            
            setIsEditing(false);
            setError(null);
        } catch (err) {
            console.error('Error saving background image:', err);
            setError('Failed to save background image. Please try again.');
            
            // Update localStorage even if Firebase fails
            try {
                const savedImages = localStorage.getItem('backgroundImages') || '{}';
                const parsedImages = JSON.parse(savedImages);
                parsedImages[backgroundKey] = tempUrl;
                localStorage.setItem('backgroundImages', JSON.stringify(parsedImages));
                setImageUrl(tempUrl);
                setIsEditing(false);
            } catch (localError) {
                console.error('Error with localStorage fallback:', localError);
            }
        } finally {
            setLoading(false);
        }
    };

    const handleCancel = () => {
        setIsEditing(false);
        setTempUrl(imageUrl);
    };

    const handleResetClick = () => {
        setLoading(true);
        
        // Reset to default image
        setImageUrl(defaultSrc);
        
        // Update Firestore
        updateBackgroundImage(backgroundKey, defaultSrc)
            .then(() => {
                // Update localStorage
                try {
                    const savedImages = localStorage.getItem('backgroundImages') || '{}';
                    const parsedImages = JSON.parse(savedImages);
                    parsedImages[backgroundKey] = defaultSrc;
                    localStorage.setItem('backgroundImages', JSON.stringify(parsedImages));
                } catch (localError) {
                    console.error('Error updating localStorage:', localError);
                }
            })
            .catch(err => {
                console.error('Error resetting background image:', err);
                setError('Failed to reset image.');
            })
            .finally(() => {
                setLoading(false);
                setIsEditing(false);
            });
    };

    const isValidUrl = (string) => {
        try {
            new URL(string);
            return true;
        } catch (_) {
            return false;
        }
    };

    const combinedStyle = {
        ...style,
        backgroundImage: `url(${imageUrl})`,
        backgroundPosition,
        backgroundSize,
        backgroundRepeat,
        position: 'relative'
    };

    return (
        <div className={className} style={combinedStyle}>
            {children}
            
            {isAdmin && !isEditing && (
                <button 
                    onClick={handleEditClick}
                    className="edit-background-button"
                >
                    Edit Background
                </button>
            )}
            
            {isAdmin && isEditing && (
                <div className="background-editor">
                    <div className="background-editor-content">
                        <h3>Edit Background Image</h3>
                        
                        <div className="background-editor-input-group">
                            <label>Image URL:</label>
                            <input 
                                type="text" 
                                value={tempUrl} 
                                onChange={handleUrlChange} 
                                placeholder="Enter image URL"
                            />
                        </div>
                        
                        <div className="background-editor-input-group">
                            <label>Or upload image:</label>
                            <input 
                                type="file" 
                                ref={fileInputRef}
                                onChange={handleFileChange}
                                accept="image/*"
                            />
                        </div>
                        
                        {loading && <div className="loading-indicator">Loading...</div>}
                        {error && <div className="error-message">{error}</div>}
                        
                        <div className="background-editor-actions">
                            <button onClick={handleCancel}>Cancel</button>
                            <button onClick={handleSave} disabled={loading}>Save</button>
                            <button onClick={handleResetClick} disabled={loading}>Reset</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default EditableBackgroundImage;
