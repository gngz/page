import { ReactNode } from 'react';

type Props = {
  children?: ReactNode;
};

export function ExperienceList({ children }: Props) {
  return (
    <div className='grid grid-flow-row gap-1 [&>*:first-child]:rounded-t-md [&>*:last-child]:rounded-b-md'>
      {children}
    </div>
  );
}
