import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import IdxBox from '../components/post/side/idx-box';
import TagBox from '../components/post/side/tag-box';
import ProgressBar from '../components/motion/progress-bar';
import { Typography } from '../components/tailwind/client-components';
import Markdown from '../components/utils/markdown';
import { dateKoFormat, timeFormat } from '../components/utils/dateUtils';
import { fetchBlogPost } from '../lib/api';
import type { BlogPost } from '../types/blog';
import styles from '../styles/app/blog/id/page.module.css';

export default function BlogDetailPage() {
  const { postId } = useParams();
  const [post, setPost] = useState<BlogPost | null>(null);

  useEffect(() => {
    if (!postId) {
      return;
    }

    const controller = new AbortController();

    fetchBlogPost(Number(postId), controller.signal)
      .then((data) => setPost(data))
      .catch((error: unknown) => {
        if (error instanceof DOMException && error.name === 'AbortError') {
          return;
        }

        console.error(error);
      });

    return () => controller.abort();
  }, [postId]);

  if (!post) {
    return <div className="min-h-screen max-w-4xl mx-auto px-5 py-20 text-surface-500">Loading...</div>;
  }

  return (
    <>
      <IdxBox content={post.content} id={post.id} url="blogs" />
      <TagBox tags={post.tags} />
      <div className={styles.blogWrapper}>
        <ProgressBar />
        <div className={styles.titleText}>{post.title}</div>
        <div className={styles.dateWrapper}>
          <Typography>
            {dateKoFormat(post.createdDate)} {timeFormat(post.createdDate)}
          </Typography>
        </div>
        <img alt={`${post.id}-thumbnail-image`} className={styles.thumbnail} src={post.thumbnailUrl} />
        <div className={styles.postWrapper}>
          <Markdown content={post.content} />
        </div>
      </div>
    </>
  );
}
