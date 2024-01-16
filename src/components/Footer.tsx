import { MdCopyright } from "react-icons/md";

const Footer = () => {
  return (
    <div className="container text-gray-500 flex justify-center items-center gap-4">
      <div className="flex justify-center items-center gap-1">
        <MdCopyright />
        <span>2024 Knotify</span>
      </div>
      <div className="w-1 h-1 bg-gray-500 rounded-full"></div>
      <div>Privacy</div>
      <div className="w-1 h-1 bg-gray-500 rounded-full"></div>
      <div>Terms</div>
    </div>
  );
};

export default Footer;
