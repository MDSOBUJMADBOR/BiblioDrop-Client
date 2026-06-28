"use client";

import { authClient } from "@/lib/auth-client";
import { useEffect, useState } from "react";
import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
} from "recharts";

const COLORS = ["#F59E0B", "#10B981"];

export default function Overview() {

   const userData = authClient.useSession();  
  const user = userData.data?.user;  
 


  const [chartData, setChartData] = useState([
    { name: "Pending", value: 0 },
    { name: "Delivered", value: 0 },
  ]);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/delivery-requests/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        const pending = data.filter(
          (item) => item.status === "pending"
        ).length;

        const delivered = data.filter(
          (item) => item.status === "delivered"
        ).length;

        setChartData([
          {
            name: "Pending",
            value: pending,
          },
          {
            name: "Delivered",
            value: delivered,
          },
        ]);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="bg-white rounded-2xl shadow-md p-4 sm:p-6">
      <h2 className="text-xl sm:text-2xl font-bold text-center mb-6">
        Delivery Overview
      </h2>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
        <div className="bg-yellow-100 rounded-xl p-5 text-center shadow">
          <h3 className="text-base sm:text-lg font-semibold text-yellow-700">
            Pending
          </h3>

          <p className="text-3xl sm:text-4xl font-bold mt-2">
            {chartData[0].value}
          </p>
        </div>

        <div className="bg-green-100 rounded-xl p-5 text-center shadow">
          <h3 className="text-base sm:text-lg font-semibold text-green-700">
            Delivered
          </h3>

          <p className="text-3xl sm:text-4xl font-bold mt-2">
            {chartData[1].value}
          </p>
        </div>
      </div>

      {/* Pie Chart */}
      <div className="w-full h-[280px] sm:h-[350px] md:h-[420px]">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={chartData}
              dataKey="value"
              nameKey="name"
              innerRadius={50}
              outerRadius={90}
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
            <Legend
              verticalAlign="bottom"
              align="center"
              iconType="circle"
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}