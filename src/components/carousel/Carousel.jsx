import React, { useState } from "react";
import "./style.scss";
import Carousel from "react-bootstrap/Carousel";
import koto from "../../assets/koto.png";
import medellinSaborea from "../../assets/medellinSaborea.png";
import unafoodiemas from "../../assets/unafoodiemas.png";

const ControlledCarousel = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="carousel">
    <h3 className="carousel__h3">Influencers destacados: </h3>
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img className="d-flex instagramers" src={koto} alt="First slide" />
        <Carousel.Caption>
         
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-flex instagramers"
          src={medellinSaborea}
          alt="Second slide"
        />

        <Carousel.Caption>
        
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-flex instagramers"
          src={unafoodiemas}
          alt="Third slide"
        />

        <Carousel.Caption>
          {/* <h3 className="carousel__text">Third slide label</h3>
          <p className="carousel__text">
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p> */}
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  );
};

export default ControlledCarousel;
