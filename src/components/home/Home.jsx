// importing dependencies
import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import styled from "styled-components/macro";

// create home component with img background
const Home = () => {
  return (
    // jumbotron div with companys name
    <JumbotronDiv>
      <StyledJumbotron>
        <CompanyTitle>Elias Fencing</CompanyTitle>
      </StyledJumbotron>
    </JumbotronDiv>
  );
};

export default Home;

// Styling using styled components
const JumbotronDiv = styled.div`
  height: 25.8vh;
  max-width: 100%;
  display: flex;
  justify-content: center;
  border-width: 2px;
  border-bottom-style: solid;
`;
const StyledJumbotron = styled(Jumbotron)`
  height: 25.5vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url("../../assets/images/home2.jpg");
  background-size: cover;
`;
const CompanyTitle = styled.div`
  font-size: 60px;
  color: white;
`;
