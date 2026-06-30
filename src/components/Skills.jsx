import React from 'react'

const skills = [
  { name: 'JavaScript', level: 70 },
  { name: 'PHP', level: 70 },
  { name: 'C++', level: 50 },
  { name: 'Visual Basic', level: 67 },
  { name: 'React', level: 60 },
  { name: 'HTML / CSS', level: 95 },
  { name: 'Node.js', level: 65 },
  { name: 'Git & GitHub', level: 75 },
  { name: 'UI Design', level: 70 },
  
]

export default function Skills() {
  return (
    <section className="section" id="skills">
      <h2 className="section-title">
        <span className="num">02</span> SKILL TREE
      </h2>
      <p className="section-sub">Stats charge up the more you grind</p>

      <div className="skills-list">
        {skills.map((s) => (
          <div className="skill-row" key={s.name}>
            <div className="skill-name">{s.name}</div>
            <div className="skill-bar-track">
              <div
                className="skill-bar-fill"
                style={{ width: `${s.level}%` }}
              />
            </div>
            <div className="skill-lv">{s.level}%</div>
          </div>
        ))}
      </div>
    </section>
  )
}
