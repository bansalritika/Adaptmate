import React from 'react';

const StatCircle = ({ label, value }) => (
  <div className="flex flex-col items-center justify-center">
    <div
      className="w-16 h-16 rounded-full flex items-center justify-center relative"
      style={{
        background: `conic-gradient(#4391ED ${value * 3.6}deg, #E5E7EB ${value * 3.6}deg)`,
      }}
    >
      <div className="absolute bg-white rounded-full w-12 h-12 flex items-center justify-center text-gray-700 text-lg font-semibold">
        {value}
      </div>
    </div>
    <p className="text-sm text-gray-600 mt-2 text-center">{label}</p>
  </div>
);

export default function TeacherStats() {
  return (
    <div className="bg-white rounded-xl shadow-md p-4 mb-6">
      <h2 className="font-semibold text-lg mb-4">Teacher Stats</h2>
      <div className="grid grid-cols-2 gap-4">
        <StatCircle label="Syllabus Completion" value={30} />
        <StatCircle label="Learning Objective Achieved" value={30} />
        <StatCircle label="Class Learning Health" value={35} />
        <StatCircle label="Self Awareness" value={40} />
      </div>
    </div>
  );
}
