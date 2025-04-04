import React from 'react';
import EditableText from './EditableText';
import BackgroundFrames from './BackgroundFrames';

const Ulricehamn = () => {
    return (
        <div className="flex flex_col">
            <BackgroundFrames />
            <section className="page_01 dynamic-background flex flex_col flex_j_E">
                <div className="trans-background page_01box flex flex_col flex_j_SA">
                    <EditableText 
                        textKey="ulricehamn-title" 
                        defaultText="ULRICEHAMN" 
                        tag="p" 
                        className="font_blue fonts_huge" 
                    />
                    <EditableText 
                        textKey="ulricehamn-date" 
                        defaultText="datum insert" 
                        tag="p" 
                        className="font_blue fonts_medium competitions-date text-center"
                    />
                </div>
            </section>
            <section className="ulric-button-section-bg flex flex_j_C flex_a_C">
                <a href="https://raceid.com/sv/races/12846/about" target="_blank" rel="noopener noreferrer" className="ulric-button flex flex_j_C flex_a_C">
                    <p className="font_white fonts_medium">TA MIG TILL ANMÄLAN</p>
                </a>
            </section>

            {/* Program Section */}
            <section className="ulric-section ulric-bg-1 flex flex_j_C flex_a_C">
                <div className="ulric-content trans-background MaxWH flex flex_col flex_j_C">
                    <EditableText 
                        textKey="ulricehamn-program-title" 
                        defaultText="PROGRAM" 
                        tag="p" 
                        className="font_blue fonts_large" 
                    />
                    <EditableText 
                        textKey="ulricehamn-program-subtitle" 
                        defaultText="PRELIMINÄRT PROGRAM:" 
                        tag="p" 
                        className="font_blue fonts_medium" 
                    />
                    
                    <div className="font_blue">
                        <EditableText 
                            textKey="ulricehamn-friday-title" 
                            defaultText="FREDAG 9 MAJ" 
                            tag="p" 
                            className="fonts_medium" 
                        />
                        <EditableText 
                            textKey="ulricehamn-friday-schedule" 
                            defaultText="17:00 - 19:00 Registrering för alla tävlande på XCC" 
                            tag="p" 
                            className="fonts_small ulric-time-entry" 
                        />
                    </div>

                    <div className="font_blue">
                        <EditableText 
                            textKey="ulricehamn-saturday-title" 
                            defaultText="LÖRDAG 10 MAJ" 
                            tag="p" 
                            className="fonts_medium" 
                        />
                        <EditableText 
                            textKey="ulricehamn-saturday-schedule1" 
                            defaultText="08:30 - 10:15 Registrering för alla tävlande som ej registrerat sig under fredagen på 157 XCC, på Lassalyckan." 
                            tag="p" 
                            className="fonts_small ulric-time-entry" 
                        />
                        <EditableText 
                            textKey="ulricehamn-saturday-schedule2" 
                            defaultText="10:30 Obligatoriskt informationsmöte vid starten på Lassalyckan stadion." 
                            tag="p" 
                            className="fonts_small ulric-time-entry" 
                        />
                        <EditableText 
                            textKey="ulricehamn-saturday-schedule3" 
                            defaultText="11:00 Start AIM Challenge, på Lassalyckan stadion. Gemensam start för 3 & 6-timmars tävlingen." 
                            tag="p" 
                            className="fonts_small ulric-time-entry" 
                        />
                        <EditableText 
                            textKey="ulricehamn-saturday-schedule4" 
                            defaultText="14:00 Målgång för 3-timmars tävlingen." 
                            tag="p" 
                            className="fonts_small ulric-time-entry" 
                        />
                        <EditableText 
                            textKey="ulricehamn-saturday-schedule5" 
                            defaultText="ca 15:30 Prisutdelning 3-timmars tävlingen" 
                            tag="p" 
                            className="fonts_small ulric-time-entry" 
                        />
                        <EditableText 
                            textKey="ulricehamn-saturday-schedule6" 
                            defaultText="16:30 - 20:00 After AIM med mat och dryck på Hotell Lassalyckan." 
                            tag="p" 
                            className="fonts_small ulric-time-entry" 
                        />
                        <EditableText 
                            textKey="ulricehamn-saturday-schedule7" 
                            defaultText="17:00 Målgång för 6-timmars tävlingen." 
                            tag="p" 
                            className="fonts_small ulric-time-entry" 
                        />
                        <EditableText 
                            textKey="ulricehamn-saturday-schedule8" 
                            defaultText="19:00 Prisutdelning utanför Hotell Lassalyckan." 
                            tag="p" 
                            className="fonts_small ulric-time-entry" 
                        />
                    </div>
                </div>
                <div className="ulric-spacer MaxWH"></div>
            </section>

            {/* Pris Section */}
            <section className="ulric-section ulric-bg-2 flex flex_j_C flex_a_C">
                <div className="ulric-spacer MaxWH"></div>
                <div className="ulric-content trans-background MaxWH flex flex_col flex_j_C">
                    <EditableText 
                        textKey="ulricehamn-pris-title" 
                        defaultText="PRIS" 
                        tag="p" 
                        className="font_blue fonts_large" 
                    />
                    
                    <EditableText 
                        textKey="ulricehamn-title-price" 
                        defaultText="ULRICEHAMN" 
                        tag="p" 
                        className="font_blue fonts_medium" 
                    />
                    <a href="https://raceid.com/sv/races/12846/about" target="_blank" rel="noopener noreferrer">
                        <EditableText 
                            textKey="ulricehamn-date" 
                            defaultText="datum insert" 
                            tag="p" 
                            className="font_blue fonts_medium competitions-date text-center"
                        />
                    </a>
                    
                    <div className="font_blue">
                        <EditableText 
                            textKey="ulricehamn-pris-3-timmars-title" 
                            defaultText="3-TIMMARS" 
                            tag="p" 
                            className="fonts_medium" 
                        />
                        <EditableText 
                            textKey="ulricehamn-pris-3-timmars-early-bird" 
                            defaultText="1500 SEK / lag för Early Bird-anmälan innan 1 november." 
                            tag="p" 
                            className="fonts_small ulric-time-entry" 
                        />
                        <EditableText 
                            textKey="ulricehamn-pris-3-timmars-nov-feb" 
                            defaultText="1700 SEK / lag för anmälan mellan 1 november och 1 februari." 
                            tag="p" 
                            className="fonts_small ulric-time-entry" 
                        />
                        <EditableText 
                            textKey="ulricehamn-pris-3-timmars-feb-apr" 
                            defaultText="1900 SEK / lag för anmälan mellan 2 februari och 24 april" 
                            tag="p" 
                            className="fonts_small ulric-time-entry" 
                        />
                        <EditableText 
                            textKey="ulricehamn-pris-3-timmars-apr-start" 
                            defaultText="2100 SEK / lag för anmälan från 25 april och fram till start." 
                            tag="p" 
                            className="fonts_small ulric-time-entry" 
                        />
                    </div>

                    <div className="font_blue">
                        <EditableText 
                            textKey="ulricehamn-pris-6-timmars-title" 
                            defaultText="6-TIMMARS" 
                            tag="p" 
                            className="fonts_medium" 
                        />
                        <EditableText 
                            textKey="ulricehamn-pris-6-timmars-early-bird" 
                            defaultText="1900 SEK / lag för Early Bird-anmälan innan 1 november." 
                            tag="p" 
                            className="fonts_small ulric-time-entry" 
                        />
                        <EditableText 
                            textKey="ulricehamn-pris-6-timmars-nov-feb" 
                            defaultText="2100 SEK / lag för anmälan mellan 1 november och 1 februari." 
                            tag="p" 
                            className="fonts_small ulric-time-entry" 
                        />
                        <EditableText 
                            textKey="ulricehamn-pris-6-timmars-feb-apr" 
                            defaultText="2300 SEK / lag för anmälan mellan 2 februari och 24 april." 
                            tag="p" 
                            className="fonts_small ulric-time-entry" 
                        />
                        <EditableText 
                            textKey="ulricehamn-pris-6-timmars-apr-start" 
                            defaultText="2500 SEK / lag för anmälan från 25 april och fram till start." 
                            tag="p" 
                            className="fonts_small ulric-time-entry" 
                        />
                    </div>

                    <div className="font_blue">
                        <EditableText 
                            textKey="ulricehamn-pris-trippeln-title" 
                            defaultText="AIM CHALLENGE TRIPPELN 2025" 
                            tag="p" 
                            className="fonts_medium" 
                        />
                        <EditableText 
                            textKey="ulricehamn-pris-trippeln-early-bird" 
                            defaultText="4750 SEK / lag för Early Bird-anmälan innan 1 januari." 
                            tag="p" 
                            className="fonts_small ulric-time-entry" 
                        />
                        <EditableText 
                            textKey="ulricehamn-pris-trippeln-jan-feb" 
                            defaultText="5250 SEK / lag för anmälan mellan 1 januari och 1 februari." 
                            tag="p" 
                            className="fonts_small ulric-time-entry" 
                        />
                        <EditableText 
                            textKey="ulricehamn-pris-trippeln-feb-apr" 
                            defaultText="5750 SEK / lag för anmälan mellan 2 februari och 24 april." 
                            tag="p" 
                            className="fonts_small ulric-time-entry" 
                        />
                        <EditableText 
                            textKey="ulricehamn-pris-trippeln-apr-start" 
                            defaultText="6250 SEK / lag för anmälan efter den 25 april." 
                            tag="p" 
                            className="fonts_small ulric-time-entry" 
                        />
                    </div>
                    <a href="https://raceid.com/sv/races/12846/about" target="_blank" rel="noopener noreferrer" className="button-2 ulric-button-align flex flex_s">
                        <p className="fonts_small ulric-time-entry font_white">ANMÄLAN</p>
                    </a>
                </div>
            </section>

            {/* Övernattning och Mat Section */}
            <section className="ulric-section ulric-bg-3 flex flex_j_C flex_a_C">
                <div className="ulric-content trans-background MaxWH flex flex_col flex_j_C">
                    <EditableText 
                        textKey="ulricehamn-overnattning-title" 
                        defaultText="ÖVERNATTNING OCH MAT" 
                        tag="p" 
                        className="font_blue fonts_large" 
                    />
                    
                    <div className="font_blue ulric-text-block">
                        <EditableText 
                            textKey="ulricehamn-overnattning-cykeluthyrning" 
                            defaultText="Cykeluthyrning med in- och utlämning på Lassalyckan Stadion. Läs mer och boka här." 
                            tag="p" 
                            className="fonts_small ulric-time-entry" 
                        />
                    </div>

                    <div className="font_blue ulric-text-block">
                        <EditableText 
                            textKey="ulricehamn-overnattning-hotell" 
                            defaultText="Önskar du att bo nära start och mål så kan vi varmt rekommendera Hotell Lassalyckan som erbjuder ett modernt boende ett stenkast ifrån starten." 
                            tag="p" 
                            className="fonts_small ulric-time-entry" 
                        />
                        <EditableText 
                            textKey="ulricehamn-overnattning-hotell-link" 
                            defaultText="www.hotell-lassalyckan.se" 
                            tag="p" 
                            className="fonts_small ulric-time-entry" 
                        />
                    </div>

                    <div className="font_blue ulric-text-block">
                        <EditableText 
                            textKey="ulricehamn-overnattning-alternativ" 
                            defaultText="För övriga boende i Ulricehamn finns här en bra översikt över olika alternativ:" 
                            tag="p" 
                            className="fonts_small ulric-time-entry" 
                        />
                        <EditableText 
                            textKey="ulricehamn-overnattning-alternativ-link" 
                            defaultText="www.vastsverige.com/ulricehamn/boende" 
                            tag="p" 
                            className="fonts_small ulric-time-entry" 
                        />
                    </div>
                </div>
                <div className="ulric-spacer MaxWH"></div>
            </section>
        </div>
    );
};

export default Ulricehamn;
