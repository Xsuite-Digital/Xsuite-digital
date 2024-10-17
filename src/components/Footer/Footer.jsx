import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Footer() {
  const form = useRef();
  const [formData, setFormData] = useState({
    email: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true); // Set loading to true

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID_2,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          toast.success("Form Submitted Successfully!"); // Success toast
          setLoading(false); // Reset loading after success
          setError(""); // Clear any errors
          e.target.reset(); // Reset form fields
        },
        (error) => {
          toast.error("Failed to send message, please try again."); // Error toast
          setLoading(false); // Reset loading on failure
          setError("Failed to send message, please try again."); // Display error message
        }
      );
  };

  return (
    <div>
      {/* Toast notifications */}
      <ToastContainer  />

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
                <form
                  ref={form}
                  onSubmit={sendEmail}
                  className="flex flex-col sm:flex-row items-center space-y-3 sm:space-y-0 sm:space-x-3"
                >
                  <input
                    onChange={handleChange}
                    name="email"
                    type="email"
                    placeholder="Enter your email"
                    className="px-4 py-2 rounded-md text-black w-full sm:w-auto focus:outline-none"
                    required
                  />
                  <button
                    type="submit"
                    disabled={loading} // Disable button when loading
                    className={`px-4 py-2 ${
                      loading ? "bg-gray-400" : "bg-white"
                    } text-black font-semibold rounded-md hover:bg-orange-600`}
                  >
                    {loading ? "Sending..." : "Subscribe"}
                  </button>
                </form>
              </div>
            </div>

            {/* Get in Touch */}
            <div className="col-span-1 md:col-span-2 flex flex-col items-start w-full">
              <h4 className="text-white font-semibold text-lg">Get In Touch</h4>
              <ul className="space-y-2 mt-6 text-gray-300">
                <li>
                  <a href="mailto:info@xsuite.digital" className="hover:text-white">
                    info@xsuite.digital
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+923316361916"
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
              <ul className="lg:mt-6 space-y-4 -mt-1  flex lg:block text-gray-300">
                <li className="flex lg:space-x-3 pr-4 lg:pr-0 hover:text-white">
                  <Link
                    to="https://www.facebook.com/profile.php?id=61566739650180"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex"
                  >
                    <img
                      src="/facebook icons-min.webp"
                      className="w-4 h-auto rounded-full lg:p-1 p-1 pt-5"
                      alt=""
                    />
                    <span className="mt-1 hidden lg:block">Facebook</span>
                  </Link>
                </li>
                <li className="flex items-center justify-center space-x-3 pr-4 lg:pr-0 hover:text-white">
                  <Link
                    to="https://www.instagram.com/xsuite.digital/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex "
                  >
                    <img
                      src="/instaram-icon.webp"
                      className="h-6 w-6 p-1"
                      alt=""
                    />
                    <span className="mx-1 hidden lg:block">Instagram</span>
                  </Link>
                </li>
                <li className="flex space-x-3">
                <li className="flex space-x-3">
                  <Link
                    to="https://www.linkedin.com/company/xsuite-digital/about/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex"
                  >
                    <img src="/inn-min.webp" className="h-8 w-7 p-1" alt="" />
                    <span className="mt-1 hidden lg:block">LinkedIn</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <hr className="my-6 border-gray-600" />

          <div className="flex flex-wrap items-center mb-12 lg:mb-0 justify-center max-md:flex-col gap-4">
            <ul className="flex gap-4 lg:gap-6 text-gray-300">
              <li>
                <Link to="/TermsOfServices" className="hover:text-white text-sm">
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
