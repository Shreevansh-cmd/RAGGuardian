import { Bell, Search } from 'lucide-react';

interface NavbarProps {
  title: string;
  subtitle?: string;
}

export default function Navbar({ title, subtitle }: NavbarProps) {
  return (
    <header
      className="navbar flex items-center justify-between px-7 py-4"
      style={{ marginBottom: '2rem' }}
    >
      {/* Left - Page title */}
      <div>
        <h1
          style={{
            fontFamily: 'Manrope, Inter, sans-serif',
            fontWeight: 800,
            fontSize: '1.5rem',
            letterSpacing: '-0.03em',
            color: 'var(--text-primary)',
            lineHeight: 1.2,
          }}
        >
          {title}
        </h1>
        {subtitle && (
          <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', marginTop: 2, fontWeight: 500 }}>
            {subtitle}
          </p>
        )}
      </div>

      {/* Right - Search + notifications + avatar */}
      <div className="flex items-center gap-3">
        {/* Search */}
        <div
          className="flex items-center gap-2 px-4 py-2 rounded-full"
          style={{
            background: 'var(--bg)',
            boxShadow: 'inset 4px 4px 10px rgba(175,175,195,0.5), inset -3px -3px 8px rgba(255,255,255,0.9)',
            width: 200,
          }}
        >
          <Search size={15} strokeWidth={2} style={{ color: 'var(--text-secondary)' }} />
          <input
            placeholder="Search..."
            style={{
              background: 'transparent',
              border: 'none',
              outline: 'none',
              fontSize: '0.85rem',
              color: 'var(--text-primary)',
              fontFamily: 'inherit',
              width: '100%',
            }}
          />
        </div>

        {/* Bell */}
        <button
          className="btn-neu flex items-center justify-center"
          style={{ width: 42, height: 42, padding: 0, borderRadius: '50%', position: 'relative' }}
          aria-label="Notifications"
        >
          <Bell size={17} strokeWidth={1.75} style={{ color: 'var(--text-secondary)' }} />
          <span
            style={{
              position: 'absolute',
              top: 8,
              right: 9,
              width: 7,
              height: 7,
              borderRadius: '50%',
              background: '#FF4F6A',
              border: '1.5px solid var(--surface)',
            }}
          />
        </button>

        {/* Avatar */}
        <div
          style={{
            width: 42,
            height: 42,
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #4F8CFF, #7C5CFF)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontWeight: 700,
            fontSize: '0.9rem',
            color: 'white',
            cursor: 'pointer',
            boxShadow: '4px 4px 12px rgba(79,140,255,0.35), -2px -2px 8px rgba(255,255,255,0.8)',
            userSelect: 'none',
          }}
          title="Soham Kale"
        >
          SK
        </div>
      </div>
    </header>
  );
}
