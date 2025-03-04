import React from 'react';
import '../styles/index.css';
import '../styles/java/scripts.js';
import EditableText from './EditableText';

const Hemsedal = () => {
    return (
        <div className="MaxWH location">
            <section className="page_01 dynamic-background flex flex_col flex_j_E">
                <div className="trans-background page_01box flex flex_col flex_j_SA">
                    <EditableText 
                        textKey="hemsedal-title" 
                        defaultText="HEMSEDAL" 
                        tag="p" 
                        className="font_blue fonts_huge" 
                    />
                    <EditableText 
                        textKey="hemsedal-date" 
                        defaultText="datum insert" 
                        tag="p" 
                        className="font_blue fonts_medium" 
                    />
                </div>
            </section>
            <section className="hemsedal-button-section-bg flex flex_j_C flex_a_C">
                <a href="https://raceid.com/sv/races/13015/about" target="_blank" rel="noopener noreferrer" className="hemsedal-button flex flex_j_C flex_a_C">
                    <p className="font_white fonts_medium">TA MIG TILL ANMÄLAN</p>
                </a>
            </section>

            {/* Program Section */}
            <section className="hemsedal-section hemsedal-bg-1 flex flex_j_C flex_a_C">
                <div className="hemsedal-content trans-background MaxWH flex flex_col flex_j_C">
                    <EditableText 
                        textKey="hemsedal-program-title" 
                        defaultText="PROGRAM" 
                        tag="p" 
                        className="font_blue fonts_large" 
                    />
                    <EditableText 
                        textKey="hemsedal-program-subtitle" 
                        defaultText="PRELIMINÄRT PROGRAM:" 
                        tag="p" 
                        className="font_blue fonts_medium" 
                    />
                    
                    <div className="font_blue">
                        <EditableText 
                            textKey="hemsedal-friday-title" 
                            defaultText="FREDAG 23 AUGUSTI" 
                            tag="p" 
                            className="fonts_medium" 
                        />
                        <EditableText 
                            textKey="hemsedal-friday-schedule" 
                            defaultText="17:00 - 20:00 Nummerlappsutdelning för alla tävlande på SkiStarshop Hemsedal" 
                            tag="p" 
                            className="fonts_xsmall hemsedal-time-entry" 
                        />
                    </div>

                    <div className="font_blue">
                        <EditableText 
                            textKey="hemsedal-saturday-title" 
                            defaultText="LÖRDAG 24 AUGUSTI" 
                            tag="p" 
                            className="fonts_medium" 
                        />
                        <EditableText 
                            textKey="hemsedal-saturday-schedule1" 
                            defaultText="08:30-09:00 Nummerlappsutdelning vid starten" 
                            tag="p" 
                            className="fonts_xsmall hemsedal-time-entry" 
                        />
                        <EditableText 
                            textKey="hemsedal-saturday-schedule2" 
                            defaultText="09:30 Obligatoriskt infomöte vid starten" 
                            tag="p" 
                            className="fonts_xsmall hemsedal-time-entry" 
                        />
                        <EditableText 
                            textKey="hemsedal-saturday-schedule3" 
                            defaultText="10:00 START! Start/målområde vid Hemsedal Skisenter" 
                            tag="p" 
                            className="fonts_xsmall hemsedal-time-entry" 
                        />
                        <EditableText 
                            textKey="hemsedal-saturday-schedule4" 
                            defaultText="15:30 After AIM på Stavkroa" 
                            tag="p" 
                            className="fonts_xsmall hemsedal-time-entry" 
                        />
                        <EditableText 
                            textKey="hemsedal-saturday-schedule5" 
                            defaultText="16:00 Målgång AIM Challenge" 
                            tag="p" 
                            className="fonts_xsmall hemsedal-time-entry" 
                        />
                        <EditableText 
                            textKey="hemsedal-saturday-schedule6" 
                            defaultText="18:00 Prisutdelning på Stavkroa" 
                            tag="p" 
                            className="fonts_xsmall hemsedal-time-entry" 
                        />
                    </div>
                </div>
                <div className="hemsedal-spacer MaxWH"></div>
            </section>

            {/* Pris Section */}
            <section className="hemsedal-section hemsedal-bg-2 flex flex_j_C flex_a_C">
                <div className="hemsedal-spacer MaxWH"></div>
                <div className="hemsedal-content trans-background MaxWH flex flex_col flex_j_C">
                    <EditableText 
                        textKey="hemsedal-pris-title" 
                        defaultText="PRIS" 
                        tag="p" 
                        className="font_blue fonts_large" 
                    />
                    
                    <div className="font_blue">
                        <EditableText 
                            textKey="hemsedal-pris-date" 
                            defaultText="HEMSEDAL" 
                            tag="p" 
                            className="fonts_medium" 
                        />
                        <a href="https://raceid.com/sv/races/13015/about" target="_blank" rel="noopener noreferrer">
                            <EditableText 
                                textKey="hemsedal-date" 
                                defaultText="24/8-2024" 
                                tag="p" 
                                className="fonts_medium" 
                            />
                        </a>
                        <EditableText 
                            textKey="hemsedal-pris-price1" 
                            defaultText="1900 NOK / lag för Early Bird-anmälan innan 1 januari" 
                            tag="p" 
                            className="fonts_xsmall hemsedal-time-entry" 
                        />
                        <EditableText 
                            textKey="hemsedal-pris-price2" 
                            defaultText="2100 NOK / lag för anmälan mellan 1 januari och 1 april" 
                            tag="p" 
                            className="fonts_xsmall hemsedal-time-entry" 
                        />
                        <EditableText 
                            textKey="hemsedal-pris-price3" 
                            defaultText="2300 NOK / lag för anmälan mellan 2 april och 18 juli" 
                            tag="p" 
                            className="fonts_xsmall hemsedal-time-entry" 
                        />
                        <EditableText 
                            textKey="hemsedal-pris-price4" 
                            defaultText="2500 NOK / lag för anmälan från 19 juli och fram till start" 
                            tag="p" 
                            className="fonts_xsmall hemsedal-time-entry" 
                        />
                    </div>

                    <div className="font_blue">
                        <EditableText 
                            textKey="hemsedal-trippeln-title" 
                            defaultText="AIM CHALLENGE TRIPPELN 2025" 
                            tag="p" 
                            className="fonts_medium" 
                        />
                        <EditableText 
                            textKey="hemsedal-trippeln-price1" 
                            defaultText="4750 SEK / lag för Early Bird-anmälan innan 1 januari" 
                            tag="p" 
                            className="fonts_xsmall hemsedal-time-entry" 
                        />
                        <EditableText 
                            textKey="hemsedal-trippeln-price2" 
                            defaultText="5250 SEK / lag för anmälan mellan 1 januari och 1 februari" 
                            tag="p" 
                            className="fonts_xsmall hemsedal-time-entry" 
                        />
                        <EditableText 
                            textKey="hemsedal-trippeln-price3" 
                            defaultText="5750 SEK / lag för anmälan mellan 2 februari och 25 april" 
                            tag="p" 
                            className="fonts_xsmall hemsedal-time-entry" 
                        />
                        <EditableText 
                            textKey="hemsedal-trippeln-price4" 
                            defaultText="6250 SEK / lag för anmälan efter den 26 april" 
                            tag="p" 
                            className="fonts_xsmall hemsedal-time-entry" 
                        />
                    </div>

                    <div className="font_blue">
                        <EditableText 
                            textKey="hemsedal-landskampen-title" 
                            defaultText="LANDSKAMPEN = LINDVALLEN OCH HEMSEDAL" 
                            tag="p" 
                            className="fonts_medium" 
                        />
                        <EditableText 
                            textKey="hemsedal-landskampen-price1" 
                            defaultText="3400 SEK / lag för anmälan innan 1 maj" 
                            tag="p" 
                            className="fonts_xsmall hemsedal-time-entry" 
                        />
                        <EditableText 
                            textKey="hemsedal-landskampen-price2" 
                            defaultText="3800 SEK / lag för anmälan mellan 1 maj och 1 juli" 
                            tag="p" 
                            className="fonts_xsmall hemsedal-time-entry" 
                        />
                        <EditableText 
                            textKey="hemsedal-landskampen-price3" 
                            defaultText="4200 SEK / lag för anmälan från 1 juli och framåt" 
                            tag="p" 
                            className="fonts_xsmall hemsedal-time-entry" 
                        />
                    </div>
                    <a href="https://raceid.com/sv/races/13014/about" target="_blank" rel="noopener noreferrer" className="button-2 hemsedal-button-align flex flex_s">
                        <span className="font_white">ANMÄLAN</span>
                    </a>
                </div>
            </section>

            {/* Övernattning och Mat Section */}
            <section className="hemsedal-section hemsedal-bg-3 flex flex_j_C flex_a_C">
                <div className="hemsedal-content trans-background MaxWH flex flex_col flex_j_C">
                    <EditableText 
                        textKey="hemsedal-overnattning-title" 
                        defaultText="ÖVERNATTNING OCH MAT" 
                        tag="p" 
                        className="font_blue fonts_large" 
                    />
                    
                    <div className="font_blue hemsedal-text-block">
                        <EditableText 
                            textKey="hemsedal-overnattning-subtitle" 
                            defaultText="ÖVERNATTNING" 
                            tag="p" 
                            className="fonts_medium" 
                        />
                        <EditableText 
                            textKey="hemsedal-overnattning-info" 
                            defaultText="Boende bokas enklast genom Skistar. Klicka för att komma direkt till bokningssida." 
                            tag="p" 
                            className="fonts_xsmall hemsedal-time-entry" 
                        />
                        <EditableText 
                            textKey="hemsedal-cykeluthyrning-info" 
                            defaultText="Cykel kan hyras hos Concept Store. Klicka för att komma till bokningssida." 
                            tag="p" 
                            className="fonts_xsmall hemsedal-time-entry" 
                        />
                    </div>

                    <div className="font_blue hemsedal-text-block">
                        <EditableText 
                            textKey="hemsedal-mat-subtitle" 
                            defaultText="MAT" 
                            tag="p" 
                            className="fonts_medium" 
                        />
                        <EditableText 
                            textKey="hemsedal-mat-friday" 
                            defaultText="FREDAG:" 
                            tag="p" 
                            className="fonts_small" 
                        />
                        <EditableText 
                            textKey="hemsedal-mat-friday-info" 
                            defaultText="18:00 - 21:00 Italiensk pizza som Take Away - Beställ på plats på lodgen Spiseri eller ring +47 458 65 086. Meny kommer att läggas ut HÄR." 
                            tag="p" 
                            className="fonts_xsmall hemsedal-time-entry" 
                        />

                        <EditableText 
                            textKey="hemsedal-mat-saturday" 
                            defaultText="LÖRDAG:" 
                            tag="p" 
                            className="fonts_small" 
                        />
                        <EditableText 
                            textKey="hemsedal-mat-saturday-info1" 
                            defaultText="10:00 - 15:00 Cafe och lunchservering på Lodgen Spiseri" 
                            tag="p" 
                            className="fonts_xsmall hemsedal-time-entry" 
                        />
                        <EditableText 
                            textKey="hemsedal-mat-saturday-info2" 
                            defaultText="15:30-18:00 After AIM på Lodgen Spiseri. Viktigt att fylla på med vätska och energi efter målgång!" 
                            tag="p" 
                            className="fonts_xsmall hemsedal-time-entry" 
                        />
                        <EditableText 
                            textKey="hemsedal-mat-saturday-info3" 
                            defaultText="19:30 Bankettmiddag på Lodgen Spiseri. Bokas här." 
                            tag="p" 
                            className="fonts_xsmall hemsedal-time-entry" 
                        />

                        <EditableText 
                            textKey="hemsedal-mat-sunday" 
                            defaultText="SÖNDAG:" 
                            tag="p" 
                            className="fonts_small" 
                        />
                        <EditableText 
                            textKey="hemsedal-mat-sunday-info" 
                            defaultText="10:00 - 15:00 Cafe och lunchservering på Lodgen Spiseri" 
                            tag="p" 
                            className="fonts_xsmall hemsedal-time-entry" 
                        />
                    </div>

                    <div className="font_blue hemsedal-text-block">
                        <EditableText 
                            textKey="hemsedal-mat-info" 
                            defaultText="Lodgen Spiseri följer alla de nationella riktlinjerna för att ge dig en trygg och bra upplevelse." 
                            tag="p" 
                            className="fonts_xsmall" 
                        />
                    </div>
                </div>
                <div className="hemsedal-spacer MaxWH"></div>
            </section>
        </div>
    );
};

export default Hemsedal;
