import React from 'react';
import { AppShell } from './components/layout/AppShell';
import { PageTransition } from './components/layout/PageTransition';
import { Toaster } from 'sonner';

function App() {
  return (
    <div className="min-h-screen bg-[var(--bg-base)] text-[var(--text-primary)]">
      <Toaster position="top-right" richColors />
      <AppShell>
        <PageTransition>
          <div className="p-4 md:p-6 max-w-7xl mx-auto w-full">
            <h1 className="text-2xl font-bold text-[var(--text-primary)]">Benim Annem Bir Melek: Aile ve Aşk Hikayesi</h1>
            <p className="text-[var(--text-muted)] mt-2">Uygulama başarıyla oluşturuldu!</p>
          </div>
        </PageTransition>
      </AppShell>
    </div>
  );
}

export default App;