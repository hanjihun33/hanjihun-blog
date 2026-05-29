import { Link } from 'react-router-dom';
import { Chip, Typography } from '../components/tailwind/client-components';
import ProgressBar from '../components/motion/progress-bar';
import { portfolioProjects } from '../data/portfolio-projects';
import styles from '../styles/app/introduce/profile/page.module.css';

const assetBase = `${import.meta.env.BASE_URL}portfolio-assets`;

const educationItems = [
  {
    period: '2025.07 - 2026.06',
    title: '삼성 청년 SW 아카데미',
    description: 'SSAFY 14기, 웹/모바일\n프로젝트 중심 교육',
  },
  {
    period: '2019.03 - 2025.02',
    title: '조선대학교',
    description: '수학과 / 컴퓨터공학과 복수전공',
  },
];

const certificationItems = [
  { period: '2026.09', title: '정보처리기사' },
  { period: '2026.06', title: 'SQL 개발자(SQLD)' },
  { period: '2026.04', title: 'TOEIC SPEAKING', description: 'IM2' },
];

const projectSummaryItems = [
  {
    period: '2026.04 - 2026.05',
    title: 'Wedge',
    description: '브라우저 실행 기반\nUX 전환 리스크 진단 서비스',
  },
  {
    period: '2026.02 - 2026.04',
    title: 'DonDone',
    description: '외국인 근로자 블록체인 지갑\n급여·송금·증빙 통합 서비스',
  },
  {
    period: '2026.01 - 2026.02',
    title: '당낭콩',
    description: '실시간 혈당 데이터 기반\nAI 혈당 관리 서비스',
  },
  {
    period: '2025.11 - 2025.12',
    title: 'MyTripQuest',
    description: 'GPS·AI 인증 기반\n게이미피케이션 여행 서비스',
  },
];

const skillItems = [
  {
    name: 'Java',
    percent: '80%',
    icon: 'java.svg',
    level: 4,
    note: '재사용성과 계층 분리를 고려해\n백엔드 코드를 작성합니다.',
  },
  {
    name: 'Spring Boot',
    percent: '80%',
    icon: 'spring.svg',
    level: 4,
    note: 'REST API, 인증, 스케줄러,\n도메인 흐름을 구현했습니다.',
  },
  {
    name: 'MySQL',
    percent: '80%',
    icon: 'mysql.svg',
    level: 4,
    note: '관계 모델링과 조회 목적에 맞는\n쿼리 작성을 경험했습니다.',
  },
  {
    name: 'Redis',
    percent: '70%',
    icon: 'redis.svg',
    level: 3,
    note: '캐시와 버퍼를 활용해 외부 API\n수집과 상태 관리를 분리했습니다.',
  },
];

