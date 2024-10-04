import { Icon } from "@iconify/react/dist/iconify.js";
import { motion } from "framer-motion";
import { useState } from "react";

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question:
        "How do you determine the effective marketing plan for my business?",
      answer:
        "We conduct a thorough analysis of your business goals, target audience and market trends to design a customized marketing plan that effectively aligns with your business.",
    },
    {
      question: "What is your strategy for starting a new project?",
      answer:
        "We begin with an initial discovery phase to understand your requirements. Then, we develop ",
    },
    {
      question: "How do you measure the success of your campaigns?",
      answer:
        "We measure the success of our campaigns by monitoring various key performance indicators (KPIs) such as website traffic, conversion rates, engagement metrics and return on investment (ROI).",
    },
    {
      question: "What is the pricing structure of your services?",
      answer:
        "Our pricing structure is determined based on the services selected and the overall complexity of the project. We will be happy to offer a customized estimate after discussing your requirements.",
    },
    {
      question: "What makes XSuite different from other agencies?",
      answer:
        "XSuite distinguishes itself from other agencies by prioritizing customization, ensuring data security, delivering top-tier performance and maintaining transparent communication, which leads to collaborative and effective partnership.",
    },
    {
      question:
        "How long does it take to see invaluable results from your marketing efforts?",
      answer:
        "The duration for achieving results can vary depending on the strategy and goals, but many clients start seeing initial improvements within a few months.",
    },
    {
      question: "What happens if I don’t like the direction of a project?",
      answer:
        "Your feedback is essential to us! We prioritize open communication and are ready to adjust the campaign promptly to align with your vision and expectations.",
    },
    
  ];

  return (
    <div className="font-[sans-serif]  divide-y rounded-lg max-w-7xl mx-auto px-4">
      <div className="mb-8">
        <h2 className="text-2xl font-bold !font-sans flex items-center justify-center  text-gray-800">
          Frequently Asked Questions
        </h2>
      </div>
      {faqs.map((faq, index) => (
        <div key={index} role="accordion">
          <button
            type="button"
            className="w-full text-base text-left font-semibold py-6 text-gray-800 flex items-center"
            onClick={() => toggleAccordion(index)}
          >
            <span className="mr-4">{faq.question}</span>

            {openIndex === index ? (
              <Icon
                icon="ic:round-plus"
                className={`fill-current ml-auto shrink-0 transform h-5 w-5 transition-transform duration-200 ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              />
            ) : (
              <Icon
                icon="ic:round-minus"
                className={`h-5 w-5 fill-current ml-auto shrink-0 transform transition-transform duration-200 ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              />
            )}
          </button>
          <motion.div
            className={`py-4 ${openIndex === index ? "block" : "hidden"}`}
          >
            <p className="text-sm text-gray-800">{faq.answer}</p>
          </motion.div>
        </div>
      ))}
    </div>
  );
};

export default FAQs;
