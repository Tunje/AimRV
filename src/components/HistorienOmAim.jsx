import React from "react";
import "../styles/index.css";
import EditableText from "./EditableText";
import BackgroundEditor from "./BackgroundEditor";

const HistorienOmAim = () => {
  return (
    <>
      <BackgroundEditor key="historien-om-aim-background-editor" />
      <div className="historien-om-aim-container">
      {/* Hero Section with Image */}
      <section className="historien-om-aim-hero-section">
        <div className="hero-content">
          <div className="hero-image-container background-editable" id="historien-om-aim-hero-image">
            <img
              src="/images/AIM_lindvallen_2024_AnkiGrothe_highres_125.jpg"
              alt="Historien Om AIM Hero"
            />
          </div>
        </div>
      </section>

      {/* Title Section */}
      <section className="historien-om-aim-title-section">
        <div className="title-container">
          <EditableText
            textKey="historien-om-aim-title"
            defaultText="HISTORIEN BAKOM AIM CHALLENGE"
            tag="h1"
            className="location-title"
          />
        </div>
      </section>

      {/* Content Section with dark blue background */}
      <section className="historien-om-aim-content-section">
        <div className="historien-om-aim-content-container">
          <div className="historien-om-aim-content">

            <EditableText
              textKey="historien-om-aim-intro"
              defaultText="AIM Challenge är idag Nordens största multisporttävling, men starten var något helt annat. Allt tog sin början med ett äventyr i Söderhavet."
              tag="p"
              className="historien-om-aim-text"
            />

            <EditableText
              textKey="historien-om-aim-camel-trophy"
              defaultText="År 2000 deltog Lisa Nordlind, grundare av AIM Challenge, i multisporttävlingen Camel Trophy. Tillsammans med Mikael Stening bildade hon Team Skandinavien och tävlade mot lag från 22 länder. Under tre intensiva veckor samlade lagen kontroller med hjälp av karta och kompass, rörande sig med båt, cykel, klätterutrustning och paddelbräda genom övärlden kring Tonga och Samoa."
              tag="p"
              className="historien-om-aim-text"
            />

            <EditableText
              textKey="historien-om-aim-inspiration"
              defaultText="Kontrollerna gav olika poäng och lagen valde själva väg och ordning. Friheten, äventyret och det lekfulla upplägget satte spår. Lisa visste att hon ville skapa något liknande hemma i Norden."
              tag="p"
              className="historien-om-aim-text"
            />

            <EditableText
              textKey="historien-om-aim-hemsedal-start"
              defaultText="När hon sommaren 2004 befann sig i Hemsedal väcktes idén till liv. Det var stilla i den lilla skidorten och hon bestämde sig för att arrangera ett nytt typ av lopp. Något som kombinerade fysisk aktivitet med glädje, taktik och gemenskap. Resultatet blev Hemsedal Challenge, och den första septemberhelgen stod 150 deltagare på startlinjen. Med vänner, familj och bekanta som funktionärer växte något större fram."
              tag="p"
              className="historien-om-aim-text"
            />

            <EditableText
              textKey="historien-om-aim-birth"
              defaultText="Fem år senare föddes AIM Challenge. Tävlingen i Hemsedal fick sällskap av en ny deltävling i Lindvallen och namnet byttes för att samla konceptet. AIM Challenge började ta form som den multisportserie det är idag."
              tag="p"
              className="historien-om-aim-text"
            />

            <EditableText
              textKey="historien-om-aim-new-era-heading"
              defaultText="En ny era med nya möjligheter"
              tag="h2"
              className="historien-om-aim-subheading"
            />

            <EditableText
              textKey="historien-om-aim-marcus-takeover"
              defaultText="Inför säsongen 2020 tackade Lisa för sig och lämnade över stafettpinnen till Marcus Andersson, som sedan 2015 arbetat nära Lisa med att arrangera tävlingen. Planen var att ta AIM Challenge vidare och göra det tillgängligt för fler genom fler deltävlingar och en geografisk förflyttning närmare större städer."
              tag="p"
              className="historien-om-aim-text"
            />

            <EditableText
              textKey="historien-om-aim-pandemic"
              defaultText="Starten blev dock tuff. Pandemin slog till och tävlingarna fick ställas in eller anpassas efter restriktioner. Men ur utmaningen föddes något nytt, AIM Home Challenge. Ett digitalt koncept som höll liv i tävlingskänslan våren 2020 och gav deltagare ett sätt att aktivera sig på hemmaplan."
              tag="p"
              className="historien-om-aim-text"
            />

            <EditableText
              textKey="historien-om-aim-ulricehamn"
              defaultText="När restriktionerna lättade arrangerades den första upplagan av AIM Challenge i Ulricehamn hösten 2021. Med sina fina grusvägar och kuperade skogar blev platsen en direkt favorit. Samtidigt introducerades en ny tävlingsklass på tre timmar, ett viktigt steg mot att göra multisport mer tillgängligt för fler."
              tag="p"
              className="historien-om-aim-text"
            />

            <EditableText
              textKey="historien-om-aim-growth"
              defaultText="Sedan dess har AIM Challenge fortsatt att växa. Ulricehamn har blivit ett uppskattat och återkommande inslag i tävlingskalendern. Och under hösten 2024 etablerades ytterligare en deltävling, den här gången i Kolmården. Med sin unika natur, närhet till havet och vilda terräng sticker Kolmården ut som en plats där både tävlingsnerv och naturskönhet möts på bästa sätt."
              tag="p"
              className="historien-om-aim-text"
            />

            <EditableText
              textKey="historien-om-aim-conclusion"
              defaultText="AIM Challenge står idag starkare än någonsin, men grundidén är fortfarande densamma. Att multisport ska vara något alla kan uppleva, på sina egna villkor."
              tag="p"
              className="historien-om-aim-text"
            />
          </div>
        </div>
      </section>

      {/* Background Image Section - Full width and height */}
      <div className="locked-background background-editable" id="historien-om-aim-background-image"></div>
    </div>
    </>
  );
};

export default HistorienOmAim;
