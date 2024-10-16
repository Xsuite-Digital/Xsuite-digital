import { Link } from "react-router-dom";

function Footer() {
  return (
    <div>
      <footer className="font-sans tracking-wide bg-black w-full">
        {/* Full-width container, fixed width for large screens */}
        <div className="w-full max-w-screen-xl mx-auto py-6 px-4 md:py-12">
          {/* Grid for Four Columns */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            {/* Company Logo and Newsletter Subscription */}
            <div className="col-span-1 md:col-span-4 flex flex-col w-full">
              <Link to="/" className="inline-block">
                <img src="/logo-min.webp" alt="logo" className="w-48" />
              </Link>
              <p className="text-gray-300 text-sm mt-4">
                Discover XSuite, a global marketing agency that transforms your
                brand with creativity and innovation.
              </p>
              {/* Newsletter Subscription */}
              <div className="mt-6">
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
            <div className="col-span-1 md:col-span-2 flex flex-col items-start w-full">
              <h4 className="text-white font-semibold text-lg">Get In Touch</h4>
              <ul className="space-y-2 mt-6 text-gray-300">
                <li>
                  <a
                    href="mailto:info@xsuite.digital"
                    className="hover:text-white"
                  >
                    info@xsuite.digital
                  </a>
                </li>
                <li>
                  <a
                    href="https://wa.me/923064312116"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white"
                  >
                    +92 331 63 61 916
                  </a>
                </li>
                <li>OFFICE</li>
                <li>Mon-Sat: 9am-5pm</li>
                <li>
                  <a
                    href="https://www.google.com/maps?q=Lawrence+Road,+Near+China+Chowk,+Punjab+Lahore+Pakistan"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white"
                  >
                    Lawrence Road, Near China Chowk,
                    <br /> Punjab Lahore Pakistan
                  </a>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div className="col-span-1 md:col-span-2 flex flex-col items-start">
              <h4 className="text-white font-semibold text-lg">Services</h4>
              <ul className="space-y-1 mt-6 text-gray-300">
                <li>
                  <Link to="/Services" className="hover:text-white">
                    SEO
                  </Link>
                </li>
                <li>
                  <Link to="/Services" className="hover:text-white">
                    PPC Campaigns
                  </Link>
                </li>
                <li>
                  <Link to="/Services" className="hover:text-white">
                    Google Analytics
                  </Link>
                </li>
                <li>
                  <Link to="/Services" className="hover:text-white">
                    Digital Marketing
                  </Link>
                </li>
                <li>
                  <Link to="/Services" className="hover:text-white">
                    Website Development
                  </Link>
                </li>
                <li>
                  <Link to="/Services" className="hover:text-white">
                    Google Search Console
                  </Link>
                </li>
                <li>
                  <Link to="/Services" className="hover:text-white">
                    Social Media Marketing
                  </Link>
                </li>
                <li>
                  <Link to="/Services" className="hover:text-white">
                    Google My Business Optimization
                  </Link>
                </li>
              </ul>
            </div>

            {/* Follow Us */}
            <div className="col-span-1 md:col-span-4 flex flex-col items-start w-full">
              <h4 className="text-white font-semibold text-lg">Follow Us</h4>
              <ul className="mt-6 space-y-4 text-gray-300">
                <li className="flex space-x-3 hover:text-white">
                  <Link
                    to="https://www.facebook.com/profile.php?id=61566739650180"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex"
                  >
                    <img
                      src="/facebook icons-min.webp"
                      className="h-auto w-4 rounded-full p-1"
                      alt=""
                    />
                    <span className="mt-1">Facebook</span>
                  </Link>
                </li>
                <li className="flex items-center justify-center space-x-3 hover:text-white">
                  <Link
                    to="https://www.instagram.com/xsuite.digital/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex"
                  >
                    <img
                      src="/instaram-icon.webp"
                      className="h-6 w-6 p-1"
                      alt=""
                    />
                    <span className="mx-1">Instagram</span>
                  </Link>
                </li>
                <li className="flex space-x-3">
                  <Link
                    to="https://www.linkedin.com/company/xsuite-digital/about/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex"
                  >
                    <img src="/inn-min.webp" className="h-8 w-7 p-1" alt="" />
                    <span className="mt-1">LinkedIn</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <hr className="my-10 border-gray-600" />

          <div className="flex flex-wrap items-center justify-center max-md:flex-col gap-4">
            <ul className="md:flex md:space-x-6 max-md:space-y-2 text-gray-300">
              <li>
                <Link
                  to="/TermsOfServices"
                  className="hover:text-white text-sm"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/PrivacyPolicy" className="hover:text-white text-sm">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/Security" className="hover:text-white text-sm">
                  Security
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
