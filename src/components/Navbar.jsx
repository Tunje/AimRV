import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/index.js';
import '../styles/java/scripts.js';
import '../styles/index.css';
import 'font-awesome/css/font-awesome.min.css';

const Navbar = () => {
    const [dropOpen1, setDropOpen1] = useState(false);
    const [dropOpen2, setDropOpen2] = useState(false);

    return (
        <div className="navbar set-03 flex flex_j_SA MaxWH location font_white">
            <div className="navim MaxWH location">
                <Link to="/">
                    <img src="/AimRV/images/logos/Aim_Challenge_logo_white.svg" alt="aim challange logo" className="custom-image navim"></img>
                </Link>
            </div>
            <div className="navbside MaxWH location flex flex_j_SA">
                {/* Drop Button */}
                <div className="navbbutton flex flex_j_SA flex_col MaxWH location">
                    <button className="navbbutton flex flex_j_SA flex_col MaxWH location button font_blue" onClick={() => setDropOpen1(!dropOpen1)}>
                        Tävlingar
                    </button>
                    {dropOpen1 && (
                        <div className="drop-down">
                            <Link to="/competitions" className="drop-item">TÄVLINGAR</Link>
                            <Link to="/page2" className="drop-item">ULRICEHAMN</Link>
                            <Link to="/page3" className="drop-item">SÄLEN</Link>
                            <Link to="/page3" className="drop-item">HEMSEDAL</Link>
                            <Link to="/page3" className="drop-item">KOLMÅRDEN</Link>
                            <Link to="/page3" className="drop-item">PAIM CHALLENGE TRIPPELN</Link>
                            <Link to="/page3" className="drop-item">RESULTAT</Link>
                            <Link to="/page3" className="drop-item">GALLERI</Link>
                        </div>
                    )}
                </div>
                <div className="navbbutton flex flex_j_SA MaxWH location button">
                    <a href="https://raceid.com/sv/campaigns/bcfa3952-92c0-11ef-a892-06546bc3018f">Anmälan</a>
                </div>
                <div className="navbbutton flex flex_j_SA flex_col MaxWH location">
                    <button className="navbbutton MaxWH location button font_blue" onClick={() => setDropOpen2(!dropOpen2)}>
                        Om oss
                    </button>
                    {dropOpen2 && (
                        <div className="drop-down">
                            <Link to="/page1" className="drop-item">Om oss</Link>
                            <Link to="/page2" className="drop-item">Regler</Link>
                            <Link to="/page3" className="drop-item">FAQ</Link>
                            <Link to="/page3" className="drop-item">Historien om AIM</Link>
                        </div>
                    )}
                </div>

                <div className="navbbutton flex flex_j_SA MaxWH location button">
                    <Link to="#">Sponsorer</Link>
                </div>
                <div className="navbbutton flex flex_j_SA MaxWH location button">
                    <Link to="#">Senaste nytt</Link>
                </div>
                <div className="navbbutton flex flex_j_SA MaxWH location button">
                    <Link to="#">Kontakta oss</Link>
                </div>
                <div className="navbbutton flex flex_j_SA MaxWH location button">
                    <a href="#">SV|NO|EN</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;