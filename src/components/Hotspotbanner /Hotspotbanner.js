import React from "react";
import StarRatings from "react-star-ratings";
import "./hotspotbanner.css";
const Hotspotbanner = () => {
  return (
    <>
      <section className="section-main">
        <div className="container-game">
          <div className="content-game">
            <div className="product">
              <div className="product-title">GAMELOFT GAME</div>
              <div className="product-name">
                Racing / Action |<span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star"></span>
                <span class="fa fa-star"></span>
              </div>
            </div>

            <div className="product-descript">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque
                minus ipsam nam dolorum ratione, accusamus optio, porro velit
                vero enim impedit placeat sunt soluta voluptas eius! Incidunt
                animi autem sunt!
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="bottom-page">
        <div className="container-stores">
          <h4 className="stores-content" style={{ width: "100%" }}>
            <span className="txt-download" style={{ display: "inline" }}>
              Dowload Latest Versions
            </span>
          </h4>
          <div class="store-buttons">
            <a href="./">
              <img
                src="https://media01.gameloft.com/web_mkt/global-store-badges-v2/windowstore/EN.png?v=3"
                alt="windowstore"
              />
            </a>
            <a href="./">
              <img
                src="https://media01.gameloft.com/web_mkt/minisites/asphalt-9/assets/os/dist/images/home/nintendo-eshop-btn.jpg"
                alt="nintendo-eshop"
              />
            </a>
            <a href="./">
              <img
                src="https://media01.gameloft.com/web_mkt/global-store-badges-v2/windowstore/EN.png?v=3"
                alt="facebook"
              />
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hotspotbanner;
