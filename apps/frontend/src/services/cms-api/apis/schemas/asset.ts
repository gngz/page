import { z } from 'zod';

export const AssetSchema = z
  .object({
    id: z.string(),
  })
  .transform((data) => data.id);
