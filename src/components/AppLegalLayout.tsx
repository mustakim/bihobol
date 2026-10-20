import React, { useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import ReactMarkdown from 'react-markdown'
import Header from './Header'
import Footer from './Footer'
import { AppDocData } from '../lib/apps'

interface AppLegalLayoutProps {
  docData: AppDocData
}

export const AppLegalLayout: React.FC<AppLegalLayoutProps> = ({ docData }) => {
  const { frontMatter, content, docType, appSlug } = docData
  const [copied, setCopied] = useState(false)

  const isPrivacy = docType === 'privacy-policy'
  const isTerms = docType === 'terms'

  const title =
    frontMatter.title ||
    `${isPrivacy ? 'Privacy Policy' : 'Terms and Conditions'} - ${frontMatter.appName}`
  const pageDescription = isPrivacy
    ? `Privacy Policy for ${frontMatter.appName}. Learn how ${frontMatter.appName} protects your information with zero data collection and full COPPA & GDPR compliance.`
    : `Terms and Conditions for ${frontMatter.appName} published by ${
        frontMatter.developer || 'Bihobol'
      }.`

  const handleCopyLink = () => {
    if (typeof window !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  const handlePrint = () => {
    if (typeof window !== 'undefined') {
      window.print()
    }
  }

  return (
    <>
      <Head>
        <title>{title} | Bihobol</title>
        <meta name="description" content={pageDescription} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content={`${title} | Bihobol`} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:type" content="article" />
      </Head>

      <div className="legal-page-root">
        <Header />

        {/* Hero Section */}
        <div className="hero-section">
          <div className="site-container">
            {/* Breadcrumb */}
            <div className="breadcrumb">
              <Link href="/">
                <a>Home</a>
              </Link>
              <span className="bc-sep">/</span>
              <Link href="/app">
                <a>Apps</a>
              </Link>
              <span className="bc-sep">/</span>
              <Link href={`/app/${appSlug}`}>
                <a>{frontMatter.appName}</a>
              </Link>
              <span className="bc-sep">/</span>
              <span className="bc-current">
                {isPrivacy ? 'Privacy Policy' : 'Terms & Conditions'}
              </span>
            </div>

            {/* App Card & Meta */}
            <div className="hero-content">
              <div className="app-badge-row">
                <div className="app-avatar">
                  <span>{frontMatter.appName ? frontMatter.appName.charAt(0) : 'A'}</span>
                </div>
                <div>
                  <h1 className="hero-title">{frontMatter.appName}</h1>
                  <p className="hero-subtitle">
                    Official Regulatory, Privacy &amp; Compliance Documentation
                  </p>
                </div>
              </div>

              {/* Badges */}
              <div className="meta-badges">
                {frontMatter.packageName && (
                  <div className="meta-pill">
                    <span className="meta-label">Package ID:</span>
                    <code className="meta-code">{frontMatter.packageName}</code>
                  </div>
                )}
                {frontMatter.developer && (
                  <div className="meta-pill">
                    <span className="meta-label">Publisher:</span>
                    <span className="meta-val">{frontMatter.developer}</span>
                  </div>
                )}
                {frontMatter.effectiveDate && (
                  <div className="meta-pill">
                    <span className="meta-label">Effective:</span>
                    <span className="meta-val">{frontMatter.effectiveDate}</span>
                  </div>
                )}
                <div className="meta-pill verified-badge">
                  <span className="dot-indicator" />
                  <span>Google Play Families &amp; COPPA Compliant</span>
                </div>
              </div>

              {/* Document Switcher Tabs */}
              <div className="doc-tabs-bar">
                <div className="doc-tabs">
                  <Link href={`/app/${appSlug}/privacy-policy`}>
                    <a className={`tab-button ${isPrivacy ? 'tab-active' : ''}`}>
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                      </svg>
                      Privacy Policy
                    </a>
                  </Link>
                  <Link href={`/app/${appSlug}/terms`}>
                    <a className={`tab-button ${isTerms ? 'tab-active' : ''}`}>
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                        <polyline points="14 2 14 8 20 8" />
                        <line x1="16" y1="13" x2="8" y2="13" />
                        <line x1="16" y1="17" x2="8" y2="17" />
                        <polyline points="10 9 9 9 8 9" />
                      </svg>
                      Terms of Service
                    </a>
                  </Link>
                </div>

                <div className="doc-actions">
                  <button
                    onClick={handleCopyLink}
                    className="action-btn"
                    title="Copy URL to clipboard"
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                    </svg>
                    <span>{copied ? 'Copied Link!' : 'Share'}</span>
                  </button>
                  <button onClick={handlePrint} className="action-btn" title="Print document">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="6 9 6 2 18 2 18 9" />
                      <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
                      <rect x="6" y="14" width="12" height="8" />
                    </svg>
                    <span>Print</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Document Body */}
        <main className="document-container">
          <div className="site-container narrow-container">
            <article className="markdown-article">
              <ReactMarkdown children={content} />
            </article>

            {/* Official Support & Publisher Callout */}
            <aside className="support-card">
              <div className="support-card-inner">
                <div className="support-icon">
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
                    <circle cx="12" cy="12" r="10" />
                    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                    <line x1="12" y1="17" x2="12.01" y2="17" />
                  </svg>
                </div>
                <div className="support-text">
                  <h3>Questions or Privacy Inquiries?</h3>
                  <p>
                    For questions regarding this policy, child privacy protections, or data rights
                    for <strong>{frontMatter.appName}</strong>, please reach out directly:
                  </p>
                  <div className="support-contact-list">
                    <span>
                      <strong>Publisher:</strong>{' '}
                      {frontMatter.developer || 'Kaniz Sultana (Bihobol)'}
                    </span>
                    <span>
                      <strong>Email:</strong>{' '}
                      <a href={`mailto:${frontMatter.supportEmail || 'support@bihobol.com'}`}>
                        {frontMatter.supportEmail || 'support@bihobol.com'}
                      </a>
                    </span>
                    {frontMatter.packageName && (
                      <span>
                        <strong>Application ID:</strong> <code>{frontMatter.packageName}</code>
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </main>

        <Footer />
      </div>

      <style jsx>{`
        .legal-page-root {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          background: var(--bg-primary);
        }

        .hero-section {
          background: linear-gradient(180deg, rgba(22, 27, 34, 0.8) 0%, rgba(10, 14, 23, 1) 100%);
          border-bottom: 1px solid var(--border-subtle);
          padding: 40px 0 0 0;
        }

        .breadcrumb {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 13px;
          color: var(--text-dim);
          margin-bottom: 24px;
          flex-wrap: wrap;
        }
        .bc-sep {
          color: var(--border-strong);
        }
        .bc-current {
          color: var(--text-main);
          font-weight: 600;
        }

        .app-badge-row {
          display: flex;
          align-items: center;
          gap: 18px;
          margin-bottom: 16px;
        }

        .app-avatar {
          width: 58px;
          height: 58px;
          border-radius: 14px;
          background: linear-gradient(135deg, #3b82f6, #8b5cf6, #ec4899);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 26px;
          font-weight: 800;
          color: #ffffff;
          box-shadow: 0 8px 24px rgba(139, 92, 246, 0.3);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .hero-title {
          font-size: 32px;
          font-weight: 800;
          letter-spacing: -0.03em;
          color: #ffffff;
        }

        .hero-subtitle {
          color: var(--text-muted);
          font-size: 15px;
        }

        .meta-badges {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-top: 20px;
          margin-bottom: 28px;
        }

        .meta-pill {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: #0d121c;
          border: 1px solid var(--border-strong);
          padding: 6px 12px;
          border-radius: 8px;
          font-size: 13px;
        }

        .meta-label {
          color: var(--text-dim);
        }

        .meta-code {
          font-family: 'JetBrains Mono', monospace;
          color: #79c0ff;
          font-size: 12px;
        }

        .meta-val {
          color: #ffffff;
          font-weight: 600;
        }

        .verified-badge {
          background: rgba(16, 185, 129, 0.12);
          border-color: rgba(16, 185, 129, 0.35);
          color: #34d399;
          font-weight: 600;
        }

        .dot-indicator {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #34d399;
          box-shadow: 0 0 8px #34d399;
        }

        .doc-tabs-bar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: 1px solid var(--border-subtle);
          flex-wrap: wrap;
          gap: 12px;
        }

        .doc-tabs {
          display: flex;
          gap: 8px;
        }

        .tab-button {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 12px 18px;
          font-size: 14px;
          font-weight: 600;
          color: var(--text-muted);
          border-bottom: 2px solid transparent;
          text-decoration: none !important;
          transition: all 0.2s ease;
        }

        .tab-button:hover {
          color: #ffffff;
        }

        .tab-active {
          color: #60a5fa;
          border-bottom-color: #60a5fa;
          background: rgba(56, 139, 253, 0.08);
        }

        .doc-actions {
          display: flex;
          gap: 8px;
          margin-bottom: 6px;
        }

        .action-btn {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 6px 12px;
          font-size: 13px;
          font-weight: 500;
          background: #192233;
          border: 1px solid #2d3b54;
          color: var(--text-main);
          border-radius: 6px;
          cursor: pointer;
          transition: all 0.15s ease;
        }

        .action-btn:hover {
          background: #243046;
          color: #ffffff;
        }

        .document-container {
          padding: 48px 0 80px 0;
          flex: 1;
        }

        .narrow-container {
          max-width: 880px;
        }

        .markdown-article {
          background: var(--bg-card);
          border: 1px solid var(--border-strong);
          border-radius: 20px;
          padding: 44px;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.35);
        }

        .markdown-article :global(h1) {
          font-size: 30px;
          font-weight: 800;
          letter-spacing: -0.02em;
          color: #ffffff;
          margin-bottom: 16px;
          padding-bottom: 12px;
          border-bottom: 1px solid var(--border-subtle);
        }

        .markdown-article :global(h2) {
          font-size: 22px;
          font-weight: 700;
          color: #ffffff;
          margin-top: 36px;
          margin-bottom: 14px;
        }

        .markdown-article :global(h3) {
          font-size: 17px;
          font-weight: 600;
          color: #e2e8f0;
          margin-top: 24px;
          margin-bottom: 10px;
        }

        .markdown-article :global(p) {
          margin-bottom: 16px;
          color: #cbd5e1;
          font-size: 15px;
          line-height: 1.75;
        }

        .markdown-article :global(ul),
        .markdown-article :global(ol) {
          margin-bottom: 20px;
          padding-left: 24px;
          color: #cbd5e1;
        }

        .markdown-article :global(li) {
          margin-bottom: 8px;
          line-height: 1.6;
        }

        .markdown-article :global(strong) {
          color: #ffffff;
          font-weight: 600;
        }

        .markdown-article :global(hr) {
          border: 0;
          height: 1px;
          background: var(--border-subtle);
          margin: 32px 0;
        }

        .markdown-article :global(code) {
          font-family: 'JetBrains Mono', monospace;
          background: rgba(110, 118, 129, 0.2);
          padding: 2px 6px;
          border-radius: 5px;
          font-size: 13px;
          color: #f0883e;
        }

        /* Support Card */
        .support-card {
          margin-top: 36px;
          background: linear-gradient(135deg, rgba(99, 102, 241, 0.08), rgba(168, 85, 247, 0.08));
          border: 1px solid rgba(99, 102, 241, 0.25);
          border-radius: 16px;
          padding: 28px;
        }

        .support-card-inner {
          display: flex;
          gap: 20px;
          align-items: flex-start;
        }

        .support-icon {
          width: 48px;
          height: 48px;
          border-radius: 12px;
          background: rgba(99, 102, 241, 0.15);
          color: #818cf8;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .support-text h3 {
          font-size: 18px;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 8px;
        }

        .support-text p {
          color: var(--text-muted);
          font-size: 14px;
          line-height: 1.6;
          margin-bottom: 14px;
        }

        .support-contact-list {
          display: flex;
          flex-direction: column;
          gap: 6px;
          font-size: 14px;
          color: #cbd5e1;
        }

        .support-contact-list code {
          font-family: 'JetBrains Mono', monospace;
          background: rgba(110, 118, 129, 0.2);
          padding: 2px 6px;
          border-radius: 4px;
          color: #79c0ff;
        }

        @media print {
          .doc-tabs-bar,
          .breadcrumb,
          .doc-actions,
          :global(.main-header),
          :global(.site-footer) {
            display: none !important;
          }
          body {
            background: #ffffff !important;
            color: #000000 !important;
          }
          .markdown-article {
            background: #ffffff !important;
            border: none !important;
            box-shadow: none !important;
            color: #000000 !important;
            padding: 0 !important;
          }
          .markdown-article :global(h1),
          .markdown-article :global(h2),
          .markdown-article :global(h3),
          .markdown-article :global(p),
          .markdown-article :global(li),
          .markdown-article :global(strong) {
            color: #000000 !important;
          }
        }
      `}</style>
    </>
  )
}

export default AppLegalLayout
