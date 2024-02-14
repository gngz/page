import { Text } from '@/components/ui/text';
import Link from 'next/link';
import {
  Terminal,
  TerminalBlink,
  TerminalLine,
  TerminalLineWithIcon,
} from '../../components/terminal';

export function HeroTerminal() {
  return (
    <Terminal title='zsh'>
      <TerminalLine>
        <Text as='span' className='text-emerald-400'>
          diogopassos.pt
        </Text>
        :
        <Text as='span' className='text-emerald-400'>
          ~
        </Text>
        $ whoami
      </TerminalLine>
      <div className='mt-2 mb-14'>
        <TerminalLineWithIcon icon={'👋'}>
          <strong>Name:</strong> Diogo Passos
        </TerminalLineWithIcon>
        <TerminalLineWithIcon icon={'📍'}>
          <strong>Location:</strong> Funchal,{' '}
          <span className='whitespace-nowrap'>Madeira 🇵🇹</span>
        </TerminalLineWithIcon>
        <TerminalLineWithIcon icon={'💼'}>
          <strong>Company:</strong>{' '}
          <Link className='hover:underline ml-1' href={'#contact'}>
            your-company-here
          </Link>
        </TerminalLineWithIcon>
        <TerminalLineWithIcon icon={'👨‍💻'}>
          <strong>Role:</strong> Frontend Engineer
        </TerminalLineWithIcon>
        <TerminalLineWithIcon icon={'🛠️'}>
          <strong>Top Skills:</strong> Next.js, React.js, TypeScript, Node, AWS
        </TerminalLineWithIcon>
      </div>
      <TerminalLine>
        <Text as='span' className='text-emerald-400'>
          diogopassos.pt
        </Text>
        :
        <Text as='span' className='text-emerald-400'>
          ~
        </Text>
        <TerminalBlink />
      </TerminalLine>
    </Terminal>
  );
}
