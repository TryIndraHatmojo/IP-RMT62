import { Navigate, Outlet } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function PublicLayout() {
  return (
    <>
      <Navbar isLogin={false} />
      <Outlet />
      <Footer />
    </>
  );
}
