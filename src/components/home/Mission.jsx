import React from "react";
import styled from "styled-components/macro";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";

import WhatsAppLogo from "../../assets/images/WhatsApp.jpeg";
import TextMessageLogo from "../../assets/images/textMess.png";
import "./home.css";

import Row from "react-bootstrap/Row";

const Mission = () => {
  return (
    <Container>
      <Row lg={1} sm={1}>
        <CompanyName>Elias Fencing Services</CompanyName>
        <br />
        <MissionParagraph>
          We provide fencing services for the Austin metro are to include:
          <br />
          Austin, Pflugerville, Roundrock, Cedar Park. In need of a new fence or
          a repair?
          <br /> <strong>Look no further!</strong>
        </MissionParagraph>
      </Row>
      <Row lg={1}>
        <ServicesTitle>Our Services Include</ServicesTitle>
        <br />
        <ServicesParagraph>
          Metal / Wooden Post - Custom Gates - Cedar/Pine/Composite Pickets
          <br />
          and much more.
        </ServicesParagraph>
        <p style={{ textAlign: "center", paddingTop: ".8rem" }}>
          Send me a message for a free estimate!
        </p>
      </Row>
      <ButtonDiv>
        <Image
          onClick={(e) => {
            console.log("Image click");
            window.open("sms:12514875008&body=HiElias", "_blank");
          }}
          width={100}
          height={80}
          className="buttonCall"
          src={TextMessageLogo}
          roundedCircle
        />

        <Image
          onClick={(e) => {
            console.log("Image click");
            window.open(
              "https://api.whatsapp.com/send?phone=12514875008",
              "_blank"
            );
          }}
          width={100}
          height={80}
          src={WhatsAppLogo}
          roundedCircle
        />
      </ButtonDiv>
    </Container>
  );
};

export default Mission;

const CompanyName = styled.h1`
  font-size: 36px;
  text-align: center;
  padding-top: 3rem;
  padding-bottom: 2rem;
  color: rgb(182, 61, 50);
`;
const MissionParagraph = styled.div`
  font-size: 20px;
  text-align: center;
  line-height: 1.2;
`;
const ServicesTitle = styled.div`
  font-size: 28px;
  text-align: center;
  padding-top: 5rem;
  padding-bottom: 2rem;
`;

const ServicesParagraph = styled.div`
  font-size: 20px;
  text-align: center;
  line-height: 1.4;
`;
const ButtonDiv = styled.div`
  display: flex;
  justify-content: center;
  padding: 2rem;
`;
