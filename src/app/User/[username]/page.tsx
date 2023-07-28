"use client";
import UserDetailProvider from "@/Providers/UserDetailProvider";
import Header from "@/components/Navigation/Header";
import UserProfile from "@/components/UserProfile/UserProfile";
import { useUserDetailProvider } from "@/hooks/useUserDetailProvider";
import { useUserFetch } from "@/hooks/useUserFetch";
import React, { useEffect } from "react";
interface Props {
  params: {
    username: string;
  };
}

const page = ({ params }: Props) => {
  const { username } = params;

  return (
    <UserDetailProvider>
      <Header />
      <UserProfile UserName={username} />
    </UserDetailProvider>
  );
};

export default page;
