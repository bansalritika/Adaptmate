import React from 'react';
import { BellIcon, CalendarDaysIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import avatar from '../assets/avatar.png';

export default function Header() {
  return (
    <div className="w-full">
      {/* Header Bar */}
      <div className="flex flex-wrap justify-between items-center py-2 px-4 sm:px-6 bg-white gap-y-3">
        {/* Left - Class Info Button */}
        <button className="flex items-center gap-2 border border-[#8ec8e3] text-[#0876a9] px-3 py-2 rounded-md font-black hover:bg-[#e6f4fa] text-sm sm:text-base truncate max-w-full">
          <span className="truncate max-w-[160px] sm:max-w-none">Class 12 - Section C - Maths</span>
          <ChevronRightIcon className="h-4 w-4 sm:h-5 sm:w-5 text-[#0876a9] flex-shrink-0" />
        </button>

        {/* Right - Icons + Profile */}
        <div className="flex items-center gap-3 sm:gap-5 ml-auto">
          {/* Icons */}
          <CalendarDaysIcon className="h-5 w-5 sm:h-6 sm:w-6 text-gray-600 cursor-pointer hover:text-[#0876a9]" />
          <BellIcon className="h-5 w-5 sm:h-6 sm:w-6 text-gray-600 cursor-pointer hover:text-[#0876a9]" />

          {/* Profile Section */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Avatar */}
            <div className="w-10 h-10 sm:w-12 sm:h-12 relative flex-shrink-0">
              <img
                src={avatar}
                alt="Sameer Ahmed"
                className="absolute -top-2 -left-1 w-14 h-14 sm:w-16 sm:h-16 rounded-full object-cover"
              />
            </div>

            {/* Text - Hidden on very small screens */}
            <div className="hidden sm:block text-sm leading-tight min-w-0">
              <span className="text-gray-500 block">Hi,</span>
              <span className="font-black text-[#0876a9] block truncate">Sameer Ahmed</span>
              <div className="text-gray-500 text-xs truncate">Teacher</div>
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <hr className="border-gray-300 w-full" />
    </div>
  );
}
