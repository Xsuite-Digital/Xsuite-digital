// import { Icon } from "@iconify/react/dist/iconify.js";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Offerings = () => {
  return (
    <>
      <motion.h1
        initial={{ opacity: 0, y: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="flex justify-center font-bold tracking-wider text-lg lg:text-3xl mb-4"
      >
        What We Offer
      </motion.h1>

      <div className="font-[sans-serif] my-4">
        <div className="max-w-5xl max-lg:max-w-xl mx-auto">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 max-md:justify-center mt-12">
            <div className="border flex space-y-4 p-4 flex-col items-center justify-center rounded-md overflow-hidden max-md:max-w-[300px]">
              <img
                src="/DG.png"
                className="w-32 h-28 text-orange-500 object-contain "
              />

              <div className="p-4">
                <h4 className="text-gray-800 text-xl flex items-center justify-center !font-sans font-bold">
                  Digital Marketing
                </h4>

                <div className="mt-10">
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Deleniti placeat sed consequuntur ea incidunt cumque. Minima
                    quae ullam delectus non.
                  </p>
                </div>
              </div>
            </div>

            <div className="border flex space-y-4 p-4 flex-col items-center justify-center rounded-md overflow-hidden max-md:max-w-[300px]">
              <img src="/ppc3.png" className="w-32 h-28 object-contain " />

              <div className="p-4">
                <h4 className="text-gray-800 text-xl flex items-center justify-center !font-sans font-bold">
                  PPC Campaigns
                </h4>

                <div className="mt-10">
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Deleniti placeat sed consequuntur ea incidunt cumque. Minima
                    quae ullam delectus non.
                  </p>
                </div>
              </div>
            </div>

            <div className="border flex space-y-4 p-4 flex-col items-center justify-center rounded-md overflow-hidden max-md:max-w-[300px]">
              <img src="/11.png" className="w-32 h-28 object-contain " />

              <div className="p-4">
                <h4 className="text-gray-800 text-xl flex items-center justify-center !font-sans font-bold">
                  Social Meida Marketing
                </h4>

                <div className="mt-10">
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Deleniti placeat sed consequuntur ea incidunt cumque. Minima
                    quae ullam delectus non.
                  </p>
                </div>
              </div>
            </div>
            <div className="border flex space-y-4 p-4 flex-col items-center justify-center rounded-md overflow-hidden max-md:max-w-[300px]">
              <img src="/SEO2.png" className="w-32 h-28 object-contain " />

              <div className="p-4">
                <h4 className="text-gray-800 text-lg flex items-center  justify-center !font-sans font-bold">
                  Search Engine Optimization
                </h4>

                <div className="mt-10">
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Deleniti placeat sed consequuntur ea incidunt cumque. Minima
                    quae ullam delectus non.
                  </p>
                </div>
              </div>
            </div>

            <div className="border flex space-y-4 p-4 flex-col items-center justify-center rounded-md overflow-hidden max-md:max-w-[300px]">
              <img src="/ads.png" className="w-32 h-28 object-contain " />

              <div className="p-4">
                <h4 className="text-gray-800 text-xl flex items-center justify-center !font-sans font-bold">
                  Google Ads
                </h4>

                <div className="mt-10">
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Deleniti placeat sed consequuntur ea incidunt cumque. Minima
                    quae ullam delectus non.
                  </p>
                </div>
              </div>
            </div>
            <div className="border flex space-y-4 p-4 flex-col items-center justify-center rounded-md overflow-hidden max-md:max-w-[300px]">
              <img src="/GA.png" className="w-32 h-28 object-contain " />

              <div className="p-4">
                <h4 className="text-gray-800 text-xl flex items-center justify-center !font-sans font-bold">
                  Google Analytics
                </h4>

                <div className="mt-10">
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Deleniti placeat sed consequuntur ea incidunt cumque. Minima
                    quae ullam delectus non.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-4">
        <Link to="/Services">
          <button className="bg-black py-2 px-4 rounded-xl flex items-center justify-center text-white ease-in-out duration-300 hover:scale-110 hover:bg-orange-500 hover:text-black">
            View More Services
          </button>
        </Link>
      </div>
    </>
  );
};

export default Offerings;
