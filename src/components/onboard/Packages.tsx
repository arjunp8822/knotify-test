import { FaPlus } from "react-icons/fa6";
import { FormData as Data } from "../../pages/Onboard";
import { ImBin2 } from "react-icons/im";
import axios from "axios";
import Loading from "./Loading";
import { useState } from "react";

interface Props {
  formData: Data;
  setFormData: React.Dispatch<React.SetStateAction<Data>>;
  page: number;
  setPage: (page: number) => void;
}

const Packages = ({ formData, setFormData, page, setPage }: Props) => {
  const [loading, setLoading] = useState(false);
  const packageSelectHandler = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    e.preventDefault();
    setLoading(true);
    const selectedFiles = e.target.files;
    if (selectedFiles) {
      const fileListArray = Array.from(selectedFiles);
      try {
        const uploadedPublicIds = await Promise.all(
          fileListArray.map(async (pkg) => {
            const formDataCloudinary = new FormData();
            formDataCloudinary.append("file", pkg);
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
          packageFiles: [...formData.packageFiles, ...fileListArray],
          packageLinks: [...formData.packageLinks, ...uploadedPublicIds],
        });
        setLoading(false);
      } catch (e) {
        console.log("Error uploading packages to Cloudinary:", e); // Log any errors
      }
    }
  };

  const packageRemoveHandler = async (index: number) => {
    const newPackages = [...formData.packageFiles];
    newPackages.splice(index, 1);
    const newCloudinaryPublicIds = [...formData.packageLinks];
    const removedPublicId = newCloudinaryPublicIds.splice(index, 1)[0];
    setFormData({
      ...formData,
      packageFiles: newPackages,
      packageLinks: newCloudinaryPublicIds,
    });

    try {
      await axios.delete(
        `https://api.cloudinary.com/v1_1/dkxs4o9vt/image/upload/${removedPublicId}`
      );
      console.log("Package removed from Cloudinary successfully.");
    } catch (error) {
      console.error("Error removing package from Cloudinary:", error);
    }
  };

  return (
    <div>
      <div className="flex flex-col gap-4 mb-6">
        <h1 className="text-xl sm:text-2xl lg:text-4xl font-semibold">
          Packages
        </h1>
        <p className="text-gray-500 text-sm sm:text-base">
          Add any packages for the services you offer. This is completely
          optional and you can add them later.
        </p>
        <div className="bg-black text-white font-semibold w-fit uppercase relative">
          {loading ? (
            <button className="uppercase w-[160px] sm:w-[180px] h-[40px] text-white text-sm sm:text-base">
              <Loading />
            </button>
          ) : (
            <button className="uppercase flex justify-center items-center gap-2 cursor-pointer w-[160px] h-[40px] sm:w-[180px]">
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
          )}
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
