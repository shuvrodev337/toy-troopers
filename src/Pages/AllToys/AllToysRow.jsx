import { Link } from "react-router-dom";

const AllToysRow = ({ toy, index }) => {
  const { toyName, sellerName, subCategory, price, availableQuantity } = toy || {}
  // console.log(toy);
  return (
    <tr className="text-sm ">
      <th>{index + 1}</th>
      <td>{sellerName ? sellerName : ""}</td>
      <td>{toyName.length > 30 ? `${toyName.slice(0, 30)}...` : toyName}</td>
      <td>{subCategory}</td>
      <td>${price}</td>
      <td>{availableQuantity}</td>
      <td>
        <Link className="btn btn-success btn-sm text-white">Show Details</Link>
      </td>
    </tr>
  );
};

export default AllToysRow;
