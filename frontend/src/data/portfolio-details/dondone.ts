import type { PortfolioProjectDetail } from './types';

export const dondoneDetail: PortfolioProjectDetail = {
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
};
