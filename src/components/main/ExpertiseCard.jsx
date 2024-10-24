import { Icon } from "@iconify/react/dist/iconify.js";

// Disable prop validation for this component
/* eslint-disable-next-line react/prop-types */
const ExpertiseCard = ({ title, icon }) => {
  return (
    <div className="flex flex-col items-center p-6 rounded-lg transition-all duration-300 hover:shadow-lg hover:border-orange-500 hover:border-2 bg-white cursor-pointer group transform hover:scale-105">
      <div className="p-4 rounded-full bg-gray-100 group-hover:bg-orange-100 transition-colors duration-300">
        <Icon icon={icon} className="w-8 h-8 text-gray-600 group-hover:text-orange-500" />
      </div>
      <h3 className="mt-4 text-lg font-semibold text-gray-800">{title}</h3>
    </div>
  );
};

export default ExpertiseCard;
