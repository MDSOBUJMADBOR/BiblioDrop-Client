"use client";

import React, { useMemo, useState } from "react";

const transactionsData = [
  {
    id: "#TRX1001",
    user: "John Doe",
    email: "john@example.com",
    amount: 250,
    method: "Stripe",
    status: "Completed",
    date: "2026-07-05",
  },
  {
    id: "#TRX1002",
    user: "Alice Smith",
    email: "alice@example.com",
    amount: 120,
    method: "PayPal",
    status: "Pending",
    date: "2026-07-04",
  },
  {
    id: "#TRX1003",
    user: "Michael Brown",
    email: "michael@example.com",
    amount: 540,
    method: "Card",
    status: "Completed",
    date: "2026-07-03",
  },
  {
    id: "#TRX1004",
    user: "Sarah Wilson",
    email: "sarah@example.com",
    amount: 90,
    method: "Stripe",
    status: "Failed",
    date: "2026-07-02",
  },
  {
    id: "#TRX1005",
    user: "David Lee",
    email: "david@example.com",
    amount: 410,
    method: "Bkash",
    status: "Completed",
    date: "2026-07-01",
  },
];

export default function ViewAllTransactions() {
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("All");
  const [transactions, setTransactions] = useState(transactionsData);

  const filteredTransactions = useMemo(() => {
    return transactions.filter((transaction) => {
      const matchesSearch =
        transaction.user.toLowerCase().includes(search.toLowerCase()) ||
        transaction.email.toLowerCase().includes(search.toLowerCase()) ||
        transaction.id.toLowerCase().includes(search.toLowerCase());

      const matchesStatus =
        status === "All" || transaction.status === status;

      return matchesSearch && matchesStatus;
    });
  }, [transactions, search, status]);

  const handleDelete = (id) => {
    if (window.confirm("Delete this transaction?")) {
      setTransactions((prev) => prev.filter((item) => item.id !== id));
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "Completed":
        return "bg-green-100 text-green-700";
      case "Pending":
        return "bg-yellow-100 text-yellow-700";
      case "Failed":
        return "bg-red-100 text-red-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="mx-auto max-w-7xl rounded-xl bg-white shadow">

        {/* Header */}
        <div className="flex flex-col gap-4 border-b p-6 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">
              View All Transactions
            </h1>
            <p className="mt-1 text-gray-500">
              Manage all payment transactions.
            </p>
          </div>

          <div className="flex flex-col gap-3 md:flex-row">
            <input
              type="text"
              placeholder="Search..."
              className="rounded-lg border px-4 py-2 outline-none focus:border-blue-500"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />

            <select
              className="rounded-lg border px-4 py-2 outline-none focus:border-blue-500"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            >
              <option>All</option>
              <option>Completed</option>
              <option>Pending</option>
              <option>Failed</option>
            </select>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-4 text-left">Transaction ID</th>
                <th className="px-6 py-4 text-left">User</th>
                <th className="px-6 py-4 text-left">Amount</th>
                <th className="px-6 py-4 text-left">Method</th>
                <th className="px-6 py-4 text-left">Status</th>
                <th className="px-6 py-4 text-left">Date</th>
                <th className="px-6 py-4 text-center">Action</th>
              </tr>
            </thead>

            <tbody>
              {filteredTransactions.length > 0 ? (
                filteredTransactions.map((transaction) => (
                  <tr
                    key={transaction.id}
                    className="border-t hover:bg-gray-50"
                  >
                    <td className="px-6 py-4 font-medium">
                      {transaction.id}
                    </td>

                    <td className="px-6 py-4">
                      <p className="font-semibold">
                        {transaction.user}
                      </p>
                      <p className="text-sm text-gray-500">
                        {transaction.email}
                      </p>
                    </td>

                    <td className="px-6 py-4 font-semibold text-green-600">
                      ${transaction.amount}
                    </td>

                    <td className="px-6 py-4">
                      {transaction.method}
                    </td>

                    <td className="px-6 py-4">
                      <span
                        className={`rounded-full px-3 py-1 text-xs font-semibold ${getStatusColor(
                          transaction.status
                        )}`}
                      >
                        {transaction.status}
                      </span>
                    </td>

                    <td className="px-6 py-4">
                      {transaction.date}
                    </td>

                    <td className="px-6 py-4">
                      <div className="flex justify-center gap-2">
                        <button className="rounded-lg bg-blue-600 px-3 py-1 text-white hover:bg-blue-700">
                          View
                        </button>

                        <button
                          onClick={() => handleDelete(transaction.id)}
                          className="rounded-lg bg-red-600 px-3 py-1 text-white hover:bg-red-700"
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan={7}
                    className="py-8 text-center text-gray-500"
                  >
                    No transactions found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between border-t p-6">
          <p className="text-gray-600">
            Total Transactions:{" "}
            <span className="font-bold">
              {filteredTransactions.length}
            </span>
          </p>

          <button className="rounded-lg bg-indigo-600 px-5 py-2 text-white hover:bg-indigo-700">
            Export CSV
          </button>
        </div>
      </div>
    </div>
  );
}