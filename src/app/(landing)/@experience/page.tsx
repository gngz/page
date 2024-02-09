import { SectionLayout } from '../components/section-layout';
import { BadgeHR } from './components/badge-hr';
import EducationCard from './components/experience-card/education-card';
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
              startDate: new Date('2022-06-01'),
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
              startDate: new Date('2020-09-01'),
              endDate: new Date('2022-05-01'),
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
              startDate: new Date('2020-07-01'),
              endDate: new Date('2020-08-01'),
              type: 'employement',
              location: 'Funchal',
              companyLogo: '/uma.png',
              companyUrl: 'https://www.uma.pt/',
            }}
          />
        </ExperienceList>
        <BadgeHR>Academic Path</BadgeHR>
        <ExperienceList>
          <EducationCard
            options={{
              institutionName: 'Universidade da Madeira',
              courseName: 'Master Degree',
              startDate: new Date('2021-11-01'),

              instituitionLogo: '/uma.png',
              instituitionUrl: 'https://www.uma.pt/',
              location: 'Funchal',
            }}
          />
          <EducationCard
            options={{
              institutionName: 'Universidade da Madeira',
              courseName: "Bachelor's Degree",
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
