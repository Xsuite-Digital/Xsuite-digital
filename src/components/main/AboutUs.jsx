import { useEffect } from "react";
const AboutUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <div className="px-6 py-12 font-sans">
        <div className="lg:max-w-7xl max-w-lg mx-auto px-6 py- rounded-lg">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="max-h-80 relative">
              <img
                src="/aboutus.jpg"
                alt="Image"
                className="rounded-md shadow-[20px_-20px_0px_rgba(0,0,0,1),-20px_20px_0px_rgba(249,115,27)] object-cover  w-full h-full"
              />
            </div>

            <div>
              <h1 className="font-bold tracking-widest text-2xl lg:text-[27px] lg:text-xl justify-center font-sans flex items-center mb-4">
                XSuite: The Digital Solutions Provider
              </h1>
              <p className="text-black text-md  leading-loose">
                We are a top-level digital marketing service provider
                specializing in web development, search engine optimization,
                pay-per-click campaigns, and social media management. Xsuite is
                enthusiastic about optimizing your online presence with Google
                My Business, Google Analytics, and Google Search Console.
                Whether you require SEO or graphic designing for social media
                platforms, we are available to help you in the marketplace for
                your business advancements. Xsuite is a trustworthy company by
                which you can work to fulfill your digital requirements.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
