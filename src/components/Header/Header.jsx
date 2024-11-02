import Navbar from "./Navbar";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      {/* Header Section */}
      <div className="bg-[#373737] h-8 max-w-screen lg:flex justify-between p-4 hidden">
        {/* child-1 */}
        


<div className="flex items-center space-x-2 ml-[1%]">
          <Link to="https://www.facebook.com/profile.php?id=61566739650180" target="_blank">
            <Icon
              icon="ic:baseline-facebook"
              className="h-5 w-5 text-white hover:text-orange-500 duration-300 ease-in-out"
            />
          </Link>
          <Link to="https://www.instagram.com/xsuite.digital/" target="_blank">
            <Icon
              icon="mdi:instagram"
              className="h-5 w-5 text-white hover:text-orange-500 duration-300 ease-in-out"
            />
          </Link>
          <Link to="https://www.linkedin.com/company/xsuite-digital/about/" target="_blank">
            <Icon
              icon="mdi:linkedin"
              className="h-5 w-5 text-white hover:text-orange-500 duration-300 ease-in-out"
            />
          </Link>
        </div>

        {/* child-2 */}
       <div className="flex space-x-4 mr-[1%]">
          
       <div className="flex items-center space-x-1 hover:text-orange-500 duration-300 ease-in-out text-white">
            <Icon icon="mdi-light:phone" className="h-5 w-5 " />
            <Link to="tel:https://wa.me/03316361916" className="">
              03316361916
            </Link>
          </div>

       <div className="flex items-center space-x-1 text-white hover:text-orange-500 duration-300 ease-in-out">
            <Icon icon="fluent:mail-16-regular" className="h-5 w-5 " />
            <Link to="mailto:info@xsuite.digital" className="">
              info@xsuite.digital
            </Link>
          </div>
          
          <div className="flex items-center space-x-1 text-white hover:text-orange-500 duration-300 ease-in-out">
            <Icon
              icon="fluent:location-16-regular"
              className="h-5 w-5 "
            />
            <span className="">
              Lawrence Road, Near China Chowk, Punjab Lahore Pakistan
            </span>
          </div>

         
        </div>
      </div>

      <div>
        <Navbar />
      </div>
    </div>
  );
};

export default Header;
