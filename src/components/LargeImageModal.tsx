import { IoIosCloseCircleOutline } from "react-icons/io";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

interface Props {
  showLargeImageModal: boolean;
  setShowLargeImageModal: (showModal: boolean) => void;
  img: string[];
  largeImageIdx: number | null;
  setLargeImageIdx: (number: number) => void;
}

const LargeImageModal = ({
  showLargeImageModal,
  setShowLargeImageModal,
  img,
  largeImageIdx,
  setLargeImageIdx,
}: Props) => {
  const toggleImgDown = () => {
    if (largeImageIdx !== 0) {
      setLargeImageIdx(largeImageIdx! - 1);
    }
  };

  const toggleImgUp = () => {
    const l = img.length - 1;
    if (largeImageIdx !== l) {
      setLargeImageIdx(largeImageIdx! + 1);
    }
  };

  return (
    <div
      className={`fixed top-0 left-0 right-0 h-full bg-black container transition-transform z-30 overflow-y-auto flex justify-center items-center ${
        showLargeImageModal ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <button
        className="text-white absolute top-2 right-2 text-3xl"
        onClick={() => setShowLargeImageModal(false)}
      >
        <IoIosCloseCircleOutline />
      </button>
      <div className="relative w-full sm:w-[90vw]">
        <img
          src={`https://res.cloudinary.com/dkxs4o9vt/image/upload/v1705560129/${
            img[largeImageIdx!]
          }`}
          alt="Venue Image"
          className="object-cover cursor-pointer h-[40vh] w-full"
        />
      </div>
      {largeImageIdx !== 0 && (
        <div
          className="bg-white flex justify-center items-center text-[10px] h-[30px] w-[30px] sm:text-sm p-2 sm:p-3 rounded-full text-black cursor-pointer absolute left-[8%]"
          onClick={toggleImgDown}
        >
          <FaChevronLeft />
        </div>
      )}
      {largeImageIdx !== img.length - 1 && (
        <div
          className="bg-white flex justify-center items-center text-[10px] h-[30px] w-[30px] sm:text-sm p-2 sm:p-3 rounded-full text-black cursor-pointer absolute right-[8%]"
          onClick={toggleImgUp}
        >
          <FaChevronRight />
        </div>
      )}
      <div className="absolute text-white bottom-16">{`${
        largeImageIdx! + 1
      } / ${img.length}`}</div>
    </div>
  );
};

export default LargeImageModal;
