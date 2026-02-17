interface SonnaraLogoProps {
  /** Icon size in px */
  size?: number;
  className?: string;
}

/** Sonnara music note icon — used in Sidebar header and loading screens. */
export function SonnaraLogoIcon({ size = 24, className }: SonnaraLogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M12 3v10.55A4 4 0 1 0 14 17V7h4V3h-6z" />
    </svg>
  );
}

/** Full Sonnara wordmark with icon + text, used in Sidebar. */
export function SonnaraWordmark() {
  return (
    <div className="flex items-center gap-2.5 text-sn-text">
      <div className="w-10 h-10 bg-sn-brand rounded-full flex items-center justify-center flex-shrink-0"
           style={{ background: 'var(--sn-gradient-brand)' }}>
        <SonnaraLogoIcon size={20} className="text-sn-text" />
      </div>
      <span className="text-xl font-bold tracking-tight">Sonnara</span>
    </div>
  );
}
