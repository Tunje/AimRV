import React, { useState, useEffect, useCallback, useMemo } from 'react';

const Gallery = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [visibleImages, setVisibleImages] = useState([]);
    const [page, setPage] = useState(1);
    const imagesPerPage = 8; 
    const [loadedFullImages, setLoadedFullImages] = useState({});

    const images = useMemo(() => [
        // Hemsedal images
        '/AimRV/images/AIM_Hemsedal_2024_AnkiGrothe_45cm_300dpi_025.jpg',
        '/AimRV/images/AIM_Hemsedal_2024_AnkiGrothe_45cm_300dpi_049.jpg',
        '/AimRV/images/AIM_Hemsedal_2024_AnkiGrothe_45cm_300dpi_057.jpg',
        '/AimRV/images/AIM_Hemsedal_2024_AnkiGrothe_45cm_300dpi_065.jpg',
        '/AimRV/images/AIM_Hemsedal_2024_AnkiGrothe_45cm_300dpi_094.jpg',
        '/AimRV/images/AIM_Hemsedal_2024_AnkiGrothe_45cm_300dpi_113.jpg',
        '/AimRV/images/AIM_Hemsedal_2024_AnkiGrothe_45cm_300dpi_138.jpg',
        '/AimRV/images/AIM_Hemsedal_2024_AnkiGrothe_45cm_300dpi_150.jpg',
        '/AimRV/images/AIM_Hemsedal_2024_AnkiGrothe_45cm_300dpi_202.jpg',
        '/AimRV/images/AIM_Hemsedal_2024_AnkiGrothe_45cm_300dpi_209.jpg',
        '/AimRV/images/AIM_Hemsedal_2024_AnkiGrothe_45cm_300dpi_213.jpg',
        '/AimRV/images/AIM_Hemsedal_2024_AnkiGrothe_45cm_300dpi_235.jpg',
        '/AimRV/images/AIM_Hemsedal_2024_AnkiGrothe_45cm_300dpi_246.jpg',
        '/AimRV/images/AIM_Hemsedal_2024_AnkiGrothe_45cm_300dpi_265.jpg',
        '/AimRV/images/AIM_Hemsedal_2024_AnkiGrothe_45cm_300dpi_352.jpg',
        
        // Ulricehamn images
        '/AimRV/images/EE-AIMChallenge24-Uhamn-0132-high.jpg',
        '/AimRV/images/EE-AIMChallenge24-Uhamn-0136-high.jpg',
        '/AimRV/images/EE-AIMChallenge24-Uhamn-0171-high.jpg',
        '/AimRV/images/EE-AIMChallenge24-Uhamn-0405-high.jpg',
        
        // Kolmården images
        '/AimRV/images/Kolmarden_1.jpg',
        '/AimRV/images/Kolmarden_2.jpg'
    ], []);

    // Load more images when scrolling to the bottom
    const loadMoreImages = useCallback(() => {
        const startIndex = (page - 1) * imagesPerPage;
        const endIndex = page * imagesPerPage;
        const newImages = images.slice(startIndex, endIndex);
        
        setVisibleImages(prev => [...prev, ...newImages]);
        setPage(prev => prev + 1);
    }, [page, images, imagesPerPage]);

    // Initialize with first batch of images
    useEffect(() => {
        loadMoreImages();
    }, [loadMoreImages]);

    // Add scroll event listener for infinite scrolling
    useEffect(() => {
        const handleScroll = () => {
            if (window.innerHeight + document.documentElement.scrollTop >= document.documentElement.offsetHeight - 100) {
                if ((page - 1) * imagesPerPage < images.length) {
                    loadMoreImages();
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [loadMoreImages, page, images.length, imagesPerPage]);

    // Preload full-size image when selected
    useEffect(() => {
        if (selectedImage !== null) {
            const img = new Image();
            img.src = visibleImages[selectedImage];
            img.onload = () => {
                setLoadedFullImages(prev => ({
                    ...prev,
                    [selectedImage]: true
                }));
            };
        }
    }, [selectedImage, visibleImages]);

    const handleImageClick = (index) => {
        setSelectedImage(selectedImage === index ? null : index);
    };

    // Create rows with staggered layout
    const createStaggeredRows = () => {
        const rows = [];
        let currentRow = [];
        let imagesPerRow = 4; // Start with 4 images in the first row
        
        visibleImages.forEach((image, index) => {
            currentRow.push({ image, index });
            
            // When row is complete, add it to rows array and start a new row
            if (currentRow.length === imagesPerRow) {
                rows.push(currentRow);
                currentRow = [];
                // Toggle between 3 and 4 images per row
                imagesPerRow = imagesPerRow === 4 ? 3 : 4;
            }
        });
        
        // Add the last row if it has any images
        if (currentRow.length > 0) {
            rows.push(currentRow);
        }
        
        return rows;
    };

    const staggeredRows = createStaggeredRows();

    return (
        <div>
            {/* Buffer space to move content below navbar */}
            <div style={{ height: '120px' }}></div>
            
            <div className="gallery-container" style={{ 
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '0.1rem', 
                padding: '0.25rem',
                position: 'relative'
            }}>
                {staggeredRows.map((row, rowIndex) => (
                    <div 
                        key={rowIndex} 
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            gap: '3rem', 
                            width: '100%',
                            marginBottom: '-20px', 
                            // Center the row with fewer images
                            paddingLeft: row.length === 3 ? '10%' : '0',
                            paddingRight: row.length === 3 ? '10%' : '0'
                        }}
                    >
                        {row.map(({ image, index }) => {
                            const isSelected = selectedImage === index;
                            return (
                                <div
                                    key={index}
                                    onClick={() => handleImageClick(index)}
                                    style={{
                                        width: isSelected ? '80vw' : '250px',
                                        height: isSelected ? '80vh' : '250px',
                                        transition: 'all 0.5s ease',
                                        cursor: 'pointer',
                                        position: isSelected ? 'fixed' : 'relative',
                                        top: isSelected ? '50%' : 'auto',
                                        left: isSelected ? '50%' : 'auto',
                                        transform: isSelected 
                                            ? 'translate(-50%, -50%) rotate(0deg)' 
                                            : `rotate(45deg) scale(0.9)`,
                                        zIndex: isSelected ? 1000 : 1,
                                        border: '2px solid #00a6fb',
                                        borderRadius: '8px',
                                        overflow: 'hidden',
                                        boxShadow: '0 4px 8px rgba(0, 166, 251, 0.3)',
                                        margin: '0.1rem 1.5rem'
                                    }}
                                >
                                    <img
                                        src={image}
                                        alt={`Gallery image ${index + 1}`}
                                        loading="lazy"
                                        width={isSelected ? "auto" : "250"}
                                        height={isSelected ? "auto" : "250"}
                                        style={{
                                            width: '100%',
                                            height: '100%',
                                            objectFit: 'cover',
                                            transform: isSelected 
                                                ? 'rotate(0deg) scale(1)' 
                                                : 'rotate(-45deg) scale(1.5)'
                                        }}
                                    />
                                </div>
                            );
                        })}
                    </div>
                ))}
                
                {selectedImage !== null && (
                    <div
                        onClick={() => setSelectedImage(null)}
                        style={{
                            position: 'fixed',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            backgroundColor: 'rgba(0, 0, 0, 0.8)',
                            zIndex: 999
                        }}
                    />
                )}
                
                {visibleImages.length < images.length && (
                    <div style={{ width: '100%', textAlign: 'center', padding: '2rem' }}>
                        <button 
                            onClick={loadMoreImages}
                            style={{
                                padding: '0.75rem 1.5rem',
                                backgroundColor: '#00a6fb',
                                color: 'white',
                                border: 'none',
                                borderRadius: '4px',
                                cursor: 'pointer',
                                fontSize: '1rem',
                                fontWeight: 'bold'
                            }}
                        >
                            Load More Images
                        </button>
                    </div>
                )}
            </div>
            {/* Add padding at the bottom of the gallery */}
            <div style={{ height: '80px' }}></div>
        </div>
    );
};

export default Gallery;
