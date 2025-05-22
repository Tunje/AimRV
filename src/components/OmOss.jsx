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
      {/* <section className="om-oss-title-section">
        <div className="title-container">
          <EditableText
            textKey="om-oss-title"
            defaultText="Om Oss"
            tag="h1"
            className="location-title"
          />
        </div>
      </section> */}

      {/* First Text Section with dark blue background */}
      <section className="om-oss-section flex flex_j_C flex_a_C">
        <div className="om-oss-content MaxWH flex flex_col flex_j_C ">
          <div className="om-oss-content-wrapper">
            <EditableText
              textKey="om-oss-title-1"
              defaultText="Om AIM Challenge"
              tag="h2"
              className="fonts_large om-oss-title"
            />

            <EditableText
              textKey="om-oss-text-1"
              defaultText="AIM Challenge är en multisporttävling i lag om två, där äventyret, glädjen och gemenskapen står i centrum."
              tag="p"
              className="fonts_small om-oss-text"
              style={{ fontWeight: "bold" }}
            />
            <EditableText
              textKey="om-oss-text-2"
              defaultText="Med karta i handen och sex timmar på klockan gäller det att samla så många poäng som möjligt genom att ta kontroller som är utspridda i naturen. Ni tar er fram framför allt på cykel, men även till fots och ibland genom att klättra, paddla eller simma."
              tag="p"
              className="fonts_small om-oss-text"
            />
            <EditableText
              textKey="om-oss-text-2"
              defaultText="Tävlingen är öppen för alla, från nyfikna nybörjare till världseliten inom multisport. Ni bestämmer själva takt, vägval och hur många kontroller ni vill ta. Det är en utmaning på era villkor."
              tag="p"
              className="fonts_small om-oss-text"
            />
            <h3
              className="fonts_medium om-oss-title"
              style={{
                textAlign: "center",
                fontWeight: "bold",
              }}
            >
              Så går det till
            </h3>
            <EditableText
              textKey="om-oss-text-3"
              defaultText="När starten går får varje lag en karta med 60 kontroller utplacerade i området. Kartorna är hemliga fram till start och är tryckta på riv- och vattentåligt material. Vissa kontroller är rena stämplingspunkter. Andra innehåller äventyrliga inslag som klättring, simning eller paddling. Vilka ni väljer att ta är helt upp till er. Det är omöjligt att hinna med alla, så smart planering och bra samarbete blir lika viktigt som fysisk kapacitet."
              tag="p"
              className="fonts_small om-oss-text"
            />
            <EditableText
              textKey="om-oss-text-3"
              defaultText="Ni samlar poäng baserat på kontrollernas svårighetsgrad. Många kontroller kan nås direkt med cykel, andra kräver att ni springer en bit eller vågar er ut i vattnet. På varje äventyrlig kontroll finns erfaren personal som ser till att allt sker på ett tryggt och säkert sätt. Inga förkunskaper krävs."
              tag="p"
              className="fonts_small om-oss-text"
            />
            <h3
              className="fonts_medium om-oss-title"
              style={{
                textAlign: "center",
                fontWeight: "bold",
              }}
            >
              En tävling för alla – oavsett nivå
            </h3>
            <EditableText
              textKey="om-oss-text-4"
              defaultText="AIM Challenge är för alla som vill uppleva multisport på ett tillgängligt och roligt sätt. Därför erbjuder vi två varianter av tävlingen: 3-timmars och 6-timmars. Upplägget är detsamma, men tiden ni har på er att samla kontroller skiljer sig. I Ulricehamn och Kolmården kan ni välja den kortare varianten, perfekt för dig som vill testa konceptet i en mer hanterbar form."
              tag="p"
              className="fonts_small om-oss-text"
            />
            <EditableText
              textKey="om-oss-text-5"
              defaultText="Oavsett om ni är nybörjare eller rutinerade multisportare tävlar ni på samma bana med samma kontroller. Här står några av Nordens bästa lag på startlinjen, tillsammans med förstagångsdeltagare, kompisgäng, kollegor och familjemedlemmar som söker ett gemensamt äventyr. Tävlingen är öppen för dig från 15 år och det viktigaste är inte hur många kontroller ni tar, utan att ni har en minnesvärd dag i naturen."
              tag="p"
              className="fonts_small om-oss-text"
            />
            <EditableText
              textKey="om-oss-text-6"
              defaultText="​Det här är multisport när det är som mest inkluderande. En utmaning på era villkor, fylld av rörelse, gemenskap och upptäckarglädje."
              tag="p"
              className="fonts_small om-oss-text"
            />
            <EditableText
              textKey="om-oss-text-7"
              defaultText=""
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
