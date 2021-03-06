import React from "react";
import Carousel from "./Carousel";
import "./EventPromotions.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
const EventPromotions = () => {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 5,

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
    <section className="eventPromotion-section">
      <div>
        <h1>Special Events & Promotional</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero
          adipisci veniam accusamus ab maxime, nobis blanditiis dicta sit
          veritatis ratione itaque ex sunt, voluptatum ipsa voluptate obcaecati
          illo id est?
        </p>
      </div>
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
                src="https://via.placeholder.com/300x300"
                alt="placeholder"
                style={{ width: "100%" }}
              />
            </div>
          </div>
          <div>
            <div style={{ padding: 8 }}>
              <img
                src="https://via.placeholder.com/300x300"
                alt="placeholder"
                style={{ width: "100%" }}
              />
            </div>
          </div>
          <div>
            <div style={{ padding: 8 }}>
              <img
                src="https://via.placeholder.com/300x300"
                alt="placeholder"
                style={{ width: "100%" }}
              />
            </div>
          </div>
          <div>
            <div style={{ padding: 8 }}>
              <img
                src="https://via.placeholder.com/300x300"
                alt="placeholder"
                style={{ width: "100%" }}
              />
            </div>
          </div>
          <div>
            <div style={{ padding: 8 }}>
              <img
                src="https://via.placeholder.com/300x300"
                alt="placeholder"
                style={{ width: "100%" }}
              />
            </div>
          </div>
          <div>
            <div style={{ padding: 8 }}>
              <img
                src="https://via.placeholder.com/300x300"
                alt="placeholder"
                style={{ width: "100%" }}
              />
            </div>
          </div>
          <div>
            <div style={{ padding: 8 }}>
              <img
                src="https://via.placeholder.com/300x300"
                alt="placeholder"
                style={{ width: "100%" }}
              />
            </div>
          </div>
          <div>
            <div style={{ padding: 8 }}>
              <img
                src="https://via.placeholder.com/300x300"
                alt="placeholder"
                style={{ width: "100%" }}
              />
            </div>
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default EventPromotions;
