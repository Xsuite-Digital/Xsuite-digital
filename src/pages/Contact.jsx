import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import FAQs from "../components/main/FAQs";
import Location from "../components/main/Location";

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <>
      <div className="bg-black text-white py-16 lg:py-52 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="relative z-10">
            <h1 className="text-5xl text-center font-bold">Contact Us</h1>
          </div>
        </div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute right-0 top-0 w-96 h-96 bg-white rounded-full -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute left-0 bottom-0 w-96 h-96 bg-white rounded-full translate-y-1/2 -translate-x-1/2"></div>
        </div>
      </div>

      <div className="mt-24 max-w-6xl   max-lg:max-w-2xl mx-auto   ">
        <Helmet>
          <title>Contact | XSuite Digital</title>
          <meta name="" content="" />
        </Helmet>

        {<Location />}
        {/* <FAQs /> */}
      </div>
    </>
  );
};

export default Contact;
