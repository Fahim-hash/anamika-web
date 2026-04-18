import React from 'react';
import { Mail, Clock, ShieldCheck } from 'lucide-react';

export default function DomainReserved() {
  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="max-w-md w-full bg-white shadow-2xl rounded-3xl p-8 text-center border border-gray-100">
        
        {/* Icon Header */}
        <div className="flex justify-center mb-6">
          <div className="p-4 bg-blue-50 rounded-full">
            <ShieldCheck className="w-12 h-12 text-blue-600" />
          </div>
        </div>

        {/* Branding */}
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Relax Studio</h1>
        <p className="text-gray-500 font-medium tracking-wide uppercase text-sm mb-8">
          Domain Reserved
        </p>

        {/* Message */}
        <div className="space-y-4 mb-8">
          <p className="text-gray-600">
            This domain has been reserved for <strong>Relax Studio</strong>. 
            We are currently working on something exciting. Stay tuned!
          </p>
        </div>

        {/* Footer / Contact */}
        <div className="pt-8 border-t border-gray-100 flex items-center justify-center gap-2 text-gray-400">
          <Mail className="w-4 h-4" />
          <a href="mailto:info@relaxstudio.com" className="text-sm hover:text-blue-600 transition-colors">
            info@relaxstudio.com
          </a>
        </div>
      </div>
    </main>
  );
}
