import Topbar from "./topbar/Topbar.jsx";
import Sidebar from "./sidebar/Sidebar.jsx";
import Rightbar from "./rightbar/rightbar.jsx";
import Feed from "./feed/Feed.jsx";

export default function Home() {
  return (
    <>
      <Topbar />
      <div className="homeContainer"></div>
      <Sidebar />
      <Rightbar />
      <Feed />
    </>
  );
}
