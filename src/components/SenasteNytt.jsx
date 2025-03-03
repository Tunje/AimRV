import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/index.css';
import EditableText from './EditableText';
import EditableBackgroundImage from './EditableBackgroundImage';
import CreatePostModal from './CreatePostModal';
import { useText } from '../context/TextContext';
import { getPosts, addPost, deletePost } from '../firebase/posts';

const SenasteNytt = () => {
    const [email, setEmail] = useState('');
    const [subscribed, setSubscribed] = useState(false);
    const [showCreateModal, setShowCreateModal] = useState(false);
    const { isAdmin } = useText();
    const [newsPosts, setNewsPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    // Load posts from Firebase on component mount
    useEffect(() => {
        const fetchPosts = async () => {
            try {
                setLoading(true);
                const posts = await getPosts();
                setNewsPosts(posts);
                setError(null);
            } catch (err) {
                console.error('Error fetching posts:', err);
                setError('Failed to load posts. Please try again later.');
                // Set default posts if Firebase fails
                setDefaultPosts();
            } finally {
                setLoading(false);
            }
        };
        
        fetchPosts();
    }, []);
    
    // Set default posts if no posts exist or on error
    const setDefaultPosts = () => {
        const defaultPosts = [
            {
                id: 'default-1',
                title: 'AIM Challenge 2025 - Anmälan öppen!',
                date: '28 februari 2025',
                content: 'Nu är anmälan öppen för AIM Challenge 2025! Vi ser fram emot att välkomna både nya och återkommande deltagare till årets tävlingar i Hemsedal, Sälen, Ulricehamn och Kolmården.',
                image: '/images/AIM_Hemsedal_2024_AnkiGrothe_45cm_300dpi_094.jpg'
            },
            {
                id: 'default-2',
                title: 'Nya utmaningar i Hemsedal',
                date: '15 februari 2025',
                content: 'I år har vi lagt till flera nya spännande utmaningar på Hemsedal-banan. Förbered er på att testa era gränser i den vackra norska fjällmiljön!',
                image: '/images/AIM_lindvallen_2024_AnkiGrothe_highres_125.jpg'
            },
            {
                id: 'default-3',
                title: 'Resultat från förra årets tävlingar',
                date: '10 januari 2025',
                content: 'Nu finns alla resultat från förra årets tävlingar tillgängliga på vår hemsida. Kolla in hur du och ditt lag placerade er!',
                image: '/images/EE-AIMChallenge24-Uhamn-0171-high.jpg'
            },
            {
                id: 'default-4',
                title: 'Ny sponsor för AIM Challenge',
                date: '5 januari 2025',
                content: 'Vi är glada att meddela att vi har fått en ny huvudsponsor för AIM Challenge 2025. Mer information kommer snart!',
                image: '/images/AIM_Hemsedal_2024_AnkiGrothe_45cm_300dpi_094.jpg'
            }
        ];
        setNewsPosts(defaultPosts);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would typically send the email to your backend
        console.log('Email submitted:', email);
        setSubscribed(true);
        setEmail('');
        // Reset the subscribed message after 3 seconds
        setTimeout(() => setSubscribed(false), 3000);
    };
    
    const handleSavePost = async (newPost) => {
        try {
            setLoading(true);
            // Add post to Firebase
            const savedPost = await addPost(newPost, newPost.image);
            
            // Update local state with the new post
            setNewsPosts([savedPost, ...newsPosts]);
            setError(null);
        } catch (err) {
            console.error('Error saving post:', err);
            setError('Failed to save post. Please try again.');
        } finally {
            setLoading(false);
        }
    };
    
    const handleDeletePost = async (postId, imageUrl) => {
        if (window.confirm('Är du säker på att du vill ta bort detta inlägg?')) {
            try {
                setLoading(true);
                // Delete post from Firebase
                await deletePost(postId, imageUrl);
                
                // Update local state
                const updatedPosts = newsPosts.filter(post => post.id !== postId);
                setNewsPosts(updatedPosts);
                setError(null);
            } catch (err) {
                console.error('Error deleting post:', err);
                setError('Failed to delete post. Please try again.');
            } finally {
                setLoading(false);
            }
        }
    };

    const handleResetPosts = async () => {
        if (window.confirm('Är du säker på att du vill återställa till standardinlägg? Alla dina anpassade inlägg kommer att försvinna.')) {
            try {
                setLoading(true);
                
                // Delete all existing posts from Firebase
                // This would require additional code to get all post IDs and delete them
                // For now, we'll just set the default posts
                
                // Set default posts in state
                setDefaultPosts();
                
                // Add default posts to Firebase
                for (const post of newsPosts) {
                    await addPost(post, post.image);
                }
                
                setError(null);
            } catch (err) {
                console.error('Error resetting posts:', err);
                setError('Failed to reset posts. Please try again.');
            } finally {
                setLoading(false);
            }
        }
    };

    return (
        <div className="flex flex_col">
            {/* Header Section */}
            <section className="page_01 dynamic-background flex flex_col flex_j_E">
                <div className="page_01box flex flex_col flex_j_SA">
                    <div className="om-oss-title flex flex_j_C flex_a_C">
                        <EditableText 
                            textKey="senaste-nytt-title" 
                            defaultText="SENASTE NYTT" 
                            tag="p" 
                            className="fonts_huge senaste-nytt-main-title" 
                            style={{ color: 'rgb(56, 76, 135)' }}
                        />
                    </div>
                </div>
            </section>

            {/* Email Subscription Section */}
            <section className="set-03 senaste-nytt-subscribe-section">
                <div className="MaxWH flex flex_col flex_j_C flex_a_C font_white">
                    <EditableText 
                        textKey="senaste-nytt-subscribe-title" 
                        defaultText="Håll dig uppdaterad" 
                        tag="h2" 
                        className="fonts_large senaste-nytt-title" 
                    />
                    <EditableText 
                        textKey="senaste-nytt-subscribe-text" 
                        defaultText="Prenumerera på vårt nyhetsbrev för att få de senaste uppdateringarna om AIM Challenge direkt i din inkorg." 
                        tag="p" 
                        className="fonts_small senaste-nytt-description" 
                    />
                    
                    <form onSubmit={handleSubmit} className="senaste-nytt-form flex flex_col flex_a_C">
                        <div className="senaste-nytt-form-input-container flex">
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Din e-postadress"
                                required
                                className="senaste-nytt-form-input"
                            />
                            <button
                                type="submit"
                                className="senaste-nytt-form-button"
                            >
                                <EditableText 
                                    textKey="senaste-nytt-subscribe-button" 
                                    defaultText="Prenumerera" 
                                    tag="span" 
                                    className="" 
                                />
                            </button>
                        </div>
                        {subscribed && (
                            <p className="senaste-nytt-form-success">
                                <EditableText 
                                    textKey="senaste-nytt-subscribe-thanks" 
                                    defaultText="Tack för din prenumeration!" 
                                    tag="span" 
                                    className="" 
                                />
                            </p>
                        )}
                    </form>
                </div>
            </section>

            {/* News Posts Section - Two Column Layout */}
            <section className="senaste-nytt-news-section">
                <div className="MaxWH senaste-nytt-container">
                    <EditableText 
                        textKey="senaste-nytt-news-title" 
                        defaultText="Nyheter" 
                        tag="h2" 
                        className="senaste-nytt-section-title" 
                    />
                    
                    {isAdmin && (
                        <div className="senaste-nytt-admin-actions flex flex_j_E">
                            <button
                                className="senaste-nytt-create-post-button"
                                onClick={() => setShowCreateModal(true)}
                            >
                                <EditableText 
                                    textKey="senaste-nytt-create-post-button" 
                                    defaultText="Skapa nytt inlägg" 
                                    tag="span" 
                                    className="" 
                                />
                            </button>
                            <button
                                className="senaste-nytt-reset-posts-button"
                                onClick={handleResetPosts}
                            >
                                <EditableText 
                                    textKey="senaste-nytt-reset-posts-button" 
                                    defaultText="Återställ till standardinlägg" 
                                    tag="span" 
                                    className="" 
                                />
                            </button>
                        </div>
                    )}
                    
                    <div className="senaste-nytt-news-grid">
                        {newsPosts.map((post) => (
                            <div key={post.id} className="senaste-nytt-news-card">
                                <div className="senaste-nytt-news-image" style={{ 
                                    backgroundImage: `url(${post.image})`
                                }}></div>
                                <div className="senaste-nytt-news-content">
                                    <EditableText 
                                        textKey={`senaste-nytt-news-title-${post.id}`} 
                                        defaultText={post.title} 
                                        tag="h3" 
                                        className="senaste-nytt-news-card-title" 
                                    />
                                    <EditableText 
                                        textKey={`senaste-nytt-news-date-${post.id}`} 
                                        defaultText={post.date} 
                                        tag="p" 
                                        className="senaste-nytt-news-date" 
                                    />
                                    <EditableText 
                                        textKey={`senaste-nytt-news-content-${post.id}`} 
                                        defaultText={post.content} 
                                        tag="p" 
                                        className="senaste-nytt-news-text" 
                                    />
                                    <Link to={`/news/${post.id}`} className="senaste-nytt-read-more">
                                        <EditableText 
                                            textKey={`senaste-nytt-news-read-more-${post.id}`} 
                                            defaultText="Läs mer" 
                                            tag="span" 
                                            className="senaste-nytt-read-more-text" 
                                        />
                                    </Link>
                                    {isAdmin && (
                                        <button
                                            className="senaste-nytt-delete-post-button"
                                            onClick={() => handleDeletePost(post.id, post.image)}
                                        >
                                            <EditableText 
                                                textKey={`senaste-nytt-delete-post-button-${post.id}`} 
                                                defaultText="Ta bort" 
                                                tag="span" 
                                                className="" 
                                            />
                                        </button>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {isAdmin && (
                <CreatePostModal
                    isOpen={showCreateModal}
                    onClose={() => setShowCreateModal(false)}
                    onSave={handleSavePost}
                />
            )}

            {/* Background Image Section */}
            <EditableBackgroundImage
                backgroundKey="senaste-nytt-bottom-bg"
                defaultSrc="/images/AIM_Hemsedal_2024_AnkiGrothe_45cm_300dpi_094.jpg"
                className="page_01 dynamic-background flex flex_col flex_j_E"
            />
        </div>
    );
};

export default SenasteNytt;
