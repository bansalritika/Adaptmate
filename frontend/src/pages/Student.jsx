import React from 'react';
import {
  SparklesIcon,
  AcademicCapIcon,
  CalendarIcon
} from '@heroicons/react/24/solid';
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  InformationCircleIcon
} from '@heroicons/react/24/outline';
import { UserIcon as SolidUser } from '@heroicons/react/24/solid';
import { UserIcon as OutlineUser } from '@heroicons/react/24/outline';
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
  Dot
} from 'recharts';
import avatar from '../assets/avatar.png'; 

const bloomData = [
  { subject: 'Remember', A: 5.5, fullMark: 10 },
  { subject: 'Create', A: 9, fullMark: 10 },
  { subject: 'Apply', A: 4.2, fullMark: 10 },
  { subject: 'Evaluate', A: 8, fullMark: 10 },
  { subject: 'Analyze', A: 5.3, fullMark: 10 },
  { subject: 'Understand', A: 8, fullMark: 10 },
];

const renderDot = (props) => {
  const { cx, cy, index } = props;
  return <circle key={index} cx={cx} cy={cy} r={4} fill="#0876a9" stroke="white" strokeWidth={1.5} />;
};

export default function Student() {
  return (
    <div className="p-4">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 items-start">
        {/* Left 2 Columns Grouped */}
        <div className="lg:col-span-2 space-y-4">
          <div className="flex flex-col lg:flex-row gap-4 items-stretch">
            {/* Student Snapshot */}
            <div className="basis-1/2 bg-white p-4 shadow rounded flex flex-col">
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center gap-2">
                  <OutlineUser className="w-6 h-6 text-blue-700" />
                  <h2 className="font-bold text-[#0876a9] text-lg">Student Snapshot</h2>
                </div>
                <div className="bg-[#0876a9] text-white px-3 py-1 rounded-full text-xs font-semibold">
                  Student Report
                </div>
              </div>

              <div className="flex items-center gap-4 mb-4">
                <img
                  src={avatar}
                  alt="User Avatar"
                  className="!w-[100px] !h-[100px] rounded-full object-cover bg-[#2fb3ba]"
                />
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-gray-600 font-semibold text-sm">
                    <SolidUser className="w-6 h-6 text-gray-500" />
                    <span>Priya Patel</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600 font-semibold text-sm">
                    <AcademicCapIcon className="w-4 h-4" />
                    <span>Grade 12, Section C</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600 font-semibold text-sm">
                    <CalendarIcon className="w-4 h-4" />
                    <span>15th Jun, 2016</span>
                  </div>
                </div>
              </div>

              <div>
                <p className="text-base font-bold text-gray-700 mb-1">Emotional Stats</p>
                <p className="text-sm text-gray-500">
                  Focused, Confident, Motivated,{' '}
                  <span className="underline cursor-pointer">see more</span>
                </p>
              </div>
            </div>

            {/* Chapter Performance */}
            <div className="basis-1/2 bg-white p-4 shadow rounded flex flex-col">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2 text-[#0876a9] font-semibold text-lg">
                  <span>Chapter Performance</span>
                  <InformationCircleIcon className="w-5 h-5 text-[#0876a9]" />
                </div>
                <div className="flex gap-2">
                  <ChevronLeftIcon className="w-5 h-5 text-gray-500 cursor-pointer" />
                  <ChevronRightIcon className="w-5 h-5 text-gray-500 cursor-pointer" />
                </div>
              </div>

              <div className="flex items-end justify-between h-48">
                {[{ label: 'Number System', percent: 48 }, { label: 'Circles', percent: 68 }, { label: 'Trigonometry', percent: 0 }, { label: 'Integer', percent: 75 }, { label: 'Irrational System', percent: 35 }, { label: 'Rational System', percent: 45 }, { label: 'Vectors', percent: 45 }].map((item, index) => (
                  <div key={index} className="flex flex-col items-center w-[55px]">
                    <span className={`text-sm font-semibold mb-1 ${item.percent === 75 ? 'text-black font-bold' : 'text-gray-700'}`}>{item.percent}%</span>
                    <div className="w-4 h-28 bg-gray-200 rounded flex items-end">
                      <div className="bg-[#0876a9] w-4 rounded" style={{ height: `${item.percent}%` }} />
                    </div>
                    <div className="text-[10px] text-center mt-2 text-gray-700 min-h-[32px] leading-tight">
                      {item.label.split(' ').map((word, i) => (<div key={i}>{word}</div>))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Knowledge Gaps */}
          <div className="bg-white p-4 shadow rounded">
            <div className="flex justify-between items-center mb-4">
              <h2 className="font-semibold text-[#0876a9] text-lg">Knowledge Gaps</h2>
              <div className="flex gap-2">
                <button className="bg-[#0876a9] text-white px-3 py-1 rounded-full text-xs font-semibold">Check Answer</button>
                <select className="bg-blue-50 text-blue-700 border border-blue-200 text-sm rounded-full px-2 py-1">
                  <option>Chapter</option>
                </select>
                <select className="bg-blue-50 text-blue-700 border border-blue-200 text-sm rounded-full px-2 py-1">
                  <option>Topic</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="bg-[#d6efff] p-4 rounded">
                <h3 className="text-sm font-bold text-gray-800 mb-1">Strong Zone</h3>
                <p className="text-sm text-gray-700">
                  The student is beginning to grasp the unique traits of each layer, though some ideas still need strengthening.
                </p>
              </div>
              <div className="bg-[#fff6d1] p-4 rounded">
                <h3 className="text-sm font-bold text-gray-800 mb-1">Learning Zone</h3>
                <p className="text-sm text-gray-700">
                  The student accurately recalled the Earth's layer order and understood how temperature changes with depth.
                </p>
              </div>
              <div className="bg-[#ffe3df] p-4 rounded">
                <h3 className="text-sm font-bold text-gray-800 mb-1">Weak Zone</h3>
                <p className="text-sm text-gray-700">
                  The student struggled to clearly differentiate the mantle's properties from other layers, showing confusion in deeper comparisons.
                </p>
              </div>
            </div>

            {/* Learning Pattern */}
            <h2 className="font-semibold text-[#0876a9] text-lg mb-2">Learning Pattern</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white p-4 shadow rounded">
  <div className="flex justify-between items-start">
    {/* Title and Quadrant Grid */}
    <div className="flex flex-col">
      <div className="flex items-center gap-2 text-gray-800 font-semibold mb-3">
        <span>Response Style</span>
        <InformationCircleIcon className="w-4 h-4 text-gray-400" />
      </div>
      <div className="grid grid-cols-2 grid-rows-2 border border-gray-300 w-[220px] h-[220px]">
        <div className="flex items-center justify-center text-xs font-medium bg-[#d6efff] text-[#000] border border-gray-300 px-2 text-center">
          Misunderstands<br />key ideas
        </div>
        <div className="flex items-center justify-center text-xs font-medium bg-[#ffe3df] text-[#000] border border-gray-300 px-2 text-center">
          Logical<br />mistakes
        </div>
        <div className="flex items-center justify-center text-xs font-medium bg-[#fff6d1] text-[#000] border border-gray-300 px-2 text-center">
          Struggles to<br />link topics
        </div>
        <div className="flex items-center justify-center text-xs font-medium bg-[#e8e8e8] text-[#000] border border-gray-300 px-2 text-center">
          Clear and<br />confident answers
        </div>
      </div>
    </div>

    {/* Legend */}
    <div className="ml-6 space-y-2 text-xs text-gray-700 mt-1">
      <div className="flex items-center gap-2">
        <span className="w-3 h-3 inline-block bg-[#d6efff] border border-gray-300 rounded-sm"></span>
        <span>Misunderstands key ideas 30%</span>
      </div>
      <div className="flex items-center gap-2">
        <span className="w-3 h-3 inline-block bg-[#fff6d1] border border-gray-300 rounded-sm"></span>
        <span>Struggles to link topics 20%</span>
      </div>
      <div className="flex items-center gap-2">
        <span className="w-3 h-3 inline-block bg-[#ffe3df] border border-gray-300 rounded-sm"></span>
        <span>Logical mistakes 25%</span>
      </div>
      <div className="flex items-center gap-2">
        <span className="w-3 h-3 inline-block bg-[#e8e8e8] border border-gray-300 rounded-sm"></span>
        <span>Clear and confident answers 25%</span>
      </div>
    </div>
  </div>
</div>


              <div className="bg-[#f9f9f9] p-4 rounded border border-gray-200">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2 text-gray-800 font-semibold">
                    <span>Bloom’s Taxonomy</span>
                    <InformationCircleIcon className="w-4 h-4 text-gray-400" />
                  </div>
                </div>
                <div className="w-full h-60">
                  <ResponsiveContainer width="100%" height="100%">
                    <RadarChart cx="50%" cy="50%" outerRadius="80%" data={bloomData}>
                      <PolarGrid />
                      <PolarAngleAxis dataKey="subject" tick={{ fill: '#555', fontSize: 12 }} />
                      <PolarRadiusAxis angle={90} domain={[2, 10]} tick={{ fill: 'rgba(165, 173, 175, 1)', fontSize: 10 }} ticks={[4, 6, 8, 10]} />
                      <Radar name="Student" dataKey="A" stroke="#0876a9" fill="#0876a9" fillOpacity={0.6} dot={renderDot} />
                    </RadarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
          </div>

        {/* Edumetric AI */}
        </div>
        <div className="bg-white p-4 shadow rounded border border-gray-200">
          <div className="flex items-center mb-4">
            <div className="bg-[#0876a9] p-2 rounded-full">
              <SparklesIcon className="w-5 h-5 text-white" />
            </div>
            <h2 className="text-[#0876a9] font-bold text-lg ml-2">EDUMETRIC AI</h2>
          </div>

          <p className="text-sm text-[#0876a9] font-semibold">Hello, Afra Ahmed</p>
          <p className="text-sm text-[#0876a9] mb-4">
            Let’s collaborate to change learning experience for your students!
          </p>

          <div className="space-y-3">
            {[{
              title: 'Create a Remedial Lesson Plan',
              desc: 'Auto-generates a targeted lesson based on weak areas.'
            }, {
              title: 'Assign a Personalized Assignment',
              desc: 'Auto-generates personalized practice questions for improvement.'
            }, {
              title: 'Prepare Guided Teaching Notes',
              desc: 'Auto-generates detailed teaching notes to support.'
            }, {
              title: 'Offer Tailored Recommendations',
              desc: 'Auto-generates personalized suggestions to help.'
            }, {
              title: 'Brainstorm with Edumetric',
              desc: 'Brainstorm with Edumetric AI to uncover ways to support.'
            }].map((item, index) => (
              <div key={index} className="bg-[#f9f9f9] p-3 rounded text-sm border border-gray-200">
                <strong className="text-[#0876a9]">{item.title}</strong><br />
                <span className="text-gray-600 text-xs">{item.desc}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}