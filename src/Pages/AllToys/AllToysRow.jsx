import { useContext } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../../Providers/AuthProviders";

const AllToysRow = ({ toy, index }) => {
  const { _id,toyName, sellerName, subCategory, price, availableQuantity } = toy || {}
  const {user} = useContext(AuthContext)

  const showDetails =()=>{
   !user && toast.error(
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
    <tr className="text-sm ">
      <th>{index + 1}</th>
      <td>{sellerName ? sellerName : ""}</td>
      <td>{toyName.length > 30 ? `${toyName.slice(0, 30)}...` : toyName}</td>
      <td>{subCategory}</td>
      <td>${price}</td>
      <td>{availableQuantity}</td>
      <td>
        <Link to={`../toy/${_id}`} onClick={showDetails} className="btn btn-success btn-sm text-white">Show Details</Link>
      </td>
      {/* <td>
        <Link onClick={showDetails} className="btn btn-success btn-sm text-white">Show Details</Link>
      </td> */}
    </tr>
  );
};

export default AllToysRow;
