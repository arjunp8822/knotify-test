import { useState } from "react";

interface Props {
  formData: FormData | null;
  setFormData: (formData: FormData) => void;
  page: number;
  setPage: (page: number) => void;
}

const Social = ({ formData, setFormData, page, setPage }: Props) => {
  const [facebook, setFacebook] = useState("");
  const [instagram, setInstagram] = useState("");
  const [pinterest, setPinterest] = useState("");

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const updatedData: Partial<FormData> = {
      ...formData,
      facebook: facebook,
      instagram: instagram,
      pinterest: pinterest,
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
            value={facebook}
            onChange={(e) => setFacebook(e.target.value)}
            placeholder="Facebook (optional)"
            className="text-sm sm:text-base text-black"
            required
          />
          <input
            type="text"
            value={instagram}
            onChange={(e) => setInstagram(e.target.value)}
            placeholder="Instagram (optional)"
            className="text-sm sm:text-base text-black"
            required
          />
          <input
            type="text"
            value={pinterest}
            onChange={(e) => setPinterest(e.target.value)}
            placeholder="Pinterest (optional)"
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

export default Social;
