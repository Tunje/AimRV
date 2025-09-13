import React, { useState, useEffect, Fragment } from 'react';
import { Link } from 'react-router-dom';
import '../styles/index.css';
import CreatePostModal from './CreatePostModal';
import { useText } from '../context/TextContext';
import { db, storage } from '../firebase/config';
import { collection, getDocs, doc, deleteDoc, addDoc, updateDoc, query, orderBy, limit } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL, deleteObject } from 'firebase/storage';
import EditableText from './EditableText';

const SenasteNytt = () => {
    const [email, setEmail] = useState('');
    const [subscribed, setSubscribed] = useState(false);
    const [showCreateModal, setShowCreateModal] = useState(false);
    const [editingPost, setEditingPost] = useState(null);
    const { isAdmin, currentLanguage } = useText();
    const [readMoreText, setReadMoreText] = useState('');
    
    // Update button text when language changes
    useEffect(() => {
        // For English
        if (currentLanguage === 'en') {
            setReadMoreText('Read more');
        }
        // For Norwegian
        else if (currentLanguage === 'no') {
            setReadMoreText('Les mer');
        }
        // Default to Swedish
        else {
            setReadMoreText('Läs mer');
        }
    }, [currentLanguage]);
    const [newsPosts, setNewsPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    // Load posts from Firebase on component mount
    useEffect(() => {
        const fetchPosts = async () => {
            try {
                setLoading(true);
                const postsCollection = collection(db, 'posts');
                const postsSnapshot = await getDocs(postsCollection);
                const postsData = postsSnapshot.docs.map(doc => ({
                    id: doc.id,
                    published: doc.data().published !== false, // Default to published if field doesn't exist
                    ...doc.data()
                }));
                
                // Log the image URLs for debugging
                postsData.forEach(post => {
                    if (post.image) {
                        console.log(`Post ${post.id} image URL:`, post.image);
                    }
                });
                
                const posts = postsData.map(post => {
                    const data = post;
                    
                    // Detailed logging for each post
                    console.log(`Post ${post.id}:`, data);
                    
                    if (data.image) {
                        console.log(`Post ${post.id} image URL:`, data.image);
                        
                        // Test if the URL is valid
                        const img = new Image();
                        img.onload = () => console.log(`Image for post ${post.id} loaded successfully`);
                        img.onerror = () => console.error(`Image for post ${post.id} failed to load`);
                        img.src = data.image;
                    } else {
                        console.warn(`Post ${post.id} has no image URL`);
                    }
                    
                    return {
                        ...data,
                        id: post.id
                    };
                });
                
                setNewsPosts(posts);
                setError(null);
            } catch (err) {
                console.error('Error fetching posts:', err);
                setError('Failed to load posts');
            } finally {
                setLoading(false);
            }
        };
        
        fetchPosts();
    }, []);

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
            
            // The post has already been saved in CreatePostModal
            // Just update the UI state here
            
            if (editingPost && newPost.id) {
                // For edited posts, update the local state
                setNewsPosts(current => current.map(post => {
                    if (post.id === newPost.id) {
                        return { 
                            ...post, 
                            title: newPost.title,
                            content: newPost.content,
                            category: newPost.category || 'Alla',
                            published: newPost.published !== false,
                            image: newPost.image || post.image
                        };
                    }
                    return post;
                }));
            } else {
                // For new posts, we need to fetch the latest posts
                // to get the newly created post with its ID
                const postsRef = collection(db, 'posts');
                const q = query(postsRef, orderBy('createdAt', 'desc'), limit(10));
                const querySnapshot = await getDocs(q);
                
                const fetchedPosts = [];
                querySnapshot.forEach((doc) => {
                    fetchedPosts.push({
                        id: doc.id,
                        ...doc.data()
                    });
                });
                
                setNewsPosts(fetchedPosts);
            }
            
            setEditingPost(null);
            setShowCreateModal(false);
            setError(null);
        } catch (err) {
            console.error('Error saving post:', err);
            setError('Failed to save post');
        } finally {
            setLoading(false);
        }
    };

    const handleEditPost = (post) => {
        console.log('Edit post clicked:', post);
        setEditingPost(post);
        setShowCreateModal(true);
    };

    const handleTogglePublish = async (postId, currentStatus) => {
        try {
            const postRef = doc(db, 'posts', String(postId));
            await updateDoc(postRef, {
                published: !currentStatus
            });
            
            // Update local state
            setNewsPosts(posts => posts.map(post => {
                if (String(post.id) === String(postId)) {
                    return { ...post, published: !currentStatus };
                }
                return post;
            }));
        } catch (error) {
            console.error('Failed to toggle publish status:', error);
        }
    };

    const handleDeletePost = async (postId) => {
        try {
            // Find the post to get its image URL
            const postToDelete = newsPosts.find(post => String(post.id) === String(postId));
            // Delete the Firestore document
            await deleteDoc(doc(db, 'posts', String(postId)));
            // Delete the image from Firebase Storage if it exists
            if (postToDelete && postToDelete.image) {
                try {
                    // Get the storage path from the URL
                    const decodePath = (url) => {
                        const match = url.match(/\/o\/(.+)\?alt=media/);
                        return match ? decodeURIComponent(match[1]) : null;
                    };
                    const imagePath = decodePath(postToDelete.image);
                    if (imagePath) {
                        const imageRef = ref(storage, imagePath);
                        await deleteObject(imageRef);
                    }
                } catch (imgErr) {
                    console.error('Failed to delete image from storage:', imgErr);
                }
            }
            window.location.reload(); // Reload to get fresh posts
        } catch (error) {
            console.error('Failed to delete post:', error);
        }
    };

    return (
        <div className="flex flex_col">
            {/* Header Section */}
            <section className="page_01 dynamic-background background-editable flex flex_col flex_j_E" id="senaste-nytt-top-background">
                <div className="MaxWH flex flex_col flex_j_SA">
                    <div className="om-oss-title flex flex_j_C flex_a_C">
                        <EditableText
                            textKey="senaste-nytt-main-title"
                            defaultText="SENASTE NYTT"
                            tag="p"
                            className="fonts_huge senaste-nytt-main-title"
                        />
                    </div>
                </div>
            </section>

            {/* Email Subscription Section */}
            <div className="set-03 senaste-nytt-subscribe-section">
                <div className="senaste-nytt-container flex flex_col flex_j_C flex_a_C font_white">
                    <EditableText
                        textKey="senaste-nytt-subscribe-title"
                        defaultText="Håll dig uppdaterad"
                        tag="h2"
                        className="fonts_large senaste-nytt-title"
                    />
                    <EditableText
                        textKey="senaste-nytt-subscribe-description"
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
                                className="senaste-nytt-form-input fonts_small"
                                id="newsletter-email"
                                name="newsletter-email"
                                autoComplete="email"
                            />
                            <button
                                type="submit"
                                className="senaste-nytt-form-button fonts_small flex flex_j_C flex_a_C"
                            >
                                <span>Prenumerera</span>
                            </button>
                        </div>
                        {subscribed && (
                            <p className="senaste-nytt-form-success">
                                Tack för din prenumeration!
                            </p>
                        )}
                    </form>
                </div>
            </div>

            {/* News Posts Section */}
            <div className="set-03 senaste-nytt-news-section">
                <div className="senaste-nytt-container">
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
                                Skapa nytt inlägg
                            </button>
                        </div>
                    )}
                    
                    <div className="senaste-nytt-news-grid">
                        {newsPosts
                            .filter(post => isAdmin || post.published !== false) // Only show published posts to non-admins
                            .map((post) => (
                            <div key={post.id} className="senaste-nytt-news-card">
                                <div className="senaste-nytt-news-image-wrapper">
                                    {post.image ? (
                                        <img
                                            className="senaste-nytt-news-image-alt"
                                            src={post.image}
                                            alt={post.title || 'Post image'}
                                        />
                                    ) : (
                                        <div className="senaste-nytt-news-image senaste-nytt-news-image--empty">
                                            <span>Ingen bild</span>
                                        </div>
                                    )}
                                </div>
                                <div className="senaste-nytt-news-content">
                                    <h3 className="senaste-nytt-news-card-title">{post.title}</h3>
                                    <p className="senaste-nytt-news-date">{post.date}</p>
                                    {!post.published && isAdmin && (
                                        <p className="senaste-nytt-unpublished-notice">Opublicerad</p>
                                    )}
                                    <div 
                                        className="senaste-nytt-news-text"
                                        style={{ 
                                            maxHeight: '150px',
                                            overflow: 'hidden',
                                            position: 'relative'
                                        }}
                                    >
                                        <div dangerouslySetInnerHTML={{ __html: post.content }} />
                                    </div>
                                    <div 
                                        style={{
                                            position: 'absolute',
                                            bottom: '60px',
                                            left: 0,
                                            right: 0,
                                            height: '40px',
                                            background: 'linear-gradient(transparent, #6a9fb5)',
                                            pointerEvents: 'none'
                                        }}
                                    />
                                    <Link to={`/news/${post.id}`} className="senaste-nytt-read-more">
                                        {readMoreText}
                                    </Link>
                                    {isAdmin && (
                                        <div className="senaste-nytt-admin-buttons">
                                            <button
                                                className="senaste-nytt-edit-post-button"
                                                onClick={() => handleEditPost(post)}
                                            >
                                                Redigera
                                            </button>
                                            <button
                                                className={`senaste-nytt-publish-post-button ${post.published ? 'published' : 'unpublished'}`}
                                                onClick={() => handleTogglePublish(String(post.id), post.published)}
                                            >
                                                {post.published ? 'Avpublicera' : 'Publicera'}
                                            </button>
                                            <button
                                                className="senaste-nytt-delete-post-button"
                                                onClick={() => handleDeletePost(String(post.id))}
                                            >
                                                Ta bort
                                            </button>
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {isAdmin && (
                <CreatePostModal
                    isOpen={showCreateModal}
                    onClose={() => {
                        setShowCreateModal(false);
                        setEditingPost(null);
                    }}
                    addPost={handleSavePost}
                    editingPost={editingPost}
                />
            )}

            {/* Background Image Section */}
            <div id="senaste-nytt-background" className="background-editable senaste-nytt-background-container locked-background page_01">
            </div>
        </div>
    );
};

export default SenasteNytt;
