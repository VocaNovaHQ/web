type Platform = {
  key: string;
  name: string;
  description: string;
  badge: string;
  available: boolean;
  href?: string;
  cta: string;
  bullets: string[];
  icon: React.ReactNode;
  gradient: string;
  qrSrc?: string;
};

const platforms: Platform[] = [
  {
    key: "chrome",
    name: "Chrome Extension",
    description:
      "웹에서 영단어를 드래그하면 즉시 사전 팝업이 뜨고, 한 번의 클릭으로 클라우드에 저장됩니다.",
    badge: "Chrome Web Store",
    available: true,
    href: "https://chromewebstore.google.com/detail/vocanova/kfgjfccpggcdbcjipgmmmkbklidieflb?pli=1",
    cta: "Chrome 웹 스토어",
    bullets: [
      "더블클릭 / 드래그 선택 캡처",
      "섀도우 DOM 기반 깔끔한 팝업",
      "원클릭 클라우드 저장",
    ],
    gradient: "from-blue-400 via-blue-500 to-blue-600",
    icon: <ChromeIcon />,
  },
  {
    key: "macos",
    name: "macOS",
    description:
      "메뉴바에 상주하며 ⌘⇧F 단축키로 어디서나 선택한 단어를 검색합니다. 사파리, PDF, 슬랙 어디서든.",
    badge: "macOS 14+",
    available: false,
    cta: "스토어 심사 중",
    bullets: [
      "시스템 전역 단축키 ⌘⇧F",
      "메뉴바 상주, Dock 미점유",
      "Apple Silicon 네이티브",
    ],
    gradient: "from-ink-700 via-ink-800 to-ink-900",
    icon: <AppleIcon />,
  },
  {
    key: "ios",
    name: "iOS",
    description:
      "저장된 단어를 SM-2 간격 반복으로 복습. 플래시카드, 발음 재생, 학습 통계를 한 화면에서.",
    badge: "App Store",
    available: true,
    href: "https://apps.apple.com/kr/app/vocanova/id6766165302",
    cta: "App Store",
    bullets: [
      "스마트 복습 (SRS)",
      "플래시카드 + 음성 재생",
      "스트릭 · 학습 통계",
    ],
    gradient: "from-emerald-400 via-blue-500 to-blue-600",
    icon: <AppleIcon />,
    qrSrc: "/qr/ios.svg",
  },
  {
    key: "android",
    name: "Android",
    description:
      "저장된 단어를 SM-2 간격 반복으로 복습. 플래시카드, 발음 재생, 학습 통계를 한 화면에서.",
    badge: "Google Play",
    available: false,
    cta: "개발 중",
    bullets: [
      "스마트 복습 (SRS)",
      "플래시카드 + 음성 재생",
      "스트릭 · 학습 통계",
    ],
    gradient: "from-emerald-400 via-green-500 to-emerald-600",
    icon: <PlayStoreIcon />,
  },
];

export function Downloads() {
  return (
    <section id="downloads" className="section relative">
      <div
        className="absolute inset-x-0 top-0 -z-10 h-80 bg-hero-glow"
        aria-hidden
      />
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">다운로드</span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-ink-900 md:text-5xl">
            지금 쓰는 기기에서 바로 시작
          </h2>
          <p className="mt-4 text-ink-600 md:text-lg">
            네 플랫폼 모두 무료로 제공됩니다. 같은 계정으로 로그인하면 단어장이
            자동으로 동기화됩니다.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-4">
          {platforms.map((p) => (
            <DownloadCard key={p.key} platform={p} />
          ))}
        </div>

        <div className="mx-auto mt-10 max-w-2xl text-center text-sm text-ink-500">
          출시 알림이 필요하신가요? 각 스토어에 등록되는 즉시 이 페이지의
          다운로드 버튼이 활성화됩니다.
        </div>
      </div>
    </section>
  );
}

