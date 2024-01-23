import { Terminal, TerminalBlink, TerminalLine } from '../components/terminal';
import { Text } from '@/components/ui/text';

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
      <TerminalLine>Company: your-company-here</TerminalLine>
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
    <section className=''>
      <main className='container grid grid-cols-[1fr_auto] py-4'>
        <div></div>
        <div>{ConsoleTerminal}</div>
      </main>
    </section>
  );
}
