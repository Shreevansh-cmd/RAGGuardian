import Navbar from '@/components/layout/Navbar';
import PromptTester from '@/components/testing/PromptTester';
import { ShieldCheck, Zap, Lock } from 'lucide-react';

const features = [
  {
    icon: ShieldCheck,
    label: 'Injection Detection',
    desc: 'Identifies prompt injection patterns with ML confidence scoring',
    color: '#4F8CFF',
  },
  {
    icon: Lock,
    label: 'Jailbreak Analysis',
    desc: 'Detects DAN, role-override, and instruction-bypass attempts',
    color: '#7C5CFF',
  },
  {
    icon: Zap,
    label: 'Real-time Scoring',
    desc: 'Instant security score from 0–100 with risk classification',
    color: '#4FD18A',
  },
];

export default function TestingPage() {
  return (
    <>
      <Navbar
        title="Prompt Testing"
        subtitle="Test your prompts against RAGGuardian's security engine"
      />

      {/* Feature pills */}
      <div className="flex items-center gap-3 mb-8 animate-fade-slide-1">
        {features.map(({ icon: Icon, label, desc, color }) => (
          <div
            key={label}
            className="card flex-1"
            style={{ padding: '1.1rem 1.25rem', display: 'flex', alignItems: 'center', gap: '0.85rem' }}
          >
            <div
              style={{
                width: 38,
                height: 38,
                borderRadius: 11,
                background: `${color}15`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
                boxShadow: '2px 2px 6px rgba(160,160,180,0.25), -1px -1px 4px rgba(255,255,255,0.7)',
              }}
            >
              <Icon size={18} strokeWidth={1.75} style={{ color }} />
            </div>
            <div>
              <p style={{ fontSize: '0.875rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: 2 }}>
                {label}
              </p>
              <p style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', lineHeight: 1.4 }}>
                {desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Main Tester */}
      <PromptTester />
    </>
  );
}
