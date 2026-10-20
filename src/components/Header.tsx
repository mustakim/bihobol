import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  const router = useRouter()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const isActive = (path: string) => {
    if (path === '/' && router.pathname === '/') return true
    if (path !== '/' && router.pathname.startsWith(path)) return true
    return false
  }

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/app', label: 'Apps' },
    { href: '/blog', label: 'Blog' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ]

  return (
    <header className="main-header">
      <div className="site-container">
        <div className="header-inner">
          {/* Brand Logo */}
          <Link href="/">
            <a className="brand-link">
              <div className="brand-logo-icon">
                <span>B</span>
              </div>
              <div className="brand-text">
                <span className="brand-title">Bihobol</span>
                <span className="brand-sub">STUDIOS</span>
              </div>
            </a>
          </Link>

          {/* Desktop Navigation */}
          <nav className="desktop-nav">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <a className={`nav-item ${isActive(link.href) ? 'nav-item-active' : ''}`}>
                  {link.label}
                  {isActive(link.href) && <span className="active-dot" />}
                </a>
              </Link>
            ))}
          </nav>

          {/* Right Header Action */}
          <div className="header-actions">
            <Link href="/app/math-adventure">
              <a className="btn btn-primary btn-sm">
                <span>Math Adventure</span>
                <svg
                  width="14"
                  height="14"
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

            {/* Mobile Hamburger Button */}
            <button
              className="mobile-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation"
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {mobileMenuOpen ? (
                  <>
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </>
                ) : (
                  <>
                    <line x1="3" y1="12" x2="21" y2="12" />
                    <line x1="3" y1="6" x2="21" y2="6" />
                    <line x1="3" y1="18" x2="21" y2="18" />
                  </>
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Nav */}
        {mobileMenuOpen && (
          <div className="mobile-nav">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <a
                  className={`mobile-nav-item ${isActive(link.href) ? 'mobile-active' : ''}`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              </Link>
            ))}
            <div className="mobile-action-wrap">
              <Link href="/app/math-adventure">
                <a
                  className="btn btn-primary"
                  style={{ width: '100%' }}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Explore Math Adventure
                </a>
              </Link>
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        .main-header {
          position: sticky;
          top: 0;
          z-index: 999;
          background: rgba(10, 14, 23, 0.85);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          transition: background 0.2s ease;
        }

        .header-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 74px;
        }

        .brand-link {
          display: flex;
          align-items: center;
          gap: 12px;
          text-decoration: none;
        }

        .brand-logo-icon {
          width: 38px;
          height: 38px;
          border-radius: 10px;
          background: linear-gradient(135deg, #6366f1 0%, #a855f7 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 800;
          font-size: 20px;
          color: #ffffff;
          box-shadow: 0 4px 14px rgba(99, 102, 241, 0.4);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .brand-text {
          display: flex;
          flex-direction: column;
        }

        .brand-title {
          font-size: 20px;
          font-weight: 800;
          letter-spacing: -0.02em;
          color: #ffffff;
          line-height: 1.1;
        }

        .brand-sub {
          font-size: 9px;
          font-weight: 700;
          letter-spacing: 0.18em;
          color: #818cf8;
        }

        .desktop-nav {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .nav-item {
          padding: 8px 16px;
          border-radius: 8px;
          font-size: 14px;
          font-weight: 500;
          color: var(--text-muted);
          position: relative;
          transition: all 0.2s ease;
        }

        .nav-item:hover {
          color: #ffffff;
          background: rgba(255, 255, 255, 0.05);
        }

        .nav-item-active {
          color: #ffffff;
          background: rgba(99, 102, 241, 0.12);
        }

        .active-dot {
          position: absolute;
          bottom: 2px;
          left: 50%;
          transform: translateX(-50%);
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background: #818cf8;
        }

        .header-actions {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .btn-sm {
          padding: 8px 16px;
          font-size: 13px;
        }

        .mobile-toggle {
          display: none;
          color: var(--text-main);
          padding: 8px;
          border-radius: 8px;
          background: rgba(255, 255, 255, 0.05);
        }

        .mobile-nav {
          display: none;
          flex-direction: column;
          gap: 8px;
          padding: 16px 0 20px 0;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
        }

        .mobile-nav-item {
          padding: 10px 14px;
          border-radius: 8px;
          font-size: 15px;
          font-weight: 600;
          color: var(--text-muted);
        }

        .mobile-nav-item:hover,
        .mobile-active {
          color: #ffffff;
          background: rgba(99, 102, 241, 0.15);
        }

        .mobile-action-wrap {
          margin-top: 8px;
          padding-top: 8px;
          border-top: 1px solid rgba(255, 255, 255, 0.06);
        }

        @media (max-width: 860px) {
          .desktop-nav {
            display: none;
          }
          .mobile-toggle {
            display: block;
          }
          .mobile-nav {
            display: flex;
          }
        }
      `}</style>
    </header>
  )
}

export default Header
