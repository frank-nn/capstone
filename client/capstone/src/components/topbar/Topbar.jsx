import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Search, Person, Chat, Notifications } from "@mui/icons-material";
import "./topbar.css";

export default function Topbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  const handleLogout = () => {
    // 🔍 Log token before removing
    const tokenBefore = localStorage.getItem("token");
    console.log("Token before logout:", tokenBefore);

    // 🧹 Remove token
    localStorage.removeItem("token");

    // ✅ Confirm removal
    const tokenAfter = localStorage.getItem("token");
    console.log("Token after logout (should be null):", tokenAfter);

    setDropdownOpen(false);
    navigate("/"); // Redirect to login page
  };

  return (
    <div className="topbarContailer">
      <div className="topbarLeft">
        <div className="topbarLinks">
          <Link to="/home" className="topbarLink">
            Homepage
          </Link>

          <Link to="/profile" className="topbarLinks">
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
          ></input>
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <Person />
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <Chat />
            <span className="topbarIconBadge">2</span>
          </div>
          <div className="topbarIconItem">
            <Notifications />
            <span className="topbarIconBadge">1</span>
          </div>
        </div>

        <div className="profileImgContainer" onClick={toggleDropdown}>
          <img src="/assets2/person/1.PNG" alt="" className="topbarImg" />
        </div>

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
