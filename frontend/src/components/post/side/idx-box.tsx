import GithubSlugger from 'github-slugger';
import styles from '../../../styles/components/post/side.module.css';
import { Typography } from '../../tailwind/client-components';

type IdxType = {
  idx: number;
  line: string;
  link: string;
};

function renderInlineCode(text: string) {
  const parts = text.split(/(`[^`]+`)/g);

  return parts.map((part, index) => {
    if (part.startsWith('`') && part.endsWith('`')) {
      return (
        <code className="bg-surface-200 text-primary-700 px-1 py-0.5 rounded text-xs font-mono" key={index}>
          {part.slice(1, -1)}
        </code>
      );
    }

    return part;
  });
}

export default function IdxBox({ content, id, url }: { content: string; id: number; url: string }) {
  const result = getIdxList(content);

  if (result.length === 0) {
    return null;
  }

  return (
    <div className={styles.idxWrapper}>
      <Typography color="gray" variant="h6">
        목차
      </Typography>
      {result.map((item, index) => (
        <Typography className={`${styles[`idxTap${item.idx}`]} ${styles.idx}`} color="gray" key={`${item.link}-${index}`}>
          <a href={`/${url}/${id}/#${item.link}`}>{renderInlineCode(item.line)}</a>
        </Typography>
      ))}
    </div>
  );
}

function getIdxList(content: string): IdxType[] {
  const slugger = new GithubSlugger();
  const result: IdxType[] = [];
  const contentByLine = getPlainContent(content);

  contentByLine.forEach((line) => {
    const first = line.match(/^# (.*$)/gim);
    const second = line.match(/^## (.*$)/gim);
    const third = line.match(/^### (.*$)/gim);

    if (first) {
      const text = first[0].replace(/^# /, '');
      result.push({ idx: 1, line: text, link: slugger.slug(text) });
      return;
    }

    if (second) {
      const text = second[0].replace(/^## /, '');
      result.push({ idx: 2, line: text, link: slugger.slug(text) });
      return;
    }

    if (third) {
      const text = third[0].replace(/^### /, '');
      result.push({ idx: 3, line: text, link: slugger.slug(text) });
    }
  });

  return result;
}

function getPlainContent(content: string) {
  return content
    .replace(/^> (.*$)/gim, '')
    .replace(/!\[(.*?)]\((.*?)\)/gim, '')
    .replace(/\[(.*?)]\((.*?)\)/gim, '')
    .replace(/^([A-Za-z \t]*)```([A-Za-z]*)?\n([\s\S]*?)```([A-Za-z \t]*)*$/gm, '')
    .split('\n');
}
