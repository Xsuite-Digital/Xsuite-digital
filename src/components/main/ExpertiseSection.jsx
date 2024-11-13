import { Link } from 'react-router-dom';
import Pacakages from "../main/Pacakages"; 
import ExpertiseCard from './ExpertiseCard';


const ExpertiseSection = () => {
  const services = [
    { title: 'Digital Marketing', icon: 'mdi:monitor-dashboard' },
    { title: 'Google Ads', icon: 'logos:google-ads' },
    { title: 'PPC Campaigns', icon: 'mdi:chart-bar' },
    { title: 'Social Media Marketing', icon: 'mdi:message-text' },
    { title: 'Web Development', icon: 'mdi:code-tags' },
    { title: 'Google My Business Optimization', icon: 'mdi:google-my-business' },
  ];

  return (
    <>
      <div className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Our Expertise</h2>
        <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ExpertiseCard key={index} title={service.title} icon={service.icon} />
          ))}
        </div>
        <div className="text-center mt-8">
          <Link to="/Services">
            <button className="text-black px-4 py-2 rounded-full bg-transparent border-2 border-orange-500 hover:scale-110 transition ease-in-out duration-300 hover:bg-orange-500 hover:text-white">
              View More Services
            </button>
          </Link>
        </div>
      </div>
      <Pacakages />
    </>
  );
};

export default ExpertiseSection;
