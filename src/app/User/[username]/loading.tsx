import React from "react";
import PageLoader from "@/components/Loader/PageLoader";
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
