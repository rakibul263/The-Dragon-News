import React, { use } from "react";
import { AuthContext } from "./AuthProvider";
import { Navigate, useLocation } from "react-router";

const PrivateRoute = ({ children }) => {
  const {loading, user } = use(AuthContext);
  const location = useLocation();

  if(loading){
    return <span className="loading loading-spinner loading-xl"></span>;
  }
  if (user && user?.email) {
    return children;
  }
  else{
    return <Navigate to='/auth/login' state={location.pathname}></Navigate>
  }
};

export default PrivateRoute;
