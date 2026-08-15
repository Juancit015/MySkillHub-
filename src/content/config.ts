import { defineCollection, z } from 'astro:content';

const compatibilityValues = [
  'claude-code',
  'opencode',
  'codex',
  'gemini',
  'cursor',
  'copilot',
  'grok',
  'antigravity',
  'unknown',
] as const;

const skills = defineCollection({
  type: 'content',
  schema: z.object({
    id: z.string(),
    name: z.string(),
    description: z.object({
      en: z.string(),
      es: z.string().optional(),
    }),
    category_id: z.string(),
    subcategory: z.string().nullable().optional(),
    tags: z.array(z.string()).default([]),
    repository: z.string().url(),
    type: z.enum(['skill', 'plugin', 'tool', 'collection']),
    compatibility: z.array(z.enum(compatibilityValues)),
    author: z.string(),
    license: z.string(),
    license_notice: z.enum(['none', 'non-commercial', 'limited']).default('none'),
    version: z.string().nullable().optional(),
    status: z.enum(['ACTIVE', 'UNAVAILABLE', 'ARCHIVED', 'MOVED']).default('ACTIVE'),
    created_at: z.coerce.date(),
    last_checked: z.coerce.date(),
    replaced_by: z.string().optional(),
  }),
});

const categories = defineCollection({
  type: 'data',
  schema: z.object({
    id: z.string(),
    name: z.object({ en: z.string(), es: z.string() }),
    description: z.object({ en: z.string(), es: z.string() }),
    icon: z.string(),
    order: z.number(),
  }),
});

export const collections = { skills, categories };
