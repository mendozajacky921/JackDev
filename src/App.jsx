import React from 'react'
import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx'
import Projects from './components/Projects.jsx'
import Contact from './components/Contact.jsx'

export default function App() {
  return (
    <>
      <div className="scanlines" />
      <div className="vignette" />
      <Nav />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <footer>
        © {new Date().getFullYear()} PLAYER_ONE — ALL RIGHTS RESERVED — NO CONTINUES LEFT
      </footer>
    </>
  )
}
