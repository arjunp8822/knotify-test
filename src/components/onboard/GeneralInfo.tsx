import { FormData } from "../../pages/Onboard";

interface Props {
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
  page: number;
  setPage: (page: number) => void;
}

const GeneralInfo = ({ formData, setFormData, page, setPage }: Props) => {
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
          Basic Information
        </h1>
        <p className="text-gray-500 text-sm sm:text-base">
          Let's kick things off by capturing basic information about your
          business.
        </p>
      </div>
      <form onSubmit={submitHandler}>
        <div className="grid grid-cols 1 sm:grid-cols-2 gap-4">
          <input
            type="text"
            value={formData.name}
            onChange={handleChange}
            placeholder="Business Name"
            className="text-sm sm:text-base text-black"
            required
            name="name"
          />
          <input
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className="text-sm sm:text-base text-black"
            required
            name="email"
          />
          <input
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone Number"
            className="text-sm sm:text-base text-black"
            required
            name="phone"
          />
          <input
            type="text"
            value={formData.website}
            onChange={handleChange}
            placeholder="Website"
            className="text-sm sm:text-base text-black"
            required
            name="website"
          />
        </div>
        <div className="flex gap-4 mt-8">
          <button className="uppercase bg-primary text-white text-sm sm:text-base">
            Next
          </button>
        </div>
      </form>
    </div>
  );
};

export default GeneralInfo;
