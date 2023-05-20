import { useLoaderData } from "react-router-dom";
import usetitle from "../../hooks/useTitle";
import AllToysRow from "./AllToysRow";

const AllToys = () => {
  usetitle("All Toys");
  const allToys = useLoaderData();
  return (
    <div className="my-16">
      <h2>All toys here, there are {allToys.length} toys</h2>
      <div className="overflow-x-auto">
      {/*  */}
        <table className="table">
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
