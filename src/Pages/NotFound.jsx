import { FaExclamationTriangle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  document.title = "Baoiam Innovations | 404 Not found";
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate("/");
  };

  return (
    <div className="flex flex-col justify-center items-center w-full h-screen bg-gradient-to-b from-gray-100 to-gray-300 p-6">
      <div className="mb-6">
        <FaExclamationTriangle
          size={90}
          className="text-red-500 animate-bounce"
        />
      </div>

      <h1 className="text-4xl text-center md:text-5xl lg:text-5xl font-bold text-gray-800 mb-4">
        Oops! Page Not Found
      </h1>

      <p className="text-lg md:text-xl lg:text-2xl text-gray-600 mb-6 text-center">
        We can't seem to find the page you're looking for. It may have been
        moved or no longer exists.
      </p>
      <button
        onClick={handleHomeClick}
        className="px-8 py-4 text-white bg-orange-500 rounded text-lg md:text-xl lg:text-xl shadow-lg hover:bg-orange-600 transition duration-300"
      >
        Take me Home
      </button>
    </div>
  );
};

export default NotFound;
