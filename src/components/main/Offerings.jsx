import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react/dist/iconify.js";

const offeringsData = [
    {
    imgSrc: "/DG.png",
    title: "Digital Marketing",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti placeat sed consequuntur ea incidunt cumque. Minima quae ullam delectus non.",
  },
  {
    imgSrc: "/ppc3.png",
    title: "PPC Campaigns",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti placeat sed consequuntur ea incidunt cumque. Minima quae ullam delectus non.",
  },
  {
    imgSrc: "/11.png",
    title: "Social Media Marketing",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti placeat sed consequuntur ea incidunt cumque. Minima quae ullam delectus non.",
  },
  {
    imgSrc: "/SEO2.png",
    title: "Search Engine Optimization",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti placeat sed consequuntur ea incidunt cumque. Minima quae ullam delectus non.",
  },
  {
    imgSrc: "/ads.png",
    title: "Google Ads",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti placeat sed consequuntur ea incidunt cumque. Minima quae ullam delectus non.",
  },
  {
    imgSrc: "/GA.png",
    title: "Google Analytics",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti placeat sed consequuntur ea incidunt cumque. Minima quae ullam delectus non.",
  },
];

const Offerings = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextOffering = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % offeringsData.length);
  };

  const prevOffering = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? offeringsData.length - 1 : prevIndex - 1
    );
  };

  return (
    <>
      <motion.h1
        initial={{ opacity: 0, y: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="flex justify-center font-bold tracking-wider text-lg lg:text-3xl mb-4"
      >
        What We Offer
      </motion.h1>

      <div className="font-[sans-serif] my-4">
        <div className="max-w-5xl max-lg:max-w-xl mx-auto">
          <div className="lg:grid hidden lg:grid-cols-3   gap-8 max-md:justify-center mt-12">
       
            {offeringsData.map((offering, index) => (
              <div
                key={index}
                className="border flex space-y-4 p-4 flex-col items-center justify-center rounded-md overflow-hidden max-md:max-w-[300px]"
              >
                <img
                  src={offering.imgSrc}
                  className="w-32 h-28 text-orange-500 object-contain"
                />
                <div className="p-4">
                  <h4 className="text-gray-800 text-lg   flex items-center justify-center !font-sans font-bold">
                    {offering.title}
                  </h4>
                  <div className="mt-10">
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {offering.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Carousel */}
          <div className= "md:hidden block">
  <div className="flex  items-center justify-between mb-4">
    <button onClick={prevOffering} className="p-2 rounded-lg flex items-center justify-center">
      <Icon icon="ooui:next-rtl" className="w-12 h-12" /> 
    </button>
    <h4 className="text-gray-800 text-xl flex items-center justify-center !font-sans font-bold">
      {offeringsData[currentIndex].title}
    </h4>
    <button onClick={nextOffering} className="p-2 rounded-lg flex items-center justify-center">
      <Icon icon="ooui:next-ltr" className="w-12 h-12" /> 
    </button>
  </div>

  <div className="flex justify-center mb-4">
    <motion.img
      key={currentIndex}
      src={offeringsData[currentIndex].imgSrc}
      className="w-32 h-28 object-contain"
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -100, opacity: 0 }}
      transition={{ duration: 0.5 }}
    />
  </div>
  <motion.div
    className="p-4 text-center"
    initial={{ x: 100, opacity: 0 }}
    animate={{ x: 0, opacity: 1 }}
    exit={{ x: -100, opacity: 0 }}
    transition={{ duration: 0.5 }}
  >
    <p className="text-gray-600 text-sm leading-relaxed">
      {offeringsData[currentIndex].description}
    </p>
  </motion.div>
</div>

        </div>
      </div>

      <div className="flex justify-center mt-4">
        <Link to="/Services">
          <button className="bg-black py-2 px-4 rounded-xl flex items-center justify-center text-white ease-in-out duration-300 hover:scale-110 hover:bg-orange-500 hover:text-black">
            View More Services
          </button>
        </Link>
      </div>
    </>
  );
};

export default Offerings;
