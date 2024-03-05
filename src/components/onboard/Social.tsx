import { FormData } from "../../pages/Onboard";

interface Props {
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
  page: number;
  setPage: (page: number) => void;
}

const Social = ({ formData, setFormData, page, setPage }: Props) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setPage(page + 1);
  };

  return (
    <div>
      <div className="flex flex-col gap-4 mb-6">
        <h1 className="text-xl sm:text-2xl lg:text-4xl font-semibold">
          Social Media Links
        </h1>
        <p className="text-gray-500 text-sm sm:text-base">
          Let couples stay updated, engaged, and connected by adding your social
          media platforms.
        </p>
      </div>
      <form onSubmit={submitHandler}>
        <div className="grid grid-cols 1 sm:grid-cols-2 gap-4">
          <input
            type="text"
            value={formData.facebook}
            onChange={handleChange}
            placeholder="Facebook (optional)"
            className="text-sm sm:text-base text-black"
            name="facebook"
          />
          <input
            type="text"
            value={formData.instagram}
            onChange={handleChange}
            placeholder="Instagram (optional)"
            className="text-sm sm:text-base text-black"
            name="instagram"
          />
          <input
            type="text"
            value={formData.pinterest}
            onChange={handleChange}
            placeholder="Pinterest (optional)"
            className="text-sm sm:text-base text-black"
            name="pinterest"
          />
        </div>
        <div className="flex gap-4 mt-8">
          <button
            className="uppercase bg-gray-100 text-sm sm:text-base"
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

export default Social;
