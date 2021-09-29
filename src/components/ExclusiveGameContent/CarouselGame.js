import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
const CarouselGame = () => {
  const settings = {
    dots: true,
    centerMode: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 3,
    appendDots: (dots) => (
      <div
        style={{
          padding: "10px",
        }}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    customPaging: (i) => <div className="customPaging">{i + 1}</div>,
  };
  return (
    <>
      <div
        style={{
          maxWidth: 1200,
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: 64,
        }}
      >
        <Slider {...settings}>
          <div>
            <div style={{ padding: 8 }}>
              <img
                src="https://i.pinimg.com/474x/40/99/f3/4099f362d12955aba8ea6fd6b59d6ccd.jpg"
                alt="placeholder"
                style={{ width: "100%" }}
              />
            </div>
          </div>
          <div>
            <div style={{ padding: 8 }}>
              <img
                src="https://i.pinimg.com/474x/40/99/f3/4099f362d12955aba8ea6fd6b59d6ccd.jpg"
                alt="placeholder"
                style={{ width: "100%" }}
              />
            </div>
          </div>
          <div>
            <div style={{ padding: 8 }}>
              <img
                src="https://i.pinimg.com/474x/40/99/f3/4099f362d12955aba8ea6fd6b59d6ccd.jpg"
                alt="placeholder"
                style={{ width: "100%" }}
              />
            </div>
          </div>
          <div>
            <div style={{ padding: 8 }}>
              <img
                src="https://i.pinimg.com/474x/40/99/f3/4099f362d12955aba8ea6fd6b59d6ccd.jpg"
                alt="placeholder"
                style={{ width: "100%" }}
              />
            </div>
          </div>
          <div>
            <div style={{ padding: 8 }}>
              <img
                src="https://i.pinimg.com/474x/40/99/f3/4099f362d12955aba8ea6fd6b59d6ccd.jpg"
                alt="placeholder"
                style={{ width: "100%" }}
              />
            </div>
          </div>
          <div>
            <div style={{ padding: 8 }}>
              <img
                src="https://i.pinimg.com/474x/40/99/f3/4099f362d12955aba8ea6fd6b59d6ccd.jpg"
                alt="placeholder"
                style={{ width: "100%" }}
              />
            </div>
          </div>
          <div>
            <div style={{ padding: 8 }}>
              <img
                src="https://i.pinimg.com/474x/40/99/f3/4099f362d12955aba8ea6fd6b59d6ccd.jpg"
                alt="placeholder"
                style={{ width: "100%" }}
              />
            </div>
          </div>
          <div>
            <div style={{ padding: 8 }}>
              <img
                src="https://i.pinimg.com/474x/40/99/f3/4099f362d12955aba8ea6fd6b59d6ccd.jpg"
                alt="placeholder"
                style={{ width: "100%" }}
              />
            </div>
          </div>
        </Slider>
      </div>
    </>
  );
};

export default CarouselGame;
