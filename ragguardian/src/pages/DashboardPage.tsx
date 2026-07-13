import Navbar from '@/components/layout/Navbar';
import StatCardsGrid from '@/components/dashboard/StatCardsGrid';
import ThreatsTable from '@/components/dashboard/ThreatsTable';
import RequestsTable from '@/components/dashboard/RequestsTable';
import { statCards, recentThreats, recentRequests } from '@/data/mockData';

export default function DashboardPage() {
  return (
    <>
      <Navbar
        title="Security Dashboard"
        subtitle="Real-time threat monitoring for your RAG pipelines"
      />

      {/* Stat Cards */}
      <StatCardsGrid cards={statCards} />

      {/* Tables Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '2rem',
        }}
      >
        <ThreatsTable threats={recentThreats} />
        <RequestsTable requests={recentRequests} />
      </div>
    </>
  );
}
