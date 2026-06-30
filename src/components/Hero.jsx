import React from 'react'

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-eyebrow pixel-font">★ ARCADE PORTFOLIO ★</div>
      <h1 className="hero-title">Jacky&nbsp;Mendoza</h1>
      <p className="hero-sub">
        Game Developer Wanna Be.
      </p>
      <button
        className="press-start"
        onClick={() =>
          document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
        }
      >
        PRESS START
      </button>

      <div className="hero-stats">
        <div className="hero-stat">
          LEVEL
          <span>67</span>
        </div>
        <div className="hero-stat">
          PROJECTS
          <span>1</span>
        </div>
        <div className="hero-stat">
          COFFEE
          <span>∞</span>
        </div>
      </div>
    </section>
  )
}
