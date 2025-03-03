import React from 'react';
import { Link } from 'react-router-dom';
import EditableText from './EditableText';

const Pages = () => {
    return (
        <div className="flex flex_col MaxWH location">
            <section id="page_01" className="page_01 dynamic-background flex flex_col flex_j_E MaxWH location">
                <div className="trans-background page_01box flex flex_col flex_j_SA MaxWH">
                    <EditableText 
                        textKey="main-multisport-for-alla" 
                        defaultText="MULTISPORT FÖR ALLA" 
                        tag="p" 
                        className="font_blue fonts_medium" 
                    />
                    <EditableText 
                        textKey="main-multisport-sedan" 
                        defaultText="MUTLISPORT SEDAN 2004" 
                        tag="p" 
                        className="font_blue fonts_large" 
                    />
                </div>
            </section>
            
            <section id="page_02" className="page_02 simple-background dynamic-background flex flex_j_E MaxWH location">
                <div className="page_02box simple-background flex flex_col flex_j_SB MaxWH location">
                    <div className="trans-background page_02top flex flex_col flex_j_SA MaxWH">
                        <EditableText 
                            textKey="main-ulricehamn-title" 
                            defaultText="ULRICEHAMN" 
                            tag="p" 
                            className="font_blue fonts_medium_B" 
                        />
                        <EditableText 
                            textKey="ulricehamn-date" 
                            defaultText="datum insert" 
                            tag="p" 
                            className="font_blue fonts_medium" 
                        />
                    </div>
                    <div className="page_02top flex flex_col flex_j_SA MaxWH Button">
                        <Link to="/ulricehamn" className="location button-2">
                            <span>Läs mer</span>
                        </Link>
                    </div>
                </div>
                <div className="page_02box simple-background flex flex_col flex_j_SB MaxWH location">
                    <div className="trans-background page_02top flex flex_col flex_j_SA MaxWH">
                        <EditableText 
                            textKey="main-salen-title" 
                            defaultText="SÄLEN" 
                            tag="p" 
                            className="font_blue fonts_medium_B" 
                        />
                        <EditableText 
                            textKey="salen-date" 
                            defaultText="datum insert" 
                            tag="p" 
                            className="font_blue fonts_medium" 
                        />
                    </div>
                    <div className="page_02top flex flex_col flex_j_SA MaxWH Button">
                        <Link to="/salen" className="location button-2">
                            <span>Läs mer</span>
                        </Link>
                    </div>
                </div>
                <div className="page_02box simple-background flex flex_col flex_j_SB MaxWH location">
                    <div className="trans-background page_02top flex flex_col flex_j_SA MaxWH">
                        <EditableText 
                            textKey="main-hemsedal-title" 
                            defaultText="HEMSEDAL" 
                            tag="p" 
                            className="font_blue fonts_medium_B" 
                        />
                        <EditableText 
                            textKey="hemsedal-date" 
                            defaultText="datum insert" 
                            tag="p" 
                            className="font_blue fonts_medium" 
                        />
                    </div>
                    <div className="page_02top flex flex_col flex_j_SA MaxWH Button">
                        <Link to="/hemsedal" className="location button-2">
                            <span>Läs mer</span>
                        </Link>
                    </div>
                </div>
                <div className="page_02box simple-background flex flex_col flex_j_SB MaxWH location">
                    <div className="trans-background page_02top flex flex_col flex_j_SA MaxWH">
                        <EditableText 
                            textKey="main-kolmarden-title" 
                            defaultText="KOLMÅRDEN" 
                            tag="p" 
                            className="font_blue fonts_medium_B" 
                        />
                        <EditableText 
                            textKey="kolmarden-date" 
                            defaultText="datum insert" 
                            tag="p" 
                            className="font_blue fonts_medium" 
                        />
                    </div>
                    <div className="page_02top flex flex_col flex_j_SA MaxWH Button">
                        <Link to="/kolmarden" className="location button-2">
                            <span>Läs mer</span>
                        </Link>
                    </div>
                </div>
            </section>

            <section id="page_03" className="page_02 simple-background flex flex_col flex_j_SA MaxWH location">
                <div className="page_01box flex flex_col flex_j_SA MaxWH  font_white">
                    <EditableText 
                        textKey="main-skistarshop" 
                        defaultText="SKISTARSHOP.COM*" 
                        tag="p" 
                        className="font_white fonts_huge" 
                    />
                    <EditableText 
                        textKey="main-official-butik" 
                        defaultText="OFFICIELL AIM CHALLENGE BUTIK" 
                        tag="p" 
                        className="font_white fonts_large" 
                    />
                </div>
            </section>

            <section id="page_04" className="page_02 simple-background flex flex_j_SA MaxWH location">
                <div className="page_03box flex flex_col trans-background flex flex_j_SA MaxWH">
                    <EditableText 
                        textKey="main-what-is-aim" 
                        defaultText="VAD ÄR AIM CHALLENGE?" 
                        tag="p" 
                        className="font_blue fonts_large" 
                    />
                    <EditableText 
                        textKey="main-aim-description" 
                        defaultText="AIM Challenge är en multisport tävling som passar för alla. Lag på två personer ska under 6 timmar ta så många kontroller som möjligt utav 60 utplacerade." 
                        tag="p" 
                        className="font_blue fonts_medium" 
                    />
                    <Link to="/aim-challenge" className="button-2">
                        <span>Läs mer</span>
                    </Link>
                </div>
                <div className="page_03box flex flex_col pad flex_j_SA MaxWH">
                    <div></div>
                </div>
            </section>
        </div>
    );
};

export default Pages;
