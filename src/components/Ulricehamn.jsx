import React from "react";
import { Link } from "react-router-dom";
import EditableText from "./EditableText";
import "../styles/_ulricehamn.scss";

const Ulricehamn = () => {
  return (
    <div className="ulricehamn-container">
      {/* Hero Section with Image */}
      <section className="ulricehamn-hero-section">
        <div className="hero-content">
          <div className="hero-image-container">
            <img
              src="/images/EE-AIMChallenge24-Uhamn-0171-high.jpg"
              alt="Ulricehamn Event"
            />
          </div>
        </div>
      </section>

      {/* Title Section */}
      <section className="ulricehamn-title-section">
        <div className="title-container">
          <EditableText
            textKey="ulricehamn-title-with-date"
            defaultText="ULRICEHAMN - 10 MAJ 2025"
            tag="h1"
            className="ulricehamn-title"
          />
        </div>
      </section>

      {/* Button Section */}
      <section className="ulricehamn-button-section">
        <div className="button-container">
          <a
            href="https://raceid.com/sv/races/12846/about"
            target="_blank"
            rel="noopener noreferrer"
            className="anmalan-button"
          >
            <p>TA MIG TILL ANMÄLAN</p>
          </a>
        </div>
      </section>

      {/* Program Section with Wavy Background */}
      <section className="ulricehamn-program-section">
        <div className="program-container">
          <div className="program-cards">
            {/* Image Card */}
            <div className="program-card image-card">
              <img
                src="/images/EE-AIMChallenge24-Uhamn-0171-high.jpg"
                alt="Ulricehamn Event"
              />
            </div>

            {/* Program Info Card */}
            <div className="program-card info-card">
              <EditableText
                textKey="ulricehamn-program-title"
                defaultText="PROGRAM"
                tag="h2"
                className="program-title"
              />

              <div className="program-schedule">
                <div className="program-day">
                  <EditableText
                    textKey="ulricehamn-friday-title"
                    defaultText="Fredag 9/5"
                    tag="h3"
                    className="day-title"
                  />
                  <EditableText
                    textKey="ulricehamn-friday-schedule"
                    defaultText="17:00 - 19:00 Nummerlappsutdelning på XCC"
                    tag="p"
                    className="schedule-item"
                  />
                </div>

                <div className="program-day">
                  <EditableText
                    textKey="ulricehamn-saturday-title"
                    defaultText="Lördag 10/5"
                    tag="h3"
                    className="day-title"
                  />
                  <EditableText
                    textKey="ulricehamn-saturday-schedule1"
                    defaultText="08:30 - 10:15 Registrering för alla tävlande som ej registrerat sig under fredagen på 157 XCC, på Lassalyckan."
                    tag="p"
                    className="schedule-item"
                  />
                  <EditableText
                    textKey="ulricehamn-saturday-schedule2"
                    defaultText="10:30 Obligatoriskt informationsmöte vid starten på Lassalyckan stadion."
                    tag="p"
                    className="schedule-item"
                  />
                  <EditableText
                    textKey="ulricehamn-saturday-schedule3"
                    defaultText="11:00 Start AIM Challenge, på Lassalyckan stadion. Gemensam start för 3 & 6-timmars tävlingen."
                    tag="p"
                    className="schedule-item"
                  />
                  <EditableText
                    textKey="ulricehamn-saturday-schedule4"
                    defaultText="14:00 Målgång för 3-timmars tävlingen."
                    tag="p"
                    className="schedule-item"
                  />
                  <EditableText
                    textKey="ulricehamn-saturday-schedule5"
                    defaultText="ca 15:30 Prisutdelning 3-timmars tävlingen"
                    tag="p"
                    className="schedule-item"
                  />
                  <EditableText
                    textKey="ulricehamn-saturday-schedule6"
                    defaultText="16:30 - 20:00 After AIM med mat och dryck på Hotell Lassalyckan."
                    tag="p"
                    className="schedule-item"
                  />
                  <EditableText
                    textKey="ulricehamn-saturday-schedule7"
                    defaultText="17:00 Målgång för 6-timmars tävlingen."
                    tag="p"
                    className="schedule-item"
                  />
                  <EditableText
                    textKey="ulricehamn-saturday-schedule8"
                    defaultText="19:00 Prisutdelning utanför Hotell Lassalyckan."
                    tag="p"
                    className="schedule-item"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Price Section */}
      <section className="ulricehamn-price-section">
        <div className="price-container">
          <div className="price-image-container">
            <img
              src="/images/EE-AIMChallenge24-Uhamn-0171-high.jpg"
              alt="Climbing in Ulricehamn"
              className="price-background-image"
            />
            <div className="price-overlay">
              <div className="price-content">
                <EditableText
                  textKey="ulricehamn-price-title"
                  defaultText="PRIS"
                  tag="h2"
                  className="section-title"
                />
                <EditableText
                  textKey="ulricehamn-price-subtitle"
                  defaultText="ULRICEHAMN 10/5-2025"
                  tag="h3"
                  className="price-subtitle"
                />

                <div className="price-categories">
                  <div className="price-category">
                    <EditableText
                      textKey="ulricehamn-price-3h-title"
                      defaultText="3-TIMMARS"
                      tag="h4"
                      className="category-title"
                    />
                    <EditableText
                      textKey="ulricehamn-price-3h-1"
                      defaultText="1500 SEK / lag för Early Bird-anmälan innan 1 november."
                      tag="p"
                      className="price-item"
                    />
                    <EditableText
                      textKey="ulricehamn-price-3h-2"
                      defaultText="1700 SEK / lag för anmälan mellan 1 november och 1 februari."
                      tag="p"
                      className="price-item"
                    />
                    <EditableText
                      textKey="ulricehamn-price-3h-3"
                      defaultText="1900 SEK / lag för anmälan mellan 2 februari och 24 april."
                      tag="p"
                      className="price-item"
                    />
                    <EditableText
                      textKey="ulricehamn-price-3h-4"
                      defaultText="2100 SEK / lag för anmälan från 25 april och fram till start."
                      tag="p"
                      className="price-item"
                    />
                  </div>

                  <div className="price-category">
                    <EditableText
                      textKey="ulricehamn-price-6h-title"
                      defaultText="6-TIMMARS"
                      tag="h4"
                      className="category-title"
                    />
                    <EditableText
                      textKey="ulricehamn-price-6h-1"
                      defaultText="1900 SEK / lag för Early Bird-anmälan innan 1 november."
                      tag="p"
                      className="price-item"
                    />
                    <EditableText
                      textKey="ulricehamn-price-6h-2"
                      defaultText="2100 SEK / lag för anmälan mellan 1 november och 1 februari."
                      tag="p"
                      className="price-item"
                    />
                    <EditableText
                      textKey="ulricehamn-price-6h-3"
                      defaultText="2300 SEK / lag för anmälan mellan 2 februari och 24 april."
                      tag="p"
                      className="price-item"
                    />
                    <EditableText
                      textKey="ulricehamn-price-6h-4"
                      defaultText="2500 SEK / lag för anmälan från 25 april och fram till start."
                      tag="p"
                      className="price-item"
                    />
                  </div>
                </div>

                <div className="price-category trippeln-category">
                  <EditableText
                    textKey="ulricehamn-price-trippeln-title"
                    defaultText="AIM CHALLENGE TRIPPELN 2025"
                    tag="h4"
                    className="category-title"
                  />
                  <EditableText
                    textKey="ulricehamn-price-trippeln-1"
                    defaultText="4750 SEK / lag för Early Bird-anmälan innan 1 januari."
                    tag="p"
                    className="price-item"
                  />
                  <EditableText
                    textKey="ulricehamn-price-trippeln-2"
                    defaultText="5250 SEK / lag för anmälan mellan 1 januari och 1 februari."
                    tag="p"
                    className="price-item"
                  />
                  <EditableText
                    textKey="ulricehamn-price-trippeln-3"
                    defaultText="5750 SEK / lag för anmälan mellan 2 februari och 24 april."
                    tag="p"
                    className="price-item"
                  />
                  <EditableText
                    textKey="ulricehamn-price-trippeln-4"
                    defaultText="6250 SEK / lag för anmälan efter den 25 april."
                    tag="p"
                    className="price-item"
                  />
                </div>

                <div className="price-button-container">
                  <a
                    href="https://raceid.com/sv/races/12846/about"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="anmalan-button"
                  >
                    <p>TA MIG TILL ANMÄLAN</p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest News section */}
      <section id="latest-news" className="latest-news-section">
        <h2 className="latest-news-title">SENASTE NYTT ULRICEHAMN</h2>
        <div className="latest-news-container">
          <div className="news-card">
            <div className="news-image">
              <img
                src="/images/AIM_Hemsedal_2024_AnkiGrothe_45cm_300dpi_049.jpg"
                alt="News"
              />
            </div>
            <div className="news-content">
              <h3 className="news-location">NYHETSARTIKEL 1</h3>
              <p className="news-description">
                Brödtext om tävlingen, 2 korta em-ningar
              </p>
              <div className="news-button">
                <Link to="/news/1" className="button-2">
                  <span>LÄS MER</span>
                </Link>
              </div>
            </div>
          </div>

          <div className="news-card">
            <div className="news-image">
              <img
                src="/images/AIM_Hemsedal_2024_AnkiGrothe_45cm_300dpi_049.jpg"
                alt="News"
              />
            </div>
            <div className="news-content">
              <h3 className="news-location">NYHETSARTIKEL 2</h3>
              <p className="news-description">
                Brödtext om tävlingen, 2 korta em-ningar
              </p>
              <div className="news-button">
                <Link to="/news/2" className="button-2">
                  <span>LÄS MER</span>
                </Link>
              </div>
            </div>
          </div>

          <div className="news-card">
            <div className="news-image">
              <img
                src="/images/AIM_Hemsedal_2024_AnkiGrothe_45cm_300dpi_049.jpg"
                alt="News"
              />
            </div>
            <div className="news-content">
              <h3 className="news-location">NYHETSARTIKEL 3</h3>
              <p className="news-description">
                Brödtext om tävlingen, 2 korta em-ningar
              </p>
              <div className="news-button">
                <Link to="/news/3" className="button-2">
                  <span>LÄS MER</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Useful Links Section */}
      <section className="useful-links-section">
        <div className="useful-links-container">
          <h2 className="useful-links-title">NYTTIGA LÄNKAR</h2>

          <div className="links-category">
            <h3 className="links-category-title">Cykeluthyrning</h3>
            <p className="links-text">
              Cykeluthyrning med in- och utlämning på Lassalyckan Stadion.{" "}
              <a href="#" className="links-link">
                Läs mer och boka här.
              </a>
            </p>
          </div>

          <div className="links-category">
            <h3 className="links-category-title">Boende</h3>
            <p className="links-text">
              Önskar du att bo nära start och mål så kan vi varmt rekommendera
              Hotell Lassalyckan som erbjuder ett modernt boende ett stenkast
              ifrån starten.
            </p>
            <a
              href="https://www.hotell-lassalyckan.se"
              className="links-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://www.hotell-lassalyckan.se
            </a>
          </div>

          <div className="links-category">
            <h3 className="links-category-title">Mat</h3>
            <p className="links-text">
              Önskar du att bo nära start och mål så kan vi varmt rekommendera
              Hotell Lassalyckan som erbjuder ett modernt boende ett stenkast
              ifrån starten.
            </p>
          </div>
        </div>
      </section>

      {/* Sponsors Section */}
      <section className="sponsors-section">
        <h2 className="sponsors-title">LOKALA SPONSORER</h2>
        <div className="sponsors-container">
          <div className="sponsor-logo side-logo">
            <img src="/images/UD Logo.png" alt="UD Logo" />
          </div>
          <div className="sponsor-logo main-logo">
            <img
              src="/images/Aim_Challenge_logo_white.svg"
              alt="AIM Challenge"
            />
          </div>
          <div className="sponsor-logo side-logo">
            <img src="/images/holdut_logo_sort_1.png" alt="Holdut Logo" />
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <section className="footer-section">
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
                  Åtext om nyhetsbrev, samt en optin ruta för att fylla i sin
                  epostadress. Integration mot mailchimp.
                </p>
              </div>
            </div>
          </div>

          <div className="footer-copyright">
            <p>© Copyright AIM Challenge.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Ulricehamn;
