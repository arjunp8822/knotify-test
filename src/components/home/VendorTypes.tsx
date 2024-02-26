import VendorTypeCard from "./VendorTypeCard";

const vendorTypes = [
  "Venues",
  "Florists",
  "Photographers",
  "Cakes",
  "Entertainment",
  "MCs and Celebrants",
  "Catering",
  "Transportation",
];

const VentorTypes = () => {
  return (
    <div className="mt-10">
      <ul className="flex justify-start sm:justify-center items-center overflow-x-auto gap-4 sm:gap-8">
        {vendorTypes.map((a) => (
          <VendorTypeCard title={a} />
        ))}
      </ul>
    </div>
  );
};

export default VentorTypes;
