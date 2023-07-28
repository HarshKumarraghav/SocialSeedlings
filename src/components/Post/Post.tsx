import { useInfiniteFetch } from "@/hooks/useInfiniteFetch";
import { useIntersection } from "@mantine/hooks";
import React, { useEffect, useRef } from "react";
import PostCard from "./PostCard";

const Post = () => {
  const { data, isLoading, hasNextPage, isFetchingNextPage, fetchNextPage } =
    useInfiniteFetch();
  const lastPostRef = useRef<HTMLDivElement>(null);

  /* The code `const { ref, entry } = useIntersection({ root: lastPostRef.current, threshold: 1 });` is
 using the `useIntersection` hook from the `@mantine/hooks` library. */
  const { ref, entry } = useIntersection({
    root: lastPostRef.current,
    threshold: 1,
  });

  // useEffect(() => {
  //   console.log("entry");
  //   if (entry?.isIntersecting && hasNextPage && !isFetchingNextPage) {
  //     fetchNextPage();
  //   }
  // }, [hasNextPage, isFetchingNextPage, entry]);
  if (isLoading) return <div>Loading...</div>;
  return (
    <div className="post-cards-wrapper">
      {data?.pages.map((group, i) => (
        <div key={i} className="post-group">
          {group.map((post: { id: any }, j: number) => {
            const isLastItem =
              i === data.pages.length - 1 && j === group.length - 1;
            return <PostCard key={post.id} ref={isLastItem ? ref : null} />;
          })}
          {isFetchingNextPage && <div>Loading...</div>}
        </div>
      ))}
    </div>
  );
};

export default Post;
