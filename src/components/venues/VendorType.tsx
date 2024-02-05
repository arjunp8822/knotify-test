import VendorTypeCard from "./VendorTypeCard";
import { FiltersInterface } from "../../pages/Vendors";

export interface vendorTypeInterface {
  title: string;
  description: string;
}

interface Props {
  filtersSelected: FiltersInterface;
  setFiltersSelected: (
    updateFilters: (prev: FiltersInterface) => FiltersInterface
  ) => void;
}

const vendorTypeList: vendorTypeInterface[] = [
  {
    title: "Venues",
    description:
      "From pricing and reviews to capacity and available packages. Delve into the options, shortlist your favourites, and explore regions that resonate with your vision.",
  },
  { title: "Florists", description: "" },
  { title: "Photographers", description: "" },
  { title: "Cakes", description: "" },
  { title: "Entertainment", description: "" },
  { title: "MCs", description: "" },
  { title: "Catering", description: "" },
  { title: "Transportation", description: "" },
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

      {vendorTypeList
        .filter((x) => x.title === filtersSelected.vendorType)
        .map((v) => (
          <div className="flex gap-8 sm:gap-8 mt-8 mb-4 flex-col items-center">
            <h5 className="text-lg sm:text-2xl w-full text-black font-light text-center">
              {v.description}
            </h5>
            <img
              src="/assets/bow.png"
              alt="Bow"
              className="w-[140px] sm:w-[200px]"
            />
          </div>
        ))}
    </div>
  );
};

export default VendorType;
