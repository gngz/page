'use client';

import hljs from 'highlight.js';
import { PropsWithChildren, useEffect } from 'react';

export function SyntaxHighlight({ children }: Readonly<PropsWithChildren>) {
  useEffect(() => {
    hljs.highlightAll();
  }, []);

  return <>{children}</>;
}
