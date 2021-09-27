import React, { useEffect, useState } from "react";
import { SliderData } from "./SliderData";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";

const ImageSlider = ({ slides, show }) => {
  const [current, setCurrent] = useState(0);
  const [length, setLength] = useState(slides.length);

  console.log("lenght", length);
  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  console.log("current", current);
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };
  console.log("prevSlide", current);

  useEffect(() => {
    setLength(slides.length);
  }, [slides]);
  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }
  return (
    <section className={`slider`}>
      <div className="arrow-wrapper-left">
        <FaArrowAltCircleLeft className="left-arrow-new" onClick={prevSlide} />
      </div>
      <div className="arrow-wrapper-right">
        <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />
      </div>

      {SliderData.map((slide, index) => {
        console.log("slide", { slide });
        return (
          <div key={index} className={`show-${show}`}>
            <img
              src={slide.image}
              alt="travel image"
              width="100%"
              height="80px"
            />
          </div>
        );
      })}
    </section>
  );
};

export default ImageSlider;
