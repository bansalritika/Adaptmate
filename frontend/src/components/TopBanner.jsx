import React from 'react';
import mocket from '../assets/mocket.png';
import coming from '../assets/coming.png';
import { FaArrowRight } from 'react-icons/fa';

export default function TopBanner() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between bg-gradient-to-r from-[#0876a9] to-[#05023e] rounded-xl p-2 text-white relative overflow-visible w-full min-h-[150px] gap-4">
      {/* Mascot Image */}
      <div className="relative md:static -top-5 md:top-0">
        <img
          src={mocket}
          alt="Mascot"
          className="w-28 sm:w-32 md:w-44 lg:w-52 object-contain"
        />
      </div>

      {/* Text Content */}
      <div className="flex flex-col px-4 text-center md:text-left md:ml-4 max-w-full md:max-w-[350px]">
        <h2 className="text-lg md:text-2xl font-bold mb-2 leading-tight">
          Good Morning Sameer!
        </h2>
        <p className="text-sm md:text-base mb-4 leading-snug">
          Your effort helped <span className="font-semibold">35 out of 52 students close</span> critical learning gaps
        </p>
        <a
          href="#"
          className="flex items-center gap-2 text-white font-semibold justify-center md:justify-start hover:underline"
        >
          Run LGA Now <FaArrowRight />
        </a>
      </div>

      {/* Coming Soon Image */}
      <div className="flex-shrink-0">
        <img
          src={coming}
          alt="Coming Soon"
          className="w-28 sm:w-32 md:w-44 lg:w-52 object-contain"
        />
      </div>
    </div>
  );
}