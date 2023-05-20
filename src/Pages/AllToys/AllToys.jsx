import { useLoaderData } from "react-router-dom";
import usetitle from "../../hooks/useTitle";
import AllToysRow from "./AllToysRow";
import { toast } from "react-toastify";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
const AllToys = () => {
  usetitle("All Toys");
  const loadedToys = useLoaderData();

  const [allToys, setAllToys] = useState(loadedToys);

  //  Handle search
  const handleSearch = (event) => {
    event.preventDefault();
    const form = event.target;
    const searchText = form.search.value;
    const matchingToys = loadedToys.filter((toy) =>
      toy.toyName.toLowerCase().includes(searchText.toLowerCase())
    );
    console.log(matchingToys);
    if (matchingToys.length > 0) {
      setAllToys(matchingToys);
      toast.success(`We have found ${matchingToys.length} results.`, {
        position: "bottom-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else {
      toast.error(`We have found No result !!`, {
        position: "bottom-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  return (
    <div className="my-16">
      <div className="my-16">
        <h1 className="text-7xl text-teal-400 font font-bold text-center">
          All Toys
        </h1>
      </div>
      <div className="my-16 text-center w-1/2 md:w-9/12 mx-auto ">
        <form
          onSubmit={handleSearch}
          className="flex items-center justify-center gap-4"
        >
          <div className="form-control w-3/5">
            <input
              type="text"
              name="search"
              placeholder="Search Toy By Name..."
              className="input input-info"
              required
            />
          </div>

          <button
            type="submit"
            className="btn border-none text-xl  rounded-3xl bg-emerald-400 hover:bg-emerald-500 capitalize uppercase:text-normal"
          >
            <FaSearch></FaSearch>
          </button>
        </form>
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
            {allToys.map((toy, index) => (
              <AllToysRow key={toy._id} toy={toy} index={index}></AllToysRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllToys;
