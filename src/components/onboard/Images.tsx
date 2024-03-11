import { FaPlus } from "react-icons/fa6";
import { FormData as Data } from "../../pages/Onboard";
import { ImBin2 } from "react-icons/im";
import axios from "axios";
import { useState } from "react";
import Loading from "./Loading";

interface Props {
  formData: Data;
  setFormData: React.Dispatch<React.SetStateAction<Data>>;
  page: number;
  setPage: (page: number) => void;
}

const Images = ({ formData, setFormData, page, setPage }: Props) => {
  const [loading, setLoading] = useState(false);
  const imgSelectHandler = async (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setLoading(true);
    const selectedFiles = e.target.files;
    if (selectedFiles) {
      const fileListArray = Array.from(selectedFiles);
      try {
        const uploadedPublicIds = await Promise.all(
          fileListArray.map(async (image) => {
            const formDataCloudinary = new FormData();
            formDataCloudinary.append("file", image);
            formDataCloudinary.append("upload_preset", "knotify");
            const response = await axios.post(
              "https://api.cloudinary.com/v1_1/dkxs4o9vt/image/upload",
              formDataCloudinary
            );
            console.log("Cloudinary Response:", response.data); // Log Cloudinary response
            return response.data.public_id;
          })
        );

        setFormData({
          ...formData,
          imageFiles: [...formData.imageFiles, ...fileListArray],
          imageLinks: [...formData.imageLinks, ...uploadedPublicIds],
        });
        setLoading(false);
      } catch (e) {
        console.log("Error uploading images to Cloudinary:", e); // Log any errors
      }
    }
  };

  const imgRemoveHandler = async (index: number) => {
    const newImages = [...formData.imageFiles];
    newImages.splice(index, 1);
    const newCloudinaryPublicIds = [...formData.imageLinks];
    const removedPublicId = newCloudinaryPublicIds.splice(index, 1)[0];
    setFormData({
      ...formData,
      imageFiles: newImages,
      imageLinks: newCloudinaryPublicIds,
    });

    try {
      await axios.delete(
        `https://api.cloudinary.com/v1_1/dkxs4o9vt/image/upload/${removedPublicId}`
      );
      console.log("Image removed from Cloudinary successfully.");
    } catch (error) {
      console.error("Error removing image from Cloudinary:", error);
    }
  };

  console.log(formData);

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
          {loading ? (
            <button className="uppercase w-[150px] sm:w-[170px] h-[40px] text-white text-sm sm:text-base">
              <Loading />
            </button>
          ) : (
            <button className="uppercase flex justify-center items-center gap-2 cursor-pointer w-[150px] h-[40px] sm:w-[170px]">
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
          )}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {formData.imageFiles.map((file, index) => (
            <div className="relative w-full aspect-w-4 aspect-h-3" key={index}>
              <img
                src={URL.createObjectURL(file)}
                alt={file.name}
                className="object-cover w-full h-full"
              />
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
