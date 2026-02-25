import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home/Home";
import Login from "./Login/Login";
import DressMeasurementForm from "./DressMeasurementForm/DressMeasurementForm";
import CuttingMaster from "./CuttingMaster/CuttingMaster";
import TailorDashboard from "./TailorDashboard/TailorDashboard";
import QualityControl from "./QualityControl/QualityControl";
import ManagerDashboard from "./ManagerDashboard/ManagerDashboard";
import Navbar from "./Navbar/Navbar";

function App() {
  return (
    <Router>
      <Navbar /> {/* Always visible */}
      <div className="pt-16">
        {" "}
        {/* Padding top to prevent content under navbar */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/DressMeasurementForm"
            element={<DressMeasurementForm />}
          />
          <Route path="/CuttingMaster" element={<CuttingMaster />} />
          <Route path="/TailorDashboard" element={<TailorDashboard />} />
          <Route path="/QualityControl" element={<QualityControl />} />
          <Route path="/ManagerDashboard" element={<ManagerDashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
