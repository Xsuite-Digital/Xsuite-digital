import { Icon } from "@iconify/react/dist/iconify.js";
import { AnimatePresence, motion } from "framer-motion";
import  Sidebar  from "./Siderbar";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Siderbar from "./Siderbar";
const Navbar = () => {
  const [homeHover, setHomeHover] = useState(false);
  const [servicesHover, setServicesHover] = useState(false);
  const [bgColor, setBgColor] = useState("transparent");
  const location = useLocation();

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setBgColor("bg-black"); 
    } else {
      setBgColor("bg-transparent");
    }
  };

  useEffect(() => {
    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [location.pathname]);

  return (
    <div className={` ${bgColor} duration-500 ease-in-out`}>
      <>
        {/* Navbar for desktop */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="hidden md:flex justify-between items-center p-4 bg-transparent"
        >

          <Link to="/">
            <img src="/logo-min.png" className="h-12 w-12" style = {{height: 50 , width:100}} />
          </Link>

          <div>
            <ul className="flex space-x-10">
              <li
                className="relative group"
                onMouseEnter={() => setHomeHover(true)}
                onMouseLeave={() => setHomeHover(false)}
              >
                <button
                  className={`text-white hover:text-orange-500  transition duration-300 ease-in-out`}
                >
                  <Link to="/">Home</Link>
                </button>
              </li>

              <li
                className="relative group"
                onMouseEnter={() => setServicesHover(true)}
                onMouseLeave={() => setServicesHover(false)}
              >
                <button
                  className={`text-white hover:text-orange-500  transition duration-300 ease-in-out`}
                >
                  <Link to="/Services">Services</Link>
                </button>
              </li>

              <li className="text-white hover:text-orange-500  transition duration-300 ease-in-out">
                <button
                  className={`text-white hover:text-orange-500  transition duration-300 ease-in-out`}
                >
                  <Link to="/About ">About Us</Link>
                </button>
              </li>


              <li className="text-white hover:text-orange-500  transition duration-300 ease-in-out">
                <button
                  className={`text-white hover:text-orange-500  transition duration-300 ease-in-out`}
                >
                  <Link to="/Contact">Contact</Link>
                </button>
              </li>
            </ul>
          </div>

          <div className=" flex space-x-2">
            <Link
              to="https://wa.me/+923316361916"
              target="_blank"
              className=" font-semibold font-sans text-white  space-x-2 tracking-widest border rounded-2xl px-3 py-2  hover:border-orange-500 hover:text-orange-500 duration-300 ease-in-out "
            >
              <buton>Get Started -></buton>
            </Link>
          </div>
        </motion.div>

        {/* Navbar for mobile */}


       <Siderbar/>
      </>
    </div>
  );
};

export default Navbar;
