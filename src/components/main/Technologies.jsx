import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Icon } from '@iconify/react/dist/iconify.js';

const Technologies = () => {
  const technology = [
    { imgSrc: "/DG.png", title: "Digital Marketing" },
    { imgSrc: "/ads.png", title: "Google Ads" },
    { imgSrc: "/ppc3.png", title: "PPC Campaigns" },
    { imgSrc: "/11.png", title: "Social Media Marketing" },
    { imgSrc: "/web3.png", title: "Web Development" },
    { imgSrc: "/GMBO.png", title: "Google My Business Optimization" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextService = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % technology.length);
  };

  const prevService = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? technology.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className='flex flex-col items-center'>
      <motion.h1
        initial={{ opacity: 0, y: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className='font-bold lg:text-2xl text-2xl font-sans text-center mb-4'
      >
        Our Expertise
      </motion.h1>

      <div className='max-w-5xl max-lg:max-w-xl mx-auto'>
        <div className='lg:grid hidden lg:grid-cols-3 gap-8 mt-12'>
          {technology.map((tech, index) => (
            <div
              key={index}
              className='border flex space-y-4 p-4 flex-col items-center justify-center rounded-md overflow-hidden'
            >
              <img
                src={tech.imgSrc}
                className='w-32 h-28 text-orange-500 object-contain'
                alt={tech.title}
              />
              <div className='p-4'>
                <h4 className='text-gray-800 text-lg flex items-center justify-center !font-sans font-bold'>
                  {tech.title}
                </h4>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile View */}
        <div className="lg:hidden block">
        <div className="flex items-center justify-between mb-4 relative">
          <button
            onClick={prevService}
            className="p-2 rounded-lg flex items-center justify-center absolute left-0"
          >
            <Icon icon="ooui:next-rtl" className="w-12 h-12" />
          </button>
          <h4 className="text-gray-800 text-xl flex items-center justify-center !font-sans font-bold mx-16">
            {technology[currentIndex].title}
          </h4>
          <button
            onClick={nextService}
            className="p-2 rounded-lg flex items-center justify-center absolute right-0"
          >
            <Icon icon="ooui:next-ltr" className="w-12 h-12" />
          </button>
        </div>

        <div className="flex justify-center mb-4">
          <motion.img
            key={currentIndex}
            src={technology[currentIndex].imgSrc}
            className="w-32 h-28 object-contain"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -100, opacity: 0 }}
            transition={{ duration: 0.5 }}
          />
        </div>
      </div>
      </div>
    </div>
  );
};

export default Technologies;