import { Heading } from '@/components/ui/heading';
import { SectionLayout } from '../components/section-layout';
import { Skill } from './components/skill';

export default function Skills() {
  return (
    <SectionLayout
      title='Skills and Tecnologies'
      subtitle='Here are some of my skills and my prefered technologies.'
      id='skills'
    >
      <Heading as='h3' className='text-center text-2xl mb-6 font-light'>
        Software Development
      </Heading>
      <div className='flex gap-4 mb-12 justify-between md:justify-center flex-wrap'>
        <Skill skill='nextjs' />
        <Skill skill='react' />
        <Skill skill='typescript' />
        <Skill skill='javascript' />
        <Skill skill='php' />
        {/* <Skill skill='csharp' /> */}
        <Skill skill='sass' />
        <Skill skill='tailwind' />
        <Skill skill='node' />
      </div>

      <div className='flex gap-4 mb-6'></div>
      <Heading as='h3' className='text-center text-2xl mb-6 font-light'>
        Systems & DevOps
      </Heading>
      <div className='flex gap-4 mb-12 justify-between md:justify-center flex-wrap'>
        <Skill skill='linux' />
        <Skill skill='ansible' />
        <Skill skill='docker' />
        <Skill skill='aws' />
        <Skill skill='vercel' />
        <Skill skill='cloudflare' />
        <Skill skill='postgres' />
        <Skill skill='mysql' />
      </div>
      <Heading as='h3' className='text-center text-2xl mb-6 font-light'>
        Tools
      </Heading>
      <div className='flex gap-4 mb-12 justify-between md:justify-center flex-wrap'>
        <Skill skill='vscode' />
        <Skill skill='figma' />
        <Skill skill='git' />
        <Skill skill='github' />
      </div>
    </SectionLayout>
  );
}
