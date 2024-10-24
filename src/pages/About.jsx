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
      <div className="bg-black text-white py-16 lg:py-52  relative overflow-hidden">
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
        <div className="px-4 sm:px-8 md:px-12 text-center py-12 flex flex-col items-center justify-center font-sf-pro">
          <h1 className="text-2xl font-bold text-center  sm:text-3xl font-sans  md:text-left">
            Connecting Ideas to Solutions: Explore Our Digital Services
          </h1>
          <p className="text-base sm:text-lg w-full sm:w-2/3 leading-snug mt-4 mx-auto md:mx-0">
            XSuite Digital is a multi-service marketing agency that evolves your
            brand’s outlook through creativity and innovation. We transform your
            brand’s vision into fascinating marketing activities that engage
            your audience and drive measurable results. Additionally, our
            dedicated team blends creativity with cutting-edge technology to
<<<<<<< HEAD
            design unique solutions that meet your target audience's
=======
            design unique solutions that meet your target audience&apos;s
>>>>>>> bfc73ff99b1eb1fa9c0668807858bd06a7da927b
            requirements. With a passion for excellence, we primarily aim to
            connect your brand with audiences worldwide, utilizing our{" "}
            <a
              href="/Services"
              style={{ textDecoration: "underline", color: "blue" }}
            >
              services
            </a>
            . Thus, XSuite Digital vigorously develops and maintains easily
            accessible and easy-to-use sites.
          </p>
          <p className="text-base sm:text-lg w-full sm:w-2/3 leading-snug mt-4 mx-auto md:mx-0">
            With Google business tools, we ensure your brand stands out in the
            local searches. As a result, this will enhance your brand’s
            visibility and engagement with potential customers. To further
            enhance our offerings, we create a comprehensive strategy to attract
            more visitors. Moreover, we support you in driving conversions by
            analyzing user metrics, improving local search, and monitoring
            search performance. From web development and SEO to social media
            marketing and PPC campaigns, we believe in the power of
            coordination. It will enhance your growth, make your brand digitally
            active, and drive fruitful results. Together, we will navigate the
            digital projects and achieve your business objectives with
            originality and advancements.
          </p>
        </div>
      </div>

      <CompanyAbout />
      <div className="font-sans bg-white p-4">
        <div className="md:max-w-5xl max-w-xl  mx-auto ">
          <div className="grid  md:grid-cols-2 gap-12 ">
            <div className="text-left">
              <h2 className="text-gray-800  text-2xl font-bold mb-4">
<<<<<<< HEAD
                Elevate Your Brand's Online Presence
=======
                Elevate Your Brand&apos;s Online Presence
>>>>>>> bfc73ff99b1eb1fa9c0668807858bd06a7da927b
              </h2>
              <p className="mb-4 text-lg text-gray-500">
                Raise your digital impact to new heights with our partnership,
                where imaginations meet with expertise. Specifically, from
                optimizing websites for search engines to creating engaging
                content and managing your social media platforms, we provide
                effective solutions to make your brand shine brighter in the
                competitive market. Moreover, at XSuite Digital, we aim to set
                unique standards for outstanding work and recognition, thereby
                driving sustainable growth for your brand. Our experts have the
                ability and the authentic tools to manage your digital demands.
                You can reach out to us for marketing via{" "}
                <a
                  href="https://wa.me/+923316361916"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "underline", color: "blue" }}
                >
                  Whatsapp
                </a>
                ,{" "}
                <a
                  href="https://www.facebook.com/profile.php?id=61566739650180 "
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "underline", color: "blue" }}
                >
                  Facebook
                </a>
                ,{" "}
                <a
                  href="https://www.instagram.com/xsuite.digital/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "underline", color: "blue" }}
                >
                  Instagram
                </a>{" "}
                and{" "}
                <a
                  href="https://www.linkedin.com/company/xsuite-digital/about/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "underline", color: "blue" }}
                >
                  LinkedIn.
                </a>{" "}
                We look forward to helping you grow your brand.
              </p>
            </div>
            <div className="max-h-72">
              <img
                loading="lazy"
                src="/dg2.webp"
                alt="Placeholder Image"
                className=" object-contain rounded-xl w-full h-full"
              />
            </div>
          </div>
          <hr className="border-gray-300 my-12" />
          <div className="grid md:grid-cols-2 gap-12">
            <div className="max-h-72 max-md:order-1">
              <img
                loading="lazy"
                src="/dg3.webp"
                alt="dg3"
                className="rounded-xl object-contain w-full h-full"
              />
            </div>
            <div className="text-left">
              <h2 className="text-gray-800 text-2xl font-bold mb-4">
                Your Success, Our Commitment
              </h2>
              <p className="mb-4 text-lg text-gray-500">
                We will fulfill all of your marketing needs to catch your
                audience with our creative and productive ideas. We serve our
                customers with the best artistic designs and unique content
                creation. XSuite Digital significantly ensures that your ideas
                are always integrated into our strategies, fostering an
                effective partnership. Therefore, rely on XSuite Digital to be
                your dedicated partner in achieving marketing excellence. This
                is the platform where your aspirations align with our expertise
                for remarkable outcomes.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Team />
      <Stats />
      <FAQs />
      <Location />
    </div>
  );
};

export default About;
