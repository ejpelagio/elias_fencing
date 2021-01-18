// importing dependencies
import React from "react";
import styled from "styled-components";

// create footer component with copyright icon and current year
const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <FooterDiv>
      <FooterText>Elias Fencing {year} &#169;</FooterText>
    </FooterDiv>
  );
};

export default Footer;

// Styling using styled components
const FooterDiv = styled.div`
  background-color: rgb(182, 61, 50);
  width: 100%;
  height: 50px;
  padding: 1rem 0;
`;
const FooterText = styled.h5`
  font-size: 16px;
  text-align: center;
  color: white;
`;
