import { isPossiblePhoneNumber, isValidPhoneNumber } from 'libphonenumber-js/max';
import { z } from 'zod';

export const ContactSchema = z.object({
    name: z
        .string()
        .min(3, { message: 'The name should consist of at least 3 characters.' }),
    email: z.string().email({ message: 'Please enter a valid email address.' }),
    phone: z.string().optional().refine((value) => (value ? isValidPhoneNumber(value) : true), {
        message:
            "Please provide a valid phone number, including the country code.",
    }),
    subject: z.string().min(4, {
        message: 'The subject must contain a minimum of 4 characters.',
    }),
    message: z
        .string()
        .min(10, { message: 'Your message should be a minimum of 10 characters.' }),
});

export type ContactModel = z.infer<typeof ContactSchema>;
