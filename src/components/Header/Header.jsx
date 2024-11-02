import Navbar from "./Navbar";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="fixed top-0 left-0 right-0 z-50">
<<<<<<< HEAD
      {/* Header Section */}

      <div className="bg-[#373737] h-8 max-w-screen lg:flex justify-between  p-4 hidden   ">
        {/* child-1 */}

        <div className="flex space-x-4 mr-[1%] ">
          <div className="flex items-center space-x-1">
            <Icon
              icon="fluent:location-16-regular"
              className="h-5 w-5 text-white "
            />
            <span className="text-white ">
              Lawrence Road, Near China Chowk, Punjab Lahore Pakistan
            </span>
          </div>

          <div className="flex items-center space-x-1 text-white">
            <Icon
              icon="fluent:mail-16-regular"
              className="h-5 w-5 text-white "
            />

            <Link to="mailto:info@xsuite.digital " className="text-white ">
              info@xsuite.digital
            </Link>
          </div>
        </div>

        {/* child-2 */}

        <div className="flex items-center space-x-2 ml-[1%]">
          <Link to="https://www.facebook.com/profile.php?id=61566739650180" target='_blank'>
            <img
              src="/fb11-min.webp"
              className="h-auto w-4 p-1 text-white"
              alt="Visit our Facebook profile"
              width="50"
              height="50"
            />
          </Link>
          <Link to="https://www.instagram.com/xsuite.digital/" target="_blank">
            <img
              src="/instaram-icon.webp"
              className="h-6 w-6 p-1 hover:text-orange-500 text-white bg-transparent duration-300 ease-in-out hover:bg-transparent"
              alt="Visit our Instagram profile"
            />
          </Link>
          <Link
            to="https://www.linkedin.com/company/xsuite-digital/about/"
            target="_blank"
          >
            <img
              src="/inn-min.webp"
              className="h-8 w-7 p-1 hover:text-orange-500 text-white bg-transparent duration-300 ease-in-out hover:bg-transparent"
              alt="Visit our LinkedIn page"
            />
          </Link>
        </div>
      </div>
=======
     {/* Header Section */}
<div className="bg-[#373737] h-8 max-w-screen lg:flex justify-between p-4 hidden">
  {/* child-1 */}
  <div className="flex items-center space-x-2 ml-[1%]">
    <Link to="https://www.facebook.com/profile.php?id=61566739650180" target='_blank'>
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
    <div className="flex items-center space-x-1 text-white hover:text-orange-500">
      <Icon
        icon="fluent:phone-16-regular"
        className="h-5 w-5"
      />
      <Link to="https://wa.me/+92 331 63 61 916">+92 331 63 61 916</Link>
    </div>

    <div className="flex items-center space-x-1 text-white hover:text-orange-500">
      <Icon
        icon="fluent:mail-16-regular"
        className="h-5 w-5"
      />
      <Link to="mailto:info@xsuite.digital">info@xsuite.digital</Link>
    </div>

    <div className="flex items-center space-x-1 text-white hover:text-orange-500">
      <Link to="https://www.google.com/maps/place/Lawrence+View+Hotel,+Lahore/@31.5490045,74.3261955,17z/data=!3m1!4b1!4m9!3m8!1s0x391904ba19c196e3:0x54ae9e130d37d85a!5m2!4m1!1i2!8m2!3d31.549!4d74.3287704!16s%2Fg%2F1tcwv37v?entry=ttu&g_ep=EgoyMDI0MTAyOS4wIKXMDSoASAFQAw%3D%3D">
        <Icon
          icon="fluent:location-16-regular"
          className="h-5 w-5"
        />
      </Link>
      <span>Lawrence Road Lahore Pakistan</span>
    </div>
  </div>
</div>

>>>>>>> 9ff4cb6 (donn)

      <div className=" ">
        <Navbar />
      </div>
    </div>
  );
};

export default Header;