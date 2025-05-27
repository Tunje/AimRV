import React from "react";
import "../styles/index.css";
import EditableText from "./EditableText";
import BackgroundEditor from "./BackgroundEditor";

const Trippeln = () => {
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
              textKey="trippeln-text-1"
              defaultText="Trippeln är en tävling i tävlingen där de som deltar i minst tre av årets deltävlingar är med och tävlar om den mycket hedervärda titeln Vinnare av AIM Challenge Trippeln!"
              tag="p"
              className="trippeln-text"
            />

            <EditableText
              textKey="trippeln-text-2"
              defaultText="AIM Challenge Trippeln ersätter Landskampen som sedan 2010 har varit en tävling i tävlingen för de som genomfört AIM Challenge både i Lindvallen och Hemsedal. En tävling där det tävlats för antingen Sverige eller Norge, där det vinnande landet har hyllats och den som bidragit mest till sitt land har prisats."
              tag="p"
              className="trippeln-text"
            />

            <EditableText
              textKey="trippeln-text-3"
              defaultText="Med AIM Challenge Trippeln lägger vi ner stridsyxan mellan Sverige och Norge och gör det därmed möjligt att även köra mixade lag mellan olika nationer utan att detta skapar en konflikt."
              tag="p"
              className="trippeln-text"
            />

            <EditableText
              textKey="trippeln-subheading"
              defaultText="Hur går AIM Challenge Trippeln till:"
              tag="h2"
              className="trippeln-subheading"
            />

            <EditableText
              textKey="trippeln-text-4"
              defaultText="AIM Challenge Trippeln är en tävling i tävlingen för de lag som deltar på minst tre deltävlingar under ett och samma år. Tävlingarna som ingår är Ulricehamn, Sälen, Hemsedal och Kolmården. Det är fritt för laget att välja om ni önskar att delta i 3- eller 6-timmars tävlingen i Ulricehamn och Kolmården, båda anses att vara likvärdiga för Trippeln."
              tag="p"
              className="trippeln-text"
            />

            <EditableText
              textKey="trippeln-text-5"
              defaultText="Vid anmälan till Trippeln blir man per automatik anmäld till alla fyra deltävlingar och väljer själv om man vill delta i tre eller fyra tävlingar. Priset för att anmäla sig till trippeln är rabatterat och blir billigare redan vid start i tre deltävlingar. Skulle ett lag delta i alla fyra deltävlingarna så räknas de tre bästa resultaten till Trippeln."
              tag="p"
              className="trippeln-text"
            />

            <EditableText
              textKey="trippeln-text-6"
              defaultText="Det gäller att samla så många poäng som möjligt under årets tävlingar där varje lag får räkna in sina tre bästa resultat från det gångna året. Vinnaren av AIM Challenge Trippeln kommer att utses genom ett poängsystem som bygger på hur många poäng laget fått procentuellt i förhållande till vinnarlaget i respektive deltävling. Varje lag kommer då få en poängsumma mellan 1 och 100 per tävling och efter alla deltävlingarna kommer dessa poäng att adderas och det lag med högst sammanlagda poäng kommer att stå på prispallen! Skulle två lag få samma sammanlagda poäng så kommer vi se på placeringar i de enskilda loppen för att utse en vinnare."
              tag="p"
              className="trippeln-text"
            />

            <EditableText
              textKey="trippeln-text-7"
              defaultText="Vid anmälan till AIM Challenge Trippeln så anmäler sig laget till alla fyra deltävlingarna, varav minst tre måste genomföras för att få ett resultat i Trippeln. Ett lag består av två personer, men om någon i laget skulle få förhinder inför någon av tävlingarna så gäller följande: För att resultatet i Trippeln skall bli godkänt så måste minst en i laget delta i alla tre tävlingarna, samt att deltagare 2 deltar vid minst två deltävlingar. Det vill säga att det är möjligt att ta in en reserv under en av deltävlingarna och fortfarande tävla som lag om den hedervärda titeln! I det fall deltagare 1 tävlat med tre olika lagkompisar under året är det enbart den som deltagit vid alla tre tävlingarna som kommer att premieras."
              tag="p"
              className="trippeln-text"
            />

            <EditableText
              textKey="trippeln-text-8"
              defaultText="Det är inte möjligt att sälja sin startplats i Trippeln vidare för den tävling som laget eventuellt inte deltar i."
              tag="p"
              className="trippeln-text"
            />
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
      <div className="locked-background background-editable" id="trippeln-background-image"></div>
    </div>
    </>
  );
};

export default Trippeln;
