import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './styles/java/scripts.js';
import 'font-awesome/css/font-awesome.min.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Pages from './components/Pages';
import Competitions from './components/Competitions';
import Ulricehamn from './components/Ulricehamn';
import Salen from './components/Salen';
import Hemsedal from './components/Hemsedal';
import Kolmarden from './components/Kolmarden';
import Trippeln from './components/Trippeln';
import TrippelnResults from './components/TrippelnResults';
import Results from './components/Results';
import ResultsTest from './components/ResultsTest';
import Gallery from './components/Gallery';
import VideoCarousel from './components/VideoCarousel';
import OmOss from './components/OmOss';
import Regler from './components/Regler';
import FAQ from './components/FAQ';
import HistorienOmAim from './components/HistorienOmAim';
import SenasteNytt from './components/SenasteNytt';
import NewsDetail from './components/NewsDetail';
import Login from './components/Login';
import ContentManager from './components/ContentManager';
import ProtectedRoute from './components/ProtectedRoute';
import { AuthProvider } from './context/AuthContext';
import { TextProvider } from './context/TextContext';
import BackgroundFrames from './components/BackgroundFrames';
import BackgroundSettings from './components/BackgroundSettings';
import { initializeAdminUser } from './firebase/auth';

const App = () => {
    useEffect(() => {
        // Initialize admin user when the app loads
        initializeAdminUser()
            .then(() => console.log('Admin user initialized'))
            .catch(error => console.error('Error initializing admin user:', error));
    }, []);

    return (
        <AuthProvider>
            <TextProvider>
                <Router>
                    <div className="flex flex_col MaxWH location" style={{ 
                        width: '100%', 
                        maxWidth: '100%', 
                        overflow: 'hidden', 
                        margin: 0, 
                        padding: 0,
                        display: 'flex',
                        flexDirection: 'column',
                        position: 'relative'
                    }}>
                        <Navbar />
                        <BackgroundFrames />
                        <BackgroundSettings />
                        <div style={{ 
                            margin: 0, 
                            padding: 0, 
                            width: '100%',
                            position: 'relative',
                            top: 0
                        }}>
                            <Routes>
                                <Route path="/" element={<Pages />} />
                                <Route path="/competitions" element={<Competitions />} />
                                <Route path="/ulricehamn" element={<Ulricehamn />} />
                                <Route path="/salen" element={<Salen />} />
                                <Route path="/hemsedal" element={<Hemsedal />} />
                                <Route path="/kolmarden" element={<Kolmarden />} />
                                <Route path="/trippeln" element={<Trippeln />} />
                                <Route path="/trippeln-results" element={<TrippelnResults />} />
                                <Route path="/results" element={<Results />} />
                                <Route path="/gallery" element={
                                    <>
                                        <Gallery />
                                        <VideoCarousel />
                                    </>
                                } />
                                <Route path="/om-oss" element={<OmOss />} />
                                <Route path="/regler" element={<Regler />} />
                                <Route path="/faq" element={<FAQ />} />
                                <Route path="/historien-om-aim" element={<HistorienOmAim />} />
                                <Route path="/senaste-nytt" element={<SenasteNytt />} />
                                <Route path="/news/:id" element={<NewsDetail />} />
                                <Route path="/login" element={<Login />} />
                                <Route path="login" element={<Login />} />
                                <Route path="/content-manager" element={
                                    <ProtectedRoute requireAdmin={true}>
                                        <ContentManager />
                                    </ProtectedRoute>
                                } />
                            </Routes>
                        </div>
                        <Footer />
                    </div>
                </Router>
            </TextProvider>
        </AuthProvider>
    );
};

export default App;