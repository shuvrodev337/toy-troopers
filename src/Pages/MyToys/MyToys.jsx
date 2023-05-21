import { useContext, useEffect, useState } from "react";
import usetitle from "../../hooks/useTitle";
import { AuthContext } from "../../Providers/AuthProviders";
import MyToysRow from "./MyToysRow";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

const MyToys = () => {
  usetitle("My Toys");
  const { user } = useContext(AuthContext);
  const [myToys, setMyToys] = useState([]);

  // Sorting
  const [sortOrder, setSortOrder] = useState(null);

 

  // Load user specific toys from DB
  const url = `https://toy-troopers-server.vercel.app/mytoys?email=${user?.email}&sort=${sortOrder}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setMyToys(data);
        // console.log(data);
        !sortOrder && toast.success(
          `${user?.displayName} , These are the toys you have added !!`,
          {
            position: "bottom-center",
            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          }
        );
      });
  }, [url, user,sortOrder]);

  // Delete a toy
  const handleDelete = (_id) => {
    // console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://toy-troopers-server.vercel.app/toy/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            // console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your Toy has been deleted.", "success");
              const remaining = myToys.filter((toy) => toy._id !== _id);
              setMyToys(remaining);
            }
          });
      }
    });
  };
  return (
    <div>
      <div className="my-16">
        <h1 className="text-7xl text-teal-400 font font-bold text-center">
          Toys You Have Added
        </h1>
      </div>

      <div className="my-16 text-center mx-auto">
        <p className="text-xl my-2">Sort By Price</p>
        <select
          defaultValue={"Select"}
          onChange={(e) => setSortOrder(e.target.value)}
          className="drop-down"
        >
          <option value="Select" disabled>Options</option>
          <option value="ascending">Ascending</option>
          <option value="descending">Descending</option>
        </select>
      </div>

      <div className="overflow-x-auto">
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
            {myToys.map((toy, index) => (
              <MyToysRow
                key={toy._id}
                toy={toy}
                index={index}
                handleDelete={handleDelete}
              ></MyToysRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyToys;
