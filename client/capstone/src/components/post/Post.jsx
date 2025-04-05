import "./post.css";
import { MoreVert } from "@mui/icons-material";
import { Users } from "/dummyData"; // Assuming Users is imported correctly
import { useState } from "react";

export default function Post({ post }) {
  console.log(post);
  // Check if the post is defined, and set like to 0 if undefined
  const [like, setLike] = useState(post?.like || 0);
  const [isLiked, setIsLiked] = useState(false);

  const likeHandler = () => {
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  };

  // Find the user data using `.find()` for better performance and readability
  const user = Users.find((u) => u.id === post?.userId);

  // Fallback if the user or post data doesn't exist
  const profilePicture = user?.profilePicture || "/assets2/person/1.PNG"; // Default profile image
  const username = user?.username || "Anonymous"; // Fallback username
  const date = post?.date || "Unknown date"; // Fallback date
  const desc = post?.desc || "No description"; // Fallback description
  const photo = post?.photo || "/assets2/post/1.jpg"; // Fallback image

  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              className="postProfileImg"
              src={profilePicture}
              alt="Profile"
            />
            <span className="postUsername">{username}</span>
            <span className="postDate">{date}</span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{desc}</span>
          <img className="postImg" src={photo} alt="Post" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img
              className="likeIcon"
              src="assets2/like.png"
              onClick={likeHandler}
              alt="Like"
            />
            <img
              className="likeIcon"
              src="assets2/heart.png"
              onClick={likeHandler}
              alt="Heart"
            />
            <span className="postLikeCounter">{like} people like it</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">{post?.comment} comments</span>
          </div>
        </div>
      </div>
    </div>
  );
}
