import { UserDetailContext } from "@/Providers/UserDetailProvider";
import { useContext } from "react";

export const useUserDetailProvider = () => {
  return useContext(UserDetailContext);
};
