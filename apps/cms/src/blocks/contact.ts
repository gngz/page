import { Block } from 'payload/types';
import { SectionField } from '../fields';

const ContactBlock: Block = {
  slug: 'contact-block',
  labels: {
    singular: {
      en: 'Contact Section',
      pt: 'Secção de Contacto',
    },
    plural: {
      en: 'Contact Section',
      pt: 'Secção de Contacto',
    },
  },
  interfaceName: 'ContactBlock',
  fields: [SectionField],
};

export default ContactBlock;
