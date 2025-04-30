import React from "react";
import { Link } from "react-router-dom";
import EditableText from "./EditableText";
import "../styles/index.css";

const Salen = () => {
  return (
    <div className="salen-container">
      {/* Hero Section */}
      <section className="salen-hero-section">
        <div className="hero-content">
          <div className="hero-image-container">
            <img 
              id="salen-hero-image"
              src="/images/salen-hero.jpg" 
              alt="Sälen Event" 
              className="image-editable"
            />
          </div>
        </div>
      </section>

      {/* Title Section */}
      <section className="salen-title-section">
        <div className="title-container">
          <EditableText
            textKey="salen-title-with-date"
            defaultText="SÄLEN - 1 AUGUSTI 2025"
            tag="h1"
            className="salen-title"
          />
        </div>
      </section>

      {/* Program Section with Wavy Background */}
      <section className="salen-program-section">
        <div className="program-container">
          <div className="program-cards">
            {/* Image Card */}
            <div className="program-card image-card">
              <img
                src="/images/EE-AIMChallenge24-Uhamn-0171-high.jpg"
                alt="Sälen Event"
              />
            </div>

            {/* Program Info Card */}
            <div className="program-card info-card">
              <EditableText
                textKey="salen-program-title"
                defaultText="PROGRAM"
                tag="h2"
                className="program-title"
              />

              <div className="program-schedule">
                <div className="program-day">
                  <EditableText
                    textKey="salen-friday-title"
                    defaultText="Fredag 9/5"
                    tag="h3"
                    className="day-title"
                  />
                  <EditableText
                    textKey="salen-friday-schedule"
                    defaultText="17:00 - 19:00 Nummerlappsutdelning på XCC"
                    tag="p"
                    className="schedule-item"
                  />
                </div>

                <div className="program-day">
                  <EditableText
                    textKey="salen-saturday-title"
                    defaultText="Lördag 10/5"
                    tag="h3"
                    className="day-title"
                  />
                  <EditableText
                    textKey="salen-saturday-schedule1"
                    defaultText="08:30 - 10:15 Registrering för alla tävlande som ej registrerat sig under fredagen på 157 XCC, på Lassalyckan."
                    tag="p"
                    className="schedule-item"
                  />
                  <EditableText
                    textKey="salen-saturday-schedule2"
                    defaultText="10:30 Obligatoriskt informationsmöte vid starten på Lassalyckan stadion."
                    tag="p"
                    className="schedule-item"
                  />
                  <EditableText
                    textKey="salen-saturday-schedule3"
                    defaultText="11:00 Start AIM Challenge, på Lassalyckan stadion. Gemensam start för 3 & 6-timmars tävlingen."
                    tag="p"
                    className="schedule-item"
                  />
                  <EditableText
                    textKey="salen-saturday-schedule4"
                    defaultText="14:00 Målgång för 3-timmars tävlingen."
                    tag="p"
                    className="schedule-item"
                  />
                  <EditableText
                    textKey="salen-saturday-schedule5"
                    defaultText="ca 15:30 Prisutdelning 3-timmars tävlingen"
                    tag="p"
                    className="schedule-item"
                  />
                  <EditableText
                    textKey="salen-saturday-schedule6"
                    defaultText="16:30 - 20:00 After AIM med mat och dryck på Hotell Lassalyckan."
                    tag="p"
                    className="schedule-item"
                  />
                  <EditableText
                    textKey="salen-saturday-schedule7"
                    defaultText="17:00 Målgång för 6-timmars tävlingen."
                    tag="p"
                    className="schedule-item"
                  />
                  <EditableText
                    textKey="salen-saturday-schedule8"
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
      <section className="salen-price-section">
        <div className="price-container">
          <div className="price-image-container">
            <img
              src="/images/AIM_lindvallen_2024_AnkiGrothe_highres_34.jpg"
              alt="Climbing in Lindvallen"
              className="price-background-image"
            />
            <div className="price-overlay">
              <div className="price-content">
                <EditableText
                  textKey="salen-price-title"
                  defaultText="PRIS"
                  tag="h2"
                  className="section-title"
                />
                <EditableText
                  textKey="salen-price-subtitle"
                  defaultText="ULRICEHAMN 10/5-2025"
                  tag="h3"
                  className="price-subtitle"
                />

                <div className="price-categories">
                  <div className="price-category">
                    <EditableText
                      textKey="salen-price-3h-title"
                      defaultText="3-TIMMARS"
                      tag="h4"
                      className="category-title"
                    />
                    <EditableText
                      textKey="salen-price-3h-1"
                      defaultText="1500 SEK / lag för Early Bird-anmälan innan 1 november."
                      tag="p"
                      className="price-item"
                    />
                    <EditableText
                      textKey="salen-price-3h-2"
                      defaultText="1700 SEK / lag för anmälan mellan 1 november och 1 februari."
                      tag="p"
                      className="price-item"
                    />
                    <EditableText
                      textKey="salen-price-3h-3"
                      defaultText="1900 SEK / lag för anmälan mellan 2 februari och 24 april."
                      tag="p"
                      className="price-item"
                    />
                    <EditableText
                      textKey="salen-price-3h-4"
                      defaultText="2100 SEK / lag för anmälan från 25 april och fram till start."
                      tag="p"
                      className="price-item"
                    />
                  </div>

                  <div className="price-category">
                    <EditableText
                      textKey="salen-price-6h-title"
                      defaultText="6-TIMMARS"
                      tag="h4"
                      className="category-title"
                    />
                    <EditableText
                      textKey="salen-price-6h-1"
                      defaultText="1900 SEK / lag för Early Bird-anmälan innan 1 november."
                      tag="p"
                      className="price-item"
                    />
                    <EditableText
                      textKey="salen-price-6h-2"
                      defaultText="2100 SEK / lag för anmälan mellan 1 november och 1 februari."
                      tag="p"
                      className="price-item"
                    />
                    <EditableText
                      textKey="salen-price-6h-3"
                      defaultText="2300 SEK / lag för anmälan mellan 2 februari och 24 april."
                      tag="p"
                      className="price-item"
                    />
                    <EditableText
                      textKey="salen-price-6h-4"
                      defaultText="2500 SEK / lag för anmälan från 25 april och fram till start."
                      tag="p"
                      className="price-item"
                    />
                  </div>
                </div>

                <div className="price-category trippeln-category">
                  <EditableText
                    textKey="salen-price-trippeln-title"
                    defaultText="AIM CHALLENGE TRIPPELN 2025"
                    tag="h4"
                    className="category-title"
                  />
                  <EditableText
                    textKey="salen-price-trippeln-1"
                    defaultText="4750 SEK / lag för Early Bird-anmälan innan 1 januari."
                    tag="p"
                    className="price-item"
                  />
                  <EditableText
                    textKey="salen-price-trippeln-2"
                    defaultText="5250 SEK / lag för anmälan mellan 1 januari och 1 februari."
                    tag="p"
                    className="price-item"
                  />
                  <EditableText
                    textKey="salen-price-trippeln-3"
                    defaultText="5750 SEK / lag för anmälan mellan 2 februari och 24 april."
                    tag="p"
                    className="price-item"
                  />
                  <EditableText
                    textKey="salen-price-trippeln-4"
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
        <h2 className="latest-news-title">SENASTE NYTT SÄLEN</h2>
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

      {/* Program Section */}
      {/* <section className="salen-program-section">
                <div className="program-container">
                    <EditableText 
                        textKey="salen-program-title" 
                        defaultText="PROGRAM" 
                        tag="p" 
                        className="font_blue fonts_large" 
                    />
                    <EditableText 
                        textKey="salen-program-subtitle" 
                        defaultText="PRELIMINÄRT PROGRAM:" 
                        tag="p" 
                        className="font_blue fonts_medium" 
                    />
                    
                    <div className="font_blue">
                        <EditableText 
                            textKey="salen-friday-title" 
                            defaultText="FREDAG 1 AUGUSTI" 
                            tag="p" 
                            className="fonts_medium" 
                        />
                        <EditableText 
                            textKey="salen-friday-schedule" 
                            defaultText="17:00 - 20:00 Nummerlappsutdelning för alla tävlande på SkiStarshop Concept Store på Handelsområdet Lindvallen." 
                            tag="p" 
                            className="fonts_xsmall salen-time-entry" 
                        />
                    </div>

                    <div className="font_blue">
                        <EditableText 
                            textKey="salen-saturday-title" 
                            defaultText="LÖRDAG 2 AUGUSTI" 
                            tag="p" 
                            className="fonts_medium" 
                        />
                        <EditableText 
                            textKey="salen-saturday-schedule1" 
                            defaultText="08:30-09:00 Nummerlappsutdelning i konferenslokal ovanför Stadium" 
                            tag="p" 
                            className="fonts_xsmall salen-time-entry" 
                        />
                        <EditableText 
                            textKey="salen-saturday-schedule2" 
                            defaultText="09:30 Obligatoriskt infomöte vid starten" 
                            tag="p" 
                            className="fonts_xsmall salen-time-entry" 
                        />
                        <EditableText 
                            textKey="salen-saturday-schedule3" 
                            defaultText="10:00 START! Start/målområde vid Experiumtorget." 
                            tag="p" 
                            className="fonts_xsmall salen-time-entry" 
                        />
                        <EditableText 
                            textKey="salen-saturday-schedule4" 
                            defaultText="15:30 After AIM på Lodgebaren på SkiStar Lodge Lindvallen" 
                            tag="p" 
                            className="fonts_xsmall salen-time-entry" 
                        />
                        <EditableText 
                            textKey="salen-saturday-schedule5" 
                            defaultText="16:00 Målgång AIM Challenge." 
                            tag="p" 
                            className="fonts_xsmall salen-time-entry" 
                        />
                        <EditableText 
                            textKey="salen-saturday-schedule6" 
                            defaultText="xx:00 Prisutdelning i Lodgebaren" 
                            tag="p" 
                            className="fonts_xsmall salen-time-entry" 
                        />
                    </div>
                </div>
                <div className="salen-spacer MaxWH"></div>
            </section>
 */}
      {/* Pris Section */}
      {/* <section className="salen-section salen-bg-2 flex flex_j_C flex_a_C">
        <div className="salen-spacer MaxWH"></div>
        <div className="salen-content trans-background MaxWH flex flex_col flex_j_C">
          <EditableText
            textKey="salen-pris-title"
            defaultText="PRIS"
            tag="p"
            className="font_blue fonts_large"
          />

          <div className="font_blue">
            <EditableText
              textKey="salen-pris-salen-title"
              defaultText="SÄLEN"
              tag="p"
              className="fonts_medium"
            />
            <a
              href="https://raceid.com/sv/races/13016/about"
              target="_blank"
              rel="noopener noreferrer"
            >
              <EditableText
                textKey="salen-date"
                defaultText="datum insert"
                tag="p"
                className="font_blue fonts_medium competitions-date text-center"
              />
            </a>
            <EditableText
              textKey="salen-pris-salen-price1"
              defaultText="1900 SEK / lag för Early Bird-anmälan innan 1 januari."
              tag="p"
              className="fonts_xsmall salen-time-entry"
            />
            <EditableText
              textKey="salen-pris-salen-price2"
              defaultText="2100 SEK / lag för anmälan mellan 1 januari och 1 april."
              tag="p"
              className="fonts_xsmall salen-time-entry"
            />
            <EditableText
              textKey="salen-pris-salen-price3"
              defaultText="2300 SEK / lag för anmälan mellan 2 april och 18 juli"
              tag="p"
              className="fonts_xsmall salen-time-entry"
            />
            <EditableText
              textKey="salen-pris-salen-price4"
              defaultText="2500 SEK / lag för anmälan från 19 juli och fram till start."
              tag="p"
              className="fonts_xsmall salen-time-entry"
            />
          </div>

          <div className="font_blue">
            <EditableText
              textKey="salen-pris-trippeln-title"
              defaultText="AIM CHALLENGE TRIPPELN 2025"
              tag="p"
              className="fonts_medium"
            />
            <EditableText
              textKey="salen-pris-trippeln-price1"
              defaultText="4750 SEK / lag för Early Bird-anmälan innan 1 januari."
              tag="p"
              className="fonts_xsmall salen-time-entry"
            />
            <EditableText
              textKey="salen-pris-trippeln-price2"
              defaultText="5250 SEK / lag för anmälan mellan 1 januari och 1 februari."
              tag="p"
              className="fonts_xsmall salen-time-entry"
            />
            <EditableText
              textKey="salen-pris-trippeln-price3"
              defaultText="5750 SEK / lag för anmälan mellan 2 februari och 25 april."
              tag="p"
              className="fonts_xsmall salen-time-entry"
            />
            <EditableText
              textKey="salen-pris-trippeln-price4"
              defaultText="6250 SEK / lag för anmälan efter den 26 april."
              tag="p"
              className="fonts_xsmall salen-time-entry"
            />
          </div>

          <div className="font_blue">
            <EditableText
              textKey="salen-pris-landskampen-title"
              defaultText="LANDSKAMPEN = LINDVALLEN OCH HEMSEDAL"
              tag="p"
              className="fonts_medium"
            />
            <EditableText
              textKey="salen-pris-landskampen-price1"
              defaultText="3400 SEK/ lag för anmälan innan 1 maj."
              tag="p"
              className="fonts_xsmall salen-time-entry"
            />
            <EditableText
              textKey="salen-pris-landskampen-price2"
              defaultText="3800 SEK/ lag för anmälan mellan 1 maj och 1 juli."
              tag="p"
              className="fonts_xsmall salen-time-entry"
            />
            <EditableText
              textKey="salen-pris-landskampen-price3"
              defaultText="4200 SEK/ lag för anmälan från 1 juli och framåt."
              tag="p"
              className="fonts_xsmall salen-time-entry"
            />
          </div>
          <a
            href="https://raceid.com/sv/races/13014/about"
            target="_blank"
            rel="noopener noreferrer"
            className="button-2 salen-button-align flex flex_s"
          >
            <p className="font_white fonts_medium">ANMÄLAN</p>
          </a>
        </div>
      </section> */}

      {/* Övernattning och Mat Section */}
      {/*  <section className="salen-section salen-bg-3 flex flex_j_C flex_a_C">
        <div className="salen-content trans-background MaxWH flex flex_col flex_j_C">
          <EditableText
            textKey="salen-overnattning-title"
            defaultText="ÖVERNATTNING OCH MAT"
            tag="p"
            className="font_blue fonts_large"
          />

          <div className="font_blue salen-text-block">
            <EditableText
              textKey="salen-overnattning-overnattning-title"
              defaultText="ÖVERNATTNING"
              tag="p"
              className="fonts_medium"
            />
            <EditableText
              textKey="salen-overnattning-overnattning-text"
              defaultText="Boende bokas enklast genom Skistar. För att komma direkt till bokningssida."
              tag="p"
              className="fonts_xsmall salen-time-entry"
            />
          </div>

          <div className="font_blue salen-text-block">
            <EditableText
              textKey="salen-overnattning-mat-title"
              defaultText="MAT"
              tag="p"
              className="fonts_medium"
            />
            <EditableText
              textKey="salen-overnattning-mat-text1"
              defaultText="Avslutningsmiddag på Lodgebaren."
              tag="p"
              className="fonts_xsmall salen-time-entry"
            />
            <EditableText
              textKey="salen-overnattning-mat-text2"
              defaultText="Möjlighet för frukost på Lodgebaren."
              tag="p"
              className="fonts_xsmall salen-time-entry"
            />
            <EditableText
              textKey="salen-overnattning-mat-text3"
              defaultText="Lodgebaren - Läs mer och boka bord"
              tag="p"
              className="fonts_xsmall salen-time-entry"
            />
          </div>

          <div className="font_blue salen-text-block">
            <EditableText
              textKey="salen-overnattning-upplevelser-title"
              defaultText="UPPLEVELSER & AKTIVITETER"
              tag="p"
              className="fonts_medium"
            />
            <EditableText
              textKey="salen-overnattning-upplevelser-text1"
              defaultText="Bad & Spa"
              tag="p"
              className="fonts_xsmall salen-time-entry"
            />
            <EditableText
              textKey="salen-overnattning-upplevelser-text2"
              defaultText="Bowling"
              tag="p"
              className="fonts_xsmall salen-time-entry"
            />
            <EditableText
              textKey="salen-overnattning-upplevelser-text3"
              defaultText="Höghöjdsbana"
              tag="p"
              className="fonts_xsmall salen-time-entry"
            />
            <EditableText
              textKey="salen-overnattning-upplevelser-text4"
              defaultText="SkiStar Sports & Adventures"
              tag="p"
              className="fonts_xsmall salen-time-entry"
            />
          </div>
        </div>
        <div className="salen-spacer MaxWH"></div>
      </section> */}

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
          <div className="s-sponsor-logo side-logo">
            <img src="images/UD Logo.png" alt="UD Logo" />
          </div>
          <div className="s-sponsor-logo main-logo">
            <img
              src="images/Aim_Challenge_logo_white.svg"
              alt="AIM Challenge"
            />
          </div>
          <div className="s-sponsor-logo side-logo">
            <img src="images/holdut_logo_sort_1.png" alt="Holdut Logo" />
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
            <p> 2023 Copyright AIM Challenge.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Salen;
