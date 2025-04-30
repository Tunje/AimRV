import React, { useState } from "react";
import EditableText from "./EditableText";
import EditableImage from "./EditableImage";
import "../styles/index.css";

// FAQ item component with collapsible functionality
const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="faq-item">
      <div
        className={`faq-question ${isOpen ? "active" : ""}`}
        onClick={toggleOpen}
      >
        <h3 className="question-text">{question}</h3>
        <span className="icon">{isOpen ? "▲" : "▼"}</span>
      </div>
      <div className={`faq-answer ${isOpen ? "open" : ""}`}>
        <p>{answer}</p>
      </div>
    </div>
  );
};

// FAQ category component to group related questions
const FAQCategory = ({ title, items }) => {
  return (
    <div className="faq-category">
      <h2 className="faq-category-title">{title}</h2>
      {items.map((item, index) => (
        <FAQItem key={index} question={item.question} answer={item.answer} />
      ))}
    </div>
  );
};

const FAQ = () => {
  // FAQ data organized by categories
  const generalFAQs = [
    {
      question: "Jag är nybörjare på multisport, kan jag delta?",
      answer:
        "Absolut, det är DU som väljer väg och antal kontroller. Ta 5 kontroller och ha en fin tur på fjället, eller ta 40 och vinn. Alla kan delta efter egen förmåga och ambition.",
    },
    {
      question: "Hur ser tävlingen ut?",
      answer:
        "Tävlingen går ut på att samla så många kontroller som möjligt inom 6 timmar. Kontrollerna är värda olika poäng, ju svårare att nå desto högre poäng. Vissa kontroller innebär aktiviteter som klättring, paddling, simning, rappellering och balansövningar. Lagen bestämmer själva vilka kontroller de vill ta och i vilken ordning.",
    },
    {
      question: "Vilka klasser finns det?",
      answer:
        "Dam, Herr och Mix. Dessutom har vi en Elcykelklass i Hemsedal. Alla klasser är 2-manna lag.",
    },
    {
      question: "Vad kostar det?",
      answer:
        "Anmälningsavgiften är 1695 SEK/1695 NOK per person. Då ingår tävlingsdeltagande, karta, nummerlappar, lunch, dusch, bastu, middag, prisutdelning och en oförglömlig upplevelse.",
    },
    {
      question: "Vilka tider är det som gäller för själva tävlandet?",
      answer:
        "Program: Fredagen: Registrering 17:00-21:00 i Lindvallen & 19.00-22.00 i Hemsedal. Lördagen: 9.30 Info möte vid start, 10.00 START, 16.00 MÅL. 22.00 PRISUTDELNING. Söndagen: Väl förtjänad sovmorgon och en härlig dag på fjället! Se detaljerat program under de enskilda tävlingarna.",
    },
  ];

  const equipmentFAQs = [
    {
      question: "Vilken utrustning behöver jag?",
      answer:
        "Obligatorisk utrustning: Cykel, cykelhjälm, mobiltelefon (1 per lag), första hjälpen (1 per lag). Vi rekommenderar även: Förstärkningskläder, kompass, vatten, energibars, klocka, löparskor, cykelslang och reparationskit. All utrustning för bemannade kontroller (kanot, SUP, sele, rep, hjälm) tillhandahålls av AIM Challenge.",
    },
    {
      question: "Vilken typ av cykel rekommenderas?",
      answer:
        "En mountainbike är att föredra då delar av banan går på stigar och i terräng. Elcyklar är endast tillåtna i Elcykelklassen i Hemsedal.",
    },
    {
      question: "Behöver jag ha med mig mat och dryck?",
      answer:
        "Ja, det rekommenderas att ha med sig vatten och energirik mat för att orka hela tävlingen. Det finns ingen service ute på banan.",
    },
  ];

  const raceDayFAQs = [
    {
      question: "Hur fungerar starten?",
      answer:
        "Alla lag startar samtidigt kl 10.00 på lördagen efter ett obligatoriskt informationsmöte kl 9.30. Vid starten får lagen kartan med alla kontroller markerade.",
    },
    {
      question: "Vad händer om jag kommer sent i mål?",
      answer:
        "För varje påbörjad minut efter målgång kl 16.00 dras 10 poäng av från lagets totala poäng. Efter 30 minuter (kl 16.30) är laget diskvalificerat.",
    },
    {
      question: "Vad händer om vi bryter tävlingen?",
      answer:
        "Om ni bryter tävlingen måste ni meddela tävlingsledningen omedelbart. Telefonnummer finns på kartan.",
    },
  ];

  const technicalFAQs = [
    {
      question: "Hur ser kartan ut?",
      answer:
        "Kartan får alla lagen när startskottet går. Där är samtliga kontroller utmärkta med position, poäng, beskrivning och om kontrollen innefattar klättring, paddling etc. Skalan är ungefär 1:30 000. Varje år är ett nytt år och därför en ny bansträckning. Kontrollernas position varierar från år till år så den strategi man hade året innan kanske inte lönar sig i år.",
    },
    {
      question:
        "Måste både deltagarna simma/klättra/rappellera till en kontroll?",
      answer:
        "Lagen ska alltid hålla ihop och ska under hela tävlingen kunna kommunicera med varandra. Utom på de kontroller som vi kallar bemannade kontroller, dvs simma, paddla, klättra, balansera och rappelera. Här räcker det att den ena i laget tar posten. Både deltagarna ska dock vara så nära varandra som möjligt vid dessa poster.",
    },
    {
      question:
        "Rappellering och klättring - hur goda bakgrundskunskaper måste man ha för att ställa upp?",
      answer:
        "Vid varje bemannad post finns det personal som är kunniga och med riktig utrustning. Lite erfarenhet ifrån klättring hjälper men är inte nödvändigt. Man behöver ingen kunskap om säkerhet.",
    },
    {
      question: "Vilka regler gäller?",
      answer:
        "De regler som gäller för anmälan och under tävling finner du här >>",
    },
  ];

  return (
    <div className="faq-container">
      {/* Hero Section with Image */}
      <section className="faq-hero-section">
        <div className="hero-content">
          <div className="hero-image-container">
            <EditableImage
              imageKey="faq-hero-image"
              defaultSrc="/images/AIM_lindvallen_2024_AnkiGrothe_highres_125.jpg"
              alt="FAQ Hero"
            />
          </div>
        </div>
      </section>

      {/* Title Section */}
      <section className="faq-title-section">
        <div className="title-container">
          <EditableText
            textKey="faq-title"
            defaultText="FAQ"
            tag="h1"
            className="location-title"
          />
        </div>
      </section>

      {/* FAQ Content Section */}
      <section className="faq-content-section">
        <div className="faq-content-container">
          <div className="faq-content">
            <h2 className="faq-heading">Vanliga frågor</h2>

            <FAQCategory title="Allmänna frågor" items={generalFAQs} />
            <FAQCategory title="Utrustning" items={equipmentFAQs} />
            <FAQCategory title="Tävlingsdagen" items={raceDayFAQs} />
            <FAQCategory title="Teknisk information" items={technicalFAQs} />

            <div className="faq-contact">
              <h2 className="faq-category-title">Har du fler frågor?</h2>
              <p>
                Ta gärna kontakt om ni inte hittar svaret på era frågor:{" "}
                <a href="mailto:info@aimchallenge.com">info@aimchallenge.com</a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Background Image Section */}
      <div className="locked-background"></div>
    </div>
  );
};

export default FAQ;
