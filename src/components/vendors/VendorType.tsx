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
  {
    title: "Florists",
    description:
      "Discover a floral paradise with our extensive listing of florists. Unearth the perfect bloom for your special day by exploring pricing, customer reviews, and unique arrangements.",
  },
  {
    title: "Photographers",
    description:
      "Capture the essence of your love story with our curated list of talented photographers. Explore their portfolios, pricing, and customer reviews to find the perfect match for your style.",
  },
  {
    title: "Cakes",
    description:
      "Indulge your sweet tooth and make a statement with a delectable wedding cake. Explore our diverse range of bakers offering various flavours, designs, and sizes.",
  },
  {
    title: "Entertainment",
    description:
      "Elevate your wedding festivities with our entertainment options. From live bands and DJs to dancers and performers, discover the perfect act to keep your guests entertained.",
  },
  {
    title: "MCs and Celebrants",
    description:
      "Explore our list of charismatic and experienced MCs, complete with pricing and reviews. Choose an MC who can add a touch of personality and professionalism to your event.",
  },
  {
    title: "Catering",
    description:
      "Delight your guests' taste buds with our diverse catering options. Explore menus, pricing, and customer reviews to find a caterer that can tailor their offerings to your preferences.",
  },
  {
    title: "Transportation",
    description:
      "Arrive in style and leave a lasting impression with our transportation options. Explore a range of vehicles, from classic cars to luxury limousines.",
  },
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
