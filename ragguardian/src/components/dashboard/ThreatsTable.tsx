import type { Threat } from '@/types';
import { SeverityBadge, StatusBadge } from '@/components/ui/Badges';
import { SectionHeader } from '@/components/ui/SharedComponents';

interface ThreatsTableProps {
  threats: Threat[];
}

export default function ThreatsTable({ threats }: ThreatsTableProps) {
  return (
    <div className="table-container animate-fade-slide-3">
      <div style={{ padding: '1.5rem 1.75rem 1rem' }}>
        <SectionHeader
          title="Recent Threats"
          subtitle={`${threats.length} incidents detected`}
        />
      </div>

      <div style={{ overflowX: 'auto' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr
              style={{
                background: 'rgba(236,236,236,0.7)',
                borderBottom: '1px solid rgba(180,180,195,0.2)',
              }}
            >
              {['Time', 'Prompt', 'Attack Type', 'Severity', 'Status'].map((h) => (
                <th
                  key={h}
                  style={{
                    padding: '0.85rem 1.25rem',
                    textAlign: 'left',
                    fontSize: '0.72rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.06em',
                    color: 'var(--text-secondary)',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {threats.map((threat, i) => (
              <tr
                key={threat.id}
                className="table-row"
                style={{
                  borderBottom: i < threats.length - 1 ? '1px solid rgba(180,180,195,0.15)' : 'none',
                }}
              >
                <td
                  style={{
                    padding: '1rem 1.25rem',
                    fontSize: '0.82rem',
                    fontWeight: 600,
                    color: 'var(--text-secondary)',
                    whiteSpace: 'nowrap',
                    fontVariantNumeric: 'tabular-nums',
                  }}
                >
                  {threat.time}
                </td>
                <td
                  style={{
                    padding: '1rem 1.25rem',
                    maxWidth: 300,
                  }}
                >
                  <p
                    style={{
                      fontSize: '0.85rem',
                      fontWeight: 500,
                      color: 'var(--text-primary)',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      whiteSpace: 'nowrap',
                      maxWidth: 280,
                    }}
                    title={threat.prompt}
                  >
                    {threat.prompt}
                  </p>
                </td>
                <td style={{ padding: '1rem 1.25rem', whiteSpace: 'nowrap' }}>
                  <span
                    style={{
                      fontSize: '0.82rem',
                      fontWeight: 600,
                      color: 'var(--text-primary)',
                      background: 'rgba(124,92,255,0.08)',
                      padding: '0.25rem 0.7rem',
                      borderRadius: 100,
                    }}
                  >
                    {threat.attackType}
                  </span>
                </td>
                <td style={{ padding: '1rem 1.25rem' }}>
                  <SeverityBadge severity={threat.severity} />
                </td>
                <td style={{ padding: '1rem 1.25rem' }}>
                  <StatusBadge status={threat.status} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
