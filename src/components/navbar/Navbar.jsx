import React from "react";
import "./navbar.css";

function Navbar() {
  return (
    <header>
      <div className="left">
        <div className="icon-container">
          <img
            className="icon"
            src="./assets/icons/navbar/menu-icon.svg"
            alt=""
          />
        </div>
        <div className="logo">
          <img src="./assets/images/logo.svg" alt="" />
        </div>
        <div className="country">MA</div>
      </div>

      <form className="middle">
        <div className="search">
          <input type="text" placeholder="Rechercher..." />
        </div>
        <button className="search-icon">
          <img
            className="icon"
            src="./assets/icons/navbar/search-icon.svg"
            alt=""
          />
        </button>
        <div className="icon-container mic">
          <img className="icon" src="./assets/icons/navbar/mic.svg" alt="" />
        </div>
      </form>

      <div className="right">
        <div className="icon-container">
          <img src="./assets/icons/navbar/upload.svg" className="icon" alt="" />
        </div>
        <div className="icon-container">
          <img src="./assets/icons/navbar/notif.svg" className="icon" alt="" />
        </div>
        <div className="profile">
          <img src="./assets/images/profile.jpg" alt="" />
        </div>
      </div>
    </header>
  );
}

export default Navbar;
