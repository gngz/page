import { ComponentProps } from 'react';
import ReactMarkdown from 'react-markdown';
import { CodeBlock } from './code-block';

type ReactMarkdownProps = ComponentProps<typeof ReactMarkdown>;

type Props = {
  children: ReactMarkdownProps['children'];
};

const markdownComponents: ReactMarkdownProps['components'] = {
  code: CodeBlock,
  pre: 'div',
};

export function Markdown({ children }: Readonly<Props>) {
  return (
    <ReactMarkdown components={markdownComponents}>{children}</ReactMarkdown>
  );
}
