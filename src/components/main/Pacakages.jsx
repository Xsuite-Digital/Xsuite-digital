import { Link } from "react-router-dom";

const Packages = () => {
  return (
    <div>
      <div className="mt-2">
        <div className="bg-[#373737]  h-auto p-8 flex items-center justify-center">
          <span className="text-white max-w-screen-lg px-4 lg:leading-snug">
            XSuite Digital provides extensive services designed to boost your
            brand’s visibility. Our service providing company emphasizes on
            creating a strong digital business identity and delivering
            measurable conversions. We are dedicated to supporting your brand's
            success in today’s competitive digital environment. Our creative
            agency offers flexible packages that fit your business objectives,
            whether you are starting out or aiming to dominate in your online
            industry.
            <br />
            <strong>
              Press the button below to explore our customized packages and lift
              your brand to the next level today!
            </strong>
          </span>
        </div>
        <div className="flex justify-center mt-4">
        <Link
            to="/PackageDetails"
            className="text-black px-4 py-2 rounded-full bg-transparent border-2 border-orange-500 hover:scale-110 transition ease-in-out duration-300 hover:bg-orange-500 hover:text-white"
          >
            Show Packages Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Packages;
