import { Icon } from "@iconify/react/dist/iconify.js";
import { AnimatePresence, motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
const Navbar = () => {
  const [homeHover, setHomeHover] = useState(false);
  const [servicesHover, setServicesHover] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [bgColor, setBgColor] = useState("transparent");
  const location = useLocation();

  const handleScroll = () => {
    const pagePath = window.location.pathname;
    if (pagePath === "/Contact" || pagePath === "/Services") {
      setBgColor("bg-black");
    } else if (window.scrollY > 200) {
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
          {/* Logo */}

          <Link to="/">
            <img src="/logo.png" className="h-12" />
          </Link>

          {/* Tabs */}
          <div>
            <ul className="flex space-x-10">
              {/* Home link */}
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

              {/* Services link */}
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

              {/* About Us link */}
              <li className="text-white hover:text-orange-500  transition duration-300 ease-in-out">
                <button
                  className={`text-white hover:text-orange-500  transition duration-300 ease-in-out`}
                >
                  <Link to="/About ">About Us</Link>
                </button>
              </li>

              {/* Shop link */}

              {/* Contact link */}
              <li className="text-white hover:text-orange-500  transition duration-300 ease-in-out">
                <button
                  className={`text-white hover:text-orange-500  transition duration-300 ease-in-out`}
                >
                  <Link to="/Contact">Contact</Link>
                </button>
              </li>
            </ul>
          </div>

          {/* Button */}
          <div className="mt-1 flex space-x-2">
            <Link
              to="https://wa.me/923064312116"
              target="_blank"
              className="text-white flex space-x-2 hover:text-orange-500"
            >
              <p>
                Need Help? Talk to an expert <br />
              </p>
              <Icon
                icon="solar:phone-calling-linear"
                className="font-semibold border hover:border-orange-500 rounded-full p-1 h-7 w-7 hover:text-orange-500 duration-300 ease-in-out "
              />
            </Link>
          </div>
        </motion.div>

        {/* Navbar for mobile */}
        <div className="md:hidden flex items-center justify-between p-4 bg-transparent">
          {/* Logo */}
          <div>
            <Link to={"/"}>
              <img src={"/logo.png"} width={100} height={100} alt="Logo" />
            </Link>
          </div>

          {/* Sidebar Toggle Button */}
          <button
            className=" p-2 rounded-md duration-300 ease-in-out text-[#7E7E7E] hover:bg-gray-700"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            <Icon icon="mdi:menu" className="h-6 w-6" />
          </button>
        </div>

        {/* Sidebar */}
        <AnimatePresence>
          {sidebarOpen && (
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.3 }}
              className="fixed top-32 z-20 left-2 w-3/4 h-2/4 flex items-center justify-center  bg-gray-700 text-white p-4 shadow-lg"
            >
              <button
                className="text-white absolute top-4 right-4 text-2xl"
                onClick={() => setSidebarOpen(false)}
              >
                <Icon icon="mdi:close" />
              </button>
              <ul className="space-y-4">
                {/* Home link */}
                <li>
                  <Link
                    onClick={() => setSidebarOpen(false)}
                    to="/"
                    className="block text-xl text-white hover:text-[#7E7E7E]"
                  >
                    Home
                  </Link>
                </li>

                {/* Services link */}
                <li>
                  <Link
                    onClick={() => setSidebarOpen(false)}
                    to="/Services"
                    className="block text-xl  text-white hover:text-[#7E7E7E]"
                  >
                    Services
                  </Link>
                </li>

                {/* About Us link */}
                <li>
                  <Link
                    to="/About"
                    onClick={() => setSidebarOpen(false)}
                    className="block text-xl text-white hover:text-[#7E7E7E]"
                  >
                    About Us
                  </Link>
                </li>

                {/* Contact link */}
                <li>
                  <Link
                    to="/Contact"
                    onClick={() => setSidebarOpen(false)}
                    className="block text-xl text-white hover:text-[#7E7E7E]"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </>
    </div>
  );
};

export default Navbar;
