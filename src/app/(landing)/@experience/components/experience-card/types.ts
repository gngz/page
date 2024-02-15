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

export type EducationCardOptions = {
  type: 'education';
  institutionName: string;
  instituitionUrl: string;
  instituitionLogo: string;
  courseName: string;
  startDate: Date;
  endDate?: Date;
  location: string;
};

export type ExperienceCardOptions =
  | {
      type: 'unemployement';
    }
  | EmploymentCardOptions
  | EducationCardOptions;
