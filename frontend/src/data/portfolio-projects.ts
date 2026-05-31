import { dangnangkongDetail } from './portfolio-details/dangnangkong';
import { dondoneDetail } from './portfolio-details/dondone';
import { mytripquestDetail } from './portfolio-details/mytripquest';
import type { PortfolioProjectDetail } from './portfolio-details/types';
import { wedgeDetail } from './portfolio-details/wedge';

export type PortfolioProject = {
  slug: string;
  title: string;
  period: string;
  shortDescription: string;
  stack: string[];
} & PortfolioProjectDetail;

export const portfolioProjects: PortfolioProject[] = [
  {
    slug: 'wedge',
    title: 'Wedge',
    period: '2026.04 ~ 2026.05',
    shortDescription: '실제 사용자처럼 사이트를 탐색하는 AI UX 진단 서비스',
    stack: [
      'Spring Boot',
      'React',
      'TypeScript',
      'Node.js',
      'Playwright',
      'RabbitMQ',
      'PostgreSQL',
      'Redis',
      'MinIO/S3',
      'Docker',
      'Jenkins',
    ],
    ...wedgeDetail,
  },
  {
    slug: 'dondone',
    title: 'DonDone',
    period: '2026.02 - 2026.04',
    shortDescription: '외국인 근로자를 위한 블록체인 기반\n급여 보호·송금·증빙 통합 서비스.',
    stack: [
      'Spring Boot',
      'PostgreSQL',
      'Redis',
      'Kotlin',
      'Jetpack Compose',
      'React',
      'TypeScript',
      'Solidity',
      'Docker',
      'Jenkins',
      'Prometheus',
      'Grafana',
    ],
    ...dondoneDetail,
  },
  {
    slug: 'dangnangkong',
    title: '당낭콩',
    period: '2026.01 - 2026.02',
    shortDescription:
      '사용자의 CGM 혈당 데이터와 식사 기록을 기반으로 AI 음식 분석, 혈당 리포트, 위험 알림을 제공하는 모바일 헬스케어 서비스',
    stack: [
      'React Native',
      'Expo',
      'TypeScript',
      'Spring Boot',
      'FastAPI',
      'MySQL',
      'Redis',
      'Gemini API',
      'Dexcom API',
      'FCM',
      'Docker',
      'Jenkins',
    ],
    ...dangnangkongDetail,
  },
  {
    slug: 'mytripquest',
    title: 'MyTripQuest',
    period: '2025.11 - 2025.12',
    shortDescription: 'GPS 도착 인증과 AI 사진 인증을 활용해 관광지 방문을 퀘스트화하고, \n보상과 랭킹으로 여행 경험을 게임처럼 즐길 수 있게 만든 서비스.',
    stack: ['Vue 3', 'Vue Router', 'Pinia', 'Spring Boot', 'Java 17', 'MyBatis', 'MySQL', 'Kakao Maps', 'Gemini API', 'Tour API'],
    ...mytripquestDetail,
  },
];

export function findPortfolioProject(slug?: string) {
  return portfolioProjects.find((project) => project.slug === slug);
}
