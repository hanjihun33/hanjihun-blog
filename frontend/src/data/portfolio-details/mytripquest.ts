import type { PortfolioProjectDetail } from './types';

export const mytripquestDetail: PortfolioProjectDetail = {
  teamSize: '6명',
  responsibilities: 'Vue 화면 · API 연동 · 퀘스트 인증 흐름 · 발표 산출물 정리',
  demoVideoUrl: 'https://youtu.be/2jrZPjJJ3KY?si=YTlg9dolbHgBclQB',
  description:
    'MyTripQuest는 관광지 방문을 퀘스트로 만들고, GPS 도착 인증과 AI 사진 인증을 통해 완료 여부를 판단한 뒤 포인트, 경험치, 아바타 아이템, 랭킹으로 연결하는 여행 게이미피케이션 웹 서비스입니다. 여행 정보 탐색과 현장 행동, 성장 요소가 하나의 서비스 루프를 이루도록 구성했습니다.',
  implementation: [
    '지역별 퀘스트 맵과 관광지 정보 탐색을 통해 사용자가 주변 여행지를 퀘스트로 발견할 수 있도록 구성했습니다.',
    '퀘스트 수락, 포기, 완료와 GPS/사진 인증 흐름을 프론트 화면과 백엔드 API로 연결했습니다.',
    '보상, 포인트, 아바타 아이템, 랭킹 기능을 통해 여행 행동이 서비스 내 성장 요소로 이어지도록 구현했습니다.',
    '사용자/권한/퀘스트/아이템 관리와 통계 대시보드 흐름을 정리했습니다.',
  ],
  roleSummary:
    'Vue 화면, API 모듈, Spring Boot REST API, MyBatis Mapper가 연결되는 풀스택 흐름을 공동 개발하고, README와 발표 산출물 정리를 맡았습니다.',
  roleDetails: [
    'Vue 3 화면, API 모듈, Spring Boot REST API, MyBatis Mapper가 연결되는 풀스택 흐름 공동 개발',
    '지역별 퀘스트 조회, 수락/포기/완료, GPS 도착 인증과 사진 인증 흐름 정리',
    'Kakao Maps, Tour API, Gemini API를 활용한 위치 기반 여행·인증 기능 구조화',
    'README, 화면 캡처, 아키텍처, ERD/API 문서, 시연 시나리오 등 발표 산출물 정리',
  ],
  techSelectionReasons: [
    'Vue 3와 Pinia는 화면 상태와 API 데이터를 단순하게 관리하며 빠르게 화면을 구성하기 위해 활용했습니다.',
    'Spring Boot와 MyBatis는 REST API와 SQL 기반 데이터 흐름을 명확히 연결하기 위해 사용했습니다.',
    'Kakao Maps, Tour API, Gemini API는 위치 기반 관광 정보와 사진 인증 흐름을 실제 서비스 기능으로 만들기 위해 선택했습니다.',
  ],
  outcomes: [
    'GPS 좌표, EXIF, 촬영 시간, 선행 퀘스트, Gemini Vision 판별을 조합한 인증 신뢰도 흐름을 이해하고 정리했습니다.',
    '프론트 화면, 백엔드 API, DB 쿼리가 연결되는 end-to-end 개발 흐름을 경험했습니다.',
    '기능 구현 결과를 채용 담당자와 면접관이 빠르게 이해할 수 있도록 문서와 시연 자료로 재구성했습니다.',
  ],
  review: [
    '처음으로 프론트 화면, API, DB 쿼리가 함께 맞물리는 흐름을 경험하며 작은 기능도 여러 계층의 합의가 필요하다는 점을 배웠습니다.',
    '지금 다시 보완한다면 인증 실패 케이스와 악용 가능성을 더 촘촘히 정의하고, 퀘스트 완료 판정의 신뢰도를 높이는 방향으로 개선하고 싶습니다.',
  ],
};
