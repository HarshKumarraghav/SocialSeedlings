"use client";
import React, { useEffect } from "react";
import Sidebar from "../Navigation/Sidebar";
import Classes from "./profile.module.css";
import { useUserDetailProvider } from "@/hooks/useUserDetailProvider";
import { useUserFetch } from "@/hooks/useUserFetch";
import UserInfo from "./UserInfo/UserInfo";
import UserImages from "./UserImages/UserImages";
import { useUserPhotos } from "@/hooks/useUserPhotos";
import Error from "../Error/Error";

interface Props {
  UserName: string;
}

const UserProfile = ({ UserName }: Props) => {
  const { data, error, isError } = useUserFetch(UserName);

  const { setUserDetail } = useUserDetailProvider();
  /* The line `const UserPhotos = useUserPhotos(UserName);` is calling the `useUserPhotos` custom hook
and passing the `UserName` as an argument. This hook is responsible for fetching and returning the
user's photos based on their username. The `UserPhotos` variable will hold the returned data from
the hook, which can then be used in the component to display the user's images. */
  const UserPhotos = useUserPhotos(UserName, data?.total_photos);

  /* The `useEffect` hook is used to perform side effects in functional components. In this case, the
`useEffect` hook is used to update the `userDetail` state in the `useUserDetailProvider` custom hook
whenever the `data` variable changes. */
  useEffect(() => {
    setUserDetail(data);
  }, [data]);

  if (isError) return <Error error={error} />;
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
