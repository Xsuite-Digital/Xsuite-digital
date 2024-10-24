import PropTypes from 'prop-types'; // Import PropTypes
import { Monitor, MessageCircle, Globe, BarChart2, Code, Building2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import Pacakages from "../main/Pacakages"
const ExpertiseCard = ({ title, Icon }) => {
  return (
    <div className="flex flex-col items-center p-6 rounded-lg transition-all duration-300 hover:shadow-lg hover:border-orange-500 hover:border-2 bg-white cursor-pointer group">
      <div className="p-4 rounded-full bg-gray-100 group-hover:bg-orange-100 transition-colors duration-300">
        <Icon className="w-8 h-8 text-gray-600 group-hover:text-orange-500" />
      </div>
      <h3 className="mt-4 text-lg font-semibold text-gray-800">{title}</h3>
    </div>
  );
};

// Define PropTypes for ExpertiseCard
ExpertiseCard.propTypes = {
  title: PropTypes.string.isRequired,
  Icon: PropTypes.elementType.isRequired,
};

const ExpertiseSection = () => {
  const services = [
    { title: 'Digital Marketing', Icon: Monitor },
    { title: 'Google Ads', Icon: Globe },
    { title: 'PPC Campaigns', Icon: BarChart2 },
    { title: 'Social Media Marketing', Icon: MessageCircle },
    { title: 'Web Development', Icon: Code },
    { title: 'Google My Business Optimization', Icon: Building2 },
  ];

  return (
    <>
    <div className="max-w-6xl mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-center mb-12">Our Expertise</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <ExpertiseCard key={index} title={service.title} Icon={service.Icon} />
        ))}
      </div>
      <div className="text-center mt-8">
      <Link to='/Services'>
        <button className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition-colors duration-300">
          View More Services
        </button>
      </Link>
      </div>
    </div>
      <Pacakages/>
        </>
  );
};

export default ExpertiseSection;
