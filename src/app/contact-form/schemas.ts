import { z } from "zod";

export const ContactFormSchema = z.object({
  name: z.string().min(3),
  email: z.string().email(),
  phone: z.string(),
  subject: z.string().min(4),
  message: z.string().min(10),
});

export type ContactFormType = z.infer<typeof ContactFormSchema>;
