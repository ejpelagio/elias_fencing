import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <FooterDiv>
      <FooterText>Elias Fences 2020 &#169;</FooterText>
    </FooterDiv>
  );
};

export default Footer;

const FooterDiv = styled.div`
  background-color: rgb(182, 61, 50);
  width: 100vw;
  bottom: 0;
  height: 50px;
  padding-top: 1rem;
  overflow: hidden;
`;
const FooterText = styled.h5`
  font-size: 16px;
  text-align: center;
  color: white;
`;
