import { FaCode, FaBullhorn, FaSearch, FaHashtag, FaChartLine, FaPaintBrush } from "react-icons/fa";
import { MdAnalytics, } from "react-icons/md";
import { SiGoogleads } from "react-icons/si";
import { BiSearchAlt } from "react-icons/bi";


import Web from "../SubServices/Web";
import GoogleAnalytics from "../SubServices/GoogleAnalytics";
import DigitalMarketing from "../SubServices/DigitalMarketing";
import SEO from "../SubServices/SEO";
import SocialMedia from "../SubServices/SocialMedia";
import PPC from "../SubServices/PPC";
import GSConsole from "../SubServices/GSConsole";
import GoogleAd from "../SubServices/GoogleAd";
import Graphic from "../SubServices/Graphic";
// Navigation Tabs Data

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
      {
        name: "Google My Business Optimization",
        path: "google-my-business-optimization",
      },
    ],
  },
  { name: "Contact", path: "/contact" },
];




export const servicesInfo = [
  {
    id: "01",
    title: "Web Development",
    description:
      "Build a responsive and optimized website with our development services",
    icon: <FaCode />,
    item: <Web />,
    path: "Web",
  },
  {
    id: "02",
    title: "Google Analytics",
    description:
      "Get deep insights into your audience and traffic with Google Analytics",
    icon: <MdAnalytics />, // Updated to a relevant analytics icon
    item: <GoogleAnalytics />,
    path: "GoogleAnalytics",
  },
  {
    id: "03",
    title: "Digital Marketing",
    description:
      "Maximize your brand's reach with our digital marketing strategies.",
    icon: <FaBullhorn />,
    item: <DigitalMarketing />,
    path: "DigitalMarketing",
  },
  {
    id: "04",
    title: "SEO (Search Engine Optimization)",
    description:
      "Improve your website’s ranking on search engines with our expert SEO service.",
    icon: <FaSearch />,
    item: <SEO />,
    path: "SEO",
  },
  {
    id: "05",
    title: "Social Media Marketing",
    description:
      "Engage your audience across social platforms with our marketing solutions.",
    icon: <FaHashtag />,
    item: <SocialMedia />,
    path: "SocialMedia",
  },
  {
    id: "06",
    title: "PPC Campaign",
    description:
      "Our PPC Campaign service helps you drive targeted traffic to your website.",
    icon: <FaChartLine />,
    item: <PPC />,
    path: "PPC",
  },
  {
    id: "07",
    title: "Google Search Console",
    description:
      "Utilize Google Search Console for improved search engine visibility.",
    icon: <BiSearchAlt />, // Updated to a relevant search-related icon
    item: <GSConsole />,
    path: "GSConsole",
  },
  {
    id: "08",
    title: "Google Ads",
    description:
      "Enhance your local presence with Google My Business Optimization.",
    icon: <SiGoogleads />, // Updated to a Google Ads-specific icon
    item: <GoogleAd />,
    path: "GoogleAd",
  },
  {
    id: "09",
    title: "Graphic Designing",
    description:
      "Enhance your brand's design with our expert graphic designing service.",
    icon: <FaPaintBrush />,
    item: <Graphic />,
    path: "Graphic",
  },
];
