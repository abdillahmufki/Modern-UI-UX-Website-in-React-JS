import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import logo from "../../assets/logo.svg";
import "./navbar.css";
//BEM -> Block Element modifier
const Navbar = () => {
  const Menu = () => {
    <>
      <p>
        <a href="#home">Home</a>
      </p>
      <p>
        <a href="#whatblack">What is Black?</a>
      </p>
      <p>
        <a href="#home">Open AI</a>
      </p>
      <p>
        <a href="#home">Case Studies</a>
      </p>
      <p>
        <a href="#home">Library</a>
      </p>
    </>;
  };
  const [togggleMenu, setToggleMenu] = useState(false);
  return (
    <div className="whatblack__navbar">
      <div className="whatblack__navbar-links">
        <div className="whatblack__navbar-logo">
          <img src={logo} alt="logo" />
        </div>

        <div className="whatblack__navbar-links_container">
          <p>
            <a href="#home">Home</a>
          </p>
          <p>
            <a href="#whatblack">What is Black?</a>
          </p>
          <p>
            <a href="#home">Open AI</a>
          </p>
          <p>
            <a href="#home">Case Studies</a>
          </p>
          <p>
            <a href="#home">Library</a>
          </p>
        </div>

        <div className="whatblack__navbar-links_container">
          <Menu />
        </div>

        <div className="whatblack__navbar-sign">
          <p>Sign in</p>
          <button type="button">Sign up</button>
        </div>

        <div className="whatblack__navbar-menu">
          {togggleMenu ? (
            <RiCloseLine
              color="#fff"
              size={27}
              onClick={() => setToggleMenu(false)}
            />
          ) : (
            <RiMenu3Line
              color="#fff"
              size={27}
              onClick={() => setToggleMenu(true)}
            />
          )}
          {togggleMenu && (
            <div className="whatblack__navbar-menu_container scale-up-center">
              <div className="whatblack__navbar-menu_container-links">
                <Menu />
              </div>
              <div className="whatblack__navbar-menu_container-links-sign">
                <p>Sign in</p>
                <button type="button">Sign up</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
