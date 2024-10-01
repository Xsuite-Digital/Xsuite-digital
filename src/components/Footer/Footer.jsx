import { Icon } from "@iconify/react/dist/iconify.js";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div>
      <footer className="font-sans tracking-wide bg-black px-8 py-12">
        {/* Adjusted Grid for Four Columns */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-x-8 gap-y-8">
          {/* Company Logo and Newsletter Subscription */}
          <div className="col-span-1 mt-10 md:col-span-4 flex flex-col w-full">
            <Link to="/" className="inline-block">
              <img src="/logo.png" alt="logo" className="w-48" />
            </Link>
            <p className="hover:text-white text-gray-300 text-sm">
              Discover XSuite, a global marketing agency that transforms your
              brand with creativity and innovation.
            </p>
            {/* Newsletter Subscription */}
            <div className="mt-2">
              <form className="flex flex-col sm:flex-row items-center space-y-3 sm:space-y-0 sm:space-x-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-4 py-2 rounded-md text-black w-full sm:w-auto focus:outline-none"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-white text-black font-semibold rounded-md hover:bg-orange-600"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          {/* Get in Touch */}
          <div className="col-span-1  md:col-span-2 flex flex-col items-start text-start w-full">
            <h4 className="text-white font-semibold text-lg">Get In Touch</h4>
            <ul className="space-y-2 mt-6">
              <li>
                <a
                  href="mailto:info@xsuite.digital"
                  className="hover:text-white text-gray-300"
                >
                  info@xsuite.digital
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/923064312116"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white text-gray-300 "
                >
                  +92 306 43 12 116
                </a>
              </li>
              <li>
                <a
                  href="javascript:void(0)"
                  className="hover:text-white text-gray-300 "
                >
                  OFFICE
                </a>
              </li>
              <li>
                <a
                  href="javascript:void(0)"
                  className="hover:text-white text-gray-300 "
                >
                  Mon-Sat: 9am-5pm
                </a>
              </li>
              <li>
                <a
                  href="https://www.google.com/maps?q=Lawrence+Road,+Near+China+Chowk,+Punjab+Lahore+Pakistan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white text-gray-300  "
                >
                  Lawrence Road, Near China Chowk,
                  <br /> Punjab Lahore Pakistan
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="col-span-1 md:col-span-2 flex flex-col items-start text-start w-full">
            <h4 className="text-white font-semibold text-lg">Services</h4>
            <ul className="mt-6 space-y-2">
              <Link to="/Services" className="hover:text-white text-gray-300 ">
                <li>Website Development</li>
              </Link>
              <Link to="/Services" className="hover:text-white text-gray-300 ">
                <li>Digital Marketing</li>
              </Link>
              <Link to="/Services" className="hover:text-white text-gray-300 ">
                <li>Search Engine Optimization</li>
              </Link>
              <Link to="/Services" className="hover:text-white text-gray-300 ">
                <li>Social Media (Marketing & Graphics Designing)</li>
              </Link>
              <Link to="/Services" className="hover:text-white text-gray-300 ">
                <li>PPC Campaigns</li>
              </Link>
              <Link to="/Services" className="hover:text-white text-gray-300">
                <li>Google Analytics</li>
              </Link>
              <Link to="/Services" className="hover:text-white text-gray-300 ">
                <li>Google My Business Optimization</li>
              </Link>
              <Link to="/Services" className="hover:text-white text-gray-300  ">
                <li>Google Search Console</li>
              </Link>
            </ul>
          </div>

          {/* Follow Us */}
          <div className="col-span-1 md:col-span-4 flex flex-col items-start text-start w-full">
            <h4 className="text-white font-semibold text-lg">Follow Us</h4>
            <ul className="mt-6 space-y-2">
              <li className="flex items-center space-x-3">
                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 hover:text-white text-gray-300 text-sm"
                >
                  <Icon
                    icon="bi:facebook"
                    className="h-6 w-6 text-white duration-300 ease-in-out"
                  />
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon
                    icon="ri:instagram-fill"
                    className="h-6 w-6 text-white duration-300 ease-in-out"
                  />
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <a
                  href="https://www.linkedin.com/company/xsuite-digital/about/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon
                    icon="bi:linkedin"
                    className="h-6 w-6 text-white duration-300 ease-in-out"
                  />
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
