import VendorTypeCard from "./VendorTypeCard";
import { FiltersInterface } from "../../pages/Vendors";

export interface vendorTypeInterface {
  title: string;
}

interface Props {
  filtersSelected: FiltersInterface;
  setFiltersSelected: (
    updateFilters: (prev: FiltersInterface) => FiltersInterface
  ) => void;
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

const VendorType = ({ filtersSelected, setFiltersSelected }: Props) => {
  return (
    <div className="border-t w-full py-8">
      <ul className="flex gap-4 sm:gap-8 justify-start sm:justify-center items-center overflow-x-auto custom-scrollbar pb-2">
        {vendorTypeList.map((v) => (
          <VendorTypeCard
            title={v.title}
            filtersSelected={filtersSelected}
            setFiltersSelected={setFiltersSelected}
          />
        ))}
      </ul>
    </div>
  );
};

export default VendorType;
