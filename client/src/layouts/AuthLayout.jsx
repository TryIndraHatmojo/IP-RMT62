import { Navigate, Outlet } from "react-router";
import Navbar from "../components/Navbar";
import { getToken } from "../helpers/helpers";
import Footer from "../components/Footer";

export default function AuthLayout() {
  const token = getToken();
  if (token) {
    return (
      <>
        <Navbar isLogin={true} />
        <Outlet />
        <Footer />
      </>
    );
  }
  return <Navigate to={"/login"} />;
}
