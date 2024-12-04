
import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa'; // Importing an arrow icon

const ServicesPage = ({ title, description, image }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-black text-white flex flex-col items-center p-8 lg:p-16">
      <div className="flex flex-col lg:flex-row items-center justify-between mt-5 w-full max-w-6xl gap-8 lg:gap-16 bg-gray-900 rounded-xl p-6 lg:p-12 shadow-lg relative">
        {/* Back Arrow */}
        <div className="w-full flex justify-start lg:absolute lg:top-4 lg:left-4 mb-4 lg:mb-0">
          <Link
            to="/services" // Navigate back to services page
            className="text-white hover:text-orange-500 transition duration-300 flex items-center"
          >
            <FaArrowLeft className="mr-2" />
            <span>Back to Services</span>
          </Link>
        </div>

        {/* Left - Image Section */}
        <div className="relative w-full lg:w-1/2">
          <img
            src={image}
            alt={title}
            className="rounded-lg shadow-lg object-cover bg-opacity-80 w-full h-64 lg:h-96"
          />
        </div>

        {/* Right - Content Section */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center">
          <h1 className="text-3xl lg:text-4xl font-extrabold mb-4">{title}</h1>
          <p className="text-gray-300 text-sm lg:text-lg mb-6">{description}</p>

          <ul className="text-sm lg:text-lg text-gray-300 space-y-4">
            <li className="flex items-center">
              <span className="text-orange-500 mr-2">→</span> Increase visibility and reach online with proven strategies
            </li>
            <li className="flex items-center">
              <span className="text-orange-500 mr-2">→</span> Custom-tailored solutions for specific business needs
            </li>
            <li className="flex items-center">
              <span className="text-orange-500 mr-2">→</span> Expert team with years of experience in the field
            </li>
            <li className="flex items-center">
              <span className="text-orange-500 mr-2">→</span> Detailed analytics and regular performance reports
            </li>
          </ul>

          <div className="mt-6">
            <Link
              to="/Contact"
              className="inline-block bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition duration-300"
            >
              Get Started with {title}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

ServicesPage.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default ServicesPage;

