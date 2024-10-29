"use client";
import {
  RadialBarChart,
  RadialBar,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Ref",
    count: 40,
    fill: "#FAE27C", // Light yellow
  },
  {
    name: "Lighting",
    count: 20,
    fill: "#C3EBFA", // Light blue
  },
  {
    name: "PV System",
    count: 15,
    fill: "#A4DEFF", // Medium blue
  },
  {
    name: "FAUs",
    count: 10,
    fill: "#FFD700", // Gold
  },
  {
    name: "Cooling",
    count: 8,
    fill: "#FFA07A", // Salmon
  },
  {
    name: "PV System - General",
    count: 7,
    fill: "#FF4500", // Orange red
  },
];

const CountChart = () => {
  // Generate a random number for kWh
  const randomKWh = Math.floor(1000 + Math.random() * 9000); // e.g., 1000–9999 kWh

  return (
    <div className="bg-white rounded-xl w-full h-full p-4">
      {/* TITLE */}
      <div className="flex justify-between items-center">
        <h1 className="text-lg font-semibold">Electric Consumption by Equipment System</h1>
      </div>
      {/* CHART */}
      <div className="relative w-full h-[75%]">
        <ResponsiveContainer>
          <RadialBarChart
            cx="50%"
            cy="50%"
            innerRadius="40%"
            outerRadius="100%"
            barSize={32}
            data={data}
          >
            <RadialBar background dataKey="count" />
            <Legend
              iconSize={10}
              width={120}
              height={140}
              layout="vertical"
              verticalAlign="middle"
              wrapperStyle={{ top: 0, right: 0, lineHeight: "24px" }}
            />
          </RadialBarChart>
        </ResponsiveContainer>
        {/* Display kWh number in center */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-lg font-semibold">
          {randomKWh} kWh
        </div>
      </div>
      {/* BOTTOM LEGEND */}
      <div className="flex justify-around mt-4">
        {data.map((item) => (
          <div key={item.name} className="flex flex-col items-center">
            <div className="w-5 h-5 rounded-full" style={{ backgroundColor: item.fill }} />
            <h2 className="text-xs text-gray-600 mt-1">{item.name}</h2>
            <h3 className="text-xs font-semibold text-gray-500">{item.count}%</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CountChart;
