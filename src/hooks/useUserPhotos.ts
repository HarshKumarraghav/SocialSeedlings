import { useQuery } from "@tanstack/react-query";

import axios from "axios";

/**
 * The `useUserPhotos` function is a custom hook that fetches a user's photos from the Unsplash API
 * using the provided username.
 * @param {string} username - The `username` parameter is a string that represents the username of the
 * user whose photos you want to fetch.
 * @returns The `useUserPhotos` function is returning the result of the `useQuery` hook.
 */
export const useUserPhotos = (username: string) => {
  const CLIENT_ID = process.env.NEXT_PUBLIC_ACCESS_KEY;
  return useQuery({
    queryKey: ["photos", username],
    queryFn: async () => {
      const { data } = await axios.get(
        `https://api.unsplash.com/users/${username}/photos/?client_id=${CLIENT_ID}&state=true`
      );
      return data;
    },
  });
};
