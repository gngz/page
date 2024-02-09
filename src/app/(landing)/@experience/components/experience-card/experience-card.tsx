import EmployementCard from './employement-card';
import { ExperienceCardOptions } from './types';
import UnemployementCard from './unemployement-card';

type Props = {
  options: ExperienceCardOptions;
};

export function ExperienceCard({ options }: Readonly<Props>) {
  if (options.type === 'unemployement') return <UnemployementCard />;

  if (options.type === 'employement')
    return <EmployementCard options={options} />;
}
