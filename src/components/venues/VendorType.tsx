import { useState } from "react";
import VendorTypeCard from "./VendorTypeCard";

export interface vendorTypeInterface {
  title: string;
}

const vendorTypeList: vendorTypeInterface[] = [
  { title: "Venues" },
  { title: "Florists" },
  { title: "Photographers" },
  { title: "Cakes" },
  { title: "Entertainment" },
  { title: "MCs" },
  { title: "Catering" },
  { title: "Transportation" },
];

const VendorType = () => {
  const [selectedType, setSelectedType] = useState("Venues");
  return (
    <div className="border-t w-full py-8">
      <ul className="flex gap-4 sm:gap-8 justify-center items-center overflow-x-auto custom-scrollbar pb-2">
        {vendorTypeList.map((v) => (
          <VendorTypeCard
            title={v.title}
            selectedType={selectedType}
            setSelectedType={setSelectedType}
          />
        ))}
      </ul>
    </div>
  );
};

export default VendorType;
