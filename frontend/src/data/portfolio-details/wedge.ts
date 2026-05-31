import type { PortfolioProjectDetail } from './types';

export const wedgeDetail: PortfolioProjectDetail = {
  teamSize: '6명',
  responsibilities: '백엔드 · 브라우저 실행 Runner/Agent · Evidence 수집 · 비동기 작업 안정화',
  demoVideoUrl: 'https://youtu.be/l0aA3LioQRU?si=U0n5T0F6GUZt8eMY',
  description:
    'Wedge는 URL 입력, 사전 탐색, 맞춤 시나리오 추천, 브라우저 실행, 체크포인트별 근거 수집, Rule/LLM 기반 분석, 개선 리포트까지 이어지는 UX 진단 플랫폼입니다. 단순 화면 점검이 아니라 실제 사이트를 탐색하며 사용자가 이탈할 수 있는 지점을 근거와 함께 설명하는 흐름을 목표로 했습니다.',
  implementation: [
    'URL-first Site Discovery와 전환 시나리오 추천 흐름을 통해 사용자가 진단 목적에 맞는 실행 시나리오를 선택할 수 있도록 구성했습니다.',
    'Playwright 기반 실제 브라우저 탐색으로 screenshot, DOM, trace 등 checkpoint evidence를 수집하고 분석 가능한 artifact로 저장했습니다.',
    'RabbitMQ worker, callback outbox, idempotency key를 활용해 장시간 실행되는 진단 작업의 중복 처리와 실패 복구 가능성을 고려했습니다.',
    'Run event/step 목록 API와 모니터링 타임라인을 연결해 worker 내부 실행 흐름이 사용자 화면에서 확인되도록 구현했습니다.',
  ],
  roleSummary:
    'Playwright 기반 Runner/Agent 실행 파이프라인과 evidence 수집, 비동기 callback, idempotency, contract 연동을 중심으로 기여했습니다.',
  roleDetails: [
    'Playwright 기반 Runner/Agent 실행 파이프라인과 실사이트 탐색 안정화 구현',
    'checkpoint별 screenshot, DOM, trace 등 분석 근거 수집 및 artifact 저장 흐름 설계',
    'RabbitMQ 비동기 작업, callback, idempotency, contract 연동, smoke 검증으로 실행 안정성 개선',
    'Run event/step 목록 API와 모니터링 타임라인을 연결해 worker 내부 흐름을 사용자 화면으로 전달',
  ],
  techSelectionReasons: [
    'Playwright는 실제 브라우저 환경에서 사용자 흐름을 재현하고 screenshot/DOM/trace를 함께 수집할 수 있어 UX 진단 근거 수집에 적합했습니다.',
    'RabbitMQ는 브라우저 실행처럼 시간이 오래 걸리고 실패 가능성이 있는 작업을 API 요청과 분리해 비동기로 처리하기 위해 선택했습니다.',
    'Redis와 idempotency key는 중복 callback, 재시도, 실행 상태 관리에서 같은 작업이 여러 번 처리되는 문제를 줄이기 위해 활용했습니다.',
  ],
  outcomes: [
    'popup, iframe, lazy image, 긴 페이지, timeout 등 실제 웹 자동화 예외를 처리하며 분석 가능한 근거를 남기는 실행 흐름을 만들었습니다.',
    '브라우저 실행 결과를 API 계약과 사용자 화면까지 연결해 worker 내부 기능이 제품 경험으로 드러나도록 만들었습니다.',
    '실패와 부분 성공을 분리해 evidence가 남은 경우 분석 가능한 상태로 이어갈 수 있게 설계했습니다.',
  ],
  review: [
    '단순히 브라우저를 실행하는 기능보다 실패했을 때 어떤 근거를 남기고 어디까지 사용자에게 설명할 수 있는지가 더 중요하다는 점을 배웠습니다.',
    '지금 다시 보완한다면 진단 실패 유형을 더 세분화하고, 실행 trace를 기반으로 사용자가 이해할 수 있는 에러 리포트까지 강화하고 싶습니다.',
  ],
};
