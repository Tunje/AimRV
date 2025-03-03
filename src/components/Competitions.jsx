import React from 'react';
import { Link } from 'react-router-dom';
import EditableText from './EditableText';

const Competitions = () => {
    return (
        <div className="flex flex_col MaxWH location">
            <div className="competitions-spacer"></div>
            <div className="competitions-row flex MaxWH location set-03">
                <div className="competitions-card competitions-card-ulricehamn flex flex_col flex_j_SB MaxWH location simple-background">
                    <div className="trans-background competitions-header flex flex_col flex_j_SA MaxWH">
                        <EditableText 
                            textKey="competitions-ulricehamn-title" 
                            defaultText="ULRICEHAMN" 
                            tag="p" 
                            className="font_blue fonts_medium_B competitions-title"
                        />
                        <EditableText 
                            textKey="ulricehamn-date" 
                            defaultText="datum insert" 
                            tag="p" 
                            className="font_blue fonts_medium competitions-date"
                        />
                    </div>
                    <div className="competitions-button-container flex flex_col flex_j_SA flex_a_C MaxWH Button">
                        <Link to="/ulricehamn" className="location button-2 competitions-button">
                            <span>Läs mer</span>
                        </Link>
                    </div>
                </div>
                
                <div className="competitions-card competitions-card-salen flex flex_col flex_j_SB MaxWH location simple-background">
                    <div className="trans-background competitions-header flex flex_col flex_j_SA MaxWH">
                        <EditableText 
                            textKey="competitions-salen-title" 
                            defaultText="SÄLEN" 
                            tag="p" 
                            className="font_blue fonts_medium_B competitions-title"
                        />
                        <EditableText 
                            textKey="salen-date" 
                            defaultText="datum insert" 
                            tag="p" 
                            className="font_blue fonts_medium competitions-date"
                        />
                    </div>
                    <div className="competitions-button-container flex flex_col flex_j_SA flex_a_C MaxWH Button">
                        <Link to="/salen" className="location button-2 competitions-button">
                            <span>Läs mer</span>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="competitions-row flex MaxWH location">
                <div className="competitions-card competitions-card-hemsedal flex flex_col flex_j_SB MaxWH location simple-background">
                    <div className="trans-background competitions-header flex flex_col flex_j_SA MaxWH">
                        <EditableText 
                            textKey="competitions-hemsedal-title" 
                            defaultText="HEMSEDAL" 
                            tag="p" 
                            className="font_blue fonts_medium_B competitions-title"
                        />
                        <EditableText 
                            textKey="hemsedal-date" 
                            defaultText="datum insert" 
                            tag="p" 
                            className="font_blue fonts_medium competitions-date"
                        />
                    </div>
                    <div className="competitions-button-container flex flex_col flex_j_SA flex_a_C MaxWH Button">
                        <Link to="/hemsedal" className="location button-2 competitions-button">
                            <span>Läs mer</span>
                        </Link>
                    </div>
                </div>
                
                <div className="competitions-card competitions-card-kolmarden flex flex_col flex_j_SB MaxWH location simple-background">
                    <div className="trans-background competitions-header flex flex_col flex_j_SA MaxWH">
                        <EditableText 
                            textKey="competitions-kolmarden-title" 
                            defaultText="KOLMÅRDEN" 
                            tag="p" 
                            className="font_blue fonts_medium_B competitions-title"
                        />
                        <EditableText 
                            textKey="kolmarden-date" 
                            defaultText="datum insert" 
                            tag="p" 
                            className="font_blue fonts_medium competitions-date"
                        />
                    </div>
                    <div className="competitions-button-container flex flex_col flex_j_SA flex_a_C MaxWH Button">
                        <Link to="/kolmarden" className="location button-2 competitions-button">
                            <span>Läs mer</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Competitions;