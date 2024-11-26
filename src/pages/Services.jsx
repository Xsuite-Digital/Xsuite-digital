import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom"; // Import Link for navigation
import { Helmet } from "react-helmet-async";
import FAQs from "../components/main/FAQs";
import WorkProcess from "../components/main/WorkProcess";
import { servicesData } from "../components/main/Helpers/Data";

const Services = () => {
  const [showAll, setShowAll] = useState(false);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const displayedServices = showAll ? servicesData : servicesData.slice(0, 3);

  return (
    <>
      <Helmet>
        <title>Services | XSuite Digital</title>
      </Helmet>
      <section className="bg-white">
        <div className="bg-black text-white py-16 lg:py-52 relative overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="relative z-10">
              <h1 className="text-5xl text-center font-bold">Our Services</h1>
            </div>
          </div>
          <div className="relative inset-0 ">
            <div className="absolute w-96 h-96 -top-0 -left-0 bg-orange-500/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute w-96 h-96 -bottom-0 -right-0 bg-orange-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>
        </div>

        <div className="container px-5 py-24 mx-auto ">
          <div className="flex flex-wrap justify-center items-center -m-4">
            <div className="grid grid-cols-1 gap-y-12 text-center lg:grid-cols-3 gap-4 items-center justify-center ">
              <AnimatePresence>
                {displayedServices.map((data, index) => (
                  <Link
                    to={`/services/${data.path}`} // Navigation to service detail page
                    key={index}
                  >
                    <motion.div
                      className="ease-in-out cursor-pointer duration-500 flex flex-col items-center justify-center space-y-2 border border-orange-500 rounded-xl h-80"
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.3 }}
                    >
                      <img
                        src={data.imgSrc}
                        loading="lazy"
                        className="icon-container text-black h-10 w-10"
                      />
                      <p className="text-xl font-bold text-black tracking-wide">
                        {data.name}
                      </p>
                      <p className="w-80">{data.view}</p>
                    </motion.div>
                  </Link>
                ))}
              </AnimatePresence>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="flex items-center justify-center bg-black hover:scale-105 duration-500 ease-in-out py-2 px-3 mt-24 text-white text-sm tracking-wide rounded-2xl"
            >
              {showAll ? "Show less" : "View More"}
            </button>
          </div>
        </div>
      </section>
      <WorkProcess />
      <FAQs />

      {/* <Location /> */}
    </>
  );
};

export default Services;
