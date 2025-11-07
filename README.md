# 포트폴리오 웹사이트 ✨

> Vite + React + TypeScript + Tailwind CSS로 만든 개인 포트폴리오 웹사이트

## 🎯 프로젝트 소개

SSAFY 12기 프론트엔드 개발자 이재백의 포트폴리오 웹사이트입니다.
3개 프로젝트 전체 수상 경험과 기술 스택, 경력을 소개합니다.

## ✨ 주요 기능

- 📱 **반응형 웹 디자인** - 모바일/태블릿/데스크톱 완벽 지원
- 🌙 **다크모드** - 라이트/다크 테마 전환
- ⚡ **빠른 성능** - Vite 번들러 사용
- 🎨 **모던한 UI** - Tailwind CSS + 그라데이션 효과
- 🔄 **부드러운 애니메이션** - 스크롤 애니메이션 및 페이드 효과

## 🛠️ 기술 스택

- **Frontend**: React 18 + TypeScript
- **Styling**: Tailwind CSS
- **Build Tool**: Vite
- **Deployment**: (배포 예정)

## 📦 설치 및 실행

### 1. 패키지 설치

```bash
npm install
```

### 2. Tailwind CSS 설치 (필요시)

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

### 3. 개발 서버 실행

```bash
npm run dev
```

브라우저에서 `http://localhost:5173` 접속

### 4. 프로덕션 빌드

```bash
npm run build
```

### 5. 빌드 미리보기

```bash
npm run preview
```

## 📁 프로젝트 구조

```
portfolio/
├── src/
│   ├── components/          # 컴포넌트
│   │   ├── Navbar.tsx      # 네비게이션 바
│   │   ├── Hero.tsx        # 메인 히어로 섹션
│   │   ├── About.tsx       # 자기소개
│   │   ├── Skills.tsx      # 기술 스택
│   │   ├── Projects.tsx    # 프로젝트 소개
│   │   ├── Experience.tsx  # 경력 및 교육
│   │   ├── Contact.tsx     # 연락처
│   │   └── Footer.tsx      # 푸터
│   ├── data/
│   │   └── portfolio.ts    # 포트폴리오 데이터
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── tailwind.config.js       # Tailwind 설정
└── package.json
```

## 🎨 섹션 구성

1. **Hero** - 메인 소개 및 CTA
2. **About** - 프로필 및 연락처 정보
3. **Skills** - 기술 스택 시각화
4. **Projects** - 3개 수상 프로젝트 상세 소개
   - 행복하개 (자율 프로젝트 우수상 2등)
   - 동행 (특화 프로젝트 우수상 1등)
   - 이집어때 (관통 프로젝트 최우수상 1등)
5. **Experience** - 교육, 경력, 수상, 자격증
6. **Contact** - 연락처 및 소셜 링크

## 🎯 주요 성과

- 📊 Grid-based Caching으로 API 호출 **80% 감소**
- ⚡ 무한 스크롤 최적화로 로딩 시간 **57% 단축**
- 🔄 Electron IPC 통신으로 **50ms 이내** 실시간 동기화
- 🏆 SSAFY 프로젝트 **3개 전체 수상**

## 📝 데이터 수정 방법

`src/data/portfolio.ts` 파일에서 모든 데이터를 수정할 수 있습니다:

- `personalInfo`: 개인 정보 및 연락처
- `skills`: 기술 스택 및 숙련도
- `projects`: 프로젝트 상세 정보
- `experience`: 경력 및 교육
- `awards`: 수상 내역
- `certificates`: 자격증

## 🎨 커스터마이징

### 색상 변경

`tailwind.config.js`에서 primary 색상 변경:

```js
theme: {
  extend: {
    colors: {
      primary: {
        // 원하는 색상으로 변경
      },
    },
  },
},
```

### 다크모드 기본값 변경

`src/components/Navbar.tsx`에서 초기값 변경:

```tsx
const [darkMode, setDarkMode] = useState(true); // true로 변경
```

## 📄 라이선스

MIT License

## 👤 작성자

**이재백**
- Email: dbswlrla112@naver.com
- GitHub: [링크]
- Blog: [링크]

---

Built with ❤️ using React + TypeScript + Tailwind CSS
