"use client";

import React from "react";
import { IoReloadCircle } from "react-icons/io5";
const Error = ({ error }: any) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        width: "100%",
      }}
    >
      <h1
        style={{
          color: "#00d09c",
        }}
      >
        Somthing Went Wrong :{"("}
      </h1>
      <p
        style={{
          color: "red",
        }}
      >
        {error?.message
          ? error?.message
          : "Please check your internet connection and try again"}
      </p>
      <button
        style={{
          padding: "10px",
          borderRadius: "5px",
          border: "none",
          display: "flex",
          alignItems: "center",

          backgroundColor: "#00d09c",
          color: "white",
          cursor: "pointer",
          marginTop: "10px",
        }}
        onClick={() => {
          window.location.reload();
        }}
      >
        <IoReloadCircle size={20} /> Reload
      </button>
    </div>
  );
};

export default Error;
