import { useState } from "react";
import { FormData } from "../../pages/Onboard";

interface Props {
  formData: FormData | null;
  setFormData: (formData: FormData) => void;
  page: number;
  setPage: (page: number) => void;
}

const GeneralInfo = ({ formData, setFormData, page, setPage }: Props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [website, setWebsite] = useState("");

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const updatedData: Partial<FormData> = {
      ...formData,
      name: name,
      email: email,
      phone: phone,
      website: website,
    };
    setFormData(updatedData as FormData);
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
          business
        </p>
      </div>
      <form onSubmit={submitHandler}>
        <div className="grid grid-cols 1 sm:grid-cols-2 gap-4">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Business Name"
            className="text-sm sm:text-base text-black"
            required
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="text-sm sm:text-base text-black"
            required
          />
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Phone Number"
            className="text-sm sm:text-base text-black"
            required
          />
          <input
            type="text"
            value={website}
            onChange={(e) => setWebsite(e.target.value)}
            placeholder="Website"
            className="text-sm sm:text-base text-black"
            required
          />
        </div>
        <div className="flex gap-4 mt-8">
          <button className="uppercase border text-sm sm:text-base">
            Next
          </button>
        </div>
      </form>
    </div>
  );
};

export default GeneralInfo;
