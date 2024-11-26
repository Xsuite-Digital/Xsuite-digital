import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Team = () => {
  const profile = [
    { imgSrc: "Sir Ali.webp", name: "Ali Aziz", position: "CEO" },
    { imgSrc: "sir.webp", name: "Sir Zaheer", position: "Google Ads PPC Strategist" },
    { imgSrc: "SJL.webp", name: "Sajal", position: "Graphics Designer" },
    { imgSrc: "Anas.webp", name: "Muhammad Anas", position: "Team Lead | Frontend Developer" },
    { imgSrc: "Rafaqat.webp", name: "Rafaqat Ali", position: "Graphic Designer" },
    { imgSrc: "Ali.jpg", name: "Ali Raza", position: "UI/UX Designer" },
    { imgSrc: "/Mashhood.webp", name: "Mashhood Abdul Rehman", position: "Full Stack Developer" },
    { imgSrc: "Aqsa.webp", name: "Aqsa Malik", position: "Front-End Developer" },
    { imgSrc: "sharoon.webp", name: "Sharoon Amanat", position: "Front-End Developer" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(3);

  // Adjust cards to show based on screen size
  useEffect(() => {
    const updateCardsToShow = () => {
      setCardsToShow(window.innerWidth < 1024 ? 1 : 3);
    };

    updateCardsToShow();
    window.addEventListener("resize", updateCardsToShow);
    return () => window.removeEventListener("resize", updateCardsToShow);
  }, []);

  // Auto-slide interval
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % profile.length);
    }, 3000); // Adjust time for slide speed

    return () => clearInterval(interval); // Clear interval on unmount
  }, [profile.length]);

  // Calculate visible profiles with wrapping logic
  const visibleProfiles = [];
  for (let i = 0; i < cardsToShow; i++) {
    visibleProfiles.push(profile[(currentIndex + i) % profile.length]);
  }

  return (
    <div className="h-full bg-gradient-to-br from-black via-black  to-orange-300  p-8 relative">
      <div className="max-w-7xl mx-auto relative">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            MEET OUR <span className="text-orange-500">TEAM</span>
          </h1>
        </motion.div>

        <div className="relative">
        <AnimatePresence initial={false}>
          <motion.div
            className="flex justify-center gap-6"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
          >
            {visibleProfiles.map((member, index) => (
              <motion.div
                key={index}
                className="flex-shrink-0 w-full sm:w-[90%] md:w-[60%] lg:w-[25%]  bg-white/10 backdrop-blur-sm rounded-lg shadow-lg p-6 flex flex-col items-center"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{
                  duration: 0.6,
                  ease: "easeInOut",
                }}
              >
                <div className="relative w-32 h-32 mb-4">
                  <motion.div
                    className="rounded-full w-32 h-32 overflow-hidden border-4 border-orange-500"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <img
                      src={member.imgSrc}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                </div>
                <h3 className="text-xl font-bold text-white mb-1">
                  {member.name}
                </h3>
                <p className="text-orange-500 text-sm">{member.position}</p>
              </motion.div>
            ))}
          </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Team;













