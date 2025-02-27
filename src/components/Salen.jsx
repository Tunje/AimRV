import React from 'react';

const Salen = () => {
    return (
        <div className="flex flex_col">
            <section className="page_01 dynamic-background flex flex_col flex_j_E">
                <div className="trans-background page_01box flex flex_col flex_j_SA">
                    <p className="font_blue fonts_huge">AIM CHALLENGE SÄLEN</p>
                </div>
            </section>
            <section className="salen-button-section salen-button-section-bg flex flex_j_C flex_a_C">
                <a href="https://raceid.com/sv/races/13014/about" target="_blank" rel="noopener noreferrer" className="salen-button trans-background flex flex_j_C flex_a_C">
                    <p className="font_white fonts_small">TA MIG TILL ANMÄLAN</p>
                </a>
            </section>

            {/* Program Section */}
            <section className="salen-section salen-bg-1 flex flex_j_C flex_a_C">
                <div className="salen-content trans-background MaxWH flex flex_col flex_j_C">
                    <p className="font_blue fonts_large">PROGRAM</p>
                    <p className="font_blue fonts_medium">PRELIMINÄRT PROGRAM:</p>
                    
                    <div className="font_blue">
                        <p className="fonts_medium">FREDAG 1 AUGUSTI</p>
                        <p className="fonts_xsmall salen-time-entry">17:00 - 20:00 Nummerlappsutdelning för alla tävlande på SkiStarshop Concept Store på Handelsområdet Lindvallen.</p>
                    </div>

                    <div className="font_blue">
                        <p className="fonts_medium">LÖRDAG 2 AUGUSTI</p>
                        <p className="fonts_xsmall salen-time-entry">08:30-09:00 Nummerlappsutdelning i konferenslokal ovanför Stadium</p>
                        <p className="fonts_xsmall salen-time-entry">09:30 Obligatoriskt infomöte vid starten</p>
                        <p className="fonts_xsmall salen-time-entry">10:00 START! Start/målområde vid Experiumtorget.</p>
                        <p className="fonts_xsmall salen-time-entry">15:30 After AIM på Lodgebaren på SkiStar Lodge Lindvallen</p>
                        <p className="fonts_xsmall salen-time-entry">16:00 Målgång AIM Challenge.</p>
                        <p className="fonts_xsmall salen-time-entry">xx:00 Prisutdelning i Lodgebaren</p>
                    </div>
                </div>
                <div className="salen-spacer MaxWH"></div>
            </section>

            {/* Pris Section */}
            <section className="salen-section salen-bg-2 flex flex_j_C flex_a_C">
                <div className="salen-spacer MaxWH"></div>
                <div className="salen-content trans-background MaxWH flex flex_col flex_j_C">
                    <p className="font_blue fonts_large">PRIS</p>
                    
                    <div className="font_blue">
                        <p className="fonts_medium">SÄLEN 2/8-2024</p>
                        <p className="fonts_xsmall salen-time-entry">1900 SEK / lag för Early Bird-anmälan innan 1 januari.</p>
                        <p className="fonts_xsmall salen-time-entry">2100 SEK / lag för anmälan mellan 1 januari och 1 april.</p>
                        <p className="fonts_xsmall salen-time-entry">2300 SEK / lag för anmälan mellan 2 april och 18 juli</p>
                        <p className="fonts_xsmall salen-time-entry">2500 SEK / lag för anmälan från 19 juli och fram till start.</p>
                    </div>

                    <div className="font_blue">
                        <p className="fonts_medium">AIM CHALLENGE TRIPPELN 2025</p>
                        <p className="fonts_xsmall salen-time-entry">4750 SEK / lag för Early Bird-anmälan innan 1 januari.</p>
                        <p className="fonts_xsmall salen-time-entry">5250 SEK / lag för anmälan mellan 1 januari och 1 februari.</p>
                        <p className="fonts_xsmall salen-time-entry">5750 SEK / lag för anmälan mellan 2 februari och 25 april.</p>
                        <p className="fonts_xsmall salen-time-entry">6250 SEK / lag för anmälan efter den 26 april.</p>
                    </div>

                    <div className="font_blue">
                        <p className="fonts_medium">LINDVALLEN 2020-08-08</p>
                        <p className="fonts_xsmall salen-time-entry">1900 SEK / lag för anmälan innan 1 maj.</p>
                        <p className="fonts_xsmall salen-time-entry">2100 SEK / lag för anmälan mellan 1 maj och 1 juli.</p>
                        <p className="fonts_xsmall salen-time-entry">2300 SEK / lag för anmälan från 1 juli och framåt.</p>
                    </div>

                    <div className="font_blue">
                        <p className="fonts_medium">LANDSKAMPEN = LINDVALLEN OCH HEMSEDAL</p>
                        <p className="fonts_xsmall salen-time-entry">3400 SEK/ lag för anmälan innan 1 maj.</p>
                        <p className="fonts_xsmall salen-time-entry">3800 SEK/ lag för anmälan mellan 1 maj och 1 juli.</p>
                        <p className="fonts_xsmall salen-time-entry">4200 SEK/ lag för anmälan från 1 juli och framåt.</p>
                    </div>
                    <a href="https://raceid.com/sv/races/13014/about" target="_blank" rel="noopener noreferrer" className="button-2 salen-button-align flex flex_s">ANMÄLAN</a>
                </div>
            </section>

            {/* Övernattning och Mat Section */}
            <section className="salen-section salen-bg-3 flex flex_j_C flex_a_C">
                <div className="salen-content trans-background MaxWH flex flex_col flex_j_C">
                    <p className="font_blue fonts_large">ÖVERNATTNING OCH MAT</p>
                    
                    <div className="font_blue salen-text-block">
                        <p className="fonts_medium">ÖVERNATTNING</p>
                        <p className="fonts_xsmall salen-time-entry">Boende bokas enklast genom Skistar, <a href="https://www.skistar.com/sv/boka-online/Events/?r=1:&fd=2025-02-27&td=2025-11-02&c=3" target="_blank" rel="noopener noreferrer" className="salen-link">klicka här</a> för att komma direkt till bokningssida.</p>
                    </div>

                    <div className="font_blue salen-text-block">
                        <p className="fonts_medium">MAT</p>
                        <p className="fonts_xsmall salen-time-entry">Avslutningsmiddag på Lodgebaren - <a href="https://www.skistar.com/sv/experium/mat-noje/lodgebaren/" target="_blank" rel="noopener noreferrer" className="salen-link">förboka här</a>.</p>
                        <p className="fonts_xsmall salen-time-entry">Möjlighet för frukost på Lodgebaren - <a href="https://www.skistar.com/sv/experium/mat-noje/lodgebaren/" target="_blank" rel="noopener noreferrer" className="salen-link">förbokas här</a>.</p>
                        <p className="fonts_xsmall salen-time-entry">Lodgebaren - <a href="https://www.skistar.com/sv/experium/mat-noje/lodgebaren/" target="_blank" rel="noopener noreferrer" className="salen-link">Läs mer här</a> och boka bord</p>
                    </div>

                    <div className="font_blue salen-text-block">
                        <p className="fonts_medium">UPPLEVELSER & AKTIVITETER</p>
                        <p className="fonts_xsmall salen-time-entry">Bad & Spa - <a href="https://www.skistar.com/sv/vara-skidorter/salen/sommar-i-salen/" target="_blank" rel="noopener noreferrer" className="salen-link">Läs mer</a></p>
                        <p className="fonts_xsmall salen-time-entry">Bowling - <a href="https://www.skistar.com/sv/vara-skidorter/salen/sommar-i-salen/" target="_blank" rel="noopener noreferrer" className="salen-link">Läs mer</a></p>
                        <p className="fonts_xsmall salen-time-entry">Höghöjdsbana - <a href="https://www.skistar.com/sv/vara-skidorter/salen/sommar-i-salen/aktiviteter/klatterpark/" target="_blank" rel="noopener noreferrer" className="salen-link">Läs mer</a></p>
                        <p className="fonts_xsmall salen-time-entry">SkiStar Sports & Adventures - <a href="https://www.skistar.com/sv/vara-skidorter/salen/sommar-i-salen/" target="_blank" rel="noopener noreferrer" className="salen-link">Läs mer</a></p>
                    </div>
                </div>
                <div className="salen-spacer MaxWH"></div>
            </section>
        </div>
    );
};

export default Salen;
