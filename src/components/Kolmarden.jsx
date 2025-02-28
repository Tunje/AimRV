import React from 'react';
import '../styles/index.js';
import '../styles/java/scripts.js';
import '../styles/index.css';

const Kolmarden = () => {
    return (
        <div className="MaxWH location">
            <div className="set-03" style={{ height: '120px' }}></div>
            <section className="page_01 kolmarden-bg-1 flex flex_col flex_j_E set-03">
                <div className="trans-background page_01box flex flex_col flex_j_SA">
                    <p className="font_blue fonts_huge">AIM CHALLENGE KOLMÅRDEN</p>
                    <a href="https://raceid.com/sv/races/13014/about" target="_blank" rel="noopener noreferrer" className="button-2 flex flex_s">ANMÄL DIG HÄR</a>
                </div>
            </section>

            <section className="ulric-button-section-bg flex flex_j_C flex_a_C set-03">
                <a href="https://raceid.com/sv/races/13014/about" target="_blank" rel="noopener noreferrer" className="ulric-button trans-background flex flex_j_C flex_a_C">
                    <p className="font_white fonts_medium">TA MIG TILL ANMÄLAN</p>
                </a>
            </section>

            {/* Program Section */}
            <section className="kolmarden-section kolmarden-bg-2 flex flex_j_C flex_a_C set-03">
                <div className="kolmarden-content trans-background MaxWH flex flex_col flex_j_C">
                    <p className="font_blue fonts_large">PROGRAM</p>
                    <p className="font_blue fonts_medium">PRELIMINÄRT PROGRAM:</p>
                    
                    <div className="font_blue">
                        <p className="fonts_medium">FREDAG 6 SEPTEMBER</p>
                        <p className="fonts_xsmall kolmarden-time-entry">17:00 - 20:00 Nummerlappsutdelning och incheckning på Vildmarkshotellet</p>
                    </div>

                    <div className="font_blue">
                        <p className="fonts_medium">LÖRDAG 7 SEPTEMBER</p>
                        <p className="fonts_xsmall kolmarden-time-entry">08:30-09:00 Nummerlappsutdelning vid starten</p>
                        <p className="fonts_xsmall kolmarden-time-entry">09:30 Obligatoriskt infomöte vid starten</p>
                        <p className="fonts_xsmall kolmarden-time-entry">10:00 START! Start/målområde vid Vildmarkshotellet</p>
                        <p className="fonts_xsmall kolmarden-time-entry">15:30 After AIM på Vildmarkshotellet</p>
                        <p className="fonts_xsmall kolmarden-time-entry">16:00 Målgång AIM Challenge</p>
                        <p className="fonts_xsmall kolmarden-time-entry">19:00 Prisutdelning och middag på Vildmarkshotellet</p>
                    </div>
                </div>
                <div className="kolmarden-spacer MaxWH"></div>
            </section>

            {/* Pris Section */}
            <section className="kolmarden-section kolmarden-bg-3 flex flex_j_C flex_a_C set-03">
                <div className="kolmarden-spacer MaxWH"></div>
                <div className="kolmarden-content trans-background MaxWH flex flex_col flex_j_C">
                    <p className="font_blue fonts_large">PRIS</p>
                    
                    <div className="font_blue">
                        <p className="fonts_medium">KOLMÅRDEN 7/9-2024</p>
                        <p className="fonts_xsmall kolmarden-time-entry">1900 SEK / lag för Early Bird-anmälan innan 1 januari</p>
                        <p className="fonts_xsmall kolmarden-time-entry">2100 SEK / lag för anmälan mellan 1 januari och 1 april</p>
                        <p className="fonts_xsmall kolmarden-time-entry">2300 SEK / lag för anmälan mellan 2 april och 18 juli</p>
                        <p className="fonts_xsmall kolmarden-time-entry">2500 SEK / lag för anmälan från 19 juli och fram till start</p>
                    </div>

                    <div className="font_blue">
                        <p className="fonts_medium">AIM CHALLENGE TRIPPELN 2025</p>
                        <p className="fonts_xsmall kolmarden-time-entry">4750 SEK / lag för Early Bird-anmälan innan 1 januari</p>
                        <p className="fonts_xsmall kolmarden-time-entry">5250 SEK / lag för anmälan mellan 1 januari och 1 februari</p>
                        <p className="fonts_xsmall kolmarden-time-entry">5750 SEK / lag för anmälan mellan 2 februari och 25 april</p>
                        <p className="fonts_xsmall kolmarden-time-entry">6250 SEK / lag för anmälan efter den 26 april</p>
                    </div>
                    <a href="https://raceid.com/sv/races/13014/about" target="_blank" rel="noopener noreferrer" className="button-2 kolmarden-button-align flex flex_s">ANMÄLAN</a>
                </div>
            </section>

            {/* Övernattning och Mat Section */}
            <section className="kolmarden-section kolmarden-bg-4 flex flex_j_C flex_a_C set-03">
                <div className="kolmarden-content trans-background MaxWH flex flex_col flex_j_C">
                    <p className="font_blue fonts_large">ÖVERNATTNING OCH MAT</p>
                    <div className="font_blue kolmarden-text-block">
                        <p>Under tävlingshelgen bor du smidigt på First Camp Kolmården – Norrköping med krypavstånd från start- och målgången. Som tävlingsdeltagare får du dessutom 25% rabatt på stugor och camping när du bokar online.</p>
                        <p className="fonts_small">Rabattkod: AIMCHALLENGE25</p>
                        <p className="fonts_small">23-29 september 2024</p>
                        <p className="fonts_small">Endast BAS-bokningar</p>
                        <p className="fonts_small">Boka online på firstcamp.se</p>
                        <div className="kolmarden-button-align">
                            <a href="https://firstcamp.se" target="_blank" rel="noopener noreferrer" className="kolmarden-link">Boka här</a>
                        </div>
                    </div>
                    <div className="font_blue kolmarden-text-block">
                        <p><a href="#" className="kolmarden-link">Övriga boendealternativ finns att hitta här.</a></p>
                        <p><a href="#" className="kolmarden-link">Tips på ställen att äta i samband med ditt besök i Norrköping/Kolmården.</a></p>
                        <p><a href="#" className="kolmarden-link">Här kan du hitta inspiration på övriga saker att se och göra under ditt besök i Norrköping/Kolmården.</a></p>
                    </div>
                </div>
                <div className="kolmarden-spacer MaxWH"></div>
            </section>
        </div>
    );
};

export default Kolmarden;
