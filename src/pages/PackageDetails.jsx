import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Discount from "../components/main/DiscountPage";

const PackageDetails = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const packagesData = [
    {
      name: "Basic Package",
      description: "Kickstart Your Digital Journey",
      prices: {
        monthly: "33,000",
        quarterly: "93,000",
        semiannual: "18,3000",
      },
      features: [
        "1-2 Page Website",
        "Basic SEO & Google Analytics Setup",
        "Ignite Your Social Presence with 1 Platform",
        "Clean Logo & Essential Graphic Design",
        "On-Demand Support",
      ],
    },
    {
      name: "Standard Package",
      description: "Elevate Your Brand to New Heights",
      prices: {
        monthly: "58,000",
        quarterly: "16,8000",
        semiannual: "33,3000",
      },
      features: [
        "Up to 5 Pages of Mobile-Friendly Website",
        "Comprehensive oN Page & OFF Page SEO",
        "Manage 2 Social Media Platforms with Engaging Posts",
        "Targeted Google Ads setup",
        "Advanced Analytics & Strategy Sessions",
        "Design Upgrades with Creative Freedom",
      ],
      featured: true,
    },
    {
      name: "Premium Package",
      description: "Dominate the Digital Space",
      prices: {
        monthly: "83,000",
        quarterly: "24,3000",
        semiannual: "48,3000",
      },
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

  const [timeframe, setTimeframe] = useState("monthly");
  const [hoveredCard, setHoveredCard] = useState(null);

  const handleTimeframeChange = (event) => {
    setTimeframe(event.target.value);
  };

  return (
    <div className="min-h-screen bg-black">
            <Discount/>

      {/* Header Section */}
      <div className="bg-black text-white py-20 lg:py-32 relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="container mx-auto px-4 relative z-10"
        >
          <h1 className="text-5xl lg:text-6xl text-center font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-orange-600">
            Explore Our Packages
          </h1>
          <p className="text-lg text-center mt-6 text-gray-300 max-w-2xl mx-auto">
            Choose the perfect plan to elevate your digital presence
          </p>
        </motion.div>
      </div>

      {/* Timeframe Selection */}
      <div className="flex justify-center items-center mt-12 mb-8">
        <label
          htmlFor="timeframe"
          className="mr-3 text-lg text-white font-semibold"
        >
          Select Timeframe:
        </label>
        <motion.div
          className="bg-taransparent border-2 border-orange-500 rounded-lg shadow-lg p-2 inline-flex items-center space-x-2"
          whileHover={{ scale: 1.02 }}
        >
          <select
            value={timeframe}
            onChange={handleTimeframeChange}
            className="p-2 text-lg font-medium bg-transparent border-none focus:outline-none text-orange-500"
          >
            <option value="monthly">Monthly</option>
            <option value="quarterly">Quarterly</option>
            <option value="semiannual">Semi-Annual</option>
          </select>
        </motion.div>
      </div>

      {/* Pricing Cards */}
      <div className="container mx-auto px-4 py-12">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {packagesData.map((pkg, index) => (
            <motion.div
              key={index}
              className={`relative bg-gray-900 rounded-2xl p-8 ${pkg.featured ? "ring-2 ring-orange-500" : ""}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -10, scale: 1.02 }}
              onHoverStart={() => setHoveredCard(index)}
              onHoverEnd={() => setHoveredCard(null)}
            >
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                <p className="text-white">{pkg.description}</p>
                <div className="mt-6">
                  <span className="text-xl text-gray-500 line-through">
                    PKR {pkg.prices[timeframe]}
                  </span>
                  <br />
                  <span className="text-3xl font-bold text-orange-500">
                  PKR {Math.round(Number(pkg.prices[timeframe].replace(/,/g, "")) * 0.7).toLocaleString()}

                  </span>
                  <span className="text-white">/{timeframe}</span>
                </div>
              </div>
              <ul className="space-y-4 mb-8">
                {pkg.features.map((feature, idx) => (
                  <motion.li key={idx} className="flex items-start space-x-3 text-white">
                    <span>{feature}</span>
                  </motion.li>
                ))}
              </ul>
              <motion.div className="mt-auto" whileHover={{ scale: 1.05 }}>
                <Link to="/Contact" className="block w-full text-center bg-black hover:bg-orange-500 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200">
                  Get Started
                </Link>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default PackageDetails;