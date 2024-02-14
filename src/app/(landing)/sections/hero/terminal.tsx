import { Text } from '@/components/ui/text';
import Link from 'next/link';
import {
  Terminal,
  TerminalBlink,
  TerminalLine,
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
      <div className='mt-1 mb-16'>
        <TerminalLine>👋 Name: Diogo Passos</TerminalLine>
        <TerminalLine>
          <p>
            📍 Location: Funchal,{' '}
            <span className='whitespace-nowrap'>Madeira Island 🇵🇹</span>
          </p>
        </TerminalLine>
        <TerminalLine>
          💼 Company:{' '}
          <Link className='hover:underline ml-1' href={'#contact'}>
            your-company-here
          </Link>
        </TerminalLine>
        <TerminalLine>⭐ Role: Frontend Engineer</TerminalLine>
        <TerminalLine>
          🛠️ Top Skills: Next.js, React, TypeScript, AWS
        </TerminalLine>
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
