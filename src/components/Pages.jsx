import React from "react";
import { Link } from "react-router-dom";
import EditableText from "./EditableText";
import { useText } from "../context/TextContext";
import NewsCarousel from "./NewsCarousel";

const Pages = () => {
  const { isAdmin } = useText();

  return (
    <div className="flex flex_col MaxWH location">
      <section
        id="page_01"
        className="page_01 dynamic-background background-editable"
      >
        <div className=" page_01box flex flex_col flex_j_SA MaxWH">
          <EditableText
            textKey="main-multisport-sedan"
            defaultText="MUTLISPORT SEDAN 2004"
            tag="p"
            className="font_white fonts_large"
          />
        </div>
      </section>

      <section id="page_02" className="page_02 flex flex_j_E MaxWH location">
        <h2 className="page_02-title">ÅRETS TÄVLINGAR</h2>
        <div className="page_02box  flex flex_col MaxWH location">
          <div
            id="page_02-ulricehamn-image"
            className="page_02-image background-editable"
            style={{
              backgroundImage:
                "url('images/EE-AIMChallenge24-Uhamn-0171-high.jpg')",
            }}
          ></div>
          <div className="page_02-content">
            <div className="page_02-header">
              <EditableText
                textKey="main-ulricehamn-title"
                defaultText="ULRICEHAMN 10/5"
                tag="p"
                className="font_white fonts_medium_B"
              />
              <EditableText
                textKey="ulricehamn-date"
                defaultText="datum insert"
                tag="p"
                className="font_white fonts_medium"
              />
            </div>
          </div>
          <div className="page_02-button">
            <Link to="/ulricehamn" className="location button-2">
              <span>Läs mer</span>
            </Link>
          </div>
        </div>

        <div className="page_02box  flex flex_col MaxWH location">
          <div
            id="page_02-salen-image"
            className="page_02-image background-editable"
            style={{
              backgroundImage:
                "url('/images/AIM_lindvallen_2024_AnkiGrothe_highres_155.jpg')",
            }}
          ></div>
          <div className="page_02-content">
            <div className="page_02-header">
              <EditableText
                textKey="main-salen-title"
                defaultText="SÄLEN 10/5"
                tag="p"
                className="font_white fonts_medium_B"
              />
              <EditableText
                textKey="salen-date"
                defaultText="datum insert"
                tag="p"
                className="font_white fonts_medium"
              />
            </div>
          </div>
          <div className="page_02-button">
            <Link to="/salen" className="location button-2">
              <span>Läs mer</span>
            </Link>
          </div>
        </div>

        <div className="page_02box flex flex_col MaxWH location">
          <div
            id="page_02-hemsedal-image"
            className="page_02-image background-editable"
            style={{
              backgroundImage:
                "url('/images/AIM_Hemsedal_2024_AnkiGrothe_45cm_300dpi_049.jpg')",
            }}
          ></div>
          <div className="page_02-content">
            <div className="page_02-header">
              <EditableText
                textKey="main-hemsedal-title"
                defaultText="HEMSEDAL 10/5"
                tag="p"
                className="font_white fonts_medium_B"
              />
              <EditableText
                textKey="hemsedal-date"
                defaultText="datum insert"
                tag="p"
                className="font_white fonts_medium"
              />
            </div>
          </div>
          <div className="page_02-button">
            <Link to="/hemsedal" className="location button-2">
              <span>Läs mer</span>
            </Link>
          </div>
        </div>

        <div className="page_02box  flex flex_col MaxWH location">
          <div
            id="page_02-kolmarden-image"
            className="page_02-image background-editable"
            style={{
              backgroundImage: "url('/images/kolmarden.jpg')",
            }}
          ></div>
          <div className="page_02-content">
            <div className="page_02-header">
              <EditableText
                textKey="main-kolmarden-title"
                defaultText="KOLMÅRDEN 10/5"
                tag="p"
                className="font_white fonts_medium_B"
              />
              <EditableText
                textKey="kolmarden-date"
                defaultText="datum insert"
                tag="p"
                className="font_white fonts_medium"
              />
            </div>
          </div>
          <div className="page_02-button">
            <Link to="/kolmarden" className="location button-2">
              <span>Läs mer</span>
            </Link>
          </div>
        </div>
      </section>

      <section id="page_03" className="page_03 flex MaxWH">
        <div className="page_03-content flex">
          <div className="page_03-text">
            <h2 className="page_03-title">OM AIM CHALLENGE</h2>
            <EditableText
              textKey="aim-challenge-desc-1"
              defaultText="AIM Challenge är en multisporttävling i lag om två, där ni under tre eller sex timmar samlar så många kontroller som möjligt med hjälp av en karta som är hemlig fram till start. Ni tar er fram framför allt på cykel, men kommer också att springa kortare sträckor till fots för att nå vissa kontroller."
              tag="p"
              className="font_white"
            />
            <EditableText
              textKey="aim-challenge-desc-2"
              defaultText="På kartan finns 60 kontroller, flera av dem innehåller äventyrliga moment som klättring, paddling eller simning, och ofta dyker det upp en eller annan överraskning baserat på destinationens unika miljö. Andra kontroller handlar mer om att ta sig dit och stämpla. Ni väljer själva vilka ni vill ta, i vilken ordning och hur långt ni vill gå för att samla poäng."
              tag="p"
              className="font_white"
            />
            <EditableText
              textKey="aim-challenge-desc-3"
              defaultText="AIM Challenge passar både erfarna lag som vill jaga varje poäng och nybörjare som är ute efter ett roligt och minnesvärt äventyr tillsammans. En tävling på era villkor och för alla, precis som multisport ska vara!"
              tag="p"
              className="font_white"
            />
            <div className="page_03-button">
              <Link to="/about" className="button-2">
                <span>LÄS MER</span>
              </Link>
            </div>
          </div>
          <div className="page_03-image">
            <div
              id="page_03-aim-image"
              className="background-editable"
              data-editable="true"
              style={{
                width: "90%",
                height: "90%",
                backgroundImage:
                  "url('images/AIM_lindvallen_2024_AnkiGrothe_highres_155.jpg')",
                backgroundSize: "contain",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            ></div>
          </div>
        </div>
      </section>

      {/*  Annons container */}

      <section className="ad-section">
        <div className="ad-container">
          <div className="ad-content">
            <div className="ad-carousel ad-editable" id="main-ad-section">
              <div className="annons-text">ANNONS</div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest News section */}

      <section id="latest-news" className="latest-news-section">
        <h2 className="latest-news-title">SENASTE NYTT</h2>
        <div className="latest-news-container">
          <NewsCarousel instanceId="main-page-carousel" />
        </div>
      </section>
    </div>
  );
};

export default Pages;
