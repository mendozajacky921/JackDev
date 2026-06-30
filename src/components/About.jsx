import React from 'react'

export default function About() {
  return (
    <section className="section" id="about">
      <h2 className="section-title">
        <span className="num">01</span> CHARACTER PROFILE
      </h2>
      <p className="section-sub">Know your player</p>

      <div className="about-grid">
        <div className="char-card">
          <div className="char-avatar">JM</div>
          <div className="char-name">JACKY MENDOZA</div>
          <div className="char-class">Full stack Developer</div>
        </div>

        <div className="about-bio">
          <p>
            Aspiring game developer turned full-stack developer.
            Since I usually work solo, I build complete applications from
            database to UI while using AI-assisted development to speed up coding,
            brainstorming, debugging, and code reviews. My goal isn't just to ship
            features quickly—it's to understand how they work and create software that's 
            reliable and enjoyable to use.
          </p>
          <p>
           I enjoy tackling the logic behind applications more than
            decorating them. My focus is building features that work,
            solving real problems, and creating systems that are reliable from the inside out.
.
          </p>
          <div className="about-tags">
            <span className="about-tag">REACT</span>
            <span className="about-tag">JAVASCRIPT</span>
            <span className="about-tag">CSS</span>
            <span className="about-tag">UI/UX</span>
            <span className="about-tag">GIT</span>
          </div>
        </div>
      </div>
    </section>
  )
}
