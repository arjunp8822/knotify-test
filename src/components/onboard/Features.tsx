import { Presets } from "../../data/Presets";
import { FormData } from "../../pages/Onboard";
import CategoryType from "./CategoryType";

interface Props {
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
  page: number;
  setPage: (page: number) => void;
}

const Features = ({ formData, setFormData, page, setPage }: Props) => {
  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setPage(page + 1);
  };

  const handleFeatureSelection = (feature: string) => {
    const updatedFeatures = formData.features.includes(feature)
      ? formData.features.filter((f) => f !== feature)
      : [...formData.features, feature];
    setFormData((prevData) => ({
      ...prevData,
      features: updatedFeatures,
    }));
  };
  return (
    <div>
      <div className="flex flex-col gap-4 mb-6">
        <h1 className="text-xl sm:text-2xl lg:text-4xl font-semibold">
          Features
        </h1>
        <p className="text-gray-500 text-sm sm:text-base">
          Select any features that apply to you
        </p>
      </div>
      <form onSubmit={submitHandler} className="flex flex-col gap-2">
        <ul className="flex whitespace-nowrap gap-4 flex-wrap">
          {Presets.filter(
            (a) => a.type === formData.vendorType
          )[0].features.map((b) => (
            <CategoryType
              key={b}
              title={b}
              selectedCategories={formData.features}
              setSelectedCategories={handleFeatureSelection}
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
          {formData.features.length > 0 ? (
            <button className="uppercase bg-primary text-white text-sm sm:text-base">
              Next
            </button>
          ) : (
            <button
              className="uppercase bg-gray-400 text-white text-sm sm:text-base"
              disabled
            >
              Next
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default Features;
