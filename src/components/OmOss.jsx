import React from "react";
import { Link } from "react-router-dom";
import EditableText from "./EditableText";
import EditableImage from "./EditableImage";

const OmOss = () => {
  return (
    <div className="om-oss-container">
      {/* Hero Section with Image */}
      <section className="om-oss-hero-section">
        <div className="hero-content">
          <div className="hero-image-container">
            <EditableImage
              imageKey="om-oss-hero-image"
              defaultSrc="/images/EE-AIMChallenge24-Uhamn-0171-high.jpg"
              alt="Om Oss Hero"
            />
          </div>
        </div>
      </section>

      {/* Title Section */}
      <section className="om-oss-title-section">
        <div className="title-container">
          <EditableText
            textKey="om-oss-title"
            defaultText="OM OSS"
            tag="h1"
            className="location-title"
          />
        </div>
      </section>

      {/* First Text Section with dark blue background */}
      <section className="om-oss-section flex flex_j_C flex_a_C">
        <div className="om-oss-content MaxWH flex flex_col flex_j_C ">
          <div className="om-oss-content-wrapper">
            <EditableText
              textKey="om-oss-title-1"
              defaultText="Vad är AIM Challenge?"
              tag="h2"
              className="fonts_large om-oss-title"
            />

            <EditableText
              textKey="om-oss-text-1"
              defaultText="AIM Challenge är en multisporttävling som arrangeras i Åre, Sverige. Tävlingen går ut på att ta sig runt en bana med hjälp av karta och kompass. Längs banan finns kontroller som ska besökas i rätt ordning."
              tag="p"
              className="fonts_small om-oss-text"
            />
            <EditableText
              textKey="om-oss-text-2"
              defaultText="​"
              tag="p"
              className="fonts_small om-oss-text"
            />
            <EditableText
              textKey="om-oss-text-3"
              defaultText="Tävlingen arrangeras av AIM Challenge AB och har funnits sedan 2004. Tävlingen har utvecklats under åren och är idag en av Sveriges största multisporttävlingar."
              tag="p"
              className="fonts_small om-oss-text"
            />
            <EditableText
              textKey="om-oss-text-4"
              defaultText="​"
              tag="p"
              className="fonts_small om-oss-text"
            />
            <EditableText
              textKey="om-oss-text-5"
              defaultText="AIM Challenge är en tävling för alla. Oavsett om du är elit eller motionär finns det en klass för dig. Tävlingen är uppdelad i olika klasser beroende på svårighetsgrad och längd."
              tag="p"
              className="fonts_small om-oss-text"
            />
            <EditableText
              textKey="om-oss-text-6"
              defaultText="​"
              tag="p"
              className="fonts_small om-oss-text"
            />
            <EditableText
              textKey="om-oss-text-7"
              defaultText="Tävlingen går ut på att ta sig runt en bana med hjälp av karta och kompass. Längs banan finns kontroller som ska besökas i rätt ordning. Tävlingen innehåller olika moment som löpning, cykling, paddling, simning och klättring."
              tag="p"
              className="fonts_small om-oss-text"
            />
            <EditableText
              textKey="om-oss-text-8"
              defaultText="​"
              tag="p"
              className="fonts_small om-oss-text"
            />
          </div>
        </div>
      </section>

      {/* Background Image Section */}
      <div className="om-oss-background-container locked-background"></div>

      {/* Second Text Section with dark blue background */}
      <section className="om-oss-section flex flex_j_C flex_a_C ">
        <div className="om-oss-content MaxWH flex flex_col flex_j_C">
          <div className="om-oss-content-wrapper">
            <EditableText
              textKey="om-oss-title-2"
              defaultText="Så här är det att vara med i AIM Challenge"
              tag="h2"
              className="fonts_large om-oss-title"
            />

            <EditableText
              textKey="om-oss-text-9"
              defaultText="AIM Challenge är en rolig tävling. Det är oftast det som är det centrala i de deltagarkommentarer vi får både från eliten och motionärerna. Man färdas till största delen med hjälp av sin mountainbike och sina löparskor, men också i klättersele, paddlandes i kanot eller så strippar man helt enkelt och simmar ut till kontroller som är i vattnet."
              tag="p"
              className="fonts_small om-oss-text"
            />
            <EditableText
              textKey="om-oss-text-10"
              defaultText="​"
              tag="p"
              className="fonts_small om-oss-text"
            />
            <EditableText
              textKey="om-oss-text-11"
              defaultText="Det finns inga krav på förkunskaper om de olika momenten utan vi har kunnig personal vid varje post som innefattas av klättring, firning, simning, paddling. Varje lag genomför tävlingen i sin egen takt och med egen strategi. Visst finns det de lag som satsar allt för att knipa segern och det är det som är det roliga med konceptet. Elit och motionär tävlar på samma villkor på samma bana."
              tag="p"
              className="fonts_small om-oss-text"
            />
            <EditableText
              textKey="om-oss-text-12"
              defaultText="​"
              tag="p"
              className="fonts_small om-oss-text"
            />
            <EditableText
              textKey="om-oss-text-13"
              defaultText="Våra deltagare är allt ifrån världseliten i multisport som Thule Adventure team, Team Silva, Team Multitude Salomon men också glada motionärer allt från åldrarna 15 till pensionärer. Oavsett ålder och fysiska förutsättningar är detta ett roligt och annorlunda sätt att tävla på."
              tag="p"
              className="fonts_small om-oss-text"
            />
          </div>
        </div>
      </section>

      {/* Cards Section */}
      <section className="om-oss-cards-container">
        {/* Card 1: Regler */}
        <div className="om-oss-card">
          <div className="om-oss-card-content">
            <EditableText
              textKey="card-1-title"
              defaultText="REGLER"
              tag="p"
              className="font_blue fonts_medium_B"
            />
            <EditableText
              textKey="card-1-text"
              defaultText="Tävlingsregler och information"
              tag="p"
              className="font_blue fonts_medium"
            />
          </div>
          <div className="om-oss-card-button">
            <Link to="/page2" className="location">
              LÄS MER
            </Link>
          </div>
        </div>

        {/* Card 2: FAQ */}
        <div className="om-oss-card">
          <div className="om-oss-card-content">
            <EditableText
              textKey="card-2-title"
              defaultText="FAQ"
              tag="p"
              className="font_blue fonts_medium_B"
            />
            <EditableText
              textKey="card-2-text"
              defaultText="Vanliga frågor och svar"
              tag="p"
              className="font_blue fonts_medium"
            />
          </div>
          <div className="om-oss-card-button">
            <Link to="/page3" className="location">
              LÄS MER
            </Link>
          </div>
        </div>

        {/* Card 3: Historien om AIM */}
        <div className="om-oss-card">
          <div className="om-oss-card-content">
            <EditableText
              textKey="card-3-title"
              defaultText="HISTORIEN OM AIM"
              tag="p"
              className="font_blue fonts_medium_B"
            />
            <EditableText
              textKey="card-3-text"
              defaultText="Vår resa sedan 2004"
              tag="p"
              className="font_blue fonts_medium"
            />
          </div>
          <div className="om-oss-card-button">
            <Link to="/page3" className="location">
              LÄS MER
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OmOss;
