import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import SpeedIcon from '@mui/icons-material/Speed';
import logo from '../assets/adaptmate-logo.png';
import {
  ComputerDesktopIcon,
  AcademicCapIcon,
  UsersIcon,
  PencilSquareIcon
} from '@heroicons/react/24/outline';

export default function Sidebar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [hoverLearning, setHoverLearning] = useState(false);

  const menuItems = [
    { name: 'Dashboard', icon: <SpeedIcon className="h-6 w-6" />, path: '/' },
    { name: 'Teaching', icon: <ComputerDesktopIcon className="h-6 w-6" />, path: '/teaching' },
    { name: 'Learning', icon: <AcademicCapIcon className="h-6 w-6" />, path: '/learning' },
    { name: 'Student', icon: <UsersIcon className="h-6 w-6" />, path: '/student' },
    { name: 'Tests', icon: <PencilSquareIcon className="h-6 w-6" />, path: '/tests' }
  ];

  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        onClick={() => setSidebarOpen(true)}
        className="md:hidden fixed top-4 left-4 bg-[#0876a9] text-white p-2 rounded z-50"
      >
        ☰
      </button>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 max-w-[80%] bg-[#0876a9] text-white px-4 py-8 overflow-y-auto transform ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } md:translate-x-0 transition-transform duration-300 z-40`}
      >
        {/* Close Button for Mobile */}
        <div className="flex justify-between items-center md:hidden mb-8">
          <img src={logo} alt="Adaptmate Logo" className="h-10" />
          <button
            onClick={() => setSidebarOpen(false)}
            className="text-white text-2xl font-bold"
          >
            ×
          </button>
        </div>

        {/* Logo (Desktop) */}
        <div className="hidden md:block text-center mb-12">
          <img src={logo} alt="Adaptmate Logo" className="mx-auto h-14 w-auto" />
        </div>

        {/* Menu Items */}
        <div className="space-y-3">
          {menuItems.map((item, index) => (
            <div
              key={index}
              className="relative"
              onMouseEnter={() => item.name === 'Learning' && setHoverLearning(true)}
              onMouseLeave={() => item.name === 'Learning' && setHoverLearning(false)}
            >
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center gap-4 py-3 px-4 rounded-md font-semibold transition-colors ${
                    isActive
                      ? 'bg-[#c1e5f3] text-[#0876a9]'
                      : 'hover:bg-[#c1e5f3] hover:text-[#0876a9]'
                  }`
                }
                onClick={() => setSidebarOpen(false)}
              >
                {item.icon}
                <span className="text-base">{item.name}</span>
              </NavLink>

              {/* Submenu for Learning */}
              {item.name === 'Learning' && hoverLearning && (
                <div className="ml-12 mt-1 transition-all">
                  <NavLink
                    to="/learning/topic-wise"
                    className={({ isActive }) =>
                      `block py-2 px-4 rounded-md text-sm font-medium transition ${
                        isActive
                          ? 'bg-[#c1e5f3] text-[#0876a9]'
                          : 'hover:bg-[#c1e5f3] hover:text-[#0876a9]'
                      }`
                    }
                    onClick={() => setSidebarOpen(false)}
                  >
                    Topic-wise
                  </NavLink>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Overlay for mobile */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 md:hidden z-30"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}
    </>
  );
}
