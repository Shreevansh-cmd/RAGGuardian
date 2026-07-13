import {
  ShieldAlert,
  FileText,
  ShieldCheck,
  Activity,
  TrendingUp,
  TrendingDown,
  Minus,
} from 'lucide-react';
import type { StatCard } from '@/types';

const iconMap: Record<string, React.ElementType> = {
  ShieldAlert,
  FileText,
  ShieldCheck,
  Activity,
};

interface StatCardsGridProps {
  cards: StatCard[];
}

export default function StatCardsGrid({ cards }: StatCardsGridProps) {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: '1.5rem',
        marginBottom: '2rem',
      }}
    >
      {cards.map((card, i) => {
        const Icon = iconMap[card.iconName] ?? Activity;
        const DeltaIcon =
          card.deltaType === 'up'
            ? TrendingUp
            : card.deltaType === 'down'
              ? TrendingDown
              : Minus;

        return (
          <div
            key={card.id}
            className={`stat-card animate-fade-slide-${i + 1}`}
          >
            {/* Icon pill */}
            <div
              style={{
                width: 46,
                height: 46,
                borderRadius: 14,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: `${card.accentColor}15`,
                marginBottom: '1rem',
                boxShadow: `3px 3px 8px rgba(160,160,180,0.3), -2px -2px 6px rgba(255,255,255,0.8)`,
              }}
            >
              <Icon
                size={22}
                strokeWidth={1.75}
                style={{ color: card.accentColor }}
              />
            </div>

            {/* Value */}
            <div
              style={{
                fontFamily: 'Manrope, Inter, sans-serif',
                fontWeight: 800,
                fontSize: '2rem',
                letterSpacing: '-0.04em',
                color: 'var(--text-primary)',
                lineHeight: 1,
                marginBottom: '0.4rem',
              }}
            >
              {card.value}
            </div>

            {/* Label */}
            <div
              style={{
                fontSize: '0.82rem',
                fontWeight: 600,
                color: 'var(--text-secondary)',
                marginBottom: '0.75rem',
                textTransform: 'uppercase',
                letterSpacing: '0.04em',
              }}
            >
              {card.label}
            </div>

            {/* Delta */}
            {card.delta && (
              <div
                className="flex items-center gap-1"
                style={{
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  color:
                    card.deltaType === 'up'
                      ? '#278a55'
                      : card.deltaType === 'down'
                        ? '#c73050'
                        : 'var(--text-secondary)',
                }}
              >
                <DeltaIcon size={12} strokeWidth={2.5} />
                {card.delta}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
