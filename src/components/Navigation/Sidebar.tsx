"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Classes from "./Sidebar.module.css";
import { AiOutlineHome, AiOutlineMessage } from "react-icons/ai";
import { BsGlobe } from "react-icons/bs";
const Sidebar = () => {
  const Router = useRouter();
  return (
    <div className={Classes.Sidebar}>
      <div
        className={Classes.sidebarItem}
        onClick={() => {
          Router.push("/");
        }}
      >
        <AiOutlineHome size={30} />
        <p className={Classes.ItemText}>Feed</p>
      </div>
      <div className={Classes.sidebarNonActiveItem}>
        <BsGlobe size={30} />
        <p className={Classes.ItemText}>Discover</p>
      </div>
      <div className={Classes.sidebarNonActiveItem}>
        <AiOutlineMessage size={30} />
        <p className={Classes.ItemText}>Inbox</p>
      </div>
    </div>
  );
};

export default Sidebar;
