import { lazy, Suspense } from "react";
import AboutUs from "../components/main/AboutUs";
import HireUs from "../components/main/HireUs";
import Hero from "../components/main/Hero";
const WorkProcess = lazy(() => import("../components/main/WorkProcess"));
const Tesimonial = lazy(() => import("../components/main/Tesimonial"));
const Location = lazy(() => import("../components/main/Location"));
const FAQs = lazy(() => import("../components/main/FAQs"));
import { Helmet } from "react-helmet-async";
import ExpertiseSection from "../components/main/ExpertiseSection";
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
      <ExpertiseSection/>
      <Suspense fallback={<p>Loading...</p>}>
        <WorkProcess />
        <Tesimonial />
        <Location />
        <FAQs />
      </Suspense>
    </div>
  );
};

export default Home;
