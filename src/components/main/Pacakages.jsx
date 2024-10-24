import { Link } from "react-router-dom";

const Packages = () => {
  return (
    <div>
      <div className="mt-2">
        <div className="bg-[#373737]  h-auto p-8 flex items-center justify-center">
          <span className="text-white max-w-screen-lg px-4">
            Neque fusce volutpat mattis elit eros augue sociosqu dignissim
            elementum curae; sapien fames dictum hendrerit viverra. Duis,
            pretium tortor senectus habitasse arcu eget sem tortor tellus.
            Varius, est donec vivamus parturient. Aptent lobortis vivamus
            pretium nascetur malesuada mauris laoreet elit tempus blandit tortor
            metus ligula dictumst elementum conubia habitasse turpis posuere in
            aliquam, montes Cras inceptos curae; Sem ante imperdiet enim
            malesuada eros odio semper leo id. Nullam condimentum gravida justo,
            lorem. Volutpat sollicitudin nisl. Fermentum nunc quam non porttitor
            id ac sed elit mauris. Ac turpis ad. Risus, metus accumsan viverra
            varius risus molestie vehicula auctor aptent eleifend torquent.
          </span>
        </div>
        <div className="flex justify-center mt-4">
          <Link
            to="/PackageDetails"
            className="text-white px-4 py-2 rounded-xl bg-black hover:scale-110 transition ease-in-out duration-300 hover:bg-orange-500 hover:text-black"
          >
            Show Packages Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Packages;