export default function ProfilePage() {
  return (
    <div className={styles.mainWrapper}>
      <ProgressBar />
      <div className={`${styles.subWrapper} ${styles.indexing}`}>
        <section className={styles.coverPage} aria-label="포트폴리오 소개 및 요약 페이지">
          <div className={styles.topBar} aria-hidden="true" />

          <section className={styles.coverIntro} aria-label="자기소개와 연락처">
            <h1 className={styles.coverGreeting}>
              안녕하세요,<strong>차지훈입니다.</strong>
            </h1>
            <div className={styles.coverSlash} aria-hidden="true">
              /
            </div>
            <p className={styles.coverIntroText}>
              하나의 정답만을 고집하지 않는 열린 태도로
              <br />
              <span>이슈를 효율적이고 다각적으로 고민하는 지원자</span>입니다.
            </p>
            <img
              alt="차지훈 프로필 사진"
              className={styles.coverProfile}
              src={`${assetBase}/profile-chajihun-smile.png`}
            />

            <h2 className={styles.coverContactTitle}>contact.</h2>
            <dl className={styles.coverContacts}>
              <dt>GitHub.</dt>
              <dd>github.com/hanjihun33</dd>
              <dt>Blog.</dt>
              <dd>hanjihun33.github.io/hanjihun-blog</dd>
              <dt>Email.</dt>
              <dd>jhcha3270@gmail.com</dd>
            </dl>
          </section>

          <div className={`${styles.coverDivider} ${styles.coverDividerLeft}`} aria-hidden="true" />
          <div className={`${styles.coverDivider} ${styles.coverDividerRight}`} aria-hidden="true" />

          <section className={styles.coverInfo} aria-label="교육, 자격증, 프로젝트 요약">
            <h2 className={styles.coverSectionTitle}>education.</h2>
            <dl className={styles.coverInfoList}>
              {educationItems.map((item) => (
                <div className={styles.coverInfoRow} key={`${item.period}-${item.title}`}>
                  <dt>{item.period}</dt>
                  <dd>
                    <strong>{item.title}</strong>
                    <span>{item.description}</span>
                  </dd>
                </div>
              ))}
            </dl>

            <h2 className={`${styles.coverSectionTitle} ${styles.coverCertTitle}`}>certification.</h2>
            <dl className={styles.coverCertList}>
              {certificationItems.map((item) => (
                <div className={styles.coverCertRow} key={`${item.period}-${item.title}`}>
                  <dt>{item.period}</dt>
                  <dd>
                    <strong>{item.title}</strong>
                    {item.description ? <span>{item.description}</span> : null}
                  </dd>
                </div>
              ))}
            </dl>

            <h2 className={`${styles.coverSectionTitle} ${styles.coverProjectTitle}`}>project summary.</h2>
            <dl className={styles.coverProjectList}>
              {projectSummaryItems.map((item) => (
                <div className={styles.coverProjectRow} key={item.title}>
                  <dt>{item.period}</dt>
                  <dd>
                    <strong>{item.title}</strong>
                    <span>{item.description}</span>
                  </dd>
                </div>
              ))}
            </dl>
          </section>

          <section className={styles.coverSkills} aria-label="핵심 기술 역량">
            <h2 className={styles.coverSkillsTitle}>skills.</h2>
            <div className={styles.skillVisualGrid}>
              {skillItems.map((item) => (
                <article className={styles.skillVisualCard} key={item.name}>
                  <img alt={`${item.name} 로고`} className={styles.skillIcon} src={`${assetBase}/skills/${item.icon}`} />
                  <div>
                    <div className={styles.skillHead}>
                      <strong className={styles.skillName}>{item.name}</strong>
                      <span className={styles.skillPercent}>{item.percent}</span>
                    </div>
                    <div className={styles.skillMeter} aria-hidden="true">
                      {Array.from({ length: 5 }, (_, index) => (
                        <span className={index < item.level ? styles.skillOn : undefined} key={index} />
                      ))}
                    </div>
                    <p className={styles.skillNote}>{item.note}</p>
                  </div>
                </article>
              ))}
            </div>
          </section>
        </section>

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
                  <Typography variant="h4">
                    <Link
                      aria-label={`${project.title} 프로젝트 상세 보기`}
                      className={styles.projectTitleLink}
                      to={`/introduce/profile/projects/${project.slug}`}
                    >
                      {project.title}
                    </Link>
                  </Typography>

                  <Typography className={styles.label} variant="lead">
                    Period
                  </Typography>
                  <p className={styles.portfolioText}>{project.period}</p>

                  <Typography className={styles.label} variant="lead">
                    Description
                  </Typography>
                  <p className={styles.portfolioText}>{project.shortDescription}</p>

                  <Typography className={styles.label} variant="lead">
                    What I did
                  </Typography>
                  <ul className={styles.projectList}>
                    {project.whatIDid.map((item) => (
                      <li key={item}>{item}</li>
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

                  <Link className={styles.projectDetailLink} to={`/introduce/profile/projects/${project.slug}`}>
                    프로젝트 자세히 보기
                    <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
