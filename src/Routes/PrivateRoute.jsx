import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProviders";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  if (loading) {
    return (
<div className="flex justify-center items-center h-screen">
<div className="radial-progress" style={{"--value":70}}>70%</div>
</div>    );
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
