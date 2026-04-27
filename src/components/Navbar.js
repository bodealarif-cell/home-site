import React from "react";

function Navbar() {
  return (
    <nav className="bg-gray-800 flex items-center justify-between px-6 py-4 shadow-md">
      <div className="flex items-center space-x-2">
        <div className="bg-gradient-to-r from-cyan-400 to-green-400 p-2 rounded-lg">
          <span className="text-white font-bold text-xl">H</span>
        </div>
        <h1 className="text-white text-2xl font-semibold">Home</h1>
      </div>
      <input
        type="text"
        placeholder="ابحث عن فيديو..."
        className="bg-gray-700 text-gray-200 rounded-md px-4 py-2 w-1/2 focus:outline-none focus:ring-2 focus:ring-cyan-400"
      />
    </nav>
  );
}

export default Navbar;
