import Topbar from "./topbar/Topbar.jsx";
import Sidebar from "./sidebar/sidebar.jsx";
import Rightbar from "./rightbar/rightbar.jsx";
import Feed from "./feed/Feed.jsx";
import "./home.css";

export default function Home() {
  return (
    <>
      <Topbar />
      <div className="homeContainer">
        <Sidebar />
        <Feed />
        <Rightbar />
      </div>
    </>
  );
}
