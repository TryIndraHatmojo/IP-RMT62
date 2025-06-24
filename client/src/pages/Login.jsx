import { useEffect } from "react";
import { apiModalNekat } from "../helpers/helpers";
import { toast } from "react-toastify";

export default function Login() {
  useEffect(() => {
    async function handleCredentialResponse(response) {
      console.log("Encoded JWT ID token: " + response.credential);
      const { data } = await apiModalNekat.post("/login/google", {
        token: response.credential,
      });
      localStorage.setItem("access_token", data.access_token);
      toast.success("Login successful!", {
        position: "top-center",
        theme: "colored",
      });
    }
    google.accounts.id.initialize({
      client_id: import.meta.env.VITE_GOOGLE_OAUTH_CLIENT_ID,
      callback: handleCredentialResponse,
    });
    google.accounts.id.renderButton(
      document.getElementById("buttonDiv"),
      { theme: "outline", size: "large" } // customization attributes
    );
  }, []);
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold mb-4 text-center">
        Login to ModalNekat <br />
        Your Business Planner
      </h1>
      <p>Turn ideas into ready business proposals</p>
      <form className="p-6 rounded shadow-md w-120">
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2" htmlFor="password">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>
        <button type="submit" className="w-full btn btn-primary">
          Login
        </button>
        <div className="rounded-selector flex items-center justify-center mt-4 bg-white p-1 ">
          <div id="buttonDiv"></div>
        </div>
      </form>
    </div>
  );
}
