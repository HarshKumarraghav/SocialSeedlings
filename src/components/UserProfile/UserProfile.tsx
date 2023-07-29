import React, { useEffect } from "react";
import Sidebar from "../Navigation/Sidebar";
import Classes from "./profile.module.css";
import { useUserDetailProvider } from "@/hooks/useUserDetailProvider";
import { useUserFetch } from "@/hooks/useUserFetch";
import UserInfo from "./UserInfo/UserInfo";

interface Props {
  UserName: string;
}

const UserProfile = ({ UserName }: Props) => {
  const { data, isLoading, error } = useUserFetch(UserName);
  const { userDetail, setUserDetail } = useUserDetailProvider();

  useEffect(() => {
    setUserDetail(data);
  }, [data]);

  console.log("userDetail", userDetail);

  return (
    <div className={Classes.Container}>
      <div className={Classes.sidebar}>
        <Sidebar />
      </div>
      <div className={Classes.mainSection}>
        <UserInfo />
      </div>
      <div className={Classes.RightSidebar}>{/* <Details /> */}</div>
    </div>
  );
};

export default UserProfile;
