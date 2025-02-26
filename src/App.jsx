import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './styles/index.js';
import './styles/java/scripts.js';
import './styles/index.css';
import 'font-awesome/css/font-awesome.min.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Pages from './components/Pages';

const App = () => {
    return (
        <Router>
            <div className="flex flex_col MaxWH location">
                <Navbar />
                <Pages />
                <Footer />
            </div>
        </Router>
    );
};

export default App;