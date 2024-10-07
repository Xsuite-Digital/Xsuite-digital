import { Icon } from "@iconify/react/dist/iconify.js";

const Testimonial = () => {
  const testimonials = [
    {
      name: "Holden Caulfield",
      role: "UI DEVELOPER",
      text: "Our brand needed a fresh take on digital marketing, and this agency delivered...",
      imgSrc: "/p1.webp",
      rating: 5,
    },
    {
      name: "Alper Kamu",
      role: "DESIGNER",
      text: "I appreciate how transparent this marketing agency has been throughout our project...",
      imgSrc: "/p2-min.webp",
      rating: 4,
    },
    {
      name: "Alper Kamu",
      role: "DESIGNER",
      text: "I appreciate how transparent this marketing agency has been throughout our project...",
      imgSrc: "/p2-min.webp",
      rating: 4,
    },
  ];

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <h1 className="flex justify-center font-bold tracking-wider text-lg lg:text-3xl mb-4 text-black">
          What clients say?
        </h1>
        <div className="flex mt-6 justify-center">
          <div className="w-16 h-1 rounded-full bg-black inline-flex" />
        </div>
        <div className="flex flex-wrap -m-4 rounded-md mb-5">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="w-full sm:w-[350px] h-[27rem] p-4 mx-auto shadow-md rounded-xl relative group hover:scale-105 duration-300"
            >
              <div className="h-full bg-gray-100 p-8 rounded">
                {/* Star Rating */}
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i}>
                      {i < testimonial.rating ? (
                        <span><Icon icon="ic:round-star" width="21" height="21"   /></span> 
                      ) : (
                        <span><Icon icon="mynaui:star" width="20" height="20"   /></span> 
                      )}
                    </span>
                  ))}
                </div>
                <p className="leading-relaxed mb-6 text-sm sm:text-base">{testimonial.text}</p>
                <div className="inline-flex items-center">
                  <img
                    alt="testimonial"
                    src={testimonial.imgSrc}
                    className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
                    loading="lazy"
                  />
                  <span className="flex-grow flex flex-col pl-4">
                    <span className="title-font font-medium text-gray-900">{testimonial.name}</span>
                    <span className="text-gray-600 text-sm">{testimonial.role}</span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;