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
            <p className="trippeln-text">
              Trippeln är en tävling i tävlingen där de som deltar i minst tre
              av årets deltävlingar är med och tävlar om den mycket hedervärda
              titeln Vinnare av AIM Challenge Trippeln!
            </p>

            <p className="trippeln-text">
              AIM Challenge Trippeln ersätter Landskampen som sedan 2010 har
              varit en tävling i tävlingen för de som genomfört AIM Challenge
              både i Lindvallen och Hemsedal. En tävling där det tävlats för
              antingen Sverige eller Norge, där det vinnande landet har hyllats
              och den som bidragit mest till sitt land har prisats.
            </p>

            <p className="trippeln-text">
              Med AIM Challenge Trippeln lägger vi ner stridsyxan mellan Sverige
              och Norge och gör det därmed möjligt att även köra mixade lag
              mellan olika nationer utan att detta skapar en konflikt.
            </p>

            <h2 className="trippeln-subheading">
              Hur går AIM Challenge Trippeln till:
            </h2>

            <p className="trippeln-text">
              AIM Challenge Trippeln är en tävling i tävlingen för de lag som
              deltar på minst tre deltävlingar under ett och samma år.
              Tävlingarna som ingår är Ulricehamn, Sälen, Hemsedal och
              Kolmården. Det är fritt för laget att välja om ni önskar att delta
              i 3- eller 6-timmars tävlingen i Ulricehamn och Kolmården, båda
              anses att vara likvärdiga för Trippeln.
            </p>

            <p className="trippeln-text">
              Vid anmälan till Trippeln blir man per automatik anmäld till alla
              fyra deltävlingar och väljer själv om man vill delta i tre eller
              fyra tävlingar. Priset för att anmäla sig till trippeln är
              rabatterat och blir billigare redan vid start i tre deltävlingar.
              Skulle ett lag delta i alla fyra deltävlingarna så räknas de tre
              bästa resultaten till Trippeln.
            </p>

            <p className="trippeln-text">
              Det gäller att samla så många poäng som möjligt under årets
              tävlingar där varje lag får räkna in sina tre bästa resultat från
              det gångna året. Vinnaren av AIM Challenge Trippeln kommer att
              utses genom ett poängsystem som bygger på hur många poäng laget
              fått procentuellt i förhållande till vinnarlaget i respektive
              klass. Varje lag kommer då få en poängsumma mellan 1 och 100 per
              tävling och efter alla deltävlingarna kommer dessa poäng att
              adderas och det lag med högst sammanlagda poäng kommer att stå på
              prispallen! Skulle två lag få samma sammanlagda poäng så kommer vi
              se på placeringar i de enskilda loppen för att utse en vinnare.
            </p>

            <p className="trippeln-text">
              Vid anmälan till AIM Challenge Trippeln så anmäler sig laget till
              alla fyra deltävlingarna, varav minst tre måste genomföras för att
              få ett resultat i Trippeln. Ett lag består av två personer, men om
              någon i laget skulle få förhinder inför någon av tävlingarna så
              gäller följande: För att resultatet i Trippeln skall bli godkänt
              så måste minst en i laget delta i alla tre tävlingarna, samt att
              deltagare 2 deltar vid minst två deltävlingar. Det vill säga att
              det är möjligt att ta in en reserv under en av deltävlingarna och
              fortfarande tävla som lag om den hedervärda titeln! I det fall
              deltagare 1 tävlat med tre olika lagkompisar under året är det
              enbart den som deltagit vid alla tre tävlingarna som kommer att
              premieras.
            </p>

            <p className="trippeln-text">
              Det är inte möjligt att sälja sin startplats i Trippeln vidare för
              den tävling som laget eventuellt inte deltar i.
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
