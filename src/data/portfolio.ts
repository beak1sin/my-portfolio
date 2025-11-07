export const personalInfo = {
  name: '이재백',
  title: '배움에 두려움이 없는 프론트엔드 개발자',
  description: 'SSAFY 12기에서 3개 프로젝트 전체 수상 | 성능 최적화와 사용자 경험에 집중하는 개발자',
  email: 'dbswlrla112@naver.com',
  phone: '010-2395-6787',
  location: '서울특별시 강남구 개포동',
  github: 'https://github.com/beak1sin',
  blog: 'https://velog.io/@dbswlrla112/posts',
  notion: 'https://www.notion.so/af5987f862c944f89dcc44416df22ccb?pvs=32',
};

export const skills = [
  {
    category: 'Frontend',
    items: [
      { name: 'JavaScript', level: 85, description: '웹 개발에 필요한 HTML, CSS와 함께 학습 후 프로젝트 개발 경험' },
      { name: 'React.js', level: 90, description: 'Tanstack Query, Zustand, Axios, Tailwind CSS, Shadcn UI 등 라이브러리 사용 경험' },
      { name: 'TypeScript', level: 85, description: '타입, 인터페이스, 제네릭 등 명확하고 체계적인 코드 작성 경험' },
      { name: 'Next.js', level: 75, description: 'CSR 외 SSR, ISR 등 다양한 렌더링 방식 학습 및 앱 라우터 기반 프로젝트 경험' },
    ],
  },
  {
    category: 'Tools',
    items: [
      { name: 'Git', level: 85, description: '협업 코드 관리, MR 브랜치 경험' },
      { name: 'Jira', level: 80, description: '애자일 이슈 및 스프린트 관리, Git Jira 연동' },
      { name: 'Figma', level: 75, description: 'Auto Layout 활용, 와이어프레임 및 목업 제작 경험' },
    ],
  },
];

