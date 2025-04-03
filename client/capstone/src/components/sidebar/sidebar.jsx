// import "./Sidebar.css"; // Corrected import
// import {
//   RssFeed,
//   Sms,
//   OndemandVideo,
//   Groups,
//   Bookmark,
//   QuestionMark,
//   EmojiEvents,
//   School,
// } from "@mui/icons-material";

// export default function Sidebar() {
//   return (
//     <div className="sidebar">
//       <div className="sidebarWrapper">
//         <ul className="sidebarList">
//           <li className="sidebarListItem">
//             <RssFeed className="sidebarIcon" />
//             <span className="sidebarListItemText">Feed</span>
//           </li>
//           <li className="sidebarListItem">
//             <Sms className="sidebarIcon" />
//             <span className="sidebarListItemText">Chat</span>
//           </li>
//           <li className="sidebarListItem">
//             <OndemandVideo className="sidebarIcon" />
//             <span className="sidebarListItemText">Video</span>
//           </li>
//           <li className="sidebarListItem">
//             <Groups className="sidebarIcon" />
//             <span className="sidebarListItemText">Friends</span>
//           </li>
//           <li className="sidebarListItem">
//             <Bookmark className="sidebarIcon" />
//             <span className="sidebarListItemText">Bookmarks</span>
//           </li>
//           <li className="sidebarListItem">
//             <QuestionMark className="sidebarIcon" />
//             <span className="sidebarListItemText">Questions</span>
//           </li>
//           <li className="sidebarListItem">
//             <EmojiEvents className="sidebarIcon" />
//             <span className="sidebarListItemText">Events</span>
//           </li>
//           <li className="sidebarListItem">
//             <School className="sidebarIcon" />
//             <span className="sidebarListItemText">Courses</span>
//           </li>
//         </ul>
//         <button className="sidebarButton"> ShowMore</button>
//         <hr className="sidebarHr" />
//         <ul className="sidebarFriend">
//             <li className="sidebarFriendImg" src="" alt=""/>
//         </ul>
//       </div>
//     </div>
//   ); // Added a class for styling
// }

import "./Sidebar.css";
import {
  RssFeed,
  Chat,
  PlayCircleFilledOutlined,
  Group,
  Bookmark,
  HelpOutline,
  WorkOutline,
  Event,
  School,
} from "@mui/icons-material";
// import { Users } from "../../dummyData";
// import CloseFriend from "../closeFriend/CloseFriend";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <RssFeed className="sidebarIcon" />
            <span className="sidebarListItemText">Feed</span>
          </li>
          <li className="sidebarListItem">
            <Chat className="sidebarIcon" />
            <span className="sidebarListItemText">Chats</span>
          </li>
          <li className="sidebarListItem">
            <PlayCircleFilledOutlined className="sidebarIcon" />
            <span className="sidebarListItemText">Videos</span>
          </li>
          <li className="sidebarListItem">
            <Group className="sidebarIcon" />
            <span className="sidebarListItemText">Groups</span>
          </li>
          <li className="sidebarListItem">
            <Bookmark className="sidebarIcon" />
            <span className="sidebarListItemText">Bookmarks</span>
          </li>
          <li className="sidebarListItem">
            <HelpOutline className="sidebarIcon" />
            <span className="sidebarListItemText">Questions</span>
          </li>
          <li className="sidebarListItem">
            <WorkOutline className="sidebarIcon" />
            <span className="sidebarListItemText">Jobs</span>
          </li>
          <li className="sidebarListItem">
            <Event className="sidebarIcon" />
            <span className="sidebarListItemText">Events</span>
          </li>
          <li className="sidebarListItem">
            <School className="sidebarIcon" />
            <span className="sidebarListItemText">Courses</span>
          </li>
        </ul>
        <button className="sidebarButton">Show More</button>
        <hr className="sidebarHr" />
        <ul className="sidebarFriendList"></ul>
      </div>
    </div>
  );
}
