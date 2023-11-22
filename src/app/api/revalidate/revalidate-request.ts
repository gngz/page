import { z } from 'zod';

export const RevalidateRequestSchema = z.object({
  tags: z.string().array().or(z.string()),
});
