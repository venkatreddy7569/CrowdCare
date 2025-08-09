import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Alerts from "./pages/Alerts";
import CreateAlerts from "./pages/createAlerts";
import Login from "./pages/Login";
import './index.css';

function App() {
  return (
    <Router>
      <Routes>
        {/* Home Page */}
        <Route path="/" element={<Home />} />

        {/* Alerts Page */}
        <Route path="/alerts" element={<Alerts />} />

        {/* Create Alert Page */}
        <Route path="/create-alert" element={<CreateAlerts />} />

        {/* Login Page */}
        <Route path="/login" element={<Login />} />

        {/* 404 Fallback */}
        <Route path="*" element={<h1>404 - Page Not Found</h1>} />
      </Routes>
    </Router>
  );
}

export default App;
