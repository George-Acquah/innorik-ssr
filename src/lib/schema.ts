import { z } from "zod";

// Comments schema for nested validation within Blog
const commentsSchema = z.object({
  body: z.string(),
  date: z.date(),
});

// Main blog schema
const blogSchema = z.object({
  title: z.string().min(1, "Title is required").max(200, "Title is too long"),
  author: z.string().min(1, "Author is required"),
  content: z.string().min(1, "Content is required"),
  hidden: z.boolean().optional(),
  tags: z.string().optional(),
  category: z.string().optional(),
  meta: z
    .object({
      votes: z.number().optional().default(0),
      favs: z.number().optional().default(0),
    })
    .optional(),
  comments: z.array(commentsSchema).optional(),
});

export { blogSchema };
