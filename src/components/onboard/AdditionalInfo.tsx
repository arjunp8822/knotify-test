import { useRef, useState } from "react";
import { FormData as Data } from "../../pages/Onboard";
import emailjs from "@emailjs/browser";
import axios from "axios";
import Loading from "./Loading";
import Thankyou from "./Thankyou";

interface Props {
  formData: Data;
  setFormData: React.Dispatch<React.SetStateAction<Data>>;
  page: number;
  setPage: (page: number) => void;
}

const AdditionalInfo = ({ formData, setFormData, page, setPage }: Props) => {
  const [loading, setLoading] = useState(false);
  const form = useRef<HTMLFormElement>(null);
  const [thankYouModal, setThankYouModal] = useState(false);
  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    // image upload to cloudinary
    try {
      const links: string[] = [];
      await Promise.all(
        formData.imageFiles.map(async (image) => {
          const formData = new FormData();
          formData.append("file", image);
          formData.append("upload_preset", "knotify");
          const response = await axios.post(
            "https://api.cloudinary.com/v1_1/dkxs4o9vt/image/upload",
            formData
          );
          links.push(response.data.public_id);
        })
      );
      setFormData((prevFormData) => ({
        ...prevFormData,
        imageLinks: links,
      }));
    } catch (e) {
      console.log(e);
    }

    // package upload to cloudinary
    try {
      const links: string[] = [];
      await Promise.all(
        formData.packageFiles.map(async (pkg) => {
          const formData = new FormData();
          formData.append("file", pkg);
          formData.append("upload_preset", "knotify");
          const response = await axios.post(
            "https://api.cloudinary.com/v1_1/dkxs4o9vt/image/upload",
            formData
          );
          links.push(response.data.public_id);
        })
      );
      setFormData((prevFormData) => ({
        ...prevFormData,
        packageLinks: links,
      }));
    } catch (e) {
      console.log(e);
    }

    // email to me

    try {
      const response = await emailjs.sendForm(
        "service_mmx23ii",
        "template_3xei8kd",
        form.current!,
        "twcfsdyMRI2RLLHE1"
      );
      console.log(response);
    } catch (e) {
      console.log(e);
    }
    setThankYouModal(true);
    setLoading(false);
  };
  return (
    <div>
      <div className="flex flex-col gap-4 mb-6">
        <h1 className="text-xl sm:text-2xl lg:text-4xl font-semibold">
          Additional Infomation
        </h1>
        <p className="text-gray-500 text-sm sm:text-base">
          If you have any questions or would like to add anything, please let us
          know here.
        </p>
      </div>
      <div className="flex flex-col gap-2">
        <span className="w-full text-gray-500 ml-1 text-sm sm:text-base">
          {formData.additionalInfo.length.toLocaleString()} / {"1,000"}
        </span>
        <textarea
          placeholder="Start writing here..."
          className="border rounded w-full p-4 text-sm sm:text-base resize-none text-black"
          rows={8}
          value={formData.additionalInfo}
          onChange={(e) =>
            setFormData({ ...formData, additionalInfo: e.target.value })
          }
          maxLength={1000}
          name="additionalInfo"
        ></textarea>
      </div>
      <form onSubmit={submitHandler} ref={form}>
        <input
          type="text"
          name="name"
          value={formData.name}
          className="hidden"
          readOnly
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          className="hidden"
          readOnly
        />
        <input
          type="text"
          name="phone"
          value={formData.phone}
          className="hidden"
          readOnly
        />
        <input
          type="text"
          name="website"
          value={formData.website}
          className="hidden"
          readOnly
        />
        <input
          type="text"
          name="facebook"
          value={formData.facebook}
          className="hidden"
          readOnly
        />
        <input
          type="text"
          name="instagram"
          value={formData.instagram}
          className="hidden"
          readOnly
        />
        <input
          type="text"
          name="pinterest"
          value={formData.pinterest}
          className="hidden"
          readOnly
        />
        <input
          type="text"
          name="suburb"
          value={formData.suburb}
          className="hidden"
          readOnly
        />
        <input
          type="text"
          name="city"
          value={formData.city}
          className="hidden"
          readOnly
        />
        <input
          type="text"
          name="state"
          value={formData.state}
          className="hidden"
          readOnly
        />
        <input
          type="text"
          name="postCode"
          value={formData.postCode}
          className="hidden"
          readOnly
        />
        <textarea
          name="description"
          value={formData.description}
          className="hidden"
          readOnly
        />
        <textarea
          name="additionalInfo"
          value={formData.additionalInfo}
          className="hidden"
          readOnly
        />
        <input
          type="text"
          name="vendorType"
          value={formData.vendorType}
          className="hidden"
          readOnly
        />
        <input
          type="number"
          name="minGuests"
          value={formData.minGuests}
          className="hidden"
          readOnly
        />
        <input
          type="number"
          name="maxGuests"
          value={formData.maxGuests}
          className="hidden"
          readOnly
        />
        <input
          type="text"
          name="pricingType"
          value={formData.pricingType}
          className="hidden"
          readOnly
        />
        <input
          type="number"
          name="minPrice"
          value={formData.minPrice}
          className="hidden"
          readOnly
        />
        <input
          type="number"
          name="maxPrice"
          value={formData.maxPrice}
          className="hidden"
          readOnly
        />
        <input
          type="text"
          name="imageLinks"
          value={formData.imageLinks}
          className="hidden"
          readOnly
        />
        <input
          type="text"
          name="packageLinks"
          value={formData.packageLinks}
          className="hidden"
          readOnly
        />
        <div className="flex gap-4 mt-8">
          <button
            className="uppercase border text-sm sm:text-base"
            onClick={() => setPage(page - 1)}
            type="button"
          >
            Back
          </button>
          {loading ? (
            <button className="uppercase bg-primary w-[100px] text-white text-sm sm:text-base">
              <Loading />
            </button>
          ) : (
            <button className="uppercase bg-primary w-[100px] text-white text-sm sm:text-base">
              Submit
            </button>
          )}
        </div>
      </form>
      {thankYouModal && <Thankyou setThankYouModal={setThankYouModal} />}
    </div>
  );
};

export default AdditionalInfo;
