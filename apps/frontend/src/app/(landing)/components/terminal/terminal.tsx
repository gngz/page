import { Shape } from '../../../../components/ui/shape';
import { PropsWithChildren } from 'react';
import { TerminalLineProps, TerminalProps } from './types';

export function TerminalLine({ children }: Readonly<TerminalLineProps>) {
  return <div className='mb-1 text-sm'>{children}</div>;
}

type TerminalLineWithIconProps = PropsWithChildren & {
  icon: React.ReactNode;
};
export function TerminalLineWithIcon({
  icon,
  children,
}: Readonly<TerminalLineWithIconProps>) {
  return (
    <div className='mb-1 flex gap-3 text-sm'>
      <span>{icon}</span>
      <span>{children}</span>
    </div>
  );
}

function TerminalTitleBarButtons() {
  const size = 14;
  return (
    <div className='inline-flex gap-1 pl-2'>
      <Shape
        variant='circle'
        radius={size}
        className='border border-red-600 bg-red-500 hover:bg-red-600'
      />
      <Shape
        variant='circle'
        radius={size}
        className='border border-yellow-600 bg-yellow-500 hover:bg-yellow-600'
      />
      <Shape
        variant='circle'
        radius={size}
        className='border border-green-600 bg-green-500 hover:bg-green-600'
      />
    </div>
  );
}

function TerminalTitleBar({ title }: Readonly<{ title: string }>) {
  return (
    <div className='grid grid-cols-3 items-center bg-zinc-950 py-1'>
      <TerminalTitleBarButtons />
      <div className='flex select-none items-center justify-center font-mono text-sm text-white'>
        {title}
      </div>
    </div>
  );
}

export function TerminalBlink({ children }: Readonly<PropsWithChildren>) {
  return (
    <div className='ml-1 inline-block h-[1.1em] w-2 animate-blink-cursor bg-indigo-500 '></div>
  );
}

export function Terminal({
  children,
  title = 'terminal',
}: Readonly<TerminalProps>) {
  return (
    <div className='flex w-full flex-col overflow-hidden rounded-sm border-[1.5px] border-zinc-950 md:min-w-[600px]'>
      <TerminalTitleBar title={title} />
      <div className='flex-col bg-zinc-900 bg-opacity-90 p-2 font-mono text-[#EDECEE] filter backdrop-blur-xl'>
        {children}
      </div>
    </div>
  );
}
