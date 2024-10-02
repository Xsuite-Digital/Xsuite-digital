import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { servicesData } from "../components/main/ServicesData";
import ServicesModal from "./ServicesModal";
import { Helmet } from "react-helmet-async";
import FAQs from "../components/main/FAQs";
import Location from "../components/main/Location";
import WorkProcess from "../components/main/WorkProcess";

const Services = () => {
  const [showAll, setShowAll] = useState(false);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const displayedServices = showAll ? servicesData : servicesData.slice(0, 3);

  const [selectedService, setSelectedService] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const openModal = (service) => {
    setSelectedService(service);
    setIsOpen(true);
  };

  const closeModal = () => {
    setSelectedService(null);
    setIsOpen(false);
  };

  return (
    <>
      <section className="  bg-white  body-font lg:mt-12">
        <div className="mt-18">
          <div
            className="relative  h-96 bg-cover bg-center"
            style={{
              backgroundImage:
                "url(https://images.pexels.com/photos/3194518/pexels-photo-3194518.jpeg?auto=compress&cs=tinysrgb&w=600)",
              backgroundAttachment: "fixed",
            }}
          >
            <div className="absolute inset-0 bg-black opacity-70"></div>
            <h1 className="absolute top-1/2 left-1/2 transform  hover:text-orange-500 duration-300 ease-in-out -translate-x-1/2 -translate-y-1/2 font-sans text-center text-white text-4xl font-bold">
              Our Services
            </h1>
          </div>
        </div>

        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap justify-center items-center -m-4">
            <div className="grid grid-cols-1 gap-y-12 text-center lg:grid-cols-3 gap-4 items-center justify-center ">
              <AnimatePresence>
                {displayedServices.map((data, index) => (
                  <motion.div
                    onClick={() => openModal(data)}
                    key={index}
                    className="  ease-in-out cursor-pointer duration-500 flex flex-col items-center justify-center space-y-2  border border-orange-500 rounded-xl h-80"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <img
                      src={data.imgSrc}
                      className="icon-container  text-black  h-10 w-10"
                    />

                    <p className="text-xl font-bold text-black tracking-wide">
                      {data.title}
                    </p>
                    <p className="w-80 ">{data.view}</p>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="flex items-center justify-center bg-black  hover:scale-105 duration-500 ease-in-out py-2 px-3 mt-24 text-white text-sm tracking-wide rounded-2xl"
            >
              {showAll ? "Show less" : "View More"}
            </button>
          </div>
        </div>

        {isOpen && (
          <ServicesModal
            openModal={openModal}
            service={selectedService}
            onClose={closeModal}
          />
        )}
      </section>
      <WorkProcess />
      <FAQs />
      <Location />
    </>
  );
};

export default Services;
