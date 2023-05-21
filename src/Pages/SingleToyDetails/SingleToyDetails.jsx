import { useLoaderData } from "react-router-dom";

const SingleToyDetails = () => {
  const toy = useLoaderData();
const {toyPictureURL,toyName,sellerName,sellerEmail,price,rating,availableQuantity,detailDescription} =toy
// ( picture, toy name, seller name, seller email, price, rating, available quantity, and detail description)
  return (
    <div className="card lg:card-side bg-base-100 shadow-xl">
      <figure>
        <img
          src={toyPictureURL}
          alt="Album"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{toyName}</h2>
        <p>Seller Name: {sellerName}</p>
        <p>Seller Email: {sellerEmail}</p>
        <p>Price : ${price}</p>
        <p>rating: {rating}/10</p>
        <p>Available Quantity: {rating}</p>
        <p>DetailDescription: {detailDescription}</p>
        
      </div>
    </div>
  );
};

export default SingleToyDetails;
