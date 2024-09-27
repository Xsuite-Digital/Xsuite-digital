import { motion } from "framer-motion";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const AboutUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 1, ease: "easeInOut" }}
    >
      <h1 className="font-semibold tracking-widest text-xl lg:text-3xl font-sans flex items-center justify-center">
        AboutUs
      </h1>

      <div className=" px-6 py-12 font-sans">
        <div className="lg:max-w-7xl max-w-lg mx-auto px-6 py- rounded-lg shadow-md">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="max-h-80">
              <img
                src="/aboutblackpic.jpg"
                alt="Image"
                className="rounded-md object-cover w-full h-full"
              />
            </div>
            <div>
              <h2 className="text-3xl font-extrabold text-[#373737] mb-4">
                Immerse Yourself in Creativity
              </h2>
              <p className="text-black text-sm leading-6">
                Unleash your imagination and explore a world of endless
                possibilities. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.
              </p>
              <ul className="list-disc text-sm text-black space-y-2 pl-4 mt-6">
                <li>Discover innovative ideas.</li>
                <li>Create unique projects.</li>
                <li>Collaborate with like-minded individuals.</li>
                <li>Transform your visions into reality.</li>
              </ul>
              <div className="mt-6">
                <Link
                  to="/About"
                  className=" text-white text-sm bg-black py-3 px-2 rounded-xl font-semibold hover:text-white hover:scale-125 duration-500 ease-in-out"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default AboutUs;
