import React from 'react'
import { GetStaticProps, NextPage } from 'next'
import Link from 'next/link'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Layout from '../../components/Layout'

export interface PostSummary {
  slug: string
  title: string
  author: string
  date: string
  category?: string
  readTime?: string
  excerpt?: string
}

interface BlogIndexProps {
  posts: PostSummary[]
}

const BlogIndexPage: NextPage<BlogIndexProps> = ({ posts }) => {
  return (
    <Layout
      pageTitle="Blog & Insights"
      description="Read the latest articles, developer insights, and child-privacy updates from Bihobol and creator Kaniz Sultana."
    >
      <div className="blog-hero">
        <div className="site-container">
          <span className="section-tag">Insights &amp; Stories</span>
          <h1 className="blog-title">The Bihobol Journal</h1>
          <p className="blog-subtitle">
            Exploring child-friendly game development, digital privacy ethics, educational design,
            and mobile engineering.
          </p>
        </div>
      </div>

      <section className="blog-posts-section">
        <div className="site-container">
          <div className="posts-grid">
            {posts.map((post) => (
              <article key={post.slug} className="post-card glass-card">
                <div className="card-top">
                  <span className="post-category">{post.category || 'Article'}</span>
                  {post.readTime && <span className="read-time">{post.readTime}</span>}
                </div>

                <Link href={`/blog/${post.slug}`}>
                  <a className="post-title-link">
                    <h2>{post.title}</h2>
                  </a>
                </Link>

                <p className="post-excerpt">
                  {post.excerpt || 'Explore insights and updates from the team at Bihobol.'}
                </p>

                <div className="post-meta">
                  <div className="meta-author">
                    <div className="author-avatar">{post.author.charAt(0)}</div>
                    <div>
                      <span className="author-name">{post.author}</span>
                      <span className="post-date">{post.date}</span>
                    </div>
                  </div>
                  <Link href={`/blog/${post.slug}`}>
                    <a className="read-more">Read &rarr;</a>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <style jsx>{`
        .blog-hero {
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

        .blog-title {
          font-size: 44px;
          font-weight: 800;
          color: #ffffff;
          letter-spacing: -0.03em;
          margin-bottom: 16px;
        }

        .blog-subtitle {
          font-size: 18px;
          color: var(--text-muted);
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.6;
        }

        .blog-posts-section {
          padding: 70px 0 100px 0;
        }

        .posts-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
          gap: 28px;
        }

        .post-card {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 32px;
        }

        .card-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 16px;
        }

        .post-category {
          font-size: 12px;
          font-weight: 700;
          color: #818cf8;
          background: rgba(99, 102, 241, 0.12);
          border: 1px solid rgba(99, 102, 241, 0.25);
          padding: 4px 10px;
          border-radius: 6px;
        }

        .read-time {
          font-size: 12px;
          color: var(--text-dim);
        }

        .post-title-link h2 {
          font-size: 20px;
          font-weight: 700;
          color: #ffffff;
          line-height: 1.35;
          margin-bottom: 12px;
          transition: color 0.15s ease;
        }

        .post-title-link:hover h2 {
          color: #60a5fa;
        }

        .post-excerpt {
          font-size: 14px;
          color: var(--text-muted);
          line-height: 1.65;
          margin-bottom: 24px;
          flex-grow: 1;
        }

        .post-meta {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 18px;
          border-top: 1px solid var(--border-subtle);
        }

        .meta-author {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .author-avatar {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: linear-gradient(135deg, #6366f1, #a855f7);
          color: #ffffff;
          font-weight: 700;
          font-size: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .author-name {
          display: block;
          font-size: 13px;
          font-weight: 600;
          color: #ffffff;
          line-height: 1.2;
        }

        .post-date {
          display: block;
          font-size: 11px;
          color: var(--text-dim);
        }

        .read-more {
          font-size: 13px;
          font-weight: 600;
          color: #818cf8;
        }

        .read-more:hover {
          color: #ffffff;
          text-decoration: underline;
        }

        @media (max-width: 640px) {
          .posts-grid {
            grid-template-columns: 1fr;
          }
          .blog-title {
            font-size: 32px;
          }
        }
      `}</style>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps<BlogIndexProps> = async () => {
  const postsDirectory = path.join(process.cwd(), 'src/_posts')
  const fileNames = fs.readdirSync(postsDirectory)

  const posts: PostSummary[] = fileNames
    .filter((name) => name.endsWith('.md'))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, '')
      const fullPath = path.join(postsDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      const { data } = matter(fileContents)

      let formattedDate = ''
      if (data.date) {
        const d = new Date(data.date)
        formattedDate = !isNaN(d.getTime())
          ? d.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })
          : String(data.date)
      }

      return {
        slug,
        title: data.title || slug,
        author: data.author || 'Bihobol',
        date: formattedDate,
        category: data.category || 'Article',
        readTime: data.readTime || '3 min read',
        excerpt: data.excerpt || '',
      }
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

  return {
    props: {
      posts,
    },
  }
}

export default BlogIndexPage
