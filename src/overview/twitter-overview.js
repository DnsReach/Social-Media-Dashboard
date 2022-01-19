import React from "react";
import ImageTwitter from "../component/images/twitter.png";
import "./overview-css/twit.css";

const twitteroverview = () => {
  return (
    <div>
      <label id="label-overview" style={{ fontSize: 20 }}>
        Retweets
      </label>
      <img id="imagem-twitter" src={ImageTwitter} alt="twitter-overview" />
      <h1 className="text-view-twitter">117</h1>
    </div>
  );
};

export default twitteroverview;
