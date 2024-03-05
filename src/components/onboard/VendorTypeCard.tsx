interface Props {
  title: string;
  vendorType: string;
  setVendorType: (type: string) => void;
}

const VendorType = ({ title, vendorType, setVendorType }: Props) => {
  return (
    <li
      className={`border cursor-pointer p-3 font-semibold text-sm sm:text-base ${
        vendorType === title ? "border-black-2 text-white bg-black" : "border"
      }`}
      onClick={() => setVendorType(title)}
    >
      {title}
    </li>
  );
};

export default VendorType;
