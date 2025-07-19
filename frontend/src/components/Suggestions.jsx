import React from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

export default function Suggestions() {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 flex flex-col justify-between">
      {/* Header */}
      <h2 className="font-semibold text-lg mb-3">Suggestions</h2>

      {/* Main Content */}
      <div className="mb-4">
        <p className="font-medium text-gray-800">Exam Stress</p>
        <p className="text-xs text-gray-500">8 March 2025</p>
        <p className="text-sm text-gray-600 mt-2">
          Manage exam stress with an interactive activity.
        </p>
      </div>

      {/* Bottom Actions */}
      <div className="flex justify-between items-center">
        {/* Navigation Arrows */}
        <div className="flex gap-2">
          <button className="p-2 rounded-full border border-gray-300 hover:bg-gray-100 transition">
            <FiChevronLeft />
          </button>
          <button className="p-2 rounded-full border border-gray-300 hover:bg-gray-100 transition">
            <FiChevronRight />
          </button>
        </div>

        {/* Generate Button */}
        <button className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm hover:bg-blue-700 transition">
          Generate
        </button>
      </div>
    </div>
  );
}
