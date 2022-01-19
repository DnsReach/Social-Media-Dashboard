import React from "react";
import ImageTwitter2 from "../component/images/twitter.png";
import "./overview-css/twit2.css";
const twitteroverview2 = () => {
  return (
    <div>
      <label id="label-overview" style={{ fontSize: 20 }}>
        Likes
      </label>
      <img id="imagem-twitter-2" src={ImageTwitter2} alt="twitter-overview-2" />
      <h1 className="text-view-twitter-2">507</h1>
    </div>
  );
};

export default twitteroverview2;
