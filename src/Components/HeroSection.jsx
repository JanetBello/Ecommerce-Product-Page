import React, { useState } from "react";
import SliderData from "./SliderData";
import ImageSlider from "./ImageSlider";

const HeroSection = ({ slides }) => {
  return (
    <section className="">
      <ImageSlider
        thumbnailArr={SliderData.thumbnailArr}
        imageArr={SliderData.imageArr}
      />
    </section>
  );
};

export default HeroSection;
