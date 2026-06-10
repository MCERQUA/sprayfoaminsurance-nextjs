import { Award } from 'lucide-react';

export default function CertificatesPage() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-headline font-bold text-text mb-1">Certificates</h1>
        <p className="text-muted text-sm">Request and manage certificates of insurance.</p>
      </div>

      {/* Request stub */}
      <div className="glass-card p-6 mb-6">
        <h2 className="font-headline font-semibold text-text text-base mb-4">Request a Certificate</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs label-text text-muted mb-1.5">Certificate Holder Name</label>
            <input
              type="text"
              placeholder="Company or individual name"
              className="w-full bg-surface border border-primary/20 rounded-lg px-4 py-2.5 text-sm text-text placeholder-muted focus:outline-none focus:border-primary/50 transition-colors"
              disabled
            />
          </div>
          <div>
            <label className="block text-xs label-text text-muted mb-1.5">Certificate Holder Address</label>
            <input
              type="text"
              placeholder="Street address, city, state ZIP"
              className="w-full bg-surface border border-primary/20 rounded-lg px-4 py-2.5 text-sm text-text placeholder-muted focus:outline-none focus:border-primary/50 transition-colors"
              disabled
            />
          </div>
          <div className="sm:col-span-2">
            <label className="block text-xs label-text text-muted mb-1.5">Additional Insured / Notes</label>
            <textarea
              rows={3}
              placeholder="Additional notes or requirements"
              className="w-full bg-surface border border-primary/20 rounded-lg px-4 py-2.5 text-sm text-text placeholder-muted focus:outline-none focus:border-primary/50 transition-colors resize-none"
              disabled
            />
          </div>
        </div>
        <div className="mt-4 flex items-center gap-3">
          <button
            disabled
            className="primary-btn px-6 py-2.5 rounded-full text-sm font-semibold font-label opacity-50 cursor-not-allowed"
          >
            Submit Request
          </button>
          <p className="text-xs text-muted">Certificate requests coming soon — contact us at 844-967-5247</p>
        </div>
      </div>

      {/* History placeholder */}
      <div className="glass-card p-8 flex flex-col items-center text-center">
        <Award className="w-10 h-10 text-accent mb-3 opacity-50" />
        <p className="text-muted text-sm">Your issued certificates will appear here.</p>
      </div>
    </div>
  );
}