export const projects = [
  {
    id: 'hangbokdog',
    title: '행복하개 (hangbokdog)',
    subtitle: 'SSAFY 자율 프로젝트 우수상(2등)',
    period: '2025.04.14 ~ 2025.05.22 (6주)',
    team: '4명 (FE: 2명, BE: 2명)',
    role: '기획 및 설계, UI/UX 디자인, 프론트엔드 개발 (기여도 50%)',
    description: '유기견 보호소의 입양·임보, 봉사, 강아지 관리를 통합해 운영 효율과 소통을 향상시키는 웹앱 플랫폼',
    logo: '/src/assets/logo/logo_hangbokdog.svg',
    techStack: ['TypeScript', 'React', 'Tailwind CSS', 'Shadcn UI', 'Tanstack Query', 'Zustand', 'Axios', 'FCM'],
    features: [
      '보호소(센터) 등록 및 관리',
      '역할 기반 회원가입 및 승인 시스템',
      '봉사 및 입양/임시보호 신청',
      '관리자 전용 통합 대시보드',
      '보호소 통계 및 커뮤니티 기능',
    ],
    achievements: [
      'FCM 기반 실시간 알림 시스템 구축',
      '무한 스크롤 최적화로 로딩 시간 57% 단축',
      '메모리 사용량 13% 절감',
      'TanStack Query 낙관적 업데이트 적용',
      'Zustand로 관심사 분리된 상태 관리 아키텍처 설계',
    ],
    github: 'https://github.com/hangbokdog/hangbokdog',
    demo: '',
  },
  {
    id: 'donghang',
    title: '동행 (donghang)',
    subtitle: 'SSAFY 특화 프로젝트 우수상(1등)',
    period: '2025.02.24 ~ 2025.04.11 (7주)',
    team: '6명 (FE: 2명, BE: 3명, AI: 1명)',
    role: '기획 및 설계, UI/UX 디자인, Electron 기반 아키텍처 설계 및 IPC 통신 구현 (기여도 50%)',
    description: '시니어를 위한 쉽고 편한 AI 기반 뱅킹 키오스크',
    logo: '/src/assets/logo/logo_donghang.svg',
    techStack: ['Electron', 'TypeScript', 'React', 'Tanstack Query', 'Three.js', 'WebSocket'],
    features: [
      '사용자 얼굴 인식 기반 UI 자동 전환 (일반/고령층)',
      'Three.js 기반 3D AI 은행원을 통한 음성 인식 및 안내',
      'AI 기반 실시간 보이스피싱 위험 탐지 및 경고',
      '사용자 맞춤형 금융 상품 추천',
      'Electron 듀얼 모니터 지원 및 키패드, 시뮬레이터 구현',
    ],
    achievements: [
      'Electron 듀얼 모니터 IPC 통신으로 50ms 이내 실시간 동기화',
      'WCAG 2.1 AA 레벨 접근성 최적화 (명암비 4.5:1, 폰트 25% 확대)',
      'Context API로 AI 연령 인식 기반 모드 전환 시스템',
      'WebSocket 실시간 보이스피싱 탐지 시스템 구현',
    ],
    github: 'https://github.com/donghangbank/donghang',
    demo: '',
  },
  {
    id: 'ezip',
    title: '이집어때 (ezip)',
    subtitle: 'SSAFY 관통 프로젝트 최우수상(1등)',
    period: '2024.10.23 ~ 2024.11.27 (5주)',
    team: '3명 (FE: 1명, FULL: 1명, INFRA: 1명)',
    role: '기획 및 설계, UI/UX 디자인, 프론트엔드 아키텍처 설계 및 핵심 기능 구현',
    description: '아파트 매물 정보 및 시세 추이를 쉽게 확인하는 AI 기반 웹 플랫폼',
    logo: '/src/assets/logo/logo_ezip.svg',
    techStack: ['TypeScript', 'React', 'Chakra UI', 'Redux', 'Tanstack Query', 'Framer Motion', 'Axios'],
    features: [
      '줌 레벨별 카카오 맵 연동 (아파트 → 동 → 구 → 시 단위 시세 표시)',
      'ChatGPT API 연동 AI 기반 부동산 시세 예측 및 챗봇',
      '네이버 뉴스 API 크롤링 실시간 부동산 뉴스',
      'Google Charts 기반 거래 내역 및 시세 추이 시각화',
      '핫한 매물 시스템 - 전달 대비 증가율 기준 추천',
    ],
    achievements: [
      'Grid-based Caching 전략으로 지도 API 호출 80% 감소',
      'ChatGPT API 연동 부동산 시세 예측 기능',
      'Chakra UI 다크모드 및 반응형 웹 디자인',
      'Redux와 Tanstack Query로 서버/클라이언트 상태 분리',
    ],
    github: 'https://github.com/beak1sin/ezip-frontend',
    demo: '',
  },
];

