import ReactSlider from "react-slider";
import { FormData } from "../../pages/Onboard";

interface Props {
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
  page: number;
  setPage: (page: number) => void;
}

const Pricing = ({ formData, setFormData, page, setPage }: Props) => {
  const toggleChange = (v: number[]) => {
    setFormData({ ...formData, minPrice: v[0], maxPrice: v[1] });
  };

  const clickHandler = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    const clickedType = e.currentTarget.textContent!;
    if (clickedType === "Total") {
      setFormData({
        ...formData,
        pricingType: clickedType,
        minPrice: 100,
        maxPrice: 50000,
      });
    } else if (clickedType === "Per Person") {
      setFormData({
        ...formData,
        pricingType: clickedType,
        minPrice: 50,
        maxPrice: 500,
      });
    }
  };

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setPage(page + 1);
  };

  return (
    <div>
      <div className="flex flex-col gap-4 mb-6">
        <h1 className="text-xl sm:text-2xl lg:text-4xl font-semibold">
          Pricing
        </h1>
        <p className="text-gray-500 text-sm sm:text-base">
          Select your type of pricing and input the minimum and maximum you
          would charge for your services. If you're uncertain or prefer
          flexibility, you can leave this range as it is. However, providing
          these details can help attract the right couples for your services.
        </p>
      </div>
      <form onSubmit={submitHandler}>
        <div>
          <ul className="flex gap-4 mb-4">
            <li>
              <button
                className={`border text-sm sm:text-base ${
                  formData.pricingType === "Total" &&
                  "bg-black text-white font-semibold"
                }`}
                onClick={clickHandler}
              >
                Total
              </button>
            </li>
            <li>
              <button
                className={`border text-sm sm:text-base ${
                  formData.pricingType === "Per Person" &&
                  "bg-black text-white font-semibold"
                }`}
                onClick={clickHandler}
                type="button"
              >
                Per Person
              </button>
            </li>
          </ul>
          {formData.pricingType === "Total" && (
            <div>
              <ReactSlider
                className="horizontal-slider text-sm sm:text-base"
                thumbClassName="example-thumb"
                trackClassName="example-track"
                defaultValue={[formData.minPrice, formData.maxPrice]}
                min={500}
                max={50000}
                onChange={(value: number[]) => toggleChange(value)}
                pearling
                minDistance={100}
                step={100}
              />
              <div className="flex gap-4 max-w-[600px]">
                <div className="border rounded p-2 flex flex-col gap-1 w-full">
                  <p className="text-[12px] sm:text-[14px] text-gray-500">
                    Minimum
                  </p>
                  <div className="flex justify-start items-center gap-1">
                    <span>$</span>
                    <input
                      type="number"
                      value={formData.minPrice}
                      className="text-sm sm:text-base border-none p-0 text-black"
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          minPrice: parseInt(e.target.value),
                        })
                      }
                    />
                  </div>
                </div>
                <div className="border rounded p-2 flex flex-col gap-1 w-full">
                  <p className="text-[12px] sm:text-[14px] text-gray-500">
                    Maximum
                  </p>
                  <div className="flex justify-start items-center gap-1">
                    <span>$</span>
                    <input
                      type="text"
                      value={formData.maxPrice}
                      className="text-sm sm:text-base border-none p-0 text-black w-[50px]"
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          maxPrice: parseInt(e.target.value),
                        })
                      }
                    />
                    {formData.maxPrice === 50000 && (
                      <span className="w-full">+</span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}
          {formData.pricingType === "Per Person" && (
            <div>
              <ReactSlider
                className="horizontal-slider text-sm sm:text-base"
                thumbClassName="example-thumb"
                trackClassName="example-track"
                defaultValue={[formData.minPrice, formData.maxPrice]}
                min={50}
                max={500}
                onChange={(value: number[]) => toggleChange(value)}
                pearling
                minDistance={1}
                step={10}
              />
              <div className="flex gap-4 max-w-[600px]">
                <div className="border rounded p-2 flex flex-col gap-1 w-full">
                  <p className="text-[12px] sm:text-[14px] text-gray-500">
                    Minimum
                  </p>
                  <div className="flex justify-start items-center gap-1">
                    <span>$</span>
                    <input
                      type="text"
                      value={formData.minPrice}
                      className="text-sm sm:text-base border-none p-0 text-black"
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          minPrice: parseInt(e.target.value),
                        })
                      }
                    />
                  </div>
                </div>
                <div className="border rounded p-2 flex flex-col gap-1 w-full">
                  <p className="text-[12px] sm:text-[14px] text-gray-500">
                    Maximum
                  </p>
                  <div className="flex justify-start items-center gap-1">
                    <span>$</span>
                    <input
                      type="text"
                      value={formData.maxPrice}
                      className="text-sm sm:text-base border-none p-0 text-black w-[28px]"
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          maxPrice: parseInt(e.target.value),
                        })
                      }
                    />
                    {formData.maxPrice === 500 && (
                      <span className="w-full">+</span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}
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

export default Pricing;
