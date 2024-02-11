import { wordCount } from '@/lib/word-count';
import { isValidPhoneNumber } from 'libphonenumber-js/max';
import { z } from 'zod';

const TelephoneSchema = z
  .string()
  .optional()
  .refine((value) => (value ? isValidPhoneNumber(value) : true), {
    message: 'Please provide a valid phone number.',
  });

export const ContactSchema = z.object({
  name: z
    .string()
    .min(3, { message: 'The name should consist of at least 3 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  phone: z
    .object({
      internationalNumber: TelephoneSchema,
      number: z.string(),
    })
    .optional(),
  subject: z.string().min(4, {
    message: 'The subject must contain a minimum of 4 characters.',
  }),
  message: z
    .string()
    .refine((value) => wordCount(value) >= 10, {
      message: 'The message must contain a minimum of 10 words.',
    })
});

export type ContactModel = z.infer<typeof ContactSchema>;
