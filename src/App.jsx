// src/App.jsx
import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import SiteFooter from "./components/SiteFooter";
import Hero from "./sections/Hero";
import Features from "./sections/Features";
import Plans from "./sections/Plans";          // <-- Planos vem antes
import Testimonials from "./sections/Testimonials";
import FAQ from "./sections/FAQ";              // <-- novo import
import Contact from "./sections/Contact";
import Termos from "./pages/Termos";
import Privacidade from "./pages/Privacidade";
import AOS from "aos";
import "aos/dist/aos.css";

export default function App() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <div className="bg-gelo text-escuro min-h-screen font-sans scroll-smooth">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <Hero />
              <Features />
              <Plans />
              <Testimonials />
              <FAQ />          {/* nova seção */}
              <Contact />
              <SiteFooter />
            </>
          }
        />
        <Route path="/termos" element={<Termos />} />
        <Route path="/privacidade" element={<Privacidade />} />
      </Routes>
    </div>
  );
}
