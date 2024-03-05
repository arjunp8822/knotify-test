import { FormData } from "../../pages/Onboard";

interface Props {
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
  page: number;
  setPage: (page: number) => void;
}

const Description = ({ formData, setFormData, page, setPage }: Props) => {
  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setPage(page + 1);
  };
  return (
    <div>
      <div className="flex flex-col gap-4 mb-6">
        <h1 className="text-xl sm:text-2xl lg:text-4xl font-semibold">
          Description
        </h1>
        <p className="text-gray-500 text-sm sm:text-base">
          Provide a brief description of your business. This could include what
          services or products you offer, your mission, or anything else you'd
          like potential customers to know.
        </p>
      </div>
      <form onSubmit={submitHandler} className="flex flex-col gap-2">
        <span className="w-full text-gray-500 ml-1 text-sm sm:text-base">
          {formData.description.length.toLocaleString()} / {"1,000"}
        </span>
        <textarea
          placeholder="Start writing here..."
          className="border rounded w-full p-4 text-sm sm:text-base resize-none text-black"
          rows={8}
          value={formData.description}
          onChange={(e) =>
            setFormData({ ...formData, description: e.target.value })
          }
          maxLength={1000}
          name="description"
          required
        ></textarea>
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

export default Description;
