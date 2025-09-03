// /app/dashboard/page.tsx
"use client";

import React, { useState } from "react";
import Sidebar, { DashboardPageKey } from "./Sidebar";
import DashboardPage from "./DashboardPage";
import BusesPage from "./BusesPage";
import RoutesPage from "./RoutesPage";
import ConductorsPage from "./ConductorsPage";
import DriversPage from "./DriversPage";
import ManagersPage from "./ManagersPage";
import Layout from "./Layout";
//import SchedulesPage from "./SchedulesPage";
//import LiveTrackingPage from "./LiveTrackingPage";
//import MaintenancePage from "./MaintainancePage";
import NotificationsPage from "./NotificationsPage";
import ReportsPage from "./ReportsPage";
import SettingsPage from "./SettingsPage";

export default function Dashboard() {
  const [selected, setSelected] = useState<DashboardPageKey>("Overview");

  const render = () => {
    switch (selected) {
      case "Overview":
        return <DashboardPage />;
      case "Buses":
        return <BusesPage />;
      case "Routes":
        return <RoutesPage />;
        case "Conductors" :
            return <ConductorsPage/>
      case "Drivers":
        return <DriversPage />;
      case "Managers":
        return <ManagersPage />;
     /* case "Schedules":
        return <SchedulesPage />;
      case "Live Tracking":
        return <LiveTrackingPage />;
      case "Maintenance":
        return <MaintenancePage />;*/
      case "Notifications":
        return <NotificationsPage />;
      case "Reports":
        return <ReportsPage />;
      case "Settings":
        return <SettingsPage />;
      default:
        return <DashboardPage />;
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar selected={selected} onSelect={setSelected} />
      <main className="flex-1 p-6">{render()}</main>
    </div>
  );
}
