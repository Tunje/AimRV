import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import EditableText from "./EditableText";
import BackgroundEditor from "./BackgroundEditor";
import NewsCarousel from "./NewsCarousel";
import "../styles/index.css";
import { useText } from "../context/TextContext";

const Hemsedal = () => {
  const { currentLanguage } = useText();
  
  // State for button text
  const [readMoreText, setReadMoreText] = useState('');
  
  // Update button text when language changes
  useEffect(() => {
    // For English
    if (currentLanguage === 'en') {
      setReadMoreText('Read more');
    }
    // For Norwegian
    else if (currentLanguage === 'no') {
      setReadMoreText('Les mer');
    }
    // Default to Swedish
    else {
      setReadMoreText('Läs mer');
    }
  }, [currentLanguage]);
  
  return (
    <>
      <BackgroundEditor key="hemsedal-background-editor" />
    <div className="hemsedal-container">
      {/* Hero Section with Image */}
      <section className="hemsedal-hero-section">
        <div className="hero-content">
          <div className="hero-image-container background-editable" id="hemsedal-hero-image">
            <img
              src="/images/AIM_Hemsedal_2024_AnkiGrothe_45cm_300dpi_025.jpg"
              alt="Hemsedal Event"
            />
          </div>
        </div>
      </section>

      {/* Title Section */}
      <section className="hemsedal-title-section">
        <div className="title-container">
          <EditableText
            textKey="hemsedal-title"
            defaultText="HEMSEDAL"
            tag="h1"
            className="location-title"
          />
          <EditableText
            textKey="hemsedal-date"
            defaultText="10 MAJ 2025"
            tag="h2"
            className="location-date"
          />
        </div>
      </section>

      {/* Button Section */}
      <section className="hemsedal-button-section">
        <div className="button-container">
          <a
            href="https://raceid.com/sv/races/13015/about"
            target="_blank"
            rel="noopener noreferrer"
            className="anmalan-button"
          >
            <p>TA MIG TILL ANMÄLAN</p>
          </a>
        </div>
      </section>

      {/* Program Section with Wavy Background */}
      <section className="hemsedal-program-section">
        <div className="program-container">
          <div className="program-cards">
            {/* Image Card */}
            <div className="program-card image-card background-editable" id="hemsedal-program-image">
              <img
                src="/images/AIM_Hemsedal_2024_AnkiGrothe_45cm_300dpi_025.jpg"
                alt="Hemsedal Event"
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
                    defaultText="Fredag 9/5"
                    tag="h3"
                    className="day-title"
                  />
                  <EditableText
                    textKey="hemsedal-friday-schedule"
                    defaultText="17:00 - 19:00 Nummerlappsutdelning på XCC"
                    tag="p"
                    className="schedule-item"
                  />
                </div>

                <div className="program-day">
                  <EditableText
                    textKey="hemsedal-saturday-title"
                    defaultText="Lördag 10/5"
                    tag="h3"
                    className="day-title"
                  />
                  <EditableText
                    textKey="hemsedal-saturday-schedule1"
                    defaultText="08:30 - 10:15 Registrering för alla tävlande som ej registrerat sig under fredagen på 157 XCC, på Lassalyckan."
                    tag="p"
                    className="schedule-item"
                  />
                  <EditableText
                    textKey="hemsedal-saturday-schedule2"
                    defaultText="10:30 Obligatoriskt informationsmöte vid starten på Lassalyckan stadion."
                    tag="p"
                    className="schedule-item"
                  />
                  <EditableText
                    textKey="hemsedal-saturday-schedule3"
                    defaultText="11:00 Start AIM Challenge, på Lassalyckan stadion. Gemensam start för 3 & 6-timmars tävlingen."
                    tag="p"
                    className="schedule-item"
                  />
                  <EditableText
                    textKey="hemsedal-saturday-schedule4"
                    defaultText="14:00 Målgång för 3-timmars tävlingen."
                    tag="p"
                    className="schedule-item"
                  />
                  <EditableText
                    textKey="hemsedal-saturday-schedule5"
                    defaultText="ca 15:30 Prisutdelning 3-timmars tävlingen"
                    tag="p"
                    className="schedule-item"
                  />
                  <EditableText
                    textKey="hemsedal-saturday-schedule6"
                    defaultText="16:30 - 20:00 After AIM med mat och dryck på Hotell Lassalyckan."
                    tag="p"
                    className="schedule-item"
                  />
                  <EditableText
                    textKey="hemsedal-saturday-schedule7"
                    defaultText="17:00 Målgång för 6-timmars tävlingen."
                    tag="p"
                    className="schedule-item"
                  />
                  <EditableText
                    textKey="hemsedal-saturday-schedule8"
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
      <section className="hemsedal-price-section">
        <div className="price-container">
          <div className="price-image-container background-editable" id="hemsedal-price-image">
            <img
              src="/images/AIM_Hemsedal_2024_AnkiGrothe_45cm_300dpi_094.jpg"
              alt="Climbing in Hemsedal"
              className="price-background-image"
            />
            <div className="price-overlay">
              <div className="price-content">
                <EditableText
                  textKey="hemsedal-price-title"
                  defaultText="PRIS"
                  tag="h2"
                  className="section-title"
                />
                <EditableText
                  textKey="hemsedal-price-subtitle"
                  defaultText="HEMSEDAL 24/8-2024"
                  tag="h3"
                  className="price-subtitle"
                />

                <div className="price-categories">
                  <div className="price-category">
                    <EditableText
                      textKey="hemsedal-price-3h-title"
                      defaultText="3-TIMMARS"
                      tag="h4"
                      className="category-title"
                    />
                    <EditableText
                      textKey="hemsedal-price-3h-1"
                      defaultText="1500 SEK / lag för Early Bird-anmälan innan 1 november."
                      tag="p"
                      className="price-item"
                    />
                    <EditableText
                      textKey="hemsedal-price-3h-2"
                      defaultText="1700 SEK / lag för anmälan mellan 1 november och 1 februari."
                      tag="p"
                      className="price-item"
                    />
                    <EditableText
                      textKey="hemsedal-price-3h-3"
                      defaultText="1900 SEK / lag för anmälan mellan 2 februari och 24 april."
                      tag="p"
                      className="price-item"
                    />
                    <EditableText
                      textKey="hemsedal-price-3h-4"
                      defaultText="2100 SEK / lag för anmälan från 25 april och fram till start."
                      tag="p"
                      className="price-item"
                    />
                  </div>

                  <div className="price-category">
                    <EditableText
                      textKey="hemsedal-price-6h-title"
                      defaultText="6-TIMMARS"
                      tag="h4"
                      className="category-title"
                    />
                    <EditableText
                      textKey="hemsedal-price-6h-1"
                      defaultText="1900 SEK / lag för Early Bird-anmälan innan 1 november."
                      tag="p"
                      className="price-item"
                    />
                    <EditableText
                      textKey="hemsedal-price-6h-2"
                      defaultText="2100 SEK / lag för anmälan mellan 1 november och 1 februari."
                      tag="p"
                      className="price-item"
                    />
                    <EditableText
                      textKey="hemsedal-price-6h-3"
                      defaultText="2300 SEK / lag för anmälan mellan 2 februari och 24 april."
                      tag="p"
                      className="price-item"
                    />
                    <EditableText
                      textKey="hemsedal-price-6h-4"
                      defaultText="2500 SEK / lag för anmälan från 25 april och fram till start."
                      tag="p"
                      className="price-item"
                    />
                  </div>
                </div>

                <div className="price-category trippeln-category">
                  <EditableText
                    textKey="hemsedal-price-trippeln-title"
                    defaultText="AIM CHALLENGE TRIPPELN 2025"
                    tag="h4"
                    className="category-title"
                  />
                  <EditableText
                    textKey="hemsedal-price-trippeln-1"
                    defaultText="4750 SEK / lag för Early Bird-anmälan innan 1 januari."
                    tag="p"
                    className="price-item"
                  />
                  <EditableText
                    textKey="hemsedal-price-trippeln-2"
                    defaultText="5250 SEK / lag för anmälan mellan 1 januari och 1 februari."
                    tag="p"
                    className="price-item"
                  />
                  <EditableText
                    textKey="hemsedal-price-trippeln-3"
                    defaultText="5750 SEK / lag för anmälan mellan 2 februari och 24 april."
                    tag="p"
                    className="price-item"
                  />
                  <EditableText
                    textKey="hemsedal-price-trippeln-4"
                    defaultText="6250 SEK / lag för anmälan efter den 25 april."
                    tag="p"
                    className="price-item"
                  />
                </div>

                <div className="price-button-container">
                  <a
                    href="https://raceid.com/sv/races/13015/about"
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
        <h2 className="latest-news-title">SENASTE NYTT HEMSEDAL</h2>
        <div className="latest-news-container">
          <NewsCarousel instanceId="hemsedal-news" defaultCategory="Hemsedal" />
        </div>
      </section>

      {/* Useful Links Section */}
      <section className="useful-links-section">
        <div className="useful-links-container">
          <EditableText
            textKey="hemsedal-useful-links-title"
            defaultText="NYTTIGA LÄNKAR"
            tag="h2"
            className="useful-links-title"
          />

          <div className="links-category">
            <EditableText
              textKey="hemsedal-links-category1-title"
              defaultText="Cykeluthyrning"
              tag="h3"
              className="links-category-title"
            />
            <EditableText
              textKey="hemsedal-links-category1-text"
              defaultText="Cykeluthyrning med in- och utlämning på Lassalyckan Stadion. Läs mer och boka här."
              tag="p"
              className="links-text"
            />
          </div>

          <div className="links-category">
            <EditableText
              textKey="hemsedal-links-category2-title"
              defaultText="Boende"
              tag="h3"
              className="links-category-title"
            />
            <EditableText
              textKey="hemsedal-links-category2-text"
              defaultText="Önskar du att bo nära start och mål så kan vi varmt rekommendera Hotell Lassalyckan som erbjuder ett modernt boende ett stenkast ifrån starten. https://www.hotell-lassalyckan.se"
              tag="p"
              className="links-text"
            />
          </div>

          <div className="links-category">
            <EditableText
              textKey="hemsedal-links-category3-title"
              defaultText="Mat"
              tag="h3"
              className="links-category-title"
            />
            <EditableText
              textKey="hemsedal-links-category3-text"
              defaultText="Önskar du att bo nära start och mål så kan vi varmt rekommendera Hotell Lassalyckan som erbjuder ett modernt boende ett stenkast ifrån starten."
              tag="p"
              className="links-text"
            />
          </div>
        </div>
      </section>

      {/* Sponsors Section */}
      <section className="sponsors-section">
        <h2 className="sponsors-title">LOKALA SPONSORER</h2>
        <div className="sponsors-container">
          {/* Local sponsors will be loaded dynamically by the SponsorEditor component */}
        </div>
      </section>

      {/* No footer needed here - it's already included in App.jsx */}
    </div>
    </>
  );
};

export default Hemsedal;
