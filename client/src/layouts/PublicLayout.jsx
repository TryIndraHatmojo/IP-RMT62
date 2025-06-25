import { Navigate, Outlet } from "react-router";
import Navbar from "../components/Navbar";

export default function PublicLayout() {
  return (
    <>
      <Navbar isLogin={false} />
      <Outlet />
    </>
  );
}
