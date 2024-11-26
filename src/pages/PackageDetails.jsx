// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import FAQs from "../components/main/FAQs";
// import { motion } from "framer-motion"; // Importing framer-motion

// const PackageDetails = () => {
//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, []);

//   const packagesData = [
//     {
//       name: "Basic Package",
//       description: "Kickstart Your Digital Journey",
//       prices: {
//         monthly: 240,
//         quarterly: 600,
//         semiannual: 1200,
//       },
//       features: [
//         "1-Page Website",
//         "Basic SEO & Google Analytics Setup",
//         "Ignite Your Social Presence with 1 Platform",
//         "Clean Logo & Essential Graphic Design",
//         "On-Demand Support",
//       ],
//     },
//     {
//       name: "Standard Package",
//       description: "Elevate Your Brand to New Heights",
//       prices: {
//         monthly: 400,
//         quarterly: 1200,
//         semiannual: 2200,
//       },
//       features: [
//         "Up to 5 Pages of Mobile-Friendly Website",
//         "Comprehensive oN Page & OFF Page SEO",
//         "Manage 2 Social Media Platforms with Engaging Posts",
//         "Targeted Google Ads setup",
//         "Advanced Analytics & Strategy Sessions",
//         "Design Upgrades with Creative Freedom",
//       ],
//     },
//     {
//       name: "Premium Package",
//       description: "Dominate the Digital Space",
//       prices: {
//         monthly: 600,
//         quarterly: 1600,
//         semiannual: 3200,
//       },
//       features: [
//         "Custom-Built, Fully Optimized Website with Advanced Features",
//         "Comprehensive SEO Strategy for Top Rankings",
//         "Social Media Mastery with Premium Content & Ads",
//         "Full Google Ads Management with Strategic Retargeting",
//         "Complete Brand Makeover",
//         "24/7 Support with Your Dedicated Account Manager",
//       ],
//     },
//   ];

//   const [timeframe, setTimeframe] = useState("monthly");

//   // Handle timeframe change
//   const handleTimeframeChange = (event) => {
//     setTimeframe(event.target.value);
//   };

//   return (
//     <div className="my-auto">
//       {/* Welcome wrapper */}
//       <div className="bg-black text-white py-16 lg:py-44 relative overflow-hidden">
//         <div className="container mx-auto px-4">
//           <div className="relative z-10">
//             <h1 className="text-5xl text-center font-bold">
//               Explore Our Packages
//             </h1>
//           </div>
//         </div>
//         <div className="relative inset-0 ">
//               <div className="absolute w-96 h-96 -top-0 -left-0 bg-orange-500/20 rounded-full blur-3xl animate-pulse"></div>
//               <div className="absolute w-96 h-96 -bottom-0 -right-0 bg-orange-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
//             </div>
//       </div>

//       <div className="w-full h-auto ">
//         <div className="flex justify-center">
//           <p className="text-center font-semibold lg:text-xl text-md leading-snug mt-4">
//             At Xsuite Digital, we offer a range of carefully curated packages
//             designed to meet your unique needs and preferences. Whether
//             you&apos;re looking for comprehensive solutions or targeted
//             services, we have something for everyone. Here&apos;s a brief
//             overview of our offerings:
//           </p>
//         </div>
//       </div>

//       {/* Timeframe selection */}
//       <div className="flex justify-center items-center mt-4">
//         <label htmlFor="timeframe" className="mr-3 text-lg font-semibold">
//           Select Timeframe:
//         </label>
//         <select
//           id="timeframe"
//           value={timeframe}
//           onChange={handleTimeframeChange}
//           className="p-2 border border-gray-300 rounded focus:outline-none"
//         >
//           <option value="monthly">Monthly</option>
//           <option value="quarterly">Quarterly</option>
//           <option value="semiannual">Semi-Annual</option>
//         </select>
//       </div>

