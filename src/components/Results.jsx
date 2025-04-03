import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import ResultUploadModal from './ResultUploadModal';
import { getResults } from '../firebase/results';

const Results = () => {
    const { currentUser } = useAuth();
    const [selectedYear, setSelectedYear] = useState('all');
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [selectedDuration, setSelectedDuration] = useState('all');
    const [results, setResults] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [error, setError] = useState('');
    
    const isAdmin = currentUser?.role === 'admin';
    
    const years = [2025, 2024, 2023, 2022, 2021, 2020, 2019, 2018];
    const categories = ['Herrar', 'Damer', 'Mixed'];
    const durations = ['3 timmar', '6 timmar'];
    const locations = ['Ulricehamn', 'Sälen', 'Hemsedal', 'Kolmården'];

    useEffect(() => {
        fetchResults();
    }, [selectedYear, selectedCategory, selectedDuration]);

    const fetchResults = async () => {
        try {
            setIsLoading(true);
            setError('');
            
            const filters = {};
            if (selectedYear !== 'all') {
                filters.year = selectedYear;
            }
            if (selectedCategory !== 'all') {
                filters.category = selectedCategory;
            }
            if (selectedDuration !== 'all') {
                filters.duration = selectedDuration;
            }
            
            const resultsData = await getResults(filters);
            setResults(resultsData);
        } catch (err) {
            console.error('Error fetching results:', err);
            setError('Failed to load results. Please try again later.');
        } finally {
            setIsLoading(false);
        }
    };

    const handleDeleteResult = (resultId) => {
        if (window.confirm('Are you sure you want to delete this result?')) {
            try {
                const resultsData = [...results];
                const updatedResults = resultsData.filter(result => result.id !== resultId);
                setResults(updatedResults);
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

    const handleUploadSuccess = (newResult) => {
        setResults(prevResults => [newResult, ...prevResults]);
        closeModal();
    };

    const getLocationResults = (location) => {
        return results.filter(result => result.location === location);
    };

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
                    {isAdmin && (
                        <button 
                            onClick={openModal}
                            className="results-upload-button"
                        >
                            Ladda upp resultat
                        </button>
                    )}
                </div>
            </section>
            
            {error && <div className="results-error">{error}</div>}
            
            <section className="results-content-section">
                <div className="results-grid">
                    {locations.map(location => (
                        <div key={location} className="results-location-card">
                            <h2 className="results-location-title">{location}</h2>
                            <div className="results-list">
                                {isLoading ? (
                                    <div className="results-loading">Laddar...</div>
                                ) : (
                                    getLocationResults(location).map(result => (
                                        <div key={result.id} className="results-item">
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
                                    ))
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

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