function DownloadCard({ platform }: { platform: Platform }) {
  const hasQr = !!platform.qrSrc;
  return (
    <article className="card group relative overflow-hidden p-7">
      <div
        className={`absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gradient-to-br ${platform.gradient} opacity-20 blur-2xl`}
        aria-hidden
      />
      <div className="relative">
        <div className="relative">
          <div
            className={
              hasQr
                ? "transition-opacity duration-300 lg:group-hover:opacity-0"
                : ""
            }
          >
            <div className="flex items-center justify-between">
              <div
                className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${platform.gradient} text-white shadow-glow`}
              >
                {platform.icon}
              </div>
              <span
                className={`rounded-pill px-2.5 py-1 text-[11px] font-semibold ${
                  platform.available
                    ? "bg-emerald-50 text-emerald-700"
                    : "bg-ink-100 text-ink-600"
                }`}
              >
                {platform.available ? "다운로드 가능" : "Coming soon"}
              </span>
            </div>

            <div className="mt-5 text-[13px] font-semibold tracking-wide text-blue-700">
              {platform.badge}
            </div>
            <h3 className="mt-1 text-xl font-bold text-ink-900">
              {platform.name}
            </h3>
            <p className="mt-4 text-[15px] leading-relaxed text-ink-600">
              {platform.description}
            </p>

            <ul className="mt-5 space-y-2">
              {platform.bullets.map((b) => (
                <li
                  key={b}
                  className="flex items-center gap-2 text-[14px] text-ink-700"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden
                  >
                    <path
                      d="M5 12l4 4L19 6"
                      stroke="#10B981"
                      strokeWidth="2.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  {b}
                </li>
              ))}
            </ul>
          </div>

          {hasQr && (
            <div
              className="pointer-events-none absolute inset-0 hidden flex-col items-center justify-center bg-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 lg:flex"
              aria-hidden
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={platform.qrSrc}
                alt=""
                className="h-36 w-36"
              />
              <div className="mt-2 text-[12px] font-semibold text-ink-700">
                iPhone으로 스캔
              </div>
            </div>
          )}
        </div>

        <div className="mt-7">
          {platform.available && platform.href ? (
            <a
              href={platform.href}
              target="_blank"
              rel="noreferrer"
              className="btn-primary w-full"
            >
              {platform.cta}
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden
              >
                <path
                  d="M12 3v12m0 0l-4-4m4 4l4-4M5 21h14"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          ) : (
            <button
              type="button"
              disabled
              className="inline-flex w-full cursor-not-allowed items-center justify-center gap-2 rounded-pill border border-ink-200 bg-ink-50 px-5 py-3 text-sm font-semibold text-ink-500"
            >
              <span className="dot bg-warn" />
              {platform.cta}
            </button>
          )}
        </div>
      </div>
    </article>
  );
}

function ChromeIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="12" cy="12" r="3.2" stroke="currentColor" strokeWidth="1.8" />
      <path
        d="M21 12H12M14.6 18.8L10 12M9.4 5.2L14 12"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function AppleIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M16.4 12.6c0-2.1 1.7-3.1 1.8-3.1-1-1.4-2.5-1.6-3.1-1.6-1.3-.1-2.5.8-3.2.8-.7 0-1.7-.7-2.8-.7-1.5 0-2.8.8-3.6 2.2-1.5 2.7-.4 6.6 1.1 8.8.7 1.1 1.6 2.3 2.7 2.2 1.1 0 1.5-.7 2.8-.7s1.7.7 2.8.7c1.2 0 1.9-1.1 2.6-2.1.8-1.2 1.2-2.4 1.2-2.5 0 0-2.3-.9-2.3-3.4zM14.3 6.4c.6-.7 1-1.7.9-2.7-.8.1-1.9.6-2.5 1.3-.5.6-1 1.6-.9 2.6.9.1 1.9-.4 2.5-1.2z"
        fill="currentColor"
      />
    </svg>
  );
}

function PlayStoreIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M5.5 2.6c-.3.2-.5.6-.5 1v16.8c0 .4.2.8.5 1l9.3-9.4L5.5 2.6zm10.4 10.5l2.5 2.5-9.6 5.5 7.1-8zm0-2.2l-7.1-8 9.6 5.5-2.5 2.5zm4.7-.4l-2.8-1.6-2.7 2.7 2.7 2.7 2.8-1.6c.9-.5.9-1.7 0-2.2z" />
    </svg>
  );
}
