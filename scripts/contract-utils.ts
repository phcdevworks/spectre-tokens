import { readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const manifestPath = join(__dirname, '../contract.manifest.json');

export interface TailwindExpectation {
  themePath: string;
  tokenPath: string;
  transform?: 'firstFontFamily';
}

export interface DesignOutput {
  requiredFile: string;
  requiredTopLevelKeys: string[];
}

export interface CssParityGroup {
  sourcePath: string;
  prefixParts: string[];
  hasModes: boolean;
}

export interface OutputParity {
  description: string;
  js: { namespaces: string[] };
  dtcg: { namespaces: string[] };
  css: {
    description: string;
    groups: CssParityGroup[];
    exceptions: string[];
  };
}

export interface ContractManifest {
  version: number;
  publicNamespaces: string[];
  requiredOutputs: {
    js: {
      rootExports: string[];
      rootTypeExports: string[];
      requiredPaths: string[];
      requiredStringPaths: string[];
      spaceLinkedLayoutPaths: string[];
      bannedPaths: string[];
    };
    css: {
      requiredVariables: string[];
      requiredDarkModeVariables: string[];
    };
    design: DesignOutput;
    tailwind: {
      expectations: TailwindExpectation[];
    };
  };
  outputParity: OutputParity;
  protectedSemanticGroups: string[];
  docContract: {
    requiredFiles: string[];
    requiredSectionMarkers: string[];
    tokenContractRequiredHeadings: string[];
  };
  changeClassification: {
    allowed: string[];
    requiredPrefix: string;
  };
}

let cachedManifest: ContractManifest | undefined;

export function loadContractManifest(): ContractManifest {
  if (cachedManifest) {
    return cachedManifest;
  }

  cachedManifest = JSON.parse(readFileSync(manifestPath, 'utf8')) as ContractManifest;
  return cachedManifest;
}

export const formatList = (values: string[]): string => values.join(', ') || '(none)';

export const compareStringSets = (
  expected: string[],
  actual: string[],
  label: string
): void => {
  const expectedSet = new Set(expected);
  const actualSet = new Set(actual);

  const missing = expected.filter((value) => !actualSet.has(value));
  const unexpected = actual.filter((value) => !expectedSet.has(value));

  if (missing.length === 0 && unexpected.length === 0) {
    return;
  }

  throw new Error(
    [
      `${label} do not match contract.manifest.json.`,
      `Missing: ${formatList(missing)}`,
      `Unexpected: ${formatList(unexpected)}`,
      `Manifest: ${formatList(expected)}`,
      `Actual: ${formatList(actual)}`
    ].join('\n')
  );
};

export const getPathValue = (source: unknown, path: string): unknown =>
  path.split('.').reduce<unknown>((acc, key) => {
    if (Array.isArray(acc) && /^\d+$/.test(key)) {
      return acc[Number(key)];
    }
    if (acc && typeof acc === 'object') {
      return (acc as Record<string, unknown>)[key];
    }
    return undefined;
  }, source);

export function findWrappedEntry(value: unknown, path: string[] = []): string | null {
  if (!value || typeof value !== 'object' || Array.isArray(value)) return null;
  const record = value as Record<string, unknown>;
  if ('value' in record || 'metadata' in record) {
    return path.length > 0 ? path.join('.') : '<root>';
  }
  for (const [key, entry] of Object.entries(record)) {
    const found = findWrappedEntry(entry, [...path, key]);
    if (found !== null) return found;
  }
  return null;
}
