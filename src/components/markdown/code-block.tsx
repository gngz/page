import { Terminal } from '@/app/(landing)/components/terminal';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
type Props = React.HTMLAttributes<HTMLElement>;

export function CodeBlock(props: Readonly<React.HTMLAttributes<HTMLElement>>) {
  const { children, className, ...rest } = props;
  const matchLanguage = /language-(\w+)/.exec(className ?? '');
  const language = matchLanguage?.at(1);

  return (
    <Terminal title={language ?? ''}>
      <SyntaxHighlighter
        {...rest}
        language={language}
        style={atomDark}
        customStyle={{
          borderRadius: '0',
          marginTop: 0,
          backgroundColor: 'transparent',
        }}
        showLineNumbers
      >
        {String(children).replace(/\n$/, '')}
      </SyntaxHighlighter>
    </Terminal>
  );
}
