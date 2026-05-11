import { WordCardPreview } from "./WordCardPreview";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-grid" aria-hidden />
      <div className="absolute inset-0 -z-10 bg-noise" aria-hidden />

      <div className="container-x relative pt-20 pb-24 md:pt-28 md:pb-32">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-7">
            <div className="animate-fadeUp">
              <span className="eyebrow">
                <span className="dot bg-success" />
                iOS · macOS · Chrome 한 번에
              </span>
            </div>

            <h1
              className="mt-6 text-[40px] font-extrabold leading-[1.08] tracking-tight text-ink-900 md:text-[64px] animate-fadeUp"
              style={{ animationDelay: "60ms" }}
            >
              영어 단어,
              <br className="hidden md:block" />{" "}
              <span className="text-gradient">한 번에 잡다.</span>
            </h1>

            <p
              className="mt-6 max-w-xl text-base leading-relaxed text-ink-600 md:text-lg animate-fadeUp"
              style={{ animationDelay: "120ms" }}
            >
              브라우저에서 만난 영단어를 한 번의 클릭으로 저장하고,
              모바일에서는 스마트한 복습 알고리즘으로 완전히 내 것으로 만듭니다.
              데스크톱에서 수집하고, 손 안에서 학습하세요.
            </p>

            <div
              className="mt-9 flex flex-wrap items-center gap-3 animate-fadeUp"
              style={{ animationDelay: "180ms" }}
            >
              <a href="#downloads" className="btn-primary">
                무료로 시작하기
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden>
                  <path
                    d="M5 12h14M13 6l6 6-6 6"
                    stroke="currentColor"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
              <a href="#how" className="btn-ghost">
                사용 방법 보기
              </a>
            </div>

            <div
              className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-ink-500 animate-fadeUp"
              style={{ animationDelay: "240ms" }}
            >
              <Stat label="플랫폼" value="3개" />
              <span className="hidden h-3 w-px bg-ink-200 md:inline-block" />
              <Stat label="복습 알고리즘" value="SM-2 기반" />
              <span className="hidden h-3 w-px bg-ink-200 md:inline-block" />
              <Stat label="실시간 동기화" value="Supabase Cloud" />
            </div>
          </div>

          <div
            className="relative lg:col-span-5 animate-fadeUp"
            style={{ animationDelay: "300ms" }}
          >
            <div className="absolute -inset-10 -z-10 bg-hero-glow" aria-hidden />
            <WordCardPreview />
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-baseline gap-2">
      <span className="text-ink-900 font-semibold">{value}</span>
      <span className="text-ink-500">{label}</span>
    </div>
  );
}
