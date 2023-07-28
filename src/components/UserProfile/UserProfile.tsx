import React, { use, useEffect } from "react";
import Sidebar from "../Navigation/Sidebar";
import Classes from "./profile.module.css";
import { useUserDetailProvider } from "@/hooks/useUserDetailProvider";
import { useUserFetch } from "@/hooks/useUserFetch";
interface Props {
  UserName: string;
}

const UserProfile = ({ UserName }: Props) => {
  const { data, isLoading, error } = useUserFetch(UserName);
  const { userDetail, setUserDetail } = useUserDetailProvider();
  useEffect(() => {
    setUserDetail(data);
  }, [data]);
  return (
    <div className={Classes.Container}>
      <div className={Classes.sidebar}>
        <Sidebar />
      </div>
      <div className={Classes.mainSection}>{/* <Post /> */}</div>
    </div>
  );
};

export default UserProfile;
