import { z } from 'zod';

export const RevalidateSchema = z.object({
  tags: z.array(z.string()).or(z.string()),
});
