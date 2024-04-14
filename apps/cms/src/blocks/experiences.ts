import { Block } from 'payload/types';
import { SectionField } from '../fields';

const ExperiencesBlock: Block = {
  slug: 'experience',
  labels: {
    singular: {
      en: 'Experience Section',
      pt: 'Secção de Experiências Profissionais',
    },
    plural: {
      en: 'Skills Sections',
      pt: 'Secção de Experiências Profissionais',
    },
  },
  interfaceName: 'ExperiencesBlock',
  fields: [
    SectionField,
    {
      name: 'unemployed',
      type: 'checkbox',
      label: {
        en: 'Unemployed',
        pt: 'Desempregado',
      },
    },
    {
      name: 'professional',
      label: {
        en: 'Professional Experiences',
        pt: 'Experiências Profissionais',
      },
      type: 'relationship',
      relationTo: 'experience',
      filterOptions: {
        type: {
          equals: 'professional',
        },
      },
      hasMany: true,
      unique: true,
      admin: {
        isSortable: true,
      },
    },
    {
      name: 'academic',
      label: {
        en: 'Academic Experiences',
        pt: 'Experiências Acadêmicas',
      },
      type: 'relationship',
      relationTo: 'experience',
      filterOptions: {
        type: {
          equals: 'academic',
        },
      },
      hasMany: true,
      unique: true,
      admin: {
        isSortable: true,
      },
    },
  ],
};

export default ExperiencesBlock;
