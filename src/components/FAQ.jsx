import React, { useState } from 'react';
import '../styles/index.css';

// FAQ item component with collapsible functionality
const FAQItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);
    
    const toggleOpen = () => {
        setIsOpen(!isOpen);
    };
    
    return (
        <div className="faq-item">
            <div 
                className={`faq-question ${isOpen ? 'active' : ''}`} 
                onClick={toggleOpen}
            >
                <h3 className="question-text">{question}</h3>
                <span className="icon">{isOpen ? '▲' : '▼'}</span>
            </div>
            <div className={`faq-answer ${isOpen ? 'open' : ''}`}>
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
                <FAQItem 
                    key={index} 
                    question={item.question} 
                    answer={item.answer} 
                />
            ))}
        </div>
    );
};

const FAQ = () => {
    // FAQ data organized by categories
    const generalFAQs = [
        {
            question: "Jag är nybörjare på multisport, kan jag delta?",
            answer: "Absolut, det är DU som väljer väg och antal kontroller. Ta 5 kontroller och ha en fin tur på fjället, eller ta 40 och vinn. Alla kan delta efter egen förmåga och ambition."
        },
        {
            question: "Behöver man vara en riktigt stenhård multisportare för att delta?",
            answer: "Det finns inga krav på förkunskaper om de olika momenten utan vi har kunnig personal vid varje post som innebär klättring, firning, simning etc. I och med AIM-konceptet så tar varje lag tävlingen i sin egen takt och sin egen strategi. Visst finns det de lag som satsar allt för att knipa segern och det är det som är det roliga med konceptet. Elit och motionär tävlar på samma villkor på samma bana."
        },
        {
            question: "Är det olika klasser?",
            answer: "Dam, Herr och Mix. Elit och motion tävlar i samma klass."
        },
        {
            question: "Vilken åldersgräns gäller?",
            answer: "Åldersgränsen för AIM Challenge är 15/18 år beroende på tävling och medtävlande. Läs mer här."
        },
        {
            question: "Kan jag ändra information om mitt lag. Tex ändrar lagnamn eller deltagare?",
            answer: "Ja, logga in på ditt RaceID-konto för att göra ändringar."
        },
        {
            question: "Om jag blir sjuk, får jag tillbaka min anmälningsavgift då?",
            answer: "Nej. Det går däremot bra att sälja sin startplats till en kompis. Vid försäljning så uppdaterar ni era uppgifter på ditt RaceID-konto. Alternativt ta kontakt med ditt försäkringsbolag för att se vad det täcker."
        },
        {
            question: "Hur vet jag om jag har olycksförsäkring?",
            answer: "Kontakta ditt försäkringsbolag, de flesta har den redan."
        }
    ];
    
    const equipmentFAQs = [
        {
            question: "Ska jag tävla med löpskor eller cykelskor?",
            answer: "Det är en fördel att cykla med SPD sko, och det är en fördel att springa med löparskor. Ta med både och!"
        },
        {
            question: "Behöver man ha all utrustning med sig?",
            answer: "Nej. Deltagare ska ha med sig cykel, hjälm, första hjälpen och mobiltelefon. Vid en klätterkontroll finns kunnig personal med all nödvändig utrustning, de säkrar deltagarna och ser till att klättringen går säkert till. Vid en paddel kontroll finns det kanot, SUP, luftmadrass eller liknande. Skulle man inte ha en mountainbike går det bra att hyra och detta bör i så fall förbokas."
        },
        {
            question: "Får man använda sig av GPS?",
            answer: "Ja, det är tillåtet att använda en GPS. Det är dock inte alltid det bästa eftersom det är kartan som gäller och GPSen och kartans information kan skilja sig åt."
        }
    ];
    
    const raceDayFAQs = [
        {
            question: "Om jag inte hinner till registreringen på fredag kväll, vad gör jag då?",
            answer: "Det finns möjlighet för registrering på lördag morgon innan start, dock ser vi helst att all registrering sker under fredag kvällen."
        },
        {
            question: "Ingår banketten i priset?",
            answer: "Nej, den får man köpa vid sidan om. Se respektive tävling för bokning av mat. Men prisutdelningen som följer efter banketten är gratis för alla deltagare."
        },
        {
            question: "Vilka tider är det som gäller för själva tävlandet?",
            answer: "Program: Fredagen: Registrering 17:00-21:00 i Lindvallen & 19.00-22.00 i Hemsedal. Lördagen: 9.30 Info möte vid start, 10.00 START, 16.00 MÅL. 22.00 PRISUTDELNING. Söndagen: Väl förtjänad sovmorgon och en härlig dag på fjället! Se detaljerat program under de enskilda tävlingarna."
        }
    ];

    const technicalFAQs = [
        {
            question: "Hur ser kartan ut?",
            answer: "Kartan får alla lagen när startskottet går. Där är samtliga kontroller utmärkta med position, poäng, beskrivning och om kontrollen innefattar klättring, paddling etc. Skalan är ungefär 1:30 000. Varje år är ett nytt år och därför en ny bansträckning. Kontrollernas position varierar från år till år så den strategi man hade året innan kanske inte lönar sig i år."
        },
        {
            question: "Måste både deltagarna simma/klättra/rappellera till en kontroll?",
            answer: "Lagen ska alltid hålla ihop och ska under hela tävlingen kunna kommunicera med varandra. Utom på de kontroller som vi kallar bemannade kontroller, dvs simma, paddla, klättra, balansera och rappelera. Här räcker det att den ena i laget tar posten. Både deltagarna ska dock vara så nära varandra som möjligt vid dessa poster."
        },
        {
            question: "Rappellering och klättring - hur goda bakgrundskunskaper måste man ha för att ställa upp?",
            answer: "Vid varje bemannad post finns det personal som är kunniga och med riktig utrustning. Lite erfarenhet ifrån klättring hjälper men är inte nödvändigt. Man behöver ingen kunskap om säkerhet."
        },
        {
            question: "Vilka regler gäller?",
            answer: "De regler som gäller för anmälan och under tävling finner du här >>"
        }
    ];

    return (
        <div className="flex flex_col faq-container">
            {/* Header Section */}
            <section className="page_01 dynamic-background flex flex_col flex_j_E">
                <div className="trans-background page_01box flex flex_col flex_j_SA">
                    <div className="om-oss-title flex flex_j_C flex_a_C">
                        <p className="font_blue fonts_huge font_white">FAQ</p>
                    </div>
                </div>
            </section>

            {/* General FAQ Section - Dark Background */}
            <section className="faq-section faq-dark-section">
                <div className="faq-content-container">
                    <div className="faq-content">
                        <h1 className="faq-heading">Vanliga frågor</h1>
                        <FAQCategory 
                            title="Allmänna frågor" 
                            items={generalFAQs} 
                        />
                    </div>
                </div>
            </section>

            {/* Equipment FAQ Section - Light Background */}
            <section className="faq-section faq-light-section">
                <div className="faq-content-container">
                    <div className="faq-content">
                        <FAQCategory 
                            title="Utrustning" 
                            items={equipmentFAQs} 
                        />
                    </div>
                </div>
            </section>

            {/* Race Day FAQ Section - Dark Background */}
            <section className="faq-section faq-dark-section">
                <div className="faq-content-container">
                    <div className="faq-content">
                        <FAQCategory 
                            title="Tävlingsdagen" 
                            items={raceDayFAQs} 
                        />
                    </div>
                </div>
            </section>

            {/* Technical FAQ Section - Light Background */}
            <section className="faq-section faq-light-section">
                <div className="faq-content-container">
                    <div className="faq-content">
                        <FAQCategory 
                            title="Teknisk information" 
                            items={technicalFAQs} 
                        />
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="faq-section faq-dark-section">
                <div className="faq-content-container">
                    <div className="faq-content">
                        <div className="faq-category">
                            <h2 className="faq-category-title">Har du fler frågor?</h2>
                            <div className="flex flex_j_C flex_a_C">
                                <p className="faq-contact-text">
                                    Ta gärna kontakt om ni inte hittar svaret på era frågor: <a href="mailto:info@aimchallenge.com" className="font_white">info@aimchallenge.com</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Background Image Section */}
            <div className="locked-background" style={{ height: '50vh', width: '100%' }}>
            </div>
        </div>
    );
};

export default FAQ;
