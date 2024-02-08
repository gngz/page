export type EmploymentCardOptions = {
  type: 'employement';
  startDate: Date;
  endDate?: Date;
  companyName: string;
  role: string;
  companyLogo: string;
  location: 'Remote' | 'Hybrid' | string;
};

export type ExperienceCardOptions =
  | {
      type: 'unemployement';
    }
  | EmploymentCardOptions;
