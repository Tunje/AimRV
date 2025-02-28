import React from 'react';
import { Link } from 'react-router-dom';

const OmOss = () => {
    return (
        <div className="flex flex_col">
            {/* Header Section */}
            <section className="page_01 dynamic-background flex flex_col flex_j_E">
                <div className="trans-background page_01box flex flex_col flex_j_SA">
                    <div className="om-oss-title flex flex_j_C flex_a_C">
                        <p className="font_blue fonts_huge">VAD ÄR AIM CHALLENGE?</p>
                    </div>
                </div>
            </section>

            {/* First Text Section with dark blue background */}
            <section className="om-oss-section flex flex_j_C flex_a_C set-03">
                <div className="om-oss-content MaxWH flex flex_col flex_j_C" style={{ color: '#ffffff' }}>
                    <div style={{ color: '#ffffff', maxWidth: '80%', margin: '0 auto', textAlign: 'left', paddingLeft: '10%', paddingRight: '10%', paddingTop: '30px', paddingBottom: '30px' }}>
                        <p className="fonts_small om-oss-text" style={{ color: '#ffffff' }}>
                            AIM Challenge är en multisport tävling som passar för alla.
                        </p>
                        <p className="fonts_small om-oss-text" style={{ color: '#ffffff' }}>
                            Lag på två personer ska under 6 timmar ta så många kontroller som möjligt utav 60 utplacerade.
                        </p>
                        <p className="fonts_small om-oss-text" style={{ color: '#ffffff' }}>
                            Olika kontroller ger olika poäng beroende på svårighetsgrad och det är omöjligt att ta alla.
                        </p>
                        <p className="fonts_small om-oss-text" style={{ color: '#ffffff' }}>
                            Många kontroller kan nås med cykel. Vissa kräver att deltagarna springer, klättrar, simmar, balanserar eller paddlar.
                        </p>
                        <p className="fonts_small om-oss-text" style={{ color: '#ffffff' }}>
                            ​
                        </p>
                        <p className="fonts_small om-oss-text" style={{ color: '#ffffff' }}>
                            Kartorna är hemliga fram till start. När starten går får varje lag en rulle som innehåller två kartor i riv och vattentåligt material. Både elit och motionärer kan delta. Lagen bestämmer sin egen rutt och väljer vilka kontroller man vill ta.
                        </p>
                        <p className="fonts_small om-oss-text" style={{ color: '#ffffff' }}>
                            ​
                        </p>
                        <p className="fonts_small om-oss-text" style={{ color: '#ffffff' }}>
                            Alltså en tävling på dina villkor!
                        </p>
                    </div>
                </div>
            </section>

            {/* Background Image Section */}
            <div className="locked-background" style={{ height: '50vh', width: '100%' }}>
            </div>

            {/* Second Text Section with dark blue background */}
            <section className="om-oss-section flex flex_j_C flex_a_C set-03">
                <div className="om-oss-content MaxWH flex flex_col flex_j_C" style={{ color: '#ffffff' }}>
                    <div style={{ color: '#ffffff', maxWidth: '80%', margin: '0 auto', textAlign: 'left', paddingLeft: '10%', paddingRight: '10%', paddingTop: '30px', paddingBottom: '30px' }}>
                        <h2 className="fonts_large" style={{ color: '#ffffff', textAlign: 'left', marginBottom: '20px' }}>Så här är det att vara med i AIM Challenge</h2>
                        
                        <p className="fonts_small om-oss-text" style={{ color: '#ffffff' }}>
                            AIM Challenge är en rolig tävling. Det är oftast det som är det centrala i de deltagarkommentarer vi får både från eliten och motionärerna. Man färdas till största delen med hjälp av sin mountainbike och sina löparskor, men också i klättersele, paddlandes i kanot eller så strippar man helt enkelt och simmar ut till kontroller som är i vattnet.
                        </p>
                        <p className="fonts_small om-oss-text" style={{ color: '#ffffff' }}>
                            ​
                        </p>
                        <p className="fonts_small om-oss-text" style={{ color: '#ffffff' }}>
                            Det finns inga krav på förkunskaper om de olika momenten utan vi har kunnig personal vid varje post som innefattas av klättring, firning, simning, paddling. Varje lag genomför tävlingen i sin egen takt och med egen strategi. Visst finns det de lag som satsar allt för att knipa segern och det är det som är det roliga med konceptet. Elit och motionär tävlar på samma villkor på samma bana.
                        </p>
                        <p className="fonts_small om-oss-text" style={{ color: '#ffffff' }}>
                            ​
                        </p>
                        <p className="fonts_small om-oss-text" style={{ color: '#ffffff' }}>
                            Våra deltagare är allt ifrån världseliten i multisport som Thule Adventure team, Team Silva, Team Multitude Salomon men också glada motionärer allt från åldrarna 15 till pensionärer. Oavsett ålder och fysiska förutsättningar är detta ett roligt och annorlunda sätt att tävla på.
                        </p>
                    </div>
                </div>
            </section>

            {/* Cards Section */}
            <section id="page_02" className="page_02 simple-background flex flex_j_E MaxWH location" style={{ width: '100vw', margin: '0', padding: '0' }}>
                {/* Card 1: Regler */}
                <div className="page_02box simple-background flex flex_col flex_j_SB MaxWH location" style={{ width: '33.33%', maxWidth: 'none' }}>
                    <div className="trans-background page_02top flex flex_col flex_j_SA MaxWH">
                        <p className="font_blue fonts_medium_B">REGLER</p>
                        <p className="font_blue fonts_medium">Tävlingsregler och information</p>
                    </div>
                    <div className="page_02top flex flex_col flex_j_SA MaxWH Button">
                        <Link to="/page2" className="location button-2">Läs mer</Link>
                    </div>
                </div>

                {/* Card 2: FAQ */}
                <div className="page_02box simple-background flex flex_col flex_j_SB MaxWH location" style={{ width: '33.33%', maxWidth: 'none' }}>
                    <div className="trans-background page_02top flex flex_col flex_j_SA MaxWH">
                        <p className="font_blue fonts_medium_B">FAQ</p>
                        <p className="font_blue fonts_medium">Vanliga frågor och svar</p>
                    </div>
                    <div className="page_02top flex flex_col flex_j_SA MaxWH Button">
                        <Link to="/page3" className="location button-2">Läs mer</Link>
                    </div>
                </div>

                {/* Card 3: Historien om AIM */}
                <div className="page_02box simple-background flex flex_col flex_j_SB MaxWH location" style={{ width: '33.33%', maxWidth: 'none' }}>
                    <div className="trans-background page_02top flex flex_col flex_j_SA MaxWH">
                        <p className="font_blue fonts_medium_B">HISTORIEN OM AIM</p>
                        <p className="font_blue fonts_medium">Vår resa sedan 2004</p>
                    </div>
                    <div className="page_02top flex flex_col flex_j_SA MaxWH Button">
                        <Link to="/page3" className="location button-2">Läs mer</Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default OmOss;
