import { Navigate, Outlet } from "react-router";
import Navbar from "../components/Navbar";
import { getToken } from "../helpers/helpers";
import Footer from "../components/Footer";

export default function LoginLayout() {
  const token = getToken();
  if (token) {
    return <Navigate to={"/dashboard"} />;
  }
  return (
    <>
      <Navbar isLogin={false} />
      <Outlet />
      <Footer />
    </>
  );
}
