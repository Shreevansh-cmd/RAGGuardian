import Navbar from '@/components/layout/Navbar';
import DocumentsTable from '@/components/documents/DocumentsTable';

export default function DocumentsPage() {
  return (
    <>
      <Navbar
        title="Documents"
        subtitle="Manage the knowledge base powering your RAG system"
      />
      <DocumentsTable />
    </>
  );
}
