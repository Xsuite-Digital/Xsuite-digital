import { Icon } from "@iconify/react/dist/iconify.js";
import { motion } from "framer-motion";
import { useState } from "react";



const CompanyAbout = () => {
  return (
    <div>
      {" "}
      <div className="bg-black text-white py-12">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
          {/* FAQs Section */}
          

          {/* About Section */}
          <div className="flex flex-col w-full md:w-1/2 p-4 space-y-6">
           
            <h1 className="text-4xl md:text-5xl font-bold text-white">
            Your Partner in <span className="text-orange-500">Digital </span>{""}
            Exellence
          </h1>
            <p className="leading-relaxed text-lg text-white">
              At Xsuite Digital, creativity and technology go hand in hand. In
              addition, our passionate team of marketing professionals combines
              imaginative thinking with the latest progressive enhancements to
              develop targeted solutions to satisfy your digital essentials. We
              strive to connect your brands with global audiences, enhancing
              your market's identity prominence and interaction. Whether you are
              looking to boost your digital presence, drive conversion, or build
              brand loyalty, our marketing firm is here to support you in
              achieving lasting success.
            </p>
         
          </div>
          <FAQSection />
        </div>
      </div>
    </div>
  );
};
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
    <div className="flex flex-col bg-black w-full h-auto md:w-1/2 p-4 space-y-4 mt-24">
      {faqs.map((faq, index) => (
        <div
          key={index}
          className="bg-gray-800 text-white p-4 rounded-lg cursor-pointer "
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



export default CompanyAbout;
