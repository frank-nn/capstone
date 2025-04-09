import "./share.css";
import { useState } from "react";
import axios from "axios";
import { PermMedia, Label, Room, EmojiEmotions } from "@mui/icons-material";

export default function Share() {
  const [desc, setDesc] = useState("");
  const [file, setFile] = useState(null);

  const handlePost = async () => {
    if (!desc.trim() && !file) return;

    const token = localStorage.getItem("authToken");
    const formData = new FormData();

    formData.append("desc", desc);
    if (file) formData.append("file", file);

    try {
      const res = await axios.post(
        "http://localhost:8080/api/posts",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log("Post success:", res.data);
      setDesc("");
      setFile(null);
    } catch (err) {
      console.error("Post failed:", err);
    }
  };

  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img className="shareProfileImg" src="/assets2/person/1.PNG" alt="" />
          <input
            placeholder="What's in your mind mate?"
            className="shareInput"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
        </div>
        <hr className="shareHr" />
        <div className="shareBottom">
          <div className="shareOptions">
            <label className="shareOption">
              <PermMedia htmlColor="tomato" className="shareIcon" />
              <span className="shareOptionText">Photo or Video</span>
              <input
                type="file"
                style={{ display: "none" }}
                onChange={(e) => setFile(e.target.files[0])}
              />
            </label>
            <div className="shareOption">
              <Label htmlColor="blue" className="shareIcon" />
              <span className="shareOptionText">Tag</span>
            </div>
            <div className="shareOption">
              <Room htmlColor="green" className="shareIcon" />
              <span className="shareOptionText">Location</span>
            </div>
            <div className="shareOption">
              <EmojiEmotions htmlColor="goldenrod" className="shareIcon" />
              <span className="shareOptionText">Feelings</span>
            </div>
          </div>
          <button className="shareButton" onClick={handlePost}>
            Share
          </button>
        </div>
      </div>
    </div>
  );
}
