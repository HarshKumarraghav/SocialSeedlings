import { useInfiniteQuery } from "@tanstack/react-query";
import axios from "axios";
import { UnsplashPhotoData } from "../../types/UnsplashPhotoData";
const fetchPost = async (page: number) => {
  const CLIENT_ID = process.env.NEXT_PUBLIC_ACCESS_KEY;
  const { data } = await axios.get(
    `https://api.unsplash.com/photos/random/?client_id=${CLIENT_ID}&count=10&page=${page}`
  );
  return data as UnsplashPhotoData[];
};
export const useInfiniteFetch = () => {
  return useInfiniteQuery(
    ["posts"],
    ({ pageParam = 1 }) => fetchPost(pageParam),
    {
      getNextPageParam: (_, allPages) => {
        const maxPage = 20000 / 10;
        if (allPages.length < maxPage) {
          return allPages.length + 1;
        }
        return undefined;
      },
    }
  );
};
