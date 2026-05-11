export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
      >
        <defs>
          <linearGradient id="vn-grad" x1="0" y1="0" x2="32" y2="32">
            <stop offset="0%" stopColor="#4F87FE" />
            <stop offset="100%" stopColor="#2D6FF5" />
          </linearGradient>
        </defs>
        <rect width="32" height="32" rx="9" fill="url(#vn-grad)" />
        <path
          d="M8 9.5L13.2 21.5C13.45 22.05 14.05 22.4 14.65 22.4C15.25 22.4 15.85 22.05 16.1 21.5L21.3 9.5"
          stroke="white"
          strokeWidth="2.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="24" cy="9.6" r="1.7" fill="#10B981" />
      </svg>
      <span className="text-[17px] font-extrabold tracking-tight text-ink-900">
        VocaNova
      </span>
    </div>
  );
}
