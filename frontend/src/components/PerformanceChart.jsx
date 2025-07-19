import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";
import { FiInfo, FiCalendar } from "react-icons/fi";

ChartJS.register(LineElement, PointElement, CategoryScale, LinearScale, Tooltip, Legend);

export default function PerformanceChart() {
  const [view, setView] = useState("Yearly");

  const labels =
    view === "Yearly"
      ? ["Jan", "Feb", "Mar", "Apr", "May", "Jun"]
      : ["Week 1", "Week 2", "Week 3", "Week 4"];

  const datasets = [
    {
      label: "Top Performers",
      data: view === "Yearly" ? [25, 22, 30, 28, 35, 36] : [10, 15, 18, 20],
      borderColor: "#22c55e",
      tension: 0.4,
      pointRadius: 0,
    },
    {
      label: "Average",
      data: view === "Yearly" ? [15, 17, 20, 25, 20, 25] : [5, 8, 12, 14],
      borderColor: "#facc15",
      tension: 0.4,
      pointRadius: 0,
    },
    {
      label: "Low Performers",
      data: view === "Yearly" ? [8, 10, 12, 14, 20, 22] : [2, 3, 4, 6],
      borderColor: "#ef4444",
      tension: 0.4,
      pointRadius: 0,
    },
  ];

  const data = { labels, datasets };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: { legend: { display: false } },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 10,
          callback: (value) => `${value}-${value + 10}`,
        },
        grid: { color: "#E5E7EB" },
      },
      x: {
        grid: { display: false },
        ticks: {
          font: { size: 10 },
        },
      },
    },
  };

  return (
    <div className="bg-white rounded-lg shadow p-4 w-full">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between gap-2 sm:items-center mb-4">
        <div className="flex items-center gap-2">
          <h2 className="font-semibold text-base sm:text-lg">Class Performance</h2>
          <FiInfo className="text-gray-400" />
        </div>
        <div className="flex items-center gap-2">
          <FiCalendar className="text-blue-500 text-lg" />
          <select
            className="border rounded px-2 py-1 text-sm text-gray-600"
            value={view}
            onChange={(e) => setView(e.target.value)}
          >
            <option value="Yearly">Yearly</option>
            <option value="Monthly">Monthly</option>
          </select>
        </div>
      </div>

      {/* Chart */}
      <div className="h-56 sm:h-64 md:h-72 lg:h-80">
        <Line data={data} options={options} />
      </div>
    </div>
  );
}
