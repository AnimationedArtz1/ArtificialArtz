export const logger = {
  info: (...args: unknown[]) => console.info('[ArtificialArtz]', ...args),
  warn: (...args: unknown[]) => console.warn('[ArtificialArtz]', ...args),
  error: (...args: unknown[]) => console.error('[ArtificialArtz]', ...args),
};
