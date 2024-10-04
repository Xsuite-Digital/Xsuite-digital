import { useEffect } from "react";

const Security = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <>
      <div className="bg-black text-white py-52 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="relative z-10">
            <h1 className="text-3xl text-center font-bold sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
              Security
            </h1>
          </div>
        </div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute right-0 top-0 w-96 h-96 bg-white rounded-full -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute left-0 bottom-0 w-96 h-96 bg-white rounded-full translate-y-1/2 -translate-x-1/2"></div>
        </div>
      </div>
      <div className="max-w-2xl mx-auto my-8 p-6  ">
        <h1 className="text-2xl font-bold mb-4 text-gray-800">
          Your Privacy is Our Priority
        </h1>
        <p className="text-base text-gray-700 mb-4 leading-relaxed">
          At XSuite Digital, your privacy is our ultimate priority. We adopt
          strict rules to ensure the protection of your private data throughout
          every phase of our project. We safeguard your critical facts from
          potential threats by using cutting-edge tools and industry best
          practices.
        </p>
        <p className="text-base text-gray-700 mb-4 leading-relaxed">
          Our team conducts security audits on a daily basis and monitors our
          systems to identify and address risks. Our dedicated team stays
          updated with all of the latest safety protocols and makes sure that we
          are securing your interests diligently.
        </p>
        <p className="text-base text-gray-700 mb-4 leading-relaxed">
          With our emphasis on transparent communication and dedicated support,
          you can feel confident that your brand is secure. Trust XSuite Digital
          to deliver innovative branding solutions while prioritizing your
          security at every point.
        </p>
      </div>
    </>
  );
};

export default Security;
