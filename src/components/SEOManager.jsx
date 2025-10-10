import React, { useState, useEffect } from 'react';
import { useText } from '../context/TextContext';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import LanguageSwitcher from './LanguageSwitcher';
import { db, storage } from '../firebase/config';
import { collection, getDocs, doc, setDoc, updateDoc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

const SEOManager = () => {
    const { textContent, updateText, removeContentItem, isAdmin, currentLanguage, changeLanguage, LANGUAGES, LANGUAGE_NAMES } = useText();
    const { isAuthenticated } = useAuth();
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState('metaTexts');
    const [isLoading, setIsLoading] = useState(false);
    const [activeLanguage, setActiveLanguage] = useState(currentLanguage);
    const [metaTexts, setMetaTexts] = useState({
        'meta-title-home': 'Aim Challenge - Multisport tävling för alla',
        'meta-description-home': 'Aim Challenge är en multisport tävling som passar för alla. Lag på två personer ska under 6 timmar ta så många kontroller som möjligt.',
        'meta-keywords-home': 'multisport, tävling, aim challenge, orientering, löpning, cykling',
        'meta-title-om-oss': 'Om Oss - Aim Challenge',
        'meta-description-om-oss': 'Lär dig mer om Aim Challenge organisationen och vår mission.',
        'meta-title-regler': 'Regler - Aim Challenge',
        'meta-description-regler': 'Tävlingsregler och riktlinjer för Aim Challenge evenemang.',
        'meta-title-senaste-nytt': 'Senaste Nytt - Aim Challenge',
        'meta-description-senaste-nytt': 'Senaste nytt och uppdateringar från Aim Challenge.',
    });
    const [sharingImages, setSharingImages] = useState({
        'og-image-home': '/images/Aim_Challenge_logo_white.svg',
        'og-image-om-oss': '/images/Aim_Challenge_logo_white.svg',
        'og-image-regler': '/images/Aim_Challenge_logo_white.svg',
        'og-image-senaste-nytt': '/images/Aim_Challenge_logo_white.svg',
    });
    const [editingKey, setEditingKey] = useState(null);
    const [editValue, setEditValue] = useState('');
    const [uploadingImage, setUploadingImage] = useState(null);
    const [previewImage, setPreviewImage] = useState(null);

    // Redirect non-admin users
    useEffect(() => {
        if (!isAuthenticated || !isAdmin) {
            navigate('/');
        }
    }, [isAuthenticated, isAdmin, navigate]);

    // Update active language when current language changes
    useEffect(() => {
        setActiveLanguage(currentLanguage);
    }, [currentLanguage]);

    // Load meta texts and sharing images from TextContext
    useEffect(() => {
        const loadMetaContent = () => {
            // Start with default values
            const newMetaTexts = {
                'meta-title-home': 'Aim Challenge - Multisport tävling för alla',
                'meta-description-home': 'Aim Challenge är en multisport tävling som passar för alla. Lag på två personer ska under 6 timmar ta så många kontroller som möjligt.',
                'meta-keywords-home': 'multisport, tävling, aim challenge, orientering, löpning, cykling',
                'meta-title-om-oss': 'Om Oss - Aim Challenge',
                'meta-description-om-oss': 'Lär dig mer om Aim Challenge organisationen och vår mission.',
                'meta-title-regler': 'Regler - Aim Challenge',
                'meta-description-regler': 'Tävlingsregler och riktlinjer för Aim Challenge evenemang.',
                'meta-title-senaste-nytt': 'Senaste Nytt - Aim Challenge',
                'meta-description-senaste-nytt': 'Senaste nytt och uppdateringar från Aim Challenge.',
            };
            const newSharingImages = {
                'og-image-home': '/images/Aim_Challenge_logo_white.svg',
                'og-image-om-oss': '/images/Aim_Challenge_logo_white.svg',
                'og-image-regler': '/images/Aim_Challenge_logo_white.svg',
                'og-image-senaste-nytt': '/images/Aim_Challenge_logo_white.svg',
            };
            
            // Extract meta texts from textContent and override defaults
            Object.entries(textContent).forEach(([key, value]) => {
                // Handle multilingual content
                if (typeof value === 'object' && value !== null && value._isMultilingual) {
                    // For multilingual meta tags, use the active language content
                    if (key.startsWith('meta-')) {
                        const langValue = value[activeLanguage] || value[LANGUAGES.SV] || '';
                        // Make sure we're getting a string, not another object (fix double-nesting)
                        const finalValue = typeof langValue === 'string' ? langValue : '';
                        if (finalValue) {
                            newMetaTexts[key] = finalValue;
                        }
                    } else if (key.startsWith('og-image-')) {
                        const langValue = value[activeLanguage] || value[LANGUAGES.SV] || '';
                        const finalValue = typeof langValue === 'string' ? langValue : '';
                        if (finalValue) {
                            newSharingImages[key] = finalValue;
                        }
                    }
                } else if (typeof value === 'string') {
                    // Legacy non-multilingual content
                    if (key.startsWith('meta-')) {
                        newMetaTexts[key] = value;
                    } else if (key.startsWith('og-image-')) {
                        newSharingImages[key] = value;
                    }
                }
            });
            
            setMetaTexts(newMetaTexts);
            setSharingImages(newSharingImages);
        };
        
        loadMetaContent();
    }, [textContent, activeLanguage]);

    // Handle text editing
    const handleEditText = (key, value) => {
        setEditingKey(key);
        setEditValue(value);
    };

    const handleSaveText = () => {
        if (editingKey) {
            // For now, just save as a simple string for the active language
            // This avoids the multilingual complexity that's causing issues
            updateText(editingKey, editValue);
            
            // Update local state immediately to show the change
            if (editingKey.startsWith('meta-')) {
                setMetaTexts(prev => ({
                    ...prev,
                    [editingKey]: editValue
                }));
            } else if (editingKey.startsWith('og-image-')) {
                setSharingImages(prev => ({
                    ...prev,
                    [editingKey]: editValue
                }));
            }
            
            setEditingKey(null);
            setEditValue('');
        }
    };

    const handleCancelEdit = () => {
        setEditingKey(null);
        setEditValue('');
    };

    // Reset all SEO meta data to clean state
    const handleResetSEO = () => {
        if (window.confirm('This will delete all SEO meta data from Firebase. Are you sure?')) {
            // Delete all meta- and og-image- keys
            Object.keys(textContent).forEach(key => {
                if (key.startsWith('meta-') || key.startsWith('og-image-')) {
                    removeContentItem(key);
                }
            });
            alert('SEO data reset. Please refresh the page.');
        }
    };

    // Handle image upload
    const handleImageChange = (e, key) => {
        const file = e.target.files[0];
        if (file) {
            setUploadingImage(key);
            
            // Create preview
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreviewImage(reader.result);
            };
            reader.readAsDataURL(file);
            
            // Upload to Firebase Storage
            const storageRef = ref(storage, `sharing-images/${key}-${Date.now()}`);
            uploadBytes(storageRef, file).then((snapshot) => {
                getDownloadURL(snapshot.ref).then((url) => {
                    // Save URL to TextContext
                    updateText(key, url);
                    
                    // Update local state
                    setSharingImages(prev => ({
                        ...prev,
                        [key]: url
                    }));
                    
                    setUploadingImage(null);
                    setPreviewImage(null);
                });
            }).catch(error => {
                console.error("Error uploading image:", error);
                setUploadingImage(null);
                setPreviewImage(null);
            });
        }
    };

    // If not authenticated or not admin, don't render the component
    if (!isAuthenticated || !isAdmin) {
        return null;
    }

    // Handle language change in SEO Manager
    const handleLanguageChange = (language) => {
        setActiveLanguage(language);
    };

    return (
        <div className="seo-manager" style={{ padding: '20px' }}>
            <h1 className="font_blue fonts_big" style={{ marginBottom: '20px' }}>SEO Manager</h1>
            
            <div style={{ marginBottom: '20px' }}>
                <button 
                    className={`modal-button ${activeTab === 'metaTexts' ? 'modal-button-primary' : 'modal-button-secondary'}`}
                    onClick={() => setActiveTab('metaTexts')}
                >
                    Meta Texter
                </button>
                <button 
                    className={`modal-button ${activeTab === 'sharingImages' ? 'modal-button-primary' : 'modal-button-secondary'}`}
                    onClick={() => setActiveTab('sharingImages')}
                >
                    Delningsbilder
                </button>
            </div>
            
            {/* Meta Texts Section */}
            {activeTab === 'metaTexts' && (
                <div className="meta-texts-section">
                    <div style={{ marginBottom: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <p style={{ margin: 0 }}>
                            Redigera meta-texter för att förbättra sökmotoroptimering (SEO) för din webbplats.
                        </p>
                        <button
                            onClick={handleResetSEO}
                            style={{
                                padding: '8px 16px',
                                backgroundColor: '#ff4d4d',
                                color: 'white',
                                border: 'none',
                                borderRadius: '4px',
                                cursor: 'pointer',
                                fontSize: '14px'
                            }}
                        >
                            Reset SEO Data
                        </button>
                    </div>
                    
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '20px' }}>
                        {Object.entries(metaTexts).map(([key, value]) => (
                            <div key={key} style={{ 
                                border: '1px solid #ddd', 
                                borderRadius: '8px', 
                                padding: '15px',
                                backgroundColor: 'white',
                                boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
                            }}>
                                <div style={{ 
                                    display: 'flex', 
                                    justifyContent: 'space-between', 
                                    alignItems: 'center', 
                                    marginBottom: '10px' 
                                }}>
                                    <h3 className="font_blue fonts_medium" style={{ fontSize: '16px' }}>
                                        {key}
                                    </h3>
                                </div>
                                
                                {editingKey === key ? (
                                    <div>
                                        <textarea
                                            value={editValue}
                                            onChange={(e) => setEditValue(e.target.value)}
                                            style={{
                                                width: '100%',
                                                padding: '10px',
                                                borderRadius: '4px',
                                                border: '1px solid #ddd',
                                                minHeight: '100px',
                                                marginBottom: '10px'
                                            }}
                                        />
                                        <div style={{ display: 'flex', gap: '10px' }}>
                                            <button
                                                onClick={handleSaveText}
                                                style={{
                                                    padding: '8px 16px',
                                                    backgroundColor: '#00b894',
                                                    color: 'white',
                                                    border: 'none',
                                                    borderRadius: '4px',
                                                    cursor: 'pointer'
                                                }}
                                            >
                                                Spara
                                            </button>
                                            <button
                                                onClick={handleCancelEdit}
                                                style={{
                                                    padding: '8px 16px',
                                                    backgroundColor: '#ccc',
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
                                ) : (
                                    <div>
                                        <p style={{ 
                                            backgroundColor: '#f5f5f5', 
                                            padding: '10px',
                                            borderRadius: '4px',
                                            marginBottom: '10px'
                                        }}>
                                            {typeof value === 'string' ? value : ''}
                                        </p>
                                        <button
                                            onClick={() => handleEditText(key, typeof value === 'string' ? value : (value || ''))}
                                            style={{
                                                width: '100%',
                                                padding: '8px',
                                                backgroundColor: '#0984e3',
                                                color: 'white',
                                                border: 'none',
                                                borderRadius: '4px',
                                                cursor: 'pointer'
                                            }}
                                        >
                                            Redigera
                                        </button>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            )}
            
            {/* Sharing Images Section */}
            {activeTab === 'sharingImages' && (
                <div className="sharing-images-section">
                    <p style={{ marginBottom: '20px' }}>
                        Ladda upp bilder som kommer att visas när dina sidor delas på sociala medier.
                    </p>
                    
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '20px' }}>
                        {Object.entries(sharingImages).map(([key, value]) => (
                            <div key={key} style={{ 
                                border: '1px solid #ddd', 
                                borderRadius: '8px', 
                                padding: '15px',
                                backgroundColor: 'white',
                                boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
                            }}>
                                <div style={{ 
                                    display: 'flex', 
                                    justifyContent: 'space-between', 
                                    alignItems: 'center', 
                                    marginBottom: '10px' 
                                }}>
                                    <h3 className="font_blue fonts_medium" style={{ fontSize: '16px' }}>
                                        {key}
                                    </h3>
                                </div>
                                
                                <div style={{ marginBottom: '15px' }}>
                                    {uploadingImage === key && previewImage ? (
                                        <img 
                                            src={previewImage} 
                                            alt="Preview" 
                                            style={{ 
                                                width: '100%', 
                                                height: '200px',
                                                objectFit: 'cover',
                                                borderRadius: '4px',
                                                border: '1px solid #eee'
                                            }} 
                                        />
                                    ) : (
                                        <img 
                                            src={typeof value === 'string' ? value : '/images/Aim_Challenge_logo_white.svg'} 
                                            alt={key} 
                                            style={{ 
                                                width: '100%', 
                                                height: '200px',
                                                objectFit: 'cover',
                                                borderRadius: '4px',
                                                border: '1px solid #eee'
                                            }} 
                                        />
                                    )}
                                </div>
                                
                                <div>
                                    <label 
                                        htmlFor={`image-upload-${key}`}
                                        style={{
                                            display: 'block',
                                            width: '100%',
                                            padding: '8px',
                                            backgroundColor: '#0984e3',
                                            color: 'white',
                                            border: 'none',
                                            borderRadius: '4px',
                                            cursor: 'pointer',
                                            textAlign: 'center'
                                        }}
                                    >
                                        {uploadingImage === key ? 'Laddar upp...' : 'Byt bild'}
                                    </label>
                                    <input
                                        id={`image-upload-${key}`}
                                        type="file"
                                        accept="image/*"
                                        onChange={(e) => handleImageChange(e, key)}
                                        style={{ display: 'none' }}
                                        disabled={uploadingImage !== null}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default SEOManager;
