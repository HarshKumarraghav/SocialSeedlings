import React, { useEffect } from "react";
import Sidebar from "../Navigation/Sidebar";
import Classes from "./profile.module.css";
import { useUserDetailProvider } from "@/hooks/useUserDetailProvider";
import { useUserFetch } from "@/hooks/useUserFetch";
import UserInfo from "./UserInfo/UserInfo";
import UserImages from "./UserImages/UserImages";
import { useUserPhotos } from "@/hooks/useUserPhotos";

interface Props {
  UserName: string;
}

const UserProfile = ({ UserName }: Props) => {
  const { data, isLoading, error } = useUserFetch(UserName);
  const { userDetail, setUserDetail } = useUserDetailProvider();
  const UserPhotos = useUserPhotos(UserName);
  console.log("UserPhotos.data", UserPhotos.data);

  useEffect(() => {
    setUserDetail(data);
  }, [data]);
  return (
    <div className={Classes.Container}>
      <div className={Classes.sidebar}>
        <Sidebar />
      </div>
      <div className={Classes.mainSection}>
        <UserInfo />
      </div>
      <div className={Classes.RightSidebar}>
        <UserImages UserPhotos={UserPhotos} />
      </div>
    </div>
  );
};

export default UserProfile;
