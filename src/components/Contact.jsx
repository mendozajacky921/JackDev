import React, { useState } from 'react'

export default function Contact() {
  const [sent, setSent] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section className="section" id="contact">
      <h2 className="section-title">
        <span className="num">04</span> GAME OVER
      </h2>
      <p className="section-sub">Insert coin to continue the conversation</p>

      <div className="contact-box">
        {sent ? (
          <>
            <h3>MESSAGE SENT!</h3>
            <p className="continue-sub">
              You earned +100 XP. I'll reply soon — thanks for playing.
            </p>
          </>
        ) : (
          <>
            <h3>CONTINUE?</h3>
            <p className="continue-sub">10 9 8 7 6 5 4 3 2 1</p>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div>
                <label>Player name</label>
                <input type="text" placeholder="Your name" required />
              </div>
              <div>
                <label>Comms link</label>
                <input type="email" placeholder="you@email.com" required />
              </div>
              <div>
                <label>Message</label>
                <textarea
                  rows="4"
                  placeholder="What's the mission?"
                  required
                />
              </div>
              <button type="submit" className="btn-arcade">
                SEND TRANSMISSION
              </button>
            </form>
          </>
        )}

        <div className="contact-links">
          <a href="https://github.com/mendozajacky921" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a
            href="#"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <a href="#">Email</a>
        </div>
      </div>
    </section>
  )
}
