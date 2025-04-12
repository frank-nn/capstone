import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Search, Person, Chat, Notifications } from "@mui/icons-material";
import "./topbar.css";

export default function Topbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  const handleLogout = () => {
    console.log("Token before logout:", localStorage.getItem("token"));
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    console.log("Token after logout:", localStorage.getItem("token"));
    setDropdownOpen(false);
    navigate("/");
  };

  // 🔁 Choose profile image based on email
  const getProfileImage = (email) => {
    if (email === "frank@email.com") return "/assets2/person/3.jpg";
    if (email === "jack@email.com") return "/assets2/person/1.PNG";
    return "/assets2/person/default.png";
  };

  return (
    <div className="topbarContailer">
      <div className="topbarLeft">
        <div className="topbarLinks">
          <Link to="/home" className="topbarLink">
            Homepage
          </Link>

          <Link to="/profile" className="topbarLink">
            Profile
          </Link>
          <span className="topbarLink"></span>
        </div>
      </div>

      <div className="topbarCenter">
        <div className="searchbar">
          <Search className="searchIcon" />
          <input
            placeholder="Search for friend, post or video"
            className="searchInput"
          />
        </div>
      </div>

      <div className="topbarRight">
        <div className="topbarIcons">
          <Link to="/comingsoon" className="topbarIconItem">
            <Person />
            <span className="topbarIconBadge">1</span>
          </Link>
          <Link to="/comingsoon" className="topbarIconItem">
            <Chat />
            <span className="topbarIconBadge">2</span>
          </Link>
          <Link to="/comingsoon" className="topbarIconItem">
            <Notifications />
            <span className="topbarIconBadge">1</span>
          </Link>
        </div>

        {/* 🔥 Dynamic Profile Image */}
        <div className="profileImgContainer" onClick={toggleDropdown}>
          <img
            src={getProfileImage(user?.email)}
            alt="Profile"
            className="topbarImg"
          />
        </div>

        {/* Dropdown Menu */}
        {dropdownOpen && (
          <div className="dropdownMenu">
            <button onClick={handleLogout} className="dropdownItem">
              Logout
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
