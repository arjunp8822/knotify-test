import { Presets } from "../../data/Presets";
import { FormData } from "../../pages/Onboard";
import VendorTypeCard from "../onboard/VendorTypeCard";

interface Props {
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
  page: number;
  setPage: (page: number) => void;
}

const VendorType = ({ formData, setFormData, page, setPage }: Props) => {
  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setPage(page + 1);
  };
  return (
    <div>
      <div className="flex flex-col gap-4 mb-6">
        <h1 className="text-xl sm:text-2xl lg:text-4xl font-semibold">
          Vendor Category
        </h1>
        <p className="text-gray-500 text-sm sm:text-base">
          Let us know what type of vendor you are to help couples find your
          services more easily.
        </p>
      </div>
      <form onSubmit={submitHandler} className="flex flex-col gap-2">
        <ul className="flex w-full whitespace-nowrap gap-4 flex-wrap">
          {Presets.map((p) => (
            <VendorTypeCard
              key={p.type}
              title={p.type}
              vendorType={formData.vendorType}
              setVendorType={() =>
                setFormData({ ...formData, vendorType: p.type })
              }
            />
          ))}
        </ul>
        <div className="flex gap-4 mt-8">
          <button
            className="uppercase border text-sm sm:text-base"
            onClick={() => setPage(page - 1)}
            type="button"
          >
            Back
          </button>
          <button className="uppercase bg-primary text-white text-sm sm:text-base">
            Next
          </button>
        </div>
      </form>
    </div>
  );
};

export default VendorType;
