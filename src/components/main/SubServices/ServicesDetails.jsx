import { useParams } from "react-router-dom";
import { services } from "../../../pages/Services"; // Import the services array

const ServiceDetails = () => {
  const { id } = useParams();
  const service = services.find((service) => service.path === id);

  if (!service) {
    return <p className="text-center text-white">Service not found</p>;
  }
  console.log(service.item);

  return (
    <div className="min-h-screen bg-black text-white py-16">
      <div className="container mx-auto px-4">
        <div className="text-6xl text-orange-500">{service.item}</div>
      </div>
    </div>
  );
};

export default ServiceDetails;
