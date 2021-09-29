import React from "react";
import CarouselGame from "./CarouselGame";
import "./exclusiveGame.css";
const ExclusiveGameContent = () => {
  return (
    <section
      className="excludiveGame-section"
      style={{ backgroundColor: "#b3d4fc" }}
    >
      <div className="excludiveGame-container">
        <div>
          <h5>Exclusive Game Content</h5>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit sed
            quibusdam consequatur, debitis itaque quia ratione illo voluptatum
            dolores nulla dolor, ut vel ipsum qui dicta aliquam veniam provident
            molestias.
          </p>
        </div>
        <CarouselGame />
      </div>
      <div></div>
    </section>
  );
};

export default ExclusiveGameContent;
