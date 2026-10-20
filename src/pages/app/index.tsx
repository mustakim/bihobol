import React from 'react'
import { GetStaticProps, NextPage } from 'next'
import Link from 'next/link'
import Layout from '../../components/Layout'
import { AppSummary, getAllAppsSummary } from '../../lib/apps'

interface AppsDirectoryProps {
  apps: AppSummary[]
}

const AppsDirectoryPage: NextPage<AppsDirectoryProps> = ({ apps }) => {
  return (
    <Layout
      pageTitle="Applications & Legal Hub"
      description="Official Bihobol applications directory. Access privacy policies, terms of service, and developer compliance information."
    >
      <div className="apps-hero">
        <div className="site-container">
          <span className="section-tag">Portfolio &amp; Compliance</span>
          <h1 className="apps-title">Bihobol Applications</h1>
          <p className="apps-subtitle">
            Explore our ecosystem of mobile educational games, productivity tools, and official
            regulatory compliance documents.
          </p>
        </div>
      </div>

      <main className="apps-main-section">
        <div className="site-container">
          <div className="apps-list">
            {apps.map((app) => (
              <div key={app.slug} className="app-card glass-card">
                <div className="app-card-main">
                  <div className="app-avatar">
                    <span>{app.appName.charAt(0)}</span>
                  </div>
                  <div className="app-info">
                    <div className="app-title-row">
                      <Link href={`/app/${app.slug}`}>
                        <a className="app-link">
                          <h2>{app.appName}</h2>
                        </a>
                      </Link>
                      <span className="badge badge-emerald">Active Release</span>
                    </div>
                    {app.packageName && (
                      <p className="package-code">
                        <span>Application ID:</span>
                        <code>{app.packageName}</code>
                      </p>
                    )}
                    {app.lastUpdated && <p className="update-date">Effective: {app.lastUpdated}</p>}
                  </div>
                </div>

                <div className="app-card-actions">
                  <Link href={`/app/${app.slug}`}>
                    <a className="btn btn-secondary btn-sm">Overview</a>
                  </Link>
                  <Link href={`/app/${app.slug}/privacy-policy`}>
                    <a className="btn btn-primary btn-sm">
                      <svg
                        width="15"
                        height="15"
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
                  <Link href={`/app/${app.slug}/terms`}>
                    <a className="btn btn-outline btn-sm">Terms</a>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Publisher Note Banner */}
          <div className="publisher-note-card">
            <div className="note-icon">📱</div>
            <div>
              <h3>Android &amp; iOS Release Standards</h3>
              <p>
                All mobile apps published by Kaniz Sultana (Bihobol) adhere to zero third-party
                advertising, zero biometric/location collection, and complete compliance with Google
                Play Families and COPPA policies.
              </p>
            </div>
          </div>
        </div>
      </main>

      <style jsx>{`
        .apps-hero {
          padding: 80px 0 50px 0;
          text-align: center;
          background: linear-gradient(180deg, rgba(22, 27, 34, 0.7) 0%, rgba(10, 14, 23, 1) 100%);
          border-bottom: 1px solid var(--border-subtle);
        }

        .section-tag {
          font-size: 13px;
          font-weight: 700;
          text-transform: uppercase;
          color: #818cf8;
          letter-spacing: 0.1em;
          margin-bottom: 12px;
          display: inline-block;
        }

        .apps-title {
          font-size: 44px;
          font-weight: 800;
          color: #ffffff;
          letter-spacing: -0.03em;
          margin-bottom: 16px;
        }

        .apps-subtitle {
          font-size: 18px;
          color: var(--text-muted);
          max-width: 620px;
          margin: 0 auto;
          line-height: 1.6;
        }

        .apps-main-section {
          padding: 60px 0 100px 0;
        }

        .apps-list {
          display: flex;
          flex-direction: column;
          gap: 24px;
          margin-bottom: 40px;
        }

        .app-card {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 24px;
          padding: 28px 32px;
        }

        .app-card-main {
          display: flex;
          align-items: center;
          gap: 20px;
        }

        .app-avatar {
          width: 58px;
          height: 58px;
          border-radius: 14px;
          background: linear-gradient(135deg, #3b82f6, #8b5cf6, #ec4899);
          color: #ffffff;
          font-size: 26px;
          font-weight: 800;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 8px 24px rgba(139, 92, 246, 0.35);
          flex-shrink: 0;
        }

        .app-title-row {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 6px;
        }

        .app-link h2 {
          font-size: 22px;
          font-weight: 800;
          color: #ffffff;
          transition: color 0.15s ease;
        }
        .app-link:hover h2 {
          color: #60a5fa;
        }

        .package-code {
          font-size: 13px;
          color: var(--text-dim);
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 4px;
        }

        .package-code code {
          font-family: 'JetBrains Mono', monospace;
          color: #79c0ff;
          background: rgba(56, 139, 253, 0.1);
          padding: 2px 6px;
          border-radius: 4px;
        }

        .update-date {
          font-size: 12px;
          color: var(--text-dim);
        }

        .app-card-actions {
          display: flex;
          gap: 10px;
          align-items: center;
          flex-wrap: wrap;
        }

        .btn-sm {
          padding: 9px 16px;
          font-size: 13px;
        }

        .publisher-note-card {
          background: linear-gradient(135deg, rgba(99, 102, 241, 0.1), rgba(16, 185, 129, 0.08));
          border: 1px solid rgba(99, 102, 241, 0.25);
          border-radius: 16px;
          padding: 28px;
          display: flex;
          gap: 20px;
          align-items: center;
        }

        .note-icon {
          font-size: 32px;
          flex-shrink: 0;
        }

        .publisher-note-card h3 {
          font-size: 17px;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 6px;
        }

        .publisher-note-card p {
          font-size: 14px;
          color: var(--text-muted);
          line-height: 1.5;
        }

        @media (max-width: 768px) {
          .app-card {
            flex-direction: column;
            align-items: flex-start;
          }
          .app-card-actions {
            width: 100%;
          }
          .apps-title {
            font-size: 32px;
          }
        }
      `}</style>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps<AppsDirectoryProps> = async () => {
  const apps = getAllAppsSummary()
  return {
    props: {
      apps,
    },
    revalidate: 3600,
  }
}

export default AppsDirectoryPage
