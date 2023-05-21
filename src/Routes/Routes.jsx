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
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import SingleToyDetails from "../Pages/SingleToyDetails/SingleToyDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <HomePage></HomePage>,
        loader:()=>fetch("https://toy-troopers-server.vercel.app/toys")
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
        loader:()=>fetch("https://toy-troopers-server.vercel.app/toys")
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
        loader:({params})=>fetch(`https://toy-troopers-server.vercel.app/updatetoy/${params.id}`)
      },
      {
        path: "/toy/:id",
        element: <PrivateRoute><SingleToyDetails></SingleToyDetails></PrivateRoute>,
        loader:({params})=>fetch(`https://toy-troopers-server.vercel.app/toy/${params.id}`)
      },
    ],
  },
]);
export default router;
