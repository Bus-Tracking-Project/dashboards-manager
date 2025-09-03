// /app/dashboard/DriversPage.tsx
"use client";

import React, { useState } from "react";

interface Driver {
  id: number;
  name: string;
  license: string;
  phone: string;
  email: string;
  busno: string;
}

export default function DriversPage() {
  const [drivers, setDrivers] = useState<Driver[]>([
    {
      id: 1,
      name: "Ravi Kumar",
      license: "DL12345",
      phone: "9876543210",
      email: "ravi@example.com",
      busno: "TS09AB1234",
    },
    {
      id: 2,
      name: "Suresh Reddy",
      license: "DL67890",
      phone: "9876501234",
      email: "suresh@example.com",
      busno: "TS09CD5678",
    },
  ]);

  const [newDriver, setNewDriver] = useState({
    name: "",
    license: "",
    phone: "",
    email: "",
    busno: "",
  });
  const [editingDriver, setEditingDriver] = useState<Driver | null>(null);

  // Add Driver
  const addDriver = () => {
    if (
      !newDriver.name ||
      !newDriver.license ||
      !newDriver.phone ||
      !newDriver.email ||
      !newDriver.busno
    )
      return;
    setDrivers([
      ...drivers,
      {
        id: Date.now(),
        name: newDriver.name,
        license: newDriver.license,
        phone: newDriver.phone,
        email: newDriver.email,
        busno: newDriver.busno,
      },
    ]);
    setNewDriver({ name: "", license: "", phone: "", email: "", busno: "" });
  };

  // Delete Driver
  const deleteDriver = (id: number) => {
    setDrivers(drivers.filter((d) => d.id !== id));
  };

  // Edit Driver
  const startEditing = (driver: Driver) => {
    setEditingDriver(driver);
  };

  const saveEdit = () => {
    if (editingDriver) {
      setDrivers(
        drivers.map((d) => (d.id === editingDriver.id ? editingDriver : d))
      );
      setEditingDriver(null);
    }
  };

  return (
    <div className="p-6 text-black">
      <h2 className="text-2xl font-bold mb-6">Drivers Management</h2>

      {/* Add Driver Form */}
      <div className="mb-6 bg-white p-4 rounded-lg shadow border border-gray-300">
        <h3 className="text-lg font-semibold mb-2">Add Driver</h3>
        <div className="flex flex-wrap gap-2">
          <input
            type="text"
            placeholder="Name"
            value={newDriver.name}
            onChange={(e) => setNewDriver({ ...newDriver, name: e.target.value })}
            className="border border-gray-300 p-2 rounded w-40"
          />
          <input
            type="text"
            placeholder="License"
            value={newDriver.license}
            onChange={(e) =>
              setNewDriver({ ...newDriver, license: e.target.value })
            }
            className="border border-gray-300 p-2 rounded w-40"
          />
          <input
            type="text"
            placeholder="Phone"
            value={newDriver.phone}
            onChange={(e) =>
              setNewDriver({ ...newDriver, phone: e.target.value })
            }
            className="border border-gray-300 p-2 rounded w-40"
          />
          <input
            type="email"
            placeholder="Email"
            value={newDriver.email}
            onChange={(e) =>
              setNewDriver({ ...newDriver, email: e.target.value })
            }
            className="border border-gray-300 p-2 rounded w-48"
          />
          <input
            type="text"
            placeholder="Bus Number"
            value={newDriver.busno}
            onChange={(e) =>
              setNewDriver({ ...newDriver, busno: e.target.value })
            }
            className="border border-gray-300 p-2 rounded w-40"
          />
          <button
            onClick={addDriver}
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          >
            Add
          </button>
        </div>
      </div>

      {/* Drivers List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {drivers.map((driver) => (
          <div
            key={driver.id}
            className="bg-white shadow p-4 rounded-lg border border-gray-300"
          >
            {editingDriver?.id === driver.id ? (
              <>
                <input
                  type="text"
                  value={editingDriver.name}
                  onChange={(e) =>
                    setEditingDriver({
                      ...editingDriver,
                      name: e.target.value,
                    })
                  }
                  className="border border-gray-300 p-2 rounded w-full mb-2"
                />
                <input
                  type="text"
                  value={editingDriver.license}
                  onChange={(e) =>
                    setEditingDriver({
                      ...editingDriver,
                      license: e.target.value,
                    })
                  }
                  className="border border-gray-300 p-2 rounded w-full mb-2"
                />
                <input
                  type="text"
                  value={editingDriver.phone}
                  onChange={(e) =>
                    setEditingDriver({
                      ...editingDriver,
                      phone: e.target.value,
                    })
                  }
                  className="border border-gray-300 p-2 rounded w-full mb-2"
                />
                <input
                  type="email"
                  value={editingDriver.email}
                  onChange={(e) =>
                    setEditingDriver({
                      ...editingDriver,
                      email: e.target.value,
                    })
                  }
                  className="border border-gray-300 p-2 rounded w-full mb-2"
                />
                <input
                  type="text"
                  value={editingDriver.busno}
                  onChange={(e) =>
                    setEditingDriver({
                      ...editingDriver,
                      busno: e.target.value,
                    })
                  }
                  className="border border-gray-300 p-2 rounded w-full mb-2"
                />
                <div className="flex gap-2">
                  <button
                    onClick={saveEdit}
                    className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                  >
                    Save
                  </button>
                  <button
                    onClick={() => setEditingDriver(null)}
                    className="bg-gray-400 text-white px-3 py-1 rounded hover:bg-gray-500"
                  >
                    Cancel
                  </button>
                </div>
              </>
            ) : (
              <>
                <h4 className="font-bold text-lg">{driver.name}</h4>
                <p className="text-gray-600">License: {driver.license}</p>
                <p className="text-gray-600">Phone: {driver.phone}</p>
                <p className="text-gray-600">Email: {driver.email}</p>
                <p className="text-gray-600">Bus No: {driver.busno}</p>
                <div className="flex gap-2 mt-2">
                  <button
                    onClick={() => startEditing(driver)}
                    className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => deleteDriver(driver.id)}
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                  >
                    Delete
                  </button>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
