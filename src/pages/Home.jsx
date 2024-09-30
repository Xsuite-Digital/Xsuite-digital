import AboutUs from "../components/main/AboutUs";
import HireUs from "../components/main/HireUs";
import Hero from "../components/main/Hero";
import Tesimonial from "../components/main/Tesimonial";
import Location from "../components/main/Location";
import Offerings from "../components/main/Offerings";
import FAQs from "../components/main/FAQs";
import Technologies from "../components/main/Technologies";
import MouseTrail from "../components/MouseTrail"; // Import MouseTrail

const Home = () => {
  return (
    <div className="bg-white space-y-10">
      <MouseTrail /> 
      <Hero />
      <AboutUs />
      <Offerings />
      <HireUs />
      <Technologies />
      <Tesimonial />
      <FAQs />
      <Location />
    </div>
  );
};

export default Home;
