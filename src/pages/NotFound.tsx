import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col gap-4 justify-center items-center h-[60vh] mb-12">
      <h1 className="text-4xl sm:text-6xl font-semibold">404</h1>
      <h3 className="mb-8 text-xl sm:text-2xl font-semibold">
        Page Not Found!
      </h3>
      <p className="text-sm sm:text-base text-gray-500 text-center">
        We're sorry, the page you requested could not be found. Please go back
        to the homepage.
      </p>
      <button className="bg-primary text-white py-1 sm:py-2 text-sm sm-text-base">
        <Link to="/">Go Home</Link>
      </button>
    </div>
  );
};

export default NotFound;
