import { useContext } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../../Providers/AuthProviders";

const MyToysRow = ({toy,index,handleDelete}) => {
    const {_id,toyName,sellerName,subCategory,price,availableQuantity,} = toy
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
        <tr className="">
      <th>{index + 1}</th>
      <td>{sellerName ? sellerName : ""}</td>
      <td>{toyName.length > 30 ? `${toyName.slice(0, 30)}...` : toyName}</td>

      <td>{subCategory}</td>
      <td>${price}</td>
      <td>{availableQuantity}</td>
      <td className="flex flex-col items-center gap-2">
        <Link to={`../toy/${_id}`} onClick={showDetails} className="btn btn-success btn-xs text-white">Details</Link>
        <Link to={`/updatetoy/${_id}`} className="btn btn-warning btn-xs text-white">Update</Link>
        <Link onClick={()=>handleDelete(_id)} className="btn btn-error btn-xs text-white">Delete</Link>
      
      </td>
    </tr>
    );
};

export default MyToysRow;