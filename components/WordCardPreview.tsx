export function WordCardPreview() {
  return (
    <div className="relative mx-auto w-full max-w-[440px]">
      {/* Floating chips */}
      <div className="pointer-events-none absolute -left-6 -top-4 z-20 hidden md:block">
        <FloatingPill
          color="bg-success"
          text="저장 완료"
          delay="0ms"
        />
      </div>
      <div className="pointer-events-none absolute -right-2 top-24 z-20 hidden md:block">
        <FloatingPill
          color="bg-blue-500"
          text="복습 +1"
          delay="800ms"
        />
      </div>

      {/* Main card */}
      <div className="relative rounded-[28px] bg-white p-7 shadow-ring animate-floaty">
        {/* top bar */}
        <div className="mb-5 flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs font-semibold text-ink-500">
            <span className="dot bg-success" />
            오늘의 단어
          </div>
          <button
            type="button"
            aria-label="발음 듣기"
            className="grid h-9 w-9 place-items-center rounded-pill bg-chip text-blue-700 transition hover:bg-blue-100"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path
                d="M3 10v4a1 1 0 001 1h3l5 4V5L7 9H4a1 1 0 00-1 1z"
                fill="currentColor"
              />
              <path
                d="M16.5 8.5a5 5 0 010 7M19 6a8.5 8.5 0 010 12"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>

        {/* word */}
        <div className="serif text-[44px] font-extrabold leading-[1.05] tracking-tight text-ink-900">
          ephemeral
        </div>
        <div className="mt-1 text-sm text-ink-500 serif italic">
          /ɪˈfem.ər.əl/ · adj.
        </div>

        {/* meaning */}
        <div className="mt-5 rounded-2xl bg-ink-50 p-4">
          <div className="text-[13px] font-semibold text-ink-500 mb-1.5 uppercase tracking-wide">
            뜻
          </div>
          <div className="text-[15px] leading-relaxed text-ink-800">
            덧없는, 단명하는; 짧은 시간만 지속되는
          </div>
        </div>

        {/* example */}
        <div className="mt-4 rounded-2xl border border-blue-100 bg-blue-50/50 p-4">
          <div className="text-[13px] font-semibold text-blue-700 mb-1.5 uppercase tracking-wide">
            예문
          </div>
          <div className="serif italic text-[15px] leading-relaxed text-ink-800">
            “Beauty is ephemeral, but kindness endures.”
          </div>
        </div>

        {/* SRS buttons */}
        <div className="mt-6 grid grid-cols-3 gap-2.5">
          <SrsButton tone="danger" label="다시" sub="<1m" />
          <SrsButton tone="warn" label="어려움" sub="10m" />
          <SrsButton tone="success" label="쉬움" sub="3d" />
        </div>

        {/* footer */}
        <div className="mt-5 flex items-center justify-between text-xs text-ink-500">
          <div className="flex items-center gap-1.5">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden>
              <path
                d="M12 2l2.39 6.94H22l-6.18 4.49L18.18 22 12 17.51 5.82 22l2.36-8.57L2 8.94h7.61z"
                fill="#F59E0B"
              />
            </svg>
            7일 연속 학습 중
          </div>
          <div className="text-blue-700 font-semibold">12 / 20 카드</div>
        </div>

        {/* progress */}
        <div className="mt-2 h-1.5 w-full overflow-hidden rounded-pill bg-ink-100">
          <div
            className="h-full rounded-pill bg-gradient-to-r from-blue-400 to-blue-500"
            style={{ width: "60%" }}
          />
        </div>
      </div>

      {/* Backdrop card stack */}
      <div
        className="absolute -bottom-3 left-3 right-3 -z-10 h-12 rounded-[28px] bg-white/60 shadow-soft"
        aria-hidden
      />
      <div
        className="absolute -bottom-6 left-6 right-6 -z-20 h-12 rounded-[28px] bg-white/40 shadow-soft"
        aria-hidden
      />
    </div>
  );
}

function SrsButton({
  tone,
  label,
  sub,
}: {
  tone: "danger" | "warn" | "success";
  label: string;
  sub: string;
}) {
  const toneMap = {
    danger:
      "bg-red-50 text-red-700 hover:bg-red-100 border-red-100",
    warn: "bg-amber-50 text-amber-700 hover:bg-amber-100 border-amber-100",
    success:
      "bg-emerald-50 text-emerald-700 hover:bg-emerald-100 border-emerald-100",
  } as const;
  return (
    <button
      type="button"
      className={`flex flex-col items-center justify-center rounded-2xl border px-3 py-3 transition ${toneMap[tone]}`}
    >
      <span className="text-[14px] font-bold">{label}</span>
      <span className="mt-0.5 text-[11px] opacity-80">{sub}</span>
    </button>
  );
}

function FloatingPill({
  color,
  text,
  delay,
}: {
  color: string;
  text: string;
  delay: string;
}) {
  return (
    <div
      className="flex items-center gap-2 rounded-pill bg-white px-3 py-1.5 text-xs font-semibold text-ink-800 shadow-soft animate-floaty"
      style={{ animationDelay: delay }}
    >
      <span className={`dot ${color}`} />
      {text}
    </div>
  );
}
