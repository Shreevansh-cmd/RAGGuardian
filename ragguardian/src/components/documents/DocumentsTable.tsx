import { useState, useRef } from 'react';
import { Upload, Trash2, FileText, FolderOpen } from 'lucide-react';
import type { Document } from '@/types';
import { sampleDocuments } from '@/data/mockData';
import { DocStatusBadge } from '@/components/ui/Badges';
import { SectionHeader, EmptyState, LoadingSpinner } from '@/components/ui/SharedComponents';

function formatDate(dateStr: string): string {
  const d = new Date(dateStr);
  return d.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
}

export default function DocumentsTable() {
  const [documents, setDocuments] = useState<Document[]>(sampleDocuments);
  const [uploading, setUploading] = useState(false);
  const [deletingId, setDeletingId] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);
    // Simulate upload delay
    await new Promise((res) => setTimeout(res, 1200));

    const newDoc: Document = {
      id: `d-${Date.now()}`,
      name: file.name,
      sizeBytes: file.size,
      size: formatBytes(file.size),
      uploadDate: new Date().toISOString().split('T')[0],
      status: 'processing',
    };

    setDocuments((prev) => [newDoc, ...prev]);
    setUploading(false);

    // Simulate indexing after 2s
    setTimeout(() => {
      setDocuments((prev) =>
        prev.map((d) => (d.id === newDoc.id ? { ...d, status: 'indexed' } : d))
      );
    }, 2000);

    // Reset input
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  const handleDelete = async (id: string) => {
    setDeletingId(id);
    await new Promise((res) => setTimeout(res, 400));
    setDocuments((prev) => prev.filter((d) => d.id !== id));
    setDeletingId(null);
  };

  return (
    <div>
      {/* Header */}
      <div
        className="navbar animate-fade-slide-1 flex items-center justify-between mb-8"
        style={{ padding: '1.25rem 1.75rem' }}
      >
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
            Document Library
          </h2>
          <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: 2 }}>
            {documents.length} documents · {documents.filter((d) => d.status === 'indexed').length} indexed
          </p>
        </div>

        <div className="flex items-center gap-3">
          {uploading && <LoadingSpinner size={20} label="Uploading..." />}
          <input
            ref={fileInputRef}
            type="file"
            accept=".pdf,.txt,.docx"
            style={{ display: 'none' }}
            onChange={handleFileChange}
            id="file-upload-input"
          />
          <label htmlFor="file-upload-input">
            <span
              className="btn-primary"
              style={{ cursor: uploading ? 'not-allowed' : 'pointer', opacity: uploading ? 0.6 : 1 }}
            >
              <Upload size={16} strokeWidth={2} />
              Upload PDF
            </span>
          </label>
        </div>
      </div>

      {/* Table */}
      <div className="table-container animate-fade-slide-2">
        <div style={{ padding: '1.5rem 1.75rem 1rem' }}>
          <SectionHeader title="All Documents" subtitle="Manage your indexed knowledge base" />
        </div>

        {documents.length === 0 ? (
          <EmptyState
            icon={<FolderOpen size={28} strokeWidth={1.5} />}
            title="No documents yet"
            description="Upload a PDF to start building your knowledge base"
          />
        ) : (
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr
                  style={{
                    background: 'rgba(236,236,236,0.7)',
                    borderBottom: '1px solid rgba(180,180,195,0.2)',
                  }}
                >
                  {['Document', 'Size', 'Upload Date', 'Status', ''].map((h, i) => (
                    <th
                      key={i}
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
                {documents.map((doc, i) => (
                  <tr
                    key={doc.id}
                    className="table-row"
                    style={{
                      borderBottom: i < documents.length - 1 ? '1px solid rgba(180,180,195,0.15)' : 'none',
                      opacity: deletingId === doc.id ? 0.5 : 1,
                      transition: 'opacity 0.3s ease',
                    }}
                  >
                    {/* Name */}
                    <td style={{ padding: '1rem 1.25rem', maxWidth: 320 }}>
                      <div className="flex items-center gap-3">
                        <div
                          style={{
                            width: 36,
                            height: 36,
                            borderRadius: 10,
                            background: 'rgba(79,140,255,0.1)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexShrink: 0,
                          }}
                        >
                          <FileText size={16} strokeWidth={1.75} style={{ color: '#4F8CFF' }} />
                        </div>
                        <div>
                          <p
                            style={{
                              fontSize: '0.875rem',
                              fontWeight: 600,
                              color: 'var(--text-primary)',
                              overflow: 'hidden',
                              textOverflow: 'ellipsis',
                              whiteSpace: 'nowrap',
                              maxWidth: 250,
                            }}
                            title={doc.name}
                          >
                            {doc.name}
                          </p>
                        </div>
                      </div>
                    </td>

                    {/* Size */}
                    <td
                      style={{
                        padding: '1rem 1.25rem',
                        fontSize: '0.82rem',
                        color: 'var(--text-secondary)',
                        fontWeight: 500,
                        whiteSpace: 'nowrap',
                      }}
                    >
                      {doc.size}
                    </td>

                    {/* Date */}
                    <td
                      style={{
                        padding: '1rem 1.25rem',
                        fontSize: '0.82rem',
                        color: 'var(--text-secondary)',
                        fontWeight: 500,
                        whiteSpace: 'nowrap',
                      }}
                    >
                      {formatDate(doc.uploadDate)}
                    </td>

                    {/* Status */}
                    <td style={{ padding: '1rem 1.25rem' }}>
                      <div className="flex items-center gap-2">
                        {doc.status === 'processing' && (
                          <LoadingSpinner size={14} color="#4F8CFF" />
                        )}
                        <DocStatusBadge status={doc.status} />
                      </div>
                    </td>

                    {/* Delete */}
                    <td style={{ padding: '1rem 1.25rem' }}>
                      <button
                        className="btn-danger"
                        onClick={() => handleDelete(doc.id)}
                        disabled={deletingId === doc.id}
                        style={{ fontSize: '0.78rem', padding: '0.4rem 0.9rem' }}
                        aria-label={`Delete ${doc.name}`}
                      >
                        <Trash2 size={13} strokeWidth={2} />
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}

function formatBytes(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}
