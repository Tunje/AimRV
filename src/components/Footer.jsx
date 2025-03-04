import React from "react";
import { Link } from "react-router-dom";
import '../styles/index.css';
import '../styles/java/scripts.js';

const Footer = () => {
    return (
        <div className="footer-wrapper">
            {/* Footer Content */}
            <footer className="footer set-03">
                <div className="container">
                    <div className="footer-grid">
                        <div className="grid-item sponsors">
                            <h3 className="footer-heading" id="sponsors-section">Sponsors</h3>
                            <div className="grid">
                                <div><img src="/images/Artboard 1@4x.png" alt="Artboard" className="sponsor-logo" /></div>
                                <div><img src="/images/Camelbak_vit.svg" alt="Camelbak" className="sponsor-logo" /></div>
                                <div><img src="/images/Hedghog_vit.svg" alt="Hedghog" className="sponsor-logo" /></div>
                                <div><img src="/images/Kona_vit.png" alt="Kona" className="sponsor-logo" /></div>
                                <div><img src="/images/Mareld_svart.svg" alt="Mareld" className="sponsor-logo" /></div>
                                <div><img src="/images/ODD_white_RGB.png" alt="ODD" className="sponsor-logo" /></div>
                                <div><img src="/images/Oofos.png" alt="Oofos" className="sponsor-logo" /></div>
                                <div><img src="/images/Ortovox_svart.svg" alt="Ortovox" className="sponsor-logo" /></div>
                                <div><img src="/images/UD Logo.png" alt="UD" className="sponsor-logo" /></div>
                                <div><img src="/images/Upplev.png" alt="Upplev Norrköping" className="sponsor-logo" /></div>
                                <div><img src="/images/holdut_logo_sort_1.png" alt="Hold ut" className="sponsor-logo" /></div>
                                <div><img src="/images/h%C3%A4llmark logga sv_v.svg" alt="Hällmark" className="sponsor-logo" /></div>
                                <div><img src="/images/injinji_black.svg" alt="Injinji" className="sponsor-logo" /></div>
                            </div>
                        </div>
                        <div className="grid-item partners">
                            <h3 className="footer-heading">Partners</h3>
                            <div className="grid">
                                {/* Partner logos will go here */}
                            </div>
                        </div>
                    </div>

                    <div className="footer-bottom">
                        <p className="trademark">&copy; 2025 Aimchallenge</p>
                        <div className="social-icons">
                            <a href="https://www.facebook.com/aimchallenge/" className="social-icon" aria-label="Facebook">
                                <i className="fa fa-facebook"></i>
                            </a>
                            <a href="https://www.instagram.com/aimchallenge/" className="social-icon" aria-label="Instagram">
                                <i className="fa fa-instagram"></i>
                            </a>
                            <a href="https://vimeo.com/user45220061" className="social-icon" aria-label="Vimeo">
                                <i className="fa fa-vimeo"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
