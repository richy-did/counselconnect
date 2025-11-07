import React from 'react'

type Props = {
  name: string
  title: string
  languages: string[]
  specialties: string[]
  imgSrc: string
}

export default function CounselorCard({ name, title, languages, specialties, imgSrc }: Props) {
  return (
    <div className="rounded-2xl border bg-white shadow-sm overflow-hidden">
      <img src={imgSrc} alt={name} className="w-full h-44 object-cover" />
      <div className="p-4">
        <h4 className="font-semibold text-brand-900">{name}</h4>
        <p className="text-sm text-slate-600">{title}</p>
        <p className="mt-2 text-sm"><span className="font-medium">Languages:</span> {languages.join(', ')}</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {specialties.map((s) => (
            <span key={s} className="text-xs rounded-full bg-brand-50 border border-brand-200 px-2 py-1">{s}</span>
          ))}
        </div>
        <button className="mt-4 w-full rounded-lg bg-brand-600 hover:bg-brand-700 text-white py-2">Request Session</button>
      </div>
    </div>
  )
}