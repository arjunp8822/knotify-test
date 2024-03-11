import ReactSlider from "react-slider";
import { FormData } from "../../pages/Onboard";

interface Props {
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
  page: number;
  setPage: (page: number) => void;
}

const Guests = ({ formData, setFormData, page, setPage }: Props) => {
  const toggleChange = (v: number[]) => {
    setFormData({ ...formData, minGuests: v[0], maxGuests: v[1] });
  };

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setPage(page + 1);
  };
  return (
    <div>
      <div className="flex flex-col gap-4 mb-6">
        <h1 className="text-xl sm:text-2xl lg:text-4xl font-semibold">
          Guest Count
        </h1>
        <p className="text-gray-500 text-sm sm:text-base">
          Input your minimum and maximum guest counts for your services. If
          you're uncertain or prefer flexibility, you can leave this range as it
          is. However, providing these details can help attract the right
          couples for your services.
        </p>
      </div>
      <form onSubmit={submitHandler}>
        <div>
          <ReactSlider
            className="horizontal-slider text-sm sm:text-base"
            thumbClassName="example-thumb"
            trackClassName="example-track"
            defaultValue={[formData.minGuests, formData.maxGuests]}
            min={20}
            max={250}
            onChange={(value: number[]) => toggleChange(value)}
            pearling
            minDistance={1}
          />
          <div className="flex gap-4 max-w-[600px]">
            <div className="border rounded p-2 flex flex-col gap-1 w-full">
              <p className="text-[12px] sm:text-[14px] text-gray-500">
                Minimum
              </p>
              <input
                type="text"
                value={formData.minGuests}
                className="text-sm sm:text-base border-none p-0 text-black"
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    minGuests: parseInt(e.target.value),
                  })
                }
              />
            </div>
            <div className="border rounded p-2 flex flex-col gap-1 w-full">
              <p className="text-[12px] sm:text-[14px] text-gray-500">
                Maximum
              </p>
              <input
                type="text"
                value={
                  formData.maxGuests >= 250
                    ? formData.maxGuests + "+"
                    : formData.maxGuests
                }
                className="text-sm sm:text-base border-none p-0 text-black"
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    maxGuests: parseInt(e.target.value),
                  })
                }
              />
            </div>
          </div>
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

export default Guests;
