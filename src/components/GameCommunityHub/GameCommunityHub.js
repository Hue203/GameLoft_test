import React from "react";
import CarouselTop from "./CarouselTop/CarouselTop";
import "./gameCommunityHub.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CarouselBody from "./CarouselBody/CarouselBody";

const GameCommunityHub = () => {
  return (
    <section
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingTop: "80px",
        textAlign: "center",
        backgroundColor: "#b3d4fc",
      }}
    >
      <div className="gameCommunity-Container">
        <div style={{ fontSize: "45px" }}>Game Community Hub</div>
        <div className="slider-top">
          <div style={{ fontSize: "26px" }}>Live Game Updates</div>
          <CarouselTop />
        </div>
        <div className="allPost">
          <div>All Posts</div>
          <div className="allpost-right">
            <i class="fab fa-facebook-square"></i>
            <i class="fab fa-twitter-square"></i>
            <i class="fab fa-instagram"></i>
            <input type="text" name="search" placeholder="Search.."></input>
          </div>
        </div>
        <div className="slider-bottom">
          <CarouselBody />
        </div>
      </div>
    </section>
  );
};

export default GameCommunityHub;
