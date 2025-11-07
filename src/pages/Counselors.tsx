import React from 'react'
import CounselorCard from '../components/CounselorCard'
import c1 from '../assets/pic11.png'
import c2 from '../assets/pic2.png'
import c3 from '../assets/pic33.png'

const data = [
  { name: 'Dr. Sarah Johnson', title: 'Licensed Clinical Psychologist', languages: ['EN','RW'], specialties: ['Anxiety','Study Skills','Scholarships'], img: c1 },
  { name: 'Eric Niyonzima', title: 'Career & TVET Advisor', languages: ['EN','RW','FR'], specialties: ['TVET','STEM','Internships'], img: c2 },
  { name: 'Aisha M.', title: 'University Applications Coach', languages: ['EN','RW'], specialties: ['Personal Statements','CV','Scholarships'], img: c3 },
]

export default function Counselors() {
  return (
    <div className="max-w-6xl mx-auto px-4">
      <h2 className="text-3xl font-bold text-brand-900 mb-8">Counselors</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {data.map((c) => (
          <CounselorCard
            key={c.name}
            name={c.name}
            title={c.title}
            languages={c.languages}
            specialties={c.specialties}
            imgSrc={c.img}
          />
        ))}
      </div>
    </div>
  )
}