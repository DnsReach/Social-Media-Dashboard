import React from "react";
import "./media-css/twitter.css";

import Image from "../images/twitter.png";

const instagran = () => {
  return (
    <>
      <div>
        <img src={Image} id="img" alt="twitter" />
        <label id="label">@Dnsreach</label>
      </div>
      <div className="text-sub">
        <h1>1044</h1>
        <p style={{ fontSize: 16 }}>
          <strong>FOLLOWERS</strong>
        </p>
      </div>
      <div></div>
    </>
  );
};

export default instagran;
