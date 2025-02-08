import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
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
            <p className="mt-5 text-lg text-center m-3">Raise your digital impact to new heights with our partnership, where imaginations meet with expertise. Specifically, from optimizing websites for search engines to creating engaging content and managing your social media platforms, we provide effective solutions to make your brand shine brighter in the competitive market. Moreover, at Xsuite Digital, we aim to set unique standards for outstanding work and recognition, thereby driving sustainable digital brand growth. Our experts have the ability and the authentic tools to manage your digital demands. You can reach out to us for marketing via WhatsApp, Facebook, Instagram, and LinkedIn. We look forward to helping you grow your brand.
            </p>
          </div>
        </div>
        <div className="relative inset-0 ">
          <div className="absolute w-96 h-96 -top-0 -left-0 bg-orange-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute w-96 h-96 -bottom-0 -right-0 bg-orange-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
      </div>

      <div className="  bg-black  max-lg:max-w-2xl mx-auto   ">
        <Helmet>
          <title>Contact | XSuite Digital</title>
          <meta name="" content="" />
        </Helmet>
        <Location />
      </div>
    </>
  );
};

export default Contact;
