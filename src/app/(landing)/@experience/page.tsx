import { SectionLayout } from '../components/section-layout';
import { ExperienceCard } from './components/experience-card/experience-card';
import { ExperienceList } from './components/experience-list';

export default function Skills() {
  return (
    <SectionLayout
      title='Experience and Education'
      subtitle='My Professional and Academic Path'
      id='experience'
    >
      <div className='mx-auto md:w-4/6  lg:w-3/6'>
        <ExperienceList>
          <ExperienceCard
            options={{
              type: 'unemployement',
            }}
          />
          <ExperienceCard
            options={{
              companyName: 'Nearsoft',
              role: 'Team Lead & Senior Frontend Engineer',
              startDate: new Date('2022-12-01'),
              endDate: new Date('2023-12-01'),
              type: 'employement',
              location: 'Funchal',
              companyLogo: '/nearsoft.jpg',
              companyUrl: 'https://www.nearsoft.pt/',
            }}
          />
          <ExperienceCard
            options={{
              companyName: 'Unipartner IT Services',
              role: 'Application Engineer',
              startDate: new Date('2021-12-01'),
              endDate: new Date('2022-12-01'),
              type: 'employement',
              location: 'Funchal',
              companyLogo: '/unipartner.png',
              companyUrl: 'https://www.unipartner.com/',
            }}
          />
          <ExperienceCard
            options={{
              companyName: 'Universidade da Madeira',
              role: 'System Administrator',
              startDate: new Date('2021-11-01'),
              endDate: new Date('2021-12-01'),
              type: 'employement',
              location: 'Funchal',
              companyLogo: '/uma.png',
              companyUrl: 'https://www.uma.pt/',
            }}
          />
        </ExperienceList>
      </div>
    </SectionLayout>
  );
}
