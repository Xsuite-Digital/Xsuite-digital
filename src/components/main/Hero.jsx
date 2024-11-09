import { motion } from "framer-motion";
import { useTypewriter } from "react-simple-typewriter";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import AnimatedComponent from "./AnimatedComponent";

const Hero = () => {
  const [typeEffect] = useTypewriter({
    words: [
      "Digital Marketing",
      "Google Ads",
      "PPC Campaigns",
      "Social Media Marketing",
      "Web Development",
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
    <div className="relative w-full  h-screen lg:h-[100vh] overflow-hidden">
      {/* Overlay animation component */}
      <AnimatedComponent className="absolute w-full h-3/4" />

      {/* Social Media Icons */}
      <div className="absolute  right-6 top-1/2 transform -translate-y-1/2 flex flex-col  my-5 space-y-10 z-10 lg:block hidden">
      <Link to="https://www.facebook.com/profile.php?id=61566739650180" target='_blank'>
            <img
              src="/fb11-min.webp"
              className="h-auto w-4 p-1 text-white"
              alt="Visit our Facebook profile"
              width="50"
              height="50"
            />
          </Link>
          <Link to="https://www.instagram.com/xsuite.digital/" target="_blank">
            <img
              src="/instaram-icon.webp"
              className="h-6 w-6 p-1 hover:text-orange-500 text-white bg-transparent duration-300 ease-in-out hover:bg-transparent"
              alt="Visit our Instagram profile"
            />
          </Link>
          <Link
            to="https://www.linkedin.com/company/xsuite-digital/about/"
            target="_blank"
          >
            <img
              src="/inn-min.webp"
              className="h-8 w-7 p-1 hover:text-orange-500 text-white bg-transparent duration-300 ease-in-out hover:bg-transparent"
              alt="Visit our LinkedIn page"
            />
          </Link>
      </div>

      {/* Hero Section Content */}
      <div className="absolute inset-0 w-full h-full z-10 flex flex-col justify-center items-center text-left pl-8 lg:pl-16">
        <motion.img
          src={imageUrl}
          alt="Hero Image"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="w-full max-w-[300px] sm:max-w-[700px] md:max-w-[400px] lg:max-w-[850px] mb-6"
        />
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="mb-6"
        >
          <h1 className="text-white text-4xl sm:text-5xl mt-5 lg:text-6xl lg:leading-normal ml-3 font-extrabold">
            Crafting Digital <br />
            Brilliance in{" "}
            <span className="text-orange-500 text-2xl sm:text-3xl lg:text-5xl font-anton">
              {typeEffect}
            </span>
          </h1>
        </motion.div>

        {/* Get Started Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="mt-4"
        >
          <Link
            to="/Contact"
            className="px-8 py-3 rounded-full border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white transition-colors duration-300 ease-in-out"
            aria-label="Get Started on WhatsApp"
          >
            Get Started
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;