import { Navigate, Outlet } from "react-router";
import Navbar from "../components/Navbar";
import { getToken } from "../helpers/helpers";

export default function AuthLayout() {
  const token = getToken();
  if (token) {
    return (
      <>
        <Navbar isLogin={true} />
        <Outlet />
      </>
    );
  }
  return <Navigate to={"/login"} />;
}
