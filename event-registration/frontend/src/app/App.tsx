import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RegistrationForm from "./RegistrationForm";
import Admin from "../Admin";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RegistrationForm />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </Router>
  );
}