import React from 'react'
import Link from 'next/link'

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className="site-footer">
      <div className="site-container">
        <div className="footer-grid">
          {/* Brand Info */}
          <div className="footer-col brand-col">
            <Link href="/">
              <a className="footer-brand">
                <div className="brand-logo-icon">
                  <span>B</span>
                </div>
                <span className="brand-title">Bihobol</span>
              </a>
            </Link>
            <p className="footer-tagline">
              Dedicated to crafting inspiring, safe, and privacy-first digital experiences,
              educational games, and modern web applications.
            </p>
            <div className="compliance-tag">
              <span className="dot" />
              <span>COPPA & Google Play Families Compliant</span>
            </div>
          </div>

          {/* Applications Column */}
          <div className="footer-col">
            <h4 className="footer-heading">Applications</h4>
            <ul className="footer-links">
              <li>
                <Link href="/app/math-adventure">
                  <a>Math Adventure</a>
                </Link>
              </li>
              <li>
                <Link href="/app">
                  <a>All Applications</a>
                </Link>
              </li>
              <li>
                <Link href="/app/math-adventure/privacy-policy">
                  <a>Math Adventure Privacy</a>
                </Link>
              </li>
              <li>
                <Link href="/app/math-adventure/terms">
                  <a>Math Adventure Terms</a>
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Column */}
          <div className="footer-col">
            <h4 className="footer-heading">Company</h4>
            <ul className="footer-links">
              <li>
                <Link href="/about">
                  <a>About Bihobol</a>
                </Link>
              </li>
              <li>
                <Link href="/blog">
                  <a>Blog & Articles</a>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <a>Contact & Support</a>
                </Link>
              </li>
              <li>
                <a href="mailto:support@bihobol.com">support@bihobol.com</a>
              </li>
            </ul>
          </div>

          {/* Trust & Support */}
          <div className="footer-col support-col">
            <h4 className="footer-heading">Publisher Information</h4>
            <p className="publisher-text">
              <strong>Publisher / Developer:</strong>
              <br />
              Kaniz Sultana (Bihobol)
            </p>
            <p className="publisher-text">
              <strong>Official Inquiries:</strong>
              <br />
              <a href="mailto:support@bihobol.com" className="email-highlight">
                support@bihobol.com
              </a>
            </p>
            <div className="badges-row">
              <span className="mini-badge">Zero Ads</span>
              <span className="mini-badge">Zero Tracking</span>
              <span className="mini-badge">Offline Safe</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <p className="copyright">
            &copy; {new Date().getFullYear()} Bihobol. All rights reserved.
          </p>
          <div className="bottom-links">
            <Link href="/app/math-adventure/privacy-policy">
              <a>Privacy Policy</a>
            </Link>
            <span className="sep">•</span>
            <Link href="/app/math-adventure/terms">
              <a>Terms of Service</a>
            </Link>
            <span className="sep">•</span>
            <Link href="/contact">
              <a>Support</a>
            </Link>
          </div>
        </div>
      </div>

      <style jsx>{`
        .site-footer {
          background: #080c14;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          padding: 64px 0 32px 0;
          color: var(--text-muted);
          position: relative;
        }

        .footer-grid {
          display: grid;
          grid-template-columns: 2fr 1.2fr 1.2fr 1.5fr;
          gap: 40px;
          margin-bottom: 56px;
        }

        .footer-brand {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 16px;
        }

        .brand-logo-icon {
          width: 32px;
          height: 32px;
          border-radius: 8px;
          background: linear-gradient(135deg, #6366f1 0%, #a855f7 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 800;
          font-size: 16px;
          color: #ffffff;
        }

        .brand-title {
          font-size: 20px;
          font-weight: 800;
          color: #ffffff;
          letter-spacing: -0.02em;
        }

        .footer-tagline {
          font-size: 14px;
          line-height: 1.6;
          color: var(--text-dim);
          max-width: 320px;
          margin-bottom: 18px;
        }

        .compliance-tag {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 12px;
          font-weight: 600;
          color: #34d399;
          background: rgba(16, 185, 129, 0.08);
          border: 1px solid rgba(16, 185, 129, 0.2);
          padding: 6px 12px;
          border-radius: 20px;
        }

        .dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #34d399;
          box-shadow: 0 0 8px #34d399;
        }

        .footer-heading {
          font-size: 14px;
          font-weight: 700;
          color: #ffffff;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          margin-bottom: 18px;
        }

        .footer-links {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .footer-links a {
          font-size: 14px;
          color: var(--text-muted);
          transition: color 0.15s ease;
        }

        .footer-links a:hover {
          color: #60a5fa;
        }

        .publisher-text {
          font-size: 13px;
          line-height: 1.6;
          color: var(--text-muted);
          margin-bottom: 12px;
        }

        .publisher-text strong {
          color: #e2e8f0;
        }

        .email-highlight {
          color: #60a5fa;
        }

        .badges-row {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          margin-top: 14px;
        }

        .mini-badge {
          font-size: 11px;
          font-weight: 600;
          padding: 3px 8px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 6px;
          color: #cbd5e1;
        }

        .footer-bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 28px;
          border-top: 1px solid rgba(255, 255, 255, 0.06);
          font-size: 13px;
          color: var(--text-dim);
          flex-wrap: wrap;
          gap: 16px;
        }

        .bottom-links {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .bottom-links a {
          color: var(--text-dim);
        }

        .bottom-links a:hover {
          color: var(--text-main);
        }

        .sep {
          color: rgba(255, 255, 255, 0.2);
        }

        @media (max-width: 900px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr;
            gap: 32px;
          }
        }

        @media (max-width: 600px) {
          .footer-grid {
            grid-template-columns: 1fr;
          }
          .footer-bottom {
            flex-direction: column;
            text-align: center;
          }
        }
      `}</style>
    </footer>
  )
}

export default Footer
