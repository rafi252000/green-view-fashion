import React, { useState } from "react";

const ManagerDashboard = () => {
  const [orders, setOrders] = useState([
    {
      id: 1,
      customer: "Alice",
      dressType: "Gown",
      measurements: { chest: 36, waist: 28, hips: 38, length: 40 },
      status: "Approved",
      code: "CUST-1-1234",
      delivered: false,
      billGenerated: false,
    },
    {
      id: 2,
      customer: "Bob",
      dressType: "Shirt",
      measurements: { chest: 38, waist: 30, hips: 36, length: 32 },
      status: "Approved",
      code: "CUST-2-5678",
      delivered: false,
      billGenerated: false,
    },
  ]);

  const [searchCode, setSearchCode] = useState("");

  const handleBill = (orderId) => {
    setOrders((prev) =>
      prev.map((order) =>
        order.id === orderId ? { ...order, billGenerated: true } : order
      )
    );
    alert(`Bill generated for order #${orderId}`);
  };

  const markDelivered = (orderId) => {
    setOrders((prev) =>
      prev.map((order) =>
        order.id === orderId ? { ...order, delivered: true } : order
      )
    );
    alert(`Order #${orderId} marked as delivered!`);
  };

  const filteredOrders = orders.filter((order) =>
    order.code.toLowerCase().includes(searchCode.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 p-6">
      <div className="max-w-7xl mx-auto bg-white bg-opacity-80 backdrop-blur-md rounded-3xl shadow-xl p-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Manager Dashboard
        </h2>

        {/* Search */}
        <div className="mb-6 flex justify-center">
          <input
            type="text"
            placeholder="Search by Customer Code"
            value={searchCode}
            onChange={(e) => setSearchCode(e.target.value)}
            className="px-4 py-2 w-full max-w-md rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition"
          />
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full text-left border-collapse">
            <thead>
              <tr>
                <th className="px-6 py-3 border-b-2 border-gray-300 text-gray-700 font-semibold">
                  Order ID
                </th>
                <th className="px-6 py-3 border-b-2 border-gray-300 text-gray-700 font-semibold">
                  Customer
                </th>
                <th className="px-6 py-3 border-b-2 border-gray-300 text-gray-700 font-semibold">
                  Dress Type
                </th>
                <th className="px-6 py-3 border-b-2 border-gray-300 text-gray-700 font-semibold">
                  Code
                </th>
                <th className="px-6 py-3 border-b-2 border-gray-300 text-gray-700 font-semibold">
                  Status
                </th>
                <th className="px-6 py-3 border-b-2 border-gray-300 text-gray-700 font-semibold">
                  Details
                </th>
                <th className="px-6 py-3 border-b-2 border-gray-300 text-gray-700 font-semibold">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredOrders.map((order) => (
                <tr key={order.id} className="hover:bg-gray-100 transition">
                  <td className="px-6 py-4 border-b border-gray-300">
                    {order.id}
                  </td>
                  <td className="px-6 py-4 border-b border-gray-300">
                    {order.customer}
                  </td>
                  <td className="px-6 py-4 border-b border-gray-300">
                    {order.dressType}
                  </td>
                  <td className="px-6 py-4 border-b border-gray-300 font-mono">
                    {order.code}
                  </td>
                  <td className="px-6 py-4 border-b border-gray-300">
                    {order.delivered ? (
                      <span className="text-green-600 font-semibold">
                        Delivered
                      </span>
                    ) : (
                      <span className="text-purple-600 font-semibold">
                        {order.status}
                      </span>
                    )}
                  </td>
                  <td className="px-6 py-4 border-b border-gray-300">
                    <details className="cursor-pointer">
                      <summary className="text-blue-600 font-semibold">
                        View
                      </summary>
                      <div className="mt-2 text-gray-700">
                        <p>
                          <strong>Chest:</strong> {order.measurements.chest}"
                        </p>
                        <p>
                          <strong>Waist:</strong> {order.measurements.waist}"
                        </p>
                        <p>
                          <strong>Hips:</strong> {order.measurements.hips}"
                        </p>
                        <p>
                          <strong>Length:</strong> {order.measurements.length}"
                        </p>
                      </div>
                    </details>
                  </td>
                  <td className="px-6 py-4 border-b border-gray-300 space-x-2">
                    {!order.billGenerated && !order.delivered && (
                      <button
                        onClick={() => handleBill(order.id)}
                        className="px-4 py-2 bg-green-600 text-white rounded-xl shadow-lg hover:bg-green-700 transition-all transform hover:-translate-y-1 hover:scale-105"
                      >
                        Generate Bill
                      </button>
                    )}
                    {!order.delivered && order.billGenerated && (
                      <button
                        onClick={() => markDelivered(order.id)}
                        className="px-4 py-2 bg-blue-600 text-white rounded-xl shadow-lg hover:bg-blue-700 transition-all transform hover:-translate-y-1 hover:scale-105"
                      >
                        Mark Delivered
                      </button>
                    )}
                    {order.delivered && (
                      <span className="text-gray-500 font-semibold">Done</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManagerDashboard;
