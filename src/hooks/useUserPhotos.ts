import { useQuery } from "@tanstack/react-query";

import axios from "axios";

export const useUserPhotos = (username: string) => {
  const CLIENT_ID = process.env.NEXT_PUBLIC_ACCESS_KEY;
  return useQuery({
    queryKey: [username, "photos"],
    queryFn: async () => {
      const { data } = await axios.get(
        `https://api.unsplash.com/users/${username}/photos/?client_id=${CLIENT_ID}&state=true`
      );
      return data;
    },
  });
};
