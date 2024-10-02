import { useState } from "react";
import { Icon } from "@iconify/react/dist/iconify.js";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
 
  {
    imageSrc: "/p1.jpg",
    quote: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil distinctio, unde perferendis pariatur quasi consequatur?",
    name: "Simon Konecki",
    position: "Founder of Labar",
    rating: 3,
  },
  {
    imageSrc: "/p2.jpg",
    quote: "Veniam proident aute magna anim excepteur et ex consectetur velit ullamco veniam minim aute sit. Elit occaecat officia et laboris Lorem minim. Officia do aliqua adipisicing ullamco in.",
    name: "Simon Konecki",
    position: "Founder of Labar",
    rating: 3,
  },
  {
    imageSrc: "p3.jpg",
    quote: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus iure error hic ea eius expedita praesentium nisi nam tempore debitis quo, molestiae repudiandae ex. Quod.",
    name: "Simon Konecki",
    position: "Founder of Labar",
    rating: 3,
  },
];

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="max-w-4xl mx-auto p-6 font-[sans-serif]">
      <div className="mb-12">
        <h2 className="text-gray-800 font-sans flex items-center justify-center text-3xl font-bold">
          What our happy clients say
        </h2>
      </div>

      <div className="relative">
        <AnimatePresence mode="wait">
          {/* Only the current testimonial is visible */}
          <motion.div
            key={currentIndex}
            className="min-w-full flex flex-col items-center"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
          >
            <motion.img
              src={testimonials[currentIndex].imageSrc}
              className="w-[280px] rounded-lg shadow-[-20px_20px_0px_rgba(23,219,220,1)] mb-4"
              alt={`Testimonial from ${testimonials[currentIndex].name}`}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
            />
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
            >
              <Icon
                icon="ci:double-quotes-l"
                className="text-[#17dbdc] h-10 w-10 mb-2"
              />
            </motion.div>
            <motion.p
              className="text-gray-800 text-lg leading-relaxed text-center"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
            >
              {testimonials[currentIndex].quote}
            </motion.p>
            <motion.p
              className="text-gray-500 mt-2"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
            >
              {testimonials[currentIndex].name}
            </motion.p>
            <motion.p
              className="text-gray-500"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
            >
              {testimonials[currentIndex].position}
            </motion.p>
          </motion.div>
        </AnimatePresence>

        {/* Navigation buttons */}
        <div className="flex justify-evenly mt-4">
          <div
            onClick={prevTestimonial}
            className="cursor-pointer rounded-full border border-black p-2"
          >
            <Icon icon="fluent:arrow-left-48-filled" width="21" height="21" />
          </div>
          <div
            onClick={nextTestimonial}
            className="cursor-pointer rounded-full border border-black p-2"
          >
            <Icon icon="fluent:arrow-right-48-filled" width="21" height="21" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
