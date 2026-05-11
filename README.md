# vocanova-web

VocaNova의 공식 랜딩 페이지입니다. iOS · macOS · Chrome 확장 프로그램의 소개와
다운로드 진입점을 제공합니다.

## 기술 스택

- Next.js 15 (App Router)
- React 19
- TypeScript
- Tailwind CSS 3
- Pretendard / Source Serif 4 (next/font + CDN)

## 개발

```bash
npm install
npm run dev
# http://localhost:3000
```

## 빌드

```bash
npm run build
npm start
```

## 디렉터리

```
app/
  layout.tsx       # 루트 레이아웃 (폰트, 메타데이터)
  page.tsx         # 랜딩 페이지 조립
  globals.css      # 전역 스타일, 유틸 클래스
components/
  Header.tsx
  Hero.tsx
  WordCardPreview.tsx
  HowItWorks.tsx
  Features.tsx
  SyncBand.tsx
  Downloads.tsx    # 각 플랫폼별 다운로드 카드 (링크 자리 표시)
  Faq.tsx
  Footer.tsx
  Logo.tsx
```

## 다운로드 링크 연결

`components/Downloads.tsx`의 `platforms` 배열에서 각 플랫폼의 `available`을 `true`로
바꾸고 `href`에 스토어 URL을 넣으면 버튼이 활성화됩니다.

- Chrome Web Store URL
- macOS DMG 다운로드 URL (또는 배포 페이지)
- App Store URL
