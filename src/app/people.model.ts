import { z } from 'zod';

// Extends URL
export const PersonSchema = z.object({
  url: z.string().url(),
  name: z.string(),
  created: z.coerce.date(),
  other: z.string().optional(),
});

export const PeopleSchema = z.object({
  count: z.number(),
  results: z.array(PersonSchema),
});

export type People = z.infer<typeof PeopleSchema>;
export type Person = z.infer<typeof PersonSchema>;
