import React from "react";
import { Link } from "react-router-dom";
import EditableText from "./EditableText";
import BackgroundEditor from "./BackgroundEditor";
import NewsCarousel from "./NewsCarousel";
import SponsorEditor from "./SponsorEditor";
import "../styles/index.css";

const Kolmarden = () => {
  return (
    <>
      <BackgroundEditor key="kolmarden-background-editor" />
    <div className="kolmarden-container">
      {/* Hero Section with Image */}
      <section className="kolmarden-hero-section">
        <div className="hero-content">
          <div className="hero-image-container background-editable" id="kolmarden-hero-image">
            <img src="/images/Kolmarden_1.jpg" alt="Kolmarden Event" />
          </div>
        </div>
      </section>

      {/* Title Section */}
      <section className="kolmarden-title-section">
        <div className="title-container">
          <EditableText
            textKey="kolmarden-title"
            defaultText="KOLMÅRDEN"
            tag="h1"
            className="location-title"
          />
          <EditableText
            textKey="kolmarden-date"
            defaultText="10 MAJ 2025"
            tag="h2"
            className="location-date"
          />
        </div>
      </section>

      {/* Button Section */}
      <section className="kolmarden-button-section">
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
      <section className="kolmarden-program-section">
        <div className="program-container">
          <div className="program-cards">
            {/* Image Card */}
            <div className="program-card image-card background-editable" id="kolmarden-program-image">
              <img src="/images/Kolmarden_2.jpg" alt="Kolmarden Event" />
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
                    defaultText="Fredag 9/5"
                    tag="h3"
                    className="day-title"
                  />
                  <EditableText
                    textKey="kolmarden-friday-schedule"
                    defaultText="17:00 - 19:00 Nummerlappsutdelning på XCC"
                    tag="p"
                    className="schedule-item"
                  />
                </div>

                <div className="program-day">
                  <EditableText
                    textKey="kolmarden-saturday-title"
                    defaultText="Lördag 10/5"
                    tag="h3"
                    className="day-title"
                  />
                  <EditableText
                    textKey="kolmarden-saturday-schedule1"
                    defaultText="08:30 - 10:15 Registrering för alla tävlande som ej registrerat sig under fredagen på 157 XCC, på Lassalyckan."
                    tag="p"
                    className="schedule-item"
                  />
                  <EditableText
                    textKey="kolmarden-saturday-schedule2"
                    defaultText="10:30 Obligatoriskt informationsmöte vid starten på Lassalyckan stadion."
                    tag="p"
                    className="schedule-item"
                  />
                  <EditableText
                    textKey="kolmarden-saturday-schedule3"
                    defaultText="11:00 Start AIM Challenge, på Lassalyckan stadion. Gemensam start för 3 & 6-timmars tävlingen."
                    tag="p"
                    className="schedule-item"
                  />
                  <EditableText
                    textKey="kolmarden-saturday-schedule4"
                    defaultText="14:00 Målgång för 3-timmars tävlingen."
                    tag="p"
                    className="schedule-item"
                  />
                  <EditableText
                    textKey="kolmarden-saturday-schedule5"
                    defaultText="ca 15:30 Prisutdelning 3-timmars tävlingen"
                    tag="p"
                    className="schedule-item"
                  />
                  <EditableText
                    textKey="kolmarden-saturday-schedule6"
                    defaultText="16:30 - 20:00 After AIM med mat och dryck på Hotell Lassalyckan."
                    tag="p"
                    className="schedule-item"
                  />
                  <EditableText
                    textKey="kolmarden-saturday-schedule7"
                    defaultText="17:00 Målgång för 6-timmars tävlingen."
                    tag="p"
                    className="schedule-item"
                  />
                  <EditableText
                    textKey="kolmarden-saturday-schedule8"
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
      <section className="kolmarden-price-section">
        <div className="price-container">
          <div className="price-image-container background-editable" id="kolmarden-price-image">
            <img
              src="/images/Kolmarden_1.jpg"
              alt="Climbing in Kolmarden"
              className="price-background-image"
            />
            <div className="price-overlay">
              <div className="price-content">
                <EditableText
                  textKey="kolmarden-price-title"
                  defaultText="PRIS"
                  tag="h2"
                  className="section-title"
                />
                <EditableText
                  textKey="kolmarden-price-subtitle"
                  defaultText="KOLMADERN 10/5-2025"
                  tag="h3"
                  className="price-subtitle"
                />

                <div className="price-categories">
                  <div className="price-category">
                    <EditableText
                      textKey="kolmarden-price-3h-title"
                      defaultText="3-TIMMARS"
                      tag="h4"
                      className="category-title"
                    />
                    <EditableText
                      textKey="kolmarden-price-3h-1"
                      defaultText="1500 SEK / lag för Early Bird-anmälan innan 1 november."
                      tag="p"
                      className="price-item"
                    />
                    <EditableText
                      textKey="kolmarden-price-3h-2"
                      defaultText="1700 SEK / lag för anmälan mellan 1 november och 1 februari."
                      tag="p"
                      className="price-item"
                    />
                    <EditableText
                      textKey="kolmarden-price-3h-3"
                      defaultText="1900 SEK / lag för anmälan mellan 2 februari och 24 april."
                      tag="p"
                      className="price-item"
                    />
                    <EditableText
                      textKey="kolmarden-price-3h-4"
                      defaultText="2100 SEK / lag för anmälan från 25 april och fram till start."
                      tag="p"
                      className="price-item"
                    />
                  </div>

                  <div className="price-category">
                    <EditableText
                      textKey="kolmarden-price-6h-title"
                      defaultText="6-TIMMARS"
                      tag="h4"
                      className="category-title"
                    />
                    <EditableText
                      textKey="kolmarden-price-6h-1"
                      defaultText="1900 SEK / lag för Early Bird-anmälan innan 1 november."
                      tag="p"
                      className="price-item"
                    />
                    <EditableText
                      textKey="kolmarden-price-6h-2"
                      defaultText="2100 SEK / lag för anmälan mellan 1 november och 1 februari."
                      tag="p"
                      className="price-item"
                    />
                    <EditableText
                      textKey="kolmarden-price-6h-3"
                      defaultText="2300 SEK / lag för anmälan mellan 2 februari och 24 april."
                      tag="p"
                      className="price-item"
                    />
                    <EditableText
                      textKey="kolmarden-price-6h-4"
                      defaultText="2500 SEK / lag för anmälan från 25 april och fram till start."
                      tag="p"
                      className="price-item"
                    />
                  </div>
                </div>

                <div className="price-category trippeln-category">
                  <EditableText
                    textKey="kolmarden-price-trippeln-title"
                    defaultText="AIM CHALLENGE TRIPPELN 2025"
                    tag="h4"
                    className="category-title"
                  />
                  <EditableText
                    textKey="kolmarden-price-trippeln-1"
                    defaultText="4750 SEK / lag för Early Bird-anmälan innan 1 januari."
                    tag="p"
                    className="price-item"
                  />
                  <EditableText
                    textKey="kolmarden-price-trippeln-2"
                    defaultText="5250 SEK / lag för anmälan mellan 1 januari och 1 februari."
                    tag="p"
                    className="price-item"
                  />
                  <EditableText
                    textKey="kolmarden-price-trippeln-3"
                    defaultText="5750 SEK / lag för anmälan mellan 2 februari och 24 april."
                    tag="p"
                    className="price-item"
                  />
                  <EditableText
                    textKey="kolmarden-price-trippeln-4"
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
                    className="price-anmalan-button"
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
        <h2 className="latest-news-title">SENASTE NYTT KOLMÅRDEN</h2>
        <div style={{ width: '1200px', margin: '0 auto', padding: '0 20px', boxSizing: 'border-box' }}>
          <NewsCarousel instanceId="kolmarden-news" defaultCategory="Kolmården" />
        </div>
      </section>

      {/* Useful Links Section */}
      <section className="useful-links-section">
        <div className="useful-links-container">
          <EditableText
            textKey="kolmarden-useful-links-title"
            defaultText="NYTTIGA LÄNKAR"
            tag="h2"
            className="useful-links-title"
          />

          <div className="links-category">
            <EditableText
              textKey="kolmarden-links-category1-title"
              defaultText="Cykeluthyrning"
              tag="h3"
              className="links-category-title"
            />
            <EditableText
              textKey="kolmarden-links-category1-text"
              defaultText="Cykeluthyrning med in- och utlämning på Lassalyckan Stadion. Läs mer och boka här."
              tag="p"
              className="links-text"
            />
          </div>

          <div className="links-category">
            <EditableText
              textKey="kolmarden-links-category2-title"
              defaultText="Boende"
              tag="h3"
              className="links-category-title"
            />
            <EditableText
              textKey="kolmarden-links-category2-text"
              defaultText="Önskar du att bo nära start och mål så kan vi varmt rekommendera Hotell Lassalyckan som erbjuder ett modernt boende ett stenkast ifrån starten. https://www.hotell-lassalyckan.se"
              tag="p"
              className="links-text"
            />
          </div>

          <div className="links-category">
            <EditableText
              textKey="kolmarden-links-category3-title"
              defaultText="Mat"
              tag="h3"
              className="links-category-title"
            />
            <EditableText
              textKey="kolmarden-links-category3-text"
              defaultText="Önskar du att bo nära start och mål så kan vi varmt rekommendera Hotell Lassalyckan som erbjuder ett modernt boende ett stenkast ifrån starten."
              tag="p"
              className="links-text"
            />
          </div>
        </div>
      </section>

      {/* Sponsors Section */}
      <section className="sponsors-section">
        <EditableText
          textKey="kolmarden-sponsors-title"
          defaultText="LOKALA SPONSORER"
          tag="h2"
          className="sponsors-title"
        />
        <div id="kolmarden-sponsors" className="sponsors-container">
          {/* SponsorEditor will load sponsors from Firebase */}
        </div>
        {/* Add SponsorEditor component with location prop */}
        <SponsorEditor location="kolmarden" targetId="kolmarden-sponsors" />
      </section>

      {/* No footer needed here - it's already included in App.jsx */}
    </div>
    </>
  );
};

export default Kolmarden;
