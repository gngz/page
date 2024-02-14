import Image from 'next/image';
type Props = {
  skill: keyof typeof skills;
};

const skills: Record<
  | 'nextjs'
  | 'react'
  | 'typescript'
  | 'javascript'
  | 'php'
  | 'csharp'
  | 'sass'
  | 'tailwind'
  | 'node'
  | 'linux'
  | 'ansible'
  | 'docker'
  | 'aws'
  | 'vercel'
  | 'cloudflare'
  | 'postgres'
  | 'mysql'
  | 'vscode'
  | 'figma'
  | 'git'
  | 'github',
  { skillName: string; skillImageSrc?: string }
> = {
  nextjs: {
    skillName: 'Next.js',
    skillImageSrc: '/skills/nextjs.svg',
  },
  react: {
    skillName: 'React.js',
    skillImageSrc: '/skills/react.svg',
  },
  typescript: {
    skillName: 'TypeScript',
    skillImageSrc: '/skills/typescript.svg',
  },
  javascript: {
    skillName: 'JavaScript',
    skillImageSrc: '/skills/javascript.svg',
  },
  php: {
    skillName: 'PHP',
    skillImageSrc: '/skills/php.svg',
  },
  csharp: {
    skillName: 'C#',
    skillImageSrc: '/skills/csharp.svg',
  },
  sass: {
    skillName: 'Sass',
    skillImageSrc: '/skills/sass.svg',
  },
  tailwind: {
    skillName: 'Tailwind',
    skillImageSrc: '/skills/tailwind.svg',
  },
  node: {
    skillName: 'Node.js',
    skillImageSrc: '/skills/nodejs.svg',
  },
  linux: {
    skillName: 'Linux',
    skillImageSrc: '/skills/linux.svg',
  },
  ansible: {
    skillName: 'Ansible',
    skillImageSrc: '/skills/ansible.svg',
  },
  docker: {
    skillName: 'Docker',
    skillImageSrc: '/skills/docker.svg',
  },

  aws: {
    skillName: 'AWS',
    skillImageSrc: '/skills/aws.svg',
  },
  vercel: {
    skillName: 'Vercel',
    skillImageSrc: '/skills/vercel.svg',
  },
  cloudflare: {
    skillName: 'Cloudflare',
    skillImageSrc: '/skills/cloudflare.svg',
  },
  postgres: {
    skillName: 'PostgreSQL',
    skillImageSrc: '/skills/postgres.svg',
  },
  mysql: {
    skillName: 'MySQL',
    skillImageSrc: '/skills/mysql.svg',
  },
  vscode: {
    skillName: 'VS Code',
    skillImageSrc: '/skills/vscode.svg',
  },
  figma: {
    skillName: 'Figma',
    skillImageSrc: '/skills/figma.svg',
  },
  git: {
    skillName: 'Git',
    skillImageSrc: '/skills/git.svg',
  },
  github: {
    skillName: 'GitHub',
    skillImageSrc: '/skills/github.svg',
  },
};

export function Skill({ skill }: Readonly<Props>) {
  const { skillName, skillImageSrc } = skills[skill];

  return (
    <div className='flex-grow md:flex-grow-0 rounded-xl border pl-1 pr-3 py-1 flex gap-3 items-center bg-slate-100'>
      {skillImageSrc && (
        <Image
          src={skillImageSrc}
          alt={skillName}
          width={32}
          height={32}
          className='pointer-events-none user-select-none'
        />
      )}
      <p className='font-light text-lg h-[24px] text-center flex-grow'>
        {skillName}
      </p>
    </div>
  );
}
