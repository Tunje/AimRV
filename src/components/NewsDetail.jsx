import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import '../styles/index.css';
import { db } from '../firebase/config';
import { doc, getDoc } from 'firebase/firestore';

const NewsDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [newsItem, setNewsItem] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPost = async () => {
            try {
                setLoading(true);
                const docRef = doc(db, 'posts', id);
                const docSnap = await getDoc(docRef);
                
                if (docSnap.exists()) {
                    setNewsItem({
                        id: docSnap.id,
                        ...docSnap.data()
                    });
                    setError(null);
                } else {
                    setError('Nyheten kunde inte hittas');
                }
            } catch (err) {
                console.error('Error fetching post:', err);
                setError('Ett fel uppstod när nyheten skulle hämtas');
            } finally {
                setLoading(false);
            }
        };
        
        fetchPost();
    }, [id]);

    const handleGoBack = () => {
        navigate('/senaste-nytt');
    };

    if (loading) {
        return (
            <div className="flex flex_col flex_a_C flex_j_C" style={{ minHeight: '50vh' }}>
                <p className="fonts_large">Laddar...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="flex flex_col flex_a_C flex_j_C" style={{ minHeight: '50vh' }}>
                <p className="fonts_large">{error}</p>
                <button 
                    onClick={handleGoBack} 
                    className="navbbutton button font_blue"
                    style={{ marginTop: '20px', padding: '10px 20px' }}
                >
                    Tillbaka till nyheter
                </button>
            </div>
        );
    }

    if (!newsItem) {
        return (
            <div className="flex flex_col flex_a_C flex_j_C" style={{ minHeight: '50vh' }}>
                <p className="fonts_large">Nyheten kunde inte hittas</p>
                <button 
                    onClick={handleGoBack} 
                    className="navbbutton button font_blue"
                    style={{ marginTop: '20px', padding: '10px 20px' }}
                >
                    Tillbaka till nyheter
                </button>
            </div>
        );
    }

    return (
        <div className="flex flex_col">
            {/* Header Section - Title matching SenasteNytt */}
            <section className="page_01 dynamic-background flex flex_col flex_j_E">
                <div className="MaxWH flex flex_col flex_j_SA">
                    <div className="om-oss-title flex flex_j_C flex_a_C">
                        <p className="fonts_huge senaste-nytt-main-title">NYHETER</p>
                    </div>
                </div>
            </section>

            {/* News Detail Section */}
            <section style={{ padding: '50px 0', backgroundColor: '#f5f5f5', width: '100vw' }}>
                <div className="MaxWH" style={{ padding: '0 20px', maxWidth: '1000px', margin: '0 auto' }}>
                    <button 
                        onClick={handleGoBack} 
                        className="navbbutton button font_blue"
                        style={{ 
                            marginBottom: '20px', 
                            padding: '10px 30px 10px 20px',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '5px',
                            minWidth: '120px'
                        }}
                    >
                        <span>←</span> <span>Tillbaka</span>
                    </button>
                    
                    <div style={{ 
                        backgroundColor: 'white',
                        borderRadius: '8px',
                        overflow: 'hidden',
                        boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
                    }}>
                        {newsItem.image && (
                            <div style={{ 
                                height: '400px', 
                                backgroundImage: `url(${newsItem.image})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center'
                            }}></div>
                        )}
                        <div style={{ padding: '30px' }}>
                            <h1 className="fonts_large font_blue" style={{ marginBottom: '10px' }}>{newsItem.title}</h1>
                            <p className="fonts_small" style={{ color: '#666', marginBottom: '30px' }}>{newsItem.date}</p>
                            <div 
                                className="news-detail-content"
                                style={{ marginBottom: '20px' }}
                                dangerouslySetInnerHTML={{ __html: newsItem.content }}
                            />
                        </div>
                    </div>
                    
                    <div style={{ marginTop: '30px', textAlign: 'center' }}>
                        <button 
                            onClick={handleGoBack} 
                            className="navbbutton button font_blue"
                            style={{ 
                                padding: '10px 30px 10px 20px',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '5px',
                                minWidth: '120px'
                            }}
                        >
                            <span>←</span> <span>Tillbaka</span>
                        </button>
                    </div>
                </div>
            </section>

            {/* Background Image Section */}
            <section className="page_01 dynamic-background flex flex_col flex_j_E" style={{ height: '50vh', width: '100vw' }}>
            </section>
        </div>
    );
};

export default NewsDetail;
