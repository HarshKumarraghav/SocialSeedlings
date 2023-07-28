"use client";
import useReadableTime from "@/hooks/useReadableTime";
import Image from "next/image";
import React from "react";
import { FcLikePlaceholder, FcLike } from "react-icons/fc";
import { BiSolidPhotoAlbum } from "react-icons/bi";
import { AiOutlineCloudDownload } from "react-icons/ai";
import { UnsplashPhotoData } from "../../../types/UnsplashPhotoData";
type PostCardProps = {
  Item: UnsplashPhotoData;
};

const PostCard = ({ Item }: PostCardProps) => {
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
  const { raw, regular } = Item.urls;
  const { downloads, created_at } = Item;
  console.log(Item);
  return (
    <div className="post-card">
      <div className="post_card__header">
        <div className="post_card__header__userInfo">
          <Image
            className="post_card__header__image"
            alt={username || "john doe"}
            width={40}
            height={40}
            src={profile_image.medium || "/images/icons/user.png"}
          />
          <div className="post_card__header__userDetail">
            <span className="post_card__header__username">
              {username || "john doe"}
              <span className="post_card__header__greentick">
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
            <span className="post_card__header__location">
              {location || "earth"}
            </span>
          </div>
        </div>
        <div className="post_card__header__time">
          <span>
            {useReadableTime(created_at || "2016-07-10T11:00:01-05:00")}
          </span>
        </div>
      </div>
      <div className="post-image">
        <Image
          width={100}
          height={100}
          className="post-image"
          src={raw || regular}
          alt="Post"
        />
      </div>

      <div className="post_card__footer">
        <div className="post_card__footer__left">
          <div className="post_card__footer__section">
            <p
              className="post_card__footer__left__like__icon"
              style={{
                marginBottom: "0.5rem",
              }}
            >
              <FcLikePlaceholder size={25} />
            </p>
            <p className="post_card__footer__count">{total_likes || 0}</p>
          </div>
          <div className="post_card__footer__section">
            <p
              className="post_card__footer__left__comment__icon"
              style={{
                marginTop: "0.4rem",
              }}
            >
              <BiSolidPhotoAlbum size={25} />
            </p>
            <p className="post_card__footer__count">{total_photos || 0}</p>
          </div>
        </div>
        <div className="post_card__footer__right">
          <div className="post_card__footer__section">
            <p
              className="post_card__footer__icon"
              style={{
                marginTop: "0.4rem",
              }}
            >
              <AiOutlineCloudDownload size={25} />
            </p>
            <p className="post_card__footer__count">{downloads || 0}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
