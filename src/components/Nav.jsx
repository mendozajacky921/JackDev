import React from 'react'

const links = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Levels' },
  { id: 'contact', label: 'Continue' },
]

function scrollTo(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

export default function Nav() {
  return (
    <nav className="nav">
      <div className="nav-logo pixel-font">PLAYER_ONE</div>
      <ul className="nav-links">
        {links.map((l) => (
          <li key={l.id}>
            <button onClick={() => scrollTo(l.id)}>{l.label}</button>
          </li>
        ))}
      </ul>
    </nav>
  )
}
