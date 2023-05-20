import { useLoaderData } from "react-router-dom";
import usetitle from "../../hooks/useTitle";
import AllToysRow from "./AllToysRow";
import { toast } from "react-toastify";

const AllToys = () => {
  usetitle("All Toys");
  const allToys = useLoaderData();
  allToys && toast.success(
    `All the Toys in our collection !!`,
    {
      position: "bottom-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    }
  );
  return (
    <div className="my-16">
      <div className="my-16">
            <h1 className="text-7xl text-teal-400 font font-bold text-center">All Toys</h1>
        </div>
      <div className="overflow-x-auto">
      {/*  */}
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>Number</th>
              <th>Seller</th>
              <th>Toy Name</th>
              <th>Sub Category</th>
              <th>Price</th>
              <th>Available Quantity</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>

            {
              allToys.map((toy,index)=><AllToysRow key={toy._id} toy={toy} index={index}></AllToysRow>)
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllToys;
