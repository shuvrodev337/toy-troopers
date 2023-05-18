import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProviders";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  if (loading) {
    return <h3 className="text-5xl">Loading</h3>;
  }
  if (user) {
    return children;
  }
  return (
    <Navigate
      to={"/login"}
      replace={true}
      state={{ from: location }}
    ></Navigate>
  );
};

export default PrivateRoute;
