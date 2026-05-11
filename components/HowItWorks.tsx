export function HowItWorks() {
  return (
    <section id="how" className="section relative">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">사용 방법</span>
          <h2 className="mt-4 text-3xl font-extrabold leading-[1.15] tracking-tight text-ink-900 md:text-5xl">
            저장은 데스크톱,
            <br />
            <span className="text-gradient">학습은 손 안에서</span>
          </h2>
          <p className="mt-4 text-ink-600 md:text-lg lg:whitespace-nowrap">
            세 가지 플랫폼이 하나의 클라우드로 매끄럽게 이어집니다. 발견부터
            완전한 습득까지, 단 세 걸음.
          </p>
        </div>

        <ol className="mt-14 grid gap-6 md:grid-cols-3">
          <Step
            n="01"
            title="만나면 바로 조회"
            body={
              <>
                웹에서 모르는 단어를 만나면 더블클릭, 맥에서는{" "}
                <span className="kbd">⌘</span>
                <span className="mx-0.5">+</span>
                <span className="kbd">⇧</span>
                <span className="mx-0.5">+</span>
                <span className="kbd">F</span>로 어떤 앱에서든 즉시 사전을
                불러옵니다.
              </>
            }
            accent="from-blue-400 to-blue-500"
            icon={
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                <path
                  d="M11 4a7 7 0 105.5 11.3l4.6 4.6 1.4-1.4-4.6-4.6A7 7 0 0011 4zm0 2a5 5 0 110 10 5 5 0 010-10z"
                  fill="currentColor"
                />
              </svg>
            }
          />
          <Step
            n="02"
            title="클라우드에 저장"
            body={
              <>
                구글 또는 애플 로그인 한 번이면 끝. 발음, 뜻, 예문이 함께
                저장되고, 사용 중인 모든 기기에 즉시 동기화됩니다.
              </>
            }
            accent="from-blue-500 to-blue-600"
            icon={
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                <path
                  d="M6 18a4 4 0 010-8c.13 0 .26.01.4.02A6 6 0 0118 10h.5a3.5 3.5 0 010 7H6z"
                  fill="currentColor"
                />
                <path
                  d="M12 11v6M9 14l3 3 3-3"
                  stroke="white"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            }
          />
          <Step
            n="03"
            title="스마트 복습"
            body={
              <>
                SM-2 기반 간격 반복(SRS)으로 잊을 만한 시점에 정확히 다시
                만납니다. 플래시카드·발음·통계까지 손 안에서.
              </>
            }
            accent="from-emerald-400 to-emerald-500"
            icon={
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                <path
                  d="M12 2a10 10 0 100 20 10 10 0 000-20zm1 5v6l5 3-1 1.7-6-3.5V7h2z"
                  fill="currentColor"
                />
              </svg>
            }
          />
        </ol>
      </div>
    </section>
  );
}

function Step({
  n,
  title,
  body,
  accent,
  icon,
}: {
  n: string;
  title: string;
  body: React.ReactNode;
  accent: string;
  icon: React.ReactNode;
}) {
  return (
    <li className="card relative p-7">
      <div className="flex items-center justify-between gap-3">
        <div className="flex min-w-0 items-center gap-3">
          <div
            className={`inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${accent} text-white shadow-glow`}
          >
            {icon}
          </div>
          <h3 className="truncate text-xl font-bold text-ink-900">{title}</h3>
        </div>
        <span className="shrink-0 text-xs font-bold tracking-wider text-ink-400">
          {n}
        </span>
      </div>
      <p className="mt-4 text-[15px] leading-relaxed text-ink-600">{body}</p>
    </li>
  );
}
