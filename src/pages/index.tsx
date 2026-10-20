import React, { useState } from 'react'
import Link from 'next/link'
import Layout from '../components/Layout'

export default function Home() {
  const [activeSubject, setActiveSubject] = useState<
    'counting' | 'addition' | 'multiplication' | 'shapes'
  >('addition')

  const subjectDemos = {
    counting: {
      question: 'Count the golden stars: ⭐ ⭐ ⭐ ⭐ ⭐',
      options: ['3', '5', '7'],
      correct: '5',
      hint: 'Great job! 5 bright stars counted!',
      badge: 'Toddler & Preschool (Ages 2-5)',
    },
    addition: {
      question: 'What is 7 + 8 = ?',
      options: ['14', '15', '16'],
      correct: '15',
      hint: 'Super hero! 7 + 8 = 15! ⭐',
      badge: 'Elementary Stage (Ages 6-8)',
    },
    multiplication: {
      question: 'What is 6 × 7 = ?',
      options: ['36', '42', '48'],
      correct: '42',
      hint: 'Brilliant! 6 times 7 is 42! 🚀',
      badge: 'Advanced Explorer (Ages 8-10)',
    },
    shapes: {
      question: 'Which shape has 3 sides and 3 angles?',
      options: ['Square', 'Triangle', 'Hexagon'],
      correct: 'Triangle',
      hint: 'Fantastic! Triangles have 3 straight sides! 🔺',
      badge: 'Visual Foundations (Ages 3-6)',
    },
  }

  const currentDemo = subjectDemos[activeSubject]
  const [selectedOption, setSelectedOption] = useState<string | null>('15')

  return (
    <Layout
      pageTitle="Inspiring & Safe Educational Games"
      description="Bihobol builds joyful, privacy-first mobile games and educational experiences for children and families. Discover Math Adventure—100% ad-free and COPPA compliant."
    >
      {/* Background Orbs */}
      <div className="glow-orb-1" />
      <div className="glow-orb-2" />

      {/* Hero Section */}
      <section className="hero">
        <div className="site-container">
          <div className="hero-grid">
            <div className="hero-text-content">
              <div className="badge badge-glow hero-pill">
                <span className="pill-dot" />
                <span>Featured Release • Math Adventure</span>
              </div>

              <h1 className="hero-title">
                Crafting Digital Games That{' '}
                <span className="gradient-text-accent">Inspire, Educate &amp; Protect</span>
              </h1>

              <p className="hero-subtitle">
                Bihobol builds joyful, distraction-free educational experiences for children and
                families. Completely offline, 100% ad-free, and engineered with zero personal data
                collection.
              </p>

              <div className="hero-cta-group">
                <Link href="/app/math-adventure">
                  <a className="btn btn-primary btn-large">
                    <span>Explore Math Adventure</span>
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </a>
                </Link>
                <Link href="/app">
                  <a className="btn btn-secondary btn-large">
                    <span>All Applications</span>
                  </a>
                </Link>
              </div>

              {/* Trust Micro-Checkmarks */}
              <div className="hero-trust-row">
                <div className="trust-item">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#10b981"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>100% Ad-Free</span>
                </div>
                <div className="trust-item">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#10b981"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>COPPA &amp; GDPR Compliant</span>
                </div>
                <div className="trust-item">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#10b981"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>Works 100% Offline</span>
                </div>
              </div>
            </div>

            {/* Interactive Hero Game Demo Preview */}
            <div className="hero-card-col">
              <div className="interactive-preview-card">
                <div className="card-topbar">
                  <div className="mac-dots">
                    <span className="dot dot-red" />
                    <span className="dot dot-yellow" />
                    <span className="dot dot-green" />
                  </div>
                  <div className="card-badge">
                    <span>Math Adventure Interactive Sandbox</span>
                  </div>
                </div>

                {/* Subject Selector Tabs */}
                <div className="demo-tabs">
                  <button
                    className={`demo-tab ${activeSubject === 'counting' ? 'tab-active' : ''}`}
                    onClick={() => {
                      setActiveSubject('counting')
                      setSelectedOption('5')
                    }}
                  >
                    Counting
                  </button>
                  <button
                    className={`demo-tab ${activeSubject === 'addition' ? 'tab-active' : ''}`}
                    onClick={() => {
                      setActiveSubject('addition')
                      setSelectedOption('15')
                    }}
                  >
                    Addition
                  </button>
                  <button
                    className={`demo-tab ${activeSubject === 'multiplication' ? 'tab-active' : ''}`}
                    onClick={() => {
                      setActiveSubject('multiplication')
                      setSelectedOption('42')
                    }}
                  >
                    Multiply
                  </button>
                  <button
                    className={`demo-tab ${activeSubject === 'shapes' ? 'tab-active' : ''}`}
                    onClick={() => {
                      setActiveSubject('shapes')
                      setSelectedOption('Triangle')
                    }}
                  >
                    Shapes
                  </button>
                </div>

                {/* Question Screen */}
                <div className="interactive-screen">
                  <div className="screen-header">
                    <span className="screen-level">{currentDemo.badge}</span>
                    <span className="screen-stars">⭐⭐⭐⭐⭐</span>
                  </div>

                  <div className="math-question-box">
                    <span className="question-text">{currentDemo.question}</span>
                  </div>

                  <div className="options-grid">
                    {currentDemo.options.map((opt) => {
                      const isSelected = selectedOption === opt
                      const isCorrect = opt === currentDemo.correct
                      return (
                        <button
                          key={opt}
                          className={`option-btn ${
                            isSelected && isCorrect ? 'option-correct' : ''
                          }`}
                          onClick={() => setSelectedOption(opt)}
                        >
                          <span>{opt}</span>
                          {isSelected && isCorrect && <span className="check-mark">✓</span>}
                        </button>
                      )
                    })}
                  </div>

                  <div className="reward-banner">
                    <span className="reward-icon">🎉</span>
                    <span className="reward-text">{currentDemo.hint}</span>
                  </div>
                </div>

                {/* Card Footer */}
                <div className="card-bottom">
                  <div className="card-info-item">
                    <span className="info-label">Package:</span>
                    <code>com.bihobol.mathAdventure</code>
                  </div>
                  <Link href="/app/math-adventure/privacy-policy">
                    <a className="policy-link">Privacy Policy &rarr;</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics Bar */}
      <section className="metrics-section">
        <div className="site-container">
          <div className="metrics-grid">
            <div className="metric-card">
              <span className="metric-number">100%</span>
              <span className="metric-label">Ad-Free Gameplay</span>
              <p className="metric-sub">Zero banners, popups, or tracking SDKs</p>
            </div>
            <div className="metric-card">
              <span className="metric-number">0 Bytes</span>
              <span className="metric-label">Personal Data Collected</span>
              <p className="metric-sub">Complete anonymous offline execution</p>
            </div>
            <div className="metric-card">
              <span className="metric-number">COPPA</span>
              <span className="metric-label">Families Certified</span>
              <p className="metric-sub">Compliant with global child privacy laws</p>
            </div>
            <div className="metric-card">
              <span className="metric-number">Ages 2-10</span>
              <span className="metric-label">Target Curriculum</span>
              <p className="metric-sub">Toddlers, Preschool &amp; Elementary</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured App Showcase: Math Adventure */}
      <section className="showcase-section">
        <div className="site-container">
          <div className="section-header">
            <span className="section-tag">Featured Application</span>
            <h2 className="section-title">
              Meet <span className="gradient-text-accent">Math Adventure</span>
            </h2>
            <p className="section-description">
              The flagship educational offline game developed by Kaniz Sultana (Bihobol). Designed
              to build a deep love for mathematics through gamified curiosity.
            </p>
          </div>

          <div className="showcase-card">
            <div className="showcase-card-grid">
              <div className="showcase-left">
                <div className="app-main-avatar">
                  <span>M</span>
                </div>
                <div className="app-main-title">
                  <h3>Math Adventure</h3>
                  <p className="app-author">By Kaniz Sultana (Bihobol)</p>
                </div>

                <p className="showcase-body">
                  Math Adventure guides young learners through progressive worlds covering Counting,
                  Addition, Subtraction, Multiplication, Division, and Geometry. Every milestone is
                  saved securely on the local device, ensuring parents can rest easy knowing their
                  child’s play is completely private and free from internet tracking.
                </p>

                <div className="features-checklist">
                  <div className="feat-item">
                    <span className="feat-icon">🎯</span>
                    <div>
                      <strong>Multi-Subject Curriculum:</strong> From basic shape recognition to
                      multi-digit arithmetic.
                    </div>
                  </div>
                  <div className="feat-item">
                    <span className="feat-icon">🎵</span>
                    <div>
                      <strong>Custom Audio &amp; Themes:</strong> Engaging sound effects and calming
                      melodies with full parent volume control.
                    </div>
                  </div>
                  <div className="feat-item">
                    <span className="feat-icon">⭐</span>
                    <div>
                      <strong>Custom Hero Names:</strong> Optional local nickname greeting with zero
                      cloud storage.
                    </div>
                  </div>
                </div>

                <div className="showcase-actions">
                  <Link href="/app/math-adventure">
                    <a className="btn btn-primary">
                      <span>View App Details</span>
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </a>
                  </Link>
                  <Link href="/app/math-adventure/privacy-policy">
                    <a className="btn btn-outline">Privacy Policy</a>
                  </Link>
                  <Link href="/app/math-adventure/terms">
                    <a className="btn btn-outline">Terms of Service</a>
                  </Link>
                </div>
              </div>

              <div className="showcase-right">
                <div className="security-card">
                  <h4>🛡️ Child Privacy Highlights</h4>
                  <ul className="security-list">
                    <li>
                      <strong>No Advertisements:</strong> 0 third-party ads or trackers.
                    </li>
                    <li>
                      <strong>No In-App Purchases:</strong> No accidental purchases or
                      microtransaction traps.
                    </li>
                    <li>
                      <strong>No Location Tracking:</strong> GPS and device identifiers are never
                      accessed.
                    </li>
                    <li>
                      <strong>Isolated Sandbox:</strong> Game data resides only on the device and is
                      instantly wiped on uninstall.
                    </li>
                  </ul>
                  <div className="badge-row">
                    <span className="badge badge-emerald">Google Play Families</span>
                    <span className="badge badge-glow">COPPA Verified</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Principles */}
      <section className="principles-section">
        <div className="site-container">
          <div className="section-header">
            <span className="section-tag">Our Guiding Pillars</span>
            <h2 className="section-title">Why Bihobol is Different</h2>
            <p className="section-description">
              In an era dominated by predatory monetization and surveillance analytics, Bihobol
              takes a stand for purity, security, and true craftsmanship.
            </p>
          </div>

          <div className="principles-grid">
            <div className="glass-card">
              <div className="principle-icon-wrap icon-shield">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <h3>Privacy by Design</h3>
              <p>
                We build offline-first architectures. Your family’s data never touches remote
                servers, eliminating breach vectors and cross-platform ad profiling entirely.
              </p>
            </div>

            <div className="glass-card">
              <div className="principle-icon-wrap icon-sparkle">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
              </div>
              <h3>Playful Craftsmanship</h3>
              <p>
                Every sound, animation, and UI element is thoughtfully sculpted to produce calm,
                joyful, and positive reinforcement for learners of all ages.
              </p>
            </div>

            <div className="glass-card">
              <div className="principle-icon-wrap icon-device">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
                  <line x1="12" y1="18" x2="12.01" y2="18" />
                </svg>
              </div>
              <h3>Modern Engineering</h3>
              <p>
                Built using state-of-the-art native and cross-platform technologies (Flutter, React,
                Next.js), ensuring smooth 60fps performance and minimal battery usage.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="site-container">
          <div className="cta-card">
            <h2 className="cta-title">Looking for Safe, High-Quality Apps?</h2>
            <p className="cta-desc">
              Explore our mobile portfolio, review our transparent privacy commitments, or get in
              touch with our team.
            </p>
            <div className="cta-buttons">
              <Link href="/app">
                <a className="btn btn-primary btn-large">View All Apps</a>
              </Link>
              <Link href="/contact">
                <a className="btn btn-secondary btn-large">Contact Bihobol</a>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .hero {
          padding: 80px 0 60px 0;
          position: relative;
        }

        .hero-grid {
          display: grid;
          grid-template-columns: 1.15fr 0.85fr;
          gap: 48px;
          align-items: center;
        }

        .hero-pill {
          margin-bottom: 24px;
        }

        .pill-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #60a5fa;
          box-shadow: 0 0 10px #60a5fa;
        }

        .hero-title {
          font-size: 50px;
          font-weight: 800;
          line-height: 1.15;
          letter-spacing: -0.03em;
          margin-bottom: 22px;
          color: #ffffff;
        }

        .hero-subtitle {
          font-size: 18px;
          color: var(--text-muted);
          line-height: 1.65;
          margin-bottom: 32px;
          max-width: 540px;
        }

        .hero-cta-group {
          display: flex;
          gap: 16px;
          margin-bottom: 36px;
          flex-wrap: wrap;
        }

        .btn-large {
          padding: 14px 28px;
          font-size: 16px;
          border-radius: 12px;
        }

        .hero-trust-row {
          display: flex;
          gap: 20px;
          flex-wrap: wrap;
          padding-top: 20px;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
        }

        .trust-item {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 13px;
          font-weight: 600;
          color: var(--text-main);
        }

        /* Interactive Card */
        .interactive-preview-card {
          background: var(--bg-card);
          border: 1px solid var(--border-strong);
          border-radius: 20px;
          padding: 24px;
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5), 0 0 30px rgba(99, 102, 241, 0.15);
          position: relative;
        }

        .card-topbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 18px;
          padding-bottom: 14px;
          border-bottom: 1px solid var(--border-subtle);
        }

        .mac-dots {
          display: flex;
          gap: 6px;
        }

        .dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
        }
        .dot-red {
          background: #ef4444;
        }
        .dot-yellow {
          background: #f59e0b;
        }
        .dot-green {
          background: #10b981;
        }

        .card-badge {
          font-size: 12px;
          font-weight: 600;
          color: var(--text-dim);
          font-family: 'JetBrains Mono', monospace;
        }

        .demo-tabs {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 6px;
          background: rgba(0, 0, 0, 0.25);
          padding: 4px;
          border-radius: 10px;
          margin-bottom: 20px;
        }

        .demo-tab {
          padding: 8px 6px;
          font-size: 13px;
          font-weight: 600;
          color: var(--text-dim);
          border-radius: 8px;
          transition: all 0.2s;
        }

        .demo-tab:hover {
          color: #ffffff;
        }

        .tab-active {
          background: var(--accent-primary);
          color: #ffffff;
          box-shadow: 0 2px 8px rgba(99, 102, 241, 0.4);
        }

        .interactive-screen {
          background: #0d121c;
          border: 1px solid rgba(255, 255, 255, 0.06);
          border-radius: 14px;
          padding: 24px;
          margin-bottom: 20px;
        }

        .screen-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 18px;
        }

        .screen-level {
          font-size: 12px;
          font-weight: 700;
          color: #a5b4fc;
          background: rgba(99, 102, 241, 0.15);
          padding: 3px 10px;
          border-radius: 12px;
        }

        .math-question-box {
          text-align: center;
          background: rgba(255, 255, 255, 0.03);
          border: 1px dashed rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          padding: 20px;
          margin-bottom: 20px;
        }

        .question-text {
          font-size: 20px;
          font-weight: 700;
          color: #ffffff;
        }

        .options-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 10px;
          margin-bottom: 18px;
        }

        .option-btn {
          background: #192233;
          border: 1px solid #2d3b54;
          padding: 14px 10px;
          border-radius: 10px;
          font-size: 18px;
          font-weight: 700;
          color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          transition: all 0.2s;
        }

        .option-btn:hover {
          border-color: #6366f1;
          transform: translateY(-2px);
        }

        .option-correct {
          background: rgba(16, 185, 129, 0.2);
          border-color: #10b981;
          color: #34d399;
          box-shadow: 0 0 12px rgba(16, 185, 129, 0.25);
        }

        .check-mark {
          font-size: 16px;
        }

        .reward-banner {
          display: flex;
          align-items: center;
          gap: 10px;
          background: rgba(99, 102, 241, 0.1);
          border: 1px solid rgba(99, 102, 241, 0.25);
          padding: 10px 14px;
          border-radius: 8px;
          font-size: 13px;
          color: #c7d2fe;
          font-weight: 600;
        }

        .card-bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 12px;
          color: var(--text-dim);
          padding-top: 12px;
          border-top: 1px solid var(--border-subtle);
        }

        .card-info-item code {
          color: #79c0ff;
          margin-left: 6px;
          font-family: 'JetBrains Mono', monospace;
        }

        .policy-link {
          color: #60a5fa;
          font-weight: 600;
        }
        .policy-link:hover {
          text-decoration: underline;
        }

        /* Metrics */
        .metrics-section {
          padding: 30px 0;
          border-top: 1px solid var(--border-subtle);
          border-bottom: 1px solid var(--border-subtle);
          background: rgba(17, 24, 39, 0.4);
        }

        .metrics-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
        }

        .metric-card {
          text-align: center;
          padding: 16px;
        }

        .metric-number {
          display: block;
          font-size: 32px;
          font-weight: 800;
          letter-spacing: -0.02em;
          color: #ffffff;
          margin-bottom: 4px;
          background: linear-gradient(135deg, #ffffff 30%, #a5b4fc 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .metric-label {
          display: block;
          font-size: 14px;
          font-weight: 700;
          color: #cbd5e1;
          margin-bottom: 4px;
        }

        .metric-sub {
          font-size: 12px;
          color: var(--text-dim);
        }

        /* Showcase */
        .showcase-section {
          padding: 90px 0;
        }

        .showcase-card {
          background: var(--bg-card);
          border: 1px solid var(--border-strong);
          border-radius: 24px;
          padding: 48px;
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.35);
        }

        .showcase-card-grid {
          display: grid;
          grid-template-columns: 1.4fr 1fr;
          gap: 48px;
          align-items: center;
        }

        .app-main-avatar {
          width: 54px;
          height: 54px;
          border-radius: 14px;
          background: linear-gradient(135deg, #3b82f6, #8b5cf6, #ec4899);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 24px;
          font-weight: 800;
          color: #ffffff;
          box-shadow: 0 8px 20px rgba(139, 92, 246, 0.35);
          margin-bottom: 12px;
        }

        .app-main-title h3 {
          font-size: 26px;
          font-weight: 800;
          color: #ffffff;
        }

        .app-author {
          font-size: 14px;
          color: #818cf8;
          font-weight: 600;
          margin-bottom: 18px;
        }

        .showcase-body {
          color: var(--text-muted);
          font-size: 15px;
          line-height: 1.7;
          margin-bottom: 24px;
        }

        .features-checklist {
          display: flex;
          flex-direction: column;
          gap: 14px;
          margin-bottom: 32px;
        }

        .feat-item {
          display: flex;
          align-items: flex-start;
          gap: 14px;
          font-size: 14px;
          color: #cbd5e1;
          line-height: 1.5;
        }

        .feat-item strong {
          color: #ffffff;
        }

        .feat-icon {
          font-size: 18px;
        }

        .showcase-actions {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
        }

        .security-card {
          background: #0d121c;
          border: 1px solid rgba(99, 102, 241, 0.25);
          border-radius: 18px;
          padding: 32px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
        }

        .security-card h4 {
          font-size: 18px;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 20px;
          padding-bottom: 12px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
        }

        .security-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 16px;
          margin-bottom: 24px;
        }

        .security-list li {
          font-size: 14px;
          color: var(--text-muted);
          line-height: 1.6;
        }

        .security-list strong {
          color: #38bdf8;
        }

        .badge-row {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
        }

        /* Principles */
        .principles-section {
          padding: 80px 0;
          background: rgba(17, 24, 39, 0.3);
        }

        .principles-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 28px;
        }

        .principle-icon-wrap {
          width: 52px;
          height: 52px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 20px;
        }

        .icon-shield {
          background: rgba(99, 102, 241, 0.15);
          color: #818cf8;
        }

        .icon-sparkle {
          background: rgba(236, 72, 153, 0.15);
          color: #f472b6;
        }

        .icon-device {
          background: rgba(6, 182, 212, 0.15);
          color: #22d3ee;
        }

        .glass-card h3 {
          font-size: 20px;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 12px;
        }

        .glass-card p {
          color: var(--text-muted);
          font-size: 14px;
          line-height: 1.65;
        }

        /* CTA */
        .cta-section {
          padding: 90px 0;
        }

        .cta-card {
          background: linear-gradient(
            135deg,
            rgba(99, 102, 241, 0.2) 0%,
            rgba(139, 92, 246, 0.2) 50%,
            rgba(236, 72, 153, 0.1) 100%
          );
          border: 1px solid rgba(99, 102, 241, 0.4);
          border-radius: 24px;
          padding: 64px 40px;
          text-align: center;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.4);
        }

        .cta-title {
          font-size: 36px;
          font-weight: 800;
          color: #ffffff;
          margin-bottom: 16px;
          letter-spacing: -0.02em;
        }

        .cta-desc {
          color: #cbd5e1;
          font-size: 17px;
          max-width: 600px;
          margin: 0 auto 32px auto;
          line-height: 1.6;
        }

        .cta-buttons {
          display: flex;
          justify-content: center;
          gap: 16px;
          flex-wrap: wrap;
        }

        @media (max-width: 960px) {
          .hero-grid,
          .showcase-card-grid {
            grid-template-columns: 1fr;
          }
          .metrics-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .principles-grid {
            grid-template-columns: 1fr;
          }
          .hero-title {
            font-size: 38px;
          }
        }

        @media (max-width: 640px) {
          .metrics-grid {
            grid-template-columns: 1fr;
          }
          .hero-title {
            font-size: 32px;
          }
          .cta-card {
            padding: 40px 20px;
          }
          .cta-title {
            font-size: 26px;
          }
        }
      `}</style>
    </Layout>
  )
}
