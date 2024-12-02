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
        <div className="relative inset-0 ">
          <div className="absolute w-96 h-96 -top-0 -left-0 bg-orange-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute w-96 h-96 -bottom-0 -right-0 bg-orange-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
      </div>

      <div className="bg-black w-full mx-auto">
        <Helmet>
          <title>Contact | XSuite Digital</title>
          <meta name="" content="" />
        </Helmet>

        <Location />
        {/* <FAQs /> */}
      </div>
    </>
  );
};

export default Contact;
