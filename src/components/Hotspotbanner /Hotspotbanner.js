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
                Racing / Action |
                <span>
                  <StarRatings
                    rating={4.5}
                    starRatedColor="gold"
                    numberOfStars={5}
                    name="rating"
                  />
                </span>
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
          <div className="text-dowload">
            <h3>Dowload Latest Version</h3>
          </div>
          <div class="store-buttons">
            <button class=" btn btn-apple">
              <i class="fa fa-apple  icon"></i>
              <span class=" text-left">
                <small class="font-weight-light ">Available on the</small> App
                Store
              </span>
            </button>
            <button class=" btn btn-androi">
              <i class="fa fa-android  icon"></i>
              <span class="text-left">
                <small class="font-weight-light ">Get it on the</small> Google
                Play
              </span>
            </button>
            <button class=" btn btn-apple">
              <i class="fa fa-apple  icon"></i>
              <span class=" text-left">
                <small class="font-weight-light ">Available on the</small> App
                Store
              </span>
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hotspotbanner;
