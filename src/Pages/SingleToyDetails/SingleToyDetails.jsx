import { useLoaderData } from "react-router-dom";
import usetitle from "../../hooks/useTitle";

const SingleToyDetails = () => {

  const toy = useLoaderData();
  const {
    toyPictureURL,
    toyName,
    sellerName,
    sellerEmail,
    price,
    rating,
    availableQuantity,
    detailDescription,
  } = toy;
  usetitle(`${toyName}`);

  // ( picture, toy name, seller name, seller email, price, rating, available quantity, and detail description)
  return (
    <div className="card lg:card-side bg-base-100 shadow-xl my-28 border border-teal-400">
      <figure className="md:w-1/2">
        <img src={toyPictureURL} alt="Album" className="w-56" />
      </figure>
      <div className="card-body text-slate-600 md:w-1/2">
        <h2 className="font-bold text-2xl text-center mb-10">{toyName}</h2>

        <p>
          <span className="font-semibold text-lg ">Seller Name: </span>
          {sellerName}
        </p>
        <p>
          <span className="font-semibold text-lg ">Seller Email: </span>
          {sellerEmail}
        </p>
        <p>
          <span className="font-semibold text-lg ">Price : $</span>
          {price}
        </p>
        <p>
          <span className="font-semibold text-lg ">rating: </span>
          {rating}/10
        </p>
        <p>
          <span className="font-semibold text-lg ">Available Quantity: </span>
          {availableQuantity}
        </p>
        <p>
          <span className="font-semibold text-lg ">DetailDescription</span>:{" "}
          {detailDescription}
        </p>
      </div>
    </div>
  );
};

export default SingleToyDetails;
