import { CollectionConfig } from 'payload/types';

const Skills: CollectionConfig = {
  slug: 'skills',
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['image', 'name'],
  },
  labels: {
    singular: {
      en: 'Skill',
      pt: 'Competência',
    },
    plural: {
      en: 'Skills',
      pt: 'Competências',
    },
  },
  fields: [
    {
      name: 'name',
      label: {
        en: 'Name',
        pt: 'Nome',
      },
      type: 'text',
      required: true,
    },
    {
      name: 'image',
      label: {
        en: 'Image',
        pt: 'Imagem',
      },
      type: 'upload',
      relationTo: 'uploads',
      filterOptions: {
        mimeType: { contains: 'image' },
      },
      required: true,
    },
  ],
};

export default Skills;
