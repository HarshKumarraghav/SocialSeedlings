import UserDetailProvider from "@/Providers/UserDetailProvider";
import PageLoader from "@/components/Loader/PageLoader";
import Header from "@/components/Navigation/Header";
import UserProfile from "@/components/UserProfile/UserProfile";
import React, { Suspense } from "react";
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
      <Suspense fallback={<PageLoader />}>
        <UserProfile UserName={username} />
      </Suspense>
    </UserDetailProvider>
  );
};

export default page;
