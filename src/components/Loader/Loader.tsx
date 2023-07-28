"use client";
import React from "react";
import { InfinitySpin } from "react-loader-spinner";
const Loader = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
      }}
    >
      <InfinitySpin width="200" color="#00d09c" />
    </div>
  );
};

export default Loader;
