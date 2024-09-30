import { Icon } from "@iconify/react/dist/iconify.js";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div>
      <footer className="font-sans tracking-wide bg-black px-8 py-12">
        <div className=" flex flex-col lg:flex-row items-center justify-between md:space-y-6 md:p-4 p-1">
          <div>
            <Link to="/" className="inline-block">
              <img src="/logo.png" alt="logo" className="w-48" />
            </Link>

            <ul className="mt-10 flex space-x-5">
              <li>
                <div className="flex items-center space-x-2 ml-[1%]">
                  <Icon
                    icon="bi:facebook"
                    className="   h-7 w-7 rounded-full p-1 hover:text-orange-500  text-white duration-300 ease-in-out hover:bg-transparent  "
                  />
                  <Icon
                    icon="ri:linkedin-fill"
                    className="  h-7 w-7 rounded-full p-1 hover:text-orange-500  text-white hover:border-none duration-300 hover:bg-transparent ease-in-out  "
                  />

                  <Icon
                    icon="bi:twitter"
                    className="   h-7 w-7 rounded-full p-1 hover:text-orange-500  text-white hover:bg-transparent duration-300 ease-in-out   "
                  />
                </div>
              </li>
            </ul>
          </div>

          <div className="flex flex-col items-start justify-center mt-2">
            <h4 className="text-white font-semibold text-lg relative max-sm:cursor-pointer">
              Services
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16px"
                height="16px"
                className="sm:hidden absolute right-0 top-1 fill-[#d6d6d6]"
                viewBox="0 0 24 24"
              >
                <path
                  d="M12 16a1 1 0 0 1-.71-.29l-6-6a1 1 0 0 1 1.42-1.42l5.29 5.3 5.29-5.29a1 1 0 0 1 1.41 1.41l-6 6a1 1 0 0 1-.7.29z"
                  data-name="16"
                  data-original="#000000"
                ></path>
              </svg>
            </h4>

            <ul className="mt-6 space-y-2 flex flex-col items-start   ">
              <Link to="/Services">
                {" "}
                <li className="text-white">Website Development</li>
                <li className="text-white">Digital Marketing</li>
                <li className="text-white">Search Engine Optimization</li>
                <li className="text-white">
                  Social Media (Marketing & Graphics Designing)
                </li>
                <li className="text-white">PPC Campaigns</li>
                <li className="text-white">Google Analytics</li>
                <li className="text-white">Google My Business Optimization</li>
                <li className="text-white">Google Search Console</li>
              </Link>
            </ul>
          </div>

          <div className=" flex justify-start items-start flex-col  mt-[5%]">
            <h4 className="text-white font-semibold text-lg relative max-sm:cursor-pointer">
              Get In Touch{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16px"
                height="16px"
                className="sm:hidden absolute right-0 top-1 fill-[#d6d6d6]"
                viewBox="0 0 24 24"
              >
                <path
                  d="M12 16a1 1 0 0 1-.71-.29l-6-6a1 1 0 0 1 1.42-1.42l5.29 5.3 5.29-5.29a1 1 0 0 1 1.41 1.41l-6 6a1 1 0 0 1-.7.29z"
                  data-name="16"
                  data-original="#000000"
                ></path>
              </svg>
            </h4>

            <ul className="space-y-5 mt-6 flex items-start   justify-start flex-col   ">
              <li>
                <a
                  href="javascript:void(0)"
                  className="hover:text-white text-gray-300 text-sm"
                >
                  info@microthinks.com
                </a>
              </li>
              <li>
                <a
                  href="javascript:void(0)"
                  className="hover:text-white text-gray-300 text-sm"
                >
                  +92 306 43 12 116
                </a>
              </li>
              <li>
                <a
                  href="javascript:void(0)"
                  className="hover:text-white text-gray-300 text-sm"
                >
                  OFFICE
                </a>
              </li>
              <li>
                <a
                  href="javascript:void(0)"
                  className="hover:text-white text-gray-300 text-sm"
                >
                  Mon-Sat: 9am-5pm
                </a>
              </li>
              <li>
                <a
                  href="javascript:void(0)"
                  className="hover:text-white text-gray-300 lg:text-sm text-xs"
                >
                  Lawrence Road , Near China Chowk , <br /> Punjab Lahore
                  Pakistan
                </a>
              </li>
            </ul>
          </div>
        </div>

        <hr className="my-10 border-gray-400" />

        <div className="flex flex-wrap items-center justify-center max-md:flex-col gap-4">
          <ul className="md:flex md:space-x-6 max-md:space-y-2">
            <li>
              <Link
                to="/TermsOfServices"
                className="hover:text-white text-gray-300 text-sm"
              >
                Terms of Service
              </Link>
            </li>
            <li>
            <Link
                to="/PrivacyPolicy"
                className="hover:text-white text-gray-300 text-sm"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
            <Link
                to="/Security"
                className="hover:text-white text-gray-300 text-sm"
              >
                Security
              </Link>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
