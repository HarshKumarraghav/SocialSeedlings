import React from "react";
import Classes from "./Details.module.css";
import { useUserDetailProvider } from "@/hooks/useUserDetailProvider";
import Image from "next/image";
import ImageComponent from "@/components/ImageComponent/ImageComponent";
import Loader from "@/components/Loader/Loader";

const UserImages = () => {
  const { userDetail, username, location } = useUserDetailProvider();
  console.log("userDetail", userDetail);

  // const { user } = data;
  // console.log("user", user);

  return (
    <div className={Classes.Details}>
      {userDetail ? (
        <div className={Classes.Details__header}>
          <div className={Classes.Details__header__image}>
            <Image
              alt={userDetail?.username}
              src={userDetail?.profile_image?.large}
              width={100}
              height={100}
            />
          </div>
          <div className={Classes.Details__header__userDetails}></div>
        </div>
      ) : (
        <div>
          <Loader />
        </div>
      )}
    </div>
  );
};

export default UserImages;
