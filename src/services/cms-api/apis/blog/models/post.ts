import { z } from 'zod';

export const PostSchema = z
    .object({
        id: z.string().uuid(),
        title: z.string(),
        date_created: z.string(),
        slug: z.string(),
        preview: z.string(),
        content: z.string()
    })

export type PostModel = z.output<typeof PostSchema>;
