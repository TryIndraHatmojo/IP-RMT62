import { useEffect } from "react";
import { apiModalNekat } from "../helpers/helpers";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";

export default function Login() {
  const navigate = useNavigate();
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
      setTimeout(() => {
        navigate("/dashboard");
      }, 1000);
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
        Your Business Planner App
      </h1>
      <p>Turn ideas into ready business proposals</p>

      <div className="rounded-selector flex items-center justify-center mt-4 bg-white p-1 w-63">
        <div id="buttonDiv"></div>
      </div>
    </div>
  );
}
