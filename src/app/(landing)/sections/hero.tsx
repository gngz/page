import { Heading } from '@/components/ui/heading';
import { Text } from '@/components/ui/text';
import Link from 'next/link';
import { Terminal, TerminalBlink, TerminalLine } from '../components/terminal';

const ConsoleTerminal = (
  <Terminal title='bash'>
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
    <div className='my-1'>
      <TerminalLine>Name: Diogo Passos</TerminalLine>
      <TerminalLine>
        Company:{' '}
        <Link className='hover:underline ml-1' href={'#contact'}>
          your-company-here
        </Link>
      </TerminalLine>
      <TerminalLine>Role: Frontend Engineer</TerminalLine>
      <TerminalLine>Top Skills: Next.js, React, AWS</TerminalLine>
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
export function Hero() {
  return (
    <section>
      <main className='container grid grid-cols-1 md:grid-cols-[1fr_auto] py-4'>
        <div>
          <Heading className='text-2xl font-bold'>Who am i?</Heading>
          <Heading as='h2' className='text-lg font-bold'>
            Ask to the terminal!
          </Heading>
        </div>
        <div>{ConsoleTerminal}</div>
      </main>
    </section>
  );
}
