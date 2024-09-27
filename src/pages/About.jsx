import {useTypewriter} from 'react-simple-typewriter'
import { useEffect } from "react";
const About = () => {


  const [typeEffect] =useTypewriter({
    words: [' Digital Marketer  ' , 'Web Developer  ' , 'UX/UI Designer ', 'Graphic Designer'],
    loop: {},
    typeSpeed:100,
    deleteSpeed:40,
    

  })
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
    <div className="relative">
  <img
    src="/microthinks.png"
    className="w-full h-auto"
    alt="Background"
  />
  <div className="absolute inset-0 bg-black opacity-50"></div>

  <div className="absolute top-[40%] left-[50%] transform -translate-x-[50%] tracking-wider font-bold text-white
                  lg:text-4xl md:text-3xl sm:text-2xl text-xl">
    About Us
  </div>

  <div className="absolute  text-white w-full font-bold z-20 text-center
                  lg:text-3xl md:text-xl sm:text-xl text-lg
                  top-[60%] left-[50%] transform -translate-x-[50%] -translate-y-[50%]">
    <h1 className="inline-block mr-2">We are</h1>
    <span className="inline-block">{typeEffect}</span>
  </div>
</div>

      <div className="font-sans bg-white p-4">
        <div className="md:max-w-5xl max-w-xl  mx-auto ">
          <div className="grid  md:grid-cols-2 gap-12 ">
            <div className="text-left">
              <h2 className="text-gray-800 text-2xl font-bold mb-4">
                Elevate Your Online Presence
              </h2>
              <p className="mb-4 text-sm text-gray-500">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                aliquam, ipsum vel iaculis bibendum, justo turpis ullamcorper
                mauris, non aliquam nisi purus vel nisl. Integer efficitur
                turpis in bibendum tincidunt.
              </p>
              <p className="text-sm text-gray-500">
                Nulla facilisi. Vestibulum fringilla leo et purus consectetur,
                vel tincidunt dolor rhoncus. In hac habitasse platea dictumst.
                Fusce vel sodales elit. Suspendisse potenti. Sed eget consequat
                nisi.
              </p>
              <button
                type="button"
                className="mt-6 px-5 py-2.5 rounded-full text-white text-sm tracking-wider font-medium border border-current outline-none bg-[#7E7E7E] hover:bg-[#373737] duration-300 ease-in-out "
              >
                Get started
              </button>
            </div>
            <div className="max-h-72">
              <img
                src="/digital-marketing 2 B&W.png"
                alt="Placeholder Image"
                className="rounded-lg object-contain w-full h-full"
              />
            </div>
          </div>
          <hr className="border-gray-300 my-12" />
          <div className="grid md:grid-cols-2 gap-12">
            <div className="max-h-72 max-md:order-1">
              <img
                src="/digital-marketing 3 B&W.png"
                alt="Placeholder Image"
                className="rounded-lg object-contain w-full h-full"
              />
            </div>
            <div className="text-left">
              <h2 className="text-gray-800 text-2xl font-bold mb-4">
                Your Success, Our Commitment
              </h2>
              <p className="mb-4 text-sm text-gray-500">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                aliquam, ipsum vel iaculis bibendum, justo turpis ullamcorper
                mauris, non aliquam nisi purus vel nisl. Integer efficitur
                turpis in bibendum tincidunt.
              </p>
              <p className="text-sm text-gray-500">
                Nulla facilisi. Vestibulum fringilla leo et purus consectetur,
                vel tincidunt dolor rhoncus. In hac habitasse platea dictumst.
                Fusce vel sodales elit. Suspendisse potenti. Sed eget consequat
                nisi.
              </p>
              <button
                type="button"
                className="mt-6 px-5 py-2.5 rounded-full text-white text-sm tracking-wider font-medium border border-current outline-none bg-[#7E7E7E] hover:bg-[#373737] duration-300 ease-in-out "
              >
                Get started
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
