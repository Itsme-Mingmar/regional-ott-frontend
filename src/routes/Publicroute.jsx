import { Navigate, Outlet } from "react-router-dom";

const PublicRoute = () => {
  const auth = localStorage.getItem("auth");

  return auth ? <Navigate to="/home" /> : <Outlet />;
};

export default PublicRoute;