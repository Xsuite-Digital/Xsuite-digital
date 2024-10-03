import AboutUs from "../components/main/AboutUs";
import HireUs from "../components/main/HireUs";
import Hero from "../components/main/Hero";
import Tesimonial from "../components/main/Tesimonial";
import Location from "../components/main/Location";
import FAQs from "../components/main/FAQs";
import Technologies from "../components/main/Technologies";
import { Helmet } from "react-helmet-async";
import WorkProcess from "../components/main/WorkProcess";

const Home = () => {
  return (
    <div className="bg-white space-y-10">
      <Helmet>
        <title>
          XSuite Marketing Agency | Digital Solutions for Global Brands
        </title>
        <meta
          name="description"
          content="Explore XSuite, a full-service marketing agency that empowers brands through creativity and innovation worldwide.
"
        />
      </Helmet>
      <Hero />
      <AboutUs />
      <HireUs />
      <Technologies />
      <WorkProcess />
      <Tesimonial />
      <Location />
      <FAQs />
    </div>
  );
};

export default Home;
