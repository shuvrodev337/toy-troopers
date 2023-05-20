import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import HomePage from "../Pages/Home/HomePage/HomePage";
import Login from "../Pages/Login/Login";
import Registration from "../Pages/Registration/Registration";
import Blogs from "../Pages/Blogs/Blogs";
import AllToys from "../Pages/AllToys/AllToys";
import MyToys from "../Pages/MyToys/MyToys";
import AddAToy from "../Pages/AddAToy/AddAToy";
import PrivateRoute from "./PrivateRoute";
import UpdateToy from "../Pages/MyToys/UpdateToy";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <HomePage></HomePage>,
        loader:()=>fetch("http://localhost:3000/toys")
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Registration></Registration>
      },
      {
        path: "/blogs",
        element:<Blogs></Blogs>
      },
      {
        path: "/alltoys",
        element: <AllToys></AllToys>,
        loader:()=>fetch("http://localhost:3000/toys")
      },
      {
        path: "/mytoys",
        element: <PrivateRoute><MyToys></MyToys></PrivateRoute>
      },
      {
        path: "/addatoy",
        element: <PrivateRoute><AddAToy></AddAToy></PrivateRoute>
      },
      {
        path: "/updatetoy/:id",
        element: <PrivateRoute><UpdateToy></UpdateToy></PrivateRoute>,
        loader:({params})=>fetch(`http://localhost:3000/updatetoy/${params.id}`)
      },
    ],
  },
]);
export default router;
