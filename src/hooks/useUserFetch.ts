import { useQuery } from "@tanstack/react-query";

import axios from "axios";

/**
 * The `useUserFetch` function is a custom hook that fetches user data from the Unsplash API using the
 * provided username.
 * @param {string} username - The `username` parameter is a string that represents the username of the
 * user you want to fetch data for from the Unsplash API.
 * @returns The `useUserFetch` function is returning the result of the `useQuery` hook.
 */
export const useUserFetch = (username: string) => {
  const CLIENT_ID = process.env.NEXT_PUBLIC_ACCESS_KEY;
  return useQuery({
    queryKey: ["user", username],
    queryFn: async () => {
      const { data } = await axios.get(
        `https://api.unsplash.com/users/${username}/?client_id=${CLIENT_ID}`
      );
      return data;
    },
  });
};
