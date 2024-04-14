import { Block } from 'payload/types';
import { SectionField } from '../fields';

const SkillBlock: Block = {
  slug: 'skills',
  labels: {
    singular: {
      en: 'Skills Section',
      pt: 'Secção de Competências',
    },
    plural: {
      en: 'Skills Sections',
      pt: 'Secção de Competências',
    },
  },
  interfaceName: 'SkillBlock',
  fields: [
    SectionField,
    {
      name: 'skillGroups',
      label: {
        en: 'Skill Groups',
        pt: 'Grupos de Competências',
      },
      labels: {
        singular: {
          en: 'Skill Group',
          pt: 'Grupo de Competências',
        },
        plural: {
          en: 'Skill Groups',
          pt: 'Grupos de Competências',
        },
      },
      type: 'array',
      fields: [
        {
          name: 'name',
          label: {
            en: 'Name',
            pt: 'Nome',
          },
          type: 'text',
          localized: true,
        },
        {
          name: 'list',
          label: {
            en: 'List',
            pt: 'Lista',
          },
          type: 'relationship',
          relationTo: 'skills',
          hasMany: true,
          required: true,
        },
      ],
    },
  ],
};

export default SkillBlock;
