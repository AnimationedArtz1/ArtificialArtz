import { generatePalette } from '@/utils/color';
import type { ToolSlug } from '@/types/tool';

const formatList = (items: string[]) => items.map(item => `• ${item}`).join('\n');

const hookTemplate = (framework: string, name: string, description: string) => {
  switch (framework) {
    case 'angular':
      return `// ${description}\nimport { Injectable, Signal, signal } from '@angular/core';\n\n@Injectable({ providedIn: 'root' })\nexport class ${name.replace(/^[a-z]/, char => char.toUpperCase())}Hook {\n  private state: Signal<unknown> = signal(null);\n\n  get value() {\n    return this.state();\n  }\n\n  setValue(next: unknown) {\n    this.state.set(next);\n  }\n}\n`;
    case 'vue':
      return `// ${description}\nimport { ref, computed, onMounted } from 'vue';\n\nexport const use${name.replace(/^[a-z]/, char => char.toUpperCase())} = () => {\n  const state = ref(null);\n\n  const setValue = (value) => {\n    state.value = value;\n  };\n\n  const isReady = computed(() => state.value !== null);\n\n  onMounted(() => {\n    // initialization logic\n  });\n\n  return { state, setValue, isReady };\n};\n`;
    default:
      return `// ${description}\nimport { useCallback, useState } from 'react';\n\nexport const use${name.replace(/^[a-z]/, char => char.toUpperCase())} = () => {\n  const [state, setState] = useState(null);\n\n  const update = useCallback((value) => {\n    setState(value);\n  }, []);\n\n  return { state, update };\n};\n`;
  }
};

const generateYoutubeIdeas = (topic: string, tone: string, audience: string) => {
  const toneMap: Record<string, string> = {
    informative: 'insider breakdown',
    entertaining: 'high-energy spotlight',
    educational: 'step-by-step walkthrough',
    inspiring: 'visionary story',
  };

  return [
    `TITLE: ${topic}: ${toneMap[tone] || 'deep dive'} for ${audience}\nDESCRIPTION: Explore ${topic} with a ${tone} vibe tailored for ${audience}. Learn strategies, examples, and tools to level up fast.\nKEY POINTS: intro hook • main framework • real example • call-to-action`,
    `TITLE: ${audience.toUpperCase()} vs ${topic}: What No One Shares\nDESCRIPTION: A candid, ${tone} breakdown with proven tips, lessons learned, and templates tailored to ${audience}.`,
    `TITLE: Inside the ${topic} Playbook for ${audience}\nDESCRIPTION: Blueprint-style video covering foundations, advanced moves, and bonus resources for ${audience}.`,
  ].join('\n\n');
};

const generateBlogOutline = (title: string, keywords: string, wordCount: string) => {
  const sections = [
    'Introduction with compelling hook and thesis',
    'Section 1: Core problem/opportunity overview',
    'Section 2: Tactical framework or methodology',
    'Section 3: Case study or real-world example',
    'Section 4: Tools, resources, and next steps',
    'Conclusion with summary and call-to-action',
  ];

  return `TITLE: ${title}\nTARGET LENGTH: ${wordCount}+ words\nKEYWORDS: ${keywords}\n\nOUTLINE:\n${formatList(sections)}`;
};

const generateSocialCaptions = (platform: string, content: string, tone: string) => {
  const callToActions: Record<string, string[]> = {
    instagram: ['Double tap if you agree', 'Save this for later', 'Share with a creator friend'],
    twitter: ['Retweet to spark the convo', 'Your move—quote this', '#buildinpublic starts here'],
    linkedin: ['Let’s connect on this insight', 'Drop your strategy in the comments', 'Ready to collaborate?'],
    facebook: ['Tag a teammate who needs this', 'Drop your thoughts below', 'Share this with your community'],
  };

  const toneMap: Record<string, string> = {
    professional: 'Professional insight',
    casual: 'Inside look',
    humorous: 'Hot take',
    inspirational: 'Momentum check-in',
  };

  const ctas = callToActions[platform] || callToActions.instagram;

  return [
    `${toneMap[tone]} → ${content}\n${ctas[0]} ${platform === 'twitter' ? '#CreatorOps' : ''}`,
    `Behind the scenes: ${content}\n${ctas[1]}`,
    `Next-level move for ${platform} pros → ${content}\n${ctas[2]}`,
  ].join('\n\n');
};

