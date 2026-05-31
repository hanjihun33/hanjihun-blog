import type { PortfolioProjectDetail } from './types';

export const dondoneDetail: PortfolioProjectDetail = {
  teamSize: '6명',
  responsibilities: 'Android 모바일 UX · 위치 기반 출퇴근 · Wage Shield 연동 · 웹 콘솔/문서화',
  demoVideoUrl: 'https://youtu.be/SWdI_c_8MB8?si=Fy3wfeuc3Xj3xfiH',
  description:
    'DonDone은 외국인 근로자의 출퇴근 기록을 급여 확인, 미리받기, 테스트넷 송금, 증빙 PDF 생성으로 연결하는 서비스입니다. 모바일 현장 사용성과 고용주 웹 콘솔, 백엔드 API, 문서화까지 함께 구성해 데모 가능한 MVP 흐름을 만들었습니다.',
  implementation: [
    'WorkProof 출퇴근 기록과 근무 정정 요청을 통해 현장 근로자의 근무 이력을 모바일에서 관리할 수 있도록 구성했습니다.',
    'Wage Shield 급여 확인, 급여 미리받기, 증빙 PDF 생성 흐름을 모바일 화면과 백엔드 API로 연결했습니다.',
    'Kakao Map 기반 근무지/현재 위치/출퇴근 반경 UX를 구현해 위치 기반 출퇴근 인증 흐름을 보강했습니다.',
    '고용주/관리자 콘솔과 포팅 문서, 배포 운영 문서를 정리해 시연과 제출이 가능한 MVP 상태로 마무리했습니다.',
  ],
  roleSummary:
    '모바일 사용자 경험, WorkProof 위치 기반 출퇴근, Wage Shield 모바일 연동, React 웹 콘솔 초기 구축, 시연/포팅 문서화를 담당했습니다.',
  roleDetails: [
    'Kotlin/Jetpack Compose 기반 Android 앱에서 WorkProof 위치 기반 출퇴근 UX 구현',
    'Kakao Map 연동, 현재 위치 조회, 출퇴근 반경 표시, 지도 제스처 개선으로 현장형 사용 흐름 보강',
    'Wage Shield 모바일 화면과 백엔드 API를 연결하고 loading/error/success 상태를 정리',
    'React 웹 콘솔 초기 구축과 포팅 매뉴얼, 배포 운영 가이드, 시연 자료 문서화',
  ],
  techSelectionReasons: [
    'Kotlin과 Jetpack Compose는 위치 권한, 지도, 모바일 상태 처리를 네이티브 앱 경험으로 구현하기 위해 활용했습니다.',
    'Kakao Map은 국내 지도 환경에서 근무지와 현재 위치, 출퇴근 반경을 직관적으로 보여주기 위해 선택했습니다.',
    'React와 TypeScript는 고용주/관리자 콘솔을 빠르게 구성하고 API 상태를 타입 기반으로 관리하기 위해 활용했습니다.',
  ],
  outcomes: [
    '위치 권한, 지도 SDK, 출퇴근 반경처럼 현장에서 바로 문제가 되는 모바일 UX를 다뤘습니다.',
    'API payload를 모바일 UI model로 변환하고 loading/error/success 상태를 명확히 나누는 흐름을 정리했습니다.',
    '기능 구현뿐 아니라 테스트, DB dump, 포팅 매뉴얼, 배포 운영 가이드까지 연결해 제출/시연 가능한 상태로 마무리했습니다.',
  ],
  review: [
    '모바일 현장 사용자는 권한, 위치 오차, 네트워크 상태에 민감하다는 점을 체감했고, 기능 구현만큼 예외 상태 안내가 중요하다는 점을 배웠습니다.',
    '지금 다시 보완한다면 출퇴근 인증 실패 사유와 정정 요청 플로우를 더 세밀하게 설계해 사용자 불안을 줄이고 싶습니다.',
  ],
};
