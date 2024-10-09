import { motion } from "framer-motion";
import { useTypewriter } from "react-simple-typewriter";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import ParticleComponent from "./AnimatedComponent";

const Hero = () => {
  const [typeEffect] = useTypewriter({
    words: [
      "Digital Marketing",
      "Google Ads",
      "PPC Campaigns",
      "Social Media Marketing",
      "Web Development",
      "Google My Business Optimization",
    ],
    loop: {},
    typeSpeed: 100,
    deleteSpeed: 60,
  });

  const imageUrl = "/Xsuite-Final.webp";
  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "preload";
    link.as = "image";
    link.href = imageUrl;

    document.head.appendChild(link);

    return () => {
      document.head.removeChild(link);
    };
  }, [imageUrl]);

  return (
    <div className="relative w-full lg:h-full  h-3/4">
      <ParticleComponent className="absolute inset-0 hidden lg:block w-full h-3/4 object-cover" />

      <div className="absolute inset-0 w-full h-full bg-black bg-opacity-50">
        <div className="flex flex-col justify-center items-center h-full text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="flex justify-center mb-6"
          >
            <img
              src={imageUrl}
              className="h-16 w-72 lg:w-full lg:h-36"
              alt="xsuite logo2"
              width="288"
              height="144"
            />
          </motion.div>

          {/* Typewriter Effect */}
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="flex items-center justify-center space-x-4"
          >
            <motion.h1 className="font-bold text-lg lg:text-4xl text-white">
              We offer
            </motion.h1>
            <p className="font-bold text-lg lg:text-4xl z-20 text-orange-500">
              {typeEffect}
            </p>
          </motion.div>

          {/* Get Started Button */}
          <Link to="/Contact">
            <motion.button
              initial={{ opacity: 0, x: -80 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 2 }}
              className="border px-2 py-3 rounded-xl mt-8 lg:hidden text-white"
            >
              Get Started
            </motion.button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
