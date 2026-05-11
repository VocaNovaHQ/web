export function WordCardPreview() {
  return (
    <div className="relative mx-auto w-full max-w-[440px]">
      {/* Floating chips */}
      <div className="pointer-events-none absolute -left-6 -top-4 z-20 hidden md:block">
        <FloatingPill color="bg-success" text="저장 완료" delay="0ms" />
      </div>
      <div className="pointer-events-none absolute -right-2 top-24 z-20 hidden md:block">
        <FloatingPill color="bg-blue-500" text="예문 3개" delay="800ms" />
      </div>

      {/* Main card */}
      <div className="relative rounded-[24px] bg-white p-5 shadow-ring animate-floaty sm:p-6 md:p-7">
        {/* header */}
        <div className="flex items-start justify-between gap-4">
          <div className="text-[28px] font-extrabold leading-none tracking-tight text-ink-900 sm:text-[34px]">
            superior
          </div>
          <button
            type="button"
            className="inline-flex shrink-0 items-center gap-1 rounded-pill bg-blue-600 px-3.5 py-2 text-[12px] font-semibold text-white shadow-glow transition hover:bg-blue-700"
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden>
              <path
                d="M12 5v14M5 12h14"
                stroke="currentColor"
                strokeWidth="2.6"
                strokeLinecap="round"
              />
            </svg>
            단어장에 저장
          </button>
        </div>

        {/* pronunciations */}
        <div className="mt-4 space-y-2">
          <PronRow region="미국식" ipa="suːˈpɪriə(r)" />
          <PronRow region="영국식" ipa="suːˈpɪəriə(r); sjuːˈpɪəriə(r)" />
        </div>

        {/* adjective */}
        <PosBadge>형용사</PosBadge>
        <ol className="mt-3 space-y-4">
          <Definition n={1} text="(…보다 더) 우수한[우세한/우월한]" antonym="inferior">
            <Example en={["vastly ", { hl: "superior" }]} ko="훨씬 우수한" />
          </Definition>
          <Definition n={2} text="상관의, 상급의" antonym="inferior">
            <Example
              en={["my ", { hl: "superior" }, " officer"]}
              ko="나보다 상급 장교"
            />
          </Definition>
        </ol>

        {/* noun — desktop/tablet only to keep mobile card compact */}
        <div className="hidden md:block">
          <PosBadge>명사</PosBadge>
          <ol className="mt-3 space-y-4">
            <Definition n={3} text="윗사람, 선배, 상급자, 상관" antonym="inferior">
              <Example
                en={["your social ", { hl: "superiors" }]}
                ko="사회생활에서의 윗사람들[선배들]"
              />
            </Definition>
          </ol>
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

function PronRow({ region, ipa }: { region: string; ipa: string }) {
  return (
    <div className="flex items-center gap-2">
      <span className="w-10 shrink-0 text-[12px] text-ink-400">{region}</span>
      <span className="font-mono text-[13px] text-ink-700">[{ipa}]</span>
      <button
        type="button"
        aria-label={`${region} 발음 듣기`}
        className="grid h-6 w-6 shrink-0 place-items-center rounded-pill bg-chip text-blue-700 transition hover:bg-blue-100"
      >
        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" aria-hidden>
          <path
            d="M3 10v4a1 1 0 001 1h3l5 4V5L7 9H4a1 1 0 00-1 1z"
            fill="currentColor"
          />
          <path
            d="M16.5 8.5a5 5 0 010 7"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
        </svg>
      </button>
    </div>
  );
}

function PosBadge({ children }: { children: React.ReactNode }) {
  return (
    <div className="mt-5 inline-flex rounded-md bg-chip px-2 py-1 text-[12px] font-semibold text-blue-700">
      {children}
    </div>
  );
}

function Definition({
  n,
  text,
  antonym,
  children,
}: {
  n: number;
  text: string;
  antonym?: string;
  children: React.ReactNode;
}) {
  return (
    <li className="pl-1">
      <div className="flex gap-2 text-[14px] leading-relaxed text-ink-800">
        <span className="shrink-0 font-semibold text-blue-700">{n}.</span>
        <span>
          {text}
          {antonym && (
            <span className="ml-1 text-ink-500">
              (↔
              <span className="text-blue-700">{antonym}</span>)
            </span>
          )}
        </span>
      </div>
      <div className="mt-2 pl-5">{children}</div>
    </li>
  );
}

type EnPart = string | { hl: string };

function Example({ en, ko }: { en: EnPart[]; ko: string }) {
  return (
    <div className="rounded-r-lg border-l-[3px] border-blue-300 bg-ink-50/70 px-3.5 py-2.5">
      <div className="font-serif text-[14px] italic text-ink-700">
        {en.map((part, i) =>
          typeof part === "string" ? (
            <span key={i}>{part}</span>
          ) : (
            <span key={i} className="font-bold text-blue-700">
              {part.hl}
            </span>
          ),
        )}
      </div>
      <div className="mt-0.5 text-[13px] text-ink-500">{ko}</div>
    </div>
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
