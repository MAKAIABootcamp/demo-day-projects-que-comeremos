import React, { useState } from "react";
import "./style.css";
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
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-flex w-25 instagramers"
          src={koto}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3 className="carousel__text">First slide label</h3>
          <p className="carousel__text">
            Nulla vitae elit libero, a pharetra augue mollis interdum.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-25 instagramers"
          src={medellinSaborea}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3 className="carousel__text">Second slide label</h3>
          <p className="carousel__text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-25 instagramers"
          src={unafoodiemas}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3 className="carousel__text">Third slide label</h3>
          <p className="carousel__text">
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default ControlledCarousel;
