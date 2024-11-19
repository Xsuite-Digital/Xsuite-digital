import { lazy, Suspense, useEffect } from "react";
import AboutUs from "../components/main/AboutUs";
import HireUs from "../components/main/HireUs";
import Hero from "../components/main/Hero";
import Stats from "../components/main/Stats";

import Pacakages from "../components/main/Pacakages";
import ContactLink from "../components/ContactLink";
// const WorkProcess = lazy(() => import("../components/main/WorkProcess"));
const Tesimonial = lazy(() => import("../components/main/Tesimonial"));
// const Location = lazy(() => import("../components/main/Location"));
const FAQs = lazy(() => import("../components/main/FAQs"));
import { Helmet } from "react-helmet-async";
// import ExpertiseSection from "../components/main/ExpertiseSection";
const Home = () => {
  useEffect(()=> {
    window.scrollTo(0,0)
  })
  return (
    <div className="bg-white ">
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
      <div className=" w-full h-[60vh]   bg-fixed lg:h-screen bg-[url('/bgimg.webp')] bg-cover bg-center">

      <Hero />
      </div>
      <AboutUs />
     <HireUs />
     <Stats />

      {/* <ExpertiseSection/> */}
      <Suspense fallback={<p>Loading...</p>}>
        {/* <WorkProcess /> */}
        <Tesimonial />
        {/* <Location /> */}
        {/* <Pacakages /> */}
        < ContactLink/>
        <FAQs />
      </Suspense>
    </div>
  );
};

export default Home;
