import React from "react";
import "./media-css/youtube.css";
import Image from "../images/youtube-icon-logo-by-Vexels.png";

const youtube = () => {
  return (
    <>
      <div>
        <img src={Image} id="img" alt="youtube" />
        <label id="label">@Dnsreach</label>
      </div>
      <div className="text-sub">
        <h1>8239</h1>
        <p style={{ fontSize: 16 }}>
          <strong>FOLLOWERS</strong>
        </p>
      </div>
    </>
  );
};

export default youtube;
