const faqs: { q: string; a: string }[] = [
  {
    q: "VocaNova는 정말 무료인가요?",
    a: "네, 세 플랫폼 모두 무료로 시작할 수 있습니다. 학습에 필요한 핵심 기능은 모두 기본 제공됩니다.",
  },
  {
    q: "어떤 기기에서 사용할 수 있나요?",
    a: "Chrome이 동작하는 모든 데스크톱 브라우저, macOS 14(Sonoma) 이상, 그리고 iOS에서 사용할 수 있습니다. 안드로이드 버전은 추후 검토하고 있습니다.",
  },
  {
    q: "단어는 어떤 사전에서 가져오나요?",
    a: "네이버 영어 사전 데이터를 활용합니다. 발음 기호(IPA), 원어민 mp3 발음, 품사별 정의, 예문, 유의어·반의어가 함께 저장됩니다.",
  },
  {
    q: "복습 알고리즘은 어떻게 동작하나요?",
    a: "SuperMemo의 SM-2 알고리즘을 기반으로 한 간격 반복(SRS)을 사용합니다. 정답률과 ease factor에 따라 각 단어의 다음 복습 시점이 자동으로 계산됩니다.",
  },
  {
    q: "내 단어는 안전하게 보관되나요?",
    a: "Supabase의 보안 인증과 사용자별 행 단위 권한(Row Level Security)으로 본인의 단어장에만 접근할 수 있습니다. Google · Apple OAuth로 로그인합니다.",
  },
  {
    q: "오프라인에서도 학습할 수 있나요?",
    a: "iOS 앱에서는 로컬 캐시를 이용한 학습이 가능하며, 네트워크가 회복되면 학습 기록이 자동으로 동기화됩니다.",
  },
];

export function Faq() {
  return (
    <section id="faq" className="section">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">자주 묻는 질문</span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-ink-900 md:text-5xl">
            궁금한 점이 있으신가요?
          </h2>
        </div>

        <div className="mx-auto mt-12 max-w-3xl divide-y divide-ink-100 rounded-3xl border border-ink-100 bg-white">
          {faqs.map((f, i) => (
            <details
              key={f.q}
              className="group px-6 py-5 [&_summary::-webkit-details-marker]:hidden"
              open={i === 0}
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
                <span className="text-[15px] font-semibold text-ink-900 md:text-base">
                  {f.q}
                </span>
                <span className="grid h-7 w-7 shrink-0 place-items-center rounded-pill bg-ink-50 text-ink-600 transition group-open:rotate-45 group-open:bg-chip group-open:text-blue-700">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M12 5v14M5 12h14"
                      stroke="currentColor"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </summary>
              <p className="mt-3 text-[15px] leading-relaxed text-ink-600">
                {f.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
