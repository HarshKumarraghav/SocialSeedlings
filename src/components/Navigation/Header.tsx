"use client";
import React from "react";
import Classes from "./Header.module.css";
import Image from "next/image";
import { useRouter } from "next/navigation";
import ThemeSwitcher from "../Theme/ThemeSwitcher";
const Header = () => {
  const Router = useRouter();
  return (
    <div className={Classes.Navbar}>
      <div
        className={Classes.Navbar__logo}
        style={{
          cursor: "pointer",
        }}
        onClick={() => {
          Router.push(`/`);
        }}
      >
        <Image
          width={100}
          height={100}
          src="/images/metagram.png"
          alt="logo"
          className={Classes.logo_image}
        />
        <h1 className={Classes.logo_heading}>SocialSeedlings</h1>
      </div>
      <ThemeSwitcher />
    </div>
  );
};

export default Header;
