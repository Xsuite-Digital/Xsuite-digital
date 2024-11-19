

import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const ServicesPage = ({ title, description, imgSrc }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-black text-white p-6 sm:p-12 lg:p-24 flex flex-col items-center justify-center">
      {/* Service Header */}
      <div className="text-center mt-8 sm:mt-15 lg:mt-16 mb-6 sm:mb-10">
        <h1 className="text-2xl sm:text-4xl font-extrabold mb-4 sm:mt-15">{title}</h1>
        <p className="text-base sm:text-lg max-w-xl mx-auto">{description}</p>
      </div>

      {/* Service Image */}
      <div className="flex justify-center mb-8 sm:mb-12 w-full">
        <img
          src={imgSrc}
          alt={title}
          className="rounded-lg    shadow-lg max-w-full h-56 sm:h-96 object-cover"
        />
      </div>

      {/* Detailed Service Info */}
      <div className="max-w-2xl sm:max-w-4xl mx-auto space-y-6 sm:space-y-8">
        <section className="bg-gray-800 p-4 sm:p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl sm:text-3xl font-semibold text-orange-500 mb-3 sm:mb-4">What We Offer</h2>
          <p className="text-sm sm:text-lg text-gray-300">
            {description} Our team ensures that each project is tailored to the client's needs with exceptional results.
          </p>
        </section>

        {/* Add more details about the service here */}
        <section className="bg-gray-700 p-4 sm:p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl sm:text-3xl font-semibold text-orange-500 mb-3 sm:mb-4">Key Benefits</h2>
          <ul className="list-disc pl-6 sm:pl-8 text-sm sm:text-lg text-gray-300 space-y-2">
            <li>Increase visibility and reach online with proven strategies</li>
            <li>Custom-tailored solutions for specific business needs</li>
            <li>Expert team with years of experience in the field</li>
            <li>Detailed analytics and regular performance reports</li>
          </ul>
        </section>
      </div>

      {/* Call to Action */}
      <div className="text-center mt-8 sm:mt-12">
        <Link
          to="/Contact"
          className="px-6 sm:px-8 py-2 sm:py-3 bg-orange-500 text-white rounded-lg sm:rounded-2xl hover:bg-orange-600 transition duration-300 ease-in-out"
        >
          Get Started with {title}
        </Link>
      </div>
    </div>
  );
};

ServicesPage.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
};

export default ServicesPage;
