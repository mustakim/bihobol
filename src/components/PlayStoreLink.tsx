import React from 'react'

export const AndroidIcon: React.FC<{ size?: number; className?: string }> = ({
  size = 18,
  className = '',
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M17.6 9.48l1.84-3.18c.16-.31.04-.69-.26-.85-.29-.15-.65-.06-.83.22l-1.88 3.24a11.43 11.43 0 0 0-8.94 0L5.65 5.67c-.19-.29-.55-.38-.84-.22-.3.16-.42.54-.26.85l1.84 3.18C4.07 10.81 2.49 13.09 2 15.72h20c-.49-2.63-2.07-4.91-4.4-6.24zM7.5 13.5a.85.85 0 1 1 0-1.7.85.85 0 0 1 0 1.7zm9 0a.85.85 0 1 1 0-1.7.85.85 0 0 1 0 1.7z" />
  </svg>
)

interface PlayStoreLinkProps {
  href: string
  label?: string
  size?: 'sm' | 'md' | 'lg'
  variant?: 'solid' | 'subtle' | 'inline'
  className?: string
}

const PlayStoreLink: React.FC<PlayStoreLinkProps> = ({
  href,
  label = 'Get on Google Play',
  size = 'md',
  variant = 'subtle',
  className = '',
}) => {
  const iconSize = size === 'sm' ? 16 : size === 'lg' ? 20 : 18
  const sizeClass = size === 'sm' ? 'btn-sm' : size === 'lg' ? 'btn-large' : ''

  if (variant === 'inline') {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`android-inline-link ${className}`}
      >
        <AndroidIcon size={15} className="android-icon" />
        <span>{label}</span>
        <style jsx>{`
          .android-inline-link {
            display: inline-flex;
            align-items: center;
            gap: 6px;
            color: #3ddc84;
            font-weight: 600;
            transition: opacity 0.15s ease, transform 0.15s ease;
          }
          .android-inline-link:hover {
            opacity: 0.9;
            text-decoration: underline;
          }
        `}</style>
      </a>
    )
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`btn android-store-btn android-store-${variant} ${sizeClass} ${className}`}
    >
      <span className="android-icon-wrap">
        <AndroidIcon size={iconSize} />
      </span>
      <span>{label}</span>
      <style jsx>{`
        .android-store-btn {
          text-decoration: none;
        }
        .android-store-subtle {
          background: rgba(61, 220, 132, 0.1);
          color: #6ee7b7;
          border: 1px solid rgba(61, 220, 132, 0.35);
          backdrop-filter: blur(8px);
        }
        .android-store-subtle:hover {
          background: rgba(61, 220, 132, 0.2);
          border-color: rgba(61, 220, 132, 0.65);
          color: #ffffff;
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(16, 185, 129, 0.25);
        }
        .android-store-solid {
          background: linear-gradient(135deg, #059669 0%, #10b981 100%);
          color: #ffffff;
          border: 1px solid rgba(255, 255, 255, 0.18);
          box-shadow: 0 4px 18px rgba(16, 185, 129, 0.35);
        }
        .android-store-solid:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 26px rgba(16, 185, 129, 0.55);
          color: #ffffff;
        }
        .android-icon-wrap {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          color: ${variant === 'solid' ? '#ffffff' : '#3ddc84'};
        }
        .btn-sm {
          padding: 9px 16px;
          font-size: 13px;
        }
        .btn-large {
          padding: 14px 28px;
          font-size: 16px;
          border-radius: 12px;
        }
      `}</style>
    </a>
  )
}

export default PlayStoreLink
