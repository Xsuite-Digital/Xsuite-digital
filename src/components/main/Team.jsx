import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion"; // Import framer-motion

const Team = () => {
  const profile = [
    {
      imgSrc: "SirZaheer.webp",
      name: "Sir Zaheer",
      position: "CEO",

      fb: "fb (1).webp",
      insta: "in.webp",
      linkedin: "li.webp",
    },
    {
      imgSrc: "Sajal.webp",
      name: "Sajal",
      position: "Graphics Designer",

      fb: "fb (1).webp",
      insta: "in.webp",
      linkedin: "li.webp",
    },
    {
      imgSrc: "Anas.webp",
      name: "Muhammad Anas",
      position: "Team Lead | Frontend Developer",

      fb: "fb (1).webp",
      insta: "in.webp",
      linkedin: "li.webp",
    },
    {
      imgSrc: "Rafaqat.webp",
      name: "Rafaqat Ali",
      position: "Graphic Designer",

      fb: "fb (1).webp",
      insta: "in.webp",
      linkedin: "li.webp",
    },
    {
      fb: "fb (1).webp",
      insta: "in.webp",
      linkedin: "li.webp",
      imgSrc: "Sharoon.webp",
      name: "Sharoon",
      position: "Frontend Developer",
    },
    {
      fb: "fb (1).webp",
      insta: "in.webp",
      linkedin: "li.webp",
      imgSrc: "Mashhood.webp",
      name: "Mashhood Abdul Rehman",
      position: "Full Stack Developer",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleProfiles, setVisibleProfiles] = useState([]);

  useEffect(() => {
    setVisibleProfiles(profile.slice(currentIndex, currentIndex + 3));
  }, [currentIndex]);

  const nextProfiles = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 3 >= profile.length ? 0 : prevIndex + 3
    );
  };

  const prevProfiles = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - 3 < 0 ? profile.length - 3 : prevIndex - 3
    );
  };

  return (
    <div className="flex flex-col items-center bg-gray-200 py-8">
      <h1 className="font-bold text-2xl mb-6">Our Team</h1>

      <div className="relative w-full max-w-5xl">
        {/* Carousel Section */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-3 gap-4"
          initial={{ opacity: 0, x: 100 }} // Initial state
          animate={{ opacity: 1, x: 0 }} // Animate to visible
          exit={{ opacity: 0, x: -100 }} // Exit state for sliding effect
          transition={{ duration: 0.5 }} // Duration of the animation
          key={currentIndex} // Ensure motion effect triggers on index change
        >
          {visibleProfiles.map((member, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center justify-center rounded-md p-6 shadow-lg bg-white"
              // Hover animation for scaling
            >
              <img
                src={member.imgSrc}
                className="w-40 h-40 rounded-full object-cover border-2 border-gray-200 mb-4"
                alt={member.name}
              />
              <h2 className="text-gray-800 text-lg font-bold">{member.name}</h2>
              <p className="text-gray-600">{member.position}</p>

              <div className="flex space-x-6 items-center  justify-center mt-4">
                <Link to="/Contact" target="_blank">
                  <img src={member.fb} className="h-8 w-4" alt="Facebook" />
                </Link>
                <Link to="/Contact" target="_blank">
                  <img src={member.insta} className="h-6 w-6" alt="Instagram" />
                </Link>
                <Link to="/Contact" target="_blank">
                  <img
                    src={member.linkedin}
                    className="h-8 w-8"
                    alt="LinkedIn"
                  />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Navigation Buttons */}
        <button
          onClick={prevProfiles}
          className="absolute left-[-3rem] top-1/2 transform -translate-y-1/2 px-3 py-2 bg-gray-300 rounded-full  transition z-10"
        >
          &#8592;
        </button>
        <button
          onClick={nextProfiles}
          className="absolute right-[-3rem] top-1/2 transform -translate-y-1/2 px-3 py-2 bg-gray-300 rounded-full  transition z-10"
        >
          &#8594;
        </button>
      </div>
    </div>
  );
};

export default Team;
