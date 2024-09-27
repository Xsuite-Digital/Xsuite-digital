import Navbar from "./Navbar";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      {/* Header Section */}

      <div className="bg-[#373737] h-8 max-w-screen lg:flex justify-between hidden   ">
        {/* child-1 */}
        <div className="flex items-center space-x-2 ml-[1%]">
          <Icon
            icon="bi:facebook"
            className="   h-7 w-7 rounded-full p-1  text-white duration-300 ease-in-out hover:bg-transparent  "
          />
          <Icon
            icon="ri:instagram-fill"
            className="  h-7 w-7 rounded-full p-1  text-white hover:border-none duration-300 hover:bg-transparent ease-in-out  "
          />
          <Icon
            icon="bi:youtube"
            className=" h-7 w-7 rounded-full p-1  text-white hover:border-none hover:bg-transparent duration-300 ease-in-out  "
          />
          <Icon
            icon="bi:twitter"
            className="   h-7 w-7 rounded-full p-1  text-white hover:bg-transparent duration-300 ease-in-out   "
          />
        </div>

        {/* child-2 */}

        <div className="flex space-x-4 mr-[1%]">
          <div className="flex items-center space-x-1">
            <Icon
              icon="fluent:location-16-regular"
              className="h-5 w-5 text-[#c9c9c9] "
            />
            <p className="font-serif text-sm text-[#c9c9c9] ">
              Lawrence Road, Near China Chowk, Punjab Lahore Pakistan
            </p>
          </div>

          <div className="flex items-center space-x-1 text-[#c9c9c9]">
            <Icon
              icon="fluent:mail-16-regular"
              className="h-5 w-5 text-[#c9c9c9] "
            />

            <Link
              to="mailto: info@microthinks.com "
              className="text-[#c9c9c9] "
            >
              info@microthinks.com
            </Link>
          </div>
        </div>
      </div>

      <div className=" ">
        {/* Navbar content */}
        <Navbar />
      </div>
    </div>
  );
};

export default Header;
