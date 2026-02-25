import React, { useState } from "react";

const QualityControl = () => {
  const [items, setItems] = useState([
    {
      id: 1,
      customer: "Alice",
      dressType: "Gown",
      status: "Tailor Done",
      code: "",
    },
    {
      id: 2,
      customer: "Bob",
      dressType: "Shirt",
      status: "Tailor Done",
      code: "",
    },
    {
      id: 3,
      customer: "Charlie",
      dressType: "Suit",
      status: "Tailor Done",
      code: "",
    },
  ]);

  const generateCode = (orderId) => {
    const uniqueCode = `CUST-${orderId}-${Math.floor(Math.random() * 10000)}`;
    setItems((prev) =>
      prev.map((item) =>
        item.id === orderId
          ? { ...item, status: "Approved", code: uniqueCode }
          : item
      )
    );
    alert(`Order #${orderId} approved! Unique code: ${uniqueCode}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 p-6">
      <div className="max-w-6xl mx-auto bg-white bg-opacity-80 backdrop-blur-md rounded-3xl shadow-xl p-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Quality Control Dashboard
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
                  Customer Code
                </th>
                <th className="px-6 py-3 border-b-2 border-gray-300 text-gray-700 font-semibold">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {items.map((item) => (
                <tr key={item.id} className="hover:bg-gray-100 transition">
                  <td className="px-6 py-4 border-b border-gray-300">
                    {item.id}
                  </td>
                  <td className="px-6 py-4 border-b border-gray-300">
                    {item.customer}
                  </td>
                  <td className="px-6 py-4 border-b border-gray-300">
                    {item.dressType}
                  </td>
                  <td className="px-6 py-4 border-b border-gray-300">
                    {item.status}
                  </td>
                  <td className="px-6 py-4 border-b border-gray-300 font-mono">
                    {item.code || "-"}
                  </td>
                  <td className="px-6 py-4 border-b border-gray-300">
                    {item.status === "Tailor Done" ? (
                      <button
                        onClick={() => generateCode(item.id)}
                        className="px-4 py-2 bg-green-600 text-white rounded-xl shadow-lg hover:bg-green-700 transition-all transform hover:-translate-y-1 hover:scale-105"
                      >
                        Approve
                      </button>
                    ) : (
                      <span className="text-gray-500 font-semibold">
                        Checked
                      </span>
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

export default QualityControl;
