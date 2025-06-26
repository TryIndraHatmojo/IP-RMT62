import { Link, useNavigate } from "react-router";

export default function Navbar({ isLogin }) {
  let navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("access_token");
    navigate("/login");
  };
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        {isLogin && (
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <Link to={"/dashboard"}>Dashboard</Link>
              </li>
              <li>
                <Link to={"/create-proposal"}>Create Proposal</Link>
              </li>
              <li>
                <Link to={"/topup"}>Top Up</Link>
              </li>
            </ul>
          </div>
        )}
      </div>
      <div className="navbar-center">
        {isLogin ? (
          <Link to={"/dashboard"} className="btn btn-ghost text-xl">
            ModalNekat
          </Link>
        ) : (
          <Link to={"/"} className="btn btn-ghost text-xl">
            ModalNekat
          </Link>
        )}
      </div>
      <div className="navbar-end">
        {isLogin && (
          <button onClick={handleLogout} className="btn btn-info">
            Logout
          </button>
        )}
        {!isLogin && (
          <Link to={"/login"} className="btn btn-info">
            Login
          </Link>
        )}
      </div>
    </div>
  );
}
