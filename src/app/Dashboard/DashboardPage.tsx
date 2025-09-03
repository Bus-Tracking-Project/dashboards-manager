"use client";

import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Fix default marker icon issue in Leaflet + Next.js
const DefaultIcon = L.icon({
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
});
L.Marker.prototype.options.icon = DefaultIcon;

// Dummy TSRTC depot data
const depots = [
  { name: "Miyapur Depot", coords: [17.4932, 78.3915] },
  { name: "Uppal Depot", coords: [17.4057, 78.5596] },
  { name: "Musheerabad Depot", coords: [17.4083, 78.5010] },
  { name: "Kukatpally Depot", coords: [17.4946, 78.3999] },
  { name: "Secunderabad Depot", coords: [17.4399, 78.4983] },
  { name: "Dilsukhnagar Depot", coords: [17.3717, 78.5250] },
  { name: "Charminar Depot", coords: [17.3616, 78.4747] },
];

// Dummy data for on-time performance (last 7 days)
const onTimeData = [
  { day: "Mon", onTime: 92, total: 100 },
  { day: "Tue", onTime: 88, total: 100 },
  { day: "Wed", onTime: 95, total: 100 },
  { day: "Thu", onTime: 90, total: 100 },
  { day: "Fri", onTime: 87, total: 100 },
  { day: "Sat", onTime: 93, total: 100 },
  { day: "Sun", onTime: 89, total: 100 },
];

// Dummy data for passenger load (last 7 days)
const passengerLoadData = [
  { day: "Mon", passengers: 1000 },
  { day: "Tue", passengers: 1380 },
  { day: "Wed", passengers: 1420 },
  { day: "Thu", passengers: 1350 },
  { day: "Fri", passengers: 1580 },
  { day: "Sat", passengers: 1100 },
  { day: "Sun", passengers: 980 },
];

// Simple Bar Chart Component for On-time Performance
const OnTimeChart = () => {
  const maxValue = Math.max(...onTimeData.map(d => d.onTime));
  
  return (
    <div className="h-40 flex items-end justify-between gap-2">
      {onTimeData.map((data, index) => (
        <div key={index} className="flex flex-col items-center">
          <div className="text-xs text-gray-600 mb-1">{data.onTime}%</div>
          <div 
            className="w-10 bg-blue-500 rounded-t-sm transition-all hover:bg-blue-600"
            style={{ height: `${(data.onTime / maxValue) * 120}px` }}
          ></div>
          <div className="text-xs text-gray-500 mt-1">{data.day}</div>
        </div>
      ))}
    </div>
  );
};

// Simple Bar Chart Component for Passenger Load
const PassengerLoadChart = () => {
  const maxValue = Math.max(...passengerLoadData.map(d => d.passengers));
  
  return (
    <div className="h-40 flex items-end justify-between gap-2">
      {passengerLoadData.map((data, index) => (
        <div key={index} className="flex flex-col items-center">
          <div className="text-xs text-gray-600 mb-1">{data.passengers}</div>
          <div 
            className="w-10 bg-green-500 rounded-t-sm transition-all hover:bg-green-600"
            style={{ height: `${(data.passengers / maxValue) * 120}px` }}
          ></div>
          <div className="text-xs text-gray-500 mt-1">{data.day}</div>
        </div>
      ))}
    </div>
  );
};

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      {/* Top Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-2xl shadow-lg p-5 hover:shadow-xl transition">
          <p className="text-gray-500 text-sm">Driver's</p>
          <h2 className="text-3xl font-bold text-blue-600 mt-2">158</h2>
          <p className="text-xs text-green-500 mt-1">+1 today</p>
        </div>
        <div className="bg-white rounded-2xl shadow-lg p-5 hover:shadow-xl transition">
          <p className="text-gray-500 text-sm">Conductors</p>
          <h2 className="text-3xl font-bold text-green-600 mt-2">166</h2>
          <p className="text-xs text-gray-400 mt-1">+2 today</p>
        </div>
        <div className="bg-white rounded-2xl shadow-lg p-5 hover:shadow-xl transition">
          <p className="text-gray-500 text-sm">Accidents</p>
          <h2 className="text-3xl font-bold text-red-500 mt-2">3</h2>
          <p className="text-xs text-gray-400 mt-1">Open alerts</p>
        </div>
        <div className="bg-white rounded-2xl shadow-lg p-5 hover:shadow-xl transition">
          <p className="text-gray-500 text-sm">Reports</p>
          <h2 className="text-2xl font-bold text-indigo-600 mt-2">5</h2>
          <p className="text-xs text-gray-400 mt-1">System-wide</p>
        </div>
      </div>

      {/* Graphs Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition">
          <h3 className="text-lg font-semibold mb-4 text-gray-600">On-time Performance (last 7d)</h3>
          <div className="h-40 flex items-center justify-center">
            <OnTimeChart />
          </div>
          <div className="mt-4 text-center">
            <p className="text-sm text-gray-600">
              Average: {Math.round(onTimeData.reduce((sum, d) => sum + d.onTime, 0) / onTimeData.length)}%
            </p>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition">
          <h3 className="text-lg font-semibold mb-4 text-gray-600">Passenger Load (last 7d)</h3>
          <div className="h-40 flex items-center justify-center">
            <PassengerLoadChart />
          </div>
          <div className="mt-4 text-center">
            <p className="text-sm text-gray-600">
              Total: {passengerLoadData.reduce((sum, d) => sum + d.passengers, 0).toLocaleString()} passengers
            </p>
          </div>
        </div>
      </div>

      {/* Real Map Section */}
      {/* <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition">
        <h3 className="text-lg font-semibold mb-4">Live Map (TSRTC Depots)</h3>
        <div className="h-96 rounded-lg overflow-hidden">
          <MapContainer
            center={[17.385044, 78.486671]} // Hyderabad center
            zoom={12}
            style={{ height: "100%", width: "100%" }}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            {/* Loop through depots 
            {depots.map((depot, i) => (
              <Marker key={i} position={depot.coords as [number, number]}>
                <Popup>{depot.name}</Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>
      </div> */}
    </div>
  );
}
