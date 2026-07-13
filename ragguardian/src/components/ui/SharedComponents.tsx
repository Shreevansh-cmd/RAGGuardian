import { type ReactNode } from 'react';
import { clsx } from 'clsx';

interface CardProps {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
  hover?: boolean;
  onClick?: () => void;
}

export function Card({ children, className, style, hover = true, onClick }: CardProps) {
  return (
    <div
      className={clsx('card', { 'cursor-pointer': !!onClick }, className)}
      style={{
        padding: '1.5rem',
        ...(hover ? {} : { transition: 'none' }),
        ...style,
      }}
      onClick={onClick}
    >
      {children}
    </div>
  );
}

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  action?: ReactNode;
}

export function SectionHeader({ title, subtitle, action }: SectionHeaderProps) {
  return (
    <div className="flex items-center justify-between mb-5">
      <div>
        <h2
          style={{
            fontFamily: 'Manrope, Inter, sans-serif',
            fontWeight: 700,
            fontSize: '1.1rem',
            color: 'var(--text-primary)',
            letterSpacing: '-0.02em',
          }}
        >
          {title}
        </h2>
        {subtitle && (
          <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: 2 }}>
            {subtitle}
          </p>
        )}
      </div>
      {action && <div>{action}</div>}
    </div>
  );
}

interface LoadingSpinnerProps {
  size?: number;
  color?: string;
  label?: string;
}

export function LoadingSpinner({ size = 28, color = 'var(--accent)', label }: LoadingSpinnerProps) {
  return (
    <div className="flex flex-col items-center gap-3">
      <div
        style={{
          width: size,
          height: size,
          borderRadius: '50%',
          border: `3px solid transparent`,
          borderTopColor: color,
          borderRightColor: color,
          animation: 'spin-smooth 0.8s linear infinite',
        }}
      />
      {label && (
        <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', fontWeight: 500 }}>
          {label}
        </span>
      )}
    </div>
  );
}

interface EmptyStateProps {
  icon?: ReactNode;
  title: string;
  description?: string;
  action?: ReactNode;
}

export function EmptyState({ icon, title, description, action }: EmptyStateProps) {
  return (
    <div
      className="flex flex-col items-center justify-center text-center py-16 px-8"
      style={{ gap: '1rem' }}
    >
      {icon && (
        <div
          style={{
            width: 64,
            height: 64,
            borderRadius: '50%',
            background: 'var(--bg)',
            boxShadow: 'var(--neu-raised)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--text-secondary)',
          }}
        >
          {icon}
        </div>
      )}
      <div>
        <p style={{ fontWeight: 700, fontSize: '1rem', color: 'var(--text-primary)' }}>{title}</p>
        {description && (
          <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: 4 }}>
            {description}
          </p>
        )}
      </div>
      {action}
    </div>
  );
}
