import { Text } from '../../../../components/ui/text';
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
      <div className='mb-14 mt-2'>
        <TerminalLineWithIcon icon={'👋'}>
          <strong>Name:</strong> Diogo Passos
        </TerminalLineWithIcon>
        <TerminalLineWithIcon icon={'📍'}>
          <strong>Location:</strong> Funchal,{' '}
          <span className='whitespace-nowrap'>Madeira 🇵🇹</span>
        </TerminalLineWithIcon>
        <TerminalLineWithIcon icon={'💼'}>
          <strong>Company:</strong>{' '}
          <Link
            className='ml-1 hover:underline'
            href={'https://yacoobalabs.com/'}
            target='_blank'
          >
            Yacooba Labs
          </Link>
        </TerminalLineWithIcon>
        <TerminalLineWithIcon icon={'👨‍💻'}>
          <strong>Role:</strong> Software Engineer
        </TerminalLineWithIcon>
        <TerminalLineWithIcon icon={'🛠️'}>
          <strong>Top Skills:</strong> Next.js, React.js, TypeScript, Node.js,
          AWS
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
