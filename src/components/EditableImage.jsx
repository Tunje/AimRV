import React, { useState } from 'react';
import { useText } from '../context/TextContext';

const EditableImage = ({ imageKey, defaultSrc, alt, className = '', style = {} }) => {
    const { getText, updateText, isAdmin } = useText();
    const [isLocalEditing, setIsLocalEditing] = useState(false);
    const [imageUrl, setImageUrl] = useState('');
    const [error, setError] = useState('');

    // Get the current image URL from context or use default
    const currentSrc = getText(imageKey, defaultSrc);

    // Handle click to edit
    const handleClick = () => {
        if (!isLocalEditing && isAdmin) {
            setIsLocalEditing(true);
            setImageUrl(currentSrc);
            setError('');
        }
    };

    // Handle save
    const handleSave = () => {
        if (imageUrl.trim() === '') {
            setError('Please enter an image URL');
            return;
        }

        // Basic URL validation
        try {
            new URL(imageUrl);
            updateText(imageKey, imageUrl);
            setIsLocalEditing(false);
        } catch (e) {
            // Check if it might be a relative path
            if (imageUrl.startsWith('/') || imageUrl.includes('./')) {
                updateText(imageKey, imageUrl);
                setIsLocalEditing(false);
            } else {
                setError('Please enter a valid URL or path');
            }
        }
    };

    // Handle cancel
    const handleCancel = () => {
        setIsLocalEditing(false);
        setError('');
    };

    // Handle file upload
    const handleFileUpload = (e) => {
        const file = e.target.files[0];
        if (!file) return;

        // Check if file is an image
        if (!file.type.startsWith('image/')) {
            setError('Please select an image file');
            return;
        }

        // Create a local URL for the image
        const reader = new FileReader();
        reader.onload = (event) => {
            setImageUrl(event.target.result);
        };
        reader.readAsDataURL(file);
    };

    if (isLocalEditing) {
        return (
            <div className="editable-image-container" style={{ position: 'relative', margin: '10px 0' }}>
                <div style={{ marginBottom: '10px' }}>
                    <img 
                        src={imageUrl || currentSrc} 
                        alt={alt} 
                        className={className}
                        style={{ 
                            maxWidth: '300px', 
                            border: '2px solid #00a6fb',
                            ...style 
                        }} 
                    />
                </div>
                
                <div style={{ marginBottom: '10px' }}>
                    <label style={{ display: 'block', marginBottom: '5px' }}>Image URL:</label>
                    <input 
                        type="text" 
                        value={imageUrl} 
                        onChange={(e) => setImageUrl(e.target.value)}
                        style={{
                            width: '100%',
                            padding: '8px',
                            border: '1px solid #ccc',
                            borderRadius: '4px'
                        }}
                        placeholder="Enter image URL or upload a file"
                    />
                    {error && <p style={{ color: 'red', margin: '5px 0' }}>{error}</p>}
                </div>
                
                <div style={{ marginBottom: '10px' }}>
                    <label style={{ display: 'block', marginBottom: '5px' }}>Or upload an image:</label>
                    <input 
                        type="file" 
                        accept="image/*" 
                        onChange={handleFileUpload}
                        style={{
                            width: '100%',
                            padding: '8px',
                            border: '1px solid #ccc',
                            borderRadius: '4px'
                        }}
                    />
                </div>
                
                <div style={{ display: 'flex', gap: '8px' }}>
                    <button
                        onClick={handleSave}
                        style={{
                            padding: '8px 16px',
                            background: '#00a6fb',
                            color: 'white',
                            border: 'none',
                            borderRadius: '4px',
                            cursor: 'pointer'
                        }}
                    >
                        Spara
                    </button>
                    <button
                        onClick={handleCancel}
                        style={{
                            padding: '8px 16px',
                            background: '#ccc',
                            color: 'black',
                            border: 'none',
                            borderRadius: '4px',
                            cursor: 'pointer'
                        }}
                    >
                        Avbryt
                    </button>
                </div>
            </div>
        );
    }

    return (
        <img 
            src={currentSrc} 
            alt={alt} 
            className={`${className} ${isAdmin ? 'editable' : ''}`}
            onClick={handleClick}
            style={{
                ...style,
                cursor: isAdmin ? 'pointer' : 'default',
                border: isAdmin ? '2px dashed #00a6fb' : 'none',
            }}
        />
    );
};

export default EditableImage;
