import React from 'react';
import { Shield } from 'lucide-react';

function GlobalHighlightBar() {
  return (
    <div className=" z-[60] bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 py-1">
        <div className="flex items-center justify-center space-x-2 text-center">
          <Shield className="w-4 h-4 text-yellow-400 flex-shrink-0" />
          <span className="text-white font-bold text-sm">
            🔒 Protected by OVH Firewall – 17 Tbps DDoS Mitigation | Enterprise Security | 24/7 Uptime
          </span>
        </div>
      </div>
    </div>
  );
}

export default GlobalHighlightBar;