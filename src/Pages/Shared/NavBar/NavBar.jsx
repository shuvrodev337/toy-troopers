import {  NavLink } from "react-router-dom";
import websiteLogo from "../../../assets/logo.png";
import { useContext, useState } from "react";
import { AuthContext } from "../../../Providers/AuthProviders";
import { toast } from "react-toastify";

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [errorText, setErrorText] = useState("");

  // Handle Logout
  const handleLogOut = () => {
    logOut()
      .then(() => {
        toast.success("You have successfully Logged Out !", {
          position: "bottom-center",
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
        toast.error(`Log Out Failed ! ${errorText}`, {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      });
  };

  // Central Nav Buttons
  const centerNavItems = (
    <>
      
        <NavLink className={({ isActive }) => (isActive ? "btn btn-accent capitalize uppercase:text-normal" : "")} to={"/"}>Home</NavLink>
      
      
        <NavLink className={({ isActive }) => (isActive ? "btn btn-accent capitalize uppercase:text-normal" : "")}  to={"/blogs"}>Blogs</NavLink>
      
      
        <NavLink className={({ isActive }) => (isActive ? "btn btn-accent capitalize uppercase:text-normal" : "")} to={"/alltoys"}>All Toys</NavLink>
      
      
      {user?.email && (
        <>
          
            <NavLink className={({ isActive }) => (isActive ? "btn btn-accent capitalize uppercase:text-normal" : "")} to={"/mytoys"}>My Toys</NavLink>
          
          
            <NavLink className={({ isActive }) => (isActive ? "btn btn-accent capitalize uppercase:text-normal" : "")} to={"/addatoy"}>Add A Toy</NavLink>
          
        </>
      )}
    </>
  );

  // Right Side Nav Buttons
  const endNavItems = (
    <>
      {user?.email ? (
        <>
          
            <NavLink onClick={handleLogOut}>Logout</NavLink>
          
          
        </>
      ) : (
        <>
          
            <NavLink className={({ isActive }) => (isActive ? "btn btn-accent capitalize uppercase:text-normal" : "")} to={"/register"}>Register</NavLink>
            <NavLink className={({ isActive }) => (isActive ? "btn btn-accent capitalize uppercase:text-normal" : "")} to={"/login"}>Login</NavLink>
          

          
          
        </>
      )}
      {
        user?.photoURL && <div
        className="tooltip  tooltip-bottom "
        data-tip={user?.displayName}
      >
        <img
          className="rounded-full border ring-2 ring-white"
          src={user?.photoURL}
          style={{ width: "44px", height: "44px" }}
        />
      </div>
      }
    </>
  );
  return (
    <div className="navbar h-24 mb-10 px-6 text-slate-500 rounded-lg mt-4 bg-transparent">
      {/* bg-gradient-to-r from-cyan-100 to-blue-100 hover:bg-gradient-to-r */}
      <div className="navbar-start">
        <NavLink to={"/"}>
          <img src={websiteLogo} alt="toy-trooper-logo" className="h-20" />
        </NavLink>
        <NavLink to={"/"}>
          <h2 className="text-4xl font-bold">Toy Troopers</h2>
        </NavLink>
      </div>
      <div className="navbar-center hidden lg:flex ">
        <ul className="menu menu-horizontal space-x-6  items-center">{centerNavItems}</ul>
      </div>
      <div className="navbar-end ">
        <ul className="menu menu-horizontal space-x-6 hidden lg:flex items-center">
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
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-emerald-300 rounded-box w-52 items-center"
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
