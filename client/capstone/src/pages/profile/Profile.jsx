import "./profile.css";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/sidebar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/rightbar";

export default function Profile() {
  return (
    <>
      <Topbar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img className="profileCoverImg" src="assets2/cover.jpg" alt="" />
              <img
                className="profileUserImg"
                src="/assets2/person/1.PNG"
                alt=""
              />
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName">Michael Link</h4>
              <span className="profileInfoDesc">Hello my friends!</span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed />
            <Rightbar profile />
          </div>
        </div>
      </div>
    </>
  );
}
