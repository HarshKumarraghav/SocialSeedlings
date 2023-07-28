import useReadableTime from "@/hooks/useReadableTime";
import Image from "next/image";
import React from "react";
import { FcLikePlaceholder, FcLike } from "react-icons/fc";
import { BiSolidPhotoAlbum } from "react-icons/bi";
import { AiOutlineCloudDownload } from "react-icons/ai";
const PostCard = ({ imageUrl, username, commentsCount, likesCount }: any) => {
  return (
    <div className="post-card">
      <div className="post_card__header">
        <div className="post_card__header__userInfo">
          <Image
            className="post_card__header__image"
            alt={username || "Harsh Raghav"}
            width={40}
            height={40}
            src={"/images/metagram.png"}
          />
          <span className="post_card__header__username">
            {username || "Harsh Raghav"}
          </span>
          <span className="post_card__header__greentick">
            <Image
              alt={"Verified"}
              width={15}
              height={15}
              src={"/images/icons/greentick.png"}
            />
          </span>
        </div>
        <div className="post_card__header__time">
          <span>{useReadableTime("2016-07-10T11:00:01-05:00")}</span>
        </div>
      </div>
      <div className="post-image">
        <Image
          width={100}
          height={100}
          className="post-image"
          src={imageUrl || "/images/metagram.png"}
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
            <p className="post_card__footer__count">{likesCount || 0}</p>
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
            <p className="post_card__footer__count">{commentsCount || 0}</p>
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
            <p className="post_card__footer__count">{commentsCount || 0}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
