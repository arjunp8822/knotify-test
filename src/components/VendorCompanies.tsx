import SampleImg from "/assets/venues/black.png";

const VendorCompanies = () => {
  return (
    <div className="grid grid-cols-6 gap-4">
      <img src={SampleImg} alt="Sample" className="w-36" />
      <img src={SampleImg} alt="Sample" className="w-36" />
      <img src={SampleImg} alt="Sample" className="w-36" />
      <img src={SampleImg} alt="Sample" className="w-36" />
      <img src={SampleImg} alt="Sample" className="w-36" />
      <img src={SampleImg} alt="Sample" className="w-36" />
    </div>
  );
};

export default VendorCompanies;
