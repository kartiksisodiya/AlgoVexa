import React from "react";
import { Routes, Route } from "react-router-dom";

// Global components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import ServicesPage from "./pages/ServicesPage";
import ContactUs from "./pages/ContactUs"; // ✅ Import ContactUs page

export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Main content */}
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/contact" element={<ContactUs />} /> {/* ✅ New Contact Us route */}
        </Routes>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
