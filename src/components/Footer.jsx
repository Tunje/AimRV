import React from "react";
import { Link } from "react-router-dom";
import '../styles/index.css';
import '../styles/java/scripts.js';

const Footer = () => {
    return (
        <div className="flex flex_col MaxWH location">
            {/* Import Navbar to be displayed at the top of Footer */}
            {/* <Navbar /> */}

            {/* Footer Content */}
            <footer className="footer set-03">
                <div className="container">
                    <div className="footer-grid">
                        <div className="grid-item sponsors">
                            <h3 className="footer-heading" id="sponsors-section">Sponsors</h3>
                            <div className="grid">
                                <img src="../images/Artboard 1@4x.png" alt="Artboard" className="sponsor-logo" />
                                <img src="../images/Camelbak_vit.svg" alt="Camelbak" className="sponsor-logo" />
                                <img src="../images/Hedghog_vit.svg" alt="Hedghog" className="sponsor-logo" />
                                <img src="../images/Kona_vit.png" alt="Kona" className="sponsor-logo" />
                                <img src="../images/Mareld_svart.svg" alt="Mareld" className="sponsor-logo" />
                                <img src="../images/ODD_white_RGB.png" alt="ODD" className="sponsor-logo" />
                                <img src="../images/Oofos.png" alt="Oofos" className="sponsor-logo" />
                                <img src="../images/Ortovox_svart.svg" alt="Ortovox" className="sponsor-logo" />
                                <img src="../images/UD Logo.png" alt="UD" className="sponsor-logo" />
                                <img src="../images/Upplev.png" alt="Upplev Norrköping" className="sponsor-logo" />
                                <img src="../images/holdut_logo_sort_1.png" alt="Hold ut" className="sponsor-logo" />
                                <img src="../images/h%C3%A4llmark logga sv_v.svg" alt="Hällmark" className="sponsor-logo" />
                                <img src="../images/injinji_black.svg" alt="Injinji" className="sponsor-logo" />
                            </div>
                        </div>
                        <div className="grid-item partners">
                            <h3 className="footer-heading">Partners</h3>
                            <div className="grid">
                            </div>
                        </div>
                    </div>

                    <div className="footer-bottom">
                        <p className="trademark">&copy; 2025 Aimchallenge</p>
                        <div className="social-icons flex flex_j_SA location font_white">
                            <a href="https://www.facebook.com/aimchallenge/" className="fa fa-facebook font_white"></a>
                            <a href="https://www.instagram.com/aimchallenge/" className="fa fa-instagram font_white"></a>
                            <a href="https://vimeo.com/user45220061" className="fa fa-credit-card font_white"></a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
