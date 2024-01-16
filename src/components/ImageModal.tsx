interface Props {
  showModal: boolean;
  setShowModal: (showModal: boolean) => void;
  img: string[];
}

const ImageModal = ({ showModal, setShowModal, img }: Props) => {
  return (
    <div
      className={`fixed top-0 left-0 right-0 h-full bg-black container transition-transform z-30 overflow-y-auto ${
        showModal ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <button
        className="text-white absolute top-2 right-2"
        onClick={() => setShowModal(false)}
      >
        Close
      </button>
      <ul className="flex flex-col justify-center items-center gap-4 mt-8">
        {img.map((x) => (
          <li className="w-full flex justify-center items-center">
            <img
              src={x}
              alt="Venue Image"
              className="w-[800px] h-[250px] sm:h-[350px] md:h-[450px] object-cover"
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ImageModal;
