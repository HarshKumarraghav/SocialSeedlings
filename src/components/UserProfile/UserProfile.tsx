import React from "react";
import Sidebar from "../Navigation/Sidebar";
import Classes from "./profile.module.css";
const UserProfile = () => {
  return (
    <div className={Classes.Container}>
      <div className={Classes.sidebar}>
        <Sidebar />
      </div>
      <div className={Classes.mainSection}>{/* <Post /> */}</div>
      <div className={Classes.RightSidebar}>{/* <Details /> */}</div>
    </div>
  );
};

export default UserProfile;
