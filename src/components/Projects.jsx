import React from 'react'

const levels = [
  {
    tag: 'LEVEL 1-1',
    name: 'Barangay Management System - In Progress',
    desc: 'A digital solution for efficient resident management, document processing, and public announcements.',
    stack: ['PHP', 'Supabase', 'CSS'],
    link: 'https://github.com/mendozajacky921/Bahay-Pare---Barangay-Management-System',
  }
]

export default function Projects() {
  return (
    <section className="section" id="projects">
      <h2 className="section-title">
        <span className="num">03</span> LEVEL SELECT
      </h2>
      <p className="section-sub">Choose a level to view the playthrough</p>

      <div className="level-grid">
        {levels.map((lvl) => (
          <a
            className="level-card"
            key={lvl.name}
            href={`${lvl.link}`}
            target="_blank"
            rel="noreferrer"
          >
            <span className="level-tag pixel-font">{lvl.tag}</span>
            <div className="level-name pixel-font">{lvl.name}</div>
            <p className="level-desc">{lvl.desc}</p>
            <div className="level-stack">
              {lvl.stack.map((s) => (
                <span key={s}>{s}</span>
              ))}
            </div>
            <div className="level-link">VIEW CODE →</div>
          </a>
        ))}
      </div>
    </section>
  )
}
