import { FaAngleDown } from "react-icons/fa6";

interface Props {
  showModal: boolean;
  setShowModal: (showModal: boolean) => void;
  showLargeImageModal: boolean;
  setShowLargeImageModal: (showModal: boolean, index?: number) => void;
  setLargeImageIdx: (number: number) => void;
  img: string[];
}

const ImageModal = ({
  showModal,
  setShowModal,
  img,
  setShowLargeImageModal,
  setLargeImageIdx,
}: Props) => {
  const clickHandler = (index: number) => {
    setShowLargeImageModal(true);
    setLargeImageIdx(index);
  };
  return (
    <div
      className={`fixed top-0 left-0 right-0 h-full w-full bg-black transition-transform z-30 ${
        showModal ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-8 md:px-12 relative flex justify-end py-6 text-sm sm:text-base">
        <div
          className="border border-white rounded-full text-white cursor-pointer p-2"
          onClick={() => setShowModal(false)}
        >
          <FaAngleDown className="translate-y-[1px]" />
        </div>
      </div>
      <div className="overflow-y-auto h-full no-scrollbar">
        <ul className="flex flex-col justify-center items-center gap-4">
          {img.map((x, index) => (
            <li className="w-full flex justify-center items-center">
              <img
                src={`https://res.cloudinary.com/dkxs4o9vt/image/upload/v1705560129/${x}`}
                alt="Venue Image"
                className="w-[800px] h-[250px] sm:h-[350px] md:h-[450px] object-cover cursor-pointer"
                onClick={() => clickHandler(index)}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ImageModal;
