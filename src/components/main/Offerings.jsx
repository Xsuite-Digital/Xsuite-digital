import { Icon } from "@iconify/react/dist/iconify.js";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Offerings = () => {
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
      <div className="flex flex-col lg:flex-row justify-between p-4">
        <motion.div
          initial={{ opacity: 0, x: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="lg:w-1/2"
        >
          <p className="font-semibold w-[90vw] lg:w-[40vw] lg:ml-[5%] mb-4 text-sm sm:text-base">
            At Microthinks, we provide expert digital marketing services to help
            your business thrive online. Our tailored strategies ensure your
            brand attracts the right audience and drives measurable growth.
          </p>
          <ul className="space-y-4">
            <div className="flex items-start space-x-2 sm:space-x-4">
              <Icon
                icon="iconoir:cube-dots-solid"
                className="text-[#443640] h-6 w-6"
              />
              <li className="text-sm sm:text-base">
                Web Development: Creating high-performance, responsive websites
                that deliver seamless user experiences.
              </li>
            </div>
            <div className="flex items-start space-x-2 sm:space-x-4">
              <Icon
                icon="iconoir:cube-dots-solid"
                className="text-[#443640] h-6 w-6"
              />
              <li className="text-sm sm:text-base">
                UX/UI Design: Crafting intuitive interfaces that enhance user
                engagement and satisfaction.
              </li>
            </div>
            <div className="flex items-start space-x-2 sm:space-x-4">
              <Icon
                icon="iconoir:cube-dots-solid"
                className="text-[#443640] h-6 w-6"
              />
              <li className="text-sm sm:text-base">
                Search Engine Optimization (SEO): Boosting your website's
                visibility and search rankings to attract organic traffic.
              </li>
            </div>
            <div className="flex items-start space-x-2 sm:space-x-4">
              <Icon
                icon="iconoir:cube-dots-solid"
                className="text-[#443640] h-6 w-6"
              />
              <li className="text-sm sm:text-base">
                Social Media Marketing: Building your brand presence across
                social media platforms to engage with your audience and grow
                your following.
              </li>
            </div>
            <div className="flex items-start space-x-2 sm:space-x-4">
              <Icon
                icon="iconoir:cube-dots-solid"
                className="text-[#443640] h-6 w-6"
              />
              <li className="text-sm sm:text-base">
                Pay-Per-Click (PPC) Campaigns: Driving targeted traffic to your
                website with optimized, cost-effective ad campaigns.
              </li>
            </div>
          </ul>
          <div className="flex justify-center mt-4">
            <Link to="/Services">
              <button className="bg-black py-2 px-4 rounded-xl text-white ease-in-out duration-300 hover:scale-110">
                View More Services
              </button>
            </Link>
          </div>
        </motion.div>
        {/* Keeping the original image and video layout */}
        <motion.div
          initial={{ opacity: 0, x: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="flex space-y-2 flex-col justify-around items-center space-x-2 lg:ml-8"
        >
          <div className="flex flex-row">
            <img
              src="/digital-marketing B&W.png"
              alt=""
              className="h-auto  w-full mt-1 object-contain "
            />
           
          </div>
       
        </motion.div>
      </div>
    </>
  );
};

export default Offerings;
