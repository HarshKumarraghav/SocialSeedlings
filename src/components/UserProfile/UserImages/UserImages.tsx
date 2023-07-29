import React, { useState } from "react";
import Classes from "./userimages.module.css";
import ImageComponent from "@/components/ImageComponent/ImageComponent";
import Loader from "@/components/Loader/Loader";
import { UnsplashPhotoData } from "../../../../types/UnsplashPhotoData";
import PostCard from "@/components/Post/PostCard";
import { FaListUl } from "react-icons/fa";
import { BsFillGridFill } from "react-icons/bs";
import Error from "@/components/Error/Error";

interface Props {
  UserPhotos: any;
}
const UserImages = ({ UserPhotos }: Props) => {
  const { data, isLoading, isError, error } = UserPhotos;
  const [isGridView, setIsGridView] = useState(false);

  const toggleView = () => {
    setIsGridView((prev) => !prev);
  };
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
            {data?.map((item: UnsplashPhotoData, i: any) => (
              <div
                className={
                  isGridView
                    ? Classes.UserImage__Square
                    : Classes.UserImage__List
                }
                key={i}
              >
                {isGridView ? (
                  <>
                    <React.Fragment key={i}>
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
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default UserImages;
