import { useQuery } from "@tanstack/react-query";

import axios from "axios";

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
