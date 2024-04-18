import { CollectionConfig } from 'payload/types';

const Uploads: CollectionConfig = {
  slug: 'uploads',
  labels: {
    singular: {
      en: 'Upload',
      pt: 'Ficheiro',
    },
    plural: {
      en: 'Uploads',
      pt: 'Ficheiros',
    },
  },
  upload: {
    staticURL: '/uploads',
    staticDir: './uploads',
    mimeTypes: ['image/*'],
  },
  fields: [
    {
      name: 'description',
      label: {
        en: 'Description',
        pt: 'Descrição',
      },
      type: 'text',
      required: true,
    },
  ],
};

export default Uploads;
