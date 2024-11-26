import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
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
      <section className="bg-gray-900">
        {/* Hero Section */}
        <div className="bg-black text-white py-16 lg:py-52 relative overflow-hidden">
          <div className="container mx-auto px-4">
            <h1 className="text-5xl text-center font-bold">Our Services</h1>
          </div>
          <div className="relative inset-0">
            <div className="absolute w-96 h-96 -top-0 -left-0 bg-orange-500/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute w-96 h-96 -bottom-0 -right-0 bg-orange-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>
        </div>

        {/* Services Cards */}
        <div className="container w-auto px-5 py-14 mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence>
              {displayedServices.map((data, index) => (
                <Link to={`/services/${data.path}`} key={index}>
                  <motion.div
                    className="relative group overflow-hidden flex flex-col items-center justify-center space-y-4 border border-orange-500 rounded-xl h-80 shadow-lg hover:shadow-2xl hover:scale-105 transition-transform duration-500 bg-gradient-to-tl from-gray-50 to-white"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Icon */}
                    <div className="w-20 h-20 flex items-center justify-center rounded-full bg-white group-hover:rotate-180 transition-transform duration-500">
                      <img
                        src={data.imgSrc}
                        loading="lazy"
                        alt={data.name}
                        className="w-15 h-15 text-white"
                      />
                    </div>

                    {/* Title */}
                    <p className="text-lg font-semibold text-gray-800 group-hover:text-orange-600 transition-colors duration-300">
                      {data.name}
                    </p>

                    {/* Description */}
                    <p className="text-sm text-gray-600 px-4 group-hover:text-gray-700 transition-colors duration-300 text-center">
                      {data.view}
                    </p>

                    {/* Background Orb Animation */}
                    <div className="absolute -z-10 inset-0 bg-gradient-to-br from-orange-200/30 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-lg"></div>
                  </motion.div>
                </Link>
              ))}
            </AnimatePresence>
          </div>

          {/* View More Button */}
          <div className="flex items-center justify-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-8 py-3 mt-12 rounded-full border-2  border-orange-500 text-orange-500 mr-5 hover:bg-orange-500 hover:text-white transition-colors duration-300 ease-in-out"
            >
              {showAll ? "Show less" : "View More"}
            </button>
          </div>
        </div>
      </section>

      {/* Additional Sections */}
      <WorkProcess />
      <FAQs />
    </>
  );
};

export default Services;
