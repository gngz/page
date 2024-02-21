import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';
type Props = React.HTMLAttributes<HTMLElement>;

export function CodeBlock(props: Readonly<React.HTMLAttributes<HTMLElement>>) {
  const { children, className, ...rest } = props;
  const matchLanguage = /language-(\w+)/.exec(className ?? '');
  const language = matchLanguage?.at(1);

  return matchLanguage ? (
    <SyntaxHighlighter {...rest} PreTag='div' language={language} style={dark}>
      {String(children).replace(/\n$/, '')}
    </SyntaxHighlighter>
  ) : (
    <code {...rest} className={className}>
      {children}
    </code>
  );
}
