import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { TelInput } from '@/components/ui/tel-input';
import { Textarea } from '@/components/ui/textarea';
import { useServerCountry } from '@/lib/use-server-country';
import { SectionLayout } from '../components/section-layout';
import ValidationTooltip from './validation-tooltip';

const ObligatoryField = () => {
  return <span className='text-red-500'>*</span>;
};

export default function Contact() {
  const country = useServerCountry();

  return (
    <SectionLayout
      title='Contact'
      subtitle='Feel free to contact-me.'
      id='contact'
    >
      <form action=''>
        <div className='grid md:grid-cols-2 gap-3 md:w-4/6 md:mx-auto'>
          <div className='md:col-span-2'>
            <Label htmlFor='name' className='inline-block'>
              Name
              <ObligatoryField />
              <ValidationTooltip validationMessage='Name is required' />
            </Label>
            <Input id='name' type='text' />
          </div>
          <div>
            <Label htmlFor='email'>
              E-mail
              <ObligatoryField />
            </Label>
            <Input id='email' type='email' />
          </div>
          <div>
            <Label htmlFor='phone'>Phone Number</Label>
            <TelInput id='phone' type='text' defaultCountry={country} />
          </div>
          <div className='md:col-span-2'>
            <Label htmlFor='subject'>
              Subject
              <ObligatoryField />
            </Label>
            <Input id='subject' type='text' />
          </div>
          <div className='md:col-span-2'>
            <Label htmlFor='message'>
              Message
              <ObligatoryField />
            </Label>
            <Textarea id='message' rows={8} />
          </div>
          <div className='flex justify-end md:col-span-2'>
            <Button type='submit' className='self-end'>
              Send
            </Button>
          </div>
        </div>
      </form>
    </SectionLayout>
  );
}
