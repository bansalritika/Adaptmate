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
      {/* Grid layout for main + sidebar */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        
        {/* LEFT (Main Content) */}
        <div className="lg:col-span-2 space-y-5">
          <TopBanner />

          {/* Performance + Suggestions + Teacher Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {/* PerformanceChart + ImmediateAction (2/3 width) */}
            <div className="md:col-span-2 space-y-5">
              <PerformanceChart />
              <ImmediateAction />
            </div>

            {/* Suggestions + Teacher Stats (1/3 width) */}
            <div className="space-y-5">
              <Suggestions />
              <TeacherStats />
            </div>
          </div>
        </div>

        {/* RIGHT Sidebar */}
        <div className="space-y-5">
          <NeedsAssistance />
          <SmartInsights />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
