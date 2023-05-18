import { Link } from "react-router-dom";
import websiteLogo from "../../../assets/logo.png";
import { useContext, useState } from "react";
import { AuthContext } from "../../../Providers/AuthProviders";
import { toast } from "react-toastify";

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [errorText, setErrorText] = useState("");

  const handleLogOut = () => {
    logOut()
      .then(() => {
        toast.success("You have successfully Logged Out !", {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      })
      .catch((error) => {
        setErrorText(error.message);
      });
  };
  const centerNavItems = (
    <>
      <li>
        <Link to={"/"}>Home</Link>
      </li>
      <li>
        <Link to={"/blog"}>Blog</Link>
      </li>
      <li>
        <Link to={"/blog"}>All Toys</Link>
      </li>
      <li>
        <Link to={"/blog"}>My Toys</Link>
      </li>
      <li>
        <Link to={"/blog"}>Add A Toy</Link>
      </li>
    </>
  );
  const endNavItems = (
    <>
      {user?.email ?
        <>
          <li>
            <Link onClick={handleLogOut}>Logout</Link>
          </li>
          
          <img className="rounded-full border ring-2 ring-white" src={user?.photoURL} style={{width:"40px",height:"40px"}}/>
         
          
          
        </> :
        <>
        <li>
            <Link to={"/login"}>Login</Link>
          </li>

          <li>
            <Link to={"/register"}>Register</Link>
          </li>
        </>
      }
    </>
  );
  return (
    <div className="navbar h-24 mb-4 text-primary-content rounded-lg mt-4 bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-l">
      <div className="navbar-start">
        <Link to={"/"}>
          <img src={websiteLogo} alt="toy-trooper-logo" className="h-20" />
        </Link>
        <Link to={"/"}>
          <h2 className="text-4xl font-bold">Toy Troopers</h2>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{centerNavItems}</ul>
      </div>
      <div className="navbar-end ">
        <ul className="menu menu-horizontal px-1 hidden lg:flex">
          {endNavItems}
        </ul>

        <div className="dropdown dropdown-bottom dropdown-end">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-emerald-300 rounded-box w-52"
          >
            {centerNavItems}
            {endNavItems}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
