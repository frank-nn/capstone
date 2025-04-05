import "./post.css";
import { MoreVert } from "@mui/icons-material";

export default function Post() {
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              className="postProfileImg"
              src="/assets2/person/1.PNG"
              alt=""
            />
            <span className="postUserName">Frank</span>
            <span className="postDate">5 mins ago</span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">Hey! its my first post :) </span>
          <img className="postImg" src="/assets2/post/1.jpg" alt="" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img className="likeIcon" src="assets2/like.png" alt="" />
            <img className="likeIcon" src="assets2/heart.png" alt="" />
            <span className="postLikeCounter">32 people like it</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText"> 3 comments</span>
          </div>
        </div>
      </div>
    </div>
  );
}
