import React from "react";
import heroImg from "../assets/tryout.jpg"; // <-- use an import, not require

export default function Hero() {
  return (
    <div className="bg-gradient-to-b from-brand-50 to-white">
      <div className="max-w-6xl mx-auto px-4 py-20 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-brand-900 leading-tight">
            Find your path after S6.
          </h1>
          <p className="mt-4 text-slate-700 text-lg">
            Explore careers, understand required subjects, and connect with counselors who speak your language.
          </p>
          <div className="mt-6 flex gap-3">
            <a href="#counselors" className="rounded-lg bg-brand-600 hover:bg-brand-700 text-white px-5 py-3">
              Book a Counselor
            </a>
            <a href="#features" className="rounded-lg border border-slate-300 hover:bg-slate-100 px-5 py-3">
              See Features
            </a>
          </div>
        </div>

        {/* Image panel */}
        <div className="aspect-video rounded-2xl overflow-hidden border bg-white shadow-inner">
          <img src={heroImg} alt="Students learning together" className="w-full h-full object-cover" />
        </div>
      </div>
    </div>
  );
}
