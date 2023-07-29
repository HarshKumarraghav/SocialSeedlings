import { UserDetailContext } from "@/Providers/UserDetailProvider";
import { useContext } from "react";

/**
 * The function returns the context value of the UserDetailContext.
 * @returns The `useUserDetailProvider` function is returning the value of the `UserDetailContext` that
 * is being accessed through the `useContext` hook.
 */
export const useUserDetailProvider = () => {
  return useContext(UserDetailContext);
};
