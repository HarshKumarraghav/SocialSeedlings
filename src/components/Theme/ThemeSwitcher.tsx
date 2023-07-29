"use client";
import { useTheme } from "next-themes";
import React from "react";
import { BsSun } from "react-icons/bs";
import { GiNightSleep } from "react-icons/gi";

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer",
        color: "white",
        width: "40px",
        height: "40px",
        borderRadius: "12px",
        backgroundColor: "#00d09c",
      }}
      onClick={() => {
        setTheme(theme === "light" ? "dark" : "light");
      }}
    >
      {theme === "light" ? <GiNightSleep size={30} /> : <BsSun size={30} />}
    </div>
  );
};

export default ThemeSwitcher;
