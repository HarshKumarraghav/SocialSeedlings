"use client";

import React from "react";
import Classes from "./Container.module.css";
import Sidebar from "../Navigation/Sidebar";
const Container = () => {
  return (
    <div className={Classes.Container}>
      <div className={Classes.sidebar}>
        <Sidebar />
      </div>
      <div className={Classes.mainSection}>main</div>
      <div className={Classes.RightSidebar}>asdfdasdf</div>
    </div>
  );
};

export default Container;
