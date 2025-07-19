import React from 'react';
import { ChevronRightIcon } from '@heroicons/react/24/outline';
import avatar from '../assets/avatar.png';

export default function NeedsAssistance() {
  const assistanceList = [
    { name: 'Sameer Ahmed', avatar: avatar },
    { name: 'Afra Ahmed', avatar: avatar },
    { name: 'Akshay Seth', avatar: avatar },
  ];

  return (
    <div className="bg-white rounded-xl p-4 shadow w-full">
      {/* Header */}
      <div className="flex justify-between items-center mb-4 flex-wrap gap-2">
        <h3 className="font-bold text-gray-800 text-lg">
          Needs your assistance
        </h3>
        <a
          href="#"
          className="flex items-center gap-1 text-[#0876a9] text-sm hover:underline"
        >
          See all
          <ChevronRightIcon className="h-4 w-4 sm:h-5 sm:w-5" />
        </a>
      </div>

      {/* Assistance List */}
      <div className="space-y-4">
        {assistanceList.map((person, index) => (
          <div
            key={index}
            className="flex justify-between items-center flex-wrap gap-4"
          >
            {/* Avatar and Name */}
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 relative">
                <img
                  src={person.avatar}
                  alt={person.name}
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
              <span className="text-gray-700 text-sm sm:text-base font-medium">
                {person.name}
              </span>
            </div>

            {/* Button */}
            <button className="bg-[#0876a9] text-white text-sm sm:text-base px-3 py-1.5 sm:px-4 sm:py-2 rounded-md hover:bg-[#06658d]">
              Plan Support
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
