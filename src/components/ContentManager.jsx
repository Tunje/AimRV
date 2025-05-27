import React, { useState, useEffect } from 'react';
import { useText } from '../context/TextContext';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { db } from '../firebase/config';
import { collection, getDocs, query } from 'firebase/firestore';

const ContentManager = () => {
    const { textContent, resetAllContent, removeContentItem, isAdmin } = useText();
    const { isAuthenticated } = useAuth();
    const [showConfirmation, setShowConfirmation] = useState(false);
    const [itemToDelete, setItemToDelete] = useState(null);
    const [activeTab, setActiveTab] = useState('all');
    const [faqItems, setFaqItems] = useState([]);
    const [backgroundItems, setBackgroundItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const navigate = useNavigate();

    // Redirect non-admin users and load data
    useEffect(() => {
        if (!isAuthenticated || !isAdmin) {
            navigate('/');
            return;
        }
        
        // Load all data when component mounts
        const loadAllData = async () => {
            setIsLoading(true);
            try {
                await Promise.all([
                    loadFaqItems(),
                    loadBackgroundItems()
                ]);
            } catch (error) {
                console.error('Error loading content data:', error);
            } finally {
                setIsLoading(false);
            }
        };
        
        loadAllData();
    }, [isAuthenticated, isAdmin, navigate]);
    
    // Load FAQ items from Firestore
    const loadFaqItems = async () => {
        try {
            const faqCollection = collection(db, 'faqs');
            const snapshot = await getDocs(faqCollection);
            
            const items = [];
            snapshot.forEach((doc) => {
                const data = doc.data();
                items.push({
                    id: doc.id,
                    ...data
                });
            });
            
            setFaqItems(items);
            return items;
        } catch (error) {
            console.error('Error loading FAQ items:', error);
            return [];
        }
    };
    
    // Load background settings from Firestore
    const loadBackgroundItems = async () => {
        try {
            const bgCollection = collection(db, 'backgroundSettings');
            const snapshot = await getDocs(bgCollection);
            
            const items = [];
            snapshot.forEach((doc) => {
                const data = doc.data();
                items.push({
                    id: doc.id,
                    ...data
                });
            });
            
            setBackgroundItems(items);
            return items;
        } catch (error) {
            console.error('Error loading background settings:', error);
            return [];
        }
    };

    // If not authenticated or not admin, don't render the component
    if (!isAuthenticated || !isAdmin) {
        return null;
    }

    const handleReset = () => {
        setShowConfirmation(true);
        setItemToDelete(null);
    };

    const handleRemoveItem = (key) => {
        setShowConfirmation(true);
        setItemToDelete(key);
    };

    const confirmAction = () => {
        if (itemToDelete) {
            removeContentItem(itemToDelete);
        } else {
            resetAllContent();
        }
        setShowConfirmation(false);
        setItemToDelete(null);
    };

    const cancelAction = () => {
        setShowConfirmation(false);
        setItemToDelete(null);
    };

    const categorizeContent = () => {
        const categories = {
            text: {},
            image: {},
            background: {},
            faq: {},
            backgroundSettings: {}
        };

        // Categorize text content
        Object.entries(textContent).forEach(([key, value]) => {
            if (value.startsWith('data:image') || value.startsWith('http') || value.startsWith('/')) {
                // Check if it's a background image
                if (key.includes('-bg') || key.includes('background')) {
                    categories.background[key] = value;
                } else {
                    categories.image[key] = value;
                }
            } else {
                categories.text[key] = value;
            }
        });
        
        // Add FAQ items
        faqItems.forEach(item => {
            categories.faq[item.id] = {
                question: item.question,
                answer: item.answer,
                category: item.category
            };
        });
        
        // Add background settings
        backgroundItems.forEach(item => {
            categories.backgroundSettings[item.id] = {
                elementId: item.elementId,
                imageUrl: item.imageUrl,
                type: item.type
            };
        });

        return categories;
    };

    const categories = categorizeContent();
    
    // Filter content based on active tab
    const getFilteredContent = () => {
        if (activeTab === 'all') {
            // Combine all content types for 'all' tab
            return {
                ...textContent,
                ...Object.fromEntries(faqItems.map(item => [
                    `faq-${item.id}`,
                    `FAQ: ${item.question.substring(0, 30)}...`
                ])),
                ...Object.fromEntries(backgroundItems.map(item => [
                    `bg-${item.id}`,
                    item.imageUrl
                ]))
            };
        } else {
            return categories[activeTab] || {};
        }
    };

    const filteredContent = getFilteredContent();

    return (
        <div className="flex flex_col" style={{ minHeight: '100vh' }}>
            {/* Header Section */}
            <section className="page_01 dynamic-background flex flex_col flex_j_E">
                <div className="trans-background page_01box flex flex_col flex_j_SA">
                    <div className="om-oss-title flex flex_j_C flex_a_C">
                        <p className="font_blue fonts_huge">Innehållshanterare</p>
                    </div>
                </div>
            </section>

            <section style={{ padding: '40px', maxWidth: '1200px', margin: '0 auto' }}>
                <div style={{ marginBottom: '30px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '20px' }}>
                    <h2 className="font_blue fonts_large">Alla redigerbara innehåll</h2>
                    <button 
                        onClick={handleReset}
                        style={{
                            padding: '10px 20px',
                            backgroundColor: '#ff4d4d',
                            color: 'white',
                            border: 'none',
                            borderRadius: '4px',
                            cursor: 'pointer'
                        }}
                    >
                        Återställ allt innehåll
                    </button>
                </div>

                {/* Tabs */}
                <div style={{ marginBottom: '30px', display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                    <button 
                        onClick={() => setActiveTab('all')}
                        style={{
                            padding: '8px 16px',
                            backgroundColor: activeTab === 'all' ? '#2d4f60' : '#e0e0e0',
                            color: activeTab === 'all' ? 'white' : '#333',
                            border: 'none',
                            borderRadius: '4px',
                            cursor: 'pointer'
                        }}
                    >
                        Alla
                    </button>
                    <button 
                        onClick={() => setActiveTab('text')}
                        style={{
                            padding: '8px 16px',
                            backgroundColor: activeTab === 'text' ? '#0984e3' : '#e0e0e0',
                            color: activeTab === 'text' ? 'white' : '#333',
                            border: 'none',
                            borderRadius: '4px',
                            cursor: 'pointer'
                        }}
                    >
                        Text
                    </button>
                    <button 
                        onClick={() => setActiveTab('image')}
                        style={{
                            padding: '8px 16px',
                            backgroundColor: activeTab === 'image' ? '#00b894' : '#e0e0e0',
                            color: activeTab === 'image' ? 'white' : '#333',
                            border: 'none',
                            borderRadius: '4px',
                            cursor: 'pointer'
                        }}
                    >
                        Bilder
                    </button>
                    <button 
                        onClick={() => setActiveTab('background')}
                        style={{
                            padding: '8px 16px',
                            backgroundColor: activeTab === 'background' ? '#6c5ce7' : '#e0e0e0',
                            color: activeTab === 'background' ? 'white' : '#333',
                            border: 'none',
                            borderRadius: '4px',
                            cursor: 'pointer'
                        }}
                    >
                        Bakgrundsbilder
                    </button>
                    <button 
                        onClick={() => setActiveTab('faq')}
                        style={{
                            padding: '8px 16px',
                            backgroundColor: activeTab === 'faq' ? '#e84393' : '#e0e0e0',
                            color: activeTab === 'faq' ? 'white' : '#333',
                            border: 'none',
                            borderRadius: '4px',
                            cursor: 'pointer'
                        }}
                    >
                        FAQ
                    </button>
                    <button 
                        onClick={() => setActiveTab('backgroundSettings')}
                        style={{
                            padding: '8px 16px',
                            backgroundColor: activeTab === 'backgroundSettings' ? '#fdcb6e' : '#e0e0e0',
                            color: activeTab === 'backgroundSettings' ? 'white' : '#333',
                            border: 'none',
                            borderRadius: '4px',
                            cursor: 'pointer'
                        }}
                    >
                        Bakgrundsinställningar
                    </button>
                </div>

                {showConfirmation && (
                    <div style={{ 
                        position: 'fixed', 
                        top: 0, 
                        left: 0, 
                        right: 0, 
                        bottom: 0, 
                        backgroundColor: 'rgba(0,0,0,0.7)', 
                        display: 'flex', 
                        justifyContent: 'center', 
                        alignItems: 'center',
                        zIndex: 9999
                    }}>
                        <div style={{ 
                            backgroundColor: 'white', 
                            padding: '30px', 
                            borderRadius: '8px', 
                            maxWidth: '500px', 
                            width: '90%',
                            textAlign: 'center'
                        }}>
                            <h3 style={{ marginBottom: '20px', color: '#00a6fb' }}>Bekräfta åtgärd</h3>
                            <p style={{ marginBottom: '30px' }}>
                                {itemToDelete 
                                    ? `Är du säker på att du vill ta bort innehållet med nyckeln "${itemToDelete}"?` 
                                    : 'Är du säker på att du vill återställa allt innehåll? Detta kan inte ångras.'}
                            </p>
                            <div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
                                <button
                                    onClick={confirmAction}
                                    style={{
                                        padding: '10px 20px',
                                        backgroundColor: '#ff4d4d',
                                        color: 'white',
                                        border: 'none',
                                        borderRadius: '4px',
                                        cursor: 'pointer'
                                    }}
                                >
                                    {itemToDelete ? 'Ta bort' : 'Återställ allt'}
                                </button>
                                <button
                                    onClick={cancelAction}
                                    style={{
                                        padding: '10px 20px',
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
                    </div>
                )}

                {Object.keys(filteredContent).length === 0 ? (
                    <p>Inga redigerade {activeTab === 'text' ? 'texter' : activeTab === 'image' ? 'bilder' : activeTab === 'background' ? 'bakgrundsbilder' : 'innehåll'} ännu.</p>
                ) : (
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '20px' }}>
                        {Object.entries(filteredContent).map(([key, value]) => {
                            const isImage = value.startsWith('data:image') || value.startsWith('http') || value.startsWith('/');
                            const isBackground = key.includes('-bg') || key.includes('background');
                            
                            return (
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
                                        <h3 className="font_blue fonts_medium" style={{ 
                                            wordBreak: 'break-all', 
                                            fontSize: '16px' 
                                        }}>
                                            {key}
                                        </h3>
                                        <span style={{ 
                                            padding: '3px 8px', 
                                            borderRadius: '4px', 
                                            fontSize: '12px',
                                            backgroundColor: isBackground ? '#6c5ce7' : isImage ? '#00b894' : '#0984e3',
                                            color: 'white'
                                        }}>
                                            {isBackground ? 'Bakgrund' : isImage ? 'Bild' : 'Text'}
                                        </span>
                                    </div>
                                    <div style={{ marginBottom: '10px' }}>
                                        {isImage ? (
                                            <div>
                                                <img 
                                                    src={value} 
                                                    alt={key} 
                                                    style={{ 
                                                        width: '100%', 
                                                        height: isBackground ? '150px' : 'auto',
                                                        maxHeight: '150px', 
                                                        objectFit: isBackground ? 'cover' : 'contain',
                                                        borderRadius: '4px',
                                                        border: '1px solid #eee'
                                                    }} 
                                                />
                                                {isBackground && (
                                                    <div style={{ 
                                                        marginTop: '5px', 
                                                        fontSize: '12px', 
                                                        color: '#666',
                                                        textAlign: 'center'
                                                    }}>
                                                        Bakgrundsbild
                                                    </div>
                                                )}
                                            </div>
                                        ) : (
                                            <p style={{ 
                                                maxHeight: '100px', 
                                                overflow: 'auto', 
                                                backgroundColor: '#f5f5f5', 
                                                padding: '10px',
                                                borderRadius: '4px',
                                                fontSize: '14px'
                                            }}>
                                                {value}
                                            </p>
                                        )}
                                    </div>
                                    <button
                                        onClick={() => handleRemoveItem(key)}
                                        style={{
                                            width: '100%',
                                            padding: '8px',
                                            backgroundColor: '#ff4d4d',
                                            color: 'white',
                                            border: 'none',
                                            borderRadius: '4px',
                                            cursor: 'pointer',
                                            fontSize: '14px'
                                        }}
                                    >
                                        Ta bort
                                    </button>
                                </div>
                            );
                        })}
                    </div>
                )}
            </section>
        </div>
    );
};

export default ContentManager;
