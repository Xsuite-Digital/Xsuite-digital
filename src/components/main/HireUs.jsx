import { useState } from "react";
import { Icon } from "@iconify/react";

const HireUs = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const services = [
    {
      icon: "mdi:settings",
      title: "Customization",
      description:
      "We create exceptional digital marketing plans that align with your unique brands, ensuring every campaign resonates with your target audience. "   },
    {
      icon: "mdi:shield-check",
      title: "Security",
      description:"Xsuite Digital prioritizes your safety, using top-notch tools and methods throughout our projects. We proactively defend against potential threats and safeguard your interests.",
    },
    {
      icon: "mdi:headset",
      title: "Customer Support",
      description: "Our friendly team is always available to help you by providing guidance and answers to your queries. Your success is our utmost priority and we are here to help you achieve it.",
    },
    
    {
      icon: "mdi:chart-line",
      title: "Performance",
      description:"We focus on utilizing advanced analytics to optimize projects in real-time, ensuring data-driven decisions that enhance efficiency and produce tangible results.",
    },
    {
      icon: "mdi:globe",
      title: "Global Reach",
      description:
      "Xsuite Digital helps your brand’s connectivity across the globe. Our strategic approach ensures your message resonates with diverse audiences, unlocking new growth opportunities."
    },
    {
      icon: "mdi:message-text",
      title: "Communication",
      description:"This digital marketing agency beleives in direct and transparent communication, which is the heart of agency-client relationships. We provide updates and feedback frequently to keep you informed and engaged.",
    },
  ];

  const changeSlide = (direction) => {
    setCurrentSlide((prev) => {
      const newSlide = prev + direction;
      return (newSlide < 0) ? Math.max(0, services.length - 3) : (newSlide + 3 >= services.length ? 0 : newSlide);
    });
  };


  

  return (
    <div className="hidden lg:block bg-black">
      <h1 className="text-white p-4 tracking-wider font-sans font-extrabold flex  items-center justify-center text-4xl lg:text-4xl">
        Why Choose <span className=" mx-2 text-orange-500">Xsuite</span> Digital<span className=" mx-2 text-orange-500">?</span>
</h1>
 
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="relative">
          <button onClick={() => changeSlide(-3)} className="absolute top-1/2 -left-12 transform -translate-y-1/2 p-2 rounded-full bg-gray-900 shadow-lg hover:bg-gray-50 text-[#f9731b]">
            <Icon icon="mdi:chevron-left" width="24" />
          </button>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            {services.slice(currentSlide, currentSlide + 3).map((service, index) => (
              <div key={index} className="bg-gray-900 p-6 group relative 
                transition-all duration-300 ease-in-out transform hover:scale-105
                hover:shadow-2xl rounded-xl
                before:absolute before:inset-0 before:bg-gradient-to-b before:from-transparent 
                before:to-orange-500/5 before:rounded-xl before:opacity-0 before:transition-opacity 
                before:duration-300 hover:before:opacity-100">
                <div className="w-12 h-12 rounded border-[#f9731b] flex items-center justify-center mb-4 text-[#f9731b] group-hover:bg-[#f9731b] group-hover:text-white transition-colors">
                  <Icon icon={service.icon} width="24" />
                </div>
                <h3 className="text-xl text-white font-semibold mb-3">{service.title}</h3>
                <p className="text-white text-sm leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>

          <button onClick={() => changeSlide(3)} className="absolute top-1/2 -right-12 transform -translate-y-1/2 p-2 rounded-full bg-gray-900 shadow-lg hover:bg-gray-50 text-[#f9731b]">
            <Icon icon="mdi:chevron-right" width="24" />
          </button>

          <div className="flex justify-center mt-8 gap-2">
            {Array.from({ length: Math.ceil(services.length / 3) }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index * 3)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${Math.floor(currentSlide / 3) === index ? "bg-orange-500 w-6" : "bg-gray-300"}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HireUs;