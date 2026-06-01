import { Link } from 'react-router-dom';
import { Typography } from '../components/tailwind/client-components';
import ProgressBar from '../components/motion/progress-bar';
import { portfolioProjects } from '../data/portfolio-projects';
import styles from '../styles/app/introduce/profile/page.module.css';

const assetBase = `${import.meta.env.BASE_URL}portfolio-assets`;

const educationItems = [
  {
    period: '2025.07 - 2026.06',
    title: '삼성 청년 SW·AI 아카데미',
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
    slug: 'wedge',
    description: 'AI 에이전트 기반\n웹사이트 UX 진단 서비스',
  },
  {
    period: '2026.02 - 2026.04',
    title: 'DonDone',
    slug: 'dondone',
    description: '외국인 근로자 블록체인 지갑\n급여·송금·증빙 통합 서비스',
  },
  {
    period: '2026.01 - 2026.02',
    title: '당낭콩',
    slug: 'dangnangkong',
    description: '실시간 혈당 데이터 기반\nAI 혈당 관리 서비스',
  },
  {
    period: '2025.11 - 2025.12',
    title: 'MyTripQuest',
    slug: 'mytripquest',
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

const portfolioCardThemes = [styles.themePrimary, styles.themeBlue, styles.themeMint, styles.themeViolet];
const mobileProjectSlugs = new Set(['dondone', 'dangnangkong', 'mytripquest']);

export default function ProfilePage() {
  return (
    <div className={styles.mainWrapper}>
      <ProgressBar />
      <div className={`${styles.subWrapper} ${styles.indexing}`}>
        <div className={styles.profileHeading}>
          <Typography id="profile-title" variant="h2">
            About Me
          </Typography>
        </div>

        <section className={styles.coverPage} aria-labelledby="profile-title">
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
                    <Link
                      aria-label={`${item.title} 프로젝트 상세 보기`}
                      className={styles.coverProjectLink}
                      to={`/introduce/profile/projects/${item.slug}`}
                    >
                      <strong>{item.title}</strong>
                      <span>{item.description}</span>
                    </Link>
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

        <section className={`${styles.section} ${styles.portfolioShowcase}`} aria-labelledby="portfolio-title">
          <div className={styles.portfolioHeading}>
            <Typography id="portfolio-title" variant="h2">
              My Projects
            </Typography>
            <p>프로젝트에서 맡았던 역할과 배운 점을 정리했습니다.</p>
          </div>

          <div className={styles.portfolioList}>
            {portfolioProjects.map((project, index) => {
              const isMobileProject = mobileProjectSlugs.has(project.slug);

              return (
                <Link
                  aria-label={`${project.title} 프로젝트 상세 보기`}
                  className={`${styles.portfolioProjectRow} ${index % 2 === 1 ? styles.rowReverse : ''} ${
                    portfolioCardThemes[index % portfolioCardThemes.length]
                  }`}
                  key={project.title}
                  to={`/introduce/profile/projects/${project.slug}`}
                >
                  <div className={`${styles.projectPreview} ${isMobileProject ? styles.mobilePreview : styles.webPreview}`}>
                    {isMobileProject ? (
                      <div className={styles.phoneMockup}>
                        <img
                          alt={`${project.title} 모바일 화면 미리보기`}
                          className={styles.projectMobileImage}
                          src={`${assetBase}/projects/${project.slug}.png`}
                        />
                      </div>
                    ) : (
                      <div className={styles.browserMockup}>
                        <div className={styles.previewTopBar} aria-hidden="true">
                          <span />
                          <span />
                          <span />
                        </div>
                        <img
                          alt={`${project.title} 웹 화면 미리보기`}
                          className={styles.projectWebImage}
                          src={`${assetBase}/projects/${project.slug}.png`}
                        />
                      </div>
                    )}
                  </div>

                  <div className={styles.projectSummary}>
                    <div>
                      <span className={styles.projectMeta}>
                        {project.period} · {project.teamSize}
                      </span>
                      <h3>{project.title}</h3>
                      <p>{project.shortDescription}</p>
                      <p className={styles.projectRole}>{project.responsibilities}</p>
                    </div>
                    <span className={styles.projectArrow}>자세히 보기 →</span>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
}
