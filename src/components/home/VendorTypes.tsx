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
      <ul className="flex justify-around items-center overflow-x-auto">
        {vendorTypes.map((a) => (
          <VendorTypeCard title={a} />
        ))}
      </ul>
    </div>
  );
};

export default VentorTypes;