export const experience = [
  {
    id: 1,
    title: 'SSAFY 12기',
    organization: '삼성 청년 SW·AI 아카데미',
    period: '2024.07 ~ 2025.06',
    type: 'education',
    description: 'React·TypeScript 기반 프론트엔드 개발 학습 및 3개 팀 프로젝트 전체 수상',
    details: [
      'React, Vue.js, Spring, 알고리즘 학습',
      '3개 프로젝트 진행 (관통, 특화, 자율) 전체 수상',
      'Git·Jira 기반 애자일 협업 경험',
      '프론트엔드 집중 트랙으로 React 생태계 심화 학습',
    ],
  },
  {
    id: 2,
    title: '예비창업 지원 사업',
    organization: '창업 지원 사업',
    period: '2023.01 ~ 2024.05',
    type: 'startup',
    description: 'AI 예측 기술 기반 서비스 및 C2C 대여 중개 플랫폼의 초기 기획, UI/UX 설계 및 프로토타입 개발',
    details: [
      '신재생에너지 발전량 예측 서비스 기획 (2023)',
      'C2C 개인 간 물품 대여 플랫폼 기획 및 프로토타입 개발 (2024)',
      '창업중심대학, 예비창업패키지 등 4개 사업 서류 합격',
      'UI/UX 설계 및 프로토타입 개발 경험',
    ],
  },
  {
    id: 3,
    title: '코리아IT아카데미',
    organization: '빅데이터 UI 전문가 과정',
    period: '2021.06 ~ 2021.11',
    type: 'education',
    description: 'HTML, CSS, JavaScript 기초 및 Spring MVC 패턴 학습',
    details: [
      'Java 기본 문법 및 Spring MVC 패턴',
      'HTML, CSS, JavaScript 웹 개발 기초',
      'API 통신 및 빅데이터 UI 개발',
    ],
  },
  {
    id: 4,
    title: '학점은행제 학사 취득',
    organization: '컴퓨터공학과',
    period: '2021.04 ~ 2022.08',
    type: 'education',
    description: '컴퓨터공학 학사 학위 취득 및 CS 지식 학습',
    details: [
      '컴퓨터공학 학사 학위 취득',
      'CS 기초 지식 학습',
      '정보처리기사, SQL 개발자 자격증 취득',
    ],
  },
  {
    id: 5,
    title: '서울대학교병원 전산실',
    organization: '서울대학교병원',
    period: '2019.05 ~ 2021.05',
    type: 'work',
    description: 'Bestcare 2.0 병원 전산 시스템 및 PC 유지보수 담당',
    details: [
      'PC 및 프린터 유지보수',
      '병원 전산 시스템 관리',
      '소프트웨어 개발 전환 계기',
    ],
  },
  {
    id: 6,
    title: '용인송담대학교',
    organization: '의료정보과',
    period: '2015.03 ~ 2019.02',
    type: 'education',
    description: '의료정보과 졸업 (2년제)',
    details: [],
  },
];

export const awards = [
  {
    id: 1,
    title: '자율 프로젝트 우수상 (2등)',
    organization: '삼성 청년 SW·AI 아카데미 (SSAFY)',
    date: '2025.05.22',
    project: '행복하개',
    description: 'FCM 실시간 알림 및 무한 스크롤 최적화로 로딩 시간 57% 단축, 메모리 13% 절감',
  },
  {
    id: 2,
    title: '특화 프로젝트 우수상 (1등)',
    organization: '삼성 청년 SW·AI 아카데미 (SSAFY)',
    date: '2025.04.11',
    project: '동행',
    description: 'Electron 듀얼 모니터 IPC 통신으로 50ms 이내 실시간 동기화 및 WCAG 접근성 최적화',
  },
  {
    id: 3,
    title: '관통 프로젝트 최우수상 (1등)',
    organization: '삼성 청년 SW·AI 아카데미 (SSAFY)',
    date: '2024.11.28',
    project: '이집어때',
    description: 'Grid-based Caching 전략으로 지도 API 호출 80% 감소 및 ChatGPT API 연동 시세 예측',
  },
];

export const certificates = [
  { 
    id: 1, 
    name: '정보처리기사', 
    organization: '한국산업인력공단', 
    date: '2022.06.17',
    certificateNumber: '22201010641Q'
  },
  { 
    id: 2, 
    name: 'SQL 개발자 (SQLD)', 
    organization: '한국데이터산업진흥원', 
    date: '2022.04.08',
    certificateNumber: 'SQLD-044002161'
  },
  { 
    id: 3, 
    name: '사무자동화 산업기사', 
    organization: '한국산업인력공단', 
    date: '2018.05.18',
    certificateNumber: '18202022240V'
  },
  { 
    id: 4, 
    name: 'ITQ OA Master', 
    organization: '한국생산성본부', 
    date: '2018.05.18',
    certificateNumber: 'A001-2015312-000075',
    details: '아래한글, 한글엑셀, 한글파워포인트 A등급'
  }
];

export const languages = [
  {
    id: 1,
    name: 'OPIc (영어)',
    organization: 'ACTFL',
    date: '2025.03.14',
    certificateNumber: '2A2671009512',
    level: 'IM1',
    description: 'Intermediate Mid 1'
  }
];

export const military = {
  branch: '육군',
  rank: '병장 만기 전역',
  unit: '제20사단 정보통신대대',
  period: '2016.03 ~ 2017.12',
};

