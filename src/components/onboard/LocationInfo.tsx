import { FormData } from "../../pages/Onboard";

interface Props {
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
  page: number;
  setPage: (page: number) => void;
}

const LocationInfo = ({ formData, setFormData, page, setPage }: Props) => {
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
          Location
        </h1>
        <p className="text-gray-500 text-sm sm:text-base">
          Provide your business location to help couples find you easily.
        </p>
      </div>
      <form onSubmit={submitHandler}>
        <div className="grid grid-cols 1 sm:grid-cols-2 gap-4">
          <input
            type="text"
            value={formData.suburb}
            onChange={handleChange}
            placeholder="Suburb"
            className="text-sm sm:text-base text-black"
            required
            name="suburb"
          />
          <input
            type="text"
            value={formData.city}
            onChange={handleChange}
            placeholder="City"
            className="text-sm sm:text-base text-black"
            required
            name="city"
          />
          <select
            className={`border px-4 py-2 custom-select text-sm sm:text-base rounded ${
              formData.state.length > 0 ? "text-black" : "text-gray-400"
            }`}
            value={formData.state}
            onChange={(e) =>
              setFormData({ ...formData, state: e.target.value })
            }
            required
          >
            <option value="" className="text-gray-400" disabled>
              Select State
            </option>
            <option value="ACT" className="text-black">
              ACT
            </option>
            <option value="NSW" className="text-black">
              NSW
            </option>
            <option value="NT" className="text-black">
              NT
            </option>
            <option value="QLD" className="text-black">
              QLD
            </option>
            <option value="SA" className="text-black">
              SA
            </option>
            <option value="TAS" className="text-black">
              TAS
            </option>
            <option value="VIC" className="text-black">
              VIC
            </option>
            <option value="WA" className="text-black">
              WA
            </option>
          </select>
          <input
            type="text"
            minLength={4}
            maxLength={4}
            value={formData.postCode}
            onChange={handleChange}
            placeholder="Post Code"
            className="text-sm sm:text-base text-black"
            required
            name="postCode"
          />
        </div>
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

export default LocationInfo;
