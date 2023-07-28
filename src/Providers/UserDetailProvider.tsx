"use client";
import { createContext, useContext, useState } from "react";

export const UserDetailContext = createContext<any>(null);

export default function UserDetailProvider({ children }: any) {
  const [userDetail, setUserDetail] = useState({});
  return (
    <UserDetailContext.Provider value={{ userDetail, setUserDetail }}>
      {children}
    </UserDetailContext.Provider>
  );
}
