import React from "react";
import "./stickyMenu.css";

const StickyMenu = () => {
  return (
    <>
      <header>
        <div className="menu-container">
          <div className="logo">
            <a href="./home">
              <img
                class="black"
                src="https://mkt-web.gameloft.com/assets/images/logo_gameloft_black.png"
                width="130"
                height="20"
                alt=""
                title=""
              />
            </a>
          </div>

          <div class="btn-burger">
            <i class="fas fa-bars "></i>
          </div>
        </div>
      </header>

      <div className="sticky-icons ">
        <div className="social-icon ">
          <i className="fas fa-share-alt icon "></i>
          <i className="far fa-envelope icon"></i>
          <i className="fas fa-headphones icon"></i>
        </div>
      </div>
    </>
  );
};

export default StickyMenu;
