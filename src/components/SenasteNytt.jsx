import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/index.css';
import CreatePostModal from './CreatePostModal';
import { useText } from '../context/TextContext';
import { db, storage } from '../firebase/config';
import { collection, getDocs, doc, deleteDoc, addDoc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

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
                const querySnapshot = await getDocs(collection(db, 'posts'));
                const posts = querySnapshot.docs.map(doc => ({
                    ...doc.data(),
                    id: doc.id  // This ensures we get the string ID from Firebase
                }));
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
            let imageUrl = null;
            
            if (newPost.image) {
                const storageRef = ref(storage, `post-images/${Date.now()}_${newPost.image.name}`);
                await uploadBytes(storageRef, newPost.image);
                imageUrl = await getDownloadURL(storageRef);
            }
            
            const docRef = await addDoc(collection(db, 'posts'), {
                title: newPost.title,
                content: newPost.content,
                image: imageUrl,
                date: new Date().toLocaleDateString('sv-SE', { day: 'numeric', month: 'long', year: 'numeric' }),
                createdAt: new Date().toISOString()
            });

            const post = {
                id: docRef.id, // This will be a string ID from Firebase
                ...newPost,
                image: imageUrl,
                date: new Date().toLocaleDateString('sv-SE', { day: 'numeric', month: 'long', year: 'numeric' })
            };
            
            setNewsPosts(current => [post, ...current]);
            setShowCreateModal(false);
            setError(null);
        } catch (err) {
            console.error('Error saving post:', err);
            setError('Failed to save post');
        } finally {
            setLoading(false);
        }
    };

    const handleDeletePost = async (postId) => {
        try {
            await deleteDoc(doc(db, 'posts', String(postId)));
            window.location.reload(); // Reload to get fresh posts
        } catch (error) {
            console.error('Failed to delete post:', error);
        }
    };

    return (
        <div className="flex flex_col">
            {/* Header Section */}
            <section className="page_01 dynamic-background flex flex_col flex_j_E">
                <div className="MaxWH flex flex_col flex_j_SA">
                    <div className="om-oss-title flex flex_j_C flex_a_C">
                        <p className="fonts_huge senaste-nytt-main-title">SENASTE NYTT</p>
                    </div>
                </div>
            </section>

            {/* Email Subscription Section */}
            <div className="set-03 senaste-nytt-subscribe-section">
                <div className="senaste-nytt-container flex flex_col flex_j_C flex_a_C font_white">
                    <h2 className="fonts_large senaste-nytt-title">Håll dig uppdaterad</h2>
                    <p className="fonts_small senaste-nytt-description">
                        Prenumerera på vårt nyhetsbrev för att få de senaste uppdateringarna om AIM Challenge direkt i din inkorg.
                    </p>
                    
                    <form onSubmit={handleSubmit} className="senaste-nytt-form flex flex_col flex_a_C">
                        <div className="senaste-nytt-form-input-container flex">
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Din e-postadress"
                                required
                                className="senaste-nytt-form-input fonts_small"
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
                    <h2 className="senaste-nytt-section-title">Nyheter</h2>
                    
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
                        {newsPosts.map((post) => (
                            <div key={post.id} className="senaste-nytt-news-card">
                                <div 
                                    className="senaste-nytt-news-image"
                                    style={{ 
                                        backgroundImage: `url(${post.image})`
                                    }}
                                ></div>
                                <div className="senaste-nytt-news-content">
                                    <h3 className="senaste-nytt-news-card-title">{post.title}</h3>
                                    <p className="senaste-nytt-news-date">{post.date}</p>
                                    <p className="senaste-nytt-news-text">{post.content}</p>
                                    <Link to={`/news/${post.id}`} className="senaste-nytt-read-more">
                                        Läs mer
                                    </Link>
                                    {isAdmin && (
                                        <button
                                            className="senaste-nytt-delete-post-button"
                                            onClick={() => {
                                                console.log('Post:', post);
                                                console.log('Post ID:', post.id);
                                                console.log('Post ID type:', typeof post.id);
                                                console.log('Post ID value:', String(post.id));
                                                handleDeletePost(String(post.id));
                                            }}
                                        >
                                            Ta bort
                                        </button>
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
                    onClose={() => setShowCreateModal(false)}
                    addPost={handleSavePost}
                />
            )}

            {/* Background Image Section */}
            <div className="senaste-nytt-background-container locked-background page_01">
            </div>
        </div>
    );
};

export default SenasteNytt;
