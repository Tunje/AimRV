import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useText } from "../context/TextContext";
import "../styles/index.css";
import SponsorEditor from "./SponsorEditor";

const Footer = () => {
  const { isAdmin } = useText();
  const location = useLocation();
  
  // Define which pages should show sponsors
  const showSponsors = () => {
    const path = location.pathname;
    const sponsorPages = [
      '/', // Front page
      '/competitions', // Competitions page
      '/ulricehamn', // Competition pages
      '/salen',
      '/hemsedal',
      '/kolmarden',
      '/trippeln' // Trippeln page
    ];
    
    return sponsorPages.includes(path);
  };

  return (
    <>
      {/* Sponsors Section - Only shown on specific pages */}
      {showSponsors() && (
        <div className="footer-wrapper">
          <div className="container">
            <div className="footer-grid">
              <div className="grid-item sponsors">
                <h1 className="footer-heading" id="sponsors-section">
                  Sponsorer & Partners
                </h1>
                {/* SponsorEditor will render sponsors inside this container */}
                <SponsorEditor targetId="sponsors-section" />
              </div>
            </div>
          </div>
        </div>
      )}

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
