import { createRoot } from "react-dom/client";
import "./index.css";
import AuthContext from "./context/AuthContext.jsx";
import SongContext from "./context/SongContext.jsx";
import { ToastContainer } from "react-toastify";
import AppRoutes from "./router/AppRoutes.jsx"

createRoot(document.getElementById("root")).render(
  <AuthContext>
    <SongContext>
      <AppRoutes/>
      <ToastContainer position="bottom-right" autoClose={3000} />
    </SongContext>
  </AuthContext>,
);
