import { useEffect } from "react";
import { Link } from "react-router-dom";
import "./AboutUs.css";
const AboutUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <div className="px-6 py-12 font-sans">
        <div className="lg:max-w-7xl max-w-lg mx-auto px-6 py- rounded-lg">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="max-h-80">
              <img
                src="/aboutus.jpg"
                alt="Image"
                className="picimg rounded-md shadow-dark-xl object-cover w-full h-full"
              />
            </div>
            <div>
              <h1 className="font-semibold tracking-widest text-xl lg:text-3xl font-sans flex items-center justify-center">
                About Us
              </h1>
              <p className="text-black text-md  leading-6">
                We are a top-level digital marketing service provider
                specializing in web development, search engine optimization,
                pay-per-click campaigns, and social media management. Xsuite is
                enthusiastic about optimizing your online presence with Google
                My Business, Google Analytics, and Google Search Console.
                Whether you require SEO or graphic designing for social media
                platforms, we are available to help you in the marketplace for
                your business advancements. Xsuite is a trustworthy company by
                which you can work to fulfill your digital requirements.
              </p>

              <div className="mt-6">
                <Link
                  to="/About"
                  className="text-white text-sm bg-black py-3 px-2 rounded-xl font-semibold hover:bg-orange-500 hover:text-black  duration-500 ease-in-out"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
