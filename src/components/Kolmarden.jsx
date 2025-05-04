import React from "react";
import { Link } from "react-router-dom";
import EditableText from "./EditableText";
import ImageModal from "./ImageModal";
import "../styles/index.css";

const Kolmarden = () => {
  return (
    <div className="kolmarden-container">
      <ImageModal />
      {/* Hero Section with Image */}
      <section className="kolmarden-hero-section">
        <div className="hero-content">
          <div className="hero-image-container">
            <img
              id="kolmarden-hero-image"
              src="/images/AIM_lindvallen_2024_AnkiGrothe_highres_125.jpg"
              alt="Kolmården Event"
              className="image-editable"
            />
          </div>
        </div>
      </section>

      {/* Title Section */}
      <section className="kolmarden-title-section">
        <div className="title-container">
          <EditableText
            textKey="kolmarden-title-with-date"
            defaultText="KOLMÅRDEN - 13 SEPTEMBER 2025"
            tag="h1"
            className="title"
          />
        </div>
      </section>

      {/* Registration Button */}
      <section id="kolmarden-button-section" className="registration-button-section image-editable">
        <a
          href="https://raceid.com/sv/races/13014/about"
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
                id="kolmarden-program-image"
                src="/images/AIM_lindvallen_2024_AnkiGrothe_highres_125.jpg"
                alt="Kolmården Event"
                className="image-editable"
              />
            </div>

            {/* Program Info Card */}
            <div className="program-card info-card">
              <EditableText
                textKey="kolmarden-program-title"
                defaultText="PROGRAM"
                tag="h2"
                className="program-title"
              />

              <div className="program-schedule">
                <div className="program-day">
                  <EditableText
                    textKey="kolmarden-friday-title"
                    defaultText="Fredag 12/9"
                    tag="h3"
                    className="day-title"
                  />
                  <EditableText
                    textKey="kolmarden-friday-schedule"
                    defaultText="17:00 - 19:00 Nummerlappsutdelning"
                    tag="p"
                    className="schedule-item"
                  />
                </div>

                <div className="program-day">
                  <EditableText
                    textKey="kolmarden-saturday-title"
                    defaultText="Lördag 13/9"
                    tag="h3"
                    className="day-title"
                  />
                  <EditableText
                    textKey="kolmarden-saturday-schedule1"
                    defaultText="08:30 - 09:30 Nummerlappsutdelning"
                    tag="p"
                    className="schedule-item"
                  />
                  <EditableText
                    textKey="kolmarden-saturday-schedule2"
                    defaultText="10:00 Start AIM Challenge"
                    tag="p"
                    className="schedule-item"
                  />
                  <EditableText
                    textKey="kolmarden-saturday-schedule3"
                    defaultText="12:00 Första målgång förväntas"
                    tag="p"
                    className="schedule-item"
                  />
                  <EditableText
                    textKey="kolmarden-saturday-schedule4"
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
                textKey="kolmarden-price-title"
                defaultText="PRIS"
                tag="h2"
                className="price-title"
              />
            </div>

            <div className="price-cards">
              <div className="price-card">
                <EditableText
                  textKey="kolmarden-price-card1-title"
                  defaultText="ANMÄLNINGSAVGIFT"
                  tag="h3"
                  className="price-card-title"
                />
                <EditableText
                  textKey="kolmarden-price-card1-price"
                  defaultText="995 SEK"
                  tag="p"
                  className="price-card-price"
                />
                <EditableText
                  textKey="kolmarden-price-card1-description"
                  defaultText="Anmälan stänger 10 september"
                  tag="p"
                  className="price-card-description"
                />
              </div>

              <div className="price-card">
                <EditableText
                  textKey="kolmarden-price-card2-title"
                  defaultText="EFTERANMÄLAN"
                  tag="h3"
                  className="price-card-title"
                />
                <EditableText
                  textKey="kolmarden-price-card2-price"
                  defaultText="1195 SEK"
                  tag="p"
                  className="price-card-price"
                />
                <EditableText
                  textKey="kolmarden-price-card2-description"
                  defaultText="I mån av plats fram till 12 september"
                  tag="p"
                  className="price-card-description"
                />
              </div>
            </div>
          </div>

          <div id="kolmarden-price-image" className="price-background-image image-editable"></div>
        </div>
      </section>

      {/* Course Section */}
      <section className="course-section">
        <div className="course-container">
          <div className="course-content">
            <EditableText
              textKey="kolmarden-course-title"
              defaultText="BANAN"
              tag="h2"
              className="course-title"
            />
            <EditableText
              textKey="kolmarden-course-description"
              defaultText="AIM Challenge Kolmården är en ca 30 km lång mountainbike-tävling med ca 700 höjdmeter. Banan går på stigar och grusvägar i Kolmårdens vackra natur."
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
                    textKey="kolmarden-course-distance"
                    defaultText="30 km"
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
                    textKey="kolmarden-course-elevation"
                    defaultText="700 m"
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
              src="/images/kolmarden-map.jpg"
              alt="Kolmården Course Map"
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
                src="/images/AIM_lindvallen_2024_AnkiGrothe_highres_125.jpg"
                alt="News"
              />
            </div>
            <div className="news-content">
              <h3 className="news-location">NYHETSARTIKEL 1</h3>
              <p className="news-description">
                Brödtext om tävlingen, 2 korta meningar
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
                src="/images/AIM_lindvallen_2024_AnkiGrothe_highres_125.jpg"
                alt="News"
              />
            </div>
            <div className="news-content">
              <h3 className="news-location">NYHETSARTIKEL 2</h3>
              <p className="news-description">
                Brödtext om tävlingen, 2 korta meningar
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
                src="/images/AIM_lindvallen_2024_AnkiGrothe_highres_125.jpg"
                alt="News"
              />
            </div>
            <div className="news-content">
              <h3 className="news-location">NYHETSARTIKEL 3</h3>
              <p className="news-description">
                Brödtext om tävlingen, 2 korta meningar
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
              Cykeluthyrning med in- och utlämning på plats.{" "}
              <a href="#" className="links-link">
                Läs mer och boka här.
              </a>
            </p>
          </div>

          <div className="links-category">
            <h3 className="links-category-title">Boende</h3>
            <p className="links-text">
              Önskar du att bo nära start och mål så kan vi varmt rekommendera
              Hotell Vildmarken som erbjuder ett modernt boende ett stenkast
              ifrån starten.
            </p>
            <a
              href="https://www.kolmarden.com"
              className="links-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://www.kolmarden.com
            </a>
          </div>

          <div className="links-category">
            <h3 className="links-category-title">Mat</h3>
            <p className="links-text">
              Det finns flera restauranger i närheten av tävlingsområdet.
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

export default Kolmarden;
