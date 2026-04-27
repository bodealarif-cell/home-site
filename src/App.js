import React from "react";
import Navbar from "./components/Navbar";
import VideoGrid from "./components/VideoGrid";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-gray-900 text-gray-100 min-h-screen font-sans">
      <Navbar />
      <main className="px-6 py-8">
        <VideoGrid />
      </main>
      <Footer />
    </div>
  );
}

export default App;
