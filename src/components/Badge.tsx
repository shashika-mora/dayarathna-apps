import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'status' | 'platform' | 'category' | 'muted';
  status?: string;
  className?: string;
}

export default function Badge({
  children,
  variant = 'muted',
  status,
  className = '',
}: BadgeProps) {
  let colorClasses = 'border-white/10 bg-white/[0.03] text-slate-300';

  if (variant === 'status') {
    if (status === 'Stable') {
      colorClasses = 'border-emerald-500/30 bg-emerald-500/10 text-emerald-300';
    } else if (status === 'In development') {
      colorClasses = 'border-amber-500/30 bg-amber-500/10 text-amber-300';
    } else if (status === 'Beta' || status === 'Preview') {
      colorClasses = 'border-sky-500/30 bg-sky-500/10 text-sky-300';
    } else {
      colorClasses = 'border-slate-500/30 bg-slate-500/10 text-slate-300';
    }
  } else if (variant === 'platform') {
    colorClasses = 'border-blue-400/25 bg-blue-500/10 text-blue-200';
  } else if (variant === 'category') {
    colorClasses = 'border-indigo-400/20 bg-indigo-500/10 text-indigo-200';
  }

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-mono tracking-wide rounded-full border transition-colors ${colorClasses} ${className}`}
    >
      {variant === 'status' && (
        <span
          className={`w-1.5 h-1.5 rounded-full ${
            status === 'Stable'
              ? 'bg-emerald-400'
              : status === 'In development'
              ? 'bg-amber-400 animate-pulse'
              : 'bg-sky-400'
          }`}
          aria-hidden="true"
        />
      )}
      {children}
    </span>
  );
}
