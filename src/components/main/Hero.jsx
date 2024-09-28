import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="relative">
      <video
        src="/blackvideoo.mp4"
        className="absolute inset-0 w-full h-full object-cover"
        loop
        autoPlay
        muted
      >
        <source src="/video.mp4" type="video/mp4" />
      </video>

      {/* Overlay with background opacity */}
      <div className="absolute inset-0 bg-black opacity-60"></div>

      {/* Content Section */}
      <div className="flex flex-col justify-center items-center relative z-10 h-screen text-center">
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="flex text-[#7E7E7E]"
        >
          <img src="/logo.png" className="h-full w-full lg:w-full lg:h-36 " />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: -40 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-[#CECECE] w-11/12 sm:w-9/12 md:w-8/12 lg:w-7/12 font-bold tracking-wider text-xl md:text-xl lg:text-2xl  mt-4"
        >
          A Digital Marketing Agency
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: -40 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-[#CECECE] w-11/12 sm:w-9/12 md:w-8/12 lg:w-7/12 font-bold tracking-wider text-lg md:text-xl lg:text-lg  mt-4"
        >
          Welcome to Xsuite, your all-in-one digital marketing partner. We
          specialize in driving growth through cutting-edge strategies in SEO,
          social media marketing, PPC campaigns, and more. Let us help you
          elevate your brand, increase visibility, and achieve measurable
          success in today’s digital landscape.
        </motion.p>
      </div>
    </div>
  );
};

export default Hero;
