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

const App = () => {
    return (
        <Router>
            <div className="flex flex_col MaxWH location">
                <Navbar />
                <Routes>
                    <Route path="/" element={<Pages />} />
                    <Route path="/competitions" element={<Competitions />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
};

export default App;