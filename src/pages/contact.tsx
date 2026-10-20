import React, { useState } from 'react'
import Layout from '../components/Layout'

const ContactPage: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    app: 'math-adventure',
    subject: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)
    // Simulate swift form submission
    setTimeout(() => {
      setSubmitting(false)
      setSubmitted(true)
    }, 600)
  }

  const faqs = [
    {
      q: 'How does Bihobol protect my child’s privacy?',
      a:
        'All our games, including Math Adventure, run 100% offline and do not bundle advertising trackers or analytics SDKs. No personal information is ever collected or transmitted.',
    },
    {
      q: 'Are your educational games really 100% ad-free?',
      a:
        'Yes. We do not display third-party advertisements, banner ads, interstitial popups, or rewarded video commercials. Children can play without commercial interruption.',
    },
    {
      q: 'How can I permanently delete my local game progress?',
      a:
        'Since game data is stored exclusively on your device, you can clear all data at any time via your device Settings > Apps > Storage > Clear Data, or by uninstalling the app.',
    },
    {
      q: 'How can I report a bug or suggest new features for Math Adventure?',
      a:
        'You can email our developer team directly at support@bihobol.com or submit a message using the form on this page. We respond to all parent inquiries within 24-48 hours.',
    },
  ]

  return (
    <Layout
      pageTitle="Contact & Support"
      description="Get in touch with Bihobol and publisher Kaniz Sultana. Reach our support team for Math Adventure inquiries, child privacy requests, or feedback."
    >
      <div className="contact-hero">
        <div className="site-container">
          <span className="section-tag">Direct Communication</span>
          <h1 className="contact-title">We’d Love to Hear From You</h1>
          <p className="contact-subtitle">
            Have questions about Math Adventure, need parent support, or wish to discuss educational
            partnerships? Our team is here to assist.
          </p>
        </div>
      </div>

      <section className="contact-main-section">
        <div className="site-container">
          <div className="contact-grid">
            {/* Form Column */}
            <div className="form-column">
              <div className="form-card">
                {submitted ? (
                  <div className="success-message">
                    <div className="success-icon">✓</div>
                    <h2>Thank You for Reaching Out!</h2>
                    <p>
                      Your message has been received. Our support team will review your inquiry and
                      get back to you at <strong>{formState.email}</strong> shortly.
                    </p>
                    <button
                      className="btn btn-primary"
                      onClick={() => {
                        setSubmitted(false)
                        setFormState({
                          name: '',
                          email: '',
                          app: 'math-adventure',
                          subject: '',
                          message: '',
                        })
                      }}
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <h2 className="form-heading">Send us a Message</h2>
                    <p className="form-subheading">
                      Fill in the form below and we will get back to you promptly.
                    </p>

                    <div className="form-row">
                      <div className="form-group">
                        <label htmlFor="name">Your Name</label>
                        <input
                          type="text"
                          id="name"
                          required
                          placeholder="e.g. Alex Johnson"
                          value={formState.name}
                          onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="email">Email Address</label>
                        <input
                          type="email"
                          id="email"
                          required
                          placeholder="alex@example.com"
                          value={formState.email}
                          onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        />
                      </div>
                    </div>

                    <div className="form-row">
                      <div className="form-group">
                        <label htmlFor="app">Application</label>
                        <select
                          id="app"
                          value={formState.app}
                          onChange={(e) => setFormState({ ...formState, app: e.target.value })}
                        >
                          <option value="math-adventure">Math Adventure</option>
                          <option value="general">General Inquiry</option>
                          <option value="privacy">Privacy &amp; Data Rights</option>
                          <option value="partnership">Educational Partnership</option>
                        </select>
                      </div>
                      <div className="form-group">
                        <label htmlFor="subject">Subject</label>
                        <input
                          type="text"
                          id="subject"
                          required
                          placeholder="e.g. Feedback on stage progression"
                          value={formState.subject}
                          onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                        />
                      </div>
                    </div>

                    <div className="form-group">
                      <label htmlFor="message">Your Message</label>
                      <textarea
                        id="message"
                        rows={5}
                        required
                        placeholder="Please write your questions or feedback here..."
                        value={formState.message}
                        onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      />
                    </div>

                    <button
                      type="submit"
                      className="btn btn-primary submit-btn"
                      disabled={submitting}
                    >
                      {submitting ? 'Sending...' : 'Send Message'}
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* Support Info Sidebar */}
            <div className="info-column">
              <div className="support-info-card">
                <h3>Official Publisher &amp; Developer</h3>
                <div className="info-block">
                  <span className="block-label">Publisher</span>
                  <span className="block-val">Kaniz Sultana (Bihobol)</span>
                </div>
                <div className="info-block">
                  <span className="block-label">Support Email</span>
                  <a href="mailto:support@bihobol.com" className="email-link">
                    support@bihobol.com
                  </a>
                </div>
                <div className="info-block">
                  <span className="block-label">Headquarters</span>
                  <span className="block-val">Dhaka, Bangladesh</span>
                </div>
                <div className="info-block">
                  <span className="block-label">Response Time</span>
                  <span className="block-val">Typically within 24–48 hours</span>
                </div>
              </div>

              <div className="privacy-pledge-card">
                <div className="pledge-icon">🛡️</div>
                <div>
                  <h4>Privacy Inquiries</h4>
                  <p>
                    For formal data protection inquiries, COPPA questions, or legal requests, email
                    directly with the subject line <code>[Privacy Request]</code>.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="faq-section">
            <div className="section-header">
              <span className="section-tag">Common Inquiries</span>
              <h2 className="section-title">Frequently Asked Questions</h2>
            </div>
            <div className="faq-grid">
              {faqs.map((faq, index) => (
                <div key={index} className="faq-card glass-card">
                  <h4>{faq.q}</h4>
                  <p>{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .contact-hero {
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

        .contact-title {
          font-size: 44px;
          font-weight: 800;
          color: #ffffff;
          letter-spacing: -0.03em;
          margin-bottom: 16px;
        }

        .contact-subtitle {
          font-size: 18px;
          color: var(--text-muted);
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.6;
        }

        .contact-main-section {
          padding: 60px 0 90px 0;
        }

        .contact-grid {
          display: grid;
          grid-template-columns: 1.4fr 1fr;
          gap: 40px;
          margin-bottom: 80px;
        }

        .form-card {
          background: var(--bg-card);
          border: 1px solid var(--border-strong);
          border-radius: 20px;
          padding: 36px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.35);
        }

        .form-heading {
          font-size: 24px;
          font-weight: 800;
          color: #ffffff;
          margin-bottom: 6px;
        }

        .form-subheading {
          font-size: 14px;
          color: var(--text-muted);
          margin-bottom: 28px;
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }

        .form-group {
          margin-bottom: 20px;
          display: flex;
          flex-direction: column;
        }

        .form-group label {
          font-size: 13px;
          font-weight: 600;
          color: #cbd5e1;
          margin-bottom: 8px;
        }

        .form-group input,
        .form-group select,
        .form-group textarea {
          background: #0d121c;
          border: 1px solid #2d3b54;
          padding: 12px 14px;
          border-radius: 10px;
          color: #ffffff;
          font-size: 14px;
          font-family: inherit;
          transition: border-color 0.2s;
        }

        .form-group input:focus,
        .form-group select:focus,
        .form-group textarea:focus {
          outline: none;
          border-color: #6366f1;
          box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.2);
        }

        .submit-btn {
          width: 100%;
          padding: 14px;
          font-size: 15px;
          font-weight: 700;
        }

        .success-message {
          text-align: center;
          padding: 30px 10px;
        }

        .success-icon {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background: rgba(16, 185, 129, 0.2);
          color: #34d399;
          font-size: 28px;
          font-weight: 800;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 20px auto;
          border: 2px solid #10b981;
        }

        .success-message h2 {
          font-size: 24px;
          font-weight: 800;
          color: #ffffff;
          margin-bottom: 12px;
        }

        .success-message p {
          color: var(--text-muted);
          font-size: 15px;
          line-height: 1.6;
          margin-bottom: 24px;
        }

        /* Sidebar */
        .support-info-card {
          background: var(--bg-card);
          border: 1px solid var(--border-strong);
          border-radius: 18px;
          padding: 30px;
          margin-bottom: 24px;
        }

        .support-info-card h3 {
          font-size: 18px;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 20px;
          padding-bottom: 12px;
          border-bottom: 1px solid var(--border-subtle);
        }

        .info-block {
          display: flex;
          flex-direction: column;
          margin-bottom: 16px;
        }

        .block-label {
          font-size: 12px;
          color: var(--text-dim);
          text-transform: uppercase;
          font-weight: 600;
          letter-spacing: 0.05em;
          margin-bottom: 4px;
        }

        .block-val {
          font-size: 15px;
          font-weight: 600;
          color: #ffffff;
        }

        .email-link {
          font-size: 15px;
          font-weight: 600;
          color: #60a5fa;
        }
        .email-link:hover {
          text-decoration: underline;
        }

        .privacy-pledge-card {
          background: linear-gradient(135deg, rgba(99, 102, 241, 0.1), rgba(168, 85, 247, 0.1));
          border: 1px solid rgba(99, 102, 241, 0.25);
          border-radius: 18px;
          padding: 24px;
          display: flex;
          gap: 16px;
        }

        .pledge-icon {
          font-size: 26px;
        }

        .privacy-pledge-card h4 {
          font-size: 16px;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 6px;
        }

        .privacy-pledge-card p {
          font-size: 13px;
          color: var(--text-muted);
          line-height: 1.5;
        }

        .privacy-pledge-card code {
          background: rgba(0, 0, 0, 0.3);
          padding: 2px 6px;
          border-radius: 4px;
          color: #93c5fd;
          font-family: 'JetBrains Mono', monospace;
        }

        /* FAQ */
        .faq-section {
          padding-top: 40px;
        }

        .faq-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
        }

        .faq-card {
          padding: 28px;
        }

        .faq-card h4 {
          font-size: 17px;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 10px;
        }

        .faq-card p {
          font-size: 14px;
          color: var(--text-muted);
          line-height: 1.6;
        }

        @media (max-width: 860px) {
          .contact-grid {
            grid-template-columns: 1fr;
          }
          .form-row {
            grid-template-columns: 1fr;
          }
          .faq-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </Layout>
  )
}

export default ContactPage
