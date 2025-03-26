import React from "react";
import { Link } from "react-router-dom";
import EditableText from "./EditableText";

const Pages = () => {
  return (
    <div className="flex flex_col MaxWH location">
      <section id="page_01" className="page_01 dynamic-background ">
        <div className=" page_01box flex flex_col flex_j_SA MaxWH">
          <EditableText
            textKey="main-multisport-for-alla"
            defaultText="MULTISPORT FÖR ALLA"
            tag="p"
            className="font_white fonts_medium"
          />
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
            className="page_02-image"
            style={{
              backgroundImage:
                "url('/images/EE-AIMChallenge24-Uhamn-0171-high.jpg')",
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
            className="page_02-image"
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
            className="page_02-image"
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
            className="page_02-image"
            style={{
              backgroundImage:
                "url('/images/AIM_lindvallen_2024_AnkiGrothe_highres_125.jpg')",
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
              defaultText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
              tag="p"
              className="font_white"
            />
            <EditableText
              textKey="aim-challenge-desc-2"
              defaultText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
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
            <img
              src="/images/AIM_lindvallen_2024_AnkiGrothe_highres_155.jpg"
              alt="AIM Challenge"
            />
          </div>
        </div>
      </section>

      {/*  Annons container */}

      <section id="ad-section" className="ad-section">
        <div className="ad-container">
          <div className="ad-content">
            <p>ANNONS</p>
          </div>
        </div>
      </section>

      {/* Latest News section */}

      <section id="latest-news" className="latest-news-section">
        <h2 className="latest-news-title">SENASTE NYTT</h2>
        <div className="latest-news-container">
          <div className="news-card">
            <div className="news-image">
              <img
                src="/images/AIM_Hemsedal_2024_AnkiGrothe_45cm_300dpi_049.jpg"
                alt="News"
              />
            </div>
            <div className="news-content">
              <h3 className="news-location">ULRICEHAMN 10/5</h3>
              <p className="news-description">
                Brödtext om tävlingen, 2 korta meningar
              </p>
              <div className="news-button">
                <Link to="/news/1" className="button-2">
                  <span>LÄS MER</span>
                </Link>
              </div>
            </div>
          </div>

          <div className="news-card">
            <div className="news-image">
              <img
                src="/images/AIM_Hemsedal_2024_AnkiGrothe_45cm_300dpi_049.jpg"
                alt="News"
              />
            </div>
            <div className="news-content">
              <h3 className="news-location">ULRICEHAMN 10/5</h3>
              <p className="news-description">
                Brödtext om tävlingen, 2 korta meningar
              </p>
              <div className="news-button">
                <Link to="/news/2" className="button-2">
                  <span>LÄS MER</span>
                </Link>
              </div>
            </div>
          </div>

          <div className="news-card">
            <div className="news-image">
              <img
                src="/images/AIM_Hemsedal_2024_AnkiGrothe_45cm_300dpi_049.jpg"
                alt="News"
              />
            </div>
            <div className="news-content">
              <h3 className="news-location">ULRICEHAMN 10/5</h3>
              <p className="news-description">
                Brödtext om tävlingen, 2 korta meningar
              </p>
              <div className="news-button">
                <Link to="/news/3" className="button-2">
                  <span>LÄS MER</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*    <section id="page_04" className="aim-section flex MaxWH">
        <div className="page_03box flex flex_col trans-background flex_j_SA MaxWH aim-info-box">
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
      </section> */}
    </div>
  );
};

export default Pages;
