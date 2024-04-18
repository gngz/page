import { z } from 'zod';

export const SocialNetworkSchema = z.object({
  code: z.enum(['x', 'linkedin', 'github']),
  name: z.string(),
  url: z.string(),
});

export type SocialNetworkModel = z.infer<typeof SocialNetworkSchema>;
