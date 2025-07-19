import React from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

export default function Suggestions() {
  return (
    <div className="bg-white rounded-xl shadow-md p-4 mb-4 w-full">
      <h2 className="font-semibold text-lg mb-3">Suggestions</h2>

      <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4">
        {/* LEFT TEXT SECTION */}
        <div className="flex-1">
          <p className="font-semibold text-base">Exam Stress</p>
          <p className="text-sm text-gray-500">8 March 2025</p>
          <p className="text-xs text-gray-400 mt-1 max-w-xs">
            Manage exam stress with an interactive activity.
          </p>
        </div>

        {/* RIGHT CONTROLS */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 items-end sm:justify-end">
          {/* Arrows */}
          <div className="flex gap-2">
            <button className="p-1 rounded-full border border-gray-300 hover:bg-gray-100">
              <FiChevronLeft className="text-gray-500" />
            </button>
            <button className="p-1 rounded-full border border-gray-300 hover:bg-gray-100">
              <FiChevronRight className="text-gray-500" />
            </button>
          </div>

          {/* Generate Button */}
          <button className="bg-blue-600 text-white px-4 py-1.5 rounded-full text-sm hover:bg-blue-700 whitespace-nowrap">
            Generate
          </button>
        </div>
      </div>
    </div>
  );
}
