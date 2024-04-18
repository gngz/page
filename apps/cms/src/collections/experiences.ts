import { CollectionConfig } from 'payload/types';

const Experiences: CollectionConfig = {
  slug: 'experience',
  labels: {
    singular: {
      en: 'Professional Experience',
      pt: 'Experiência Profissional',
    },
    plural: {
      en: 'Professional Experiences',
      pt: 'Experiências Profissionais',
    },
  },
  fields: [
    {
      name: 'type',
      label: {
        en: 'Type',
        pt: 'Tipo',
      },
      type: 'radio',
      required: true,
      options: [
        {
          label: {
            en: 'Academic Experience',
            pt: 'Experiência Académica',
          },
          value: 'academic',
        },
        {
          label: {
            en: 'Professional Experience',
            pt: 'Experiência Profissional',
          },
          value: 'professional',
        },
      ],
    },
    {
      name: 'startDate',
      label: {
        en: 'Start Date',
        pt: 'Data de Início',
      },
      type: 'date',
      required: true,
    },
    {
      name: 'endDate',
      label: {
        en: 'End Date',
        pt: 'Data de Fim',
      },
      type: 'date',
    },
    {
      name: 'logo',
      label: {
        en: 'Logo',
        pt: 'Logotipo',
      },
      type: 'upload',
      relationTo: 'uploads',
      filterOptions: {
        mimeType: { contains: 'image' },
      },
      required: true,
    },
    {
      name: 'entity',
      label: {
        en: 'Organization',
        pt: 'Entidade',
      },
      type: 'text',
      required: true,
      localized: true,
    },
    {
      name: 'role',
      label: {
        en: 'Role',
        pt: 'Cargo',
      },
      type: 'text',
      required: true,
      admin: {
        condition: (data) => data.type === 'professional',
      },
      localized: true,
    },
    {
      name: 'course',
      label: {
        en: 'Course',
        pt: 'Curso',
      },
      type: 'text',
      required: true,
      admin: {
        condition: (data) => data.type === 'academic',
      },
      localized: true,
    },
  ],
};

export default Experiences;
