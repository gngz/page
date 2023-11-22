import { z } from 'zod';

export const SeoSchema = z
  .object({
    translations: z
      .object({
        title: z.string(),
        description: z.string(),
        keywords: z.string().array(),
      })
      .array()
      .nonempty(),
  })
  .transform((data) => {
    return data.translations.at(0);
  });

export type SeoDTO = z.input<typeof SeoSchema>;
export type SeoModel = z.output<typeof SeoSchema>;
