import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";

import styled from "styled-components/macro";
import "./home.css";

const Home = () => {
  return (
    <JumbotronDiv>
      <Jumbotron className="jumbotron">
        <CompanyTitle>Elias Fencing</CompanyTitle>
      </Jumbotron>
    </JumbotronDiv>
  );
};

export default Home;

const JumbotronDiv = styled.div`
  height: 25.8vh;
  display: flex;
  justify-content: center;
  border-width: 2px;
  border-bottom-style: solid;
`;

const CompanyTitle = styled.div`
  font-size: 60px;
  color: white;
`;
