import { Link } from "react-router-dom";


const ErrorPage = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold text-red-500">Oops! Page Not Found</h1>
      <p className="text-lg mt-2">The page you're looking for doesn't exist.</p>
      <Link navigate='/' href="/" className="mt-4 text-blue-600 underline">Go Back Home</Link>
    </div>
  );
};

export default ErrorPage;
