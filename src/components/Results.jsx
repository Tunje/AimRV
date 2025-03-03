import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import ResultUploadModal from './ResultUploadModal';

const Results = () => {
    const { currentUser } = useAuth();
    const [selectedYear, setSelectedYear] = useState('all');
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [selectedDuration, setSelectedDuration] = useState('all');
    const [results, setResults] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [error, setError] = useState('');
    
    // Check if user is admin
    const isAdmin = currentUser?.role === 'admin';
    
    const years = [2025, 2024, 2023, 2022, 2021, 2020, 2019, 2018];
    const categories = ['Herrar', 'Damer', 'Mixed'];
    const durations = ['3 timmar', '6 timmar'];
    const locations = ['Ulricehamn', 'Sälen', 'Hemsedal', 'Kolmården'];

    // Load results from localStorage on component mount and when filters change
    useEffect(() => {
        fetchResults();
    }, [selectedYear, selectedCategory, selectedDuration]);

    const fetchResults = () => {
        try {
            setIsLoading(true);
            setError('');
            
            // Get results from localStorage
            const storedResults = localStorage.getItem('raceResults');
            let resultsData = storedResults ? JSON.parse(storedResults) : [];
            
            // Apply filters
            if (selectedYear !== 'all') {
                resultsData = resultsData.filter(result => 
                    result.year === parseInt(selectedYear)
                );
            }
            
            if (selectedCategory !== 'all') {
                resultsData = resultsData.filter(result => 
                    result.category === selectedCategory
                );
            }
            
            if (selectedDuration !== 'all') {
                resultsData = resultsData.filter(result => 
                    result.duration === selectedDuration
                );
            }
            
            setResults(resultsData);
        } catch (error) {
            console.error('Error fetching results:', error);
            setError('Failed to load results. Please try again later.');
        } finally {
            setIsLoading(false);
        }
    };

    const handleDeleteResult = (resultId) => {
        if (window.confirm('Are you sure you want to delete this result?')) {
            try {
                // Get current results
                const storedResults = localStorage.getItem('raceResults');
                let resultsData = storedResults ? JSON.parse(storedResults) : [];
                
                // Filter out the result to delete
                resultsData = resultsData.filter(result => result.id !== resultId);
                
                // Save back to localStorage
                localStorage.setItem('raceResults', JSON.stringify(resultsData));
                
                // Refresh results
                fetchResults();
            } catch (error) {
                console.error('Error deleting result:', error);
                setError('Failed to delete result. Please try again.');
            }
        }
    };

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const handleUploadSuccess = () => {
        fetchResults();
    };

    // Filter results by location
    const getLocationResults = (location) => {
        return results.filter(result => result.location === location);
    };

    // Group results by year, category, and duration
    const groupResults = (locationResults) => {
        const grouped = {};
        
        locationResults.forEach(result => {
            const key = `${result.year}-${result.category}-${result.duration}`;
            grouped[key] = result;
        });
        
        return grouped;
    };

    return (
        <div className="results-container">
            <div className="results-top-spacer"></div>
            
            <section className="results-header-section">
                <div className="results-header-content">
                    <h1 className="results-title">RESULTAT</h1>
                    <p className="results-description">
                        Här hittar du resultaten från våra tävlingar. Välj år, kategori och distans för att filtrera resultaten.
                    </p>
                </div>
            </section>
            
            <section className="results-filters-section">
                <div className="results-filters">
                    <select 
                        value={selectedYear} 
                        onChange={(e) => setSelectedYear(e.target.value)}
                        className="results-filter-select"
                    >
                        <option value="all">Alla År</option>
                        {years.map(year => (
                            <option key={year} value={year}>{year}</option>
                        ))}
                    </select>

                    <select 
                        value={selectedCategory} 
                        onChange={(e) => setSelectedCategory(e.target.value)}
                        className="results-filter-select"
                    >
                        <option value="all">Alla Kategorier</option>
                        {categories.map(category => (
                            <option key={category} value={category}>{category}</option>
                        ))}
                    </select>

                    <select 
                        value={selectedDuration} 
                        onChange={(e) => setSelectedDuration(e.target.value)}
                        className="results-filter-select"
                    >
                        <option value="all">Alla Distanser</option>
                        {durations.map(duration => (
                            <option key={duration} value={duration}>{duration}</option>
                        ))}
                    </select>
                </div>
                
                <div className="results-upload-section">
                    <button 
                        onClick={openModal}
                        className="results-upload-button"
                        style={{
                            padding: '10px 20px',
                            backgroundColor: 'rgb(56, 76, 135)',
                            color: 'white',
                            border: 'none',
                            borderRadius: '4px',
                            fontSize: '1rem',
                            cursor: 'pointer',
                            display: 'block',
                            margin: '0 auto'
                        }}
                    >
                        Ladda upp resultat
                    </button>
                </div>
            </section>
            
            {error && <div className="results-error">{error}</div>}
            
            {isLoading ? (
                <div className="results-loading">Laddar resultat...</div>
            ) : (
                <section className="results-content-section">
                    <div className="results-grid">
                        {locations.map(location => {
                            const locationResults = getLocationResults(location);
                            const groupedResults = groupResults(locationResults);
                            
                            return (
                                <div key={location} className="results-location-card">
                                    <h2 className="results-location-title">{location}</h2>
                                    
                                    {Object.keys(groupedResults).length > 0 ? (
                                        <div className="results-list">
                                            {Object.entries(groupedResults).map(([key, result]) => (
                                                <div key={key} className="results-item">
                                                    <a 
                                                        href={result.fileUrl} 
                                                        target="_blank" 
                                                        rel="noopener noreferrer"
                                                        className="results-link"
                                                    >
                                                        <div className="results-info">
                                                            <span className="results-year">{result.year}</span>
                                                            <span className="results-category">{result.category}</span>
                                                            <span className="results-duration">{result.duration}</span>
                                                        </div>
                                                    </a>
                                                    
                                                    {isAdmin && (
                                                        <button 
                                                            onClick={() => handleDeleteResult(result.id)}
                                                            className="results-delete-button"
                                                        >
                                                            Ta bort
                                                        </button>
                                                    )}
                                                </div>
                                            ))}
                                        </div>
                                    ) : (
                                        <div className="results-empty">
                                            Inga resultat tillgängliga för {location} med valda filter.
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </section>
            )}
            
            {isModalOpen && (
                <ResultUploadModal 
                    onClose={closeModal} 
                    onUploadSuccess={handleUploadSuccess}
                    isAdmin={isAdmin}
                    locations={locations}
                    years={years}
                    categories={categories}
                    durations={durations}
                />
            )}
        </div>
    );
};

export default Results;