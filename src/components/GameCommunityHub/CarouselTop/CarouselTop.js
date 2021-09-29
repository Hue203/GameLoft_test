import React from "react";
import Slider from "react-slick";
import "./carouselTop.css";

function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        color: " #2699fb",
        fontSize: "25px",
      }}
      onClick={onClick}
    />
  );
}

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        color: " #2699fb",
        fontSize: "25px",
      }}
      onClick={onClick}
    />
  );
}

const CarouselTop = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 3,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
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
          <div className="carouselTop-img">
            <img
              src="https://png.pngitem.com/pimgs/s/6-61307_travel-png-travel-clipart-png-transparent-png.png"
              alt="placeholder"
              style={{
                width: "55%",
                height: "92px",
                borderRadius: "50%",
              }}
            />
            <h5>Short Title</h5>
          </div>

          <div className="carouselTop-img">
            <img
              src="https://png.pngitem.com/pimgs/s/6-61387_travel-euclidean-vector-royalty-free-clip-art-travel.png"
              alt="placeholder"
              style={{
                width: "50%",
                height: "92px",
                borderRadius: "50%",
              }}
            />
            <h5>Short Title</h5>
          </div>

          <div className="carouselTop-img">
            <img
              src="https://png.pngitem.com/pimgs/s/115-1152266_tour-travel-png-vectors-tour-and-travel-vector.png"
              alt="placeholder"
              style={{
                width: "50%",
                height: "92px",
                borderRadius: "50%",
              }}
            />
            <h5>Short Title</h5>
          </div>

          <div className="carouselTop-img">
            <img
              src="https://png.pngitem.com/pimgs/s/6-61614_world-travel-awards-hd-png-download.png"
              alt="placeholder"
              style={{
                width: "50%",
                height: "92px",
                borderRadius: "50%",
              }}
            />
            <h5>Short Title</h5>
          </div>

          <div className="carouselTop-img">
            <img
              src="https://png.pngitem.com/pimgs/s/115-1152278_travel-png-images-travel-png-transparent-png.png"
              alt="placeholder"
              style={{
                width: "50%",
                height: "92px",
                borderRadius: "50%",
              }}
            />
            <h5>Short Title</h5>
          </div>

          <div className="carouselTop-img">
            <img
              src="https://png.pngitem.com/pimgs/s/6-61387_travel-euclidean-vector-royalty-free-clip-art-travel.png"
              alt="placeholder"
              style={{
                width: "50%",
                height: "92px",
                borderRadius: "50%",
              }}
            />
            <h5>Short Title</h5>
          </div>
          <div className="carouselTop-img">
            <img
              src="https://png.pngitem.com/pimgs/s/6-61387_travel-euclidean-vector-royalty-free-clip-art-travel.png"
              alt="placeholder"
              style={{
                width: "50%",
                height: "92px",
                borderRadius: "50%",
              }}
            />
            <h5>Short Title</h5>
          </div>
          <div className="carouselTop-img">
            <img
              src="https://png.pngitem.com/pimgs/s/6-61387_travel-euclidean-vector-royalty-free-clip-art-travel.png"
              alt="placeholder"
              style={{
                width: "50%",
                height: "92px",
                borderRadius: "50%",
              }}
            />
            <h5>Short Title</h5>
          </div>
          <div className="carouselTop-img">
            <img
              src="https://png.pngitem.com/pimgs/s/6-61387_travel-euclidean-vector-royalty-free-clip-art-travel.png"
              alt="placeholder"
              style={{
                width: "50%",
                height: "92px",
                borderRadius: "50%",
              }}
            />
            <h5>Short Title</h5>
          </div>
        </Slider>
      </div>
    </>
  );
};

export default CarouselTop;
