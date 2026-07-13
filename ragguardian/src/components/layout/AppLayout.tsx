import { type ReactNode } from 'react';
import Sidebar from './Sidebar';

interface AppLayoutProps {
  children: ReactNode;
}

export default function AppLayout({ children }: AppLayoutProps) {
  return (
    <div
      style={{
        display: 'flex',
        minHeight: '100vh',
        background: 'var(--bg)',
      }}
    >
      <Sidebar />
      <main
        style={{
          marginLeft: 260,
          flex: 1,
          padding: '2rem 2.5rem',
          minHeight: '100vh',
          maxWidth: 'calc(100vw - 260px)',
        }}
      >
        {children}
      </main>
    </div>
  );
}
