"use client";

import AdminOverview from "@/components/dashboard/admin/overviewadmin";
import { useEffect, useState } from "react";
import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
} from "recharts";

const COLORS = ["#3B82F6", "#10B981", "#F59E0B"];

export default function AdminOverviewPage() {
  const [stats, setStats] = useState({
    books: 0,
    users: 0,
    transactions: 0,
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [booksRes, usersRes, transactionsRes] = await Promise.all([
          fetch(`${process.env.NEXT_PUBLIC_API_URL}/bookpost`),
          fetch(`${process.env.NEXT_PUBLIC_API_URL}/user`),
          fetch(`${process.env.NEXT_PUBLIC_API_URL}/delivery-request/delivered`),
        ]);

        const books = await booksRes.json();
        const users = await usersRes.json();
        const transactions = await transactionsRes.json();

        setStats({
          books: books?.length || 0,
          users: users?.length || 0,
          transactions: transactions?.length || 0,
        });
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

 const chartData = [
  { name: "Books", value: stats.books, fill: "#3B82F6" },
  { name: "Users", value: stats.users, fill: "#10B981" },
  { name: "Total Deliveries", value: stats.transactions, fill: "#F59E0B" },
];

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen text-xl font-semibold">
        Loading...
      </div>
    );
  }

  return (
  <div className="bg-gray-100 py-10">
  <div className="max-w-7xl mx-auto">

    <h2 className="text-4xl font-bold mb-10">
      Admin Analytics
    </h2>

   
    <AdminOverview></AdminOverview>

    {/* Pie Chart */}
    <div className="bg-white rounded-xl p-6 shadow">
      <h2 className="text-2xl font-semibold mb-4">
        Dashboard Statistics
      </h2>

      <PieChart
        style={{
          width: "100%",
          maxWidth: "500px",
          maxHeight: "50vh",
          margin: "auto",
          aspectRatio: 1,
        }}
      >
        <Pie
          data={chartData}
          dataKey="value"
          innerRadius={90}
          outerRadius={130}
          paddingAngle={5}
          label
        />
        <Tooltip />
        <Legend />
      </PieChart>
    </div>

  </div>
</div>
  );
}