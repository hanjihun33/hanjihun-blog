import type { PortfolioProjectDetail } from './types';

export const wedgeDetail: PortfolioProjectDetail = {
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
};
