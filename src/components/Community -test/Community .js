import React from "react";
import ImageSlider from "./ImageSlider";
import { SliderData } from "./SliderData";
import "./community.css";
const Community = () => {
  return (
    <div>
      <h1>Game Community Hub</h1>
      <div>
        <h5>Live Game Updates</h5>
        <ImageSlider slides={SliderData} show={6} />
      </div>
    </div>
  );
};

export default Community;
