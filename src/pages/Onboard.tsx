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
import AdditionalInfo from "../components/onboard/AdditionalInfo";

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
  postCode: string;

  //   description

  description: string;

  //   vendor details

  vendorType: string;

  minGuests: number;
  maxGuests: number;

  pricingType: string;
  minPrice: number;
  maxPrice: number;

  imageFiles: File[];
  imageLinks: string[];

  categories: string[];

  features: string[];

  packageFiles: File[];
  packageLinks: string[];

  // additional

  additionalInfo: string;
}

const Onboard = () => {
  const [page, setPage] = useState(1);
  const [opacity, setOpacity] = useState(1);
  const [formData, setFormData] = useState<FormData>({
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
    postCode: "",
    description: "",
    additionalInfo: "",
    vendorType: "Venues",
    minGuests: 20,
    maxGuests: 250,
    pricingType: "Total",
    minPrice: 500,
    maxPrice: 50000,
    imageFiles: [],
    imageLinks: [],
    categories: [],
    features: [],
    packageFiles: [],
    packageLinks: [],
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
    <LocationInfo
      formData={formData}
      setFormData={setFormData}
      page={page}
      setPage={handleComponentChange}
    />,
    <Description
      formData={formData}
      setFormData={setFormData}
      page={page}
      setPage={handleComponentChange}
    />,
    <VendorType
      formData={formData}
      setFormData={setFormData}
      page={page}
      setPage={handleComponentChange}
    />,
    <Guests
      formData={formData}
      setFormData={setFormData}
      page={page}
      setPage={handleComponentChange}
    />,
    <Pricing
      formData={formData}
      setFormData={setFormData}
      page={page}
      setPage={handleComponentChange}
    />,
    <Images
      formData={formData}
      setFormData={setFormData}
      page={page}
      setPage={handleComponentChange}
    />,
    <Categories
      formData={formData}
      setFormData={setFormData}
      page={page}
      setPage={handleComponentChange}
    />,
    <Features
      formData={formData}
      setFormData={setFormData}
      page={page}
      setPage={handleComponentChange}
    />,
    <Packages
      formData={formData}
      setFormData={setFormData}
      page={page}
      setPage={handleComponentChange}
    />,
    <AdditionalInfo
      formData={formData}
      setFormData={setFormData}
      page={page}
      setPage={handleComponentChange}
    />,
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
