import PropTypes from 'prop-types';

const ServicesPage = ({ title, description }) => {
  return (
    <div className="p-4 h-screen flex flex-col items-center justify-center bg-black text-white">
      <h1 className="text-3xl font-bold mb-4">{title}</h1>
      <p className="text-lg">{description}</p>
    </div>
  );
};

ServicesPage.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default ServicesPage;
