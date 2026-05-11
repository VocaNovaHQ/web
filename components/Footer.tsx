import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="border-t border-ink-100 bg-white">
      <div className="container-x py-14">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <Logo />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-ink-500">
              브라우저에서 만난 영단어를 데스크톱에서 캡처하고, 손 안에서 학습하는
              가장 매끄러운 방법.
            </p>
          </div>

          <FooterCol
            title="제품"
            links={[
              { label: "기능", href: "#features" },
              { label: "사용 방법", href: "#how" },
              { label: "다운로드", href: "#downloads" },
              { label: "FAQ", href: "#faq" },
            ]}
          />
          <FooterCol
            title="플랫폼"
            links={[
              { label: "Chrome 확장", href: "#downloads" },
              { label: "macOS", href: "#downloads" },
              { label: "iOS", href: "#downloads" },
            ]}
          />
          <FooterCol
            title="회사"
            links={[
              { label: "문의하기", href: "mailto:hello@vocanova.app" },
              { label: "개인정보처리방침", href: "#" },
              { label: "이용약관", href: "#" },
            ]}
          />
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-ink-100 pt-6 text-xs text-ink-500 md:flex-row">
          <div>© {new Date().getFullYear()} VocaNova. All rights reserved.</div>
          <div className="flex items-center gap-1.5">
            <span className="dot bg-success" />
            Made with care for English learners.
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div className="md:col-span-2">
      <h4 className="text-xs font-bold uppercase tracking-wider text-ink-500">
        {title}
      </h4>
      <ul className="mt-4 space-y-2.5">
        {links.map((l) => (
          <li key={l.label}>
            <a
              href={l.href}
              className="text-sm text-ink-700 transition hover:text-ink-900"
            >
              {l.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
