// Shared design tokens. Import these instead of hard-coding colors/fonts so
// the whole site stays consistent if the palette or type system ever changes.

export const colors = {
  paper: '#F7F8FA',      // page background — cool, near-white
  surface: '#FFFFFF',    // card / panel background
  ink: '#14171F',        // primary text
  slate: '#6B7280',      // secondary text
  faint: '#9CA3AF',      // tertiary text / meta
  line: '#E4E7EC',       // hairline borders & dividers
  accent: '#2F5DFF',     // the one bold color — use sparingly, for signature moments
  accentSoft: '#EAF0FF', // accent tint — hovers, chip backgrounds
};

export const fonts = {
  display: "'Space Grotesk', sans-serif", // headings — carries the personality
  body: "'Inter', sans-serif",            // paragraphs — quiet and legible
  mono: "'IBM Plex Mono', monospace",     // dates, tags, labels — nods to the code editor
};

export const layout = {
  maxWidth: 1080,
};