'use client';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { TelInput } from '@/components/ui/tel-input';
import { Textarea } from '@/components/ui/textarea';
import { zodResolver } from '@hookform/resolvers/zod';
import { PropsWithChildren } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { ContactModel, ContactSchema } from './schemas';
import { SendButton } from './send-button';
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
    handleSubmit,
    reset,
    control,
    formState: { errors, isSubmitting, isDirty, isValid },
  } = useForm<ContactModel>({
    mode: 'onTouched',
    resolver: zodResolver(ContactSchema),
  });

  const canSubmit = isValid && isDirty;

  const onSubmitHandler: SubmitHandler<ContactModel> = async (data) => {
    try {
      await new Promise((resolve) => {
        setTimeout(() => {
          resolve(data);
        }, 2000);
      });

      toast('Contact Form Submitted', {
        description: "Thank you for reaching out. I'll get back to you soon!",
      });
    } finally {
      reset();
    }

    console.log('FORM DATA', data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmitHandler)}>
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
            {errors.phone && (
              <ValidationTooltip
                validationMessage={
                  errors.phone.internationalNumber?.message ?? ''
                }
              />
            )}
          </Label>
          <Controller
            control={control}
            name='phone'
            render={({ field }) => (
              <TelInput {...field} defaultCountry={country} />
            )}
          />
          {errors.phone && (
            <ErrorAlert>{errors.phone.internationalNumber?.message}</ErrorAlert>
          )}
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
          <SendButton disabled={!canSubmit} isLoading={isSubmitting}>
            Send
          </SendButton>
        </div>
      </div>
    </form>
  );
}
