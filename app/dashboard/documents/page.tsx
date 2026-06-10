import { FolderOpen } from 'lucide-react';

export default function DocumentsPage() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-headline font-bold text-text mb-1">Documents</h1>
        <p className="text-muted text-sm">Access your policy documents, forms, and certificates.</p>
      </div>

      <div className="glass-card p-10 flex flex-col items-center justify-center text-center">
        <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
          <FolderOpen className="w-7 h-7 text-primary" />
        </div>
        <h2 className="font-headline font-bold text-lg text-text mb-2">Your documents will appear here</h2>
        <p className="text-muted text-sm max-w-sm">
          Policy documents, certificates of insurance, and other files will be accessible once your coverage is active.
        </p>
      </div>
    </div>
  );
}
