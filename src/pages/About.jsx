import { Helmet } from "react-helmet-async";
import FAQs from "../components/main/FAQs";
import Location from "../components/main/Location";
import CompanyAbout from "../components/main/CompanyAbout";
import Stats from "../components/main/Stats";
import Team from "../components/main/Team";
import { useEffect } from "react";
const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <div>
      <Helmet>
        <title>About | XSuite Digital</title>
        <meta name="" content="" />
      </Helmet>
      <div className="bg-black text-white py-52 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="relative z-10">
            <h1 className="text-5xl text-center font-bold">About Us</h1>
          </div>
        </div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute right-0 top-0 w-96 h-96 bg-white rounded-full -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute left-0 bottom-0 w-96 h-96 bg-white rounded-full translate-y-1/2 -translate-x-1/2"></div>
        </div>
      </div>
      <div className="about-description h-full w-screen bg-[#F5F4F7] ">
        <div className="px-4 sm:px-8 md:px-12 py-12 flex flex-col items-center justify-center font-sf-pro">
          <h1 className="text-3xl sm:text-4xl font-semibold font-sans text-center md:text-left">
            Digital Services of XSuite Digital
          </h1>
          <p className="text-base sm:text-lg w-full sm:w-2/3 leading-snug mt-4 mx-auto md:mx-0">
            XSuite Digital is a multi-service marketing agency that transforms
            your brand’s vision through creativity and innovation. We create
            engaging marketing activities that connect with your audience and
            drive measurable results. Our dedicated team blends creativity with
            cutting-edge technology to design unique solutions tailored to your
            target audience's needs. With a passion for excellence, we aim to
            connect your brand with audiences worldwide.
          </p>
          <p className="text-base sm:text-lg w-full sm:w-2/3 leading-snug mt-4 mx-auto md:mx-0">
            We specialize in developing and maintaining accessible and
            user-friendly websites. Leveraging Google business tools, we enhance
            your brand’s visibility in local searches, helping you engage
            effectively with potential customers. Our comprehensive strategy is
            designed to attract more visitors and enhance your online presence.
          </p>
          <p className="text-base sm:text-lg w-full sm:w-2/3 leading-snug mt-4 mx-auto md:mx-0">
            Additionally, we assist in driving conversions by analyzing user
            metrics, optimizing local search, and monitoring performance. From
            web development and SEO to social media marketing and PPC campaigns,
            we believe in the power of collaboration to fuel your growth.
            Together, we will navigate your digital projects and achieve your
            business objectives with originality and innovation.
          </p>
        </div>
      </div>

      <CompanyAbout />
      <div className="font-sans bg-white p-4">
        <div className="md:max-w-5xl max-w-xl  mx-auto ">
          <div className="grid  md:grid-cols-2 gap-12 ">
            <div className="text-left">
              <h2 className="text-gray-800  text-2xl font-bold mb-4">
                Elevate Your Online Presence
              </h2>
              <p className="mb-4 text-sm text-gray-500">
                XSuite Digital is a top-level marketing service provider,
                specializing in web development, search engine optimization,
                pay-per-click campaigns, and social media management. With a
                team of enthusiastic experts, we optimize your online presence
                with Google My Business, Google Analytics, and Google Search
                Console.
              </p>
              <p className="text-sm text-gray-500">
                Whether you require SEO or graphic designing for social media
                platforms, we can help you in the marketplace for your business
                advancements. XSuite Digital is a trustworthy company by which
                you can work to fulfill your digital requirements.
              </p>
              {/* <button
                type="button"
                className="mt-6 px-5 py-2.5 rounded-full text-white text-sm tracking-wider font-medium border border-current outline-none bg-[#7E7E7E] hover:bg-[#373737] duration-300 ease-in-out "
              >
                Get started
              </button> */}
            </div>
            <div className="max-h-72">
              <img
                src="/digital-marketing 2 B&W.png"
                alt="Placeholder Image"
                className=" object-contain rounded-xl w-full h-full"
              />
            </div>
          </div>
          <hr className="border-gray-300 my-12" />
          <div className="grid md:grid-cols-2 gap-12">
            <div className="max-h-72 max-md:order-1">
              <img
                src="/digital-marketing 3 B&W.png"
                alt="Placeholder Image"
                className="rounded-xl object-contain w-full h-full"
              />
            </div>
            <div className="text-left">
              <h2 className="text-gray-800 text-2xl font-bold mb-4">
                Your Success, Our Commitment
              </h2>
              <p className="mb-4 text-sm text-gray-500">
                We will fulfill all of your marketing needs to catch your
                audience with our creative and productive ideas. We serve our
                customers with the best artistic designs and unique content
                creation.
              </p>
              <p className="text-sm text-gray-500">
                XSuite Digital ensures that your ideas are always integrated
                into our strategies, fostering an effective partnership. Rely on
                XSuite Digital to be your dedicated partner in achieving
                marketing excellence. It is the platform where your aspirations
                align with our expertise for remarkable outcomes.
              </p>
              {/* <button
                type="button"
                className="mt-6 px-5 py-2.5 rounded-full text-white text-sm tracking-wider font-medium border border-current outline-none bg-[#7E7E7E] hover:bg-[#373737] duration-300 ease-in-out "
              >
                Get started
              </button> */}
            </div>
          </div>
        </div>
      </div>
      <Team />
      {/* <Stats /> */}
      <FAQs />
      <Location />
    </div>
  );
};

export default About;
