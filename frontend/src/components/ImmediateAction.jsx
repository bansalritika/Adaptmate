import React from "react";
import { ChevronRightIcon } from "@heroicons/react/24/solid";

export default function ImmediateAction() {
  const actions = [
    {
      topic: "Number Systems",
      progress: 10,
      color: "bg-red-500",
    },
    {
      topic: "Natural Numbers",
      progress: 30,
      color: "bg-yellow-400",
    },
  ];

  return (
    <div className="bg-white rounded-xl shadow-md p-4 md:p-6 w-full">
      {/* Header */}
      <div className="flex justify-between items-center mb-4 flex-wrap gap-2">
        <h3 className="font-bold text-gray-800 text-lg flex items-center">
          Immediate Action
          <span className="ml-1 text-blue-500 text-sm">
            <i className="fas fa-info-circle"></i>
          </span>
        </h3>
        <a
          href="#"
          className="flex items-center text-[#0876a9] text-sm hover:underline"
        >
          See all
          <ChevronRightIcon className="h-4 w-4 ml-1" />
        </a>
      </div>

      {/* Action List */}
      <div className="space-y-4">
        {actions.map((item, index) => (
          <div
            key={index}
            className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border rounded-lg p-3"
          >
            {/* Left Section: Topic & Progress */}
            <div className="flex-1 w-full sm:w-auto">
              <p className="text-gray-700 text-sm font-semibold mb-2">
                {item.topic}
              </p>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div
                  className={`${item.color} h-2.5 rounded-full`}
                  style={{ width: `${item.progress}%` }}
                ></div>
              </div>
            </div>

            {/* Percentage */}
            <span className="text-gray-600 font-medium text-sm mt-1 sm:mt-0">
              {item.progress}%
            </span>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3">
              <a
                href="#"
                className="text-[#0876a9] text-sm font-medium hover:underline"
              >
                See details
              </a>
              <button className="bg-[#0876a9] text-white text-xs px-3 py-1.5 rounded-lg hover:bg-[#06658d]">
                Quick Plan
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
