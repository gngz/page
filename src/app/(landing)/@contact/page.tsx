import { useServerCountry } from '@/lib/use-server-country';
import { SectionLayout } from '../components/section-layout';
import { ContactForm } from './contact-form';

export default function Contact() {
  const country = useServerCountry();

  return (
    <SectionLayout
      title='Contact'
      subtitle='Feel free to contact-me.'
      id='contact'
    >
      <ContactForm country={country} />
    </SectionLayout>
  );
}
