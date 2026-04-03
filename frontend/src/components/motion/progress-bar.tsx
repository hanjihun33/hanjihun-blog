import { motion, useScroll } from 'motion/react';
import styles from '../../styles/app/blog/id/page.module.css';

export default function ProgressBar() {
  const { scrollYProgress } = useScroll();

  return (
    <div className={styles.progressBarWrapper}>
      <motion.div className={styles.progressBar} style={{ scaleX: scrollYProgress }} />
    </div>
  );
}
