import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useText } from "../context/TextContext";
import "../styles/index.css";
import SponsorEditor from "./SponsorEditor";

const Footer = () => {
  const { isAdmin } = useText();
  const location = useLocation();

  return (
    <>
      {/* Include SponsorEditor component */}
      <SponsorEditor />
      
      {/* Sponsors Section */}
      <div className="footer-wrapper">
        <div className="container">
          <div className="footer-grid">
            <div className="grid-item sponsors">
              <h1 className="footer-heading" id="sponsors-section">
                Sponsorer & Partners
              </h1>
              <div className="sponsors-grid">
                <div className="sponsor-item">
                  <img
                    src="/images/Artboard 1@4x.png"
                    alt="Artboard"
                    className="sponsor-logo"
                  />
                </div>
                <div className="sponsor-item">
                  <img
                    src="/images/Camelbak_vit.svg"
                    alt="Camelbak"
                    className="sponsor-logo"
                  />
                </div>
                <div className="sponsor-item">
                  <img
                    src="/images/Hedghog_vit.svg"
                    alt="Hedghog"
                    className="sponsor-logo"
                  />
                </div>
                <div className="sponsor-item">
                  <img
                    src="/images/Kona_vit.png"
                    alt="Kona"
                    className="sponsor-logo"
                  />
                </div>
                <div className="sponsor-item">
                  <img
                    src="/images/Mareld_svart.svg"
                    alt="Mareld"
                    className="sponsor-logo"
                  />
                </div>
                <div className="sponsor-item">
                  <img
                    src="/images/ODD_white_RGB.png"
                    alt="ODD"
                    className="sponsor-logo"
                  />
                </div>
                <div className="sponsor-item">
                  <img
                    src="/images/Oofos.png"
                    alt="Oofos"
                    className="sponsor-logo"
                  />
                </div>
                <div className="sponsor-item">
                  <img
                    src="/images/Ortovox_svart.svg"
                    alt="Ortovox"
                    className="sponsor-logo"
                  />
                </div>
                <div className="sponsor-item">
                  <img
                    src="/images/UD Logo.png"
                    alt="UD"
                    className="sponsor-logo"
                  />
                </div>
                <div className="sponsor-item">
                  <img
                    src="/images/Upplev.png"
                    alt="Upplev Norrköping"
                    className="sponsor-logo"
                  />
                </div>
                <div className="sponsor-item">
                  <img
                    src="/images/holdut_logo_sort_1.png"
                    alt="Hold ut"
                    className="sponsor-logo"
                  />
                </div>
                <div className="sponsor-item">
                  <img
                    src="/images/h%C3%A4llmark logga sv_v.svg"
                    alt="Hällmark"
                    className="sponsor-logo"
                  />
                </div>
                <div className="sponsor-item">
                  <img
                    src="/images/injinji_black.svg"
                    alt="Injinji"
                    className="sponsor-logo"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Section - Main Content */}
      <footer className="footer-section">
        <div className="footer-container">
          <div className="footer-top">
            <div className="footer-left">
              <div className="footer-logo">
                <img
                  src="/images/Aim_Challenge_logo_white.svg"
                  alt="AIM Challenge"
                />
              </div>

              <div className="footer-info">
                <p>Loftsdalian 108, 30129 Halmstad</p>
                <p>
                  <a href="mailto:info@aimchallenge.com">
                    info@aimchallenge.com
                  </a>
                </p>
                <p>+46 (0) 73-81 87 54</p>
              </div>

              <div className="footer-social">
                <a href="#" className="social-icon">
                  <i className="fa fa-instagram"></i>
                </a>
                <a href="#" className="social-icon">
                  <i className="fa fa-facebook"></i>
                </a>
                <a href="#" className="social-icon">
                  <i className="fa fa-twitter"></i>
                </a>
              </div>
            </div>

            <div className="footer-columns">
              <div className="footer-column footer-column-center">
                <h3 className="footer-title">INFORMATION</h3>
                <ul className="footer-links">
                  <li>
                    <a href="#">Anmälningsvillkor</a>
                  </li>
                  <li>
                    <a href="#">Integritetspolicy</a>
                  </li>
                  <li>
                    <a href="#">FAQ</a>
                  </li>
                </ul>
              </div>

              <div className="footer-column footer-column-right">
                <h3 className="footer-title">NYHETSBREV</h3>
                <p className="footer-newsletter-text">
                  Åtext om nyhetsbrev, samt en optin ruta för att fylla i
                  sin epostadress. Integration mot mailchimp.
                </p>
              </div>
            </div>
          </div>
          
          {/* Footer Copyright - Full Width */}
          <div className="footer-copyright-wrapper">
            <div className="footer-copyright">
              <p>© 2023 Copyright AIM Challenge.</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
