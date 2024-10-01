import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useTypewriter } from "react-simple-typewriter";

const Hero = () => {
  const [typeEffect] = useTypewriter({
    words: [
      " Digital Marketer",
      "Web Developer",
      "UX/UI Designer",
      "Graphic Designer",
    ],
    loop: {},
    typeSpeed: 100,
    deleteSpeed: 60,
  });
  return (
    <div className="relative ">
      <video
        src="/blackvideoo.mp4"
        className="absolute inset-0 w-full h-full object-cover"
        loop
        autoPlay
        muted
      >
        <source src="/video.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="flex flex-col justify-center items-center relative z-10 h-screen text-center">
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="flex text-[#7E7E7E]"
        >
          <img
            src="/Xsuite-Final.png"
            className="h-16 w-72 lg:w-full lg:h-36 "
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className=" flex items-center justify-center mt-4 space-x-4"
        >
          <motion.h1 className="font-bold text-xl lg:text-4xl  text-white  ">
            We are
          </motion.h1>
          <p className=" font-bold text-xl lg:text-4xl text-orange-500">
            {typeEffect}
          </p>
        </motion.div>
     
      </div>
    </div>
  );
};

export default Hero;

















