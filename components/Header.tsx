import Link from "next/link";
import { Logo } from "./Logo";

export function Header() {
  return (
    <header className="sticky top-0 z-40 w-full">
      <div className="absolute inset-0 -z-10 glass" />
      <div className="container-x flex h-16 items-center justify-between">
        <Link href="/" aria-label="VocaNova home">
          <Logo />
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          <a
            href="#features"
            className="text-sm font-medium text-ink-700 hover:text-ink-900 transition"
          >
            기능
          </a>
          <a
            href="#how"
            className="text-sm font-medium text-ink-700 hover:text-ink-900 transition"
          >
            사용방법
          </a>
          <a
            href="#downloads"
            className="text-sm font-medium text-ink-700 hover:text-ink-900 transition"
          >
            다운로드
          </a>
          <a
            href="#faq"
            className="text-sm font-medium text-ink-700 hover:text-ink-900 transition"
          >
            FAQ
          </a>
        </nav>
        <a href="#downloads" className="btn-primary text-sm">
          시작하기
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
      </div>
    </header>
  );
}
