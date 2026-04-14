import React, { useState } from "react";
import {
  IoShareSocial
} from "react-icons/io5";
import {
  RiMoneyDollarBoxFill
} from "react-icons/ri";
import {
  AiFillLike
} from "react-icons/ai";
import {
  FaStar
} from "react-icons/fa";

import {
  PieChart, Pie,
  AreaChart, Area,
  LineChart, Line,
  BarChart, Bar,
  XAxis, YAxis, Tooltip, CartesianGrid,
  ResponsiveContainer
} from "recharts";

const data = [
  { year: "2020", value: 100 },
  { year: "2021", value: 200 },
  { year: "2022", value: 500 },
  { year: "2023", value: 800 },
  { year: "2024", value: 1200 },
];

const Aside = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-gray-100">

      {/* SIDEBAR */}
      <aside className={`fixed md:static top-0 left-0 h-[150vh] w-72 z-1000 bg-gray-900 text-white p-5 transform transition duration-500 ${open ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}>
        <h2 className="text-2xl font-bold mb-6 text-center">Dashboard</h2>

        <ul className="space-y-3">
          {["🏠Home", "📁Record", "📊Analytics", "📈Reports", "⚙️Settings"].map((item) => (
            <li key={item} className="hover:bg-gray-700 p-2 rounded cursor-pointer transition text-center">
              {item}
            </li>
          ))}
        </ul>
      </aside>

      {/* MAIN */}
      <div className="flex-1 flex flex-col">

        {/* HEADER */}
        <header className="bg-white shadow-md p-4 flex justify-between items-center">
          <button onClick={() => setOpen(!open)} className="md:hidden text-2xl">
            ☰
          </button>
          <h1 className="font-bold text-lg">Dashboard</h1>
          <div className="flex items-center gap-2">
            <img className="w-10 h-10 rounded-full border-2 border-blue-500"
              src="https://avatars.githubusercontent.com/u/212504628?v=4"
              alt=""
            />
            <span>Suraj</span>
          </div>
        </header>

        {/* CONTENT */}
        <main className="p-6 space-y-6">

          {/* TOP CARDS */}
          <div className="grid md:grid-cols-4 gap-6">

            {[
              { icon: <RiMoneyDollarBoxFill />, title: "Earning", value: "$700", color: "from-green-400 to-green-600" },
              { icon: <IoShareSocial />, title: "Share", value: "$800", color: "from-blue-400 to-blue-600" },
              { icon: <AiFillLike />, title: "Likes", value: "$900", color: "from-red-400 to-red-600" },
              { icon: <FaStar />, title: "Rating", value: "$950", color: "from-yellow-400 to-orange-500" },
            ].map((item, i) => (
              <div key={i} className={`bg-gradient-to-r ${item.color} text-white p-6 rounded-xl shadow-lg hover:scale-110 hover:shadow-2xl transition duration-300 flex flex-col items-center`}>
                <div className="text-5xl mb-2 animate-bounce">{item.icon}</div>
                <p>{item.title}</p>
                <h2 className="text-2xl font-bold">{item.value}</h2>
              </div>
            ))}
          </div>

          {/* CHARTS */}
          <div className="grid md:grid-cols-2 gap-6">

            {/* Line */}
            <div className="bg-white p-4 rounded-xl shadow hover:shadow-xl transition">
              <h2 className="font-bold mb-2">Line Chart</h2>
              <ResponsiveContainer width="100%" height={250}>
                <LineChart data={data}>
                  <XAxis dataKey="year" />
                  <YAxis />
                  <Tooltip />
                  <Line dataKey="value" stroke="#3b82f6" />
                </LineChart>
              </ResponsiveContainer>
            </div>

            {/* Bar */}
            <div className="bg-white p-4 rounded-xl shadow hover:shadow-xl transition">
              <h2 className="font-bold mb-2">Bar Chart</h2>
              <ResponsiveContainer width="100%" height={250}>
                <BarChart data={data}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="year" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="value" fill="#10b981" />
                </BarChart>
              </ResponsiveContainer>
            </div>

            {/* Pie */}
            <div className="bg-white p-4 rounded-xl shadow hover:shadow-xl transition">
              <h2 className="font-bold mb-2">Pie Chart</h2>
              <ResponsiveContainer width="100%" height={250}>
                <PieChart>
                  <Pie data={data} dataKey="value" nameKey="year" outerRadius={80} fill="#f59e0b" label />
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>

            {/* Area */}
            <div className="bg-white p-4 rounded-xl shadow hover:shadow-xl transition">
              <h2 className="font-bold mb-2">Area Chart</h2>
              <ResponsiveContainer width="100%" height={250}>
                <AreaChart data={data}>
                  <XAxis dataKey="year" />
                  <YAxis />
                  <Tooltip />
                  <Area dataKey="value" stroke="#ef4444" fill="#f87171" />
                </AreaChart>
              </ResponsiveContainer>
            </div>

          </div>

        </main>

        {/* FOOTER */}
        <footer className="bg-gray-900 text-white text-center p-4 mt-auto">
          <p className="text-sm">© 2026 Dashboard UI | Made with ❤️ by Suraj</p>
          <div className="flex justify-center gap-4 mt-2 text-lg">
            <span className="hover:text-blue-400 cursor-pointer">🌐</span>
            <span className="hover:text-pink-400 cursor-pointer">📸</span>
            <span className="hover:text-green-400 cursor-pointer">💬</span>
          </div>
        </footer>

      </div>
    </div>
  );
};

export default Aside;