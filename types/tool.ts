export type ToolSlug =
  | 'hooks-generator'
  | 'youtube-ideas'
  | 'blog-outline'
  | 'social-captions'
  | 'taglines'
  | 'seo-brief'
  | 'task-prioritization'
  | 'color-palette';

type InputType = 'text' | 'textarea' | 'select';

export type ToolField = {
  id: string;
  label: string;
  placeholder?: string;
  helperText?: string;
  type: InputType;
  options?: { label: string; value: string }[];
  required?: boolean;
  maxLength?: number;
};

export type ToolDefinition = {
  slug: ToolSlug;
  name: string;
  description: string;
  longDescription: string;
  category: 'Content' | 'Marketing' | 'Design' | 'Productivity';
  fields: ToolField[];
  resultLabel: string;
};

export type ToolHistoryEntry = {
  id: string;
  tool: ToolSlug;
  input: Record<string, string>;
  output: string;
  createdAt: number;
};
