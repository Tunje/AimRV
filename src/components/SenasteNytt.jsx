import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/index.css';
import CreatePostModal from './CreatePostModal';
import { useText } from '../context/TextContext';
import { db, storage } from '../firebase/config';
import { collection, getDocs, doc, deleteDoc, addDoc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL, deleteObject } from 'firebase/storage';

const SenasteNytt = () => {
    const [email, setEmail] = useState('');
    const [subscribed, setSubscribed] = useState(false);
    const [showCreateModal, setShowCreateModal] = useState(false);
    const { isAdmin } = useText();
    const [newsPosts, setNewsPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    // Function to fetch posts from Firestore
    const fetchPosts = async () => {
        try {
            setLoading(true);
            const postsCollection = collection(db, 'posts');
            const postsSnapshot = await getDocs(postsCollection);
            
            // Get all posts from Firestore
            const postsData = postsSnapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));
            
            // Log all posts for debugging
            console.log("All posts from Firestore:", postsData);
            
            setNewsPosts(postsData);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching posts:', error);
            setLoading(false);
        }
    };

    useEffect(() => {
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
            
            // Update the local state instead of reloading the page
            setNewsPosts(newsPosts.filter(post => String(post.id) !== String(postId)));
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
                                <div className="senaste-nytt-news-image-wrapper">
                                    {post.image ? (
                                        <div 
                                            className="senaste-nytt-news-image"
                                            style={{ backgroundImage: `url(${post.image})` }}
                                        ></div>
                                    ) : (
                                        <div className="senaste-nytt-news-image senaste-nytt-news-image--empty">
                                            <span>Ingen bild</span>
                                        </div>
                                    )}
                                </div>
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
                />
            )}

            {/* Background Image Section */}
            <div className="senaste-nytt-background-container locked-background page_01">
            </div>
        </div>
    );
};

export default SenasteNytt;
