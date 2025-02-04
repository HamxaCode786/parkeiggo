import React, { useState } from "react";
import Parkeiggo from '../../src/assets/logo/Parcheggio LogoHEADER.svg'
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const location = useLocation();


  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const isActivePath = (path) => {
    return location.pathname === path;
  };

  return (
    <div className="header_man_div">
      <div className="logo_div"><img className="header_logo" src={Parkeiggo} /></div>
      <div className="custom_language_changer">
        {/* Hamburger Icon */}
        
        <div className="hamburger" onClick={toggleMenu}>
          &#9776; {/* Unicode for hamburger icon */}
        </div>

        {/* Navigation Menu */}
        <ul className={`list_right_side ${isMenuOpen ? "active" : ""}`}>
          {isMenuOpen && (
            <div className="close-menu" onClick={closeMenu}>
              <i
                className="fas fa-times"
                style={{ fontSize: "36px", cursor: "pointer" }}
              ></i>
            </div>
          )}

          <li className="list_second_styling" onClick={closeMenu}>
            <p>
              <Link
                to="/"
                style={isActivePath("/") ? {  } : {}}
              >
                <strong>Home</strong>
              </Link>
            </p>
          </li>
          <li className="list_second_styling" onClick={closeMenu}>
            <p>
              <Link
                to="/form"
                style={isActivePath("/form") ? { } : {}}
              >
                <strong>Booking</strong>
              </Link>
            </p>
          </li>
         
         
         
         












          
        </ul>
      </div>
    </div>
  );
};

export default Header;
