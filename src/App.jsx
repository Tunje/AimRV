import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import './styles/index.js';
import './styles/java/scripts.js';

const App = () => {
  return (
    <Router>
      <div className="flex flex_col MaxWH location">
        {/* Navbar */}
        <div className="navbar set-03 flex flex_j_SA MaxWH location">
          <div className="navim MaxWH location"></div>
          <div className="navbside MaxWH location flex flex_j_SA">
            <div className="navbbutton flex flex_j_SA MaxWH location">
              <Link to="#">Tävlingar</Link>
            </div>
            <div className="navbbutton flex flex_j_SA MaxWH location">
              <a href="https://raceid.com/sv/campaigns/bcfa3952-92c0-11ef-a892-06546bc3018f">Anmälan</a>
            </div>
            <div className="navbbutton flex flex_j_SA MaxWH location">
              <Link to="#">Om oss</Link>
            </div>
            <div className="navbbutton flex flex_j_SA MaxWH location">
              <Link to="#">Sponsorer</Link>
            </div>
            <div className="navbbutton flex flex_j_SA MaxWH location">
              <Link to="#">Senaste nytt</Link>
            </div>
            <div className="navbbutton flex flex_j_SA MaxWH location">
              <Link to="#">Kontakta oss</Link>
            </div>
            <div className="navbbutton flex flex_j_SA MaxWH location">
              <a href="#">SV|NO|EN</a>
            </div>
          </div>
        </div>

        {/* Page Content */}
        <section id="page_01" className="page_01 dynamic-background flex flex_col flex_j_E MaxWH location">
          <div className="trans-background page_01box flex flex_col flex_j_SA MaxWH">
            <p>Multisport för alla</p>
            <p>Multisport sedan 2004</p>
          </div>
        </section>
        
        <section id="page_02" className="page_02 flex flex_j_E MaxWH location">
          <div className="page_02box set-01 flex flex_col flex_j_SB MaxWH location">
            <div className="trans-background page_02top flex flex_col flex_j_SA MaxWH">
              <p>ULRICEHAMN</p>
              <p>datum insert</p>
            </div>
            <div className="page_02top flex flex_col flex_j_SA MaxWH">
              <p>Läs mer</p>
            </div>
          </div>
          <div className="page_02box set-02 flex flex_col flex_j_SB MaxWH location">
            <div className="trans-background page_02top flex flex_col flex_j_SA MaxWH">
              <p>SÄLEN</p>
              <p>datum insert</p>
            </div>
            <div className="page_02top flex flex_col flex_j_SA MaxWH">
              <p>Läs mer</p>
            </div>
          </div>
          <div className="page_02box set-01 flex flex_col flex_j_SB MaxWH location">
            <div className="trans-background page_02top flex flex_col flex_j_SA MaxWH">
              <p>HEMSEDAL</p>
              <p>datum insert</p>
            </div>
            <div className="page_02top flex flex_col flex_j_SA MaxWH">
              <p>Läs mer</p>
            </div>
          </div>
          <div className="page_02box set-02 flex flex_col flex_j_SB MaxWH location">
            <div className="trans-background page_02top flex flex_col flex_j_SA MaxWH">
              <p>KOLMÅRDEN</p>
              <p>datum insert</p>
            </div>
            <div className="page_02top flex flex_col flex_j_SA MaxWH">
              <p>Läs mer</p>
            </div>
          </div>
        </section>

        <section id="page_03" className="page_02 dynamic-background flex flex_col flex_j_SA MaxWH location">
          <div className="page_01box flex flex_col flex_j_SA MaxWH">
            <p>Skistarshop.com*</p>
            <p>OFFICIELL AIM CHALLENGE BUTIK</p>
          </div>
        </section>

        <section id="page_04" className="page_02 set-01 dynamic-background flex flex_j_SA MaxWH location">
          <div className="page_03box flex flex_col trans-background pad flex_j_SA MaxWH">
            <p>VAD ÄR AIM CHALLENGE?</p>
            <p>AIM Challenge är en multisport tävling som passar för alla. Lag på två personer ska under 6 timmar ta så många kontroller som möjligt utav 60 utplacerade.</p>
            <p>Läs mer</p>
          </div>
          <div className="page_03box flex flex_col pad flex_j_SA MaxWH">
            <div></div>
          </div>
        </section>

        {/* Footer */}
        <footer className="footer">
          <div className="container">
            <div className="footer-grid">
              <div className="grid-item sponsors">
                <h3 className="footer-heading">Sponsors</h3>
                <div className="grid">
                  {Array.from({ length: 20 }, (_, i) => (
                    <div key={i} className="logo-box sponsor-box">
                      Sponsor {i + 1}
                    </div>
                  ))}
                </div>
              </div>
              <div className="grid-item partners">
                <h3 className="footer-heading">Partners</h3>
                <div className="grid">
                  {Array.from({ length: 10 }, (_, i) => (
                    <div key={i} className="logo-box partner-box">
                      Partner {i + 1}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="footer-bottom">
              <p className="trademark">&copy; 2025 Aimchallenge™</p>
              <div className="social-icons">
                <span className="icon">Facebook</span>
                <span className="icon">Instagram</span>
                <span className="icon">Vinmo</span>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
};

export default App;
