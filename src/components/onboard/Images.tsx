import { FaPlus } from "react-icons/fa6";
import { FormData } from "../../pages/Onboard";
import { ImBin2 } from "react-icons/im";

interface Props {
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
  page: number;
  setPage: (page: number) => void;
}

const Images = ({ formData, setFormData, page, setPage }: Props) => {
  const imgSelectHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const selectedFiles = e.target.files;
    if (selectedFiles) {
      const fileListArray = Array.from(selectedFiles);
      setFormData({
        ...formData,
        imageFiles: [...formData.imageFiles, ...fileListArray],
      });
    }
  };

  const imgRemoveHandler = (index: number) => {
    const newImages = [...formData.imageFiles];
    newImages.splice(index, 1);
    setFormData({
      ...formData,
      imageFiles: newImages,
    });
  };

  return (
    <div>
      <div className="flex flex-col gap-4 mb-6">
        <h1 className="text-xl sm:text-2xl lg:text-4xl font-semibold">
          Images
        </h1>
        <p className="text-gray-500 text-sm sm:text-base">
          You'll need 5 photos to get started. You can add more or make changes
          later.
        </p>
        <div className="bg-black text-white font-semibold w-fit uppercase relative">
          <button className="uppercase flex justify-center items-center gap-2 cursor-pointer">
            <span className="text-sm sm:text-base cursor-pointer">
              Add Photos
            </span>
            <FaPlus className="text-[12px] cursor-pointer" />
            <input
              type="file"
              onChange={imgSelectHandler}
              multiple
              className="absolute opacity-0 cursor-pointer"
            />
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {formData.imageFiles.map((file, index) => (
            <div className="relative" key={index}>
              <img src={URL.createObjectURL(file)} alt={file.name} />
              <button
                type="button"
                onClick={() => imgRemoveHandler(index)}
                className="flex justify-center items-center absolute top-2 right-2 bg-white p-2 rounded-full text-[12px]"
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
          {formData.imageFiles.length >= 5 ? (
            <button
              className="uppercase bg-primary text-white text-sm sm:text-base"
              onClick={() => setPage(page + 1)}
            >
              Next
            </button>
          ) : (
            <button
              className="uppercase bg-gray-400 text-white text-sm sm:text-base"
              onClick={() => setPage(page + 1)}
              disabled
            >
              Next
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Images;
