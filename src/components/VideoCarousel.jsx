import React, { useState, useEffect, useRef } from 'react';

const VideoCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const videoRefs = useRef([]);
    
    // Video data - can be expanded to 20+ videos
    const videos = [
        {
            id: 1,
            src: '/videos/AIM nr 1 Formula 16x9.mov',
            title: 'AIM Challenge Formula',
            description: 'Highlights from the AIM Challenge Formula event'
        },
        // Adding placeholder videos for testing the carousel
        {
            id: 2,
            src: '/videos/AIM nr 1 Formula 16x9.mov', // Using the same video for now
            title: 'AIM Challenge Highlights',
            description: 'More exciting moments from the AIM Challenge'
        },
        {
            id: 3,
            src: '/videos/AIM nr 1 Formula 16x9.mov', // Using the same video for now
            title: 'AIM Challenge Recap',
            description: 'A recap of the amazing AIM Challenge events'
        }
        // Add more videos here as they become available
    ];

    // Initialize video refs array
    useEffect(() => {
        videoRefs.current = videoRefs.current.slice(0, videos.length);
    }, [videos.length]);

    // Pause all videos except the current one
    const handleVideoPlay = (index) => {
        videoRefs.current.forEach((videoRef, idx) => {
            if (idx !== index && videoRef) {
                videoRef.pause();
            }
        });
        setIsPlaying(true);
        setCurrentIndex(index);
    };

    // Simplified navigation functions
    const nextVideo = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % videos.length);
    };

    const prevVideo = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + videos.length) % videos.length);
    };

    return (
        <div className="video-carousel-container" style={{ 
            padding: '80px 0 40px 0',
            backgroundColor: '#f0f8ff',
            borderTop: '1px solid #e0e0e0',
            width: '100%',
            maxWidth: '100%'
        }}>
            <h2 style={{ 
                textAlign: 'center', 
                marginBottom: '30px',
                color: '#00a6fb',
                fontSize: '2rem'
            }}>
                AIM Challenge Videos
            </h2>
            
            <div style={{ 
                position: 'relative',
                width: '100%',
                margin: '0 auto',
                overflow: 'hidden'
            }}>
                {/* Navigation arrows */}
                <button 
                    onClick={prevVideo}
                    style={{
                        position: 'absolute',
                        left: '10px',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        zIndex: 10,
                        background: 'rgba(0, 166, 251, 0.7)',
                        color: 'white',
                        border: 'none',
                        borderRadius: '50%',
                        width: '50px',
                        height: '50px',
                        fontSize: '24px',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.3)'
                    }}
                    aria-label="Previous video"
                >
                    &lt;
                </button>
                
                <button 
                    onClick={nextVideo}
                    style={{
                        position: 'absolute',
                        right: '10px',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        zIndex: 10,
                        background: 'rgba(0, 166, 251, 0.7)',
                        color: 'white',
                        border: 'none',
                        borderRadius: '50%',
                        width: '50px',
                        height: '50px',
                        fontSize: '24px',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.3)'
                    }}
                    aria-label="Next video"
                >
                    &gt;
                </button>
                
                {/* Video carousel */}
                <div style={{
                    display: 'flex',
                    transition: 'transform 0.5s ease',
                    transform: `translateX(${currentIndex * -100}%)`,
                    width: '100%',
                    position: 'relative'
                }}>
                    {videos.map((video, index) => (
                        <div 
                            key={video.id} 
                            style={{
                                flex: '0 0 100%',
                                padding: '0 20px',
                                boxSizing: 'border-box',
                                width: '100%'
                            }}
                        >
                            <div style={{
                                background: '#fff',
                                borderRadius: '8px',
                                overflow: 'hidden',
                                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                                maxWidth: '1200px',
                                margin: '0 auto'
                            }}>
                                <div style={{ position: 'relative', paddingTop: '56.25%' }}>
                                    <video
                                        ref={el => videoRefs.current[index] = el}
                                        src={video.src.replace('/AimRV/', '/videos/')}
                                        style={{
                                            position: 'absolute',
                                            top: 0,
                                            left: 0,
                                            width: '100%',
                                            height: '100%',
                                            objectFit: 'cover'
                                        }}
                                        controls
                                        onPlay={() => handleVideoPlay(index)}
                                        onPause={() => setIsPlaying(false)}
                                    />
                                </div>
                                <div style={{ padding: '20px' }}>
                                    <h3 style={{ 
                                        margin: '0 0 10px 0',
                                        color: '#00a6fb',
                                        fontSize: '1.5rem'
                                    }}>
                                        {video.title}
                                    </h3>
                                    <p style={{ 
                                        margin: 0,
                                        color: '#333',
                                        lineHeight: 1.6
                                    }}>
                                        {video.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                
                {/* Video indicators */}
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    marginTop: '20px'
                }}>
                    {videos.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            style={{
                                width: '12px',
                                height: '12px',
                                borderRadius: '50%',
                                margin: '0 5px',
                                background: index === currentIndex ? '#00a6fb' : '#ccc',
                                border: 'none',
                                cursor: 'pointer'
                            }}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default VideoCarousel;
