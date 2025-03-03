import React from 'react';
import '../styles/index.css';
import EditableText from './EditableText';
import EditableBackgroundImage from './EditableBackgroundImage';

const HistorienOmAim = () => {
    return (
        <div className="flex flex_col">
            {/* Header Section - exactly like OmOss */}
            <section className="page_01 dynamic-background flex flex_col flex_j_E">
                <div className="trans-background page_01box flex flex_col flex_j_SA">
                    <div className="om-oss-title flex flex_j_C flex_a_C">
                        <EditableText 
                            textKey="historien-om-aim-title" 
                            defaultText="HISTORIEN OM AIM" 
                            tag="p" 
                            className="font_blue fonts_huge font_white" 
                        />
                    </div>
                </div>
            </section>

            {/* Content Section with dark blue background */}
            <section className="om-oss-section regler-section flex flex_j_C flex_a_C set-03 historien-om-aim-section">
                <div className="om-oss-content MaxWH flex flex_col flex_j_C regler-content-container">
                    <div className="regler-content historien-om-aim-content">
                        <EditableText 
                            textKey="historien-om-aim-text-1" 
                            defaultText="AIM Challenge är idag Nordens största multisporttävling men historien om AIM Challenge börjar mycket tidigare än så." 
                            tag="p" 
                            className="fonts_small om-oss-text font_white historien-om-aim-text" 
                        />
                        
                        <EditableText 
                            textKey="historien-om-aim-text-2" 
                            defaultText="Vi låter Lisa Nordlind, grundare och initiativtagare till AIM Challenge berätta hur det gick till:" 
                            tag="p" 
                            className="fonts_small om-oss-text font_white historien-om-aim-text" 
                        />
                        
                        <EditableText 
                            textKey="historien-om-aim-text-3" 
                            defaultText="År 2000 deltog jag i mitt livs största äventyr när jag tävlade i multisporttävlingen Camel Trophy." 
                            tag="p" 
                            className="fonts_small om-oss-text font_white historien-om-aim-text" 
                        />
                        
                        <EditableText 
                            textKey="historien-om-aim-text-4" 
                            defaultText="Av över en miljon sökande så var det 16 tvåmannalag från 22 länder som fick vara med och leka. Jag fick äran att representera Team Skandinavien tillsammans med brandmannen Mikael Stening." 
                            tag="p" 
                            className="fonts_small om-oss-text font_white historien-om-aim-text" 
                        />
                        
                        <EditableText 
                            textKey="historien-om-aim-text-5" 
                            defaultText="Lag på två personer skulle under 3 veckor samla så många kontroller som möjligt utav 400 utplacerade. Huvudtransportmedel var en specialbyggd RIB (Rigid Inflatable Boat). Båten var utrustad med mountainbikes, klätterutrustning, paddelbräda, dyk- och snorkel utrustning, tält, mat och vatten." 
                            tag="p" 
                            className="fonts_small om-oss-text font_white historien-om-aim-text" 
                        />
                        
                        <EditableText 
                            textKey="historien-om-aim-text-6" 
                            defaultText="Lagen fick själva välja vilka kontroller de ville ta, i vilken ordning och vilken väg." 
                            tag="p" 
                            className="fonts_small om-oss-text font_white historien-om-aim-text" 
                        />
                        
                        <EditableText 
                            textKey="historien-om-aim-text-7" 
                            defaultText="Olika kontroller gav olika poäng. Låter det bekant?" 
                            tag="p" 
                            className="fonts_small om-oss-text font_white historien-om-aim-text" 
                        />
                        
                        <EditableText 
                            textKey="historien-om-aim-text-8" 
                            defaultText="Tävlingsområdet var ögrupperna Tonga och Samoa i Söderhavet. Det var galet roligt och Mikael och jag lyckades ta oss till en fjärde plats." 
                            tag="p" 
                            className="fonts_small om-oss-text font_white historien-om-aim-text" 
                        />
                        
                        <EditableText 
                            textKey="historien-om-aim-text-9" 
                            defaultText="År 2004 spenderade jag min första sommar i Hemsedal. Det var ganska lugnt i den lilla skidorten så jag beslutade mig för att starta ett nytt event. För mig är det viktigt att träning är roligt och jag tycker att den bästa träningen är tävling. Eftersom Camel Trophy var det roligaste jag någonsin varit med om så föll det naturligt att försöka skapa ett event där andra människor får uppleva samma lekfulla koncept om än i en mindre skala. Tävlingen fick namnet 'Hemsedal Challenge' och den första helgen i september 2004 stod 150 deltagare på startlinjen." 
                            tag="p" 
                            className="fonts_small om-oss-text font_white historien-om-aim-text" 
                        />
                        
                        <EditableText 
                            textKey="historien-om-aim-text-10" 
                            defaultText="Nära, kära, vänner och familj samlades från alla håll och kanter för att ställa upp som funktionärer." 
                            tag="p" 
                            className="fonts_small om-oss-text font_white historien-om-aim-text" 
                        />
                        
                        <EditableText 
                            textKey="historien-om-aim-text-11" 
                            defaultText="Efter 5 år startade vi en tävling till i Lindvallen och bytte namn till AIM Challenge." 
                            tag="p" 
                            className="fonts_small om-oss-text font_white historien-om-aim-text" 
                        />
                        
                        <EditableText 
                            textKey="historien-om-aim-text-12" 
                            defaultText="Efter AIM Challenge 2019 tackade Lisa för sig och lämnade över stafettpinnen till Marcus Andersson, som nu står inför en spännande framtid där han ser frem emot att driva vidare och utveckla AIM Challenge." 
                            tag="p" 
                            className="fonts_small om-oss-text font_white historien-om-aim-text" 
                        />
                    </div>
                </div>
            </section>

            {/* Background Image Section - Full width and height */}
            <EditableBackgroundImage
                backgroundKey="historien-om-aim-bottom-bg"
                defaultSrc="/images/AIM_Hemsedal_2024_AnkiGrothe_45cm_300dpi_094.jpg"
                className="page_01 dynamic-background flex flex_col flex_j_E"
            />
        </div>
    );
};

export default HistorienOmAim;
