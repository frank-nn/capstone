import "./post.css";
import { MoreVert } from "@mui/icons-material";
import { useState, useEffect } from "react";

export default function Post({ post }) {
  const [like, setLike] = useState(post?.like || 0);
  const [isLiked, setIsLiked] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const likeHandler = () => {
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  };

  // 🔁 Profile image logic based on email
  const getProfileImage = (email) => {
    if (email === "frank@email.com") return "/assets2/person/3.jpg";
    if (email === "jack@email.com") return "/assets2/person/1.PNG";
    return "/assets2/person/default.png";
  };

  // 🔁 Post image logic based on logged-in user
  const getPostImage = (email) => {
    if (email === "frank@email.com") return "/assets2/post/3.jpg";
    if (email === "jack@email.com") return "/assets2/post/2.jpg";
    return "/assets2/post/default.jpg";
  };

  // Use logged-in user's info
  const profilePicture = getProfileImage(user?.email);
  const postImage = getPostImage(user?.email);
  const username = user?.name || "Anonymous";
  const date = post?.date || "Unknown date";
  const desc = post?.desc || "No description";

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
          <img className="postImg" src={postImage} alt="Post" />{" "}
          {/* 👈 now dynamic */}
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
