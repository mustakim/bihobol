import React from 'react'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import Link from 'next/link'
import Layout from '../../../components/Layout'
import {
  getAppDoc,
  getAppStaticPathsParams,
  resolveAppDirectory,
  slugToDisplayName,
  normalizeSlug,
  AppDocData,
} from '../../../lib/apps'

interface AppOverviewProps {
  appSlug: string
  appName: string
  privacyData: AppDocData
  termsData: AppDocData
}

const AppOverviewPage: NextPage<AppOverviewProps> = ({
  appSlug,
  appName,
  privacyData,
  termsData,
}) => {
  const packageName = privacyData.frontMatter.packageName || termsData.frontMatter.packageName
  const developer =
    privacyData.frontMatter.developer || termsData.frontMatter.developer || 'Bihobol'
  const supportEmail = privacyData.frontMatter.supportEmail || 'support@bihobol.com'

  return (
    <Layout
      pageTitle={`${appName} - App & Compliance Hub`}
      description={`Official compliance hub, Privacy Policy, and Terms of Service for ${appName} (${packageName}), published by ${developer}.`}
    >
      <div className="overview-page">
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
            <span className="bc-current">{appName}</span>
          </div>

          {/* Main App Overview Card */}
          <div className="app-card glass-card">
            <div className="app-header">
              <div className="app-icon">
                <span>{appName.charAt(0)}</span>
              </div>
              <div>
                <h1 className="app-title">{appName}</h1>
                <p className="app-subtitle">Official App, Privacy &amp; Legal Compliance</p>
              </div>
            </div>

            <div className="meta-badges">
              {packageName && (
                <div className="meta-pill">
                  <span className="meta-label">Package ID:</span>
                  <code className="meta-code">{packageName}</code>
                </div>
              )}
              <div className="meta-pill">
                <span className="meta-label">Publisher:</span>
                <span className="meta-val">{developer}</span>
              </div>
              <div className="meta-pill verified-badge">
                <span className="dot-indicator" />
                <span>Google Play Families Certified</span>
              </div>
              <div className="meta-pill verified-badge">
                <span className="dot-indicator" />
                <span>COPPA &amp; GDPR-K Compliant</span>
              </div>
            </div>

            {/* Document Selection Grid */}
            <div className="doc-grid">
              <Link href={`/app/${appSlug}/privacy-policy`}>
                <a className="doc-card">
                  <div className="doc-icon privacy-icon">
                    <svg
                      width="26"
                      height="26"
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
                  <div className="doc-info">
                    <h2>Privacy Policy</h2>
                    <p>
                      Learn how {appName} protects children and families with zero personal data
                      collection, 100% offline isolation, and zero advertising SDKs.
                    </p>
                    <span className="view-link">Read Privacy Policy &rarr;</span>
                  </div>
                </a>
              </Link>

              <Link href={`/app/${appSlug}/terms`}>
                <a className="doc-card">
                  <div className="doc-icon terms-icon">
                    <svg
                      width="26"
                      height="26"
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
                  </div>
                  <div className="doc-info">
                    <h2>Terms &amp; Conditions</h2>
                    <p>
                      Review user guidelines, intellectual property licenses, warranty disclaimers,
                      and terms governing application usage.
                    </p>
                    <span className="view-link">Read Terms of Service &rarr;</span>
                  </div>
                </a>
              </Link>
            </div>

            {/* Support Callout Banner */}
            <div className="support-banner">
              <div className="support-avatar">💬</div>
              <div className="support-text">
                <h3>Developer &amp; Publisher Contact</h3>
                <p>
                  For questions about {appName}, parental requests, or regulatory compliance,
                  contact <a href={`mailto:${supportEmail}`}>{supportEmail}</a>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .overview-page {
          padding: 60px 0 100px 0;
        }

        .breadcrumb {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 13px;
          color: var(--text-dim);
          margin-bottom: 24px;
        }

        .bc-sep {
          color: var(--border-strong);
        }

        .bc-current {
          color: var(--text-main);
          font-weight: 600;
        }

        .app-card {
          padding: 44px;
        }

        .app-header {
          display: flex;
          align-items: center;
          gap: 22px;
          margin-bottom: 24px;
        }

        .app-icon {
          width: 70px;
          height: 70px;
          border-radius: 18px;
          background: linear-gradient(135deg, #3b82f6, #8b5cf6, #ec4899);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 32px;
          font-weight: 800;
          color: #ffffff;
          box-shadow: 0 8px 24px rgba(139, 92, 246, 0.35);
          flex-shrink: 0;
        }

        .app-title {
          font-size: 32px;
          font-weight: 800;
          color: #ffffff;
          letter-spacing: -0.02em;
        }

        .app-subtitle {
          color: var(--text-muted);
          font-size: 16px;
        }

        .meta-badges {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-bottom: 36px;
        }

        .meta-pill {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: #0d121c;
          border: 1px solid var(--border-strong);
          padding: 7px 14px;
          border-radius: 8px;
          font-size: 13px;
        }

        .meta-label {
          color: var(--text-dim);
        }

        .meta-val {
          color: #ffffff;
          font-weight: 600;
        }

        .meta-code {
          font-family: 'JetBrains Mono', monospace;
          color: #79c0ff;
          font-size: 12px;
        }

        .verified-badge {
          background: rgba(16, 185, 129, 0.12);
          border-color: rgba(16, 185, 129, 0.3);
          color: #34d399;
          font-weight: 600;
        }

        .dot-indicator {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #34d399;
          box-shadow: 0 0 8px #34d399;
        }

        .doc-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 24px;
          margin-bottom: 36px;
        }

        .doc-card {
          background: #0d121c;
          border: 1px solid var(--border-strong);
          border-radius: 16px;
          padding: 28px;
          display: flex;
          gap: 20px;
          align-items: flex-start;
          transition: all 0.25s ease;
          text-decoration: none !important;
        }

        .doc-card:hover {
          border-color: #6366f1;
          transform: translateY(-3px);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
        }

        .doc-icon {
          width: 50px;
          height: 50px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .privacy-icon {
          background: rgba(99, 102, 241, 0.15);
          color: #818cf8;
        }

        .terms-icon {
          background: rgba(168, 85, 247, 0.15);
          color: #c084fc;
        }

        .doc-info h2 {
          font-size: 20px;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 8px;
        }

        .doc-info p {
          font-size: 14px;
          color: var(--text-muted);
          line-height: 1.6;
          margin-bottom: 16px;
        }

        .view-link {
          font-size: 14px;
          font-weight: 600;
          color: #60a5fa;
        }

        .support-banner {
          background: #0d121c;
          border: 1px dashed var(--border-strong);
          border-radius: 12px;
          padding: 24px;
          display: flex;
          align-items: center;
          gap: 18px;
        }

        .support-avatar {
          font-size: 28px;
        }

        .support-text h3 {
          font-size: 16px;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 4px;
        }

        .support-text p {
          font-size: 14px;
          color: var(--text-muted);
        }

        .support-text a {
          color: #60a5fa;
          font-weight: 600;
        }

        @media (max-width: 768px) {
          .doc-grid {
            grid-template-columns: 1fr;
          }
          .app-card {
            padding: 24px 20px;
          }
          .app-title {
            font-size: 26px;
          }
        }
      `}</style>
    </Layout>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAppStaticPathsParams().map((param) => ({
    params: { appname: param.appname },
  }))

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps<AppOverviewProps> = async (context) => {
  const rawAppName = (context.params?.appname as string) || ''
  const resolvedFolder = resolveAppDirectory(rawAppName)
  const appSlug = resolvedFolder || normalizeSlug(rawAppName)

  const privacyData = getAppDoc(appSlug, 'privacy-policy')
  const termsData = getAppDoc(appSlug, 'terms')

  const appName =
    privacyData.frontMatter.appName || termsData.frontMatter.appName || slugToDisplayName(appSlug)

  return {
    props: {
      appSlug,
      appName,
      privacyData,
      termsData,
    },
  }
}

export default AppOverviewPage
