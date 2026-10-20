import React from 'react'
import Link from 'next/link'
import Layout from '../components/Layout'

const AboutPage: React.FC = () => {
  return (
    <Layout
      pageTitle="About Bihobol"
      description="Learn about Bihobol, founded by Kaniz Sultana. Discover our mission to build safe, joyful, and completely private educational games and mobile applications."
    >
      <div className="about-hero">
        <div className="site-container">
          <div className="hero-badge">
            <span className="dot" />
            <span>Our Mission &amp; Story</span>
          </div>
          <h1 className="about-title">
            Reimagining Mobile Apps with <br />
            <span className="gradient-text-accent">Purity, Safety &amp; Imagination</span>
          </h1>
          <p className="about-lead">
            Bihobol was founded with a straightforward belief: technology for children and families
            must be safe, respectful, and joyful—without predatory advertising or data surveillance.
          </p>
        </div>
      </div>

      {/* Main Story Content */}
      <section className="about-content-section">
        <div className="site-container">
          <div className="content-grid">
            <div className="story-column">
              <span className="section-tag">The Story</span>
              <h2 className="content-h2">Why We Founded Bihobol</h2>
              <p className="body-p">
                In today's digital landscape, modern mobile games are frequently engineered around
                dopamine traps, relentless interstitial commercials, and background tracking
                trackers. For children and parents, this creates an environment fraught with
                distraction and privacy risks.
              </p>
              <p className="body-p">
                Bihobol was established by <strong>Kaniz Sultana</strong> to create an oasis of
                wholesome digital play. Our flagship application, <strong>Math Adventure</strong>,
                embodies this philosophy: an interactive, gamified journey through arithmetic and
                geometry that is <strong>100% ad-free</strong>, requires zero user accounts, and
                operates entirely offline.
              </p>
              <p className="body-p">
                We believe that young minds learn best when they can focus on solving puzzles,
                feeling proud of their progress, and exploring at their own pace without popups
                interrupting their flow.
              </p>
            </div>

            <div className="sidebar-column">
              <div className="founder-card">
                <div className="founder-avatar">
                  <span>K</span>
                </div>
                <div className="founder-info">
                  <h3>Kaniz Sultana</h3>
                  <p className="founder-role">Founder &amp; Lead Publisher, Bihobol</p>
                </div>
                <p className="founder-bio">
                  Passionate about software craftsmanship, early childhood education, and digital
                  rights. Committed to building technology that families and educators can trust
                  unconditionally.
                </p>
                <div className="founder-meta">
                  <div className="meta-row">
                    <span className="meta-k">Company:</span>
                    <span className="meta-v">Bihobol</span>
                  </div>
                  <div className="meta-row">
                    <span className="meta-k">Location:</span>
                    <span className="meta-v">Dhaka, Bangladesh</span>
                  </div>
                  <div className="meta-row">
                    <span className="meta-k">Primary Focus:</span>
                    <span className="meta-v">Family &amp; Kids Mobile Education</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Grid */}
      <section className="values-section">
        <div className="site-container">
          <div className="section-header">
            <span className="section-tag">Core Tenets</span>
            <h2 className="section-title">The Principles We Stand By</h2>
            <p className="section-description">
              Every game, tool, and service we release is held to these non-negotiable standards.
            </p>
          </div>

          <div className="values-grid">
            <div className="glass-card value-card">
              <div className="value-num">01</div>
              <h3>Zero Data Harvesting</h3>
              <p>
                We do not collect names, emails, hardware IDs, GPS locations, or ad identifiers.
                Everything is stored solely within the device sandbox and never leaves your phone or
                tablet.
              </p>
            </div>

            <div className="glass-card value-card">
              <div className="value-num">02</div>
              <h3>Uncompromised Ad-Free Experience</h3>
              <p>
                Commercial advertisements have no place in a child’s educational space. Our apps
                have zero banners, video interruptions, or third-party ad networks.
              </p>
            </div>

            <div className="glass-card value-card">
              <div className="value-num">03</div>
              <h3>Offline Accessibility</h3>
              <p>
                Learning should not require high-speed internet. Our applications are engineered to
                function 100% offline, allowing kids to learn on family road trips, flights, or
                off-grid classrooms.
              </p>
            </div>

            <div className="glass-card value-card">
              <div className="value-num">04</div>
              <h3>Curriculum-Driven Fun</h3>
              <p>
                Our mechanics are aligned with pedagogical best practices: positive reinforcement,
                gradual difficulty scaling, and multisensory visual and audio feedback.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance & Standards */}
      <section className="standards-section">
        <div className="site-container">
          <div className="standards-card">
            <div className="standards-text">
              <h2>Committed to Global Regulatory Standards</h2>
              <p>
                Bihobol strictly adheres to the most stringent international privacy and child
                safety frameworks:
              </p>
              <div className="standards-tags">
                <span className="std-badge">Children’s Online Privacy Protection Act (COPPA)</span>
                <span className="std-badge">GDPR / GDPR-K (Europe &amp; UK)</span>
                <span className="std-badge">Google Play Families Policy</span>
                <span className="std-badge">Apple App Store Kids Category Guidelines</span>
              </div>
            </div>
            <div className="standards-cta">
              <Link href="/app/math-adventure/privacy-policy">
                <a className="btn btn-primary">Read Our Privacy Policy</a>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .about-hero {
          padding: 80px 0 60px 0;
          text-align: center;
          background: linear-gradient(180deg, rgba(22, 27, 34, 0.6) 0%, rgba(10, 14, 23, 1) 100%);
          border-bottom: 1px solid var(--border-subtle);
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 6px 14px;
          border-radius: 20px;
          background: rgba(99, 102, 241, 0.12);
          color: #a5b4fc;
          font-size: 13px;
          font-weight: 600;
          margin-bottom: 20px;
          border: 1px solid rgba(99, 102, 241, 0.3);
        }

        .dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #818cf8;
          box-shadow: 0 0 8px #818cf8;
        }

        .about-title {
          font-size: 46px;
          font-weight: 800;
          color: #ffffff;
          line-height: 1.2;
          letter-spacing: -0.03em;
          margin-bottom: 20px;
        }

        .about-lead {
          font-size: 19px;
          color: var(--text-muted);
          max-width: 680px;
          margin: 0 auto;
          line-height: 1.6;
        }

        .about-content-section {
          padding: 80px 0;
        }

        .content-grid {
          display: grid;
          grid-template-columns: 1.4fr 1fr;
          gap: 56px;
          align-items: flex-start;
        }

        .section-tag {
          font-size: 13px;
          font-weight: 700;
          text-transform: uppercase;
          color: #818cf8;
          letter-spacing: 0.1em;
          margin-bottom: 12px;
          display: block;
        }

        .content-h2 {
          font-size: 32px;
          font-weight: 800;
          color: #ffffff;
          margin-bottom: 24px;
          letter-spacing: -0.02em;
        }

        .body-p {
          color: #cbd5e1;
          font-size: 16px;
          line-height: 1.75;
          margin-bottom: 20px;
        }

        .body-p strong {
          color: #ffffff;
        }

        /* Founder Card */
        .founder-card {
          background: var(--bg-card);
          border: 1px solid var(--border-strong);
          border-radius: 20px;
          padding: 32px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.35);
        }

        .founder-avatar {
          width: 60px;
          height: 60px;
          border-radius: 16px;
          background: linear-gradient(135deg, #6366f1, #a855f7);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 26px;
          font-weight: 800;
          color: #ffffff;
          box-shadow: 0 8px 20px rgba(99, 102, 241, 0.35);
          margin-bottom: 16px;
        }

        .founder-info h3 {
          font-size: 20px;
          font-weight: 700;
          color: #ffffff;
        }

        .founder-role {
          font-size: 13px;
          color: #818cf8;
          font-weight: 600;
          margin-bottom: 16px;
        }

        .founder-bio {
          font-size: 14px;
          color: var(--text-muted);
          line-height: 1.6;
          margin-bottom: 24px;
          padding-bottom: 20px;
          border-bottom: 1px solid var(--border-subtle);
        }

        .founder-meta {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .meta-row {
          display: flex;
          justify-content: space-between;
          font-size: 13px;
        }

        .meta-k {
          color: var(--text-dim);
        }

        .meta-v {
          color: #ffffff;
          font-weight: 600;
        }

        /* Values */
        .values-section {
          padding: 80px 0;
          background: rgba(17, 24, 39, 0.3);
        }

        .values-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 24px;
        }

        .value-card {
          padding: 32px;
        }

        .value-num {
          font-size: 28px;
          font-weight: 800;
          color: #818cf8;
          font-family: 'JetBrains Mono', monospace;
          margin-bottom: 12px;
        }

        .value-card h3 {
          font-size: 20px;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 10px;
        }

        .value-card p {
          color: var(--text-muted);
          font-size: 14px;
          line-height: 1.65;
        }

        /* Standards */
        .standards-section {
          padding: 60px 0 80px 0;
        }

        .standards-card {
          background: linear-gradient(135deg, rgba(99, 102, 241, 0.12), rgba(139, 92, 246, 0.12));
          border: 1px solid rgba(99, 102, 241, 0.3);
          border-radius: 20px;
          padding: 44px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 32px;
          flex-wrap: wrap;
        }

        .standards-text h2 {
          font-size: 24px;
          font-weight: 800;
          color: #ffffff;
          margin-bottom: 12px;
        }

        .standards-text p {
          color: var(--text-muted);
          font-size: 15px;
          margin-bottom: 20px;
        }

        .standards-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }

        .std-badge {
          background: rgba(16, 185, 129, 0.12);
          border: 1px solid rgba(16, 185, 129, 0.3);
          color: #34d399;
          font-size: 12px;
          font-weight: 600;
          padding: 6px 12px;
          border-radius: 8px;
        }

        @media (max-width: 900px) {
          .content-grid {
            grid-template-columns: 1fr;
          }
          .values-grid {
            grid-template-columns: 1fr;
          }
          .about-title {
            font-size: 34px;
          }
        }
      `}</style>
    </Layout>
  )
}

export default AboutPage
