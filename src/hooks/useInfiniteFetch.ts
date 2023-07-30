import { useInfiniteQuery } from "@tanstack/react-query";
import axios from "axios";
import { UnsplashPhotoData } from "../../types/UnsplashPhotoData";
/**
 * The fetchPost function fetches random photos from the Unsplash API based on the specified page
 * number.
 * @param {number} page - The `page` parameter is used to specify the page number of the results you
 * want to fetch from the Unsplash API. It is used in the API request URL to retrieve a specific page
 * of random photos.
 * @returns The function `fetchPost` is returning a Promise that resolves to an array of
 * `UnsplashPhotoData` objects.
 */
const fetchPost = async (page: number) => {
  const CLIENT_ID = process.env.NEXT_PUBLIC_ACCESS_KEY;
  const { data } = await axios.get(
    `https://api.unsplash.com/photos/random/?client_id=${CLIENT_ID}&count=10&page=${page}`
  );
  return data as UnsplashPhotoData[];
};

/**
 * The `useInfiniteFetch` function is a custom hook that uses the `useInfiniteQuery` hook from the
 * `react-query` library to fetch posts in an infinite scroll manner.
 * @returns The `useInfiniteFetch` function is returning the result of calling the `useInfiniteQuery`
 * hook.
 */
export const useInfiniteFetch = () => {
  return useInfiniteQuery({
    queryKey: ["posts"],
    queryFn: ({ pageParam = 1 }) => fetchPost(pageParam),
    getNextPageParam: (_, allPages) => {
      const maxPage = 20000 / 10;
      if (allPages.length < maxPage) {
        return allPages.length + 1;
      }
      return undefined;
    },
  });
};
