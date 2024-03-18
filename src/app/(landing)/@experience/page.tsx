import { SectionLayout } from '../components/section-layout';
import { BadgeHR } from './components/badge-hr';
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
          {/* <ExperienceCard
            options={{
              type: 'unemployement',
            }}
          /> */}
          <ExperienceCard
            options={{
              type: 'employement',
              companyName: 'Yacooba Labs',
              role: 'Software Engineer',
              startDate: new Date('2024-03-01'),
              location: 'Funchal',
              companyLogo: '/yacooba.png',
              companyUrl: 'https://www.yacoobalabs.com/',
            }}
          />
          <ExperienceCard
            options={{
              type: 'employement',
              companyName: 'Nearsoft',
              role: 'Team Lead & Senior Frontend Engineer',
              startDate: new Date('2022-06-01'),
              endDate: new Date('2023-12-01'),
              location: 'Funchal',
              companyLogo: '/nearsoft.jpg',
              companyUrl: 'https://www.nearsoft.pt/',
            }}
          />
          <ExperienceCard
            options={{
              type: 'employement',
              companyName: 'Unipartner IT Services',
              role: 'Application Engineer',
              startDate: new Date('2020-09-01'),
              endDate: new Date('2022-05-01'),
              location: 'Funchal',
              companyLogo: '/unipartner.png',
              companyUrl: 'https://www.unipartner.com/',
            }}
          />
          <ExperienceCard
            options={{
              type: 'employement',
              companyName: 'Universidade da Madeira',
              role: 'System Administrator',
              startDate: new Date('2020-07-01'),
              endDate: new Date('2020-08-01'),
              location: 'Funchal',
              companyLogo: '/uma.png',
              companyUrl: 'https://www.uma.pt/',
            }}
          />
        </ExperienceList>
        <BadgeHR>Academic Path</BadgeHR>
        <ExperienceList>
          <ExperienceCard
            options={{
              type: 'education',
              institutionName: 'Universidade da Madeira',
              courseName: 'Software Engineering - Master Degree',
              startDate: new Date('2021-11-01'),
              instituitionLogo: '/uma.png',
              instituitionUrl: 'https://www.uma.pt/',
              location: 'Funchal',
            }}
          />
          <ExperienceCard
            options={{
              type: 'education',
              institutionName: 'Universidade da Madeira',
              courseName: "Software Engineering - Bachelor's Degree",
              startDate: new Date('2015-09-01'),
              endDate: new Date('2019-06-01'),
              instituitionLogo: '/uma.png',
              instituitionUrl: 'https://www.uma.pt/',
              location: 'Funchal',
            }}
          />
        </ExperienceList>
      </div>
    </SectionLayout>
  );
}
