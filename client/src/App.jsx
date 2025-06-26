import { ToastContainer } from "react-toastify";
import Login from "./pages/Login";
import { BrowserRouter, Route, Routes } from "react-router";
import LandingPage from "./pages/LandingPage";
import LoginLayout from "./layouts/LoginLayout";
import AuthLayout from "./layouts/AuthLayout";
import PublicLayout from "./layouts/PublicLayout";
import DashboardPage from "./pages/DashboardPage";
import { Provider } from "react-redux";
import { store } from "./store/index";
import ProposalCreatePage from "./pages/ProposalCreatePage";
import ProposalUpdatePage from "./pages/ProposalUpdatePage";

function App() {
  return (
    <>
      <ToastContainer />
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route element={<PublicLayout />}>
              <Route path="/" element={<LandingPage />} />
            </Route>
            <Route element={<LoginLayout />}>
              <Route path="/login" element={<Login />} />
            </Route>
            <Route element={<AuthLayout />}>
              <Route path="/dashboard" element={<DashboardPage />} />
              <Route path="/create-proposal" element={<ProposalCreatePage />} />
              <Route path="/proposal/:id" element={<ProposalUpdatePage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
