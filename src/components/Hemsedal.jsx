import React from "react";
import { Link } from "react-router-dom";
import EditableText from "./EditableText";
import ImageModal from "./ImageModal";
import "../styles/index.css";

const Hemsedal = () => {
  return (
    <div className="hemsedal-container">
      <ImageModal />
      {/* Hero Section with Image */}
      <section className="hemsedal-hero-section image-editable" id="hemsedal-hero-image">
        <div className="hero-content">
          <div className="hero-image-container">
            <img
              src="/images/AIM_Hemsedal_2024_AnkiGrothe_45cm_300dpi_049.jpg"
              alt="Hemsedal Event"
            />
          </div>
        </div>
      </section>

      {/* Title Section */}
      <section className="hemsedal-title-section">
        <div className="title-container">
          <EditableText
            textKey="hemsedal-title-with-date"
            defaultText="HEMSEDAL - 24 AUGUSTI 2025"
            tag="h1"
            className="title"
          />
        </div>
      </section>

      {/* Registration Button */}
      <section id="hemsedal-button-section" className="registration-button-section image-editable">
        <a
          href="https://raceid.com/sv/races/13015/about"
          target="_blank"
          rel="noopener noreferrer"
          className="registration-button"
        >
          <span>TA MIG TILL ANMÄLAN</span>
        </a>
      </section>

      {/* Program Section */}
      <section className="program-section">
        <div className="program-container">
          <div className="program-cards">
            {/* Image Card */}
            <div className="program-card image-card">
              <img
                id="hemsedal-program-image"
                src="/images/AIM_Hemsedal_2024_AnkiGrothe_45cm_300dpi_049.jpg"
                alt="Hemsedal Event"
                className="image-editable"
              />
            </div>

            {/* Program Info Card */}
            <div className="program-card info-card">
              <EditableText
                textKey="hemsedal-program-title"
                defaultText="PROGRAM"
                tag="h2"
                className="program-title"
              />

              <div className="program-schedule">
                <div className="program-day">
                  <EditableText
                    textKey="hemsedal-friday-title"
                    defaultText="Fredag 23/8"
                    tag="h3"
                    className="day-title"
                  />
                  <EditableText
                    textKey="hemsedal-friday-schedule"
                    defaultText="17:00 - 20:00 Nummerlappsutdelning för alla tävlande på SkiStarshop Hemsedal"
                    tag="p"
                    className="schedule-item"
                  />
                </div>

                <div className="program-day">
                  <EditableText
                    textKey="hemsedal-saturday-title"
                    defaultText="Lördag 24/8"
                    tag="h3"
                    className="day-title"
                  />
                  <EditableText
                    textKey="hemsedal-saturday-schedule1"
                    defaultText="08:30-09:00 Nummerlappsutdelning vid starten"
                    tag="p"
                    className="schedule-item"
                  />
                  <EditableText
                    textKey="hemsedal-saturday-schedule2"
                    defaultText="09:30 Start AIM Challenge"
                    tag="p"
                    className="schedule-item"
                  />
                  <EditableText
                    textKey="hemsedal-saturday-schedule3"
                    defaultText="11:00 Första målgång förväntas"
                    tag="p"
                    className="schedule-item"
                  />
                  <EditableText
                    textKey="hemsedal-saturday-schedule4"
                    defaultText="15:00 Prisutdelning"
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
      <section className="price-section">
        <div className="price-container">
          <div className="price-content">
            <div className="price-header">
              <EditableText
                textKey="hemsedal-price-title"
                defaultText="PRIS"
                tag="h2"
                className="price-title"
              />
            </div>

            <div className="price-cards">
              <div className="price-card">
                <EditableText
                  textKey="hemsedal-price-card1-title"
                  defaultText="ANMÄLNINGSAVGIFT"
                  tag="h3"
                  className="price-card-title"
                />
                <EditableText
                  textKey="hemsedal-price-card1-price"
                  defaultText="995 SEK"
                  tag="p"
                  className="price-card-price"
                />
                <EditableText
                  textKey="hemsedal-price-card1-description"
                  defaultText="Anmälan stänger 21 augusti"
                  tag="p"
                  className="price-card-description"
                />
              </div>

              <div className="price-card">
                <EditableText
                  textKey="hemsedal-price-card2-title"
                  defaultText="EFTERANMÄLAN"
                  tag="h3"
                  className="price-card-title"
                />
                <EditableText
                  textKey="hemsedal-price-card2-price"
                  defaultText="1195 SEK"
                  tag="p"
                  className="price-card-price"
                />
                <EditableText
                  textKey="hemsedal-price-card2-description"
                  defaultText="I mån av plats fram till 23 augusti"
                  tag="p"
                  className="price-card-description"
                />
              </div>
            </div>
          </div>

          <div id="hemsedal-price-image" className="price-background-image image-editable"></div>
        </div>
      </section>

      {/* Course Section */}
      <section className="course-section">
        <div className="course-container">
          <div className="course-content">
            <EditableText
              textKey="hemsedal-course-title"
              defaultText="BANAN"
              tag="h2"
              className="course-title"
            />
            <EditableText
              textKey="hemsedal-course-description"
              defaultText="AIM Challenge Hemsedal är en ca 25 km lång mountainbike-tävling med ca 800 höjdmeter. Banan går på stigar, grusvägar och i skidbackar i Hemsedal."
              tag="p"
              className="course-description"
            />
            <div className="course-details">
              <div className="course-detail">
                <div className="detail-icon">
                  <img src="/images/icons/distance.svg" alt="Distance" />
                </div>
                <div className="detail-text">
                  <EditableText
                    textKey="hemsedal-course-distance"
                    defaultText="25 km"
                    tag="p"
                    className="detail-value"
                  />
                  <p className="detail-label">Distans</p>
                </div>
              </div>
              <div className="course-detail">
                <div className="detail-icon">
                  <img src="/images/icons/elevation.svg" alt="Elevation" />
                </div>
                <div className="detail-text">
                  <EditableText
                    textKey="hemsedal-course-elevation"
                    defaultText="800 m"
                    tag="p"
                    className="detail-value"
                  />
                  <p className="detail-label">Höjdmeter</p>
                </div>
              </div>
            </div>
          </div>
          <div className="course-map">
            <img
              src="/images/hemsedal-map.jpg"
              alt="Hemsedal Course Map"
              className="map-image"
            />
          </div>
        </div>
      </section>

      {/* Latest News Section */}
      <section className="latest-news-section">
        <h2 className="news-section-title">SENASTE NYTT</h2>
        <div className="news-cards">
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
    </div>
  );
};

export default Hemsedal;
