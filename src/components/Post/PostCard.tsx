"use client";
import React from "react";
import Image from "next/image";
import Classes from "./PostCard.module.css";
import { useRouter } from "next/navigation";
import { BiSolidPhotoAlbum } from "react-icons/bi";
import useReadableTime from "@/hooks/useReadableTime";
import { AiOutlineCloudDownload } from "react-icons/ai";
import { FcLikePlaceholder, FcLike } from "react-icons/fc";
import ImageComponent from "../ImageComponent/ImageComponent";
import { UnsplashPhotoData } from "../../../types/UnsplashPhotoData";
type PostCardProps = {
  Item: UnsplashPhotoData;
};
const PostCard = ({ Item }: PostCardProps) => {
  const Router = useRouter();
  // userinfo
  const {
    name,
    total_likes,
    total_photos,
    location,
    username,
    for_hire,
    profile_image,
  } = Item.user;
  // image
  const { full, regular } = Item.urls;
  const { downloads, created_at, blur_hash } = Item;
  return (
    <div className={Classes.post_card}>
      <div className={Classes.post_card__header}>
        <div
          className={Classes.post_card__header__userInfo}
          style={{
            cursor: "pointer",
          }}
          onClick={() => {
            Router.push(`/User/${username}`);
          }}
        >
          <Image
            className={Classes.post_card__header__image}
            alt={username || "john doe"}
            width={40}
            height={40}
            src={profile_image.medium || "/images/icons/user.png"}
          />
          <div className={Classes.post_card__header__userDetail}>
            <span className={Classes.post_card__header__username}>
              {username || "john doe"}
              <span className={Classes.post_card__header__greentick}>
                {for_hire && (
                  <Image
                    alt={name}
                    width={15}
                    height={15}
                    src={"/images/icons/greentick.png"}
                  />
                )}
              </span>
            </span>
            <span className={Classes.post_card__header__location}>
              {location || "earth"}
            </span>
          </div>
        </div>
        <div className={Classes.post_card__header__time}>
          <span>
            {useReadableTime(created_at || "2016-07-10T11:00:01-05:00")}
          </span>
        </div>
      </div>

      {/* The `ImageComponent` component is rendering an image with the `src`
      prop set to either the `full` or `regular` property of the `Item.urls`
      object. The `alt` prop is set to "Post" and the `hash` prop is set to the
      `blur_hash` property of the `Item` object. */}

      <ImageComponent src={full || regular} alt="Post" hash={blur_hash} />

      <div className={Classes.post_card__footer}>
        <div className={Classes.post_card__footer__left}>
          <div className={Classes.post_card__footer__section}>
            <p
              className={Classes.post_card__footer__left__like__icon}
              style={{
                marginBottom: "0.5rem",
              }}
            >
              <FcLikePlaceholder size={25} />
            </p>
            <p className={Classes.post_card__footer__count}>
              {total_likes || 0}
            </p>
          </div>
          <div className={Classes.post_card__footer__section}>
            <p
              className={Classes.post_card__footer__left__comment__icon}
              style={{
                marginTop: "0.4rem",
              }}
            >
              <BiSolidPhotoAlbum size={25} />
            </p>
            <p className={Classes.post_card__footer__count}>
              {total_photos || 0}
            </p>
          </div>
        </div>
        <div className={Classes.post_card__footer__right}>
          <div className={Classes.post_card__footer__section}>
            <p
              className={Classes.post_card__footer__icon}
              style={{
                marginTop: "0.4rem",
              }}
            >
              <AiOutlineCloudDownload size={25} />
            </p>
            <p className={Classes.post_card__footer__count}>{downloads || 0}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
