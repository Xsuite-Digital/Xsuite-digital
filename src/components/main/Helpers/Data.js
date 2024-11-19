// Data.js
// Data.js

export const navbarTabs = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  {
    name: "Services",
    path: "/services",
    dropdown: [
      { name: "PPC Campaign", path: "ppc-campaign" },
      { name: "SEO", path: "seo" },
      { name: "Google Analytics", path: "google-analytics" },
      { name: "Digital Marketing", path: "digital-marketing" },
      { name: "Website Development", path: "website-development" },
      { name: "Google Search Console", path: "google-search-console" },
      { name: "Social Media Marketing", path: "social-media-marketing" },
      { name: "Google My Business Optimization", path: "google-my-business-optimization" }
    ]
  },
  { name: "Contact", path: "/contact" },
];



export const servicesData = [
  {
    name: "PPC Campaign",
    path: "ppc-campaign",
    description: "Our PPC Campaign service helps you drive targeted traffic to your website.",
    imgSrc: "/ppc3-min.webp", // Replace with the correct image path
  },
  {
    name: "SEO",
    path: "seo",
    description: "Improve your website’s ranking on search engines with our expert SEO service.",
    imgSrc: "/SEO2.webp", // Replace with the correct image path
  },
  {
    name: "Google Analytics",
    path: "google-analytics",
    description: "Get deep insights into your audience and traffic with Google Analytics.",
    imgSrc: "/GA.webp", // Replace with the correct image path
  },
  {
    name: "Digital Marketing",
    path: "digital-marketing",
    description: "Maximize your brand's reach with our comprehensive digital marketing strategies.",
    imgSrc: "/DG-min.webp", // Replace with the correct image path
  },
  {
    name: "Website Development",
    path: "website-development",
    description: "Build a responsive and optimized website with our development services.",
    imgSrc: "/web3-min.webp", // Replace with the correct image path
  },
  {
    name: "Google Search Console",
    path: "google-search-console",
    description: "Utilize Google Search Console for improved search engine visibility.",
    imgSrc: "/sc1.png", // Replace with the correct image path
  },
  {
    name: "Social Media Marketing",
    path: "social-media-marketing",
    description: "Engage your audience across social platforms with our marketing solutions.",
    imgSrc: "/DG-min.webp", // Replace with the correct image path
  },
  {
    name: "Google My Business Optimization",
    path: "google-my-business-optimization",
    description: "Enhance your local presence with Google My Business Optimization.",
    imgSrc: "/GMBO-min.webp", // Replace with the corbprect image path
  },
];
