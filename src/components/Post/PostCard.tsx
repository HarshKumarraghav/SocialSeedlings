import React from "react";

const PostCard = ({ imageUrl, username, commentsCount, likesCount }: any) => {
  return (
    <div className="post-card">
      <img
        className="post-image"
        src={imageUrl || "/images/metagram.png"}
        alt="Post"
      />
      <div className="post-overlay">
        <div className="user-info">
          <img className="user-icon" src="user-icon.png" alt="User" />
          <span className="username">{username || "Harsh Raghav"}</span>
        </div>
        <div className="interactions">
          <div className="comment-icon">
            <img src="comment-icon.png" alt="Comment" />
            <span>{commentsCount || 20}</span>
          </div>
          <div className="like-icon">
            <img src="like-icon.png" alt="Like" />
            <span>{likesCount || 400}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
