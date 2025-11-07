import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Counselors from './pages/Counselors'

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <section id="home"><Hero /></section>
        <section id="features" className="py-16"><Features /></section>
        <section id="counselors" className="py-16 bg-white"><Counselors /></section>
      </main>
      <footer className="py-8 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} CounselConnect · Built with ❤️
      </footer>
    </div>
  )
}