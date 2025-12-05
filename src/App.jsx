// src/App.jsx
import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import SiteFooter from "./components/SiteFooter";
import Hero from "./sections/Hero";
import Features from "./sections/Features";
import Plans from "./sections/Plans";
import Testimonials from "./sections/Testimonials";
import FAQ from "./sections/FAQ";
import Contact from "./sections/Contact";
import Termos from "./pages/Termos";
import Privacidade from "./pages/Privacidade";
import Checkout from "./pages/Checkout";   // <-- IMPORTANTE
import AOS from "aos";
import "aos/dist/aos.css";

export default function App() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <div className="bg-gelo text-escuro min-h-screen font-sans scroll-smooth">
      <Routes>
        {/* Página principal */}
        <Route
          path="/"
          element={
            <>
              <Header />
              <Hero />
              <Features />
              <Plans />
              <Testimonials />
              <FAQ />
              <Contact />
              <SiteFooter />
            </>
          }
        />

        {/* Checkout */}
        <Route path="/checkout" element={<Checkout />} />

        {/* Termos */}
        <Route path="/termos" element={<Termos />} />

        {/* Privacidade */}
        <Route path="/privacidade" element={<Privacidade />} />
      </Routes>
    </div>
  );
}
