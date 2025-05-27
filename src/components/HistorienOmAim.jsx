import React from "react";
import "../styles/index.css";
import EditableText from "./EditableText";
import BackgroundEditor from "./BackgroundEditor";

const HistorienOmAim = () => {
  return (
    <>
      <BackgroundEditor key="historien-om-aim-background-editor" />
      <div className="historien-om-aim-container">
      {/* Hero Section with Image */}
      <section className="historien-om-aim-hero-section">
        <div className="hero-content">
          <div className="hero-image-container background-editable" id="historien-om-aim-hero-image">
            <img
              src="/images/AIM_lindvallen_2024_AnkiGrothe_highres_125.jpg"
              alt="Historien Om AIM Hero"
            />
          </div>
        </div>
      </section>

      {/* Title Section */}
      <section className="historien-om-aim-title-section">
        <div className="title-container">
          <EditableText
            textKey="historien-om-aim-title"
            defaultText="HISTORIEN OM AIM"
            tag="h1"
            className="location-title"
          />
        </div>
      </section>

      {/* Content Section with dark blue background */}
      <section className="historien-om-aim-content-section">
        <div className="historien-om-aim-content-container">
          <div className="historien-om-aim-content">
            <EditableText
              textKey="historien-om-aim-text-1"
              defaultText="AIM Challenge är idag Nordens största multisporttävling men historien om AIM Challenge börjar mycket tidigare än så."
              tag="p"
              className="historien-om-aim-text"
            />

            <EditableText
              textKey="historien-om-aim-text-2"
              defaultText="Vi låter Lisa Nordlind, grundare och initiativtagare till AIM Challenge berätta hur det gick till:"
              tag="p"
              className="historien-om-aim-text"
            />

            <EditableText
              textKey="historien-om-aim-text-3"
              defaultText="År 2000 deltog jag i mitt livs största äventyr när jag tävlade i multisporttävlingen Camel Trophy."
              tag="p"
              className="historien-om-aim-text"
            />

            <EditableText
              textKey="historien-om-aim-text-4"
              defaultText="Av över en miljon sökande så var det 16 tvåmannalag från 22 länder som fick vara med och leka. Jag fick äran att representera Team Skandinavien tillsammans med brandmannen Mikael Stening."
              tag="p"
              className="historien-om-aim-text"
            />

            <EditableText
              textKey="historien-om-aim-text-5"
              defaultText="Lag på två personer skulle under 3 veckor samla så många kontroller som möjligt utav 400 utplacerade. Huvudtransportmedel var en specialbyggd RIB (Rigid Inflatable Boat). Båten var utrustad med mountainbikes, klätterutrustning, paddelbräda, dyk- och snorkel utrustning, tält, mat och vatten."
              tag="p"
              className="historien-om-aim-text"
            />

            <EditableText
              textKey="historien-om-aim-text-6"
              defaultText="Lagen fick själva välja vilka kontroller de ville ta, i vilken ordning och vilken väg."
              tag="p"
              className="historien-om-aim-text"
            />

            <EditableText
              textKey="historien-om-aim-text-7"
              defaultText="Olika kontroller gav olika poäng. Låter det bekant?"
              tag="p"
              className="historien-om-aim-text"
            />

            <EditableText
              textKey="historien-om-aim-text-8"
              defaultText="Tävlingsområdet var ögrupperna Tonga och Samoa i Söderhavet. Det var galet roligt och Mikael och jag lyckades ta oss till en fjärde plats."
              tag="p"
              className="historien-om-aim-text"
            />

            <EditableText
              textKey="historien-om-aim-text-9"
              defaultText="År 2004 spenderade jag min första sommar i Hemsedal. Det var ganska lugnt i den lilla skidorten så jag beslutade mig för att starta ett nytt event. För mig är det viktigt att träning är roligt och jag tycker att den bästa träningen är tävling. Eftersom Camel Trophy var det roligaste jag någonsin varit med om så föll det naturligt att försöka skapa ett event där andra människor får uppleva samma lekfulla koncept om än i en mindre skala. Tävlingen fick namnet 'Hemsedal Challenge' och den första helgen i september 2004 stod 150 deltagare på startlinjen."
              tag="p"
              className="historien-om-aim-text"
            />

            <EditableText
              textKey="historien-om-aim-text-10"
              defaultText="Nära, kära, vänner och familj samlades från alla håll och kanter för att ställa upp som funktionärer."
              tag="p"
              className="historien-om-aim-text"
            />

            <EditableText
              textKey="historien-om-aim-text-11"
              defaultText="Efter 5 år startade vi en tävling till i Lindvallen och bytte namn till AIM Challenge."
              tag="p"
              className="historien-om-aim-text"
            />

            <EditableText
              textKey="historien-om-aim-text-12"
              defaultText="Efter AIM Challenge 2019 tackade Lisa för sig och lämnade över stafettpinnen till Marcus Andersson, som nu står inför en spännande framtid där han ser frem emot att driva vidare och utveckla AIM Challenge."
              tag="p"
              className="historien-om-aim-text"
            />
          </div>
        </div>
      </section>

      {/* Background Image Section - Full width and height */}
      <div className="locked-background background-editable" id="historien-om-aim-background-image"></div>
    </div>
    </>
  );
};

export default HistorienOmAim;
