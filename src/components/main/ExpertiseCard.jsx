import { Icon } from "@iconify/react/dist/iconify.js";

// Disable prop validation for this component
/* eslint-disable-next-line react/prop-types */
const ExpertiseCard = ({ title, icon }) => {
  return (
    <div className="flex flex-col items-center  bg-white border border-gray-200 p-6 rounded-lg transition-transform duration-300 hover:shadow-sm  hover:shadow-orange-500 hover:border-orange-500 cursor-pointer group transform will-change-transform hover:scale-105"
         style={{ position: 'relative', overflow: 'hidden' }}>
      <div className="p-4 rounded-full bg-gray-100 group-hover:bg-orange-100 transition-colors duration-300">
        <Icon
          icon={icon}
          className="w-8 h-8 text-gray-600 group-hover:text-orange-500"
        />
      </div>
      <h3 className="mt-4 text-lg font-semibold text-gray-800">{title}</h3>
    </div>
  );
};

export default ExpertiseCard;
