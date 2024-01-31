import { z } from 'zod';

export const SEOSchema = z
  .object({
    title: z.string(),
    description: z.string(),
    keywords: z.string().array(),
  })

export type SEO = z.infer<typeof SEOSchema>;