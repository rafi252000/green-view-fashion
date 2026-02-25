import React, { useState } from "react";

const DressMeasurementForm = () => {
  const [formData, setFormData] = useState({
    customerName: "",
    dressType: "",
    chest: "",
    waist: "",
    hips: "",
    length: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    alert("Measurements submitted!");
  };

  return (
    <div className="min-h-screen  flex items-center justify-center bg-gradient-to-r from-purple-500 via-pink-500 to-red-500">
      <div className="bg-white my-12 bg-opacity-80 backdrop-blur-md rounded-3xl shadow-xl p-10 w-full max-w-lg">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">
          Dress Measurement Form
        </h2>
        <p className="text-center text-gray-600 mb-8">
          Fill in the customer’s measurements
        </p>

        <form className="space-y-6" onSubmit={handleSubmit}>
          {/* Customer Name */}
          <div>
            <label className="block text-gray-700 mb-2" htmlFor="customerName">
              Customer Name
            </label>
            <input
              type="text"
              name="customerName"
              id="customerName"
              value={formData.customerName}
              onChange={handleChange}
              placeholder="John Doe"
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition"
              required
            />
          </div>

          {/* Dress Type */}
          <div>
            <label className="block text-gray-700 mb-2" htmlFor="dressType">
              Dress Type
            </label>
            <input
              type="text"
              name="dressType"
              id="dressType"
              value={formData.dressType}
              onChange={handleChange}
              placeholder="Shirt / Gown / Suit"
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition"
              required
            />
          </div>

          {/* Chest */}
          <div>
            <label className="block text-gray-700 mb-2" htmlFor="chest">
              Chest (in inches)
            </label>
            <input
              type="number"
              name="chest"
              id="chest"
              value={formData.chest}
              onChange={handleChange}
              placeholder="36"
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition"
              required
            />
          </div>

          {/* Waist */}
          <div>
            <label className="block text-gray-700 mb-2" htmlFor="waist">
              Waist (in inches)
            </label>
            <input
              type="number"
              name="waist"
              id="waist"
              value={formData.waist}
              onChange={handleChange}
              placeholder="30"
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition"
              required
            />
          </div>

          {/* Hips */}
          <div>
            <label className="block text-gray-700 mb-2" htmlFor="hips">
              Hips (in inches)
            </label>
            <input
              type="number"
              name="hips"
              id="hips"
              value={formData.hips}
              onChange={handleChange}
              placeholder="38"
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition"
              required
            />
          </div>

          {/* Dress Length */}
          <div>
            <label className="block text-gray-700 mb-2" htmlFor="length">
              Dress Length (in inches)
            </label>
            <input
              type="number"
              name="length"
              id="length"
              value={formData.length}
              onChange={handleChange}
              placeholder="40"
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 bg-purple-600 text-white font-bold rounded-xl shadow-lg hover:bg-purple-700 transition-all transform hover:-translate-y-1 hover:scale-105"
          >
            Submit Measurements
          </button>
        </form>
      </div>
    </div>
  );
};

export default DressMeasurementForm;
