import { CollectionConfig } from 'payload/types';
import { ContactBlock, ExperiencesBlock, SkillsBlock } from '../blocks';

const Pages: CollectionConfig = {
  slug: 'pages',
  labels: {
    singular: {
      en: 'Page',
      pt: 'Página',
    },
    plural: {
      en: 'Pages',
      pt: 'Páginas',
    },
  },
  fields: [
    {
      name: 'title',
      label: {
        en: 'Title',
        pt: 'Título',
      },
      admin: {
        position: 'sidebar',
      },
      type: 'text',
      localized: true,
    },
    {
      name: 'slug',
      admin: {
        position: 'sidebar',
      },
      type: 'text',
    },
    {
      name: 'blocks',
      type: 'blocks',
      label: 'Layout',
      labels: {
        singular: {
          en: 'Component',
          pt: 'Componente',
        },
        plural: {
          en: 'Components',
          pt: 'Componentes',
        },
      },
      blocks: [ContactBlock, ExperiencesBlock, SkillsBlock],
    },
  ],
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'slug'],
    preview: (
      doc: {
        breadcrumbs: {
          url: string;
        }[];
      },
      _,
    ) => 'https://diogopassos.pt' + doc.breadcrumbs.at(-1).url,
  },
};

export default Pages;
