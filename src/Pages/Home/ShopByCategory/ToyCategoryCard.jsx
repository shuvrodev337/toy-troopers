import { Link } from "react-router-dom";

const ToyCategoryCard = ({ toy }) => {
  const {_id, toyPictureURL, toyName, price, rating } = toy;
  console.log(toy);
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
<Link to={`/toy/${_id}`} className="btn btn-accent capitalize uppercase:text-normal text-xl">
        View Details
</Link>
      </div>
    </div>
  </div>
  
    
  );
};

export default ToyCategoryCard;
