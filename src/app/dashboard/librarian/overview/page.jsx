"use client";

import LibrarianOverview from "@/components/dashboard/librarian/overviewlibarian";
import { useEffect, useState } from "react";
import {
  PieChart,
  Pie,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Cell,
} from "recharts";

const COLORS = ["#3B82F6", "#10B981"];

export default function LibrarianStatistics() {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [booksRes, deliveriesRes] = await Promise.all([
          fetch("http://localhost:8080/bookpost/email/sathi@gmail.com"),
          fetch(
            "http://localhost:8080/delivery-request/email/sathi@gmail.com"
          ),
        ]);

        const books = await booksRes.json();
        const deliveries = await deliveriesRes.json();

        setChartData([
          {
            name: "Add Book",
            value: Array.isArray(books) ? books.length : 0,
          },
          {
            name: "Manage Deliveries",
            value: Array.isArray(deliveries) ? deliveries.length : 0,
          },
        ]);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="bg-white rounded-xl p-6 shadow">
      <LibrarianOverview></LibrarianOverview>
      {/* <h2 className="text-2xl font-semibold mb-6 text-center">
        Dashboard Statistics
      </h2> */}

      <ResponsiveContainer width="100%" height={420}>
        <PieChart>
          <Pie
            data={chartData}
            dataKey="value"
            nameKey="name"
            innerRadius={90}
            outerRadius={130}
            paddingAngle={5}
            label={({ name, value }) => `${name}: ${value}`}
          >
            {chartData.map((entry, index) => (
              <Cell
                key={index}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>

          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>

      <div className="grid grid-cols-2 gap-4 mt-6">
        <div className="bg-blue-50 rounded-lg p-4 text-center">
          <h3 className="text-lg font-semibold text-blue-600">
           Add Book
          </h3>
          <p className="text-3xl font-bold mt-2">
            {chartData[0]?.value || 0}
          </p>
        </div>

        <div className="bg-green-50 rounded-lg p-4 text-center">
          <h3 className="text-lg font-semibold text-green-600">
            Manage Deliveries
          </h3>
          <p className="text-3xl font-bold mt-2">
            {chartData[1]?.value || 0}
          </p>
        </div>
      </div>
    </div>
  );
}