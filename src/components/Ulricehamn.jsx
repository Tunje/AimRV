import React from 'react';

const Ulricehamn = () => {
    return (
        <div className="flex flex_col">
            <section className="page_01 dynamic-background flex flex_col flex_j_E">
                <div className="trans-background page_01box flex flex_col flex_j_SA">
                    <p className="font_blue fonts_huge">AIM CHALLENGE ULRICEHAMN</p>
                </div>
            </section>
            <section className="ulric-button-section ulric-button-section-bg flex flex_j_C flex_a_C">
                <a href="https://raceid.com/sv/races/12846/about" target="_blank" rel="noopener noreferrer" className="ulric-button trans-background flex flex_j_C flex_a_C">
                    <p className="font_white fonts_medium">TA MIG TILL ANMÄLAN</p>
                </a>
            </section>

            {/* Program Section */}
            <section className="ulric-section ulric-bg-1 flex flex_j_C flex_a_C">
                <div className="ulric-content trans-background MaxWH flex flex_col flex_j_C">
                    <p className="font_blue fonts_large">PROGRAM</p>
                    <p className="font_blue fonts_medium">PRELIMINÄRT PROGRAM:</p>
                    
                    <div className="font_blue">
                        <p className="fonts_medium">FREDAG 9 MAJ</p>
                        <p className="fonts_small ulric-time-entry">17:00 - 19:00 Registrering för alla tävlande på XCC</p>
                    </div>

                    <div className="font_blue">
                        <p className="fonts_medium">LÖRDAG 10 MAJ</p>
                        <p className="fonts_small ulric-time-entry">08:30 - 10:15 Registrering för alla tävlande som ej registrerat sig under fredagen på 157 XCC, på Lassalyckan.</p>
                        <p className="fonts_small ulric-time-entry">10:30 Obligatoriskt informationsmöte vid starten på Lassalyckan stadion.</p>
                        <p className="fonts_small ulric-time-entry">11:00 Start AIM Challenge, på Lassalyckan stadion. Gemensam start för 3 & 6-timmars tävlingen.</p>
                        <p className="fonts_small ulric-time-entry">14:00 Målgång för 3-timmars tävlingen.</p>
                        <p className="fonts_small ulric-time-entry">ca 15:30 Prisutdelning 3-timmars tävlingen</p>
                        <p className="fonts_small ulric-time-entry">16:30 - 20:00 After AIM med mat och dryck på Hotell Lassalyckan.</p>
                        <p className="fonts_small ulric-time-entry">17:00 Målgång för 6-timmars tävlingen.</p>
                        <p className="fonts_small ulric-time-entry">19:00 Prisutdelning utanför Hotell Lassalyckan.</p>
                    </div>
                </div>
                <div className="ulric-spacer MaxWH"></div>
            </section>

            {/* Pris Section */}
            <section className="ulric-section ulric-bg-2 flex flex_j_C flex_a_C">
                <div className="ulric-spacer MaxWH"></div>
                <div className="ulric-content trans-background MaxWH flex flex_col flex_j_C">
                    <p className="font_blue fonts_large">PRIS</p>
                    <p className="font_blue fonts_medium">ULRICEHAMN 10/5-2025</p>
                    
                    <div className="font_blue">
                        <p className="fonts_medium">3-TIMMARS</p>
                        <p className="fonts_small ulric-time-entry">1500 SEK / lag för Early Bird-anmälan innan 1 november.</p>
                        <p className="fonts_small ulric-time-entry">1700 SEK / lag för anmälan mellan 1 november och 1 februari.</p>
                        <p className="fonts_small ulric-time-entry">1900 SEK / lag för anmälan mellan 2 februari och 24 april</p>
                        <p className="fonts_small ulric-time-entry">2100 SEK / lag för anmälan från 25 april och fram till start.</p>
                    </div>

                    <div className="font_blue">
                        <p className="fonts_medium">6-TIMMARS</p>
                        <p className="fonts_small ulric-time-entry">1900 SEK / lag för Early Bird-anmälan innan 1 november.</p>
                        <p className="fonts_small ulric-time-entry">2100 SEK / lag för anmälan mellan 1 november och 1 februari.</p>
                        <p className="fonts_small ulric-time-entry">2300 SEK / lag för anmälan mellan 2 februari och 24 april.</p>
                        <p className="fonts_small ulric-time-entry">2500 SEK / lag för anmälan från 25 april och fram till start.</p>
                    </div>

                    <div className="font_blue">
                        <p className="fonts_medium">AIM CHALLENGE TRIPPELN 2025</p>
                        <p className="fonts_small ulric-time-entry">4750 SEK / lag för Early Bird-anmälan innan 1 januari.</p>
                        <p className="fonts_small ulric-time-entry">5250 SEK / lag för anmälan mellan 1 januari och 1 februari.</p>
                        <p className="fonts_small ulric-time-entry">5750 SEK / lag för anmälan mellan 2 februari och 24 april.</p>
                        <p className="fonts_small ulric-time-entry">6250 SEK / lag för anmälan efter den 25 april.</p>
                    </div>
                    <a href="https://raceid.com/sv/races/12846/about" target="_blank" rel="noopener noreferrer" className="button-2 ulric-button-align flex flex_s">ANMÄLAN</a>
                </div>
            </section>

            {/* Övernattning och Mat Section */}
            <section className="ulric-section ulric-bg-3 flex flex_j_C flex_a_C">
                <div className="ulric-content trans-background MaxWH flex flex_col flex_j_C">
                    <p className="font_blue fonts_large">ÖVERNATTNING OCH MAT</p>
                    
                    <div className="font_blue ulric-text-block">
                        <p className="fonts_small ulric-time-entry">Cykeluthyrning med in- och utlämning på Lassalyckan Stadion. Läs mer och boka här.</p>
                    </div>

                    <div className="font_blue ulric-text-block">
                        <p className="fonts_small ulric-time-entry">Önskar du att bo nära start och mål så kan vi varmt rekommendera Hotell Lassalyckan som erbjuder ett modernt boende ett stenkast ifrån starten.</p>
                        <a href="https://www.hotell-lassalyckan.se" target="_blank" rel="noopener noreferrer" className="fonts_small ulric-time-entry ulric-link">www.hotell-lassalyckan.se</a>
                    </div>

                    <div className="font_blue ulric-text-block">
                        <p className="fonts_small ulric-time-entry">För övriga boende i Ulricehamn finns här en bra översikt över olika alternativ:</p>
                        <a href="https://www.vastsverige.com/ulricehamn/boende/" target="_blank" rel="noopener noreferrer" className="fonts_small ulric-time-entry ulric-link">www.vastsverige.com/ulricehamn/boende</a>
                    </div>
                </div>
                <div className="ulric-spacer MaxWH"></div>
            </section>
        </div>
    );
};

export default Ulricehamn;
