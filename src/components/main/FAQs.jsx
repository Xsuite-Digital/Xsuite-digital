import { Icon } from "@iconify/react/dist/iconify.js";
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
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor auctor arcu, at fermentum dui. Maecenas vestibulum a turpis in lacinia.",
    },
    {
      question: "What is your strategy for starting a new project?",
      answer:
        "The product launch events will take place on various dates in different locations. Please check our website for updates.",
    },
    {
      question: "How do you measure the success of your campaigns?",
      answer:
        "Yes, you are allowed to bring one guest. Please ensure they are registered as well.",
    },
    {
      question: "What is the pricing structure of your services?",
      answer:
        "You can register for the event on our website by filling out the registration form.",
    },
    {
      question: "What makes XSuite different from other agencies?",
      answer: "Yes, there will be ample parking available at the venue.",
    },
    {
      question:
        "How long does it take to see invaluable results from your marketing efforts?",
      answer:
        "You can contact the event organizers via the contact form on our website or by emailing us directly.",
    },
    {
      question: "What happens if I don’t like the direction of a project?",
      answer:
        "You can contact the event organizers via the contact form on our website or by emailing us directly.",
    },
    {
      question: "How do you stay updated with the latest marketing trends?",
      answer:
        "You can contact the event organizers via the contact form on our website or by emailing us directly.",
    },
    {
      question:
        "What should I expect in the first few months of collaborating with you?",
      answer:
        "You can contact the event organizers via the contact form on our website or by emailing us directly.",
    },
    {
      question:
        "How do you make sure my brand stands out in the competitive market?",
      answer:
        "You can contact the event organizers via the contact form on our website or by emailing us directly.",
    },
  ];

  return (
    <div className="font-[sans-serif] divide-y rounded-lg max-w-7xl mx-auto px-4">
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
          <div className={`py-4 ${openIndex === index ? "block" : "hidden"}`}>
            <p className="text-sm text-gray-800">{faq.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FAQs;
