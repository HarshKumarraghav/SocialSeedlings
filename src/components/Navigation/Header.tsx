"use client";
import React from "react";
import Classes from "./Header.module.css";
const Header = () => {
  return (
    <div className={Classes.Navbar}>
      <div className={Classes.Navbar__logo}>
        <img
          src="/images/metagram.png"
          alt="logo"
          className={Classes.logo_image}
        />
        <h1 className={Classes.logo_heading}> Metagram</h1>
      </div>
    </div>
  );
};

export default Header;
