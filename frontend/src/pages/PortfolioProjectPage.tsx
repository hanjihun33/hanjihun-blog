import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import ProgressBar from '../components/motion/progress-bar';
import { Chip, Typography } from '../components/tailwind/client-components';
import { findPortfolioProject, portfolioProjects } from '../data/portfolio-projects';
import styles from '../styles/app/introduce/profile/project.module.css';

const assetBase = `${import.meta.env.BASE_URL}portfolio-assets`;

function getImplementationKey(item: (typeof portfolioProjects)[number]['implementation'][number]) {
  return typeof item === 'string' ? item : item.title;
}

function toYouTubeEmbedUrl(url?: string) {
  if (!url) {
    return undefined;
  }

  try {
    const parsedUrl = new URL(url);

    if (parsedUrl.hostname.includes('youtu.be')) {
      const videoId = parsedUrl.pathname.replace('/', '');
      return videoId ? `https://www.youtube.com/embed/${videoId}` : undefined;
    }

    if (parsedUrl.hostname.includes('youtube.com')) {
      if (parsedUrl.pathname.startsWith('/embed/')) {
        return url;
      }

      const videoId = parsedUrl.searchParams.get('v');
      return videoId ? `https://www.youtube.com/embed/${videoId}` : undefined;
    }
  } catch {
    return undefined;
  }

  return undefined;
}

