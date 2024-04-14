import { GlobalConfig } from 'payload/types';

const SocialNetworks: GlobalConfig = {
  slug: 'social-networks',
  admin: {
    group: {
      en: 'Configuration',
      pt: 'Configuração',
    },
  },
  label: {
    en: 'Social Networks',
    pt: 'Redes Sociais',
  },
  fields: [
    {
      name: 'networks',
      label: {
        en: 'Social Networks',
        pt: 'Redes Sociais',
      },
      labels: {
        singular: {
          en: 'Social Network',
          pt: 'Rede Social',
        },
        plural: {
          en: 'Social Networks',
          pt: 'Redes Sociais',
        },
      },
      type: 'array',
      fields: [
        {
          name: 'network',
          label: {
            en: 'Network',
            pt: 'Rede',
          },
          type: 'select',
          options: [
            {
              label: 'X (twitter)',
              value: 'X',
            },
            {
              label: 'GitHub',
              value: 'github',
            },
            {
              label: 'LinkedIn',
              value: 'linkedin',
            },
          ],
        },
        {
          name: 'url',
          type: 'text',
          label: {
            en: 'Link',
            pt: 'Endereço',
          },
        },
      ],
    },
  ],
};

export default SocialNetworks;
