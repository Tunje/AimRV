import React from "react";
import "../styles/index.css";
import EditableImage from "./EditableImage";
import EditableText from "./EditableText";

const Trippeln = () => {
  return (
    <div className="trippeln-container">
      {/* Hero Section with Image */}
      <section className="trippeln-hero-section">
        <div className="hero-content">
          <div className="hero-image-container">
            <EditableImage
              imageKey="trippeln-hero-image"
              defaultSrc="/images/AIM_Hemsedal_2024_AnkiGrothe_45cm_300dpi_057.jpg"
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
            <h2 className="trippeln-subheading">
              Tre tävlingar, en titel, massa äventyr!
            </h2>
            <p className="trippeln-text">
              AIM Challenge Trippeln är för er som vill ta äventyret ett steg
              längre. Genom att delta i minst tre deltävlingar under samma
              säsong är ni med i kampen om en av de mest prestigefyllda titlarna
              inom AIM Challenge, nämligen Trippeln. Det här är en chans att se
              och uppleva olika delar av Norden och utmana er själva på olika
              platser i varierande terräng med nya kartor och kontroller varje
              gång.
            </p>
            <h3 className="trippeln-subheading">Så funkar det</h3>
            <p className="trippeln-text">
              AIM Challenge Trippeln ersätter Landskampen som sedan 2010 har
              varit en tävling i tävlingen för de som genomfört AIM Challenge
              både i Lindvallen och Hemsedal. En tävling där det tävlats för
              antingen Sverige eller Norge, där det vinnande landet har hyllats
              och den som bidragit mest till sitt land har prisats.
            </p>
            <h3 className="trippeln-subheading">Poäng och ranking</h3>

            <p className="trippeln-text">
              Efter varje tävling får ni poäng baserat på hur nära ni varit
              segerpoängen i er klass. Varje tävling ger mellan 1 och 100 poäng.
              Lagets tre högsta poäng summeras och det lag som har flest poäng i
              slutet av säsongen vinner Trippeln. Om flera lag hamnar på samma
              poäng avgörs placeringen av bästa enskilda resultat under året.
            </p>

            <h3 className="trippeln-subheading">Laguppställning</h3>

            <p className="trippeln-text">
              Trippeln genomförs precis som de vanliga tävlingarna i lag om två.
              Minst en av deltagarna måste delta i alla tre tävlingar som
              räknas. Den andra kan bytas ut vid en av deltävlingarna om det
              behövs. Det ger er flexibilitet och möjlighet att fullfölja
              Trippeln även om planer ändras under säsongen.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="trippeln-cta-section">
        <div className="cta-container">
          <a
            href="https://raceid.com/sv/races/13016/about"
            target="_blank"
            rel="noopener noreferrer"
            className="trippeln-cta-button"
          >
            TA MIG TILL ANMÄLAN
          </a>
        </div>
      </section>

      {/* Background Image Section */}
      <div className="locked-background"></div>
    </div>
  );
};

export default Trippeln;
