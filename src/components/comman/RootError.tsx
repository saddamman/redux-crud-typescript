import { Link } from "react-router-dom";
import Button from "../UI/Button";

const ErrorLayout = () => {
  return (
    <div className="errorLayout flex items-center justify-center h-screen w-screen">
      <div className=" p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 text-center w-10/12 mx-5">
        <div className=" text-red-950 text-6xl font-bold italic">404</div>
        <h2 className="">Some Thing Wrong!!</h2>
        <Link to="/">
          <Button>Home</Button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorLayout;
