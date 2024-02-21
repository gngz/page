import { ComponentProps } from 'react';
import ReactMarkdown from 'react-markdown';

type ReactMarkdownProps = ComponentProps<typeof ReactMarkdown>;

type Props = {
  children: ReactMarkdownProps['children'];
};

const markdownComponents: ReactMarkdownProps['components'] = {};

export function Markdown({ children }: Readonly<Props>) {
  return (
    <ReactMarkdown components={markdownComponents}>{children}</ReactMarkdown>
  );
}