//       <motion.div
//         className="grid grid-cols-1 md:grid-cols-3 gap-6 my-10 px-10"
//         initial={{ opacity: 0, scale: 0.9 }}
//         animate={{ opacity: 1, scale: 1 }}
//         transition={{ duration: 0.5 }}
//       >
//         {packagesData.map((pkg, index) => (
//           <motion.div
//             key={index}
//             className="bg-white shadow-xl rounded-xl p-6 flex flex-col items-center justify-between relative"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.3, delay: index * 0.2 }}
//             whileHover={{
//               scale: 1.05,
//               boxShadow: "0px 10px 20px rgba(0,0,0,0.15)",
//             }}
//           >
//             <div>
//               <h2 className="text-2xl text-orange-500 text-center font-bold mb-4">{pkg.name}</h2>
//               <p className="mb-4 text-center">{pkg.description}</p>

//               {pkg.features && (
//                 <ul className="text-left ml-3 list-disc list-outside mt-4  mb-4">
//                   {pkg.features.map((feature, idx) => (
//                     <li key={idx} className="text-gray-700 mb-2">
//                       {feature}
//                     </li>
//                   ))}
//                 </ul>
//               )}
//             </div>
//             <div className="divider"></div>

//             <motion.div
//               className="mt-auto"
//               key={timeframe} // key ensures re-rendering on timeframe change
//               initial={{ opacity: 0, scale: 0.8 }}
//               animate={{ opacity: 1, scale: 1 }}
//               transition={{ duration: 0.3 }}
//             >
//               <p className="text-3xl font-bold text-orange-500 mb-4">
//                 ${pkg.prices[timeframe]}
//               </p>
//               <p className="text-sm text-gray-500">Billed {timeframe}</p>

//               <div className="mt-6 flex justify-center">
//                 <Link
//                   to="/Contact"
//                   className="hover:bg-orange-500 hover:text-black text-white py-2 px-4 rounded bg-[#373737] transition ease-in duration-200"
//                 >
//                   Get Started
//                 </Link>
//               </div>
//             </motion.div>
//           </motion.div>
//         ))}
//       </motion.div>

//       {/* <FAQs /> */}
//     </div>
//   );
// };

// export default PackageDetails;

import { useEffect, useState } from "react";
                    
                      
  import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const PackageDetails = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const packagesData = [
    {
      name: "Basic Package",
      description: "Kickstart Your Digital Journey",
      prices: {
        monthly: 240,
        quarterly: 600,
        semiannual: 1200,
      },
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
      prices: {
        monthly: 400,
        quarterly: 1200,
        semiannual: 2200,
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
        monthly: 600,
        quarterly: 1600,
        semiannual: 3200,
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
        <div className="absolute inset-0">
          <div className="absolute w-96 h-96 -top-20 -left-20 bg-orange-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute w-96 h-96 -bottom-20 -right-20 bg-orange-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
      </div>

      {/* Timeframe Selection */}
      <div className="flex justify-center items-center mt-12 mb-8">
      <label htmlFor="timeframe" className="mr-3 text-lg text-white font-semibold">
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
      <div className="container  mx-auto px-4 py-12">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {packagesData.map((pkg, index) => (
            <motion.div
              key={index}
              className={`relative bg-gray-900  rounded-2xl p-8 ${
                pkg.featured ? 'ring-2 ring-orange-500' : ''
              }`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -10, scale: 1.02 }}
              onHoverStart={() => setHoveredCard(index)}
              onHoverEnd={() => setHoveredCard(null)}
            >
              {pkg.featured && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                <p className="text-white">{pkg.description}</p>
                <div className="mt-6">
                  <span className="text-4xl font-bold text-orange-500">
                    ${pkg.prices[timeframe]}
                  </span>
                  <span className="text-white">/{timeframe}</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {pkg.features.map((feature, idx) => (
                  <motion.li
                    key={idx}
                    className="flex items-start space-x-3 text-white"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: hoveredCard === index ? idx * 0.1 : 0 }}
                  >
                    <svg className="h-6 w-6 text-orange-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{feature}</span>
                  </motion.li>
                ))}
              </ul>

              <motion.div
                className="mt-auto"
                whileHover={{ scale: 1.05 }}
              >
                <Link
                  to="/Contact"
                  className="block w-full text-center bg-black hover:bg-orange-500 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200"
                >
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