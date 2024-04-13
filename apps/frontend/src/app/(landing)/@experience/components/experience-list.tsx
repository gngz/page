import { cn } from '@/lib/utils/cn';
import { ReactNode } from 'react';

type Props = {
  children?: ReactNode;
  highglightFirst?: boolean;
};

export function ExperienceList({ children, highglightFirst }: Readonly<Props>) {
  return (
    <div
      className={cn(
        'grid grid-flow-row gap-1 [&>*:first-child]:rounded-t-md [&>*:last-child]:rounded-b-md',
        highglightFirst &&
          '[&>*:first-child]:mb-2 [&>*:first-child]:rounded-md  [&>*:first-child]:ring [&>*:first-child]:ring-zinc-600 [&>*:first-child]:ring-offset-4',
      )}
    >
      {children}
    </div>
  );
}
