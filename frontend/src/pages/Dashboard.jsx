import React from "react";

import TopBanner from "../components/TopBanner";
import PerformanceChart from "../components/PerformanceChart";
import Suggestions from "../components/Suggestions";
import ImmediateAction from "../components/ImmediateAction";
import TeacherStats from "../components/TeacherStats";
import NeedsAssistance from "../components/NeedsAssistance";
import SmartInsights from "../components/SmartInsights";

const Dashboard = () => {
  return (
    <div className="p-4 bg-[#f9fafb] min-h-screen">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* LEFT 2/3 of screen */}
        <div className="lg:col-span-2 space-y-4">
          <TopBanner />

          {/* Nested grid for Performance + Suggestions + Teacher Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* PerformanceChart + ImmediateAction (2/3 width on md+) */}
            <div className="md:col-span-2 space-y-4">
              <PerformanceChart />
              <ImmediateAction />
            </div>

            {/* Suggestions + Stats (1/3 width on md+) */}
            <div className="space-y-4">
              <Suggestions />
              <TeacherStats />
            </div>
          </div>
        </div>

        {/* RIGHT sidebar column */}
        <div className="space-y-4">
          <NeedsAssistance />
          <SmartInsights />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
