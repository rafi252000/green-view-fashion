import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const sections = [
    { name: "Login", path: "/login" },
    { name: "Dress Measurements", path: "/DressMeasurementForm" },
    { name: "Cutting Master", path: "/CuttingMaster" },
    { name: "Tailor Dashboard", path: "/TailorDashboard" },
    { name: "Quality Control", path: "/QualityControl" },
    { name: "Manager Dashboard", path: "/ManagerDashboard" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 flex flex-col items-center justify-center p-6">
      <h1 className="text-5xl font-extrabold text-white mb-12 text-center">
        Welcome to DevTriad
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {sections.map((section) => (
          <div
            key={section.path}
            className="bg-white bg-opacity-80 backdrop-blur-md rounded-3xl shadow-xl p-8 flex flex-col items-center text-center transition transform hover:-translate-y-2 hover:scale-105 cursor-pointer"
            onClick={() => navigate(section.path)}
          >
            <h2 className="text-2xl font-bold text-purple-700 mb-4">
              {section.name}
            </h2>
            <p className="text-gray-700">
              Go to the {section.name} page to manage tasks efficiently.
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
