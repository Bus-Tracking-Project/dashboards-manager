"use client";

import React from "react";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const handleLogout = () => {
    alert("Logged out!"); // Replace with actual auth logout logic
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-60 bg-blue-600 text-white flex flex-col">
        <div className="px-6 py-6 text-2xl font-bold">Admin Dashboard</div>
        <nav className="flex-1 px-4 space-y-2">
          <a href="#" className="flex items-center gap-2 p-2 hover:bg-blue-500 rounded">Overview</a>
          <a href="#" className="flex items-center gap-2 p-2 hover:bg-blue-500 rounded">Buses</a>
          <a href="#" className="flex items-center gap-2 p-2 hover:bg-blue-500 rounded">Routes</a>
          <a href="#" className="flex items-center gap-2 p-2 hover:bg-blue-500 rounded">Conductors</a>
          <a href="#" className="flex items-center gap-2 p-2 hover:bg-blue-500 rounded">Drivers</a>
          <a href="#" className="flex items-center gap-2 p-2 hover:bg-blue-500 rounded">Managers</a>
          <a href="#" className="flex items-center gap-2 p-2 hover:bg-blue-500 rounded">Notifications</a>
          <a href="#" className="flex items-center gap-2 p-2 hover:bg-blue-500 rounded">Reports</a>
          <a href="#" className="flex items-center gap-2 p-2 hover:bg-blue-500 rounded bg-blue-500 rounded-lg">Settings</a>
        </nav>
      </aside>

      {/* Main content */}
      <div className="flex-1 flex flex-col">
        {/* Navbar */}
        <header className="flex justify-between items-center bg-white shadow px-6 py-4">
          <span className="font-bold text-gray-700">Admin</span>
          <button
            onClick={handleLogout}
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
          >
            Logout
          </button>
        </header>

        {/* Page Content */}
        <main className="flex-1 p-6 overflow-auto">{children}</main>
      </div>
    </div>
  );
};

export default Layout;
