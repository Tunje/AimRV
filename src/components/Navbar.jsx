import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useText } from "../context/TextContext";
import "../styles/index.css";
import "../styles/java/scripts.js";

const Navbar = () => {
  const [dropOpen1, setDropOpen1] = useState(false);
  const [dropOpen2, setDropOpen2] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { isAuthenticated, currentUser, logout } = useAuth();
  const { isEditing, getText, updateText } = useText();
  const navigate = useNavigate();

  const closeDropdown1 = () => {
    setDropOpen1(false);
  };

  const closeDropdown2 = () => {
    setDropOpen2(false);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    // Close dropdowns when toggling mobile menu
    setDropOpen1(false);
    setDropOpen2(false);
  };

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      const mobileMenu = document.querySelector(".mobile-menu");
      const hamburger = document.querySelector(".hamburger-menu");

      if (
        mobileMenuOpen &&
        mobileMenu &&
        !mobileMenu.contains(event.target) &&
        !hamburger.contains(event.target)
      ) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [mobileMenuOpen]);

  useEffect(() => {
    console.log("Navbar auth state:", {
      isAuthenticated,
      currentUser,
      isAdmin: currentUser?.role === "admin",
    });
  }, [isAuthenticated, currentUser]);

  return (
    <div className="flex flex_col navbar-container">
      <div className="navbar  flex flex_j_SA MaxWH location font_white">
        <div className="navim MaxWH location">
          <Link to="/">
            <img
              src="/images/Aim Blue.svg"
              alt="aim challenge logo"
              className="custom-image navim"
            ></img>
          </Link>
        </div>

        {/* Hamburger Menu Button - Only visible on mobile */}
        <div className="hamburger-menu" onClick={toggleMobileMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Desktop Navigation - Hidden on mobile */}
        <div className="navbside">
          {/* Tävlingar Button */}
          <div
            className="nav-button"
            onMouseEnter={() => setDropOpen1(true)}
            onMouseLeave={() => setDropOpen1(false)}
          >
            <a
              href="#"
              className="dropdown-trigger"
              onClick={(e) => {
                e.preventDefault();
              }}
            >
              Tävlingar
            </a>
            {dropOpen1 && (
              <div className="drop-down">
                <Link
                  to="/ulricehamn"
                  onClick={closeDropdown1}
                  className="drop-item"
                >
                  ULRICEHAMN
                </Link>
                <Link
                  to="/salen"
                  onClick={closeDropdown1}
                  className="drop-item"
                >
                  SÄLEN
                </Link>
                <Link
                  to="/hemsedal"
                  onClick={closeDropdown1}
                  className="drop-item"
                >
                  HEMSEDAL
                </Link>
                <Link
                  to="/kolmarden"
                  onClick={closeDropdown1}
                  className="drop-item"
                >
                  KOLMÅRDEN
                </Link>
                <Link
                  to="/trippeln"
                  onClick={closeDropdown1}
                  className="drop-item"
                >
                  TRIPPELN
                </Link>
              </div>
            )}
          </div>
          {/* Results Button - Added as a direct link */}
          <div className="nav-button">
            <Link to="/results">Resultat</Link>
          </div>
          {/* Om oss Button */}
          <div
            className="nav-button"
            onMouseEnter={() => setDropOpen2(true)}
            onMouseLeave={() => setDropOpen2(false)}
          >
            <a
              href="#"
              className="dropdown-trigger"
              onClick={(e) => {
                e.preventDefault();
              }}
            >
              Om oss
            </a>
            {dropOpen2 && (
              <div className="drop-down">
                <Link
                  to="/om-oss"
                  onClick={closeDropdown2}
                  className="drop-item"
                >
                  Om oss
                </Link>
                <Link
                  to="/regler"
                  onClick={closeDropdown2}
                  className="drop-item"
                >
                  Regler
                </Link>
                <Link to="/faq" onClick={closeDropdown2} className="drop-item">
                  FAQ
                </Link>
                <Link
                  to="/historien-om-aim"
                  onClick={closeDropdown2}
                  className="drop-item"
                >
                  Historien om AIM
                </Link>
              </div>
            )}
          </div>
          {/* Sponsorer Button */}
          <div className="nav-button">
            <a
              href="#sponsors-section"
              onClick={(e) => {
                e.preventDefault();
                const sponsorsSection =
                  document.getElementById("sponsors-section");
                if (sponsorsSection) {
                  sponsorsSection.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              Sponsorer
            </a>
          </div>
          {/* Senaste nytt Button */}
          <div className="nav-button">
            <Link to="/senaste-nytt">Senaste nytt</Link>
          </div>
          {/* Kontakta oss Button */}
          <div className="nav-button">
            <Link to="#">Kontakta oss</Link>
          </div>
          {/* Language Button */}
          <div className="nav-button">
            <a href="#">SV|NO|EN</a>
          </div>

          {/* Content Manager and Logout Buttons - Only visible when logged in */}
          {isAuthenticated && (
            <>
              <div className="nav-button">
                <Link to="/content-manager">Innehåll</Link>
              </div>
              <div className="nav-button">
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    handleLogout();
                  }}
                >
                  Logga ut
                </a>
              </div>
            </>
          )}
        </div>

        {/* Mobile Menu - Only visible when hamburger is clicked */}
        {mobileMenuOpen && (
          <div className="mobile-menu">
            <div className="mobile-menu-item">
              <div
                className="mobile-menu-header"
                onClick={() => setDropOpen1(!dropOpen1)}
              >
                Tävlingar {dropOpen1 ? "▲" : "▼"}
              </div>
              {dropOpen1 && (
                <div className="mobile-submenu">
                  <Link
                    to="/ulricehamn"
                    onClick={toggleMobileMenu}
                    className="mobile-submenu-item"
                  >
                    ULRICEHAMN
                  </Link>
                  <Link
                    to="/salen"
                    onClick={toggleMobileMenu}
                    className="mobile-submenu-item"
                  >
                    SÄLEN
                  </Link>
                  <Link
                    to="/hemsedal"
                    onClick={toggleMobileMenu}
                    className="mobile-submenu-item"
                  >
                    HEMSEDAL
                  </Link>
                  <Link
                    to="/kolmarden"
                    onClick={toggleMobileMenu}
                    className="mobile-submenu-item"
                  >
                    KOLMÅRDEN
                  </Link>
                  <Link
                    to="/trippeln"
                    onClick={toggleMobileMenu}
                    className="mobile-submenu-item"
                  >
                    TRIPPELN
                  </Link>
                </div>
              )}
            </div>
            {/* Results Link - Added as a direct link in mobile menu */}
            <div className="mobile-menu-item">
              <Link
                to="/results"
                onClick={toggleMobileMenu}
                className="mobile-menu-link"
              >
                Resultat
              </Link>
            </div>

            <div className="mobile-menu-item">
              <div
                className="mobile-menu-header"
                onClick={() => setDropOpen2(!dropOpen2)}
              >
                Om oss {dropOpen2 ? "▲" : "▼"}
              </div>
              {dropOpen2 && (
                <div className="mobile-submenu">
                  <Link
                    to="/om-oss"
                    onClick={toggleMobileMenu}
                    className="mobile-submenu-item"
                  >
                    Om oss
                  </Link>
                  <Link
                    to="/regler"
                    onClick={toggleMobileMenu}
                    className="mobile-submenu-item"
                  >
                    Regler
                  </Link>
                  <Link
                    to="/faq"
                    onClick={toggleMobileMenu}
                    className="mobile-submenu-item"
                  >
                    FAQ
                  </Link>
                  <Link
                    to="/historien-om-aim"
                    onClick={toggleMobileMenu}
                    className="mobile-submenu-item"
                  >
                    Historien om AIM
                  </Link>
                </div>
              )}
            </div>

            <div className="mobile-menu-item">
              <a
                href="#sponsors-section"
                onClick={(e) => {
                  e.preventDefault();
                  const sponsorsSection =
                    document.getElementById("sponsors-section");
                  if (sponsorsSection) {
                    sponsorsSection.scrollIntoView({ behavior: "smooth" });
                  }
                  toggleMobileMenu();
                }}
                className="mobile-menu-link"
              >
                Sponsorer
              </a>
            </div>

            <div className="mobile-menu-item">
              <Link
                to="/senaste-nytt"
                onClick={toggleMobileMenu}
                className="mobile-menu-link"
              >
                Senaste nytt
              </Link>
            </div>

            <div className="mobile-menu-item">
              <Link
                to="#"
                onClick={toggleMobileMenu}
                className="mobile-menu-link"
              >
                Kontakta oss
              </Link>
            </div>

            <div className="mobile-menu-item">
              <a href="#" className="mobile-menu-link">
                SV|NO|EN
              </a>
            </div>

            {/* Content Manager and Logout Buttons - Only visible when logged in */}
            {isAuthenticated && (
              <>
                <div className="mobile-menu-item">
                  <Link
                    to="/content-manager"
                    onClick={toggleMobileMenu}
                    className="mobile-menu-link"
                  >
                    Innehåll
                  </Link>
                </div>
                <div className="mobile-menu-item">
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      handleLogout();
                      toggleMobileMenu();
                    }}
                    className="mobile-menu-link"
                  >
                    Logga ut
                  </a>
                </div>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
