import { useContext, useEffect, useState } from "react";
import usetitle from "../../hooks/useTitle";
import { AuthContext } from "../../Providers/AuthProviders";

const MyToys = () => {
  usetitle('My Toys')
  const {user} = useContext(AuthContext)
  const [myToys , setMyToys] = useState([])
const url = `http://localhost:3000/mytoys?email=${user?.email}`
  useEffect(()=>{
    fetch(url)
    .then(res=>res.json())
    .then(data =>setMyToys(data))
  },[url])
    return (
        <div>
            <h2>My {myToys.length} toys are here</h2>
        </div>
    );
};

export default MyToys;