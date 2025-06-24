import { ToastContainer } from "react-toastify";
import Login from "./pages/Login";
import { BrowserRouter, Route, Routes } from "react-router";

function App() {
  return (
    <>
      <ToastContainer />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
