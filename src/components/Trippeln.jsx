import React from 'react';
import '../styles/index.css';
import '../styles/java/scripts.js';

const Trippeln = () => {
    return (
        <div className="MaxWH location">
            <section className="page_01 dynamic-background flex flex_col flex_j_E">
                <div className="trans-background page_01box flex flex_col flex_j_SA">
                    <p className="font_blue fonts_huge">AIM CHALLENGE TRIPPELN</p>
                </div>
            </section>
            
            <section className="trippeln-section trippeln-bg">
                <div className="trippeln-content trans-background">
                    <div className="font_blue">
                        <p className="fonts_medium">Trippeln är en tävling i tävlingen där de som deltar i minst tre av årets deltävlingar är med och tävlar om den mycket hedervärda titeln Vinnare av AIM Challenge Trippeln!</p>
                        <br />
                        <p>AIM Challenge Trippeln ersätter Landskampen som sedan 2010 har varit en tävling i tävlingen för de som genomfört AIM Challenge både i Lindvallen och Hemsedal. En tävling där det tävlats för antingen Sverige eller Norge, där det vinnande landet har hyllats och den som bidragit mest till sitt land har prisats.</p>
                        <br />
                        <p>Med AIM Challenge Trippeln lägger vi ner stridsyxan mellan Sverige och Norge och gör det därmed möjligt att även köra mixade lag mellan olika nationer utan att detta skapar en konflikt.</p>
                        <br />
                        <p className="fonts_medium">Hur går AIM Challenge Trippeln till:</p>
                        <br />
                        <p>AIM Challenge Trippeln är en tävling i tävlingen för de lag som deltar på minst tre deltävlingar under ett och samma år. Tävlingarna som ingår är Ulricehamn, Sälen, Hemsedal och Kolmården. Det är fritt för laget att välja om ni önskar att delta i 3- eller 6-timmars tävlingen i Ulricehamn och Kolmården, båda anses att vara likvärdiga för Trippeln.</p>
                        <br />
                        <p>Vid anmälan till Trippeln blir man per automatik anmäld till alla fyra deltävlingar och väljer själv om man vill delta i tre eller fyra tävlingar. Priset för att anmäla sig till trippeln är rabatterat och blir billigare redan vid start i tre deltävlingar. Skulle ett lag delta i alla fyra deltävlingarna så räknas de tre bästa resultaten till Trippeln.</p>
                        <br />
                        <p>Det gäller att samla så många poäng som möjligt under årets tävlingar där varje lag får räkna in sina tre bästa resultat från det gångna året. Vinnaren av AIM Challenge Trippeln kommer att utses genom ett poängsystem som bygger på hur många poäng laget fått procentuellt i förhållande till vinnarlaget i respektive klass. Varje lag kommer då få en poängsumma mellan 1 och 100 per tävling och efter alla deltävlingarna kommer dessa poäng att adderas och det lag med högst sammanlagda poäng kommer att stå på prispallen! Skulle två lag få samma sammanlagda poäng så kommer vi se på placeringar i de enskilda loppen för att utse en vinnare.</p>
                        <br />
                        <p>Vid anmälan till AIM Challenge Trippeln så anmäler sig laget till alla fyra deltävlingarna, varav minst tre måste genomföras för att få ett resultat i Trippeln. Ett lag består av två personer, men om någon i laget skulle få förhinder inför någon av tävlingarna så gäller följande: För att resultatet i Trippeln skall bli godkänt så måste minst en i laget delta i alla tre tävlingarna, samt att deltagare 2 deltar vid minst två deltävlingar. Det vill säga att det är möjligt att ta in en reserv under en av deltävlingarna och fortfarande tävla som lag om den hedervärda titeln! I det fall deltagare 1 tävlat med tre olika lagkompisar under året är det enbart den som deltagit vid alla tre tävlingarna som kommer att premieras.</p>
                        <br />
                        <p>Det är inte möjligt att sälja sin startplats i Trippeln vidare för den tävling som laget eventuellt inte deltar i.</p>
                    </div>
                </div>
                <div className="trippeln-spacer"></div>
            </section>

            <section className="ulric-button-section-bg flex flex_j_C flex_a_C">
                <a href="https://raceid.com/sv/races/13016/about" target="_blank" rel="noopener noreferrer" className="ulric-button flex flex_j_C flex_a_C">
                    <p className="font_white fonts_medium">TA MIG TILL ANMÄLAN</p>
                </a>
            </section>
        </div>
    );
};

export default Trippeln;
