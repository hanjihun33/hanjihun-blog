import type { BlogTag } from '../../../types/blog';
import styles from '../../../styles/components/post/side.module.css';
import { Typography } from '../../tailwind/client-components';

export default function TagBox({ tags }: { tags: BlogTag[] }) {
  return (
    <div className={styles.tagWrapper}>
      <Typography color="gray" variant="h6">
        태그
      </Typography>
      {tags.map((tag) => (
        <Typography color="gray" key={tag.id}>
          #{tag.name.toUpperCase()}
        </Typography>
      ))}
    </div>
  );
}
