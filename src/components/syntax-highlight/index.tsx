'use client';

import hljs from 'highlight.js';
import 'highlight.js/styles/github.css';
import { PropsWithChildren, useEffect } from 'react';

export function SyntaxHighlight({ children }: Readonly<PropsWithChildren>) {
  useEffect(() => {
    hljs.highlightAll();
  }, []);

  return <>{children}</>;
}
