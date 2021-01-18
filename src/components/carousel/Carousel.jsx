// importing dependencies
import React from "react";
import Carousel from "react-bootstrap/Carousel";
import styled from "styled-components";

// importing images for carousel
import { CarouselData } from "./carouselData";

const CarouselCom = () => {
  return (
    // creating carousel wrapper
    <CarouselWrapper>
      {/* creating a bootsrap carousel, mapping throughout the images for the carousel */}
      <Carousel interval="5000">
        {CarouselData.fences.map((fence, index) => (
          <Carousel.Item key={index}>
            <StyledImage src={fence.image} alt={fence.alt} />
          </Carousel.Item>
        ))}
      </Carousel>
    </CarouselWrapper>
  );
};

export default CarouselCom;

// Styling using styled components
const CarouselWrapper = styled.div`
  max-width: 100%;
  display: flex;
  justify-content: center;
`;

const StyledImage = styled.img`
  width: 100%;
`;
