'use client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { TelInput } from '@/components/ui/tel-input';
import { Textarea } from '@/components/ui/textarea';
import { zodResolver } from '@hookform/resolvers/zod';
import { PropsWithChildren } from 'react';
import { useForm } from 'react-hook-form';
import { ContactModel, ContactSchema } from './schemas';
import { ValidationTooltip } from './validation-tooltip';

type Props = {
  country?: string;
};

const ObligatoryField = () => {
  return <span className='text-red-500'>*</span>;
};

const ErrorAlert = ({ children }: PropsWithChildren) => {
  return (
    <p role='alert' className='text-red-600 mt-2'>
      {children}
    </p>
  );
};

export function ContactForm({ country = 'PT' }: Readonly<Props>) {
  const {
    register,
    formState: { errors },
  } = useForm<ContactModel>({
    mode: 'onBlur',
    resolver: zodResolver(ContactSchema),
  });

  return (
    <form action=''>
      <div className='grid md:grid-cols-2 gap-3 md:w-4/6 md:mx-auto'>
        <div className='md:col-span-2'>
          <Label htmlFor='name' className='inline-flex items-center mb-2'>
            Name
            <ObligatoryField />
            {errors.name && (
              <ValidationTooltip
                validationMessage={errors.name.message ?? ''}
              />
            )}
          </Label>
          <Input {...register('name')} type='text' />
          {errors.name && <ErrorAlert>{errors.name.message}</ErrorAlert>}
        </div>
        <div>
          <Label htmlFor='email' className='inline-flex items-center mb-2'>
            E-mail
            <ObligatoryField />
            {errors.email && (
              <ValidationTooltip
                validationMessage={errors.email.message ?? ''}
              />
            )}
          </Label>
          <Input {...register('email')} type='email' />
          {errors.email && <ErrorAlert>{errors.email.message}</ErrorAlert>}
        </div>
        <div>
          <Label htmlFor='phone' className='inline-flex items-center mb-2'>
            Phone Number
          </Label>
          <TelInput id='phone' defaultCountry={country} />
        </div>
        <div className='md:col-span-2'>
          <Label htmlFor='subject' className='inline-flex items-center mb-2'>
            Subject
            <ObligatoryField />
            {errors.subject && (
              <ValidationTooltip
                validationMessage={errors.subject.message ?? ''}
              />
            )}
          </Label>
          <Input {...register('subject')} type='text' />
          {errors.subject && <ErrorAlert>{errors.subject.message}</ErrorAlert>}
        </div>
        <div className='md:col-span-2'>
          <Label htmlFor='message' className='inline-flex items-center mb-2'>
            Message
            <ObligatoryField />
            {errors.message && (
              <ValidationTooltip
                validationMessage={errors.message.message ?? ''}
              />
            )}
          </Label>
          <Textarea {...register('message')} rows={8} />
          {errors.message && <ErrorAlert>{errors.message.message}</ErrorAlert>}
        </div>
        <div className='flex justify-end md:col-span-2'>
          <Button type='submit' className='self-end'>
            Send
          </Button>
        </div>
      </div>
    </form>
  );
}
