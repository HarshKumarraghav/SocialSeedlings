import React, { useEffect, useRef, useState } from "react";
import Classes from "./userimages.module.css";
import ImageComponent from "@/components/ImageComponent/ImageComponent";
import Loader from "@/components/Loader/Loader";
import { UnsplashPhotoData } from "../../../../types/UnsplashPhotoData";
import PostCard from "@/components/Post/PostCard";
import { FaListUl } from "react-icons/fa";
import { BsFillGridFill } from "react-icons/bs";
import Error from "@/components/Error/Error";
import { useIntersection } from "@mantine/hooks";

const UserImages = ({ UserPhotos }: any) => {
  const {
    data,
    isLoading,
    isError,
    error,
    hasNextPage,
    isFetchingNextPage,
    fetchNextPage,
  } = UserPhotos;
  const [isGridView, setIsGridView] = useState(false);
  const toggleView = () => {
    setIsGridView((prev) => !prev);
  };

  /* The line `const lastPostRef = useRef<HTMLDivElement>(null);` is creating a ref object using the
`useRef` hook. The ref object is initialized with a value of `null` and is assigned a type of
`HTMLDivElement`. */
  const lastPostRef = useRef<HTMLDivElement>(null);

  /* The code `const { ref, entry } = useIntersection({ root: lastPostRef.current, threshold: 1 });` is
using the `useIntersection` hook from the `@mantine/hooks` library. */
  const { ref, entry } = useIntersection({
    root: lastPostRef.current,
    threshold: 1,
  });

  /* The `useEffect` hook is used to perform side effects in a functional component. In this case, the
effect is triggered whenever there is a change in the `hasNextPage`, `isFetchingNextPage`, or
`entry` variables. */
  useEffect(() => {
    if (entry?.isIntersecting && hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  }, [hasNextPage, isFetchingNextPage, entry]);

  if (isLoading) return <Loader />;
  if (isError) return <Error error={error} />;
  return (
    <div className={Classes.Details}>
      {data && (
        <>
          <div className={Classes.Details_ViewToggle}>
            <h1 className={Classes.UserImage_container__heading}>
              Image Gallery
            </h1>
            {/* Button to toggle between grid and list view */}
            <button
              onClick={toggleView}
              className={Classes.Details_toggle__button}
            >
              {isGridView ? (
                <p className={Classes.Details__button_Text}>
                  <FaListUl />
                  List View
                </p>
              ) : (
                <p className={Classes.Details__button_Text}>
                  <BsFillGridFill />
                  Grid View
                </p>
              )}
            </button>
          </div>
          <div
            className={
              isGridView
                ? Classes.UserImage_flex_container
                : Classes.UserImage_list_container
            }
          >
            {data?.pages?.map((group: any, i: any) => (
              <React.Fragment key={i}>
                {group.map((item: UnsplashPhotoData, j: any) => {
                  const isLastItem =
                    i === data.pages.length - 1 && j === group.length - 1;
                  return (
                    <div
                      ref={isLastItem ? ref : null}
                      className={
                        isGridView
                          ? Classes.UserImage__Square
                          : Classes.UserImage__List
                      }
                      key={j}
                    >
                      {isGridView ? (
                        <>
                          <React.Fragment>
                            <ImageComponent
                              alt={`blur` + 1}
                              src={item?.urls.full}
                              hash={item?.blur_hash}
                            />
                            <p className={Classes.Details__Hover_Text}>
                              {item?.description ||
                                item?.alt_description ||
                                "No Description!"}
                            </p>
                          </React.Fragment>
                        </>
                      ) : (
                        <PostCard Item={item} />
                      )}
                    </div>
                  );
                })}
              </React.Fragment>
            ))}
          </div>
        </>
      )}

      {isFetchingNextPage && <Loader />}
      <div
        style={{
          textAlign: "center",
        }}
      >
        {!hasNextPage && (
          <h1>
            You have caught up with <br /> the user's images!
          </h1>
        )}
      </div>
    </div>
  );
};

export default UserImages;
