import { useContext, useEffect, useState } from "react";
import usetitle from "../../hooks/useTitle";
import { AuthContext } from "../../Providers/AuthProviders";
import MyToysRow from "./MyToysRow";
import { toast } from "react-toastify";

const MyToys = () => {
  usetitle("My Toys");
  const { user } = useContext(AuthContext);
  const [myToys, setMyToys] = useState([]);
  const url = `http://localhost:3000/mytoys?email=${user?.email}`;

  // Load user specific toys from DB
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setMyToys(data);
        console.log(data);
        toast.success(
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
  }, [url, user]);
  return (
    <div>
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
              <MyToysRow key={toy._id} toy={toy} index={index}></MyToysRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyToys;
