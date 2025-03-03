import React, { useState, useEffect } from 'react';
import { db } from '../firebase/config';
import { collection, getDocs, doc, getDoc } from 'firebase/firestore';
import { useAuth } from '../context/AuthContext';
import ResultUploadModal from './ResultUploadModal';
import '../styles/index.css';
import '../styles/java/scripts.js';

const TrippelnResults = () => {
    const [selectedYear, setSelectedYear] = useState('2023');
    const [selectedGender, setSelectedGender] = useState('Herrar');
    const [selectedRoute, setSelectedRoute] = useState('3 timmar');
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [showUploadModal, setShowUploadModal] = useState(false);
    const { currentUser } = useAuth();
    const isAdmin = currentUser?.role === 'admin';

    // Debug logs
    console.log('Current User:', currentUser);
    console.log('Is Admin:', isAdmin);

    // Generate years array from 2010 to 2045
    const generateYearsArray = () => {
        const years = [];
        for (let year = 2010; year <= 2045; year++) {
            years.push(year.toString());
        }
        return years.sort((a, b) => b - a); // Sort in descending order
    };

    const years = generateYearsArray();

    useEffect(() => {
        const fetchResults = async () => {
            setLoading(true);
            try {
                // Get results from Firestore that match the filters
                const resultsQuery = collection(db, 'results');
                const querySnapshot = await getDocs(resultsQuery);
                
                const fetchedResults = [];
                querySnapshot.forEach((doc) => {
                    const data = doc.data();
                    // Only add results that match the current filters
                    if ((selectedYear === 'all' || data.year.toString() === selectedYear) &&
                        (selectedGender === 'all' || data.category === selectedGender) &&
                        (selectedRoute === 'all' || data.duration === selectedRoute)) {
                        fetchedResults.push(data);
                    }
                });
                
                setResults(fetchedResults);
                setError(null);
            } catch (err) {
                console.error('Error fetching results:', err);
                setError('Failed to load results. Please try again later.');
                setResults([]);
            } finally {
                setLoading(false);
            }
        };

        fetchResults();
    }, [selectedYear, selectedGender, selectedRoute]);

    const handleYearChange = (e) => {
        setSelectedYear(e.target.value);
    };

    const handleGenderChange = (e) => {
        setSelectedGender(e.target.value);
    };

    const handleRouteChange = (e) => {
        setSelectedRoute(e.target.value);
    };

    const handleUploadSuccess = () => {
        // Reload results after successful upload
        window.location.reload();
    };

    const filteredResults = results.filter(result => {
        return (
            (!selectedGender || result.category === selectedGender) &&
            (!selectedRoute || result.duration === selectedRoute)
        );
    });

    const categories = ['Herrar', 'Damer', 'Mixed'];
    const routes = ['3 timmar', '6 timmar'];
    const locations = ['Ulricehamn', 'Sälen', 'Hemsedal', 'Kolmården'];

    const filterLinks = (year, category, route) => {
        if (selectedYear !== year && year !== 'all') return false;
        if (selectedGender !== category && category !== 'all') return false;
        if (selectedRoute !== route && route !== 'all') return false;
        return true;
    };

    return (
        <div className="MaxWH location">
            <div className="set-03" style={{ height: '120px' }}></div>
            <section className="page_01 dynamic-background flex flex_col flex_j_E set-03">
                <div className="trans-background page_01box flex flex_col flex_j_SA">
                    <p className="font_blue fonts_huge">RESULTAT</p>
                </div>
            </section>

            <section className="set-03" style={{ minHeight: '130vh', padding: '2rem' }}>
                <div className="trans-background" style={{ padding: '2rem', borderRadius: '8px' }}>
                    <div style={{ marginBottom: '2rem' }} className="flex flex_j_C flex_a_C">
                        <select 
                            value={selectedYear} 
                            onChange={handleYearChange}
                            style={{ padding: '0.5rem 1rem', margin: '0 1rem', background: 'white', color: 'rgb(56, 76, 135)', border: '2px solid rgb(56, 76, 135)', borderRadius: '4px' }}
                        >
                            <option value="all">Alla År</option>
                            {years.map(year => (
                                <option style={{ background: 'white', color: 'rgb(56, 76, 135)' }} key={year} value={year}>{year}</option>
                            ))}
                        </select>

                        <select 
                            value={selectedGender} 
                            onChange={handleGenderChange}
                            style={{ padding: '0.5rem 1rem', margin: '0 1rem', background: 'white', color: 'rgb(56, 76, 135)', border: '2px solid rgb(56, 76, 135)', borderRadius: '4px' }}
                        >
                            <option style={{ background: 'white', color: 'rgb(56, 76, 135)' }} value="all">Alla Kategorier</option>
                            <option style={{ background: 'white', color: 'rgb(56, 76, 135)' }} value="Herrar">Herrar</option>
                            <option style={{ background: 'white', color: 'rgb(56, 76, 135)' }} value="Damer">Damer</option>
                            <option style={{ background: 'white', color: 'rgb(56, 76, 135)' }} value="Mixed">Mixed</option>
                        </select>

                        <select 
                            value={selectedRoute} 
                            onChange={handleRouteChange}
                            style={{ padding: '0.5rem 1rem', margin: '0 1rem', background: 'white', color: 'rgb(56, 76, 135)', border: '2px solid rgb(56, 76, 135)', borderRadius: '4px' }}
                        >
                            <option style={{ background: 'white', color: 'rgb(56, 76, 135)' }} value="all">Alla Rutter</option>
                            <option style={{ background: 'white', color: 'rgb(56, 76, 135)' }} value="3 timmar">3 timmar</option>
                            <option style={{ background: 'white', color: 'rgb(56, 76, 135)' }} value="6 timmar">6 timmar</option>
                        </select>
                        
                        {/* Upload Button - Only visible when logged in */}
                        {currentUser && (
                            <button 
                                onClick={() => setShowUploadModal(true)}
                                className="result-upload-button"
                            >
                                Ladda upp resultat
                            </button>
                        )}
                    </div>

                    <div className="race-results-container">
                        {loading ? (
                            <p>Loading results...</p>
                        ) : error ? (
                            <p className="error-message">{error}</p>
                        ) : results.length === 0 ? (
                            <p>No results found for the selected filters. Please try different filters or upload new results.</p>
                        ) : (
                            <div className="results-list">
                                {results.map((result) => (
                                    <div key={result.id} className="result-item">
                                        <div className="result-info">
                                            <h3>{result.location} - {result.year}</h3>
                                            <p>Category: {result.category}</p>
                                            <p>Duration: {result.duration}</p>
                                            <p>Uploaded: {new Date(result.uploadedAt).toLocaleDateString()}</p>
                                        </div>
                                        <div className="result-actions">
                                            <a 
                                                href={result.fileUrl} 
                                                target="_blank" 
                                                rel="noopener noreferrer"
                                                className="result-download-link"
                                            >
                                                View/Download {result.fileName}
                                            </a>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </section>
            
            {/* Upload Modal */}
            {showUploadModal && (
                <ResultUploadModal
                    isOpen={showUploadModal}
                    onClose={() => setShowUploadModal(false)}
                    onUploadSuccess={handleUploadSuccess}
                    year={selectedYear}
                />
            )}
        </div>
    );
};

export default TrippelnResults;