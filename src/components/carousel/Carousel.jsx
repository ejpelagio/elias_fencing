import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { CarouselData } from "./carouselData";
import "./carousel.css";

const CarouselCom = () => {
  return (
    <div className="carouselDiv">
      <Carousel interval="5000" className="carousel">
        {CarouselData.fences.map((fence, index) => (
          <Carousel.Item key={index}>
            <img src={fence.image} alt={fence.alt} />
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default CarouselCom;
