import React from "react";
import Loader from "@/components/Loader/Loader";
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
      <Loader />
    </div>
  );
};

export default loading;
