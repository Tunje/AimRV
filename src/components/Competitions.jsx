import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import EditableText from "./EditableText";
import BackgroundEditor from "./BackgroundEditor";
import { useText } from "../context/TextContext";

const Competitions = () => {
  const { currentLanguage } = useText();
  
  // State for button text
  const [readMoreText, setReadMoreText] = useState('');
  
  // Update button text when language changes
  useEffect(() => {
    // For English
    if (currentLanguage === 'en') {
      setReadMoreText('Read more');
    }
    // For Norwegian
    else if (currentLanguage === 'no') {
      setReadMoreText('Les mer');
    }
    // Default to Swedish
    else {
      setReadMoreText('Läs mer');
    }
  }, [currentLanguage]);
  
  // Add BackgroundEditor to the component
  return (
    <>
      {/* Include the BackgroundEditor component */}
      <BackgroundEditor />
    <div className="competitions-container flex flex_col MaxWH location">
      <div className="competitions-spacer"></div>
      <div className="competitions-grid">
        <div id="competitions-card-ulricehamn" className="competitions-card competitions-card-ulricehamn flex flex_col flex_j_SB location simple-background background-editable">
          <div className="trans-background competitions-header flex flex_col flex_j_C flex_a_C flex_text_C MaxWH" style={{ position: 'relative', zIndex: 30 }}>
            <EditableText
              textKey="competitions-ulricehamn-title"
              defaultText="ULRICEHAMN"
              tag="p"
              className="font_blue fonts_medium_B competitions-title text-center"
              style={{ textAlign: "center" }}
            />
            <EditableText
              textKey="ulricehamn-date"
              defaultText="datum insert"
              tag="p"
              className="font_blue fonts_medium competitions-date text-center"
              style={{ textAlign: "center" }}
            />
          </div>
          <div className="competitions-button-container flex flex_col flex_j_SA flex_a_C MaxWH Button" style={{ position: 'relative', zIndex: 30 }}>
            <Link
              to="/ulricehamn"
              className="location button-2 competitions-button"
            >
              <span>{readMoreText}</span>
            </Link>
          </div>
        </div>

        <div id="competitions-card-salen" className="competitions-card competitions-card-salen flex flex_col flex_j_SB location simple-background background-editable">
          <div className="trans-background competitions-header flex flex_col flex_j_C flex_a_C flex_text_C MaxWH" style={{ position: 'relative', zIndex: 30 }}>
            <EditableText
              textKey="competitions-salen-title"
              defaultText="SÄLEN"
              tag="p"
              className="font_blue fonts_medium_B competitions-title text-center"
              style={{ textAlign: "center" }}
            />
            <EditableText
              textKey="salen-date"
              defaultText="datum insert"
              tag="p"
              className="font_blue fonts_medium competitions-date text-center"
              style={{ textAlign: "center" }}
            />
          </div>
          <div className="competitions-button-container flex flex_col flex_j_SA flex_a_C MaxWH Button" style={{ position: 'relative', zIndex: 30 }}>
            <Link to="/salen" className="location button-2 competitions-button">
              <span>{readMoreText}</span>
            </Link>
          </div>
        </div>
      </div>
      <div className="competitions-grid">
        <div id="competitions-card-hemsedal" className="competitions-card competitions-card-hemsedal flex flex_col flex_j_SB location simple-background background-editable">
          <div className="trans-background competitions-header flex flex_col flex_j_C flex_a_C flex_text_C MaxWH" style={{ position: 'relative', zIndex: 30 }}>
            <EditableText
              textKey="competitions-hemsedal-title"
              defaultText="HEMSEDAL"
              tag="p"
              className="font_blue fonts_medium_B competitions-title text-center"
              style={{ textAlign: "center" }}
            />
            <EditableText
              textKey="hemsedal-date"
              defaultText="datum insert"
              tag="p"
              className="font_blue fonts_medium competitions-date text-center"
              style={{ textAlign: "center" }}
            />
          </div>
          <div className="competitions-button-container flex flex_col flex_j_SA flex_a_C MaxWH Button" style={{ position: 'relative', zIndex: 30 }}>
            <Link
              to="/hemsedal"
              className="location button-2 competitions-button"
            >
              <span>{readMoreText}</span>
            </Link>
          </div>
        </div>

        <div id="competitions-card-kolmarden" className="competitions-card competitions-card-kolmarden flex flex_col flex_j_SB location simple-background background-editable">
          <div className="trans-background competitions-header flex flex_col flex_j_C flex_a_C flex_text_C MaxWH" style={{ position: 'relative', zIndex: 30 }}>
            <EditableText
              textKey="competitions-kolmarden-title"
              defaultText="KOLMÅRDEN"
              tag="p"
              className="font_blue fonts_medium_B competitions-title text-center"
              style={{ textAlign: "center" }}
            />
            <EditableText
              textKey="kolmarden-date"
              defaultText="datum insert"
              tag="p"
              className="font_blue fonts_medium competitions-date text-center"
              style={{ textAlign: "center" }}
            />
          </div>
          <div className="competitions-button-container flex flex_col flex_j_SA flex_a_C MaxWH Button" style={{ position: 'relative', zIndex: 30 }}>
            <Link
              to="/kolmarden"
              className="location button-2 competitions-button"
            >
              <span>{readMoreText}</span>
            </Link>
          </div>
        </div>
      </div>
      <div className="competitions-grid">
        <div
          id="competitions-card-trippeln"
          className="competitions-card competitions-card-trippeln flex flex_col flex_j_SB location simple-background background-editable"
          style={{ gridColumn: "span 2" }}
        >
          <div className="trans-background competitions-header flex flex_col flex_j_C flex_a_C flex_text_C MaxWH" style={{ position: 'relative', zIndex: 30 }}>
            <EditableText
              textKey="competitions-trippeln-title"
              defaultText="AIM CHALLENGE TRIPPELN"
              tag="p"
              className="font_blue fonts_medium_B competitions-title text-center"
              style={{ textAlign: "center" }}
            />
            <EditableText
              textKey="trippeln-description"
              defaultText="Tävla i alla tre deltävlingar och bli en del av AIM Challenge Trippeln"
              tag="p"
              className="font_blue fonts_medium competitions-date text-center"
              style={{ textAlign: "center" }}
            />
          </div>
          <div className="competitions-button-container flex flex_col flex_j_SA flex_a_C MaxWH Button" style={{ position: 'relative', zIndex: 30 }}>
            <Link
              to="/trippeln"
              className="location button-2 competitions-button"
            >
              <span>{readMoreText}</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Competitions;
