import React from "react";
import EditableText from "./EditableText";
import EditableImage from "./EditableImage";
import "../styles/index.css";

const Regler = () => {
  return (
    <div className="regler-container">
      {/* Hero Section with Image */}
      <section className="regler-hero-section">
        <div className="hero-content">
          <div className="hero-image-container">
            <EditableImage
              imageKey="regler-hero-image"
              defaultSrc="/images/AIM_lindvallen_2024_AnkiGrothe_highres_125.jpg"
              alt="Regler Hero"
            />
          </div>
        </div>
      </section>

      {/* Title Section */}
      <section className="regler-title-section">
        <div className="title-container">
          <EditableText
            textKey="regler-title"
            defaultText="REGLER"
            tag="h1"
            className="location-title"
          />
        </div>
      </section>

      {/* First Text Section with dark blue background */}
      {/* Content Section */}
      <section className="regler-content-section">
        <div className="regler-content-container">
          <div className="regler-content">
            <EditableText
              textKey="regler-team-heading"
              defaultText="LAGET"
              tag="h2"
              className="regler-heading"
            />
            <ul className="regler-list">
              <li className="regler-list-item">Åldersgräns 15år/18år</li>
              <li className="regler-list-item">
                Båda deltagarna måste ha olycksförsäkring som täcker olyckor i
                samband med tävling/idrottsaktiviteter.
              </li>
              <li className="regler-list-item">
                Det är lagets ansvar att se till att de är registrerade i rätt
                klass.
              </li>
              <li className="regler-list-item">
                Startnummer ska placeras fram på cykel samt synligt på kroppen
                på båda deltagarna
              </li>
              <li className="regler-list-item">
                Det är tillåtet att använda GPS men det är alltid kartan som
                gäller. GPSens kartunderlag stämmer inte alltid överens med den
                utskrivna AIM kartan.
              </li>
              <li className="regler-list-item">
                Laget ska alltid vara samlade max 20 meter mellan
                lagmedlemmarna.
              </li>
              <li className="regler-list-item">
                Det är inte tillåtet att ha följebil.
              </li>
            </ul>

            <EditableText
              textKey="regler-safety-heading"
              defaultText="SÄKERHET"
              tag="h2"
              className="regler-heading"
            />
            <ul className="regler-list">
              <li className="regler-list-item">
                Lagen väljer själva vilka kontroller de klarar att ta baserat på
                väder, egen färdighet och kunskap.
              </li>
              <li className="regler-list-item">
                Lagen väljer själva vilken väg de vill ta till kontrollerna
                baserat på väder, egen färdighet och kunskap.
              </li>
              <li className="regler-list-item">
                Trafiken är inte reglerad under tävlingen.
              </li>
              <li className="regler-list-item">Trafikregler gäller alltid.</li>
              <li className="regler-list-item">
                Första hjälpen kit ska bäras med under hela tävlingen
              </li>
              <li className="regler-list-item">
                Hjälm ska bäras under all cykling, klättring, bouldering och
                rappellering
              </li>
              <li className="regler-list-item">
                Vid olycka är det obligatoriska att hjälpa till.
              </li>
              <li className="regler-list-item">
                Vid allvarlig olycka ring nöd nummer 112 i Sverige och 113 i
                Norge
              </li>
              <li className="regler-list-item">
                Vid behov för enklare medicinsk hjälp ring telefonnumret på
                baksidan av kartan
              </li>
              <li className="regler-list-item">
                Tävlingsledningens direktiv gäller alltid.
              </li>
            </ul>

            <EditableText
              textKey="regler-other-heading"
              defaultText="ÖVRIGT"
              tag="h2"
              className="regler-heading"
            />
            <ul className="regler-list">
              <li className="regler-list-item">
                Elcyklar är ej tillåtet, med undantag för Elcykelklassen i
                Hemsedal.
              </li>
              <li className="regler-list-item">
                Beroende på kapacitet är det möjligt att använda liften i
                Hemsedal, lyssna noga på vad speakern ger för information för
                vad som gäller för årets tävling.
              </li>
              <li className="regler-list-item">
                Deltagare som bryter ska genast meddela tävlingsledningen.
                Telefonnummer står på kartan.
              </li>
              <li className="regler-list-item">
                Synliga, osynliga och tävlande domare befinner sig i
                tävlingsområdet och ser till att reglerna följs.
              </li>
              <li className="regler-list-item">
                Regelbrott kan leda till poängavdrag eller diskvalificering
              </li>
              <li className="regler-list-item">
                Deltagare som vinner priser som lottas ut pga olika händelser
                eller som dras på startnummer måste närvara på prisutdelningen
                för att få sitt pris. Är man inte närvarande och ditt
                namn/lagnamn dras drar vi reservnamn/lagnamn.
              </li>
              <li className="regler-list-item">
                LINDVALLEN, viadukten mellan Lodgen och Experium är stängd under
                hela tävlingen.
              </li>
              <li className="regler-list-item">
                Tävlingsledningens beslut går inte att överklaga.
              </li>
              <li className="regler-list-item">
                Kloka människor skräpar inte ner, för alla andra är det
                förbjudet.
              </li>
              <li className="regler-list-item">
                Respektera privat mark, ta inte genvägar över privata områden
              </li>
              <li className="regler-list-item">
                Beträda odlad mark är förbjudet. Åkrar som inte har skördats är
                odlad mark.
              </li>
              <li className="regler-list-item">
                Stäng alla grindar som ni öppnar.
              </li>
              <li className="regler-list-item">
                Visa betande djur respekt genom att stiga av cykeln och gå förbi
                dem.
              </li>
            </ul>

            <h2 className="regler-heading">OBLIGATORISK UTRUSTNING</h2>
            <ul className="regler-list">
              <li className="regler-list-item">
                Cykel, utan elmotor med undantag för Elcykelklassen i Hemsedal.
              </li>
              <li className="regler-list-item">Cykelhjälm vid cykling</li>
              <li className="regler-list-item">Mobiltelefon (1 st per lag)</li>
              <li className="regler-list-item">
                Första hjälpen (1 st per lag)
              </li>
            </ul>

            <h2 className="regler-heading">
              VI REKOMMENDERAR ATT NI ÄVEN HAR MED ER
            </h2>
            <ul className="regler-list">
              <li className="regler-list-item">
                Förstärkningskläder vid hastigt väderomslag
              </li>
              <li className="regler-list-item">Kompass</li>
              <li className="regler-list-item">Vatten i en Camelbak</li>
              <li className="regler-list-item">Energy bars eller liknande</li>
              <li className="regler-list-item">Klocka</li>
              <li className="regler-list-item">Löparskor</li>
              <li className="regler-list-item">
                Cykelslang och reparationskit + övriga verktyg, tex en biketool
                för enklare justeringar
              </li>
            </ul>

            <h2 className="regler-heading">AIM CHALLENGE STÅR FÖR</h2>
            <ul className="regler-list">
              <li className="regler-list-item">
                Kanot, SUP, sele, rep, hjälm vid firningar/klättring. All
                utrustning vid bemannade poster finns där klättring etc
                förekommer.
              </li>
            </ul>

            <h2 className="regler-heading">
              VILLKOR I FÖRBINDELSE MED ANMÄLAN
            </h2>
            <p className="regler-list-item">
              Villkor i förbindelse med anmälan
            </p>

            <p className="regler-contact">
              Om du har frågor:{" "}
              <a href="mailto:info@aimchallenge.com">info@aimchallenge.com</a>
            </p>
          </div>
        </div>
      </section>

      {/* Background Image Section - Using the exact same structure as OmOss */}
      <div
        className="locked-background"
        style={{ height: "50vh", width: "100%", marginBottom: "60px" }}
      ></div>
    </div>
  );
};

export default Regler;
