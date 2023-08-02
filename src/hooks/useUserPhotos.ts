import { useInfiniteQuery } from "@tanstack/react-query";

import axios from "axios";

/**
 * The `useUserPhotos` function is a custom hook that fetches a user's photos from the Unsplash API
 * using the provided username and returns an infinite query result.
 * @param {string} username - The username parameter is a string that represents the username of the
 * user whose photos you want to fetch from the Unsplash API.
 * @param {number} [total_photos=10] - The `total_photos` parameter is the total number of photos you
 * want to fetch for the user. It has a default value of 10, but you can provide a different value if
 * needed.
 * @returns The `useUserPhotos` function is returning the result of the `useInfiniteQuery` hook.
 */
export const useUserPhotos = (username: string, total_photos: number = 10) => {
  const CLIENT_ID = process.env.NEXT_PUBLIC_ACCESS_KEY;
  return useInfiniteQuery({
    queryKey: ["photos", username],
    queryFn: async () => {
      const { data } = await axios.get(
        `https://api.unsplash.com/users/${username}/photos/?client_id=${CLIENT_ID}&count=10&page=1&state=true`
      );
      return data;
    },
    getNextPageParam: (_, allPages) => {
      const maxPage = total_photos / 10;
      if (allPages.length < maxPage) {
        return allPages.length + 1;
      }
      return undefined;
    },
  });
};
