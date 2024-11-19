import { useState } from "react";
import { Icon } from "@iconify/react";

const HireUs = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const services = [
    {
      icon: "mdi:settings",
      title: "Customization",
      description:
        "We create exceptional marketing plans that align with your unique brands, ensuring every campaign resonates with your target audience.",
    },
    {
      icon: "mdi:shield-check",
      title: "Security",
      description:
        "XSuite Digital prioritizes your safety, using top-notch tools and methods throughout our projects.",
    },
    {
      icon: "mdi:headphones",
      title: "Support",
      description:
        "Our friendly team is always available to help you by providing guidance and answers to your queries.",
    },
    {
      icon: "mdi:chart-line",
      title: "Performance",
      description:
        "We focus on utilizing advanced analytics to optimize projects in real-time, ensuring data-driven decisions.",
    },
    {
      icon: "mdi:globe",
      title: "Global Reach",
      description:
        "XSuite Digital helps your brand's connectivity across the globe, unlocking new growth opportunities.",
    },
    {
      icon: "mdi:message-text",
      title: "Communication",
      description:
        "Direct and transparent communication is the heart of our agency-client relationships.",
    },
  ];

  const changeSlide = (direction) => {
    setCurrentSlide((prev) => {
      const newSlide = prev + direction;
      return (newSlide < 0) ? Math.max(0, services.length - 3) : (newSlide + 3 >= services.length ? 0 : newSlide);
    });
  };


  

  return (
    <div className="hidden lg:block">
      <h1 className="text-black p-4 tracking-wider font-sans font-bold flex items-center justify-center text-3xl lg:text-3xl">
        Reasons to Team up with XSuite Digital Marketing Agency
      </h1>

      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="relative">
          <button onClick={() => changeSlide(-3)} className="absolute top-1/2 -left-12 transform -translate-y-1/2 p-2 rounded-full bg-white shadow-lg hover:bg-gray-50 text-[#f9731b]">
            <Icon icon="mdi:chevron-left" width="24" />
          </button>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            {services.slice(currentSlide, currentSlide + 3).map((service, index) => (
              <div key={index} className="bg-white p-6 border-2 rounded-lg shadow-md hover:border-[#f9731b] transition-all duration-300 hover:shadow-lg group">
                <div className="w-12 h-12 rounded border-[#f9731b] flex items-center justify-center mb-4 text-[#f9731b] group-hover:bg-[#f9731b] group-hover:text-white transition-colors">
                  <Icon icon={service.icon} width="24" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">{service.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>

          <button onClick={() => changeSlide(3)} className="absolute top-1/2 -right-12 transform -translate-y-1/2 p-2 rounded-full bg-white shadow-lg hover:bg-gray-50 text-[#f9731b]">
            <Icon icon="mdi:chevron-right" width="24" />
          </button>

          <div className="flex justify-center mt-8 gap-2">
            {Array.from({ length: Math.ceil(services.length / 3) }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index * 3)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${Math.floor(currentSlide / 3) === index ? "bg-amber-500 w-6" : "bg-gray-300"}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HireUs;