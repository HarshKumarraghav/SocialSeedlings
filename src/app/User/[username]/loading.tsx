"use client";
import PageLoader from "@/components/Loader/PageLoader";
import React from "react";
const loading = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <PageLoader />
    </div>
  );
};

export default loading;
