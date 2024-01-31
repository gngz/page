import { z } from 'zod';
import { UserSchema } from '../../schemas/user';

export const PostSchema = z.object({
  id: z.string().uuid(),
  title: z.string(),
  date_created: z.coerce.date(),
  slug: z.string(),
  preview: z.string(),
  content: z.string(),
  user_created: UserSchema
});

export type PostModel = z.output<typeof PostSchema>;
