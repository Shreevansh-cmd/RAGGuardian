import type { RecentRequest } from '@/types';
import { RequestResultBadge } from '@/components/ui/Badges';
import { SectionHeader } from '@/components/ui/SharedComponents';

interface RequestsTableProps {
  requests: RecentRequest[];
}

export default function RequestsTable({ requests }: RequestsTableProps) {
  return (
    <div className="table-container animate-fade-slide-4">
      <div style={{ padding: '1.5rem 1.75rem 1rem' }}>
        <SectionHeader
          title="Recent Requests"
          subtitle={`${requests.length} total requests`}
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
              {['Time', 'Prompt', 'Result'].map((h) => (
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
            {requests.map((req, i) => (
              <tr
                key={req.id}
                className="table-row"
                style={{
                  borderBottom: i < requests.length - 1 ? '1px solid rgba(180,180,195,0.15)' : 'none',
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
                  {req.time}
                </td>
                <td style={{ padding: '1rem 1.25rem', width: '100%' }}>
                  <p
                    style={{
                      fontSize: '0.85rem',
                      fontWeight: 500,
                      color: 'var(--text-primary)',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      whiteSpace: 'nowrap',
                      maxWidth: 500,
                    }}
                    title={req.prompt}
                  >
                    {req.prompt}
                  </p>
                </td>
                <td style={{ padding: '1rem 1.25rem', whiteSpace: 'nowrap' }}>
                  <RequestResultBadge result={req.result} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
