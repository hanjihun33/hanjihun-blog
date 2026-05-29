export type PortfolioProject = {
  slug: string;
  title: string;
  period: string;
  shortDescription: string;
  description: string;
  roleSummary: string;
  whatIDid: string[];
  features: string[];
  highlights: string[];
  stack: string[];
};

export const portfolioProjects: PortfolioProject[] = [
  {
    slug: 'wedge',
    title: 'Wedge',
    period: '2026.04 - 2026.05',
    shortDescription:
      '사용자가 입력한 웹사이트 URL을 실제 브라우저로 탐색하고, 전환 흐름의 UX 마찰을 evidence 기반으로 진단해 리포트로 제공하는 서비스입니다.',
    description:
      'Wedge는 URL 입력, 사전 탐색, 맞춤 시나리오 추천, 브라우저 실행, 체크포인트별 근거 수집, Rule/LLM 기반 분석, 개선 리포트까지 이어지는 UX 진단 플랫폼입니다. 단순 화면 점검이 아니라 실제 사이트를 탐색하며 사용자가 이탈할 수 있는 지점을 근거와 함께 설명하는 흐름을 목표로 했습니다.',
    roleSummary:
      'Playwright 기반 Runner/Agent 실행 파이프라인과 evidence 수집, 비동기 callback, idempotency, contract 연동을 중심으로 기여했습니다.',
    whatIDid: [
      'Playwright 기반 Runner/Agent 실행 파이프라인과 실사이트 탐색 안정화 구현',
      'checkpoint별 screenshot, DOM, trace 등 분석 근거 수집 및 artifact 저장 흐름 설계',
      'RabbitMQ 비동기 작업, callback, idempotency, contract 연동, smoke 검증으로 실행 안정성 개선',
      'Run event/step 목록 API와 모니터링 타임라인을 연결해 worker 내부 흐름을 사용자 화면으로 전달',
    ],
    features: [
      'URL-first Site Discovery와 전환 시나리오 추천',
      'Playwright 기반 실제 브라우저 탐색 및 checkpoint evidence 수집',
      'RabbitMQ worker, callback outbox, idempotency key 기반 장시간 실행 안정화',
      '진단 결과 리포트, artifact 저장, 실행 모니터링 타임라인',
    ],
    highlights: [
      'popup, iframe, lazy image, 긴 페이지, timeout 등 실제 웹 자동화 예외를 처리하며 분석 가능한 근거를 남겼습니다.',
      '브라우저 실행 결과를 API 계약과 사용자 화면까지 연결해 worker 내부 기능이 제품 경험으로 드러나도록 만들었습니다.',
      '실패와 부분 성공을 분리해 evidence가 남은 경우 분석 가능한 상태로 이어갈 수 있게 설계했습니다.',
    ],
    stack: ['Spring Boot', 'React', 'TypeScript', 'Node.js', 'Playwright', 'RabbitMQ', 'PostgreSQL', 'Redis', 'MinIO/S3', 'Docker', 'Jenkins'],
  },
  {
    slug: 'dondone',
    title: 'DonDone',
    period: '2026.02 - 2026.04',
    shortDescription:
      '외국인 근로자의 근무 기록을 급여 확인, 미리받기, 송금, 증빙 문서 생성으로 연결하는 급여 지갑 MVP입니다.',
    description:
      'DonDone은 외국인 근로자의 출퇴근 기록을 급여 확인, 미리받기, 테스트넷 송금, 증빙 PDF 생성으로 연결하는 서비스입니다. 모바일 현장 사용성과 고용주 웹 콘솔, 백엔드 API, 문서화까지 함께 구성해 데모 가능한 MVP 흐름을 만들었습니다.',
    roleSummary:
      '모바일 사용자 경험, WorkProof 위치 기반 출퇴근, Wage Shield 모바일 연동, React 웹 콘솔 초기 구축, 시연/포팅 문서화를 담당했습니다.',
    whatIDid: [
      'Kotlin/Jetpack Compose 기반 Android 앱에서 WorkProof 위치 기반 출퇴근 UX 구현',
      'Kakao Map 연동, 현재 위치 조회, 출퇴근 반경 표시, 지도 제스처 개선으로 현장형 사용 흐름 보강',
      'Wage Shield 모바일 화면과 백엔드 API를 연결하고 loading/error/success 상태를 정리',
      'React 웹 콘솔 초기 구축과 포팅 매뉴얼, 배포 운영 가이드, 시연 자료 문서화',
    ],
    features: [
      'WorkProof 출퇴근 기록과 근무 정정 요청',
      'Wage Shield 급여 확인, 급여 미리받기, 증빙 PDF 생성',
      'Kakao Map 기반 근무지/현재 위치/출퇴근 반경 UX',
      '고용주/관리자 콘솔과 배포 운영 문서',
    ],
    highlights: [
      '위치 권한, 지도 SDK, 출퇴근 반경처럼 현장에서 바로 문제가 되는 모바일 UX를 다뤘습니다.',
      'API payload를 모바일 UI model로 변환하고 loading/error/success 상태를 명확히 나누는 흐름을 정리했습니다.',
      '기능 구현뿐 아니라 테스트, DB dump, 포팅 매뉴얼, 배포 운영 가이드까지 연결해 제출/시연 가능한 상태로 마무리했습니다.',
    ],
    stack: ['Spring Boot', 'PostgreSQL', 'Redis', 'Kotlin', 'Jetpack Compose', 'React', 'TypeScript', 'Solidity', 'Docker', 'Jenkins', 'Prometheus', 'Grafana'],
  },
  {
    slug: 'dangnangkong',
    title: '당낭콩',
    period: '2026.01 - 2026.02',
    shortDescription:
      'CGM 혈당 데이터, 식사 기록, AI 음식 분석, 리포트, 위험 알림을 통합한 모바일 헬스케어 서비스입니다.',
    description:
      '당낭콩은 Dexcom CGM 혈당 데이터, 식사 기록, AI 음식 분석, 혈당 예측, 리포트, 위험 알림을 하나의 모바일 앱 경험으로 연결한 헬스케어 서비스입니다. 매일 확인해야 하는 혈당 흐름과 식단 데이터를 사용자가 이해하기 쉬운 화면과 코칭 흐름으로 제공하는 데 집중했습니다.',
    roleSummary:
      'React Native/Expo 기반 모바일 화면과 사용자 경험 개선을 중심으로 식단, 혈당, 센서, 설정 기능의 프론트엔드 구현과 일부 백엔드 API 연동을 담당했습니다.',
    whatIDid: [
      'React Native/Expo 기반 모바일 앱의 홈 혈당 대시보드, 식단, 센서, 설정 화면 구현',
      'Dexcom 센서 연결/해제와 실시간 혈당 그래프를 백엔드 API와 연결',
      '음식 사진 AI 분석 결과와 Gemini 식단 코칭을 모바일 식단 기록 화면에 통합',
      '인증, 온보딩, 프로필, 알림 설정 등 서비스 사용에 필요한 주변 UX 완성도 개선',
    ],
    features: [
      'Dexcom CGM 연동과 5분 주기 혈당 수집',
      '혈당 그래프, 위험 알림, 일간/주간/월간 리포트',
      '음식 사진 AI 분석과 Gemini 기반 식단 코칭',
      '로그인, 온보딩, 프로필, 건강 정보, 알림 설정 화면',
    ],
    highlights: [
      '외부 헬스케어 API와 AI 분석 서버 결과를 모바일 화면에서 이해할 수 있는 그래프와 기록 UX로 연결했습니다.',
      '모델 추론 자체보다 AI 결과를 실제 사용자 기능으로 제공하는 데이터 매핑과 화면 흐름을 다뤘습니다.',
      '카메라 촬영, 음식 분석, 센서 연동, 리포트, 알림 설정처럼 매일 사용하는 모바일 흐름을 하나의 앱 경험으로 정리했습니다.',
    ],
    stack: ['React Native', 'Expo', 'TypeScript', 'Spring Boot', 'FastAPI', 'MySQL', 'Redis', 'Gemini API', 'Dexcom API', 'FCM', 'Docker', 'Jenkins'],
  },
  {
    slug: 'mytripquest',
    title: 'MyTripQuest',
    period: '2025.11 - 2025.12',
    shortDescription:
      '관광지 방문을 GPS 도착 인증과 AI 사진 인증 기반 퀘스트로 바꾸고, 보상과 랭킹으로 연결하는 게이미피케이션 여행 서비스입니다.',
    description:
      'MyTripQuest는 관광지 방문을 퀘스트로 만들고, GPS 도착 인증과 AI 사진 인증을 통해 완료 여부를 판단한 뒤 포인트, 경험치, 아바타 아이템, 랭킹으로 연결하는 여행 게이미피케이션 웹 서비스입니다. 여행 정보 탐색과 현장 행동, 성장 요소가 하나의 서비스 루프를 이루도록 구성했습니다.',
    roleSummary:
      'Vue 화면, API 모듈, Spring Boot REST API, MyBatis Mapper가 연결되는 풀스택 흐름을 공동 개발하고, README와 발표 산출물 정리를 맡았습니다.',
    whatIDid: [
      'Vue 3 화면, API 모듈, Spring Boot REST API, MyBatis Mapper가 연결되는 풀스택 흐름 공동 개발',
      '지역별 퀘스트 조회, 수락/포기/완료, GPS 도착 인증과 사진 인증 흐름 정리',
      'Kakao Maps, Tour API, Gemini API를 활용한 위치 기반 여행·인증 기능 구조화',
      'README, 화면 캡처, 아키텍처, ERD/API 문서, 시연 시나리오 등 발표 산출물 정리',
    ],
    features: [
      '지역별 퀘스트 맵과 관광지 정보 탐색',
      '퀘스트 수락, 포기, 완료와 GPS/사진 인증',
      '보상, 포인트, 아바타 아이템, 랭킹',
      '사용자/권한/퀘스트/아이템 관리와 통계 대시보드',
    ],
    highlights: [
      'GPS 좌표, EXIF, 촬영 시간, 선행 퀘스트, Gemini Vision 판별을 조합한 인증 신뢰도 흐름을 이해하고 정리했습니다.',
      '프론트 화면, 백엔드 API, DB 쿼리가 연결되는 end-to-end 개발 흐름을 경험했습니다.',
      '기능 구현 결과를 채용 담당자와 면접관이 빠르게 이해할 수 있도록 문서와 시연 자료로 재구성했습니다.',
    ],
    stack: ['Vue 3', 'Vue Router', 'Pinia', 'Spring Boot', 'Java 17', 'MyBatis', 'MySQL', 'Kakao Maps', 'Gemini API', 'Tour API'],
  },
];

export function findPortfolioProject(slug?: string) {
  return portfolioProjects.find((project) => project.slug === slug);
}
