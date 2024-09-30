import { Icon } from '@iconify/react/dist/iconify.js';
import React, { useState } from 'react';

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "Are there any special discounts or promotions available during the event?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor auctor arcu, at fermentum dui. Maecenas vestibulum a turpis in lacinia.",
    },
    {
      question: "What are the dates and locations for the product launch events?",
      answer: "The product launch events will take place on various dates in different locations. Please check our website for updates.",
    },
    {
      question: "Can I bring a guest with me to the product launch event?",
      answer: "Yes, you are allowed to bring one guest. Please ensure they are registered as well.",
    },
    {
      question: "How can I register for the event?",
      answer: "You can register for the event on our website by filling out the registration form.",
    },
    {
      question: "Is there parking available at the venue?",
      answer: "Yes, there will be ample parking available at the venue.",
    },
    {
      question: "How can I contact the event organizers?",
      answer: "You can contact the event organizers via the contact form on our website or by emailing us directly.",
    },
  ];

  return (
    <div className="font-[sans-serif] divide-y rounded-lg max-w-7xl mx-auto px-4">
      <div className="mb-8">
        <h2 className="text-2xl font-bold !font-sans flex items-center justify-center  text-gray-800">Frequently Asked Questions</h2>
      </div>
      {faqs.map((faq, index) => (
        <div key={index} role="accordion">
          <button
            type="button"
            className="w-full text-base text-left font-semibold py-6 text-gray-800 flex items-center"
            onClick={() => toggleAccordion(index)}
          >
            <span className="mr-4">{faq.question}</span>
          
            {openIndex ===index ? <Icon icon="ic:round-plus"     className={`fill-current ml-auto shrink-0 transform h-5 w-5 transition-transform duration-200 ${openIndex === index ? 'rotate-180' : ''}`}  /> : <Icon icon="ic:round-minus"  className={`h-5 w-5 fill-current ml-auto shrink-0 transform transition-transform duration-200 ${openIndex === index ? 'rotate-180' : ''}`}  />}
          </button>
          <div className={`py-4 ${openIndex === index ? 'block' : 'hidden'}`}>
            <p className="text-sm text-gray-800">{faq.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FAQs;
