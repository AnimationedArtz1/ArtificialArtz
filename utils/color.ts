export const clamp = (value: number, min = 0, max = 255) => Math.min(Math.max(value, min), max);

export const parseHex = (hex: string) => {
  const sanitized = hex.replace('#', '');
  if (sanitized.length !== 6) {
    throw new Error('Invalid hex color');
  }
  const bigint = parseInt(sanitized, 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return { r, g, b };
};

export const toHex = (r: number, g: number, b: number) => {
  return `#${[r, g, b]
    .map(value => clamp(Math.round(value)).toString(16).padStart(2, '0'))
    .join('')}`.toUpperCase();
};

export const adjustColor = (hex: string, amount: number) => {
  const { r, g, b } = parseHex(hex);
  return toHex(r + amount, g + amount, b + amount);
};

type PaletteScheme = 'analogous' | 'complementary' | 'triadic' | 'monochromatic';

export const generatePalette = (base: string, scheme: PaletteScheme) => {
  const normalized = base.startsWith('#') ? base : `#${base}`;
  const palette = [normalized];

  switch (scheme) {
    case 'analogous':
      palette.push(adjustColor(normalized, 20));
      palette.push(adjustColor(normalized, -20));
      palette.push(adjustColor(normalized, 40));
      palette.push(adjustColor(normalized, -40));
      break;
    case 'complementary':
      palette.push(adjustColor(normalized, 100));
      palette.push(adjustColor(normalized, -100));
      palette.push(adjustColor(normalized, 60));
      palette.push(adjustColor(normalized, -60));
      break;
    case 'triadic':
      palette.push(adjustColor(normalized, 80));
      palette.push(adjustColor(normalized, -80));
      palette.push(adjustColor(normalized, 40));
      palette.push(adjustColor(normalized, -40));
      break;
    case 'monochromatic':
      palette.push(adjustColor(normalized, 30));
      palette.push(adjustColor(normalized, -30));
      palette.push(adjustColor(normalized, 60));
      palette.push(adjustColor(normalized, -60));
      break;
  }

  return Array.from(new Set(palette)).slice(0, 5);
};
