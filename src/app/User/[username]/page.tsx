"use client";
import Header from "@/components/Navigation/Header";
import UserProfile from "@/components/UserProfile/UserProfile";
import { useUserFetch } from "@/hooks/useUserFetch";
import React from "react";

const page = () => {
  const { data, isLoading, error } = useUserFetch("jorok");
  console.log(data, isLoading, error);

  return (
    <>
      <Header />
      <UserProfile />
    </>
  );
};

export default page;
