import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import FAQs from "../components/main/FAQs";

const PackageDetails = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const packagesData = [
    {
      name: "Basic Package",
      description: "Kickstart Your Digital Journey",
      prices: { quarterly: 50, semiAnnual: 120, annual: 400 },
      features: [
        "1-Page Website",
        "Basic SEO & Google Analytics Setup",
        "Ignite Your Social Presence with 1 Platform",
        "Clean Logo & Essential Graphic Design",
        "On-Demand Support",
      ],
    },
    {
      name: "Standard Package",
      description: "Elevate Your Brand to New Heights",
      prices: { quarterly: 100, semiAnnual: 260, annual: 850 },
      features: [
        "Up to 5 Pages of Mobile-Friendly Website",
        "Comprehensive On-Page & Off-Page SEO",
        "Manage 2 Social Media Platforms with Engaging Posts",
        "Targeted Google Ads Setup",
        "Advanced Analytics & Strategy Sessions",
        "Design Upgrades with Creative Freedom",
      ],
    },
    {
      name: "Premium Package",
      description: "Dominate the Digital Space",
      prices: { quarterly: 200, semiAnnual: 520, annual: 1800 },
      features: [
        "Custom-Built, Fully Optimized Website with Advanced Features",
        "Comprehensive SEO Strategy for Top Rankings",
        "Social Media Mastery with Premium Content & Ads",
        "Full Google Ads Management with Strategic Retargeting",
        "Complete Brand Makeover",
        "24/7 Support with Your Dedicated Account Manager",
      ],
    },
  ];

  const [timeframe, setTimeframe] = useState("quarterly");

  return (
    <div className="my-auto">
      {/* Welcome wrapper */}
      <div className="bg-black text-white py-16 lg:py-44 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="relative z-10">
            <h1 className="text-3xl lg:text-5xl text-center font-bold">
              Explore Our Packages
            </h1>
          </div>
        </div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute z-20 right-0 top-0 w-96 h-96 bg-orange-500 rounded-full -translate-y-1/2 translate-x-1/2 shadow-[0_0_50px_20px_rgba(238, 159, 12, 0.8)]"></div>
          <div className=" left-0 bottom-0 w-96 h-96 bg-orange-500 rounded-full -translate-y-1/2 translate-x-1/2 shadow-[0_0_50px_20px_rgba(247, 162, 6, 0.8)]"></div>
        </div>
      </div>

      {/* Introduction Section */}
      <div className="w-full px-4 sm:px-8 lg:px-16 py-8">
        <div className="flex flex-col items-center">
          <p className="text-center text-lg lg:text-xl font-semibold leading-snug mt-4">
            At Xsuite Digital, we offer a range of carefully curated packages
            designed to meet your unique needs and preferences. Whether you&apos;re
            looking for comprehensive solutions or targeted services, we have
            something for everyone.
          </p>
        </div>
      </div>

      {/* Timeframe Dropdown */}
      <div className="flex flex-col sm:flex-row justify-center items-center mb-8 px-4">
        <label
          htmlFor="timeframe"
          className="text-center sm:text-left mb-2 sm:mb-0 mr-0 sm:mr-3 text-lg font-semibold text-black"
        >
          Select Timeframe:
        </label>
        <select
          id="timeframe"
          value={timeframe}
          onChange={(e) => setTimeframe(e.target.value)}
          className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
        >
          <option value="quarterly">Quarterly</option>
          <option value="semiAnnual">Semi-Annual</option>
          <option value="annual">Annual</option>
        </select>
      </div>

      {/* Package Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 sm:px-8 lg:px-16 mb-10">
        {packagesData.map(({ name, description, prices, features }, index) => (
          <div
            key={index}
            className="flex flex-col bg-white shadow-lg rounded-lg border border-gray-200 transition duration-300 hover:shadow-md hover:border-orange-500 overflow-hidden"
          >
            <div className="p-6 flex-grow">
              <h3 className="text-xl lg:text-2xl font-bold text-orange-500 mb-4">
                {name}
              </h3>
              <p className="text-gray-700 mb-2">{description}</p>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                {features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
            </div>
            <div className="p-6 border-t border-gray-300 text-center">
              <p className="text-2xl lg:text-3xl font-bold text-orange-500 mb-2">
                ${prices[timeframe]}
              </p>
              <p className="text-sm text-gray-500 mb-4">Billed {timeframe}</p>
              <Link
                to="/Contact"
                className="bg-gray-800 text-white py-2 px-4 rounded hover:bg-orange-600 transition duration-200"
              >
                Get Started
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* FAQs Section */}
      <FAQs />
    </div>
  );
};

export default PackageDetails;
