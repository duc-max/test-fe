import Login from "./pages/Login/Login";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

import Signup from "./pages/Signup/Signup";
import AuthProvider from "./context/context";
import ManageCustomer from "./pages/ManageCustomer/ManageCustomer";
function App() {
  return (
    <div>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/manage" element={<ManageCustomer />} />
        </Routes>
      </AuthProvider>

      <ToastContainer />
    </div>
  );
}

export default App;
