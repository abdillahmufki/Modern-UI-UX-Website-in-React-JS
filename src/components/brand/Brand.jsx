import React from "react";
import "./brand.css";
import { google, atlasian, dropbox, slack, shopify } from "./import";

const Brand = () => {
  return (
    <div className="whatblack__brand section__padding">
      <div>
        <img src={google} alt="" />
      </div>
      <div>
        <img src={atlasian} alt="" />
      </div>
      <div>
        <img src={dropbox} alt="" />
      </div>
      <div>
        <img src={slack} alt="" />
      </div>
      <div>
        <img src={shopify} alt="" />
      </div>
    </div>
  );
};

export default Brand;
