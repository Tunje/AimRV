import React from 'react';
import '../styles/index.css';

const Regler = () => {
    return (
        <div className="flex flex_col regler-container">
            {/* Header Section - exactly like OmOss */}
            <section className="page_01 dynamic-background flex flex_col flex_j_E">
                <div className="trans-background page_01box flex flex_col flex_j_SA">
                    <div className="om-oss-title flex flex_j_C flex_a_C">
                        <p className="font_blue fonts_huge font_white">REGLER</p>
                    </div>
                </div>
            </section>

            {/* First Text Section with dark blue background */}
            <section className="om-oss-section regler-section flex flex_j_C flex_a_C set-03" style={{ paddingTop: '50px', paddingBottom: '50px' }}>
                <div className="om-oss-content MaxWH flex flex_col flex_j_C regler-content-container">
                    <div className="regler-content" style={{ paddingLeft: '150px', paddingRight: '150px', maxWidth: '80%' }}>
                        <h2 className="regler-heading font_white" style={{ paddingLeft: '30px', paddingRight: '30px' }}>LAGET</h2>
                        <ul className="regler-list" style={{ paddingLeft: '80px', paddingRight: '80px' }}>
                            <li className="fonts_small om-oss-text regler-list-item font_white">
                                Åldersgräns 15år/18år
                            </li>
                            <li className="fonts_small om-oss-text regler-list-item font_white">
                                Båda deltagarna måste ha olycksförsäkring som täcker olyckor i samband med tävling/idrottsaktiviteter.
                            </li>
                            <li className="fonts_small om-oss-text regler-list-item font_white">
                                Det är lagets ansvar att se till att de är registrerade i rätt klass.
                            </li>
                            <li className="fonts_small om-oss-text regler-list-item font_white">
                                Startnummer ska placeras fram på cykel samt synligt på kroppen på båda deltagarna
                            </li>
                            <li className="fonts_small om-oss-text regler-list-item font_white">
                                Det är tillåtet att använda GPS men det är alltid kartan som gäller. GPSens kartunderlag stämmer inte alltid överens med den utskrivna AIM kartan.
                            </li>
                            <li className="fonts_small om-oss-text regler-list-item font_white">
                                Laget ska alltid vara samlade max 20 meter mellan lagmedlemmarna.
                            </li>
                            <li className="fonts_small om-oss-text regler-list-item font_white">
                                Det är inte tillåtet att ha följebil.
                            </li>
                        </ul>

                        <h2 className="regler-heading-with-margin font_white" style={{ paddingLeft: '30px', paddingRight: '30px' }}>SÄKERHET</h2>
                        <ul className="regler-list" style={{ paddingLeft: '80px', paddingRight: '80px' }}>
                            <li className="fonts_small om-oss-text regler-list-item font_white">
                                Lagen väljer själva vilka kontroller de klarar att ta baserat på väder, egen färdighet och kunskap.
                            </li>
                            <li className="fonts_small om-oss-text regler-list-item font_white">
                                Lagen väljer själva vilken väg de vill ta till kontrollerna baserat på väder, egen färdighet och kunskap.
                            </li>
                            <li className="fonts_small om-oss-text regler-list-item font_white">
                                Trafiken är inte reglerad under tävlingen.
                            </li>
                            <li className="fonts_small om-oss-text regler-list-item font_white">
                                Trafikregler gäller alltid.
                            </li>
                            <li className="fonts_small om-oss-text regler-list-item font_white">
                                Första hjälpen kit ska bäras med under hela tävlingen
                            </li>
                            <li className="fonts_small om-oss-text regler-list-item font_white">
                                Hjälm ska bäras under all cykling, klättring, bouldering och rappellering
                            </li>
                            <li className="fonts_small om-oss-text regler-list-item font_white">
                                Vid olycka är det obligatoriska att hjälpa till.
                            </li>
                            <li className="fonts_small om-oss-text regler-list-item font_white">
                                Vid allvarlig olycka ring nöd nummer 112 i Sverige och 113 i Norge
                            </li>
                            <li className="fonts_small om-oss-text regler-list-item font_white">
                                Vid behov för enklare medicinsk hjälp ring telefonnumret på baksidan av kartan
                            </li>
                            <li className="fonts_small om-oss-text regler-list-item font_white">
                                Tävlingsledningens direktiv gäller alltid.
                            </li>
                        </ul>

                        <h2 className="regler-heading-with-margin font_white" style={{ paddingLeft: '30px', paddingRight: '30px' }}>ÖVRIGT</h2>
                        <ul className="regler-list" style={{ paddingLeft: '80px', paddingRight: '80px' }}>
                            <li className="fonts_small om-oss-text regler-list-item font_white">
                                Elcyklar är ej tillåtet, med undantag för Elcykelklassen i Hemsedal.
                            </li>
                            <li className="fonts_small om-oss-text regler-list-item font_white">
                                Beroende på kapacitet är det möjligt att använda liften i Hemsedal, lyssna noga på vad speakern ger för information för vad som gäller för årets tävling.
                            </li>
                            <li className="fonts_small om-oss-text regler-list-item font_white">
                                Deltagare som bryter ska genast meddela tävlingsledningen. Telefonnummer står på kartan.
                            </li>
                            <li className="fonts_small om-oss-text regler-list-item font_white">
                                Synliga, osynliga och tävlande domare befinner sig i tävlingsområdet och ser till att reglerna följs.
                            </li>
                            <li className="fonts_small om-oss-text regler-list-item font_white">
                                Regelbrott kan leda till poängavdrag eller diskvalificering
                            </li>
                            <li className="fonts_small om-oss-text regler-list-item font_white">
                                Deltagare som vinner priser som lottas ut pga olika händelser eller som dras på startnummer måste närvara på prisutdelningen för att få sitt pris. Är man inte närvarande och ditt namn/lagnamn dras drar vi reservnamn/lagnamn.
                            </li>
                            <li className="fonts_small om-oss-text regler-list-item font_white">
                                LINDVALLEN, viadukten mellan Lodgen och Experium är stängd under hela tävlingen.
                            </li>
                            <li className="fonts_small om-oss-text regler-list-item font_white">
                                Tävlingsledningens beslut går inte att överklaga.
                            </li>
                            <li className="fonts_small om-oss-text regler-list-item font_white">
                                Kloka människor skräpar inte ner, för alla andra är det förbjudet.
                            </li>
                            <li className="fonts_small om-oss-text regler-list-item font_white">
                                Respektera privat mark, ta inte genvägar över privata områden
                            </li>
                            <li className="fonts_small om-oss-text regler-list-item font_white">
                                Beträda odlad mark är förbjudet. Åkrar som inte har skördats är odlad mark.
                            </li>
                            <li className="fonts_small om-oss-text regler-list-item font_white">
                                Stäng alla grindar som ni öppnar.
                            </li>
                            <li className="fonts_small om-oss-text regler-list-item font_white">
                                Visa betande djur respekt genom att stiga av cykeln och gå förbi dem.
                            </li>
                        </ul>

                        <h2 className="regler-heading-with-margin font_white" style={{ paddingLeft: '30px', paddingRight: '30px' }}>OBLIGATORISK UTRUSTNING</h2>
                        <ul className="regler-list" style={{ paddingLeft: '80px', paddingRight: '80px' }}>
                            <li className="fonts_small om-oss-text regler-list-item font_white">
                                Cykel, utan elmotor med undantag för Elcykelklassen i Hemsedal.
                            </li>
                            <li className="fonts_small om-oss-text regler-list-item font_white">
                                Cykelhjälm vid cykling
                            </li>
                            <li className="fonts_small om-oss-text regler-list-item font_white">
                                Mobiltelefon (1 st per lag)
                            </li>
                            <li className="fonts_small om-oss-text regler-list-item font_white">
                                Första hjälpen (1 st per lag)
                            </li>
                        </ul>

                        <h2 className="regler-heading-with-margin font_white" style={{ paddingLeft: '30px', paddingRight: '30px' }}>VI REKOMMENDERAR ATT NI ÄVEN HAR MED ER</h2>
                        <ul className="regler-list" style={{ paddingLeft: '80px', paddingRight: '80px' }}>
                            <li className="fonts_small om-oss-text regler-list-item font_white">
                                Förstärkningskläder vid hastigt väderomslag
                            </li>
                            <li className="fonts_small om-oss-text regler-list-item font_white">
                                Kompass
                            </li>
                            <li className="fonts_small om-oss-text regler-list-item font_white">
                                Vatten i en Camelbak
                            </li>
                            <li className="fonts_small om-oss-text regler-list-item font_white">
                                Energy bars eller liknande
                            </li>
                            <li className="fonts_small om-oss-text regler-list-item font_white">
                                Klocka
                            </li>
                            <li className="fonts_small om-oss-text regler-list-item font_white">
                                Löparskor
                            </li>
                            <li className="fonts_small om-oss-text regler-list-item font_white">
                                Cykelslang och reparationskit + övriga verktyg, tex en biketool för enklare justeringar
                            </li>
                        </ul>

                        <h2 className="regler-heading-with-margin font_white" style={{ paddingLeft: '30px', paddingRight: '30px' }}>AIM CHALLENGE STÅR FÖR</h2>
                        <ul className="regler-list" style={{ paddingLeft: '80px', paddingRight: '80px' }}>
                            <li className="fonts_small om-oss-text regler-list-item font_white">
                                Kanot, SUP, sele, rep, hjälm vid firningar/klättring. All utrustning vid bemannade poster finns där klättring etc förekommer.
                            </li>
                        </ul>

                        <h2 className="regler-heading-with-margin font_white" style={{ paddingLeft: '30px', paddingRight: '30px' }}>VILLKOR I FÖRBINDELSE MED ANMÄLAN</h2>
                        <p className="fonts_small om-oss-text regler-list-item font_white" style={{ paddingLeft: '30px', paddingRight: '30px' }}>
                            Villkor i förbindelse med anmälan
                        </p>

                        <p className="fonts_small om-oss-text regler-contact font_white" style={{ paddingLeft: '30px', paddingRight: '30px' }}>
                            Om du har frågor: <a href="mailto:info@aimchallenge.com" className="font_white">info@aimchallenge.com</a>
                        </p>
                    </div>
                </div>
            </section>

            {/* Background Image Section - Using the exact same structure as OmOss */}
            <div className="locked-background" style={{ height: '50vh', width: '100%' }}>
            </div>
        </div>
    );
};

export default Regler;
