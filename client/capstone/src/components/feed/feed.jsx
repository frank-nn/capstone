import "./feed.css"; // Corrected import
import Share from "../share/Share";

export default function Feed() {
  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share />
      </div>
    </div>
  ); // Added a class for styling
}
