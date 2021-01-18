// importing dependencies
import React from "react";
import styled from "styled-components/macro";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

// Importing local imgages
import WhatsAppLogo from "../../assets/images/whatsApp.png";
import TextMessageLogo from "../../assets/images/textMess.png";

// create the companys mission component and style using styled-components
const Mission = () => {
  return (
    // bootstrap container
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
        <SendMeAMessage>Send me a message for a free estimate!</SendMeAMessage>
      </Row>
      {/* creating the button div and creatin button that sends a text message onPress*/}
      <ButtonDiv>
        <StyledIcon
          onClick={(e) => {
            window.open("sms:12514875008&body=HiElias", "_blank");
          }}
          src={TextMessageLogo}
          roundedCircle
        />

        {/* creating button that sends a whatsApp message onPress*/}
        <StyledIcon
          onClick={(e) => {
            window.open(
              "https://api.whatsapp.com/send?phone=12514875008",
              "_blank"
            );
          }}
          src={WhatsAppLogo}
          roundedCircle
        />
      </ButtonDiv>
      {/* create a phone component with an a tag to make a phone call*/}
      <PhoneNumber>
        <PhoneNumberLink href="tel:2514875008">(251) 487-5008</PhoneNumberLink>
      </PhoneNumber>
    </Container>
  );
};

export default Mission;

// Styling using styled components
const CompanyName = styled.h1`
  font-size: 36px;
  text-align: center;
  padding-top: 3rem;
  padding-bottom: 2rem;
  color: rgb(182, 61, 50);
  width: 100%;
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
  width: 100%;
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

const SendMeAMessage = styled.p`
  text-align: "center";
  padding: 0.8rem 0;
  font-size: 2rem;
  text-align: center;
`;

const StyledIcon = styled.img`
  width: 100px;
  background-color: transparent;
  cursor: pointer;
  margin: 0 10px;
`;

const PhoneNumber = styled.div`
  width: 100%;
  text-align: center;
  margin-bottom: 20px;
`;

const PhoneNumberLink = styled.a`
  font-size: 3rem;
  text-decoration: none;
  color: black;
  margin: auto;
  text-align: center;
  cursor: pointer;
`;
