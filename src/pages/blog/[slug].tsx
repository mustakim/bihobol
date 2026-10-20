import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import Link from 'next/link'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import ReactMarkdown from 'react-markdown'
import Layout from '../../components/Layout'

interface BlogPostProps {
  content: string
  frontMatter: {
    title: string
    author: string
    date: string
    category?: string
    readTime?: string
    excerpt?: string
  }
}

const BlogPost: NextPage<BlogPostProps> = ({ frontMatter, content }) => {
  return (
    <Layout
      pageTitle={frontMatter.title}
      description={frontMatter.excerpt || `Read ${frontMatter.title} on Bihobol.`}
    >
      <article className="post-article">
        {/* Post Header */}
        <header className="post-header">
          <div className="site-container">
            <div className="breadcrumb">
              <Link href="/">
                <a>Home</a>
              </Link>
              <span className="sep">/</span>
              <Link href="/blog">
                <a>Blog</a>
              </Link>
              <span className="sep">/</span>
              <span className="current">{frontMatter.title}</span>
            </div>

            <div className="category-pill">{frontMatter.category || 'Article'}</div>

            <h1 className="post-title">{frontMatter.title}</h1>

            <div className="post-author-bar">
              <div className="author-wrap">
                <div className="author-badge">{frontMatter.author.charAt(0)}</div>
                <div className="author-details">
                  <span className="author-name">{frontMatter.author}</span>
                  <span className="post-date-line">Published on {frontMatter.date}</span>
                </div>
              </div>
              {frontMatter.readTime && (
                <div className="time-badge">
                  <span>⏱️ {frontMatter.readTime}</span>
                </div>
              )}
            </div>
          </div>
        </header>

        {/* Content Container */}
        <div className="post-content-container">
          <div className="site-container narrow-container">
            <div className="post-body">
              <ReactMarkdown children={content} />
            </div>

            {/* Author Footer Card */}
            <div className="post-author-box">
              <div className="author-box-avatar">{frontMatter.author.charAt(0)}</div>
              <div>
                <h3>Written by {frontMatter.author}</h3>
                <p>
                  Creator and software craftsman at Bihobol. Focused on child safety, privacy-first
                  mobile apps, and ethical technology.
                </p>
              </div>
            </div>

            {/* Back Button */}
            <div className="back-wrap">
              <Link href="/blog">
                <a className="btn btn-secondary">&larr; Back to all articles</a>
              </Link>
            </div>
          </div>
        </div>
      </article>

      <style jsx>{`
        .post-header {
          padding: 60px 0 40px 0;
          background: linear-gradient(180deg, rgba(22, 27, 34, 0.7) 0%, rgba(10, 14, 23, 1) 100%);
          border-bottom: 1px solid var(--border-subtle);
        }

        .breadcrumb {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 13px;
          color: var(--text-dim);
          margin-bottom: 20px;
          flex-wrap: wrap;
        }

        .breadcrumb a {
          color: var(--text-muted);
        }
        .breadcrumb a:hover {
          color: #60a5fa;
        }

        .sep {
          color: var(--border-strong);
        }

        .current {
          color: var(--text-main);
          font-weight: 500;
        }

        .category-pill {
          display: inline-block;
          font-size: 12px;
          font-weight: 700;
          color: #818cf8;
          background: rgba(99, 102, 241, 0.12);
          border: 1px solid rgba(99, 102, 241, 0.25);
          padding: 4px 12px;
          border-radius: 6px;
          margin-bottom: 16px;
        }

        .post-title {
          font-size: 40px;
          font-weight: 800;
          color: #ffffff;
          line-height: 1.25;
          letter-spacing: -0.03em;
          margin-bottom: 24px;
          max-width: 860px;
        }

        .post-author-bar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 20px;
          border-top: 1px solid var(--border-subtle);
          flex-wrap: wrap;
          gap: 16px;
        }

        .author-wrap {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .author-badge {
          width: 42px;
          height: 42px;
          border-radius: 50%;
          background: linear-gradient(135deg, #6366f1, #a855f7);
          color: #ffffff;
          font-weight: 800;
          font-size: 18px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .author-name {
          display: block;
          font-size: 15px;
          font-weight: 700;
          color: #ffffff;
        }

        .post-date-line {
          font-size: 13px;
          color: var(--text-dim);
        }

        .time-badge {
          font-size: 13px;
          color: var(--text-muted);
          background: rgba(255, 255, 255, 0.05);
          padding: 6px 12px;
          border-radius: 20px;
        }

        .post-content-container {
          padding: 60px 0 100px 0;
        }

        .narrow-container {
          max-width: 820px;
        }

        .post-body {
          background: var(--bg-card);
          border: 1px solid var(--border-strong);
          border-radius: 20px;
          padding: 48px;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
          margin-bottom: 40px;
        }

        .post-body :global(h1),
        .post-body :global(h2),
        .post-body :global(h3) {
          color: #ffffff;
          margin-top: 36px;
          margin-bottom: 16px;
          letter-spacing: -0.02em;
        }

        .post-body :global(h1) {
          font-size: 28px;
        }

        .post-body :global(h2) {
          font-size: 22px;
          padding-bottom: 8px;
          border-bottom: 1px solid var(--border-subtle);
        }

        .post-body :global(h3) {
          font-size: 18px;
        }

        .post-body :global(p) {
          font-size: 16px;
          line-height: 1.8;
          color: #cbd5e1;
          margin-bottom: 20px;
        }

        .post-body :global(ul),
        .post-body :global(ol) {
          padding-left: 24px;
          margin-bottom: 24px;
          color: #cbd5e1;
        }

        .post-body :global(li) {
          margin-bottom: 10px;
          line-height: 1.7;
        }

        .post-body :global(strong) {
          color: #ffffff;
        }

        .post-body :global(a) {
          color: #60a5fa;
          text-decoration: underline;
        }

        .post-body :global(hr) {
          border: 0;
          height: 1px;
          background: var(--border-subtle);
          margin: 36px 0;
        }

        .post-author-box {
          background: var(--bg-card);
          border: 1px solid var(--border-strong);
          border-radius: 16px;
          padding: 28px;
          display: flex;
          align-items: center;
          gap: 20px;
          margin-bottom: 32px;
        }

        .author-box-avatar {
          width: 52px;
          height: 52px;
          border-radius: 14px;
          background: linear-gradient(135deg, #6366f1, #a855f7);
          color: #ffffff;
          font-size: 22px;
          font-weight: 800;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .post-author-box h3 {
          font-size: 17px;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 6px;
        }

        .post-author-box p {
          font-size: 14px;
          color: var(--text-muted);
          line-height: 1.5;
        }

        .back-wrap {
          text-align: center;
        }

        @media (max-width: 640px) {
          .post-title {
            font-size: 28px;
          }
          .post-body {
            padding: 24px 18px;
          }
        }
      `}</style>
    </Layout>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const postsDirectory = path.join(process.cwd(), 'src/_posts')
  const files = fs.readdirSync(postsDirectory).filter((f) => f.endsWith('.md'))
  const paths = files.map((fName) => ({
    params: {
      slug: fName.replace('.md', ''),
    },
  }))
  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps<BlogPostProps> = async ({ params }) => {
  const slug = params?.slug as string
  const mdPath = path.join(process.cwd(), 'src/_posts', `${slug}.md`)
  const md = fs.readFileSync(mdPath, 'utf8')
  const { data, content } = matter(md)

  let formattedDate = ''
  if (data.date) {
    const d = new Date(data.date)
    formattedDate = !isNaN(d.getTime())
      ? d.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
      : String(data.date)
  }

  return {
    props: {
      frontMatter: {
        title: data.title || slug,
        author: data.author || 'Kaniz Sultana',
        date: formattedDate,
        category: data.category || 'Article',
        readTime: data.readTime || '3 min read',
        excerpt: data.excerpt || '',
      },
      content,
    },
  }
}

export default BlogPost
