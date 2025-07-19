import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './pages/Sidebar';
import Dashboard from './pages/Dashboard';
import DashboardHeader from './pages/DashboardHeader';
import Student from './pages/Student'; // ✅ Added

export default function App() {
  return (
    <Router>
      <div className="flex bg-gray-100 min-h-screen">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <div className="flex-1 md:ml-64 transition-all duration-300">
          {/* Global Header */}
          <DashboardHeader />

          {/* Page Content */}
          <div className="p-2">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/student" element={<Student />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

