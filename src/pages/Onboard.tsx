import { useState } from "react";
import GeneralInfo from "../components/onboard/GeneralInfo";
import LocationInfo from "../components/onboard/LocationInfo";
import Progress from "../components/onboard/Progress";
import Description from "../components/onboard/Description";
import VendorType from "../components/onboard/VendorType";
import Guests from "../components/onboard/Guests";
import Pricing from "../components/onboard/Pricing";
import Images from "../components/onboard/Images";
import Categories from "../components/onboard/Categories";
import Features from "../components/onboard/Features";
import Packages from "../components/onboard/Packages";
import Social from "../components/onboard/Social";

export interface FormData {
  // general

  name: string;
  email: string;
  phone: string;
  website: string;
  facebook: string;
  instagram: string;
  pinterest: string;

  //   location

  suburb: string;
  city: string;
  state: string;
  postCode: number | null;

  //   description

  description: string;

  //   vendor details

  vendorType: string;

  minGuests: number;
  maxGuests: number;

  minPrice: number;
  maxPrice: number;

  images: string[];

  categories: string[];

  features: string[];

  packages: string[];
}

const Onboard = () => {
  const [page, setPage] = useState(1);
  const [opacity, setOpacity] = useState(1);
  const [formData, setFormData] = useState<FormData | null>({
    name: "",
    email: "",
    phone: "",
    website: "",
    facebook: "",
    instagram: "",
    pinterest: "",
    suburb: "",
    city: "",
    state: "",
    postCode: null,
    description: "",
    vendorType: "",
    minGuests: 20,
    maxGuests: 250,
    minPrice: 500,
    maxPrice: 50000,
    images: [],
    categories: [],
    features: [],
    packages: [],
  });

  const handleComponentChange = (newPage: number) => {
    setOpacity(0);
    setTimeout(() => {
      setPage(newPage);
      setOpacity(1);
    }, 200);
  };

  const components = [
    <GeneralInfo
      formData={formData}
      setFormData={setFormData}
      page={page}
      setPage={handleComponentChange}
    />,
    <Social
      formData={formData}
      setFormData={setFormData}
      page={page}
      setPage={handleComponentChange}
    />,
    <LocationInfo formData={formData} setFormData={setFormData} />,
    <Description />,
    <VendorType />,
    <Guests />,
    <Pricing />,
    <Images />,
    <Categories />,
    <Features />,
    <Packages />,
  ];

  return (
    <div className="flex flex-col gap-8 sm:gap-16 justify-start">
      <Progress page={page} length={components.length} />
      <main style={{ opacity }} className="transition-all min-h-[600px]">
        {components[page - 1]}
      </main>
    </div>
  );
};

export default Onboard;
