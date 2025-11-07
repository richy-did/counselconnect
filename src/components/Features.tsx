import React from 'react'

const items = [
  {
    title: "Career Explorer",
    desc: "Browse careers with subjects, skills, and local institutions (UR, AUCA, IPRC…)."
  },
  {
    title: "Quick Interests Quiz",
    desc: "Answer 5-minute questions and get matched with careers that fit your strengths."
  },
  {
    title: "Counselor Booking",
    desc: "Find counselors by specialty and language; request a session in a few taps."
  },
  {
    title: "Guides & Checklists",
    desc: "University timelines, scholarship checklists, CV and essay tips (EN/RW)."
  }
]

export default function Features() {
  return (
    <div className="max-w-6xl mx-auto px-4">
      <h2 className="text-3xl font-bold text-brand-900 mb-8">Features</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {items.map((it) => (
          <div key={it.title} className="rounded-2xl border bg-white p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-brand-800">{it.title}</h3>
            <p className="mt-2 text-slate-700">{it.desc}</p>
          </div>
        ))}
      </div>
    </div>
  )
}