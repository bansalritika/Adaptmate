import React, { useState } from "react";

export default function SmartInsights() {
  const topicsData = {
    Circles: {
      performance: { high: 70, medium: 30, low: 15 },
      keyInsights: [
        "Trouble in circle geometry formulas",
        "Weak proof-based problem-solving",
        "Gaps in understanding chords",
      ],
      recommendations: "Plan focused sessions on geometry fundamentals and proofs.",
    },
    Triangles: {
      performance: { high: 60, medium: 25, low: 15 },
      keyInsights: [
        "Issues in understanding congruency rules",
        "Difficulty applying Pythagoras theorem",
        "Problems with area calculation",
      ],
      recommendations: "Provide visual aids and step-by-step problem-solving practice.",
    },
    Algebra: {
      performance: { high: 55, medium: 30, low: 15 },
      keyInsights: [
        "Struggles with factorization",
        "Weakness in solving quadratic equations",
        "Errors in simplification",
      ],
      recommendations: "Focus on basic algebraic identities and equation solving.",
    },
    Trigonometry: {
      performance: { high: 50, medium: 35, low: 15 },
      keyInsights: [
        "Confusion in trigonometric ratios",
        "Problems in applying identities",
        "Weakness in solving real-life problems",
      ],
      recommendations: "Conduct more practice with real-world trigonometric applications.",
    },
  };

  const [selectedTopic, setSelectedTopic] = useState("Circles");
  const topic = topicsData[selectedTopic];

  // Calculate conic gradient for donut
  const highDeg = (topic.performance.high / 100) * 360;
  const mediumDeg = highDeg + (topic.performance.medium / 100) * 360;
  const gradient = `conic-gradient(#4ADE80 0deg ${highDeg}deg, #FACC15 ${highDeg}deg ${mediumDeg}deg, #EF4444 ${mediumDeg}deg 360deg)`;

  return (
    <div className="bg-white rounded-xl shadow-md p-4 w-full max-w-sm md:max-w-md">
      {/* Header with dropdown */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-semibold text-lg">Smart Insights</h2>
        <select
          className="border rounded-md text-sm px-2 py-1"
          value={selectedTopic}
          onChange={(e) => setSelectedTopic(e.target.value)}
        >
          {Object.keys(topicsData).map((topic) => (
            <option key={topic} value={topic}>
              {topic}
            </option>
          ))}
        </select>
      </div>

      {/* Performance Summary */}
      <h3 className="font-medium text-gray-800 mb-2">Performance Summary</h3>
      <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4">
        {/* Donut Chart */}
        <div
          className="w-24 h-24 rounded-full flex items-center justify-center relative"
          style={{ background: gradient }}
        >
          <div className="absolute bg-white rounded-full w-16 h-16 flex items-center justify-center text-gray-700 font-semibold text-sm">
            {topic.performance.high}%
          </div>
        </div>

        {/* Legend */}
        <div className="text-sm">
          <p>
            <span className="inline-block w-3 h-3 rounded-full bg-green-400 mr-2"></span>
            {topic.performance.high}% students scored 75–100%
          </p>
          <p>
            <span className="inline-block w-3 h-3 rounded-full bg-yellow-400 mr-2"></span>
            {topic.performance.medium}% students scored 50–75%
          </p>
          <p>
            <span className="inline-block w-3 h-3 rounded-full bg-red-500 mr-2"></span>
            {topic.performance.low}% students scored &lt;50%
          </p>
        </div>
      </div>

      {/* Key Insights */}
      <h3 className="font-medium text-gray-800 mb-1">Key Insights</h3>
      <ul className="text-sm list-disc list-inside text-gray-600 mb-4">
        {topic.keyInsights.map((insight, idx) => (
          <li key={idx}>{insight}</li>
        ))}
      </ul>

      {/* Recommendations */}
      <h3 className="font-medium text-gray-800 mb-1">Recommendations</h3>
      <p className="text-sm text-gray-600">{topic.recommendations}</p>
    </div>
  );
}
