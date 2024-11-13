import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const ServicesPage = ({ title, description, imgSrc }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-black text-white p-24 flex flex-col items-center justify-center">
      {/* Service Header */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-extrabold mb-4">{title}</h1>
        <p className="text-lg max-w-3xl mx-auto">{description}</p>
      </div>

      {/* Service Image */}
      <div className="flex justify-center mb-12">
        <img
          src={imgSrc}
          alt={title}
          className="rounded-xl shadow-lg max-w-full h-96 object-cover"
        />
      </div>

      {/* Detailed Service Info */}
      <div className="max-w-4xl mx-auto space-y-8">
        <section className="bg-gray-800 p-6 rounded-xl shadow-lg">
          <h2 className="text-3xl font-semibold text-orange-500 mb-4">What We Offer</h2>
          <p className="text-lg text-gray-300">
            {description} Our team ensures that each project is tailored to the client's needs with exceptional results.
          </p>
        </section>

        {/* Add more details about the service here */}
        <section className="bg-gray-700 p-6 rounded-xl shadow-lg">
          <h2 className="text-3xl font-semibold text-orange-500 mb-4">Key Benefits</h2>
          <ul className="list-disc pl-8 text-lg text-gray-300">
            <li>Increase visibility and reach online with proven strategies</li>
            <li>Custom-tailored solutions for specific business needs</li>
            <li>Expert team with years of experience in the field</li>
            <li>Detailed analytics and regular performance reports</li>
          </ul>
        </section>
      </div>

      {/* Call to Action */}
      <div className="text-center mt-12">
        <Link
          to="/Contact"
          className="px-8 py-3 bg-orange-500 text-white rounded-2xl hover:bg-orange-600 transition duration-300 ease-in-out"
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
  imgSrc: PropTypes.string.isRequired, // imgSrc added to propTypes
};

export default ServicesPage;
