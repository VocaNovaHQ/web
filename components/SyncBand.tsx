export function SyncBand() {
  return (
    <section className="section relative overflow-hidden">
      <div className="container-x">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-ink-900 via-ink-800 to-blue-900 p-10 text-white md:p-16">
          <div
            className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-blue-500/30 blur-3xl"
            aria-hidden
          />
          <div
            className="absolute -bottom-24 -left-10 h-72 w-72 rounded-full bg-emerald-400/20 blur-3xl"
            aria-hidden
          />

          <div className="relative grid items-center gap-10 lg:grid-cols-2">
            <div>
              <span className="inline-flex items-center gap-2 rounded-pill bg-white/10 px-3 py-1.5 text-xs font-semibold text-blue-100 backdrop-blur">
                <span className="dot bg-success" />
                실시간 동기화
              </span>
              <h2 className="mt-5 text-3xl font-extrabold tracking-tight md:text-5xl">
                하나의 계정,
                <br />
                <span className="text-blue-200">세 개의 기기.</span>
              </h2>
              <p className="mt-5 max-w-xl text-blue-100/90 md:text-lg">
                Google 또는 Apple 로그인 한 번으로 충분합니다. 맥에서 저장한
                단어가 아이폰에서, 크롬에서 본 예문이 맥북에서 즉시 보입니다.
                Supabase 클라우드가 모든 변경을 실시간으로 이어 줍니다.
              </p>

              <div className="mt-7 flex flex-wrap items-center gap-3">
                <a
                  href="#downloads"
                  className="inline-flex items-center gap-2 rounded-pill bg-white px-5 py-3 text-sm font-semibold text-ink-900 transition hover:bg-blue-50"
                >
                  지금 시작하기
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M5 12h14M13 6l6 6-6 6"
                      stroke="currentColor"
                      strokeWidth="2.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
                <a
                  href="#faq"
                  className="inline-flex items-center gap-2 rounded-pill border border-white/20 px-5 py-3 text-sm font-semibold text-white/90 transition hover:bg-white/10"
                >
                  자주 묻는 질문
                </a>
              </div>
            </div>

            <SyncDiagram />
          </div>
        </div>
      </div>
    </section>
  );
}

function SyncDiagram() {
  return (
    <div className="relative mx-auto aspect-[5/4] w-full max-w-md">
      {/* center cloud */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-3xl bg-white/95 px-6 py-5 text-center shadow-glow">
        <div className="mx-auto inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-400 to-blue-600 text-white">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
            <path
              d="M6 18a4 4 0 010-8c.13 0 .26.01.4.02A6 6 0 0118 10h.5a3.5 3.5 0 010 7H6z"
              fill="currentColor"
            />
          </svg>
        </div>
        <div className="mt-2 text-sm font-bold text-ink-900">VocaNova Cloud</div>
        <div className="text-xs text-ink-500">실시간 동기화</div>
      </div>

      {/* nodes */}
      <DiagramNode label="Chrome" sub="확장 프로그램" pos="top-2 left-2" />
      <DiagramNode label="macOS" sub="메뉴바 앱" pos="top-2 right-2" />
      <DiagramNode label="iOS" sub="학습 앱" pos="bottom-2 left-1/2 -translate-x-1/2" />

      {/* connectors */}
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full text-blue-300"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        aria-hidden
      >
        <g
          stroke="currentColor"
          strokeWidth="0.4"
          strokeDasharray="1.2 1.2"
          fill="none"
        >
          <line x1="18" y1="18" x2="50" y2="50" />
          <line x1="82" y1="18" x2="50" y2="50" />
          <line x1="50" y1="50" x2="50" y2="84" />
        </g>
      </svg>
    </div>
  );
}

function DiagramNode({
  label,
  sub,
  pos,
}: {
  label: string;
  sub: string;
  pos: string;
}) {
  return (
    <div
      className={`absolute ${pos} flex items-center gap-2 rounded-2xl bg-white/95 px-3 py-2 shadow-soft`}
    >
      <span className="grid h-7 w-7 place-items-center rounded-lg bg-chip text-blue-700 text-[11px] font-bold">
        {label[0]}
      </span>
      <div className="text-left">
        <div className="text-[12px] font-bold text-ink-900 leading-none">
          {label}
        </div>
        <div className="text-[10px] text-ink-500 leading-tight">{sub}</div>
      </div>
    </div>
  );
}
