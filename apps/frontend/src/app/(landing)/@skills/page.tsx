import { PropsWithChildren } from 'react';
import { Heading } from '../../../components/ui/heading';
import { SectionLayout } from '../components/section-layout';
import { Skill } from './components/skill';

const SkillsList = ({ children }: Readonly<PropsWithChildren>) => {
  return (
    <div className='mb-12 grid grid-cols-2 gap-4 sm:grid-cols-4'>
      {children}
    </div>
  );
};

export default function Skills() {
  return (
    <SectionLayout
      title='Skills and Tecnologies'
      subtitle='Here are some of my skills and my prefered technologies.'
      id='skills'
    >
      <Heading as='h3' className='mb-6 text-center text-2xl font-light'>
        Software Development
      </Heading>
      <SkillsList>
        <Skill skill='nextjs' />
        <Skill skill='react' />
        <Skill skill='typescript' />
        <Skill skill='javascript' />
        <Skill skill='php' />
        <Skill skill='csharp' />
        <Skill skill='golang' />
        <Skill skill='dart' />
        <Skill skill='sass' />
        <Skill skill='tailwind' />
        <Skill skill='node' />
        <Skill skill='bun' />
        <Skill skill='prisma' />
      </SkillsList>
      <Heading as='h3' className='mb-6 text-center text-2xl font-light'>
        Systems & DevOps
      </Heading>
      <SkillsList>
        <Skill skill='linux' />
        <Skill skill='ansible' />
        <Skill skill='docker' />
        <Skill skill='aws' />
        <Skill skill='vercel' />
        <Skill skill='cloudflare' />
        <Skill skill='postgres' />
        <Skill skill='mysql' />
        <Skill skill='nginx' />
        <Skill skill='caddy' />
      </SkillsList>
      <Heading as='h3' className='mb-6 text-center text-2xl font-light'>
        Tools
      </Heading>
      <SkillsList>
        <Skill skill='vscode' />
        <Skill skill='postman' />
        <Skill skill='figma' />
        <Skill skill='git' />
        <Skill skill='github' />
        <Skill skill='gitlab' />
      </SkillsList>
    </SectionLayout>
  );
}
