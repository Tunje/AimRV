import React, { useState, useEffect, Fragment } from 'react';
import { Link } from 'react-router-dom';
import '../styles/index.css';
import CreatePostModal from './CreatePostModal';
import { useText } from '../context/TextContext';
import { db, storage } from '../firebase/config';
import { collection, getDocs, doc, deleteDoc, addDoc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL, deleteObject } from 'firebase/storage';
import EditableText from './EditableText';

const SenasteNytt = () => {
    const [email, setEmail] = useState('');
    const [subscribed, setSubscribed] = useState(false);
    const [showCreateModal, setShowCreateModal] = useState(false);
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
            let imageUrl = null;
            
            if (newPost.image) {
                // Generate a unique filename with timestamp and original name
                const filename = `post-images/${Date.now()}_${newPost.image.name}`;
                console.log("Uploading image with filename:", filename);
                
                const storageRef = ref(storage, filename);
                
                // Upload the file
                await uploadBytes(storageRef, newPost.image);
                
                // Get the download URL - this is the critical part
                imageUrl = await getDownloadURL(storageRef);
                console.log("Image URL after upload:", imageUrl);
                
                // Test the URL with a fetch to ensure it's accessible
                try {
                    const response = await fetch(imageUrl, { method: 'HEAD' });
                    console.log("Image URL test response:", response.status, response.ok);
                } catch (fetchError) {
                    console.error("Error testing image URL:", fetchError);
                }
            }
            
            // Create the post document in Firestore
            const postData = {
                title: newPost.title,
                content: newPost.content,
                image: imageUrl, // Store the direct URL
                date: new Date().toLocaleDateString('sv-SE', { day: 'numeric', month: 'long', year: 'numeric' }),
                createdAt: new Date().toISOString()
            };
            
            console.log("Saving post with data:", postData);
            const docRef = await addDoc(collection(db, 'posts'), postData);
            console.log("Post saved with ID:", docRef.id);

            // Create the post object for the UI with the same data
            const post = {
                id: docRef.id,
                ...postData
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
        <div className="flex flex_col" style={{width: "100%", overflow: "hidden"}}>
            {/* Header Section */}
            <section className="page_01 dynamic-background background-editable flex flex_col flex_j_E" id="senaste-nytt-top-background">
                <div className="MaxWH flex flex_col flex_j_SA">
                    <div className="om-oss-title flex flex_j_C flex_a_C">
                        <EditableText
                            textKey="senaste-nytt-main-title"
                            defaultText="SENASTE NYTT"
                            tag="p"
                            className="fonts_huge senaste-nytt-main-component-main-title"
                        />
                    </div>
                </div>
            </section>

            {/* Email Subscription Section */}
            <div className="set-03 senaste-nytt-main-component-subscribe-section">
                <div className="senaste-nytt-main-component-container flex flex_col flex_j_C flex_a_C font_white">
                    <EditableText
                        textKey="senaste-nytt-subscribe-title"
                        defaultText="Håll dig uppdaterad"
                        tag="h2"
                        className="fonts_large senaste-nytt-main-component-title"
                    />
                    <EditableText
                        textKey="senaste-nytt-subscribe-description"
                        defaultText="Prenumerera på vårt nyhetsbrev för att få de senaste uppdateringarna om AIM Challenge direkt i din inkorg."
                        tag="p"
                        className="fonts_small senaste-nytt-main-component-description"
                    />
                    
                    <form onSubmit={handleSubmit} className="senaste-nytt-main-component-form flex flex_col flex_a_C">
                        <div className="senaste-nytt-main-component-form-input-container flex">
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Din e-postadress"
                                required
                                className="senaste-nytt-main-component-form-input fonts_small"
                                id="newsletter-email"
                                name="newsletter-email"
                                autoComplete="email"
                            />
                            <button
                                type="submit"
                                className="senaste-nytt-main-component-form-button fonts_small flex flex_j_C flex_a_C"
                            >
                                <span>Prenumerera</span>
                            </button>
                        </div>
                        {subscribed && (
                            <p className="senaste-nytt-main-component-form-success">
                                Tack för din prenumeration!
                            </p>
                        )}
                    </form>
                </div>
            </div>

            {/* News Posts Section */}
            <div className="set-03">
                <div className="senaste-nytt-main-component-container">
                    <EditableText
                        textKey="senaste-nytt-news-title"
                        defaultText="Nyheter"
                        tag="h2"
                        className="senaste-nytt-main-component-section-title"
                    />
                    
                    {isAdmin && (
                        <div className="senaste-nytt-main-component-admin-actions flex flex_j_E">
                            <button
                                className="senaste-nytt-main-component-create-post-button"
                                onClick={() => setShowCreateModal(true)}
                            >
                                Skapa nytt inlägg
                            </button>
                        </div>
                    )}
                    
                    <div className="senaste-nytt-main-component-news-grid">
                        {newsPosts.map((post) => (
                            <div key={post.id} className="senaste-nytt-main-component-news-card">
                                <div className="senaste-nytt-main-component-news-image-wrapper">
                                    {post.image ? (
                                        <img
                                            className="senaste-nytt-main-component-news-image-alt"
                                            src={post.image}
                                            alt={post.title || 'Post image'}
                                        />
                                    ) : (
                                        <div className="senaste-nytt-main-component-news-image senaste-nytt-main-component-news-image--empty">
                                            <span>Ingen bild</span>
                                        </div>
                                    )}
                                </div>
                                <div className="senaste-nytt-main-component-news-content">
                                    <h3 className="senaste-nytt-main-component-news-card-title">{post.title}</h3>
                                    <p className="senaste-nytt-main-component-news-date">{post.date}</p>
                                    <p className="senaste-nytt-main-component-news-text">{post.content}</p>
                                    <Link to={`/news/${post.id}`} className="senaste-nytt-main-component-read-more">
                                        {readMoreText}
                                    </Link>
                                    {isAdmin && (
                                        <button
                                            className="senaste-nytt-main-component-delete-post-button"
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
            <div id="senaste-nytt-background" className="background-editable senaste-nytt-background-container locked-background page_01">
            </div>
        </div>
    );
};

export default SenasteNytt;
