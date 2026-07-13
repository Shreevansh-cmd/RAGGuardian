import { NavLink } from 'react-router-dom';
import { LayoutDashboard, FileText, FlaskConical, ShieldHalf } from 'lucide-react';

const navItems = [
  { to: '/', label: 'Dashboard', icon: LayoutDashboard },
  { to: '/documents', label: 'Documents', icon: FileText },
  { to: '/testing', label: 'Prompt Testing', icon: FlaskConical },
];

export default function Sidebar() {
  return (
    <aside className="sidebar flex flex-col" style={{ width: 260 }}>
      {/* Logo */}
      <div className="flex items-center gap-3 px-6 py-7">
        <div
          className="flex items-center justify-center rounded-2xl"
          style={{
            width: 40,
            height: 40,
            background: 'linear-gradient(135deg, #4F8CFF, #7C5CFF)',
            boxShadow: '4px 4px 12px rgba(79,140,255,0.35), -2px -2px 8px rgba(255,255,255,0.8)',
          }}
        >
          <ShieldHalf size={22} color="white" strokeWidth={2} />
        </div>
        <div>
          <span
            style={{
              fontFamily: 'Manrope, Inter, sans-serif',
              fontWeight: 800,
              fontSize: '1.15rem',
              letterSpacing: '-0.02em',
              color: 'var(--text-primary)',
            }}
          >
            RAG<span style={{ color: 'var(--accent)' }}>Guardian</span>
          </span>
          <p style={{ fontSize: '0.68rem', color: 'var(--text-secondary)', marginTop: 1, fontWeight: 500 }}>
            AI Security Platform
          </p>
        </div>
      </div>

      <div className="divider mx-4" />

      {/* Nav */}
      <nav className="flex flex-col gap-1 px-4 mt-2 flex-1">
        <p
          style={{
            fontSize: '0.68rem',
            fontWeight: 700,
            letterSpacing: '0.08em',
            color: 'var(--text-secondary)',
            textTransform: 'uppercase',
            padding: '0.5rem 0.75rem',
          }}
        >
          Navigation
        </p>
        {navItems.map(({ to, label, icon: Icon }) => (
          <NavLink
            key={to}
            to={to}
            end={to === '/'}
            className={({ isActive }) => `sidebar-item ${isActive ? 'active' : ''}`}
          >
            <Icon size={18} strokeWidth={1.75} />
            <span>{label}</span>
          </NavLink>
        ))}
      </nav>

      {/* Bottom status */}
      <div className="px-6 pb-6">
        <div
          className="flex items-center gap-2 px-4 py-3 rounded-2xl"
          style={{
            background: 'rgba(79,209,138,0.08)',
            boxShadow: 'inset 3px 3px 8px rgba(160,160,180,0.35), inset -2px -2px 6px rgba(255,255,255,0.7)',
          }}
        >
          <div
            style={{
              width: 8,
              height: 8,
              borderRadius: '50%',
              background: '#4FD18A',
              boxShadow: '0 0 8px rgba(79,209,138,0.6)',
            }}
            className="animate-pulse-soft"
          />
          <span style={{ fontSize: '0.78rem', fontWeight: 600, color: '#278a55' }}>
            All Systems Active
          </span>
        </div>
      </div>
    </aside>
  );
}
