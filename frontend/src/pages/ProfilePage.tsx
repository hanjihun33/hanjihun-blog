import { FiGithub, FiGlobe, FiLinkedin, FiMail, FiPhone, FiUser } from 'react-icons/fi';
import { Chip, Typography } from '../components/tailwind/client-components';
import ProgressBar from '../components/motion/progress-bar';
import { PROFILE_IMAGE_URL } from '../data/profile';
import styles from '../styles/app/introduce/profile/page.module.css';

const focusAreas = ['Java', 'Spring Boot', 'React', 'TypeScript', 'API Design', 'Writing'];

const portfolioProjects = [
  {
    title: 'Hanjihun Blog',
    period: '2026.04 - 진행 중',
    description:
      'React, Vite, Spring Boot 기반으로 구성 중인 개인 블로그 겸 포트폴리오 사이트입니다. 학습한 내용을 정리하고 직접 배포 가능한 형태로 만드는 것을 목표로 하고 있습니다.',
    whatIDid: [
      'Vite 기반 React 공개 블로그 화면 구성',
      'Spring Boot API 초안과 게시글 조회 구조 구성',
      '프로필, 외부 링크, 공통 이미지 자원 관리 정리',
    ],
    stack: ['React', 'TypeScript', 'Vite', 'Spring Boot', 'Java 17'],
    links: [
      {
        label: 'GitHub',
        href: 'https://github.com/hanjihun33',
      },
    ],
  },
  {
    title: 'Study Notes Archive',
    period: '2025.11 - 2026.02',
    description:
      '개인 학습 노트와 정리 문서를 카테고리별로 관리할 수 있도록 구성한 기록용 웹 프로젝트입니다. 주제를 나누어 정리하고 다시 찾아보기 쉽게 만드는 데 초점을 두었습니다.',
    whatIDid: [
      '카테고리별 문서 탐색 화면과 상세 조회 화면 구성',
      '주제별 태그와 검색 흐름을 고려한 화면 구조 설계',
      '학습 기록을 프로젝트 단위로 묶을 수 있는 콘텐츠 정리 방식 실험',
    ],
    stack: ['React', 'TypeScript', 'CSS Modules'],
    links: [
      {
        label: 'GitHub',
        href: 'https://github.com/hanjihun33',
      },
    ],
  },
  {
    title: 'Task Flow Dashboard',
    period: '2025.08 - 2025.10',
    description:
      '할 일과 진행 상태를 한 화면에서 관리할 수 있도록 만든 간단한 대시보드 프로젝트입니다. 작은 기능이라도 끝까지 구현하고 배포 흐름까지 연결하는 연습을 목표로 진행했습니다.',
    whatIDid: [
      '상태별 작업 목록과 상세 정보 패널 UI 구현',
      '반응형 레이아웃과 간단한 필터링 인터랙션 추가',
      '프로젝트 구조를 작게 유지하면서 재사용 가능한 컴포넌트 분리 연습',
    ],
    stack: ['React', 'Vite', 'TypeScript'],
    links: [
      {
        label: 'GitHub',
        href: 'https://github.com/hanjihun33',
      },
    ],
  },
];

