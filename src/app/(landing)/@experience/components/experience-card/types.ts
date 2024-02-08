export type EmploymentCardOptions = {
  type: 'employement';
  startDate: Date;
  endDate?: Date;
  companyName: string;
  companyUrl?: string;
  role: string;
  companyLogo: string;
  location: string;
};

export type ExperienceCardOptions =
  | {
      type: 'unemployement';
    }
  | EmploymentCardOptions;
