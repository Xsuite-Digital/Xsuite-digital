import { Icon } from "@iconify/react/dist/iconify.js";
import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";

const FAQSection = () => {
  const [selected, setSelected] = useState(null);

  const toggleFAQ = (index) => {
    setSelected(selected === index ? null : index);
  };

  const faqs = [
    {
      question: "01. Our History",
      answer:
        "XSuite was founded to help businesses grow through innovative digital marketing. With expertise in SEO, PPC, and social media marketing, we've built a strong reputation for delivering results that drive online success.",
    },
    {
      question: "02. Our Mission",
      answer:
        "XSuite aims to be a leader in digital marketing, empowering businesses to thrive online. Our vision is to deliver cutting-edge solutions that increase brand visibility, engagement, and long-term growth.",
    },
    {
      question: "03. Our Vision",
      answer:
        "Our mission at XSuite is to provide data-driven digital marketing strategies that boost online visibility and drive conversions. We specialize in SEO, PPC, and social media to help businesses grow in the digital space.",
    },
  ];

  return (
    <div className="flex flex-col w-full md:w-1/2 p-4 space-y-4">
      {faqs.map((faq, index) => (
        <div
          key={index}
          className="bg-black text-white p-4 rounded-lg cursor-pointer"
          onClick={() => toggleFAQ(index)}
        >
          <div className="flex justify-between items-center">
            <h4 className="font-bold">{faq.question}</h4>
            <span>
              {selected === index ? (
                <Icon
                  icon="ic:round-minus"
                  className={`fill-current ml-auto shrink-0 transform h-5 w-5 transition-transform duration-200 ${
                    selected === index ? "rotate-180" : ""
                  }`}
                />
              ) : (
                <Icon
                  icon="ic:round-plus"
                  className={`fill-current ml-auto shrink-0 transform h-5 w-5 transition-transform duration-200 ${
                    selected === index ? "rotate-180" : ""
                  }`}
                />
              )}
            </span>
          </div>

          {/* Animate the content reveal */}
          {selected === index && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <p className="mt-2 text-gray-300">{faq.answer}</p>
            </motion.div>
          )}
        </div>
      ))}
    </div>
  );
};

const CompanyAbout = () => {
  return (
    <div>
      {" "}
      <div className="bg-white text-black py-12">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
          {/* FAQs Section */}
          <FAQSection />

          {/* About Section */}
          <div className="flex flex-col w-full md:w-1/2 p-4 space-y-6">
            <button className="bg-gray-200 text-black px-4 py-2 rounded-full w-max">
              Who We Are
            </button>
            <h1 className="text-4xl font-sans font-bold">About Our Company</h1>
            <p className="leading-relaxed">
              Raise your digital impact to new heights with our partnership,
              where imaginations meet with expertise. From optimizing websites
              for search engines to creating engaging content and managing your
              social media platforms, we provide effective solutions to make
              your brand shine brighter in the competitive market. At XSuite
              Digital, we aim to set unique standards for outstanding work and
              recognition and drive sustainable growth for your brand. Our
              experts have the ability and the authentic tools to manage your
              digital demands.
            </p>
            <Link to="/About">
              <button className="bg-black  text-white px-6 py-3 rounded-full mt-4">
                Learn More →
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyAbout;
