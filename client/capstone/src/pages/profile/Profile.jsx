import { useEffect, useState } from "react";
import axios from "axios";
import "./profile.css";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/sidebar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/rightbar";

export default function Profile() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      const token = localStorage.getItem("token");
      try {
        const res = await axios.get("http://localhost:8080/api/users/profile", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUser(res.data);
      } catch (err) {
        console.error("Failed to fetch profile", err);
      }
    };

    fetchProfile();
  }, []);

  // 🔁 Choose profile image based on email
  const getProfileImage = (email) => {
    if (email === "frank@email.com") return "/assets2/person/3.jpg";
    if (email === "chickentest@email.com") return "/assets2/person/1.PNG";
    return "/assets2/person/default.png"; // fallback/default image
  };

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
                src={getProfileImage(user?.email)}
                alt="Profile"
              />
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName">{user?.name || "Loading..."}</h4>
              <span className="profileInfoDesc">
                {user ? `Welcome, ${user.email}` : "Fetching your profile..."}
              </span>
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
