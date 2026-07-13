import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AppLayout from '@/components/layout/AppLayout';
import DashboardPage from '@/pages/DashboardPage';
import DocumentsPage from '@/pages/DocumentsPage';
import TestingPage from '@/pages/TestingPage';

export default function App() {
  return (
    <BrowserRouter>
      <AppLayout>
        <Routes>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/documents" element={<DocumentsPage />} />
          <Route path="/testing" element={<TestingPage />} />
        </Routes>
      </AppLayout>
    </BrowserRouter>
  );
}
