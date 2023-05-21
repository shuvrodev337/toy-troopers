import { useContext } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../../../Providers/AuthProviders";

const ToyCategoryCard = ({ toy }) => {
  const {_id, toyPictureURL, toyName, price, rating } = toy;
  const {user} = useContext(AuthContext)
  const showDetails =()=>{
    !user &&  toast.error(
      `You have to Login First!!`,
      {
        position: "top-left",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      }
      );
  }
  return (
    <div className="grid grid-cols-1 md:grid-cols-2  bg-base-100 shadow-2xl overflow-hidden p-4">
    <div className="h-56 md:h-64 lg:h-80">
      <img
        src={toyPictureURL}
        alt="Album"
        // className="w-full h-56 md:h-64 lg:h-80 object-cover"
        className="w-56 h-56 md:h-64 lg:h-80 object-cover"
      />
    </div>
    <div className="card-body flex flex-col items-start justify-center gap-4 text-left">
      <div >
      <h2 className="card-title"> {toyName}</h2>
      </div>
      <div className="text-left">
      <p className="">Rating: {rating}</p>
      <p className="">Price: ${price}</p>
      </div>
      <div className="card-actions ">
<Link to={`/toy/${_id}`} onClick={showDetails} className="btn btn-accent capitalize uppercase:text-normal text-xl">
        View Details
</Link>
      </div>
    </div>
  </div>
  
    
  );
};

export default ToyCategoryCard;
