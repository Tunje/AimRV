import React from 'react';
import '../styles/index.js';
import '../styles/java/scripts.js';
import '../styles/index.css';

const Hemsedal = () => {
    return (
        <div className="MaxWH location">
            <section className="page_01 dynamic-background flex flex_col flex_j_E">
                <div className="trans-background page_01box flex flex_col flex_j_SA">
                    <p className="font_blue fonts_huge">AIM CHALLENGE HEMSEDAL</p>
                </div>
            </section>
            <section className="hemsedal-button-section hemsedal-button-section-bg flex flex_j_C flex_a_C">
                <a href="https://raceid.com/sv/races/13014/about" target="_blank" rel="noopener noreferrer" className="hemsedal-button trans-background flex flex_j_C flex_a_C">
                    <p className="font_white fonts_medium">TA MIG TILL ANMÄLAN</p>
                </a>
            </section>

            {/* Program Section */}
            <section className="hemsedal-section hemsedal-bg-1 flex flex_j_C flex_a_C">
                <div className="hemsedal-content trans-background MaxWH flex flex_col flex_j_C">
                    <p className="font_blue fonts_large">PROGRAM</p>
                    <p className="font_blue fonts_medium">PRELIMINÄRT PROGRAM:</p>
                    
                    <div className="font_blue">
                        <p className="fonts_medium">FREDAG 23 AUGUSTI</p>
                        <p className="fonts_xsmall hemsedal-time-entry">17:00 - 20:00 Nummerlappsutdelning för alla tävlande på SkiStarshop Hemsedal</p>
                    </div>

                    <div className="font_blue">
                        <p className="fonts_medium">LÖRDAG 24 AUGUSTI</p>
                        <p className="fonts_xsmall hemsedal-time-entry">08:30-09:00 Nummerlappsutdelning vid starten</p>
                        <p className="fonts_xsmall hemsedal-time-entry">09:30 Obligatoriskt infomöte vid starten</p>
                        <p className="fonts_xsmall hemsedal-time-entry">10:00 START! Start/målområde vid Hemsedal Skisenter</p>
                        <p className="fonts_xsmall hemsedal-time-entry">15:30 After AIM på Stavkroa</p>
                        <p className="fonts_xsmall hemsedal-time-entry">16:00 Målgång AIM Challenge</p>
                        <p className="fonts_xsmall hemsedal-time-entry">18:00 Prisutdelning på Stavkroa</p>
                    </div>
                </div>
                <div className="hemsedal-spacer MaxWH"></div>
            </section>

            {/* Pris Section */}
            <section className="hemsedal-section hemsedal-bg-2 flex flex_j_C flex_a_C">
                <div className="hemsedal-spacer MaxWH"></div>
                <div className="hemsedal-content trans-background MaxWH flex flex_col flex_j_C">
                    <p className="font_blue fonts_large">PRIS</p>
                    
                    <div className="font_blue">
                        <p className="fonts_medium">HEMSEDAL 24/8-2024</p>
                        <p className="fonts_xsmall hemsedal-time-entry">1900 NOK / lag för Early Bird-anmälan innan 1 januari</p>
                        <p className="fonts_xsmall hemsedal-time-entry">2100 NOK / lag för anmälan mellan 1 januari och 1 april</p>
                        <p className="fonts_xsmall hemsedal-time-entry">2300 NOK / lag för anmälan mellan 2 april och 18 juli</p>
                        <p className="fonts_xsmall hemsedal-time-entry">2500 NOK / lag för anmälan från 19 juli och fram till start</p>
                    </div>

                    <div className="font_blue">
                        <p className="fonts_medium">AIM CHALLENGE TRIPPELN 2025</p>
                        <p className="fonts_xsmall hemsedal-time-entry">4750 SEK / lag för Early Bird-anmälan innan 1 januari</p>
                        <p className="fonts_xsmall hemsedal-time-entry">5250 SEK / lag för anmälan mellan 1 januari och 1 februari</p>
                        <p className="fonts_xsmall hemsedal-time-entry">5750 SEK / lag för anmälan mellan 2 februari och 25 april</p>
                        <p className="fonts_xsmall hemsedal-time-entry">6250 SEK / lag för anmälan efter den 26 april</p>
                    </div>

                    <div className="font_blue">
                        <p className="fonts_medium">LANDSKAMPEN = LINDVALLEN OCH HEMSEDAL</p>
                        <p className="fonts_xsmall hemsedal-time-entry">3400 SEK / lag för anmälan innan 1 maj</p>
                        <p className="fonts_xsmall hemsedal-time-entry">3800 SEK / lag för anmälan mellan 1 maj och 1 juli</p>
                        <p className="fonts_xsmall hemsedal-time-entry">4200 SEK / lag för anmälan från 1 juli och framåt</p>
                    </div>
                    <a href="https://raceid.com/sv/races/13014/about" target="_blank" rel="noopener noreferrer" className="button-2 hemsedal-button-align flex flex_s">ANMÄLAN</a>
                </div>
            </section>

            {/* Övernattning och Mat Section */}
            <section className="hemsedal-section hemsedal-bg-3 flex flex_j_C flex_a_C">
                <div className="hemsedal-content trans-background MaxWH flex flex_col flex_j_C">
                    <p className="font_blue fonts_large">ÖVERNATTNING OCH MAT</p>
                    
                    <div className="font_blue hemsedal-text-block">
                        <p className="fonts_medium">ÖVERNATTNING</p>
                        <p className="fonts_xsmall hemsedal-time-entry">Boende bokas enklast genom Skistar, <a href="https://www.skistar.com/sv/boka-online/Events/?r=1:&fd=2025-02-27&td=2025-11-02&c=3" target="_blank" rel="noopener noreferrer" className="hemsedal-link">klicka här</a> för att komma direkt till bokningssida.</p>
                        <p className="fonts_xsmall hemsedal-time-entry">Cykel kan hyras hos Concept Store, <a href="https://www.skistar.com/sv/vara-skidorter/hemsedal/cykeluthyrning/" target="_blank" rel="noopener noreferrer" className="hemsedal-link">klicka här</a> för att komma till bokningssida.</p>
                    </div>

                    <div className="font_blue hemsedal-text-block">
                        <p className="fonts_medium">MAT</p>
                        <p className="fonts_small">FREDAG:</p>
                        <p className="fonts_xsmall hemsedal-time-entry">18:00 - 21:00 Italiensk pizza som Take Away - Beställ på plats på lodgen Spiseri eller ring +47 458 65 086. Meny kommer att läggas ut <a href="#" className="hemsedal-link">HÄR</a>.</p>

                        <p className="fonts_small">LÖRDAG:</p>
                        <p className="fonts_xsmall hemsedal-time-entry">10:00 - 15:00 Cafe och lunchservering på Lodgen Spiseri</p>
                        <p className="fonts_xsmall hemsedal-time-entry">15:30-18:00 After AIM på Lodgen Spiseri. Viktigt att fylla på med vätska och energi efter målgång!</p>
                        <p className="fonts_xsmall hemsedal-time-entry">19:30 Bankettmiddag på Lodgen Spiseri. <a href="https://www.skistar.com/sv/vara-skidorter/hemsedal/mat-noje/" target="_blank" rel="noopener noreferrer" className="hemsedal-link">Bokas här</a>.</p>

                        <p className="fonts_small">SÖNDAG:</p>
                        <p className="fonts_xsmall hemsedal-time-entry">10:00 - 15:00 Cafe och lunchservering på Lodgen Spiseri</p>
                    </div>

                    <div className="font_blue hemsedal-text-block">
                        <p className="fonts_xsmall">Lodgen Spiseri följer alla de nationella riktlinjerna för att ge dig en trygg och bra upplevelse.</p>
                    </div>
                </div>
                <div className="hemsedal-spacer MaxWH"></div>
            </section>
        </div>
    );
};

export default Hemsedal;
