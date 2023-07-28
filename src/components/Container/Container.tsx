"use client";

import React from "react";
import Classes from "./Container.module.css";
import Sidebar from "../Navigation/Sidebar";
import Details from "../Details/Details";
import Post from "../Post/Post";
const Container = () => {
  return (
    <div className={Classes.Container}>
      <div className={Classes.sidebar}>
        <Sidebar />
      </div>
      <div className={Classes.mainSection}>
        <Post />
      </div>
      <div className={Classes.RightSidebar}>
        <Details />
      </div>
    </div>
  );
};

export default Container;
