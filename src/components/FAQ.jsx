import React, { useState, useEffect } from "react";
import EditableText from "./EditableText";
import BackgroundEditor from "./BackgroundEditor";
import { useText } from "../context/TextContext";
import { useAuth } from "../context/AuthContext";
import FAQEditor from "./FAQEditor";
import { db } from "../firebase/config";
import { collection, getDocs, query, where, orderBy } from "firebase/firestore";
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
const FAQCategory = ({ title, items, categoryKey, showEditor = false }) => {
  const { isAuthenticated, currentUser } = useAuth();
  const isAdmin = currentUser?.role === "admin";
  
  return (
    <div className="faq-category">
      <h2 className="faq-category-title">
        <EditableText textKey={`faq-category-${categoryKey}`} defaultText={title} />
      </h2>
      {items.map((item, index) => (
        <FAQItem key={item.id || index} question={item.question} answer={item.answer} />
      ))}
      {isAdmin && showEditor && <FAQEditor category={categoryKey} />}
    </div>
  );
};

const FAQ = () => {
  const { getText } = useText();
  const { isAuthenticated, currentUser } = useAuth();
  const isAdmin = currentUser?.role === "admin";
  
  const [generalFAQs, setGeneralFAQs] = useState([]);
  const [equipmentFAQs, setEquipmentFAQs] = useState([]);
  const [raceDayFAQs, setRaceDayFAQs] = useState([]);
  const [technicalFAQs, setTechnicalFAQs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showEditors, setShowEditors] = useState(false);

  // Load FAQs from Firebase
  useEffect(() => {
    const loadFAQs = async () => {
      try {
        setIsLoading(true);
        const faqCollection = collection(db, "faqs");
        const snapshot = await getDocs(faqCollection);
        
        const loadedFaqs = [];
        snapshot.forEach((doc) => {
          const data = doc.data();
          loadedFaqs.push({
            id: doc.id,
            question: data.question,
            answer: data.answer,
            category: data.category,
            order: data.order || 0
          });
        });
        
        // If no FAQs exist in Firestore yet, initialize with default data
        if (loadedFaqs.length === 0) {
          // Use default FAQs (will be added to Firestore by the FAQEditor when admin adds/edits)
          setGeneralFAQs([
            {
              question: getText("general-question-0", "Jag är nybörjare på multisport, kan jag delta?"),
              answer: getText("general-answer-0", "Absolut, det är DU som väljer väg och antal kontroller. Ta 5 kontroller och ha en fin tur på fjället, eller ta 40 och vinn. Alla kan delta efter egen förmåga och ambition."),
            },
            {
              question: getText("general-question-1", "Hur ser tävlingen ut?"),
              answer: getText("general-answer-1", "Tävlingen går ut på att samla så många kontroller som möjligt inom 6 timmar. Kontrollerna är värda olika poäng, ju svårare att nå desto högre poäng. Vissa kontroller innebär aktiviteter som klättring, paddling, simning, rappellering och balansövningar. Lagen bestämmer själva vilka kontroller de vill ta och i vilken ordning."),
            },
            {
              question: getText("general-question-2", "Vilka klasser finns det?"),
              answer: getText("general-answer-2", "Dam, Herr och Mix. Dessutom har vi en Elcykelklass i Hemsedal. Alla klasser är 2-manna lag."),
            },
          ]);
          
          setEquipmentFAQs([
            {
              question: getText("equipment-question-0", "Vilken utrustning behöver jag?"),
              answer: getText("equipment-answer-0", "Obligatorisk utrustning: Cykel, cykelhjälm, mobiltelefon (1 per lag), första hjälpen (1 per lag). Vi rekommenderar även: Förstärkningskläder, kompass, vatten, energibars, klocka, löparskor, cykelslang och reparationskit."),
            },
          ]);
          
          setRaceDayFAQs([
            {
              question: getText("raceday-question-0", "Hur fungerar starten?"),
              answer: getText("raceday-answer-0", "Alla lag startar samtidigt kl 10.00 på lördagen efter ett obligatoriskt informationsmöte kl 9.30. Vid starten får lagen kartan med alla kontroller markerade."),
            },
          ]);
          
          setTechnicalFAQs([
            {
              question: getText("technical-question-0", "Hur ser kartan ut?"),
              answer: getText("technical-answer-0", "Kartan får alla lagen när startskottet går. Där är samtliga kontroller utmärkta med position, poäng, beskrivning och om kontrollen innefattar klättring, paddling etc."),
            },
          ]);
        } else {
          // Group FAQs by category
          const general = loadedFaqs.filter(faq => faq.category === "general").sort((a, b) => a.order - b.order);
          const equipment = loadedFaqs.filter(faq => faq.category === "equipment").sort((a, b) => a.order - b.order);
          const raceDay = loadedFaqs.filter(faq => faq.category === "raceday").sort((a, b) => a.order - b.order);
          const technical = loadedFaqs.filter(faq => faq.category === "technical").sort((a, b) => a.order - b.order);
          
          setGeneralFAQs(general);
          setEquipmentFAQs(equipment);
          setRaceDayFAQs(raceDay);
          setTechnicalFAQs(technical);
        }
      } catch (error) {
        console.error("Error loading FAQs:", error);
      } finally {
        setIsLoading(false);
      }
    };

    loadFAQs();
  }, []);
  
  const toggleEditors = () => {
    setShowEditors(!showEditors);
  };

  return (
    <>
      <BackgroundEditor key="faq-background-editor" />
      <div className="faq-container">
        {/* Hero Section with Image */}
        <section className="faq-hero-section">
          <div className="hero-content">
            <div className="hero-image-container background-editable" id="faq-hero-image">
              <img
                src="/images/AIM_lindvallen_2024_AnkiGrothe_highres_125.jpg"
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
              <EditableText
                textKey="faq-heading"
                defaultText="Vanliga frågor"
                tag="h2"
                className="faq-heading"
              />
              
              {isAdmin && (
                <div className="admin-controls">
                  <button 
                    onClick={toggleEditors} 
                    className="toggle-editors-button"
                  >
                    {showEditors ? "Dölj redigerare" : "Visa redigerare"}
                  </button>
                </div>
              )}

              {isLoading ? (
                <p>Laddar vanliga frågor...</p>
              ) : (
                <>
                  <FAQCategory 
                    title="Allmänna frågor" 
                    categoryKey="general" 
                    items={generalFAQs} 
                    showEditor={showEditors}
                  />
                  <FAQCategory 
                    title="Utrustning" 
                    categoryKey="equipment" 
                    items={equipmentFAQs} 
                    showEditor={showEditors}
                  />
                  <FAQCategory 
                    title="Tävlingsdagen" 
                    categoryKey="raceday" 
                    items={raceDayFAQs} 
                    showEditor={showEditors}
                  />
                  <FAQCategory 
                    title="Teknisk information" 
                    categoryKey="technical" 
                    items={technicalFAQs} 
                    showEditor={showEditors}
                  />
                </>
              )}

              <div className="faq-contact">
                <EditableText
                  textKey="faq-contact-title"
                  defaultText="Har du fler frågor?"
                  tag="h2"
                  className="faq-category-title"
                />
                <EditableText
                  textKey="faq-contact-text"
                  defaultText="Ta gärna kontakt om ni inte hittar svaret på era frågor: info@aimchallenge.com"
                  tag="p"
                  className=""
                />
              </div>
            </div>
          </div>
        </section>

        {/* Background Image Section */}
        <div className="locked-background background-editable" id="faq-background-image"></div>
      </div>
    </>
  );
};

export default FAQ;
