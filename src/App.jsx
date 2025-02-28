import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/index.js';
import './styles/java/scripts.js';
import './styles/index.css';
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
import Gallery from './components/Gallery';
import VideoCarousel from './components/VideoCarousel';
import OmOss from './components/OmOss';
import Regler from './components/Regler';

const App = () => {
    return (
        <Router>
            <div className="flex flex_col MaxWH location">
                <Navbar />
                <Routes>
                    <Route path="/" element={<Pages />} />
                    <Route path="/competitions" element={<Competitions />} />
                    <Route path="/ulricehamn" element={<Ulricehamn />} />
                    <Route path="/salen" element={<Salen />} />
                    <Route path="/hemsedal" element={<Hemsedal />} />
                    <Route path="/kolmarden" element={<Kolmarden />} />
                    <Route path="/trippeln" element={<Trippeln />} />
                    <Route path="/trippeln-results" element={<TrippelnResults />} />
                    <Route path="/gallery" element={
                        <>
                            <Gallery />
                            <VideoCarousel />
                        </>
                    } />
                    <Route path="/om-oss" element={<OmOss />} />
                    <Route path="/page2" element={<Regler />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
};

export default App;