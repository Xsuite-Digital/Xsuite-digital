import Navbar from "./Navbar";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      {/* Header Section */}

      <div className="bg-[#373737] h-8 max-w-screen lg:flex justify-between  p-4 hidden   ">
        {/* child-1 */}
       
        <div className="flex space-x-4 mr-[1%] ">
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

            <Link to="mailto: info@xsuite.digital " className="text-[#c9c9c9] ">
              info@xsuite.digital
            </Link>
          </div>
        </div>

        {/* child-2 */}

        <div className="flex items-center space-x-2 ml-[1%]">
          <Link to=''>
          <Icon
            icon="uit:facebook-f"
            className="   h-8 w-8 rounded-full p-1 hover:text-orange-500  text-white bg-transparent duration-300 ease-in-out hover:bg-transparent  "
            />
            </Link>
            <Link to='https://www.linkedin.com/company/xsuite-digital/about/' target="_blank">
          <Icon
            icon="basil:linkedin-outline"
            className="  h-8 w-8 rounded-full p-1 hover:text-orange-500  text-white  hover:border-none duration-300 hover:bg-transparent ease-in-out  "
            />
            </Link>
          <Link to='https://www.instagram.com/xsuite.digital/' target="_blank" >
           <Icon
            icon="proicons:instagram"
            className="   h-8 w-8 rounded-full p-1 hover:text-orange-500  text-white hover:bg-transparent duration-300 ease-in-out   "
            />
            </Link>
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
