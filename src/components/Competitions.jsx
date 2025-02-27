import React from 'react';
import { Link } from 'react-router-dom';

const Competitions = () => {
    return (
        <div className="flex flex_col MaxWH location">
            <div className="set-03" style={{ height: '120px' }}></div>
            <div className="comp_row simple-background flex MaxWH location" style={{ height: '90vh' }}>
                <div className="comp_card simple-background flex flex_col flex_j_SB MaxWH location" style={{ width: '50%', height: '100%' }}>
                    <div className="trans-background page_02top flex flex_col flex_j_SA MaxWH" style={{ height: '30%' }}>
                        <p className="font_blue fonts_medium_B">ULRICEHAMN</p>
                        <p className="font_blue fonts_medium">datum insert</p>
                    </div>
                    <div className="page_02top flex flex_col flex_j_SA MaxWH Button">
                        <Link to="/ulricehamn" className="location button-2">Läs mer</Link>
                    </div>
                </div>
                <div className="comp_card simple-background flex flex_col flex_j_SB MaxWH location" style={{ width: '50%', height: '100%' }}>
                    <div className="trans-background page_02top flex flex_col flex_j_SA MaxWH" style={{ height: '30%' }}>
                        <p className="font_blue fonts_medium_B">SÄLEN</p>
                        <p className="font_blue fonts_medium">datum insert</p>
                    </div>
                    <div className="page_02top flex flex_col flex_j_SA MaxWH Button">
                        <Link to="/salen" className="location button-2">Läs mer</Link>
                    </div>
                </div>
            </div>
            <div className="comp_row simple-background flex MaxWH location" style={{ height: '90vh' }}>
                <div className="comp_card simple-background flex flex_col flex_j_SB MaxWH location" style={{ width: '50%', height: '100%' }}>
                    <div className="trans-background page_02top flex flex_col flex_j_SA MaxWH" style={{ height: '30%' }}>
                        <p className="font_blue fonts_medium_B">HEMSEDAL</p>
                        <p className="font_blue fonts_medium">datum insert</p>
                    </div>
                    <div className="page_02top flex flex_col flex_j_SA MaxWH Button">
                        <Link to="/hemsedal" className="location button-2">Läs mer</Link>
                    </div>
                </div>
                <div className="comp_card simple-background flex flex_col flex_j_SB MaxWH location" style={{ width: '50%', height: '100%' }}>
                    <div className="trans-background page_02top flex flex_col flex_j_SA MaxWH" style={{ height: '30%' }}>
                        <p className="font_blue fonts_medium_B">KOLMÅRDEN</p>
                        <p className="font_blue fonts_medium">datum insert</p>
                    </div>
                    <div className="page_02top flex flex_col flex_j_SA MaxWH Button">
                        <Link to="/kolmarden" className="location button-2">Läs mer</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Competitions;