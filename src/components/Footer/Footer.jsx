import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import emailjs from "emailjs-com";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Icon } from "@iconify/react/dist/iconify.js";

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
    setLoading(true);

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID_2,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          toast.success("Form Submitted Successfully!");
          setLoading(false);
          setFormData({ email: "" });
          setError("");
          e.target.reset();
        },
        (error) => {
          toast.error("Failed to send message, please try again.");
          setLoading(false);
          setError("Failed to send message, please try again.");
        }
      );
  };

  return (
    <div>
      <footer className="font-sans tracking-wide bg-black py-20">
        <div className="container mx-auto flex flex-col item-center ">
          <div className="flex lg:flex-row flex-col gap-16 w-full max-w-9xl">
            {/* Company Logo and Newsletter Subscription */}
            <div className="flex flex-col items-center w-full sm:w-1/2 lg:w-1/4">
              <Link to="/" className="inline-block">
                <img src="/Xsuitelogo.webp" alt="logo" className="w-48" />
              </Link>
              <p className="text-gray-300 text-sm mt-4 text-center">
                Discover XSuite, a global marketing agency that transforms your
                brand with creativity and innovation.
              </p>
              <form
                ref={form}
                onSubmit={sendEmail}
                className="mt-6 flex flex-col sm:flex-row items-center space-y-3 sm:space-y-0 sm:space-x-3"
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
                  disabled={loading}
                  className={`px-4 py-2 ${
                    loading ? "bg-gray-400" : "bg-white"
                  } text-black font-semibold rounded-md hover:bg-orange-600`}
                >
                  {loading ? "Sending..." : "Subscribe"}
                </button>
              </form>
            </div>

            {/* Get in Touch */}
            <div className="flex flex-col items-center lg:text-start text-center w-full sm:w-1/2 lg:w-1/4">
              <h4 className="text-white font-semibold text-lg pr-1 lg:pr-32 ">
                Get In Touch
              </h4>
              <ul className="space-y-2 mt-6 text-gray-300">
                <li>
                  <a
                    href="mailto:info@xsuite.digital"
                    className="hover:text-white"
                  >
                    <strong className="text-orange-500">Email:</strong>{" "}
                    info@xsuite.digital
                  </a>
                </li>
                <li>
                  <a
                    href="https://wa.me/923064312116"
                    target="_blank"
                    className="hover:text-white"
                  >
                    <strong className="text-orange-500">Phone:</strong> +92 331
                    63 61 916
                  </a>
                </li>
                <li>
                  <strong className="text-orange-500"> Timing:</strong> Mon-Sat:
                  9am-5pm
                </li>
                <li>
                  <a
                    href="https://www.google.com/maps?q=Lawrence+Road,+Near+China+Chowk,+Punjab+Lahore+Pakistan"
                    target="_blank"
                    className="hover:text-white"
                  >
                    <strong className="text-orange-500"> Location:</strong>{" "}
                    Lawrence Road Lahore, Pakistan
                  </a>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div className="flex flex-col w-full lg:text-start text-center sm:w-1/2 lg:w-1/4">
              <h4 className="text-white font-semibold text-lg">Services</h4>
              <ul className="space-y-1 mt-6 text-gray-300">
                <li>
                  <Link to="/Services/seo" className="hover:text-white">
                    SEO
                  </Link>
                </li>
                <li>
                  <Link
                    to="/Services/google-my-business-optimization"
                    className="hover:text-white"
                  >
                    Google Ads
                  </Link>
                </li>
                <li>
                  <Link
                    to="/Services/ppc-campaign"
                    className="hover:text-white"
                  >
                    PPC Campaigns
                  </Link>
                </li>
                <li>
                  <Link
                    to="/Services/google-analytics"
                    className="hover:text-white"
                  >
                    Google Analytics
                  </Link>
                </li>
                <li>
                  <Link
                    to="/Services/digital-marketing"
                    className="hover:text-white"
                  >
                    Digital Marketing
                  </Link>
                </li>
                <li>
                  <Link
                    to="/Services/google-my-business-optimization"
                    className="hover:text-white"
                  >
                    Graphic Designing
                  </Link>
                </li>
                <li>
                  <Link
                    to="/Services/website-development"
                    className="hover:text-white"
                  >
                    Website Development
                  </Link>
                </li>
                <li>
                  <Link
                    to="/Services/google-search-console"
                    className="hover:text-white"
                  >
                    Google Search Console
                  </Link>
                </li>
                <li>
                  <Link
                    to="/Services/social-media-marketing"
                    className="hover:text-white"
                  >
                    Social Media Marketing
                  </Link>
                </li>
               
              </ul>
            </div>

            {/* Follow Us */}
            <div className="flex flex-col items-center w-full sm:w-1/2 lg:w-1/4">
              <h4 className="text-white font-semibold text-lg">Follow Us</h4>
              <ul className="mt-6 space-y-4 text-gray-300">
                <li>
                  <Link
                    to="https://www.facebook.com/profile.php?id=61566739650180"
                    target="_blank"
                    className="flex items-center space-x-2 hover:text-white"
                  >
                    <Icon
                      icon="ic:baseline-facebook"
                      className="h-6 w-6 text-orange-500  duration-300 ease-in-out"
                    />
                    <span>Facebook</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="https://www.instagram.com/xsuite.digital/"
                    target="_blank"
                    className="flex items-center space-x-2 hover:text-white"
                  >
                    <Icon
                      icon="mdi:instagram"
                      className="h-6 w-6 text-orange-500 duration-300 ease-in-out"
                    />
                    <span>Instagram</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="https://www.linkedin.com/company/xsuite-digital/about/"
                    target="_blank"
                    className="flex items-center space-x-2 hover:text-white"
                  >
                    <Icon
                      icon="mdi:linkedin"
                      className="h-6 w-6 text-orange-500  duration-300 ease-in-out"
                    />
                    <span>LinkedIn</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <hr className="my-10 border-gray-600 w-full" />

          <div className="flex items-center justify-center space-x-4 text-gray-300 text-sm">
            <Link to="/TermsOfServices" className="hover:text-white">
              Terms of Service
            </Link>
            <Link to="/PrivacyPolicy" className="hover:text-white">
              Privacy Policy
            </Link>
            <Link to="/Security" className="hover:text-white">
              Security
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
