import React from 'react';
import EditableText from './EditableText';

const Salen = () => {
    return (
        <div className="flex flex_col">
            <section className="page_01 dynamic-background flex flex_col flex_j_E">
                <div className="trans-background page_01box flex flex_col flex_j_SA">
                    <EditableText 
                        textKey="salen-title" 
                        defaultText="SÄLEN" 
                        tag="p" 
                        className="font_blue fonts_huge" 
                    />
                    <EditableText 
                        textKey="salen-date" 
                        defaultText="2/8-2024" 
                        tag="p" 
                        className="font_blue fonts_medium" 
                    />
                </div>
            </section>
            <section className="salen-button-section-bg flex flex_j_C flex_a_C">
                <a href="https://raceid.com/sv/races/13016/about" target="_blank" rel="noopener noreferrer" className="salen-button flex flex_j_C flex_a_C">
                    <p className="font_white fonts_medium">TA MIG TILL ANMÄLAN</p>
                </a>
            </section>

            {/* Program Section */}
            <section className="salen-section salen-bg-1 flex flex_j_C flex_a_C">
                <div className="salen-content trans-background MaxWH flex flex_col flex_j_C">
                    <EditableText 
                        textKey="salen-program-title" 
                        defaultText="PROGRAM" 
                        tag="p" 
                        className="font_blue fonts_large" 
                    />
                    <EditableText 
                        textKey="salen-program-subtitle" 
                        defaultText="PRELIMINÄRT PROGRAM:" 
                        tag="p" 
                        className="font_blue fonts_medium" 
                    />
                    
                    <div className="font_blue">
                        <EditableText 
                            textKey="salen-friday-title" 
                            defaultText="FREDAG 1 AUGUSTI" 
                            tag="p" 
                            className="fonts_medium" 
                        />
                        <EditableText 
                            textKey="salen-friday-schedule" 
                            defaultText="17:00 - 20:00 Nummerlappsutdelning för alla tävlande på SkiStarshop Concept Store på Handelsområdet Lindvallen." 
                            tag="p" 
                            className="fonts_xsmall salen-time-entry" 
                        />
                    </div>

                    <div className="font_blue">
                        <EditableText 
                            textKey="salen-saturday-title" 
                            defaultText="LÖRDAG 2 AUGUSTI" 
                            tag="p" 
                            className="fonts_medium" 
                        />
                        <EditableText 
                            textKey="salen-saturday-schedule1" 
                            defaultText="08:30-09:00 Nummerlappsutdelning i konferenslokal ovanför Stadium" 
                            tag="p" 
                            className="fonts_xsmall salen-time-entry" 
                        />
                        <EditableText 
                            textKey="salen-saturday-schedule2" 
                            defaultText="09:30 Obligatoriskt infomöte vid starten" 
                            tag="p" 
                            className="fonts_xsmall salen-time-entry" 
                        />
                        <EditableText 
                            textKey="salen-saturday-schedule3" 
                            defaultText="10:00 START! Start/målområde vid Experiumtorget." 
                            tag="p" 
                            className="fonts_xsmall salen-time-entry" 
                        />
                        <EditableText 
                            textKey="salen-saturday-schedule4" 
                            defaultText="15:30 After AIM på Lodgebaren på SkiStar Lodge Lindvallen" 
                            tag="p" 
                            className="fonts_xsmall salen-time-entry" 
                        />
                        <EditableText 
                            textKey="salen-saturday-schedule5" 
                            defaultText="16:00 Målgång AIM Challenge." 
                            tag="p" 
                            className="fonts_xsmall salen-time-entry" 
                        />
                        <EditableText 
                            textKey="salen-saturday-schedule6" 
                            defaultText="xx:00 Prisutdelning i Lodgebaren" 
                            tag="p" 
                            className="fonts_xsmall salen-time-entry" 
                        />
                    </div>
                </div>
                <div className="salen-spacer MaxWH"></div>
            </section>

            {/* Pris Section */}
            <section className="salen-section salen-bg-2 flex flex_j_C flex_a_C">
                <div className="salen-spacer MaxWH"></div>
                <div className="salen-content trans-background MaxWH flex flex_col flex_j_C">
                    <EditableText 
                        textKey="salen-pris-title" 
                        defaultText="PRIS" 
                        tag="p" 
                        className="font_blue fonts_large" 
                    />
                    
                    <div className="font_blue">
                        <EditableText 
                            textKey="salen-pris-salen-title" 
                            defaultText="SÄLEN" 
                            tag="p" 
                            className="fonts_medium" 
                        />
                        <a href="https://raceid.com/sv/races/13016/about" target="_blank" rel="noopener noreferrer">
                            <EditableText 
                                textKey="salen-date" 
                                defaultText="2/8-2024" 
                                tag="p" 
                                className="fonts_medium" 
                            />
                        </a>
                        <EditableText 
                            textKey="salen-pris-salen-price1" 
                            defaultText="1900 SEK / lag för Early Bird-anmälan innan 1 januari." 
                            tag="p" 
                            className="fonts_xsmall salen-time-entry" 
                        />
                        <EditableText 
                            textKey="salen-pris-salen-price2" 
                            defaultText="2100 SEK / lag för anmälan mellan 1 januari och 1 april." 
                            tag="p" 
                            className="fonts_xsmall salen-time-entry" 
                        />
                        <EditableText 
                            textKey="salen-pris-salen-price3" 
                            defaultText="2300 SEK / lag för anmälan mellan 2 april och 18 juli" 
                            tag="p" 
                            className="fonts_xsmall salen-time-entry" 
                        />
                        <EditableText 
                            textKey="salen-pris-salen-price4" 
                            defaultText="2500 SEK / lag för anmälan från 19 juli och fram till start." 
                            tag="p" 
                            className="fonts_xsmall salen-time-entry" 
                        />
                    </div>

                    <div className="font_blue">
                        <EditableText 
                            textKey="salen-pris-trippeln-title" 
                            defaultText="AIM CHALLENGE TRIPPELN 2025" 
                            tag="p" 
                            className="fonts_medium" 
                        />
                        <EditableText 
                            textKey="salen-pris-trippeln-price1" 
                            defaultText="4750 SEK / lag för Early Bird-anmälan innan 1 januari." 
                            tag="p" 
                            className="fonts_xsmall salen-time-entry" 
                        />
                        <EditableText 
                            textKey="salen-pris-trippeln-price2" 
                            defaultText="5250 SEK / lag för anmälan mellan 1 januari och 1 februari." 
                            tag="p" 
                            className="fonts_xsmall salen-time-entry" 
                        />
                        <EditableText 
                            textKey="salen-pris-trippeln-price3" 
                            defaultText="5750 SEK / lag för anmälan mellan 2 februari och 25 april." 
                            tag="p" 
                            className="fonts_xsmall salen-time-entry" 
                        />
                        <EditableText 
                            textKey="salen-pris-trippeln-price4" 
                            defaultText="6250 SEK / lag för anmälan efter den 26 april." 
                            tag="p" 
                            className="fonts_xsmall salen-time-entry" 
                        />
                    </div>

                    <div className="font_blue">
                        <EditableText 
                            textKey="salen-pris-landskampen-title" 
                            defaultText="LANDSKAMPEN = LINDVALLEN OCH HEMSEDAL" 
                            tag="p" 
                            className="fonts_medium" 
                        />
                        <EditableText 
                            textKey="salen-pris-landskampen-price1" 
                            defaultText="3400 SEK/ lag för anmälan innan 1 maj." 
                            tag="p" 
                            className="fonts_xsmall salen-time-entry" 
                        />
                        <EditableText 
                            textKey="salen-pris-landskampen-price2" 
                            defaultText="3800 SEK/ lag för anmälan mellan 1 maj och 1 juli." 
                            tag="p" 
                            className="fonts_xsmall salen-time-entry" 
                        />
                        <EditableText 
                            textKey="salen-pris-landskampen-price3" 
                            defaultText="4200 SEK/ lag för anmälan från 1 juli och framåt." 
                            tag="p" 
                            className="fonts_xsmall salen-time-entry" 
                        />
                    </div>
                    <a href="https://raceid.com/sv/races/13014/about" target="_blank" rel="noopener noreferrer" className="button-2 salen-button-align flex flex_s">
                        <p className="font_blue fonts_medium">ANMÄLAN</p>
                    </a>
                </div>
            </section>

            {/* Övernattning och Mat Section */}
            <section className="salen-section salen-bg-3 flex flex_j_C flex_a_C">
                <div className="salen-content trans-background MaxWH flex flex_col flex_j_C">
                    <EditableText 
                        textKey="salen-overnattning-title" 
                        defaultText="ÖVERNATTNING OCH MAT" 
                        tag="p" 
                        className="font_blue fonts_large" 
                    />
                    
                    <div className="font_blue salen-text-block">
                        <EditableText 
                            textKey="salen-overnattning-overnattning-title" 
                            defaultText="ÖVERNATTNING" 
                            tag="p" 
                            className="fonts_medium" 
                        />
                        <EditableText 
                            textKey="salen-overnattning-overnattning-text" 
                            defaultText="Boende bokas enklast genom Skistar. För att komma direkt till bokningssida." 
                            tag="p" 
                            className="fonts_xsmall salen-time-entry" 
                        />
                    </div>

                    <div className="font_blue salen-text-block">
                        <EditableText 
                            textKey="salen-overnattning-mat-title" 
                            defaultText="MAT" 
                            tag="p" 
                            className="fonts_medium" 
                        />
                        <EditableText 
                            textKey="salen-overnattning-mat-text1" 
                            defaultText="Avslutningsmiddag på Lodgebaren." 
                            tag="p" 
                            className="fonts_xsmall salen-time-entry" 
                        />
                        <EditableText 
                            textKey="salen-overnattning-mat-text2" 
                            defaultText="Möjlighet för frukost på Lodgebaren." 
                            tag="p" 
                            className="fonts_xsmall salen-time-entry" 
                        />
                        <EditableText 
                            textKey="salen-overnattning-mat-text3" 
                            defaultText="Lodgebaren - Läs mer och boka bord" 
                            tag="p" 
                            className="fonts_xsmall salen-time-entry" 
                        />
                    </div>

                    <div className="font_blue salen-text-block">
                        <EditableText 
                            textKey="salen-overnattning-upplevelser-title" 
                            defaultText="UPPLEVELSER & AKTIVITETER" 
                            tag="p" 
                            className="fonts_medium" 
                        />
                        <EditableText 
                            textKey="salen-overnattning-upplevelser-text1" 
                            defaultText="Bad & Spa" 
                            tag="p" 
                            className="fonts_xsmall salen-time-entry" 
                        />
                        <EditableText 
                            textKey="salen-overnattning-upplevelser-text2" 
                            defaultText="Bowling" 
                            tag="p" 
                            className="fonts_xsmall salen-time-entry" 
                        />
                        <EditableText 
                            textKey="salen-overnattning-upplevelser-text3" 
                            defaultText="Höghöjdsbana" 
                            tag="p" 
                            className="fonts_xsmall salen-time-entry" 
                        />
                        <EditableText 
                            textKey="salen-overnattning-upplevelser-text4" 
                            defaultText="SkiStar Sports & Adventures" 
                            tag="p" 
                            className="fonts_xsmall salen-time-entry" 
                        />
                    </div>
                </div>
                <div className="salen-spacer MaxWH"></div>
            </section>
        </div>
    );
};

export default Salen;
