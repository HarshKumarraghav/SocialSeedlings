"use client";
import React from "react";
import { useUserDetailProvider } from "@/hooks/useUserDetailProvider";
import Classes from "./UserInfo.module.css";
import Image from "next/image";
import { BiLocationPlus, BiSolidPhotoAlbum } from "react-icons/bi";
import { FaInstagram, FaTwitter } from "react-icons/fa";
import { AiOutlineCloudDownload, AiOutlineGlobal } from "react-icons/ai";
import Loader from "@/components/Loader/Loader";
import { FcLike } from "react-icons/fc";
const UserInfo = () => {
  const { userDetail } = useUserDetailProvider();

  return (
    <div className={Classes.Details}>
      {!userDetail && <Loader />}
      {userDetail && (
        <div>
          <div className={Classes.Details__header}>
            <Image
              className={Classes.Details__header__profilePic}
              src={userDetail?.profile_image?.large || "/images/metagram.png"}
              alt={userDetail?.username || "john doe"}
              width={200}
              height={200}
            />
            <p className={Classes.Details__header__name}>{userDetail?.name}</p>
            <h1 className={Classes.Details__header__username}>
              @{userDetail?.username || "jone doe"}
              <span className={Classes.Details__header__greentick}>
                {userDetail?.for_hire && (
                  <Image
                    alt={userDetail?.username || "john doe"}
                    width={15}
                    height={15}
                    src={"/images/icons/greentick.png"}
                  />
                )}
              </span>
            </h1>
            <p className={Classes.Details__header__discription}>
              {userDetail?.bio?.slice(0, 100)}...
            </p>
            <p className={Classes.Details__location}>
              <BiLocationPlus size={25} />
              {userDetail?.location || "Earth"}
            </p>
          </div>
          <div className={Classes.details__footer}>
            <div className={Classes.details__footer__section__follow}>
              <p>Followers</p>
              <p>{userDetail?.followers_count || 0}</p>
            </div>
            <div className={Classes.details__footer__section__follow}>
              <p>Following</p>
              <p>{userDetail?.following_count || 0}</p>
            </div>
          </div>
          <div className={Classes.details__footer}>
            <div className={Classes.details__footers}>
              <div className={Classes.details__footer__section}>
                <p
                  className={Classes.details__footer__like__icon}
                  style={{
                    marginBottom: "0.5rem",
                  }}
                >
                  <FcLike size={25} />
                </p>
                <p className={Classes.details__footer__count}>
                  {userDetail?.total_likes || 0}
                </p>
              </div>
              <div className={Classes.details__footer__section}>
                <p
                  className={Classes.details__footer__comment__icon}
                  style={{
                    marginTop: "0.4rem",
                  }}
                >
                  <BiSolidPhotoAlbum size={25} />
                </p>
                <p className={Classes.details__footer__count}>
                  {userDetail?.total_photos || 0}
                </p>
              </div>
              <div className={Classes.details__footer__section}>
                <p
                  className={Classes.details__footer__icon}
                  style={{
                    marginTop: "0.4rem",
                  }}
                >
                  <AiOutlineCloudDownload size={25} />
                </p>
                <p className={Classes.details__footer__count}>
                  {userDetail?.downloads || 0}
                </p>
              </div>
            </div>
          </div>
          <div className={Classes.Details__other__info}>
            <div className={Classes.Details__other__tags}>
              {userDetail?.tags?.custom?.map((tags: any, i: any) => (
                <div className={Classes.Details__other__tag} key={i}>
                  #{tags?.title}
                </div>
              ))}
            </div>

            <div className={Classes.Socials}>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={`https://www.instagram.com/${userDetail?.social?.instagram_username}/`}
                className={Classes.Details__other__socials}
              >
                <FaInstagram size={20} />
              </a>
              <a
                className={Classes.Details__other__socials}
                target="_blank"
                rel="noopener noreferrer"
                href={`https://twitter.com/${userDetail?.social?.twitter_username}/`}
              >
                <FaTwitter size={20} />
              </a>
              <a
                className={Classes.Details__other__socials}
                target="_blank"
                rel="noopener noreferrer"
                href={`https://www.instagram.com/${userDetail?.social?.instagram_username}/`}
              >
                <AiOutlineGlobal size={20} />
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserInfo;
