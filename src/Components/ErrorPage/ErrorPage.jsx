import { useNavigate, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1);
  };
  const errorObj = useRouteError();
  const { data, status } = errorObj;
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-lime-100 to-lime-400">
      <div className="bg-white p-8 rounded-lg shadow-xl text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Oops! Something went wrong.
        </h1>
        <p className=" text-lg mb-4 text-error font-bold">{data}</p>
        <p className="text-lg mb-4 text-error font-bold">{`Status: ${status}`}</p>
        <p className="text-gray-600 text-lg mb-4">
          We are sorry, but there was an error while processing your request.
        </p>
        <p className="text-gray-600 text-lg mb-8">
          Please try again later or contact support if the issue persists.
        </p>
        <button
          onClick={handleGoBack}
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          Go Back Home
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;
