import React, { useState } from "react";

const CuttingMaster = () => {
  // Example confirmed orders
  const [orders, setOrders] = useState([
    {
      id: 1,
      customer: "Alice",
      dressType: "Gown",
      status: "Ready for Cutting",
    },
    { id: 2, customer: "Bob", dressType: "Shirt", status: "Cutting Done" },
    {
      id: 3,
      customer: "Charlie",
      dressType: "Suit",
      status: "Ready for Cutting",
    },
  ]);

  const assignTailor = (orderId) => {
    alert(`Assigning tailors for order #${orderId}`);
    // Here you could open a modal or update order status
    setOrders((prev) =>
      prev.map((order) =>
        order.id === orderId ? { ...order, status: "Tailor Assigned" } : order
      )
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 p-6">
      <div className="max-w-6xl mx-auto bg-white bg-opacity-80 backdrop-blur-md rounded-3xl shadow-xl p-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Cutting Master Dashboard
        </h2>

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
                  Status
                </th>
                <th className="px-6 py-3 border-b-2 border-gray-300 text-gray-700 font-semibold">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
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
                  <td className="px-6 py-4 border-b border-gray-300">
                    {order.status}
                  </td>
                  <td className="px-6 py-4 border-b border-gray-300">
                    {order.status === "Cutting Done" ? (
                      <button
                        onClick={() => assignTailor(order.id)}
                        className="px-4 py-2 bg-purple-600 text-white rounded-xl shadow-lg hover:bg-purple-700 transition-all transform hover:-translate-y-1 hover:scale-105"
                      >
                        Assign Tailor
                      </button>
                    ) : (
                      <span className="text-gray-500">Pending Cutting</span>
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

export default CuttingMaster;