export default function ProfilePage() {
  return (
    <div className={styles.mainWrapper}>
      <ProgressBar />
      <div className={`${styles.subWrapper} ${styles.indexing}`}>
        <div className={styles.section}>
          <Typography className="text-4xl md:text-5xl" variant="h1">
            반갑습니다, 저는 한지훈입니다.
          </Typography>
          <ul className={styles.list}>
            <li>
              <Typography className="leading-relaxed" variant="h4">
                사용자에게 보이는 화면부터 API 구조까지 연결해서 생각하는 개발자를 지향합니다.
              </Typography>
            </li>
            <li>
              <Typography className="leading-relaxed" variant="h4">
                기능 구현에 그치지 않고, 읽기 쉬운 코드와 확장 가능한 구조를 만드는 데 관심이 있습니다.
              </Typography>
            </li>
          </ul>
        </div>

        <hr className="my-8 border-slate-100" />

        <div className={styles.section}>
          <Typography variant="h2">Introduce.</Typography>
          <div className={styles.introduce}>
            <span>
              Java, Spring Boot와 React, TypeScript를 중심으로 웹 서비스를 직접 설계하고 구현하며, 프론트엔드와
              백엔드의 흐름을 함께 이해하는 개발자로 성장하고 있습니다.
            </span>
            <span>
              화면 구현, API 설계, 프로젝트 구조화, GitHub 관리, 배포까지 개발 전 과정을 직접 경험하면서 실무에
              빠르게 적응할 수 있는 기본기를 쌓고 있습니다.
            </span>
          </div>

          <div className={styles.predicate}>
            <Typography variant="h2">Focus.</Typography>
            <Typography className={styles.label} variant="lead">
              What I can contribute
            </Typography>
            <ul className={styles.list}>
              <li>요구사항을 화면과 API 단위로 나누어 구조화하고 구현하는 일</li>
              <li>Spring Boot 기반 API를 단순하고 명확한 책임으로 설계하는 일</li>
              <li>React와 TypeScript로 읽기 쉬운 UI를 구성하고 유지보수성을 높이는 일</li>
              <li>GitHub와 배포까지 연결해 실제 동작하는 결과물을 만드는 일</li>
            </ul>

            <Typography className={styles.label} variant="lead">
              Stack
            </Typography>
            <div className={styles.chipBox}>
              {focusAreas.map((area) => (
                <Chip key={area} size="sm" value={area} variant="outlined" />
              ))}
            </div>
          </div>
        </div>

        <hr className="my-8 border-slate-100" />

        <div className={styles.section}>
          <Typography variant="h2">Portfolio.</Typography>
          <div className={styles.portfolioList}>
            {portfolioProjects.map((project) => (
              <div className={styles.portfolioItem} key={project.title}>
                <div className={styles.timelineRail} aria-hidden="true">
                  <span className={styles.timelineDot} />
                  <span className={styles.timelineLine} />
                </div>
                <div className={styles.portfolioContent}>
                  <Typography variant="h4">{project.title}</Typography>

                  <Typography className={styles.label} variant="lead">
                    Period
                  </Typography>
                  <p className={styles.portfolioText}>{project.period}</p>

                  <Typography className={styles.label} variant="lead">
                    Description
                  </Typography>
                  <p className={styles.portfolioText}>{project.description}</p>

                  <Typography className={styles.label} variant="lead">
                    What I did
                  </Typography>
                  <ul className={styles.projectList}>
                    {project.whatIDid.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>

                  <Typography className={styles.label} variant="lead">
                    Link
                  </Typography>
                  <ul className={styles.projectList}>
                    {project.links.map((link) => (
                      <li key={link.href}>
                        <a className={styles.link} href={link.href} rel="noreferrer" target="_blank">
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>

                  <Typography className={styles.label} variant="lead">
                    Stack
                  </Typography>
                  <div className={styles.chipBox}>
                    {project.stack.map((item) => (
                      <Chip key={item} size="sm" value={item} variant="outlined" />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <hr className="my-8 border-slate-100" />

        <div className={styles.section}>
          <Typography variant="h2">Contact.</Typography>
          <div className="flex flex-col md:flex-row gap-8 items-center mt-4">
            <img
              alt="profile"
              className="rounded-full object-cover object-center shadow-lg shadow-surface-200 w-44 h-44 md:w-56 md:h-56 ring-4 ring-surface-100"
              src={PROFILE_IMAGE_URL}
            />
            <div className="flex flex-col gap-2 w-full">
              <dl className={styles.contactList}>
                <dt>
                  <FiUser className="inline mr-2" />
                  Name
                </dt>
                <dd>차지훈</dd>
                <dt>
                  <FiMail className="inline mr-2" />
                  Email
                </dt>
                <dd>jhcha3270@gmail.com</dd>
                <dt>
                  <FiPhone className="inline mr-2" />
                  Phone
                </dt>
                <dd>010-5034-3270</dd>
                <dt>
                  <FiGithub className="inline mr-2" />
                  GitHub
                </dt>
                <dd>
                  <a className={styles.link} href="https://github.com/hanjihun33" rel="noreferrer" target="_blank">
                    hanjihun33
                  </a>
                </dd>
                <dt>
                  <FiLinkedin className="inline mr-2" />
                  LinkedIn
                </dt>
                <dd>
                  <a
                    className={styles.link}
                    href="https://www.linkedin.com/in/hanjihun-linkdin/"
                    rel="noreferrer"
                    target="_blank"
                  >
                    hanjihun-linkdin
                  </a>
                </dd>
                <dt>
                  <FiGlobe className="inline mr-2" />
                  Blog
                </dt>
                <dd>hanjihun blog</dd>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
