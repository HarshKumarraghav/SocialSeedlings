"use client";
import React from "react";
import { BallTriangle } from "react-loader-spinner";
const PageLoader = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
      }}
    >
      <BallTriangle
        height={200}
        width={200}
        radius={5}
        color="#00d09c"
        ariaLabel="ball-triangle-loading"
        visible={true}
      />
      ;
    </div>
  );
};

export default PageLoader;
