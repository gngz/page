'use client';
import { Button, Checkbox } from '@/components/atoms';
import { zodResolver } from '@hookform/resolvers/zod';
import { PropsWithChildren } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { toast } from 'sonner';

import { Input } from '../../../components/old/input';
import { Label } from '../../../components/old/label';
import { Textarea } from '../../../components/old/textarea';
import { TelInput } from '../../../components/ui/tel-input';
import { sendMailAction } from './action/send-mail';
import { CaptchaWidget } from './captcha';
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
    <p role='alert' className='mt-1 h-[1em] text-xs text-red-600'>
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
      await sendMailAction(data);
      toast('Contact Form Submitted', {
        description: "Thank you for reaching out. I'll get back to you soon!",
      });
    } catch {
      toast.error('Uh oh! Something went wrong', {
        description: 'Please try again later.',
      });
    } finally {
      reset();
    }

    console.log('FORM DATA', data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmitHandler)}>
      <div className='grid gap-x-4 gap-y-2 md:mx-auto md:w-4/6 md:grid-cols-2'>
        <div className='md:col-span-2'>
          <Label htmlFor='name' className='mb-2 inline-flex items-center'>
            Name
            <ObligatoryField />
            {errors.name && (
              <ValidationTooltip
                validationMessage={errors.name.message ?? ''}
              />
            )}
          </Label>
          <Input id='name' {...register('name')} type='text' />
          <ErrorAlert>{errors.name?.message}</ErrorAlert>
        </div>
        <div>
          <Label htmlFor='email' className='mb-2 inline-flex items-center'>
            E-mail
            <ObligatoryField />
            {errors.email && (
              <ValidationTooltip
                validationMessage={errors.email.message ?? ''}
              />
            )}
          </Label>
          <Input id='email' {...register('email')} type='email' />
          <ErrorAlert>{errors.email?.message}</ErrorAlert>
        </div>
        <div>
          <Label htmlFor='phone' className='mb-2 inline-flex items-center'>
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
              <TelInput id='phone' {...field} defaultCountry={country} />
            )}
          />
          <ErrorAlert>{errors.phone?.internationalNumber?.message}</ErrorAlert>
        </div>
        <div className='md:col-span-2'>
          <Label htmlFor='subject' className='mb-2 inline-flex items-center'>
            Subject
            <ObligatoryField />
            {errors.subject && (
              <ValidationTooltip
                validationMessage={errors.subject.message ?? ''}
              />
            )}
          </Label>
          <Input id='subject' {...register('subject')} type='text' />
          <ErrorAlert>{errors.subject?.message}</ErrorAlert>
        </div>
        <div className='md:col-span-2'>
          <Label htmlFor='message' className='mb-2 inline-flex items-center'>
            Message
            <ObligatoryField />
            {errors.message && (
              <ValidationTooltip
                validationMessage={errors.message.message ?? ''}
              />
            )}
          </Label>
          <Textarea id='message' {...register('message')} rows={8} />
          <ErrorAlert>{errors.message?.message}</ErrorAlert>
        </div>
        <CaptchaWidget />
        <div className='flex flex-wrap items-start justify-between gap-y-6 md:col-span-2'>
          <div className='flex items-center gap-2'>
            <Controller
              control={control}
              name='acceptTerms'
              render={({ field }) => (
                <Checkbox
                  id='accept-terms'
                  name={field.name}
                  onCheckedChange={field.onChange}
                  onBlur={field.onBlur}
                  checked={field.value}
                  ref={field.ref}
                  disabled={field.disabled}
                  aria-label='I accept that the information sent will be used for contact purposes.'
                />
              )}
            />
            <Label htmlFor='accept-terms'>
              I accept that the information sent will be used for contact
              purposes.
            </Label>
          </div>
          <Button
            type='submit'
            loading={isSubmitting}
            disabled={!canSubmit}
            className='ml-auto'
          >
            Send
          </Button>
        </div>
      </div>
    </form>
  );
}
