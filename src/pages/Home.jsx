import { lazy, Suspense, useEffect } from "react";
import AboutUs from "../components/main/AboutUs";
import HireUs from "../components/main/HireUs";
import Hero from "../components/main/Hero";
import Stats from "../components/main/Stats";
import Discount from "../components/main/DiscountPage";


import ContactLink from "../components/ContactLink";

const Tesimonial = lazy(() => import("../components/main/Tesimonial"));

const FAQs = lazy(() => import("../components/main/FAQs"));
import { Helmet } from "react-helmet-async";

const Home = () => {
  useEffect(()=> {
    window.scrollTo(0,0)
  })
  return (
    <div className="bg-white ">
      <Helmet>
        <title>
          Xsuite Digital Marketing Agency | Innovative Solutions for Global Brands
        </title>
        <meta
          name="description"
          content="Explore Xsuite Digital, a full-service marketing agency, specializing in web development, SEO, PPC campaigns, and SMM projects.
"
        />
      </Helmet>
      <div className=" w-full h-[60vh]   bg-fixed lg:h-screen bg-[url('/bgimg.webp')] bg-cover bg-center">

      <Hero />
      <Discount/>
      </div>
      <AboutUs />
     <HireUs />
     <Stats />

      
      <Suspense fallback={<p>Loading...</p>}>
       <Tesimonial />
       < ContactLink/>
        <FAQs />
      </Suspense>
    </div>
  );
};

export default Home;
