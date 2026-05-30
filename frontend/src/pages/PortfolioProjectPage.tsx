import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import ProgressBar from '../components/motion/progress-bar';
import { Chip, Typography } from '../components/tailwind/client-components';
import { findPortfolioProject, portfolioProjects } from '../data/portfolio-projects';
import styles from '../styles/app/introduce/profile/project.module.css';

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
          Portfolio로 돌아가기
        </Link>
      </div>
    );
  }

  const otherProjects = portfolioProjects.filter((item) => item.slug !== project.slug);

  return (
    <div className={styles.mainWrapper}>
      <ProgressBar />
      <Link className={styles.backLink} to="/introduce/profile">
        ← Portfolio로 돌아가기
      </Link>

      <header className={styles.hero}>
        <p className={styles.period}>{project.period}</p>
        <Typography className={styles.title} variant="h1">
          {project.title}
        </Typography>
        <p className={styles.lead}>{project.shortDescription}</p>
      </header>

      <section className={styles.section}>
        <Typography variant="h2">Project Description.</Typography>
        <p className={styles.paragraph}>{project.description}</p>
      </section>

      <section className={styles.section}>
        <Typography variant="h2">My Role.</Typography>
        <p className={styles.paragraph}>{project.roleSummary}</p>
        <ul className={styles.list}>
          {project.whatIDid.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className={styles.gridSection}>
        <article className={styles.card}>
          <Typography variant="h3">Main Features.</Typography>
          <ul className={styles.list}>
            {project.features.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
        <article className={styles.card}>
          <Typography variant="h3">Highlights.</Typography>
          <ul className={styles.list}>
            {project.highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
      </section>

      <section className={styles.section}>
        <Typography variant="h2">Tech Stack.</Typography>
        <div className={styles.chipBox}>
          {project.stack.map((item) => (
            <Chip key={item} size="sm" value={item} variant="outlined" />
          ))}
        </div>
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
