import "./Loader.css"; 

const Loader = () => {
  return (
    <div className="loader-wrapper bg-black">
      <div className="loading-text text-orange-500 items-center flex justify-center text-2xl ">Loading...</div>
      <div className="loader"></div>
    </div>
  );
};

export default Loader;
