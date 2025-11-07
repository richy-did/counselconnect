import React from 'react'

export default function Navbar() {
  return (
    <header className="sticky top-0 z-30 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <a href="#home" className="font-bold text-brand-800 text-xl">CounselConnect</a>
        <nav className="flex items-center gap-6 text-sm">
          <a href="#features" className="hover:text-brand-700">Features</a>
          <a href="#counselors" className="hover:text-brand-700">Counselors</a>
          <a href="#home" className="ml-4 inline-flex items-center rounded-full bg-brand-600 hover:bg-brand-700 text-white px-4 py-2">
            Start Quiz
          </a>
        </nav>
      </div>
    </header>
  )
}