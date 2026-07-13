export function cleanDisplayText(input: string | null | undefined): string {
  if (!input) {
    return '';
  }

  const noTags = input
    .replace(/<script[\s\S]*?<\/script>/gi, ' ')
    .replace(/<style[\s\S]*?<\/style>/gi, ' ')
    .replace(/<[^>]+>/g, ' ');

  const decoded = decodeHtmlEntities(noTags)
    .replace(/\uFFFD/g, ' ')
    .replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g, ' ')
    .replace(/[ \t]+/g, ' ')
    .replace(/\n{3,}/g, '\n\n')
    .trim();

  return decoded;
}

function decodeHtmlEntities(input: string): string {
  const named: Record<string, string> = {
    '&nbsp;': ' ',
    '&amp;': '&',
    '&lt;': '<',
    '&gt;': '>',
    '&quot;': '"',
    '&#39;': "'",
  };

  let output = input.replace(/&(nbsp|amp|lt|gt|quot|#39);/g, (m) => named[m] ?? m);

  output = output.replace(/&#(\d+);/g, (_match, dec) => {
    const codePoint = Number.parseInt(dec, 10);
    if (Number.isNaN(codePoint)) {
      return '';
    }
    try {
      return String.fromCodePoint(codePoint);
    } catch {
      return '';
    }
  });

  output = output.replace(/&#x([0-9a-fA-F]+);/g, (_match, hex) => {
    const codePoint = Number.parseInt(hex, 16);
    if (Number.isNaN(codePoint)) {
      return '';
    }
    try {
      return String.fromCodePoint(codePoint);
    } catch {
      return '';
    }
  });

  return output;
}
