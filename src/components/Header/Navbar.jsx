import { motion } from "framer-motion";
import Siderbar from "./Siderbar";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Icon } from "@iconify/react/dist/iconify.js";
import { navbarTabs } from "../main/Helpers/Data";

const Navbar = () => {
  const [bgColor, setBgColor] = useState("transparent");
  const [showServicesDropdown, setShowServicesDropdown] = useState(false);
  let dropdownTimer;

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setBgColor("bg-black");
    } else {
      setBgColor("bg-transparent");
    }
  };

  const location = useLocation();

  const ScrollToTop = () => {
    if (location.pathname === "/") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [location.pathname]);

  const handleMouseEnter = () => {
    clearTimeout(dropdownTimer);
    setShowServicesDropdown(true);
  };

  const handleMouseLeave = () => {
    dropdownTimer = setTimeout(() => setShowServicesDropdown(false), 200);
  };

  return (
    <div className={` ${bgColor} duration-500 fixed top-0 z-50 w-full ease-in-out`}>
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="hidden md:flex justify-between items-center p-4 bg-transparent"
      >
        <div style={{ width: "100px", height: "50px" }}>
          <Link to="/" aria-label="Go to homepage">
            <img
              onClick={ScrollToTop}
              src="/logo-min.webp"
              className="w-full h-auto"
              alt="Xsuite logo image"
              height="50"
              width="100"
            />
          </Link>
        </div>

        <div>
          <ul className="flex space-x-10">
            {navbarTabs.map((tab, index) => (
              <li
                key={index}
                className="relative text-white hover:text-orange-500 transition duration-300 ease-in-out"
                onPointerEnter={tab.name === "Services" ? handleMouseEnter : null}
                onPointerLeave={tab.name === "Services" ? handleMouseLeave : null}
              >
                <Link onClick={ScrollToTop} to={tab.path}>
                  {tab.name}
                </Link>

                {tab.name === "Services" && showServicesDropdown && (
                  <motion.ul
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="absolute top-full left-0 mt-2 bg-black text-white rounded shadow-lg w-48"
                    onPointerEnter={handleMouseEnter}
                    onPointerLeave={handleMouseLeave}
                  >
                    {tab.dropdown.map((service, idx) => (
                      <li
                        key={idx}
                        className="px-4 py-2 hover:bg-orange-500 hover:text-white transition duration-300 ease-in-out cursor-pointer"
                      >
                        <Link to={`/services/${service.path}`}>{service.name}</Link>
                      </li>
                    ))}
                  </motion.ul>
                )}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex items-center space-x-2 hover:text-orange-500 duration-300 ease-in-out text-white">
          <Icon icon="mdi-light:phone" className="h-5 w-5" />
          <Link to="tel:03316361916">03316361916</Link>
        </div>
      </motion.div>

      <div className="md:hidden flex justify-between items-center p-4">
        <div className="lg:flex items-center space-x-1 hidden hover:text-orange-500 duration-300 ease-in-out text-white">
          <Icon icon="mdi-light:phone" className="h-5 w-5" />
          <Link to="tel:03316361916">03316361916</Link>
        </div>
      </div>

      <Siderbar />
    </div>
  );
};

export default Navbar;
