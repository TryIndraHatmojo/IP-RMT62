import { Navigate, Outlet } from "react-router";
import Navbar from "../components/Navbar";
import { getToken } from "../helpers/helpers";

export default function LoginLayout() {
  const token = getToken();
  if (token) {
    return <Navigate to={"/dashboard"} />;
  }
  return (
    <>
      <Navbar isLogin={false} />
      <Outlet />
    </>
  );
}
