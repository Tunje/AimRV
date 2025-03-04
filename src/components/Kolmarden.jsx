import React from 'react';
import '../styles/index.css';
import '../styles/java/scripts.js';
import EditableText from './EditableText';

const Kolmarden = () => {
    return (
        <div className="MaxWH location">
            <div className="set-03" style={{ height: '120px' }}></div>
            <section className="page_01 kolmarden-bg-1 flex flex_col flex_j_E set-03">
                <div className="trans-background page_01box flex flex_col flex_j_SA">
                    <EditableText 
                        textKey="kolmarden-title" 
                        defaultText="KOLMÅRDEN" 
                        tag="p" 
                        className="font_blue fonts_huge" 
                    />
                    <EditableText 
                        textKey="kolmarden-date" 
                        defaultText="datum insert" 
                        tag="p" 
                        className="font_blue fonts_medium" 
                    />
                </div>
            </section>

            <section className="kolmarden-button-section-bg flex flex_j_C flex_a_C set-03">
                <a href="https://raceid.com/sv/races/13014/about" target="_blank" rel="noopener noreferrer" className="kolmarden-button flex flex_j_C flex_a_C">
                    <p className="font_white fonts_medium">TA MIG TILL ANMÄLAN</p>
                </a>
            </section>

            {/* Program Section */}
            <section className="kolmarden-section kolmarden-bg-2 flex flex_j_R flex_a_C set-03">
                <div className="kolmarden-content trans-background MaxWH flex flex_col flex_j_C">
                    <EditableText 
                        textKey="kolmarden-program-title" 
                        defaultText="PROGRAM" 
                        tag="p" 
                        className="font_blue fonts_large" 
                    />
                    <EditableText 
                        textKey="kolmarden-program-subtitle" 
                        defaultText="PRELIMINÄRT PROGRAM:" 
                        tag="p" 
                        className="font_blue fonts_medium" 
                    />
                    
                    <div className="font_blue">
                        <EditableText 
                            textKey="kolmarden-friday-title" 
                            defaultText="FREDAG 27 SEPTEMBER" 
                            tag="p" 
                            className="fonts_small kolmarden-day-title" 
                        />
                        <EditableText 
                            textKey="kolmarden-friday-program" 
                            defaultText="15:00-19:00 Tävlingsexpeditionen öppen, utlämning av nummerlappar och kartor" 
                            tag="p" 
                            className="fonts_xsmall kolmarden-program-entry" 
                        />
                    </div>
                    
                    <div className="font_blue">
                        <EditableText 
                            textKey="kolmarden-saturday-title" 
                            defaultText="LÖRDAG 28 SEPTEMBER" 
                            tag="p" 
                            className="fonts_small kolmarden-day-title" 
                        />
                        <EditableText 
                            textKey="kolmarden-saturday-program-1" 
                            defaultText="07:30-08:30 Tävlingsexpeditionen öppen, utlämning av nummerlappar och kartor" 
                            tag="p" 
                            className="fonts_xsmall kolmarden-program-entry" 
                        />
                        <EditableText 
                            textKey="kolmarden-saturday-program-2" 
                            defaultText="08:30 Obligatorisk genomgång vid startområdet" 
                            tag="p" 
                            className="fonts_xsmall kolmarden-program-entry" 
                        />
                        <EditableText 
                            textKey="kolmarden-saturday-program-3" 
                            defaultText="09:00 Start" 
                            tag="p" 
                            className="fonts_xsmall kolmarden-program-entry" 
                        />
                        <EditableText 
                            textKey="kolmarden-saturday-program-4" 
                            defaultText="15:00 Målet stänger" 
                            tag="p" 
                            className="fonts_xsmall kolmarden-program-entry" 
                        />
                        <EditableText 
                            textKey="kolmarden-saturday-program-5" 
                            defaultText="16:00 Prisutdelning" 
                            tag="p" 
                            className="fonts_xsmall kolmarden-program-entry" 
                        />
                    </div>
                </div>
            </section>

            {/* Anmälan Section */}
            <section className="kolmarden-section kolmarden-bg-3 flex flex_j_E flex_a_C set-03">
                <div className="kolmarden-content trans-background MaxWH flex flex_col flex_j_C">
                    <EditableText 
                        textKey="kolmarden-registration-title" 
                        defaultText="ANMÄLAN" 
                        tag="p" 
                        className="font_blue fonts_large" 
                    />
                    <div className="font_blue kolmarden-text-block">
                        <EditableText 
                            textKey="kolmarden-registration-text" 
                            defaultText="Anmälan görs via RaceID. Klicka på knappen nedan för att komma till anmälningssidan." 
                            tag="p" 
                        />
                    </div>
                    <div className="kolmarden-registration-info font_blue">
                        <div className="kolmarden-registration-column">
                            <EditableText 
                                textKey="kolmarden-registration-early-title" 
                                defaultText="ORDINARIE ANMÄLAN" 
                                tag="p" 
                                className="fonts_small kolmarden-fee-title" 
                            />
                            <EditableText 
                                textKey="kolmarden-registration-early-dates" 
                                defaultText="t.o.m. 31 augusti 2024" 
                                tag="p" 
                                className="fonts_xsmall kolmarden-date-entry" 
                            />
                            <EditableText 
                                textKey="kolmarden-registration-early-fee" 
                                defaultText="1 495 kr / lag" 
                                tag="p" 
                                className="fonts_xsmall kolmarden-fee-entry" 
                            />
                        </div>
                        <div className="kolmarden-registration-column">
                            <EditableText 
                                textKey="kolmarden-registration-late-title" 
                                defaultText="SEN ANMÄLAN" 
                                tag="p" 
                                className="fonts_small kolmarden-fee-title" 
                            />
                            <EditableText 
                                textKey="kolmarden-registration-late-dates" 
                                defaultText="1 september - 20 september 2024" 
                                tag="p" 
                                className="fonts_xsmall kolmarden-date-entry" 
                            />
                            <EditableText 
                                textKey="kolmarden-registration-late-fee" 
                                defaultText="1 795 kr / lag" 
                                tag="p" 
                                className="fonts_xsmall kolmarden-fee-entry" 
                            />
                        </div>
                        <div className="kolmarden-registration-column">
                            <EditableText 
                                textKey="kolmarden-registration-onsite-title" 
                                defaultText="EFTERANMÄLAN" 
                                tag="p" 
                                className="fonts_small kolmarden-fee-title" 
                            />
                            <EditableText 
                                textKey="kolmarden-registration-onsite-dates" 
                                defaultText="21 september - 27 september 2024" 
                                tag="p" 
                                className="fonts_xsmall kolmarden-date-entry" 
                            />
                            <EditableText 
                                textKey="kolmarden-registration-onsite-fee" 
                                defaultText="1 995 kr / lag" 
                                tag="p" 
                                className="fonts_xsmall kolmarden-fee-entry" 
                            />
                        </div>
                    </div>
                    <div className="kolmarden-text-block font_blue">
                        <EditableText 
                            textKey="kolmarden-registration-includes" 
                            defaultText="I anmälningsavgiften ingår:" 
                            tag="p" 
                            className="fonts_small" 
                        />
                        <EditableText 
                            textKey="kolmarden-registration-includes-list" 
                            defaultText="Kartor, nummerlappar, tidtagningschip, vätskekontroller under loppet, enklare mat efter målgång, sjukvård och säkerhet under loppet." 
                            tag="p" 
                            className="fonts_xsmall kolmarden-time-entry" 
                        />
                    </div>
                    <a href="https://raceid.com/sv/races/13014/about" target="_blank" rel="noopener noreferrer" className="button-2 kolmarden-button-align flex flex_s">
                        <EditableText 
                            textKey="kolmarden-anmalan-button2" 
                            defaultText="ANMÄLAN" 
                            tag="span" 
                            className="font_white"
                        />
                    </a>
                </div>
            </section>

            {/* Övernattning och Mat Section */}
            <section className="kolmarden-section kolmarden-bg-4 flex flex_j_R flex_a_C set-03">
                <div className="kolmarden-content trans-background MaxWH flex flex_col flex_j_C">
                    <EditableText 
                        textKey="kolmarden-accommodation-title" 
                        defaultText="ÖVERNATTNING OCH MAT" 
                        tag="p" 
                        className="font_blue fonts_large" 
                    />
                    <div className="font_blue kolmarden-text-block">
                        <EditableText 
                            textKey="kolmarden-accommodation-text" 
                            defaultText="Under tävlingshelgen bor du smidigt på First Camp Kolmården – Norrköping med krypavstånd från start- och målgången. Som tävlingsdeltagare får du dessutom 25% rabatt på stugor och camping när du bokar online." 
                            tag="p" 
                        />
                        <EditableText 
                            textKey="kolmarden-discount-code" 
                            defaultText="Rabattkod: AIMCHALLENGE25" 
                            tag="p" 
                            className="fonts_small" 
                        />
                        <EditableText 
                            textKey="kolmarden-discount-dates" 
                            defaultText="23-29 september 2024" 
                            tag="p" 
                            className="fonts_small" 
                        />
                        <EditableText 
                            textKey="kolmarden-discount-note1" 
                            defaultText="Endast BAS-bokningar" 
                            tag="p" 
                            className="fonts_small" 
                        />
                        <EditableText 
                            textKey="kolmarden-discount-note2" 
                            defaultText="Boka online på firstcamp.se" 
                            tag="p" 
                            className="fonts_small" 
                        />
                        <div className="kolmarden-button-align">
                            <a href="https://firstcamp.se" target="_blank" rel="noopener noreferrer" className="kolmarden-link">
                                <EditableText 
                                    textKey="kolmarden-book-here" 
                                    defaultText="Boka här" 
                                    tag="span" 
                                />
                            </a>
                        </div>
                    </div>
                    <div className="font_blue kolmarden-text-block">
                        <p>
                            <EditableText 
                                textKey="kolmarden-other-accommodation" 
                                defaultText="Övriga boendealternativ finns att hitta här." 
                                tag="span" 
                            />
                        </p>
                        <p>
                            <EditableText 
                                textKey="kolmarden-food-tips" 
                                defaultText="Tips på ställen att äta i samband med ditt besök i Norrköping/Kolmården." 
                                tag="span" 
                            />
                        </p>
                        <p>
                            <EditableText 
                                textKey="kolmarden-other-activities" 
                                defaultText="Här kan du hitta inspiration på övriga saker att se och göra under ditt besök i Norrköping/Kolmården." 
                                tag="span" 
                            />
                        </p>
                    </div>
                </div>
                <div className="kolmarden-spacer MaxWH"></div>
            </section>
        </div>
    );
};

export default Kolmarden;
