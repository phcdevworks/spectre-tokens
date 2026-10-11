// The canonical list lives here, apart from element-coverage.json, so that
// deleting a mapping cannot also delete the element it was meant to cover.

// Element index of the WHATWG HTML Living Standard (obsolete elements excluded)
export const HTML_ELEMENTS = [
  'a',
  'abbr',
  'address',
  'area',
  'article',
  'aside',
  'audio',
  'b',
  'base',
  'bdi',
  'bdo',
  'blockquote',
  'body',
  'br',
  'button',
  'canvas',
  'caption',
  'cite',
  'code',
  'col',
  'colgroup',
  'data',
  'datalist',
  'dd',
  'del',
  'details',
  'dfn',
  'dialog',
  'div',
  'dl',
  'dt',
  'em',
  'embed',
  'fieldset',
  'figcaption',
  'figure',
  'footer',
  'form',
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
  'head',
  'header',
  'hgroup',
  'hr',
  'html',
  'i',
  'iframe',
  'img',
  'input',
  'ins',
  'kbd',
  'label',
  'legend',
  'li',
  'link',
  'main',
  'map',
  'mark',
  'math',
  'menu',
  'meta',
  'meter',
  'nav',
  'noscript',
  'object',
  'ol',
  'optgroup',
  'option',
  'output',
  'p',
  'picture',
  'pre',
  'progress',
  'q',
  'rp',
  'rt',
  'ruby',
  's',
  'samp',
  'script',
  'search',
  'section',
  'select',
  'selectedcontent',
  'slot',
  'small',
  'source',
  'span',
  'strong',
  'style',
  'sub',
  'summary',
  'sup',
  'svg',
  'table',
  'tbody',
  'td',
  'template',
  'textarea',
  'tfoot',
  'th',
  'thead',
  'time',
  'title',
  'tr',
  'track',
  'u',
  'ul',
  'var',
  'video',
  'wbr'
] as const

export const PSEUDO_ELEMENTS = [
  '::after',
  '::backdrop',
  '::before',
  '::cue',
  '::details-content',
  '::file-selector-button',
  '::first-letter',
  '::first-line',
  '::marker',
  '::placeholder',
  '::selection',
  '::spelling-error',
  '::grammar-error',
  '::target-text'
] as const

export type CoverageEntry =
  { tokens: string[]; note?: string } | { styling: 'none'; note: string }

export interface ElementCoverage {
  elements: Record<string, CoverageEntry>
  pseudoElements: Record<string, CoverageEntry>
}

const resolves = (root: unknown, path: string): boolean => {
  let current: unknown = root
  for (const part of path.split('.')) {
    if (current === null || typeof current !== 'object' || !(part in current))
      return false
    current = (current as Record<string, unknown>)[part]
  }
  return true
}

const checkGroup = (
  label: string,
  canonical: readonly string[],
  entries: Record<string, CoverageEntry>,
  tokens: unknown
): string[] => {
  const problems: string[] = []
  canonical.forEach((name) => {
    if (!(name in entries)) problems.push(`${label} ${name} is not mapped`)
  })
  Object.entries(entries).forEach(([name, entry]) => {
    if (!canonical.includes(name)) {
      problems.push(`${label} ${name} is not in the canonical list`)
      return
    }
    if ('styling' in entry) {
      if (!entry.note)
        problems.push(
          `${label} ${name} is marked "no visual styling" without a note`
        )
      return
    }
    if (entry.tokens.length === 0)
      problems.push(`${label} ${name} maps to no tokens`)
    entry.tokens.forEach((path) => {
      if (!resolves(tokens, path))
        problems.push(`${label} ${name} maps to ${path}, which does not exist`)
    })
  })
  return problems
}

export const findCoverageProblems = (
  coverage: ElementCoverage,
  tokens: unknown
): string[] => [
  ...checkGroup('Element', HTML_ELEMENTS, coverage.elements, tokens),
  ...checkGroup(
    'Pseudo-element',
    PSEUDO_ELEMENTS,
    coverage.pseudoElements,
    tokens
  )
]
