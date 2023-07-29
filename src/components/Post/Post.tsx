import { useInfiniteFetch } from "@/hooks/useInfiniteFetch";
import { useIntersection } from "@mantine/hooks";
import React, { useEffect, useRef } from "react";
import PostCard from "./PostCard";
import { UnsplashPhotoData } from "../../../types/UnsplashPhotoData";
import Loader from "../Loader/Loader";
import Error from "../Error/Error";

const Post = () => {
  /* The code is using the `useInfiniteFetch` custom hook to destructure and assign the returned values
to the variables `data`, `isLoading`, `isError`, `error`, `hasNextPage`, `isFetchingNextPage`, and
`fetchNextPage`. */
  const {
    data,
    isLoading,
    isError,
    error,
    hasNextPage,
    isFetchingNextPage,
    fetchNextPage,
  } = useInfiniteFetch();
  /*  The line `const lastPostRef = useRef<HTMLDivElement>(null);` is creating a ref object using the
`useRef` hook. The ref object is initialized with a value of `null` and is assigned a type of
`HTMLDivElement`. */
  const lastPostRef = useRef<HTMLDivElement>(null);

  /* The code is using the `useIntersection` hook from the `@mantine/hooks` library to create a reference
(`ref`) and an intersection entry (`entry`). */
  const { ref, entry } = useIntersection({
    root: lastPostRef.current,
    threshold: 1,
  });

  /* The `useEffect` hook is used to perform side effects in a React component. In this case, the effect
 is triggered whenever the values of `hasNextPage`, `isFetchingNextPage`, or `entry` change. */
  useEffect(() => {
    if (entry?.isIntersecting && hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  }, [hasNextPage, isFetchingNextPage, entry]);

  if (isLoading) return <Loader />;
  if (isError) return <Error error={error} />;
  return (
    <div>
      {data?.pages.map((group, i) => (
        <React.Fragment key={i}>
          {group.map((post: UnsplashPhotoData, j: any) => {
            const isLastItem =
              i === data.pages.length - 1 && j === group.length - 1;
            return (
              <div key={post.id} ref={isLastItem ? ref : null}>
                <PostCard Item={post} />
              </div>
            );
          })}
        </React.Fragment>
      ))}
      {isFetchingNextPage && <Loader />}
    </div>
  );
};

export default Post;
