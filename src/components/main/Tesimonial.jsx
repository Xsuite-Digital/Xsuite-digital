import { useState } from "react";
import { Icon } from "@iconify/react/dist/iconify.js";

const testimonials = [
  {
    image: "https://readymadeui.com/profile_5.webp",
    quote: "Veniam proident aute magna anim excepteur et ex consectetur velit ullamco veniam minim aute sit. Elit occaecat officia et laboris Lorem minim. Officia do aliqua adipisicing ullamco in.",
    name: "Simon Konecki",
    position: "Founder of Labar",
    rating: 3,
  },
  {
    image: "https://readymadeui.com/profile_5.webp",
    quote: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil distinctio, unde perferendis pariatur quasi consequatur?",
    name: "Simon Konecki",
    position: "Founder of Labar",
    rating: 3,
  },
  {
    image: "https://readymadeui.com/profile_5.webp",
    quote: "Veniam proident aute magna anim excepteur et ex consectetur velit ullamco veniam minim aute sit. Elit occaecat officia et laboris Lorem minim. Officia do aliqua adipisicing ullamco in.",
    name: "Simon Konecki",
    position: "Founder of Labar",
    rating: 3,
  },
  {
    image: "https://readymadeui.com/profile_5.webp",
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
        <h2 className="text-gray-800 font-sans flex items-center justify-center  text-3xl font-bold">What our happy clients say</h2>
      </div>

      <div className="relative">
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {testimonials.map((testimonial, index) => (
            <div key={index} className="min-w-full flex flex-col items-center">
              <img
                src={testimonial.image}
                className="w-[280px]  rounded-lg shadow-[-20px_20px_0px_rgba(23,219,220,1)] mb-4"
                alt={`Testimonial from ${testimonial.name}`}
              />
              <Icon icon="ci:double-quotes-l" className="text-[#17dbdc] h-10 w-10 mb-2" />
              <p className="text-gray-800  text-lg leading-relaxed text-center">{testimonial.quote}</p>
              {/* <p className="text-gray-500 mt-2">{testimonial.name}</p>
              <p className="text-gray-500">{testimonial.position}</p> */}
            </div>
          ))}
        </div>

        <div className="flex justify-evenly mt-4">
          <div onClick={prevTestimonial} className="cursor-pointer rounded-full border border-black p-2 ">
            <Icon icon="fluent:arrow-left-48-filled" width="21" height="21" />
          </div>
          <div onClick={nextTestimonial} className="cursor-pointer rounded-full border border-black p-2 ">
            <Icon icon="fluent:arrow-right-48-filled" width="21" height="21" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
