import Lottie from "lottie-react";
import errorGIF from "../../assets/404-page-not-found.json";
import { Link } from "react-router-dom";
const ErrorPage = () => {
 
  return (
    <div>
      <div className="w-1/2 mx-auto">
        <Lottie
          className="w-[720px] h-[520px]  "
          animationData={errorGIF}
          loop={true}
        />
      </div>
      <div className="text-center my-5">
        <Link
          to={"/"}
          className="btn btn-outline btn-accent md:btn-wide  capitalize uppercase:text-normal"
        >
          Back to Homepage
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
