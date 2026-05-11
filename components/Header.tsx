"use client";

import Link from "next/link";
import { useState } from "react";
import { Logo } from "./Logo";

const navItems = [
  { href: "#features", label: "기능" },
  { href: "#how", label: "사용방법" },
  { href: "#downloads", label: "다운로드" },
  { href: "#faq", label: "FAQ" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className="sticky top-0 z-40 w-full">
      <div className="absolute inset-0 -z-10 glass" />
      <div className="container-x flex h-16 items-center justify-between">
        <Link href="/" aria-label="VocaNova home" onClick={close}>
          <Logo />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-ink-700 hover:text-ink-900 transition"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="#downloads"
          className="hidden btn-primary !min-h-0 !px-4 !py-2 text-[13px] md:inline-flex"
        >
          시작하기
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden>
            <path
              d="M5 12h14M13 6l6 6-6 6"
              stroke="currentColor"
              strokeWidth="2.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>

        <button
          type="button"
          aria-label={open ? "메뉴 닫기" : "메뉴 열기"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="grid h-11 w-11 place-items-center rounded-pill text-ink-800 transition hover:bg-ink-50 md:hidden"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
            {open ? (
              <path
                d="M6 6l12 12M18 6L6 18"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
              />
            ) : (
              <path
                d="M4 7h16M4 12h16M4 17h16"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
              />
            )}
          </svg>
        </button>
      </div>

      <div
        className={`md:hidden overflow-hidden transition-[max-height,opacity] duration-300 ease-out ${
          open ? "max-h-[420px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="border-t border-ink-100 bg-white/95 backdrop-blur">
          <nav className="container-x flex flex-col py-3">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={close}
                className="flex min-h-[48px] items-center text-[15px] font-medium text-ink-800 hover:text-blue-700"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#downloads"
              onClick={close}
              className="btn-primary mt-3 mb-3 w-full text-sm"
            >
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
          </nav>
        </div>
      </div>
    </header>
  );
}
