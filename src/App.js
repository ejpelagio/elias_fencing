// importing the style reset css from https://meyerweb.com/eric/tools/css/reset/
import "./AppReset.css";
// importing components
import Footer from "./components/footer/Footer";
import Home from "./components/home/Home";
import Mission from "./components/home/Mission";
import CarouselCom from "./components/carousel/Carousel";
// importing dependencies
import styled from "styled-components";

function App() {
  return (
    // main App wrapper
    <AppWrapper>
      <Home />
      <Mission />
      <CarouselCom />
      <br />
      <br />
      <br />
      <Footer />
    </AppWrapper>
  );
}

export default App;

// Styling using styled components
const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 100vh;
  overflow: auto;
  background-color: #e4e695;
`;
