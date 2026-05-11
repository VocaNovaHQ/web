import type { Metadata } from "next";
import { Source_Serif_4 } from "next/font/google";
import "./globals.css";

const serif = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.vocanova.online"),
  title: "VocaNova — 영어 단어, 한 번에 잡다",
  description:
    "웹에서 만난 영단어를 한 번의 클릭으로 저장하고, 모바일에서 스마트한 복습으로 완전히 내 것으로. iOS · macOS · Chrome 확장 프로그램.",
  keywords: [
    "영단어",
    "영어 학습",
    "VocaNova",
    "단어장",
    "Chrome Extension",
    "iOS 앱",
    "macOS 앱",
    "SRS",
    "Spaced Repetition",
  ],
  authors: [{ name: "VocaNova" }],
  openGraph: {
    title: "VocaNova — 영어 단어, 한 번에 잡다",
    description:
      "웹·맥·아이폰을 가로지르는 영단어 학습 플랫폼. 저장은 데스크톱에서, 학습은 모바일에서.",
    type: "website",
    siteName: "VocaNova",
    locale: "ko_KR",
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    title: "VocaNova — 영어 단어, 한 번에 잡다",
    description:
      "웹·맥·아이폰을 가로지르는 영단어 학습 플랫폼. 저장은 데스크톱에서, 학습은 모바일에서.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" className={serif.variable}>
      <body>{children}</body>
    </html>
  );
}
