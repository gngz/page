import { GlobalConfig } from 'payload/types';

const Seo: GlobalConfig = {
  slug: 'seo',
  admin: {
    group: {
      en: 'Configuration',
      pt: 'Configuração',
    },
  },
  label: 'SEO',
  fields: [
    {
      name: 'titlePrefix',
      type: 'text',
      label: {
        en: 'Title Prefix',
        pt: 'Prefixo do Título',
      },
      localized: true,
    },
    {
      name: 'description',
      label: {
        en: 'Description',
        pt: 'Descrição',
      },
      type: 'textarea',
      localized: true,
    },
    {
      name: 'keywords',
      label: {
        en: 'Keywords',
        pt: 'Palavras Chave',
      },
      labels: {
        singular: {
          en: 'Keyword',
          pt: 'Palavra Chave',
        },
        plural: {
          en: 'Keywords',
          pt: 'Palavras Chave',
        },
      },
      type: 'array',
      fields: [
        {
          name: 'keyword',
          label: {
            en: 'Keyword',
            pt: 'Palavra Chave',
          },
          type: 'text',
        },
      ],
      localized: true,
    },
  ],
};

export default Seo;
