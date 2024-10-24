import { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Settings,
  Shield,
  HeadphonesIcon,
  LineChart,
  Globe,
  MessageCircle,
} from "lucide-react";
import Pacakages from "./Pacakages";

const HireUs = () => {
  // Declare hooks and variables here
  const [currentSlide, setCurrentSlide] = useState(0);

  const services = [
    {
      icon: <Settings className="w-6 h-6" />,
      title: "Customization",
      description:
        "We create exceptional marketing plans that align with your unique brands, ensuring every campaign resonates with your target audience.",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Security",
      description:
        "XSuite Digital prioritizes your safety, using top-notch tools and methods throughout our projects. We proactively defend against potential threats and safeguard your interests.",
    },
    {
      icon: <HeadphonesIcon className="w-6 h-6" />,
      title: "Support",
      description:
        "Our friendly team is always available to help you by providing guidance and answers to your queries. Your success is our utmost priority and we are here to help you achieve it.",
    },
    {
      icon: <LineChart className="w-6 h-6" />,
      title: "Performance",
      description:
        "We focus on utilizing advanced analytics to optimize projects in real-time, ensuring data-driven decisions that enhance efficiency and produce tangible results.",
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Global Reach",
      description:
        "XSuite Digital helps your brand's connectivity across the globe. Our strategic approach ensures your message resonates with diverse audiences, unlocking new growth opportunities.",
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: "Communication",
      description:
        "Direct and transparent communication is the heart of our agency-client relationships. We provide updates and feedback frequently to keep you informed and engaged.",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 3 >= services.length ? 0 : prev + 3));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) =>
      prev - 3 < 0 ? Math.max(0, services.length - 3) : prev - 3
    );
  };

  return (
    <div className="hidden lg:block">
      <h1 className="text-black p-4 tracking-wider font-sans font-bold flex items-center justify-center text-3xl lg:text-3xl">
        Reasons to Team up with XSuite Digital Marketing Agency
      </h1>

      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="relative">
          {/* Navigation Buttons */}
          <div className="absolute top-1/2 -left-12 transform -translate-y-1/2">
            <button
              onClick={prevSlide}
              className="p-2 rounded-full bg-white shadow-lg hover:bg-gray-50 transition-colors text-[#f9731b]"
            >
              <ChevronLeft size={24} />
            </button>
          </div>

          {/* Cards Container */}
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            {services
              .slice(currentSlide, currentSlide + 3)
              .map((service, index) => (
                <div
                  key={index}
                  className="bg-white p-6 hover:border-[#f9731b] border-2 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg group"
                >
                  {/* Icon Container */}
                  <div className="w-12 h-12 rounded border-[#f9731b] flex items-center justify-center mb-4 text-[#f9731b] group-hover:bg-[#f9731b] group-hover:text-white transition-colors">
                    {service.icon}
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              ))}
          </div>

          {/* Right Navigation Button */}
          <div className="absolute top-1/2 -right-12 transform -translate-y-1/2">
            <button
              onClick={nextSlide}
              className="p-2 rounded-full bg-white shadow-lg hover:bg-gray-50 transition-colors text-[#f9731b]"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center mt-8 gap-2">
            {Array.from({ length: Math.ceil(services.length / 3) }).map(
              (_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index * 3)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    Math.floor(currentSlide / 3) === index
                      ? "bg-amber-500 w-6"
                      : "bg-gray-300"
                  }`}
                />
              )
            )}
          </div>
        </div>
      </div>
      <Pacakages />
    </div>
  );
};

export default HireUs;
