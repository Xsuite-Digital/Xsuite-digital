// Disable prop validation for this component
/* eslint-disable-next-line react/prop-types */
const WorkProcessStep = ({ icon, title, description }) => (
    <div className="flex flex-col items-center justify-center text-center">
      <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mb-4 transition-transform duration-200 hover:scale-105">
        {icon} 
      </div>
      <h2 className="text-lg font-semibold mb-2">{title}</h2>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );
  
  export default WorkProcessStep;
  