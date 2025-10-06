import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import EditableText from "./EditableText";
import BackgroundEditor from "./BackgroundEditor";
import NewsCarousel from "./NewsCarousel";
import "../styles/index.css";
import { useText } from "../context/TextContext";

const Salen = () => {
  const { currentLanguage, getText } = useText();
  
  // State for button text
  const [readMoreText, setReadMoreText] = useState('');
  const [registerButtonText, setRegisterButtonText] = useState('');
  const [latestNewsText, setLatestNewsText] = useState('');
  const [usefulLinksText, setUsefulLinksText] = useState('');
  const [localSponsorsText, setLocalSponsorsText] = useState('');
  
  // Get the registration URL from editable text
  const rawUrl = getText('salen-registration-url', 'https://raceid.com/sv/races/12847/about');
  const registrationUrl = rawUrl.startsWith('http://') || rawUrl.startsWith('https://') ? rawUrl : `https://${rawUrl}`;
  
  // Update button text when language changes
  useEffect(() => {
    // For English
    if (currentLanguage === 'en') {
      setReadMoreText('Read more');
      setRegisterButtonText('TAKE ME TO REGISTRATION');
      setLatestNewsText('LATEST NEWS SÄLEN');
      setUsefulLinksText('USEFUL LINKS');
      setLocalSponsorsText('LOCAL SPONSORS');
    }
    // For Norwegian
    else if (currentLanguage === 'no') {
      setReadMoreText('Les mer');
      setRegisterButtonText('TA MEG TIL PÅMELDING');
      setLatestNewsText('SISTE NYTT SÄLEN');
      setUsefulLinksText('NYTTIGE LENKER');
      setLocalSponsorsText('LOKALE SPONSORER');
    }
    // Default to Swedish
    else {
      setReadMoreText('Läs mer');
      setRegisterButtonText('TA MIG TILL ANMÄLAN');
      setLatestNewsText('SENASTE NYTT SÄLEN');
      setUsefulLinksText('NYTTIGA LÄNKAR');
      setLocalSponsorsText('LOKALA SPONSORER');
    }
  }, [currentLanguage]);
  
  // Include the BackgroundEditor component to enable image editing
  return (
    <>
      <BackgroundEditor key="salen-background-editor" />
    <div className="salen-container">
      {/* Hero Section */}
      <section className="salen-hero-section">
        <div className="hero-content">
          <div className="hero-image-container background-editable" id="salen-hero-image">
            <img
              src="/images/AIM_Hemsedal_2024_AnkiGrothe_45cm_300dpi_049.jpg"
              alt="Sälen Event"
            />
          </div>
        </div>
      </section>

      {/* Title Section */}
      <section className="salen-title-section">
        <div className="title-container">
          <EditableText
            textKey="salen-title"
            defaultText="SÄLEN"
            tag="h1"
            className="location-title"
          />
          <EditableText
            textKey="salen-date"
            defaultText="1 AUGUSTI 2025"
            tag="h2"
            className="location-date"
          />
        </div>
      </section>

      {/* Button Section */}
      <section className="ulricehamn-button-section">
        <EditableText
          textKey="salen-registration-url"
          defaultText="https://raceid.com/sv/races/12847/about"
          tag="span"
          className="hidden-editable-url"
          style={{ display: 'none' }}
        />
        <div className="button-container">
          <a
            href={registrationUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="anmalan-button"
          >
            <p>{registerButtonText}</p>
          </a>
        </div>
      </section>

      {/* Program Section with Wavy Background */}
      <section className="salen-program-section">
        <div className="program-container">
          <div className="program-cards">
            {/* Image Card */}
            <div className="program-card image-card background-editable" id="salen-program-image">
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
          <div className="price-image-container background-editable" id="salen-price-image">
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
                    href={registrationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="price-anmalan-button"
                  >
                    <p>{registerButtonText}</p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest News section */}
      <section id="latest-news" className="latest-news-section">
        <h2 className="latest-news-title">{latestNewsText}</h2>
        <div className="latest-news-container">
          <NewsCarousel instanceId="salen-news" defaultCategory="Sälen" />
        </div>
      </section>

      {/* Useful Links Section */}
      <section className="useful-links-section">
        <div className="useful-links-container">
          <EditableText
            textKey="salen-useful-links-title"
            defaultText={usefulLinksText}
            tag="h2"
            className="useful-links-title"
          />

          <div className="links-category">
            <EditableText
              textKey="salen-links-category1-title"
              defaultText="Cykeluthyrning"
              tag="h3"
              className="links-category-title"
            />
            <EditableText
              textKey="salen-links-category1-text"
              defaultText="Cykeluthyrning med in- och utlämning på Lassalyckan Stadion. Läs mer och boka här."
              tag="p"
              className="links-text"
            />
          </div>

          <div className="links-category">
            <EditableText
              textKey="salen-links-category2-title"
              defaultText="Boende"
              tag="h3"
              className="links-category-title"
            />
            <EditableText
              textKey="salen-links-category2-text"
              defaultText="Önskar du att bo nära start och mål så kan vi varmt rekommendera Hotell Lassalyckan som erbjuder ett modernt boende ett stenkast ifrån starten. https://www.hotell-lassalyckan.se"
              tag="p"
              className="links-text"
            />
          </div>

          <div className="links-category">
            <EditableText
              textKey="salen-links-category3-title"
              defaultText="Mat"
              tag="h3"
              className="links-category-title"
            />
            <EditableText
              textKey="salen-links-category3-text"
              defaultText="Önskar du att bo nära start och mål så kan vi varmt rekommendera Hotell Lassalyckan som erbjuder ett modernt boende ett stenkast ifrån starten."
              tag="p"
              className="links-text"
            />
          </div>
        </div>
      </section>

      {/* Sponsors Section */}
      <section className="sponsors-section">
        <h2 className="sponsors-title">{localSponsorsText}</h2>
        <div className="sponsors-container">
          {/* Local sponsors will be loaded dynamically by the SponsorEditor component */}
        </div>
      </section>
      {/* No footer needed here - it's already included in App.jsx */}
    </div>
    </>
  );
};

export default Salen;
