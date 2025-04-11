import { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate for redirection
import { Search, Person, Chat, Notifications } from "@mui/icons-material";
import "./topbar.css";

export default function Topbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false); // Manage dropdown state
  const navigate = useNavigate(); // Hook to navigate between routes

  // Toggle dropdown visibility
  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  // Handle logout (redirects to login page)
  const handleLogout = () => {
    console.log("Logging out...");
    localStorage.removeItem("token"); //Removes tokens
    setDropdownOpen(false); // Close the dropdown after logout
    navigate("/"); // Navigate to the login page
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

        {/* Profile Image (Clickable to toggle dropdown) */}
        <div className="profileImgContainer" onClick={toggleDropdown}>
          <img src="/assets2/person/1.PNG" alt="" className="topbarImg" />
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
