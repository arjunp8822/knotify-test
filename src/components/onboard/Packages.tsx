import { FaPlus } from "react-icons/fa6";
import { FormData } from "../../pages/Onboard";
import { ImBin2 } from "react-icons/im";

interface Props {
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
  page: number;
  setPage: (page: number) => void;
}

const Packages = ({ formData, setFormData, page, setPage }: Props) => {
  const packageSelectHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const selectedFiles = e.target.files;
    if (selectedFiles) {
      const fileListArray = Array.from(selectedFiles);
      setFormData({
        ...formData,
        packageFiles: [...formData.packageFiles, ...fileListArray],
      });
    }
  };

  const packageRemoveHandler = (index: number) => {
    const newPackages = [...formData.packageFiles];
    newPackages.splice(index, 1);
    setFormData({
      ...formData,
      packageFiles: newPackages,
    });
  };

  return (
    <div>
      <div className="flex flex-col gap-4 mb-6">
        <h1 className="text-xl sm:text-2xl lg:text-4xl font-semibold">
          Packages
        </h1>
        <p className="text-gray-500 text-sm sm:text-base">
          Add any packages for the services you
        </p>
        <div className="bg-black text-white font-semibold w-fit uppercase relative">
          <button className="uppercase flex justify-center items-center gap-2 cursor-pointer">
            <span className="text-sm sm:text-base cursor-pointer">
              Add Packages
            </span>
            <FaPlus className="text-[12px] cursor-pointer" />
            <input
              type="file"
              onChange={packageSelectHandler}
              multiple
              className="absolute opacity-0 cursor-pointer"
            />
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {formData.packageFiles.map((file, index) => (
            <div
              className="border p-3 sm:p-4 flex justify-between items-center text-sm sm:text-base"
              key={index}
            >
              <div className="truncate">{file.name}</div>
              <button
                type="button"
                onClick={() => packageRemoveHandler(index)}
                className="flex justify-center items-center bg-white p-2 rounded-full text-[12px]"
              >
                <ImBin2 />
              </button>
            </div>
          ))}
        </div>
        <div className="flex gap-4 mt-8">
          <button
            className="uppercase border text-sm sm:text-base"
            onClick={() => setPage(page - 1)}
            type="button"
          >
            Back
          </button>
          <button
            className="uppercase bg-primary text-white text-sm sm:text-base"
            onClick={() => setPage(page + 1)}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Packages;
