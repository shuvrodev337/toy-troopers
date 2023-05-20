import { Link } from "react-router-dom";

const MyToysRow = ({toy,index}) => {
    const {_id,toyName,sellerName,subCategory,price,availableQuantity,} = toy

    return (
        <tr className="">
      <th>{index + 1}</th>
      <td>{sellerName ? sellerName : ""}</td>
      <td>{toyName.length > 30 ? `${toyName.slice(0, 30)}...` : toyName}</td>

      <td>{subCategory}</td>
      <td>${price}</td>
      <td>{availableQuantity}</td>
      <td className="flex flex-col items-center gap-2">
        <Link to={"/"} className="btn btn-success btn-xs text-white">Details</Link>
        <Link to={`/updatetoy/${_id}`} className="btn btn-warning btn-xs text-white">Update</Link>
        <Link className="btn btn-error btn-xs text-white">Delete</Link>
      
      </td>
    </tr>
    );
};

export default MyToysRow;