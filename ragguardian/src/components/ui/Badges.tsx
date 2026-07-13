import type { SeverityLevel, ThreatStatus, DocumentStatus, RequestResult, RiskLevel } from '@/types';

export function SeverityBadge({ severity }: { severity: SeverityLevel }) {
  const labels: Record<SeverityLevel, string> = {
    critical: 'Critical',
    high: 'High',
    medium: 'Medium',
    low: 'Low',
  };
  return <span className={`badge badge-${severity}`}>{labels[severity]}</span>;
}

export function StatusBadge({ status }: { status: ThreatStatus }) {
  const labels: Record<ThreatStatus, string> = {
    blocked: 'Blocked',
    allowed: 'Allowed',
    flagged: 'Flagged',
  };
  const styles: Record<ThreatStatus, string> = {
    blocked: 'badge-blocked',
    allowed: 'badge-allowed',
    flagged: 'badge-medium',
  };
  return <span className={`badge ${styles[status]}`}>{labels[status]}</span>;
}

export function DocStatusBadge({ status }: { status: DocumentStatus }) {
  const labels: Record<DocumentStatus, string> = {
    processing: 'Processing',
    indexed: 'Indexed',
    failed: 'Failed',
  };
  const styles: Record<DocumentStatus, string> = {
    processing: 'badge-processing',
    indexed: 'badge-indexed',
    failed: 'badge-failed',
  };
  return <span className={`badge ${styles[status]}`}>{labels[status]}</span>;
}

export function RequestResultBadge({ result }: { result: RequestResult }) {
  const map: Record<RequestResult, { label: string; style: string }> = {
    clean: { label: 'Clean', style: 'badge-safe' },
    flagged: { label: 'Flagged', style: 'badge-medium' },
    blocked: { label: 'Blocked', style: 'badge-blocked' },
  };
  const { label, style } = map[result];
  return <span className={`badge ${style}`}>{label}</span>;
}

export function RiskBadge({ risk }: { risk: RiskLevel }) {
  const map: Record<RiskLevel, { label: string; bg: string; color: string }> = {
    safe: { label: 'Safe', bg: 'rgba(79,209,138,0.12)', color: '#278a55' },
    medium: { label: 'Medium Risk', bg: 'rgba(255,184,79,0.12)', color: '#b07820' },
    high: { label: 'High Risk', bg: 'rgba(255,127,79,0.12)', color: '#c05020' },
    critical: { label: 'Critical Risk', bg: 'rgba(255,79,106,0.14)', color: '#c73050' },
  };
  const { label, bg, color } = map[risk];
  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 6,
        padding: '0.4rem 1.1rem',
        borderRadius: 100,
        background: bg,
        color,
        fontWeight: 700,
        fontSize: '0.85rem',
        letterSpacing: '0.01em',
      }}
    >
      <span
        style={{
          width: 8,
          height: 8,
          borderRadius: '50%',
          background: color,
          display: 'inline-block',
        }}
      />
      {label}
    </span>
  );
}

export function AttackBadge({ type, confidence }: { type: string; confidence: number }) {
  return (
    <div
      className="badge badge-attack"
      style={{ display: 'inline-flex', alignItems: 'center', gap: 6, padding: '0.35rem 0.9rem' }}
    >
      <span>{type}</span>
      <span
        style={{
          background: 'rgba(124,92,255,0.2)',
          borderRadius: 100,
          padding: '1px 7px',
          fontSize: '0.7rem',
          fontWeight: 700,
        }}
      >
        {confidence}%
      </span>
    </div>
  );
}
