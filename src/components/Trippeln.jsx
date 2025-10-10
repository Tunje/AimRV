import React, { useState, useEffect } from "react";
import "../styles/index.css";
import EditableText from "./EditableText";
import BackgroundEditor from "./BackgroundEditor";
import { useText } from "../context/TextContext";

const Trippeln = () => {
  const { currentLanguage, getText } = useText();
  
  // State for button text
  const [registerButtonText, setRegisterButtonText] = useState('');
  
  // Get the registration URL from editable text
  const rawUrl = getText('trippeln-registration-url', 'https://raceid.com/sv/races/13016/about');
  const registrationUrl = rawUrl.startsWith('http://') || rawUrl.startsWith('https://') ? rawUrl : `https://${rawUrl}`;
  
  // Update button text when language changes
  useEffect(() => {
    // For English
    if (currentLanguage === 'en') {
      setRegisterButtonText('TAKE ME TO REGISTRATION');
    }
    // For Norwegian
    else if (currentLanguage === 'no') {
      setRegisterButtonText('TA MEG TIL PÅMELDING');
    }
    // For Swedish (default)
    else {
      setRegisterButtonText('TA MIG TILL ANMÄLAN');
    }
  }, [currentLanguage]);
  
  return (
    <>
      <BackgroundEditor key="trippeln-background-editor" />
    <div className="trippeln-container">
      {/* Hero Section with Image */}
      <section className="trippeln-hero-section">
        <div className="hero-content">
          <div className="hero-image-container background-editable" id="trippeln-hero-image">
            <img
              src="/images/AIM_Hemsedal_2024_AnkiGrothe_45cm_300dpi_057.jpg"
              alt="Trippeln Hero"
            />
          </div>
        </div>
      </section>

      {/* Title Section */}
      <section className="trippeln-title-section">
        <div className="title-container">
          <EditableText
            textKey="trippeln-title"
            defaultText="AIM CHALLENGE TRIPPELN"
            tag="h1"
            className="location-title"
          />
        </div>
      </section>

      {/* Content Section */}
      <section className="trippeln-content-section">
        <div className="trippeln-content-container">
          <div className="trippeln-content">
            <EditableText
              textKey="trippeln-subtitle"
              defaultText="Tre tävlingar, en titel, massa äventyr!"
              tag="h2"
              className="trippeln-subheading"
            />

            <EditableText
              textKey="trippeln-intro"
              defaultText="AIM Challenge Trippeln är för er som vill ta äventyret ett steg längre. Genom att delta i minst tre deltävlingar under samma säsong är ni med i kampen om en av de mest prestigefyllda titlarna inom AIM Challenge, nämligen Trippeln."
              tag="p"
              className="trippeln-text"
            />

            <EditableText
              textKey="trippeln-intro-2"
              defaultText="Det här är en chans att se och uppleva olika delar av Norden och utmana er själva på olika platser i varierande terräng med nya kartor och kontroller varje gång."
              tag="p"
              className="trippeln-text"
            />

            <EditableText
              textKey="trippeln-heading-how"
              defaultText="Så funkar det"
              tag="h2"
              className="trippeln-subheading"
            />

            <EditableText
              textKey="trippeln-how-1"
              defaultText="Trippeln gäller för lag som genomför minst tre av årets deltävlingar: Ulricehamn, Sälen, Hemsedal och Kolmården. I Ulricehamn och Kolmården väljer ni själva om ni kör 3- eller 6-timmarstävlingen. Båda räknas som fullvärdiga resultat."
              tag="p"
              className="trippeln-text"
            />

            <EditableText
              textKey="trippeln-how-2"
              defaultText="När ni anmäler er till Trippeln registreras ni automatiskt till alla fyra tävlingar. Ni väljer själv om ni vill delta i tre eller alla fyra tävlingarna. De tre bästa resultaten räknas i sammanställningen."
              tag="p"
              className="trippeln-text"
            />

            <EditableText
              textKey="trippeln-heading-points"
              defaultText="Poäng och ranking"
              tag="h2"
              className="trippeln-subheading"
            />

            <EditableText
              textKey="trippeln-points-1"
              defaultText="Efter varje tävling får ni poäng baserat på hur nära ni varit segerpoängen i er klass. Varje tävling ger mellan 1 och 100 poäng. Lagets tre högsta poäng summeras och det lag som har flest poäng i slutet av säsongen vinner Trippeln."
              tag="p"
              className="trippeln-text"
            />

            <EditableText
              textKey="trippeln-points-2"
              defaultText="Om flera lag hamnar på samma poäng avgörs placeringen av bästa enskilda resultat under året."
              tag="p"
              className="trippeln-text"
            />

            <EditableText
              textKey="trippeln-heading-team"
              defaultText="Laguppställning"
              tag="h2"
              className="trippeln-subheading"
            />

            <EditableText
              textKey="trippeln-team"
              defaultText="Trippeln genomförs precis som de vanliga tävlingarna i lag om två. Minst en av deltagarna måste delta i alla tre tävlingar som räknas. Den andra kan bytas ut vid en av deltävlingarna om det behövs. Det ger er flexibilitet och möjlighet att fullfölja Trippeln även om planer ändras under säsongen."
              tag="p"
              className="trippeln-text"
            />
          </div>
        </div>
      </section>

      {/* Button Section */}
      <section className="trippeln-button-section">
        <EditableText
          textKey="trippeln-registration-url"
          defaultText="https://raceid.com/sv/races/13016/about"
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

      {/* Background Image Section */}
      <div className="locked-background background-editable" id="trippeln-background-image"></div>
    </div>
    </>
  );
};

export default Trippeln;
