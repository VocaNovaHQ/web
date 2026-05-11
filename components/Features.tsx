export function Features() {
  return (
    <section id="features" className="section bg-ink-50/60">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">핵심 기능</span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-ink-900 md:text-5xl">
            잊지 않게 만드는 모든 디테일
          </h2>
          <p className="mt-4 text-ink-600 md:text-lg">
            평범한 단어장이 아닙니다. 발견의 마찰을 줄이고, 복습을 즐겁게 만드는
            기능들로 채워졌습니다.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Feature
            title="시스템 전역 단축키"
            body="맥에서는 ⌘⇧F 한 번으로 어떤 앱이든 선택한 영단어를 바로 사전 팝업으로 띄웁니다."
            icon={
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path
                  d="M6 4h12v4h-3v8h3v4H6v-4h3V8H6V4z"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinejoin="round"
                />
              </svg>
            }
          />
          <Feature
            title="섀도우 DOM 팝업"
            body="크롬 확장에서 단어를 드래그하면 어떤 사이트의 CSS와도 충돌하지 않는 깔끔한 사전 팝업이 뜹니다."
            icon={
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <rect
                  x="3"
                  y="4"
                  width="18"
                  height="14"
                  rx="2"
                  stroke="currentColor"
                  strokeWidth="1.8"
                />
                <path
                  d="M7 9h6M7 12h10M7 15h4"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
              </svg>
            }
          />
          <Feature
            title="네이버 사전 데이터"
            body="발음 기호(IPA), 원어민 mp3 발음, 품사별 정의, 예문, 유의어·반의어까지 신뢰할 수 있는 사전 소스로."
            icon={
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path
                  d="M4 5a2 2 0 012-2h8l6 6v10a2 2 0 01-2 2H6a2 2 0 01-2-2V5z"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinejoin="round"
                />
                <path
                  d="M14 3v6h6"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinejoin="round"
                />
              </svg>
            }
          />
          <Feature
            title="SM-2 간격 반복"
            body="잊을 만한 타이밍에 정확히 다시 보여주는 검증된 알고리즘. 적게 보고 더 오래 기억합니다."
            icon={
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path
                  d="M3 12a9 9 0 1015.3-6.4M21 4v5h-5"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            }
          />
          <Feature
            title="학습 통계 & 스트릭"
            body="누적 학습 단어, 연속 학습일, 일일 통계까지. 작은 성취가 매일의 습관을 만듭니다."
            icon={
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path
                  d="M4 19V9m6 10V5m6 14v-7"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            }
          />
          <Feature
            title="복습 알림"
            body="공부할 시간이 되면 가볍게 알려드립니다. 잊기 전에, 딱 필요한 만큼만."
            icon={
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path
                  d="M6 8a6 6 0 0112 0v4l2 3H4l2-3V8z"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinejoin="round"
                />
                <path
                  d="M10 18a2 2 0 004 0"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
              </svg>
            }
          />
        </div>
      </div>
    </section>
  );
}

function Feature({
  title,
  body,
  icon,
}: {
  title: string;
  body: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="card p-6">
      <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-chip text-blue-700">
        {icon}
      </div>
      <h3 className="mt-4 text-lg font-bold text-ink-900">{title}</h3>
      <p className="mt-2 text-[15px] leading-relaxed text-ink-600">{body}</p>
    </div>
  );
}
