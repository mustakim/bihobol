import React from 'react'
import Head from 'next/head'
import Header from './Header'
import Footer from './Footer'

interface LayoutProps {
  pageTitle: string
  description?: string
  ogImage?: string
}

const Layout: React.FC<LayoutProps> = ({
  pageTitle,
  description = 'Bihobol creates safe, innovative, and educational mobile apps and games designed with privacy, creativity, and safety at heart.',
  children,
}) => {
  const fullTitle = pageTitle
    ? `${pageTitle} | Bihobol`
    : 'Bihobol - Innovative Mobile Apps & Games'

  return (
    <>
      <Head>
        <title>{fullTitle}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content={fullTitle} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Bihobol" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={fullTitle} />
        <meta name="twitter:description" content={description} />
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><rect width='100' height='100' rx='25' fill='%236366f1'/><text y='.9em' x='50%' text-anchor='middle' font-size='70' font-weight='800' fill='white'>B</text></svg>"
        />
      </Head>

      <div className="layout-root">
        <Header />
        <main className="layout-main">{children}</main>
        <Footer />
      </div>

      <style jsx>{`
        .layout-root {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          background: var(--bg-primary);
        }
        .layout-main {
          flex: 1;
        }
      `}</style>
    </>
  )
}

export default Layout
