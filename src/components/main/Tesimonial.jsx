
// import { Icon } from "@iconify/react/dist/iconify.js";
                    
                      
  
// const Testimonial = () => {
//   const testimonials = [
//     {
//       name: "Holden Caulfield",
//       role: "UI DEVELOPER",
//       text: "Our brand needed a fresh take on digital marketing, and this agency delivered...",
//       imgSrc: "/p1.webp",
//       rating: 5,
//     },
//     {
//       name: "Jenny Wilson",
//       role: "DESIGNER HEAD",
//       text: "I appreciate how transparent this marketing agency has been throughout our project...",
//       imgSrc: "/p2-min.webp",
//       rating: 4,
//     },
//     {
//       name: "Alper Kamu",
//       role: "ART DIRECTOR",
//       text: "I truly value the openness and clear communication this marketing agency has maintained during our collaboration.",
//       imgSrc: "/p3-min.webp",
//       rating: 4,
//     },
//   ];
//   return (
//     <section className="text-gray-600 bg-white body-font mt-[-16]">
//       <div className="container px-3 py-24 mx-auto">
//         <h1 className="flex justify-center font-bold tracking-wider text-lg lg:text-3xl mb-4 text-black animate-fade-in">
//           What clients say?
//         </h1>
//         <div className="flex mt-6 justify-center">
//           <div className="w-16 h-1 rounded-full bg-gray-200 inline-flex" />
//         </div>
//         <div className="flex flex-wrap -m-4 rounded-md mb-5">
//           {testimonials.map((testimonial, index) => (
//             <div
//               key={index}
//               className="w-full sm:w-[350px] h-[25rem] p-4 mx-auto group relative 
//                 transition-all duration-300 ease-in-out transform hover:scale-105
//                 hover:shadow-xl rounded-xl
//                 before:absolute before:inset-0 before:bg-gradient-to-b before:from-transparent 
//                 before:to-black/5 before:rounded-xl before:opacity-0 before:transition-opacity 
//                 before:duration-300 hover:before:opacity-100"
//             >
//               <div className="h-full bg-white p-8 rounded-xl border border-gray-100 
//                 transition-all duration-300 hover:border-gray-200 relative z-10
//                 shadow-sm hover:shadow-md">
//                 {/* Star Rating */}
//                 <div className="flex text-orange-500 items-center mb-4 transition-transform duration-300 group-hover:scale-110">
//                   {[...Array(5)].map((_, i) => (
//                     <span key={i} className="transition-all duration-300 hover:scale-125">
//                       {i < testimonial.rating ? (
//                         <span>
//                           <Icon icon="ic:round-star" width="21" height="21" />
//                         </span>
//                       ) : (
//                         <span>
//                           <Icon icon="mynaui:star" width="20" height="20" />
//                         </span>
//                       )}
//                     </span>
//                   ))}
//                 </div>
//                 <p className="leading-relaxed mb-6 text-black text-sm sm:text-base
//                   transition-all duration-300 group-hover:text-gray-800">
//                   {testimonial.text}
//                 </p>
//                 <div className="inline-flex items-center transition-transform duration-300 group-hover:translate-y-[-4px]">
//                   <img
//                     alt="testimonial"
//                     src={testimonial.imgSrc}
//                     className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center
//                       transition-transform duration-300 group-hover:scale-110"
//                     loading="lazy"
//                   />
//                   <span className="flex-grow flex flex-col pl-4">
//                     <span className="title-font font-medium text-black transition-colors duration-300 group-hover:text-gray-900">
//                       {testimonial.name}
//                     </span>
//                     <span className="text-gray-600 text-sm transition-colors duration-300 group-hover:text-gray-700">
//                       {testimonial.role}
//                     </span>
//                   </span>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Testimonial;

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
      name: "Jenny Wilson",
      role: "DESIGNER HEAD",
      text: "I appreciate how transparent this marketing agency has been throughout our project...",
      imgSrc: "/p2-min.webp",
      rating: 4,
    },
    {
      name: "Alper Kamu",
      role: "ART DIRECTOR",
      text: "I truly value the openness and clear communication this marketing agency has maintained during our collaboration.",
      imgSrc: "/p3-min.webp",
      rating: 4,
    },
  ];
  return (
    <section className="bg-black body-font mt-[-16]">
      <div className="container px-3 py-24 mx-auto">
        <h1 className="flex justify-center font-bold tracking-wider text-lg lg:text-3xl mb-4 text-white">
          What clients say?
        </h1>
        <div className="flex mt-6 justify-center">
          <div className="w-16 h-1 rounded-full bg-orange-500 mb-5 inline-flex" />
        </div>
        <div className="flex flex-wrap -m-4 rounded-md mb-5">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="w-full sm:w-[350px] h-[25rem] p-4 mx-auto group relative 
                transition-all duration-300 ease-in-out transform hover:scale-105
                hover:shadow-2xl rounded-xl
                before:absolute before:inset-0 before:bg-gradient-to-b before:from-transparent 
                before:to-orange-500/5 before:rounded-xl before:opacity-0 before:transition-opacity 
                before:duration-300 hover:before:opacity-100"
            >
              <div className="h-full bg-gray-900/50 backdrop-blur-sm p-8 rounded-xl 
                border border-gray-800 transition-all duration-300 
                hover:border-orange-500/20 relative z-10
                shadow-lg shadow-black/20 hover:shadow-orange-500/10">
                {/* Star Rating */}
                <div className="flex text-orange-500 items-center mb-4 transition-transform duration-300 group-hover:scale-110">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="transition-all duration-300 hover:scale-125">
                      {i < testimonial.rating ? (
                        <span>
                          <Icon icon="ic:round-star" width="21" height="21" />
                        </span>
                      ) : (
                        <span className="text-gray-700">
                          <Icon icon="mynaui:star" width="20" height="20" />
                        </span>
                      )}
                    </span>
                  ))}
                </div>
                <p className="leading-relaxed mb-6 text-gray-300 text-sm sm:text-base
                  transition-all duration-300 group-hover:text-white">
                  {testimonial.text}
                </p>
                <div className="inline-flex items-center transition-transform duration-300 group-hover:translate-y-[-4px]">
                  <img
                    alt="testimonial"
                    src={testimonial.imgSrc}
                    className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center
                      transition-transform duration-300 group-hover:scale-110 
                      ring-2 ring-orange-500 group-hover:ring-orange-500"
                    loading="lazy"
                  />
                  <span className="flex-grow flex flex-col pl-4">
                    <span className="title-font font-medium text-white transition-colors duration-300 
                      group-hover:text-orange-500">
                    
                        {testimonial.name}
                    </span>
                    <span className="text-gray-500 text-sm uppercase tracking-wider group-hover:text-gray-400">
                      {testimonial.role}
                    </span>
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
