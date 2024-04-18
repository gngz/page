import { z } from 'zod';
import { AssetSchema } from './asset';

export const UserSchema = z
  .object({
    first_name: z.string(),
    last_name: z.string(),
    avatar: AssetSchema.nullable(),
  })
  .transform((user) => {
    return {
      name: `${user.first_name} ${user.last_name}`,
      avatar: user.avatar,
    };
  });
