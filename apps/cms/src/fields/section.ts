import { Field } from 'payload/types';

const SectionField: Field = {
  type: 'group',
  name: 'section',
  label: {
    en: 'Section Metadata',
    pt: 'Metadados da Secção',
  },
  localized: true,
  fields: [
    {
      name: 'title',
      label: {
        en: 'Title',
        pt: 'Título',
      },
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      label: {
        en: 'Description',
        pt: 'Descrição',
      },
      type: 'textarea',
      required: true,
    },
  ],
};

export default SectionField;
