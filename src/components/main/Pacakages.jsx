import { Link } from "react-router-dom";

const Pacakages = () => {
  return (
    <div>
      <div className="w-full h-[50vh] bg-[#373737]  pt-10">
        <div className=" flex justify-center ">
          <span className="w-[70vw] text-white">
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
            className=" text-white  px-4 py-2 rounded-xl bg-black hover:scale-110 transition ease-in-out 300 hover:bg-orange-500 hover:text-black"
          >
            Show Packages Deatils
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Pacakages;
