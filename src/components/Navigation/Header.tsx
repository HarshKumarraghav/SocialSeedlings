"use client";
import React from "react";
import Classes from "./Header.module.css";
import Image from "next/image";
const Header = () => {
  return (
    <div className={Classes.Navbar}>
      <div className={Classes.Navbar__logo}>
        <Image
          width={100}
          height={100}
          src="/images/metagram.png"
          alt="logo"
          className={Classes.logo_image}
        />
        <h1 className={Classes.logo_heading}>SocialSeedlings</h1>
      </div>
    </div>
  );
};

export default Header;
