import "./AppReset.css";
// importing components
import Footer from "./components/footer/Footer";
import Home from "./components/home/Home";
import Mission from "./components/home/Mission";
import CarouselCom from "./components/carousel/Carousel";

function App() {
  return (
    <div className="App">
      <Home />
      <Mission />
      <CarouselCom />
      <br />
      <br />
      <br />

      <Footer />
    </div>
  );
}

export default App;
