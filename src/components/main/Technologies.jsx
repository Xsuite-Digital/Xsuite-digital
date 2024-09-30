const Technologies = () => {
  return (
    <div className="flex flex-col items-center  ">
      <h1 className="font-bold lg:text-2xl text-2xl font-sans text-center">
        Our Expertise
      </h1>

      <div className="grid grid-cols-1 space-y-10 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-10 p-12 gap-y-8 items-center">
        <div className="flex flex-col space-y-3 items-center">
          <img src="/DG.png" alt="" height={100} width={100} />
          <h1 className="font-semibold font-sans">Digital Marketing</h1>
        </div>
        <div className="flex flex-col space-y-3 items-center">
          <img src="/ads.png" alt="" height={100} width={100} />
          <h1 className="font-semibold font-sans">Google Ads</h1>
        </div>
        <div className="flex flex-col space-y-3 items-center">
          <img src="/ppc3.png" alt="" height={100} width={100} />
          <h1 className="font-semibold font-sans">PPC Campaigns</h1>
        </div>
        <div className="flex flex-col space-y-3 items-center">
          <img src="/11.png" alt="" height={100} width={100} />
          <h1 className="font-semibold font-sans">Social Media Marketing</h1>
        </div>
        <div className="flex flex-col space-y-3 items-center">
          <img src="/web3.png" alt="" height={100} width={100} />
          <h1 className="font-semibold font-sans">Web Development</h1>
        </div>
        <div className="flex flex-col space-y-3 items-center">
          <img src="/GMBO.png" alt="" height={100} width={100} />
          <h1 className="font-semibold font-sans text-center">
            Google My Business Optimization
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Technologies;
