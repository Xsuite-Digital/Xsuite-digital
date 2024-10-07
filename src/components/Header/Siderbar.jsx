import { Icon } from '@iconify/react/dist/iconify.js';
import {motion,  AnimatePresence } from 'framer-motion';
import {useState} from 'react'
import { Link, useLocation } from 'react-router-dom'

const Siderbar = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
  
    const location = useLocation();

    const ScrollToTop = () => {
      if(location.pathname === "/" ) {
        window.scrollTo({
          top:0,
          behavior: 'smooth',
        })
      }
      setSidebarOpen(false)
    }
    return (

    <div>
<div className="md:hidden flex items-center justify-between p-4 bg-transparent">
          {/* Logo */}
          <div>
            <Link onClick={ScrollToTop} to={"/"}>
              <img src={"/logo-min.webp"} width={100} height={100} alt="Logo" />
            </Link>
          </div>

          {/* Sidebar Toggle Button */}
          <button
            className=" p-2 rounded-md duration-300 ease-in-out text-white hover:bg-gray-700"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            <Icon icon="mdi:menu" className="h-6 w-6" />
          </button>
        </div>

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
                    onClick={ScrollToTop}
                    to="/"
                    className="block text-xl text-white hover:text-[#7E7E7E]"
                  >
                    Home
                  </Link>
                </li>

                {/* Services link */}
                <li>
                  <Link
                    onClick={ScrollToTop}
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
                    onClick={ScrollToTop}
                    className="block text-xl text-white hover:text-[#7E7E7E]"
                  >
                    About Us
                  </Link>
                </li>

                {/* Contact link */}
                <li>
                  <Link
                    to="/Contact"
                    onClick={ScrollToTop}
                    className="block text-xl text-white hover:text-[#7E7E7E]"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>

    </div>
  )
}

export default Siderbar