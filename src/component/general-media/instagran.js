import React from "react";
import "./media-css/instagran.css";

import Image from "../images/instagran.png";

const twitter = () => {
  return (
    <>
      <div>
        <img src={Image} id="img" alt="instagran" />
        <label id="label">@Dnsreach</label>
      </div>
      <div className="text-sub">
        <h1>11K</h1>
        <p style={{ fontSize: 16 }}>
          <strong>FOLLOWERS</strong>
        </p>
      </div>
    </>
  );
};

export default twitter;
