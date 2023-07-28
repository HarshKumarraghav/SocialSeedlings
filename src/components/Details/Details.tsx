"use client";
import React from "react";
import Classes from "./Details.module.css";
import Image from "next/image";
const Details = () => {
  const SectionItem = [
    {
      icon: "/images/icons/blockchain.png",
      title: "Blockchain",
    },
    {
      icon: "/images/icons/idea.png",
      title: "Idea",
    },
    {
      icon: "/images/icons/metaverse.png",
      title: "Metaverse",
    },
    {
      icon: "/images/icons/shuttle.png",
      title: "Space",
    },
  ];
  return (
    <div className={Classes.Details}>
      <div className={Classes.DetailsSection}>
        <h1 className={Classes.Details__heading}>People Talking About</h1>
        <div className={Classes.Details__section1}>
          {SectionItem?.map((item, index) => {
            return (
              <div className={Classes.Details__section1__item} key={index}>
                <Image
                  width={100}
                  height={100}
                  src={item.icon}
                  alt={item.title}
                  style={{
                    width: "80px",
                    height: "80px",
                    padding: "5px",
                    backgroundColor: "#00d09c",
                    borderRadius: "50%",
                  }}
                />
                <p className={Classes.Details__section1__item__title}>
                  {item.title}
                </p>
              </div>
            );
          })}
        </div>
        <div className={Classes.Details__section2}>
          <p>
            Login to follow profiles or hashtags, favorite, share and reply to
            posts. You can also interact from your account on a different
            server.
          </p>
          <button className={Classes.Details__section2__Login__button}>
            Login
          </button>
          <button className={Classes.Details__section2__signup__button}>
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Details;
