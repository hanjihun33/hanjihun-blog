import '@uiw/react-markdown-preview/markdown.css';
import MarkdownPreview from '@uiw/react-markdown-preview';
import '../../styles/app/blog/id/page.css';

export default function Markdown({ content }: { content: string }) {
  return <MarkdownPreview source={content} warpperElement={{ 'data-color-mode': 'light' }} />;
}
