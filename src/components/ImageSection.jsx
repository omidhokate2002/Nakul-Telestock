import React from "react";
import houseImage from "../assets/houseImage.png";

const ImageSection = () => {
  return (
    <div className="pt-16">
      <img src={houseImage} alt="House" className="w-full" />
    </div>
  );
};

export default ImageSection;
