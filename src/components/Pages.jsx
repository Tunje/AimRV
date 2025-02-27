import React from 'react';
import { Link } from 'react-router-dom';

const Pages = () => {
    return (
        <div className="flex flex_col MaxWH location">
            <section id="page_01" className="page_01 simple-background dynamic-background flex flex_col flex_j_E MaxWH location">
                <div className="trans-background page_01box flex flex_col flex_j_SA MaxWH">
                    <p className="font_blue fonts_medium">MULTISPORT FÖR ALLA</p>
                    <p className="font_blue fonts_large">MUTLISPORT SEDAN 2004</p>
                </div>
            </section>
            
            <section id="page_02" className="page_02 simple-background flex flex_j_E MaxWH location">
                <div className="page_02box simple-background flex flex_col flex_j_SB MaxWH location">
                    <div className="trans-background page_02top flex flex_col flex_j_SA MaxWH">
                        <p className="font_blue fonts_medium_B">ULRICEHAMN</p>
                        <p className="font_blue fonts_medium">datum insert</p>
                    </div>
                    <div className="page_02top flex flex_col flex_j_SA MaxWH Button">
                        <Link to="/ulricehamn" className="location button-2">Läs mer</Link>
                    </div>
                </div>
                <div className="page_02box simple-background flex flex_col flex_j_SB MaxWH location">
                    <div className="trans-background page_02top flex flex_col flex_j_SA MaxWH">
                        <p className="font_blue fonts_medium_B">SÄLEN</p>
                        <p className="font_blue fonts_medium">datum insert</p>
                    </div>
                    <div className="page_02top flex flex_col flex_j_SA MaxWH Button">
                        <Link to="/salen" className="location button-2">Läs mer</Link>
                    </div>
                </div>
                <div className="page_02box simple-background flex flex_col flex_j_SB MaxWH location">
                    <div className="trans-background page_02top flex flex_col flex_j_SA MaxWH">
                        <p className="font_blue fonts_medium_B">HEMSEDAL</p>
                        <p className="font_blue fonts_medium">datum insert</p>
                    </div>
                    <div className="page_02top flex flex_col flex_j_SA MaxWH Button">
                        <Link to="/hemsedal" className="location button-2">Läs mer</Link>
                    </div>
                </div>
                <div className="page_02box simple-background flex flex_col flex_j_SB MaxWH location">
                    <div className="trans-background page_02top flex flex_col flex_j_SA MaxWH">
                        <p className="font_blue fonts_medium_B">KOLMÅRDEN</p>
                        <p className="font_blue fonts_medium">datum insert</p>
                    </div>
                    <div className="page_02top flex flex_col flex_j_SA MaxWH">
                        <Link to="/kolmarden" className="location button-2">Läs mer</Link>
                    </div>
                </div>
            </section>

            <section id="page_03" className="page_02 simple-background dynamic-background flex flex_col flex_j_SA MaxWH location">
                <div className="page_01box flex flex_col flex_j_SA MaxWH  font_white">
                    <p className="font_white fonts_huge">SKISTARSHOP.COM*</p>
                    <p className="font_white fonts_large">OFFICIELL AIM CHALLENGE BUTIK</p>
                </div>
            </section>

            <section id="page_04" className="page_02 simple-background flex flex_j_SA MaxWH location">
                <div className="page_03box flex flex_col trans-background flex flex_j_SA MaxWH">
                    <p className="font_blue fonts_large">VAD ÄR AIM CHALLENGE?</p>
                    <p className="font_blue fonts_medium">AIM Challenge är en multisport tävling som passar för alla. Lag på två personer ska under 6 timmar ta så många kontroller som möjligt utav 60 utplacerade.</p>
                    <Link to="/aim-challenge" className="button-2">Läs mer</Link>
                </div>
                <div className="page_03box flex flex_col pad flex_j_SA MaxWH">
                    <div></div>
                </div>
            </section>
        </div>
    );
};

export default Pages;
