import React, { useState } from 'react';
import './styles/index.js';
import './styles/java/scripts.js';
import 'styles/index.css'
function App() {
        return (
            <div className="flex flex_col MaxWH location">
                {/* Navbar end, pages start */}
                <section id="page_01" className="page_01 dynamic-background flex flex_col flex_j_E MaxWH location">
                    <div className=" trans-background page_01box flex flex_col flex_j_SA MaxWH">
                        <p>Multisport för alla</p>
                        <p>Multisport seadan 2004</p>
                    </div>
                </section>
                <section id="page_02" className="page_02 flex flex_j_E MaxWH location">
                    <div class="page_02box set-01 flex flex_col flex_j_SB MaxWH location">
                        <div className=" trans-background page_02top flex flex_col flex_j_SA MaxWH">
                            <p>ULRICEHAMN</p>
                            <p>datum insert</p>
                        </div>
                        <div className="page_02top flex flex_col flex_j_SA MaxWH">
                            <p>Läs mer</p>
                        </div>
                    </div>
                    <div class="page_02box set-02 flex flex_col flex_j_SB MaxWH location">
                        <div className=" trans-background page_02top flex flex_col flex_j_SA MaxWH">
                            <p>SÄLEN</p>
                            <p>datum insert</p>
                        </div>
                        <div className="page_02top flex flex_col flex_j_SA MaxWH">
                            <p>Läs mer</p>
                        </div>
                    </div>
                    <div class="page_02box set-01 flex flex_col flex_j_SB MaxWH location">
                        <div className=" trans-background page_02top flex flex_col flex_j_SA MaxWH">
                            <p>HEMSEDAL</p>
                            <p>datum insert</p>
                        </div>
                        <div className="page_02top flex flex_col flex_j_SA MaxWH">
                            <p>Läs mer</p>
                        </div>
                    </div>
                    <div class="page_02box set-02 flex flex_col flex_j_SB MaxWH location">
                        <div className=" trans-background page_02top flex flex_col flex_j_SA MaxWH">
                            <p>KOLMÅRDEN</p>
                            <p>datum insert</p>
                        </div>
                        <div className="page_02top flex flex_col flex_j_SA MaxWH">
                            <p>Läs mer</p>
                        </div>
                    </div>
                </section>
                <section id="page_03" className="page_02 dynamic-background flex flex_col flex_j_SA MaxWH location">
                    <div className="page_01box flex flex_col flex_j_SA MaxWH">
                        <p>Skistarshop.com*</p>
                        <p>OFFICIELL AIM CHALLENGE BUTIK</p>
                    </div>
                </section>
                <section id="page_04" className="page_02 set-01 dynamic-background flex flex_j_SA MaxWH location">
                    <div className="page_03box flex flex_col trans-background pad flex_j_SA MaxWH">
                        <p>VAD ÄR AIM CHALLENGE?</p>
                        <p>AIM Challenge är en multisport tävling som passar för alla. Lag på två personer ska under 6 timmar ta så många kontroller som möjligt utav 60 utplacerade. Olika kontroller ger olika poäng beroende på svårighetsgrad och det är omöjligt att ta alla. Många kontroller kan nås med cykel. Vissa kräver att deltagarna springer, klättrar, simmar, balanserar eller paddlar.</p>
                        <p>Läs mer</p>
                    </div>
                    <div className="page_03box flex flex_col pad flex_j_SA MaxWH">
                        <div></div>
                    </div>
                </section>
                {/* pages end */}
            </div>
        );
    }
export default App;
