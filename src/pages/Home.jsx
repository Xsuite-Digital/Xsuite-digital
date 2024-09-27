import AboutUs from "../components/main/AboutUs";
import HireUs from "../components/main/HireUs";
import Hero from "../components/main/Hero";
import Tesimonial from "../components/main/Tesimonial";
import Location from "../components/main/Location";
import Offerings from "../components/main/Offerings";

const Home = () => {
  return (
    <div className=" bg-white space-y-10 ">
      
      <Hero />
      <AboutUs />
      <Offerings />
      <HireUs />

      <Tesimonial />

      <Location />
    </div>
  );
};

export default Home;