export default function PortfolioProjectPage() {
  const { projectSlug } = useParams();
  const project = findPortfolioProject(projectSlug);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [projectSlug]);

  if (!project) {
    return (
      <div className={styles.mainWrapper}>
        <Typography variant="h1">프로젝트를 찾을 수 없습니다.</Typography>
        <p className={styles.lead}>주소가 바뀌었거나 아직 작성되지 않은 프로젝트입니다.</p>
        <Link className={styles.backLink} to="/introduce/profile">
          프로필로 돌아가기
        </Link>
      </div>
    );
  }

  const otherProjects = portfolioProjects.filter((item) => item.slug !== project.slug);
  const demoVideoEmbedUrl = toYouTubeEmbedUrl(project.demoVideoUrl);

  return (
    <div className={styles.mainWrapper}>
      <ProgressBar />
      <Link className={styles.backLink} to="/introduce/profile">
        ← 프로필로 돌아가기
      </Link>

      <header className={styles.projectIntro}>
        <div className={styles.introCopy}>
          <Typography className={styles.title} variant="h1">
            {project.title}
          </Typography>
          <p className={styles.subtitle}>{project.shortDescription}</p>
          <p className={styles.introDescription}>{project.description}</p>

          <dl className={styles.introMeta}>
            <div>
              <dt>기간</dt>
              <dd>{project.period}</dd>
            </div>
            <div>
              <dt>인원</dt>
              <dd>{project.teamSize}</dd>
            </div>
            <div>
              <dt>담당</dt>
              <dd>{project.responsibilities}</dd>
            </div>
            <div>
              <dt>스택</dt>
              <dd>{project.stack.slice(0, 6).join(', ')}</dd>
            </div>
          </dl>
        </div>

        <div className={styles.introVisual}>
          <img alt={`${project.title} 프로젝트 대표 화면`} src={`${assetBase}/projects/${project.slug}.png`} />
        </div>
      </header>

      {demoVideoEmbedUrl ? (
        <section className={`${styles.section} ${styles.videoSection}`}>
          <Typography variant="h2">✔️ 시연 영상</Typography>
          <div className={styles.videoWrapper}>
            <iframe
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              src={demoVideoEmbedUrl}
              title={`${project.title} 시연 영상`}
            />
          </div>
        </section>
      ) : null}

      <section className={styles.section}>
        <Typography variant="h2">✔️ 구현 사항</Typography>
        <ul className={styles.list}>
          {project.implementation.map((item) => (
            <li className={typeof item === 'string' ? undefined : styles.implementationItem} key={getImplementationKey(item)}>
              {typeof item === 'string' ? (
                item
              ) : (
                <>
                  <strong className={styles.implementationTitle}>[{item.title}]</strong>
                  <ul className={styles.implementationDetailList}>
                    {item.details.map((detail) => (
                      <li key={detail}>{detail}</li>
                    ))}
                    {item.techStack ? (
                      <li>
                        <strong>기술 스택:</strong> {item.techStack}
                      </li>
                    ) : null}
                    {item.usage ? (
                      <li>
                        <strong>활용 방법:</strong> {item.usage}
                      </li>
                    ) : null}
                  </ul>
                </>
              )}
            </li>
          ))}
        </ul>
      </section>

      {project.problems?.length ? (
        <section className={styles.section}>
          <Typography variant="h2">✔️ 문제 현상</Typography>
          <div className={styles.problemList}>
            {project.problems.map((problem) => (
              <article className={styles.problemCard} key={problem.title}>
                <Typography className={styles.problemTitle} variant="h3">
                  {problem.title}
                </Typography>

                <div className={styles.problemBlock}>
                  <strong>문제 현상</strong>
                  <ul className={styles.problemDetailList}>
                    {problem.symptoms.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>

                <div className={styles.problemBlock}>
                  <strong>원인</strong>
                  <ul className={styles.problemDetailList}>
                    {problem.causes.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>

                <div className={styles.problemBlock}>
                  <strong>추가 확인 사항</strong>
                  <ul className={styles.problemDetailList}>
                    {problem.checks.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </section>
      ) : null}

      {project.improvementFlow ? (
        <section className={styles.section}>
          <Typography variant="h2">✔️ 개선 과정</Typography>
          <div className={styles.flowGrid}>
            <article className={styles.flowCard}>
              <Typography className={styles.flowTitle} variant="h3">
                기존 구조
              </Typography>
              <ol className={styles.flowList}>
                {project.improvementFlow.before.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ol>
            </article>
            <article className={styles.flowCard}>
              <Typography className={styles.flowTitle} variant="h3">
                개선 구조
              </Typography>
              <ol className={styles.flowList}>
                {project.improvementFlow.after.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ol>
            </article>
          </div>
        </section>
      ) : null}

      {project.beforeAfter?.length ? (
        <section className={styles.section}>
          <Typography variant="h2">✔️ Before & After</Typography>
          <div className={styles.comparisonTableWrapper}>
            <table className={styles.comparisonTable}>
              <thead>
                <tr>
                  <th>구분</th>
                  <th>Before</th>
                  <th>After</th>
                </tr>
              </thead>
              <tbody>
                {project.beforeAfter.map((item) => (
                  <tr key={item.label}>
                    <th scope="row">{item.label}</th>
                    <td>{item.before}</td>
                    <td>{item.after}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      ) : null}

      {project.solutionProcess?.length ? (
        <section className={styles.section}>
          <Typography variant="h2">✔️ 해결 과정</Typography>
          <div className={styles.solutionList}>
            {project.solutionProcess.map((step, index) => (
              <article className={styles.solutionCard} key={step.title}>
                <Typography className={styles.solutionTitle} variant="h3">
                  {index + 1}) {step.title}
                </Typography>
                <ul className={styles.problemDetailList}>
                  {step.details.map((detail) => (
                    <li key={detail}>{detail}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>
      ) : null}

      <section className={styles.section}>
        <Typography variant="h2">✔️ 담당 역할</Typography>
        <p className={styles.paragraph}>{project.roleSummary}</p>
        <ul className={styles.list}>
          {project.roleDetails.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className={styles.section}>
        <Typography variant="h2">✔️ 기술 스택</Typography>
        <div className={styles.chipBox}>
          {project.stack.map((item) => (
            <Chip key={item} size="sm" value={item} variant="outlined" />
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <Typography variant="h2">✔️ 기술 선정 이유</Typography>
        <ul className={styles.list}>
          {project.techSelectionReasons.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className={styles.section}>
        <Typography variant="h2">✔️ 프로젝트 성과</Typography>
        <ul className={styles.list}>
          {project.outcomes.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className={styles.section}>
        <Typography variant="h2">✔️ 프로젝트 리뷰</Typography>
        <ul className={styles.list}>
          {project.review.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className={styles.section}>
        <Typography variant="h2">Other Projects.</Typography>
        <div className={styles.otherProjectList}>
          {otherProjects.map((item) => (
            <Link className={styles.otherProject} key={item.slug} to={`/introduce/profile/projects/${item.slug}`}>
              <span>{item.title}</span>
              <small>{item.period}</small>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