const generateTaglines = (brand: string, industry: string, values: string) => {
  return [
    `${brand}: ${values.split(',')[0]?.trim() || 'Next-level'} ${industry} reimagined`,
    `${brand} — where ${values.split(',').slice(0, 2).join(' & ').trim()} meet momentum`,
    `${industry} made effortless with ${brand}`,
    `${brand}: powering ${values.split(',').pop()?.trim() || 'breakthroughs'} for ${industry} leaders`,
    `${brand} • ${values.replace(/,\s*/g, ' • ')}`,
  ].join('\n');
};

const generateSeoBrief = (topic: string, keyword: string, contentType: string) => {
  const headings = [
    `H1: ${topic}`,
    'H2: Why it matters right now',
    'H2: Key frameworks and methodologies',
    'H2: Tools, checklists, and templates',
    'H2: Examples and case studies',
    'H2: Implementation roadmap',
    'H3: Rapid-fire FAQ',
  ];

  return `PRIMARY KEYWORD: ${keyword}\nCONTENT TYPE: ${contentType}\n\nMETA TITLE: ${topic} — Complete Guide for ${new Date().getFullYear()}\nMETA DESCRIPTION: Dive into ${topic} with this action-focused guide. Learn frameworks, best practices, and tools built for ${contentType} teams.\n\nHEADERS:\n${formatList(headings)}\n\nINTERNAL LINKS:\n• /tools\n• /services\n\nCTAS:\n• Start building with our AI tools\n• Book a creative automation session`;
};

const generateTaskPrioritization = (tasksInput: string) => {
  const tasks = tasksInput
    .split('\n')
    .map(task => task.trim())
    .filter(Boolean);

  const matrix = {
    urgentImportant: [] as string[],
    notUrgentImportant: [] as string[],
    urgentNotImportant: [] as string[],
    notUrgentNotImportant: [] as string[],
  };

  tasks.forEach(task => {
    const lower = task.toLowerCase();
    if (lower.includes('today') || lower.includes('urgent') || lower.includes('asap')) {
      if (lower.includes('review') || lower.includes('strategy') || lower.includes('meeting')) {
        matrix.urgentImportant.push(task);
      } else {
        matrix.urgentNotImportant.push(task);
      }
    } else if (lower.includes('plan') || lower.includes('draft') || lower.includes('research')) {
      matrix.notUrgentImportant.push(task);
    } else {
      matrix.notUrgentNotImportant.push(task);
    }
  });

  return `Eisenhower Matrix Summary\n\nDo First (Urgent + Important):\n${formatList(matrix.urgentImportant)}\n\nSchedule (Not Urgent + Important):\n${formatList(matrix.notUrgentImportant)}\n\nDelegate (Urgent + Not Important):\n${formatList(matrix.urgentNotImportant)}\n\nEliminate (Not Urgent + Not Important):\n${formatList(matrix.notUrgentNotImportant)}`;
};

const generateColorPalette = (baseColor: string, scheme: string) => {
  try {
    type PaletteScheme = 'analogous' | 'complementary' | 'triadic' | 'monochromatic';
    const palette = generatePalette(baseColor, scheme as PaletteScheme);
    const cssVariables = palette
      .map((color, index) => `  --color-${index + 1}: ${color};`)
      .join('\n');

    return `Palette based on ${baseColor} (${scheme})\n\nColors:\n${palette.map(color => `• ${color}`).join('\n')}\n\nCSS Variables:\n:root {\n${cssVariables}\n}`;
  } catch (error) {
    return `Unable to generate palette. Please ensure the base color is a valid HEX code. Error: ${String(
      error,
    )}`;
  }
};

export const generateToolResult = async (tool: ToolSlug, input: Record<string, string>) => {
  await new Promise(resolve => setTimeout(resolve, 800 + Math.random() * 700));

  switch (tool) {
    case 'hooks-generator':
      return hookTemplate(input.framework, input.hookName, input.description);
    case 'youtube-ideas':
      return generateYoutubeIdeas(input.topic, input.tone, input.targetAudience);
    case 'blog-outline':
      return generateBlogOutline(input.title, input.keywords, input.wordCount);
    case 'social-captions':
      return generateSocialCaptions(input.platform, input.content, input.tone);
    case 'taglines':
      return generateTaglines(input.brandName, input.industry, input.values);
    case 'seo-brief':
      return generateSeoBrief(input.topic, input.primaryKeyword, input.contentType);
    case 'task-prioritization':
      return generateTaskPrioritization(input.tasks);
    case 'color-palette':
      return generateColorPalette(input.baseColor, input.scheme);
    default:
      return 'This tool is not yet implemented.';
  }
};
