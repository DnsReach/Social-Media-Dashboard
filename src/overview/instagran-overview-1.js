import React from "react";

import ImageInsta from "../component/images/instagran.png";
import "./overview-css/insta.css";

const instagranoverview1 = () => {
  return (
    <div>
      <div>
        <label id="label-overview" style={{ fontSize: 20 }}>
          Page Views
        </label>
        <img id="imagem-insta" src={ImageInsta} alt="instagran-overview" />
        <h1 className="text-view-insta">5462</h1>
      </div>
    </div>
  );
};

export default instagranoverview1;
