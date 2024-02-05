import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { SectionLayout } from '../components/section-layout';

export default function Contact() {
  return (
    <SectionLayout
      title='Contact'
      subtitle='Feel free to contact-me.'
      id='contact'
    >
      <form action=''>
        <div className='grid md:grid-cols-2 gap-3 md:w-4/6 md:mx-auto'>
          <div className='md:col-span-2'>
            <Label htmlFor='name'>Name</Label>
            <Input id='name' type='text' />
          </div>
          <div>
            <Label htmlFor='email'>E-mail</Label>
            <Input id='email' type='email' />
          </div>
          <div>
            <Label htmlFor='phone'>Phone Number</Label>
            <Input id='phone' type='text' />
          </div>
          <div className='md:col-span-2'>
            <Label htmlFor='subject'>Subject</Label>
            <Input id='subject' type='text' />
          </div>
          <div className='md:col-span-2'>
            <Label htmlFor='message'>Message</Label>
            <Textarea id='message' />
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
