import { useEffect } from "react";
const AboutUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <div className="px-6 -mt-[50%] lg:mt-1 font-sans">
        <div className="lg:max-w-7xl max-w-lg mx-auto px-6  rounded-lg">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              <h1 className="text-black flex items-center justify-center tracking-widest  lg:hidden text-4xl ">About us</h1>
              <div className="relative">
  <img
    src="/aboutus-min.webp"
    alt="Image"
    className="rounded-md shadow-[20px_-20px_0px_rgba(0,0,0,1),-20px_20px_0px_rgba(249,115,27)] object-cover w-[800px] h-[300px]" 
  />
</div>

            <div>
              <h1 className="font-bold tracking-widest text-2xl lg:text-[28px] lg:text-xl justify-center font-sans flex items-center mb-4">
                XSuite Digital: Solutions Provider
              </h1>
              <p className="text-black text-md pl-10  leading-loose">
                XSuite Digital is a top-level marketing service provider,
                specializing in web development, search engine optimization,
                pay-per-click campaigns, and social media management. With a
                team of enthusiastic experts, we optimize your online presence
                with Google My Business, Google Analytics, and Google Search
                Console. Whether you require SEO or graphic designing for social
                media platforms, we can help you in the marketplace for your
                business advancements. Furthermore, XSuite Digital is a
                trustworthy company by which you can work to fulfill your
                digital requirements.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
