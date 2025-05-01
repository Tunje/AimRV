import React from "react";
import { Link } from "react-router-dom";
import EditableText from "./EditableText";
import ImageModal from "./ImageModal";

const Competitions = () => {
  return (
    <div className="competitions-container flex flex_col MaxWH location">
      <ImageModal />
      <div className="competitions-spacer"></div>
      <div className="competitions-grid">
        <div className="competitions-card competitions-card-ulricehamn flex flex_col flex_j_SB location simple-background image-editable" id="competitions-ulricehamn-bg">
          <div className="trans-background competitions-header flex flex_col flex_j_C flex_a_C flex_text_C MaxWH">
            <EditableText 
              textKey="competitions-ulricehamn-title" 
              defaultText="ULRICEHAMN" 
              tag="p" 
              className="font_blue fonts_medium_B competitions-title text-center"
              style={{textAlign: 'center'}}
            />
            <EditableText 
              textKey="ulricehamn-date" 
              defaultText="datum insert" 
              tag="p" 
              className="font_blue fonts_medium competitions-date text-center"
              style={{textAlign: 'center'}}
            />
          </div>
          <div className="competitions-button-container flex flex_col flex_j_SA flex_a_C MaxWH Button">
            <Link to="/ulricehamn" className="location button-2 competitions-button">
              <span>Läs mer</span>
            </Link>
          </div>
        </div>
        
        <div className="competitions-card competitions-card-salen flex flex_col flex_j_SB location simple-background image-editable" id="competitions-salen-bg">
          <div className="trans-background competitions-header flex flex_col flex_j_C flex_a_C flex_text_C MaxWH">
            <EditableText 
              textKey="competitions-salen-title" 
              defaultText="SÄLEN" 
              tag="p" 
              className="font_blue fonts_medium_B competitions-title text-center"
              style={{textAlign: 'center'}}
            />
            <EditableText 
              textKey="salen-date" 
              defaultText="datum insert" 
              tag="p" 
              className="font_blue fonts_medium competitions-date text-center"
              style={{textAlign: 'center'}}
            />
          </div>
          <div className="competitions-button-container flex flex_col flex_j_SA flex_a_C MaxWH Button">
            <Link to="/salen" className="location button-2 competitions-button">
              <span>Läs mer</span>
            </Link>
          </div>
        </div>
      </div>
      <div className="competitions-grid">
        <div className="competitions-card competitions-card-hemsedal flex flex_col flex_j_SB location simple-background image-editable" id="competitions-hemsedal-bg">
          <div className="trans-background competitions-header flex flex_col flex_j_C flex_a_C flex_text_C MaxWH">
            <EditableText 
              textKey="competitions-hemsedal-title" 
              defaultText="HEMSEDAL" 
              tag="p" 
              className="font_blue fonts_medium_B competitions-title text-center"
              style={{textAlign: 'center'}}
            />
            <EditableText 
              textKey="hemsedal-date" 
              defaultText="datum insert" 
              tag="p" 
              className="font_blue fonts_medium competitions-date text-center"
              style={{textAlign: 'center'}}
            />
          </div>
          <div className="competitions-button-container flex flex_col flex_j_SA flex_a_C MaxWH Button">
            <Link to="/hemsedal" className="location button-2 competitions-button">
              <span>Läs mer</span>
            </Link>
          </div>
        </div>
        
        <div className="competitions-card competitions-card-kolmarden flex flex_col flex_j_SB location simple-background image-editable" id="competitions-kolmarden-bg">
          <div className="trans-background competitions-header flex flex_col flex_j_C flex_a_C flex_text_C MaxWH">
            <EditableText 
              textKey="competitions-kolmarden-title" 
              defaultText="KOLMÅRDEN" 
              tag="p" 
              className="font_blue fonts_medium_B competitions-title text-center"
              style={{textAlign: 'center'}}
            />
            <EditableText 
              textKey="kolmarden-date" 
              defaultText="datum insert" 
              tag="p" 
              className="font_blue fonts_medium competitions-date text-center"
              style={{textAlign: 'center'}}
            />
          </div>
          <div className="competitions-button-container flex flex_col flex_j_SA flex_a_C MaxWH Button">
            <Link to="/kolmarden" className="location button-2 competitions-button">
              <span>Läs mer</span>
            </Link>
          </div>
        </div>
      </div>
      <div className="competitions-grid">
        <div className="competitions-card competitions-card-trippeln flex flex_col flex_j_SB location simple-background" style={{ gridColumn: "span 2" }}>
          <div className="trans-background competitions-header flex flex_col flex_j_C flex_a_C flex_text_C MaxWH">
            <EditableText 
              textKey="competitions-trippeln-title" 
              defaultText="AIM CHALLENGE TRIPPELN" 
              tag="p" 
              className="font_blue fonts_medium_B competitions-title text-center"
              style={{textAlign: 'center'}}
            />
            <EditableText 
              textKey="trippeln-description" 
              defaultText="Tävla i alla tre deltävlingar och bli en del av AIM Challenge Trippeln" 
              tag="p" 
              className="font_blue fonts_medium competitions-date text-center"
              style={{textAlign: 'center'}}
            />
          </div>
          <div className="competitions-button-container flex flex_col flex_j_SA flex_a_C MaxWH Button">
            <Link to="/trippeln" className="location button-2 competitions-button">
              <span>Läs mer</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Competitions;
