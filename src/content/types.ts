import { z } from "astro:content";

export const ArticleSchema = z.object({
    title: z.string(),
    description: z.string(),
    category: z.string(),
    tags: z.array(z.string()),
    time: z.date(),
    draft: z.boolean().default(false),
});

export type ArticleType = z.infer<typeof ArticleSchema>;
