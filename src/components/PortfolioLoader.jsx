import React, { useEffect, useState } from 'react'
import './PortfolioLoader.css'

const SPLASH_DURATION = 2800
const EXIT_DURATION = 650
const SIGNATURE = 'Rishita Chauhan'

function PortfolioMark() {
  return (
    <svg
      className="portfolio-loader__mark"
      viewBox="0 0 440 220"
      role="img"
      aria-label="Rishita Chauhan portfolio"
    >
      <path
        className="portfolio-loader__hexagon"
        d="M293.5 167.4 229.5 204.4a8 8 0 0 1-8 0l-64-37a8 8 0 0 1-4-6.9V86.5a8 8 0 0 1 4-6.9l64-37a8 8 0 0 1 8 0l64 37a8 8 0 0 1 4 6.9v74a8 8 0 0 1-4 6.9Z"
      />
      <path
        className="portfolio-loader__hexagon portfolio-loader__hexagon--inner"
        d="m283.5 161.4-64 37a8 8 0 0 1-8 0l-64-37a8 8 0 0 1-4-6.9v-74a8 8 0 0 1 4-6.9l64-37a8 8 0 0 1 8 0l64 37a8 8 0 0 1 4 6.9v74a8 8 0 0 1-4 6.9Z"
      />
      <text className="portfolio-loader__letter" x="192" y="137" textAnchor="middle">R</text>
      <text className="portfolio-loader__letter" x="246" y="137" textAnchor="middle">C</text>
    </svg>
  )
}

export default function PortfolioLoader({ onComplete }) {
  const [isExiting, setIsExiting] = useState(false)

  useEffect(() => {
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const exitDelay = prefersReducedMotion ? 50 : SPLASH_DURATION
    const transitionDuration = prefersReducedMotion ? 0 : EXIT_DURATION

    const exitTimer = window.setTimeout(() => setIsExiting(true), exitDelay)
    const completeTimer = window.setTimeout(onComplete, exitDelay + transitionDuration)

    return () => {
      document.body.style.overflow = previousOverflow
      window.clearTimeout(exitTimer)
      window.clearTimeout(completeTimer)
    }
  }, [onComplete])

  return (
    <div
      className={`portfolio-loader${isExiting ? ' portfolio-loader--transitioning' : ''}`}
      role="status"
      aria-label="Loading portfolio"
    >
      <div className="portfolio-loader__screen">
        <div className="portfolio-loader__lockup">
          <PortfolioMark />
          <div className="portfolio-loader__identity" aria-label="Rishita Chauhan">
            {SIGNATURE.split('').map((character, index) => (
              <span
                className={`portfolio-loader__signature-letter${character === ' ' ? ' portfolio-loader__signature-letter--space' : ''}`}
                key={`${character}-${index}`}
                style={{ '--letter-delay': `${250 + index * 110}ms` }}
              >
                {character === ' ' ? '\u00a0' : character}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
